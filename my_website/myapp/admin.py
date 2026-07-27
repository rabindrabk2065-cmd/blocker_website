from django.contrib import admin
from .models import Contact
from .models import Project
from .models import Webnote
from .models import UserData
from .models import dProject
from .models import Blog
from .models import CV

# Register your models here.
admin.site.register(Contact)
admin.site.register(Project)
admin.site.register(Webnote)
admin.site.register(UserData)
admin.site.register(dProject)
admin.site.register(Blog)
admin.site.register(CV)
