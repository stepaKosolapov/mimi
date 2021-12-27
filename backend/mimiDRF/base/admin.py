from django.contrib import admin

# Register your models here.

from .models import Dialog, Message, Profile

admin.site.register(Dialog)
admin.site.register(Message)
admin.site.register(Profile)
