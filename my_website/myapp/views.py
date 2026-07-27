from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import dProject
from .models import Contact
from .models import Project
from .models import Webnote
from .models import Blog
from .models import CV

# Create your views here.
def home(request):

    Projects = Project.objects.all()

    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")
        Contact.objects.create(
            name = name,
            email = email,
            subject = subject,
            message = message
        )
        return redirect('home')

    context = {
        'projects': Projects
    }

    return render(request,'home.html',context)

def blog(request):

    featured_blog = Blog.objects.first()
    
    blogs = Blog.objects.all()
    
    context = {
            "featured_blog": featured_blog,
            "blogs": blogs
        }
    return render(request,'blog.html',context)


def note(request):

    return render(request,'note.html')

def explore(request):
    
    return render(request,'explore.html')
#note all views
def mathIII(request):

    return render(request,'mathIII.html')

def java(request):
    return render(request,'java.html')

def web(request):
    notes = Webnote.objects.all()

    return render(request,'web.html',{'notes':notes})

def microprocessor(request):
    return render(request,'microprocessor.html')

def login_view(request):

    # यदि पहिले नै login छ भने dashboard मा पठाउने
    if request.user.is_authenticated:
        return redirect("dashboard")

    if request.method == "POST":

        username = request.POST.get("username")
        password = request.POST.get("password")

        user = authenticate(
            request,
            username=username,
            password=password
        )

        if user is not None:
            login(request, user)
            return redirect("dashboard")
        else:
            return render(request, "login.html", {
                "error": "Invalid username or password"
            })

    return render(request, "login.html")

   

@login_required(login_url="login")
def dashboard(request):

    projects = Project.objects.all()

    context = {
        "projects": projects,
        "project_count": projects.count(),
        "message_count": Contact.objects.count(),
        #"note_count": Note.objects.count(),
    }

    return render(request, "dashboard.html", context)


def logout_view(request):
    logout(request)
    return redirect("login")

def cv(request):
    cv = CV.objects.first()

    return render(request,'cv.html',{'cv':cv})