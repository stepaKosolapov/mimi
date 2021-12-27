from base.models import Dialog, Message, Profile
from django.contrib.auth.models import User
from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer


class MessageSerializer(ModelSerializer):
    class Meta:
        model = Message
        fields = ['id', 'sender', 'body', 'created']


class DialogSerializer(ModelSerializer):
    def __init__(self, host, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.host = host

    lastMessage = SerializerMethodField()
    person = SerializerMethodField()

    def get_lastMessage(self, dialog):
        if len(dialog.message.all()) == 0:
            return None
        return MessageSerializer(dialog.message.last(), many=False).data

    def get_person(self, dialog):
        return ProfileSerializer(dialog.participants.exclude(id=self.host.id).last().profile, many=False).data

    class Meta:
        model = Dialog
        fields = ['id', 'person', 'lastMessage']


class ProfileSerializer(ModelSerializer):
    username = SerializerMethodField()

    def get_username(self, profile):
        return profile.owner.first_name + ' ' + profile.owner.last_name

    class Meta:
        model = Profile
        fields = ['id', 'username', 'image_src', 'status']
