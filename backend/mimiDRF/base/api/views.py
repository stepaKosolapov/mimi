from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth.models import User
from base.models import Dialog
from .serializers import DialogSerializer, MessageSerializer, ProfileSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['username'] = user.first_name + ' ' +  user.last_name
        token['image_src'] = user.profile.image_src
        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        'token/',
        'token/refresh/',
        'dialogs/',
        'messages/id/',
        'profile/id/',
    ]
    return Response(routes)


# host = User.objects.get(pk=1)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getDialogs(request):
    host = request.user
    dialogs = Dialog.objects.filter(participants__in=[host])
    serializer = DialogSerializer(host, dialogs, many=True)
    serializer.is_valid()
    return Response(serializer.data)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def messages(request, pk):
    host = request.user
    try:
        if request.method == 'GET':
            page = request.query_params.get('page')
            page = 0 if (not page) or (int(page) < 0) else int(page)
            pageSize = request.query_params.get('size')
            pageSize = 100 if (not pageSize) or (int(pageSize) <= 0) else int(pageSize)

            dialogWith = User.objects.filter(id=pk)
            if len(dialogWith) == 0:
                return Response({'error': 'User does not exist:'})
            dialogWith = dialogWith.first()

            dialog = Dialog.objects.filter(participants__in=[host]).filter(participants__in=[dialogWith])
            if len(dialog) == 0:
                return Response([])
            msg = dialog.first().message.all()[(page * pageSize):((page + 1) * pageSize)]
            serializer = MessageSerializer(msg, many=True)
            return Response(serializer.data)
        elif request.method == 'POST':
            dialogWith = User.objects.get(pk=pk)
            dialog = Dialog.objects.filter(participants__in=[host]).filter(participants__in=[dialogWith])
            if len(dialog) == 0:
                dialog = Dialog.objects.create()
                dialog.participants.set([host, dialogWith])
            else:
                dialog = dialog.first()
            serializer = MessageSerializer(data=request.data)
            isValid = serializer.is_valid()
            if isValid:
                dialog.message.create(sender=host, body=serializer.data['body'])
            return Response('Successfully sent!')
    except:
        return Response('Something went wrong!')


@api_view(['GET'])
def profile(request, pk):
    userProfile = User.objects.filter(id=pk)
    if len(userProfile) == 0:
        return Response({'error': 'User does not exist:'})
    userProfile = userProfile.first().profile
    serializer = ProfileSerializer(userProfile)
    return Response(serializer.data)
