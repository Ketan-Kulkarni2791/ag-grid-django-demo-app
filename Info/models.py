from django.db import models


class PersonalInfo(models.Model):
    Id = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=100)
    Address = models.CharField(max_length=150)
    Age = models.IntegerField()
    IsMarried = models.BooleanField(default=False)
    Occupation = models.CharField(max_length=100)
    Income = models.CharField(max_length=100)
    status = models.CharField(max_length=10, default="ACTIVE")

