from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class Message(models.Model):
    dialog = models.ForeignKey('Dialog', related_name='message', on_delete=models.CASCADE, null=True)
    sender = models.ForeignKey(User, related_name='message', on_delete=models.CASCADE, null=True)
    body = models.TextField(max_length=300)
    created = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return f'{self.sender.username}: {self.body}'


class Dialog(models.Model):
    participants = models.ManyToManyField(User, related_name='dialog')


class Profile(models.Model):
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    image_src = models.URLField(default='', null=True)
    status = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.owner.username}\'s profile'


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(owner=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
