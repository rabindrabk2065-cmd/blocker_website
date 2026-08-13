from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    subject = models.CharField(max_length=10)
    message = models.TextField()
    def __str__(self):
        return self.name
    
class Project(models.Model):

    title = models.CharField(max_length=100)

    image = models.ImageField(upload_to="projects/",blank=True)

    description = models.TextField()

    github = models.URLField(blank=True)

    demo = models.URLField(blank=True)
    
    database = models.CharField(max_length=10,blank=True)
    backendtools = models.CharField(max_length=20)
    html = models.CharField(max_length=10,blank=True)
    css = models.CharField(max_length=10,blank=True)
    js = models.CharField(max_length=10,blank=True)

    def __str__(self):
        return self.title
    
class Webnote(models.Model):
    title = models.CharField(max_length=20,blank=True)
    pdf = models.FileField(upload_to='notes/')
    image = models.ImageField(upload_to='image/',blank=True)

    def __str__(self):
        return self.title

class UserData(models.Model):
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.username
    #
    from django.db import models

class dProject(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="projects/")
    technology = models.CharField(max_length=200)
    github = models.URLField(blank=True)
    demo = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Blog(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    image = models.ImageField(upload_to="blogs/")
    short_description = models.TextField()
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title    

# === cv model ===
from django.db import models

class CV(models.Model):
    resume = models.FileField(upload_to="cv/")
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "My CV"