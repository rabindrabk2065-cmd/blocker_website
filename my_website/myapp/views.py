from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .models import dProject, Contact, Project, Webnote, Blog, CV, Profile
from django.contrib.auth.models import User


# =========================
# HOME
# =========================

def home(request):

    projects = Project.objects.all()

    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        Contact.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message
        )

        return redirect("home")

    context = {
        "projects": projects
    }

    return render(request, "home.html", context)


# =========================
# BLOG
# =========================

def blog(request):

    featured_blog = Blog.objects.first()
    blogs = Blog.objects.all()

    context = {
        "featured_blog": featured_blog,
        "blogs": blogs
    }

    return render(request, "blog.html", context)


# =========================
# NOTES
# =========================

def note(request):
    return render(request, "note.html")


def explore(request):
    return render(request, "explore.html")


def mathIII(request):
    return render(request, "mathIII.html")


def java(request):
    return render(request, "java.html")


def web(request):

    notes = Webnote.objects.all()

    return render(request, "web.html", {
        "notes": notes
    })


def microprocessor(request):
    return render(request, "microprocessor.html")


# =========================
# LOGIN
# =========================

def login_view(request):

    # पहिले नै login छ भने dashboard मा पठाउने
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

            # Django session create हुन्छ
            login(request, user)

            return redirect("dashboard")

        else:

            return render(request, "login.html", {
                "error": "Invalid username or password"
            })

    return render(request, "login.html")


# =========================
# DASHBOARD
# =========================

@login_required(login_url="login")
def dashboard(request):

    # सबै projects
    projects = Project.objects.all()

    # Login भएको user को profile खोज्ने
    # छैन भने automatically create गर्ने
    profile, created = Profile.objects.get_or_create(
        user=request.user
    )

    context = {

        # Projects
        "projects": projects,
        "project_count": projects.count(),

        # Messages
        "message_count": Contact.objects.count(),

        # Profile
        "profile": profile,

        # अहिले Note model प्रयोग नगरेको
        # "note_count": Note.objects.count(),

    }

    return render(
        request,
        "dashboard.html",
        context
    )


# =========================
# EDIT PROFILE
# =========================

@login_required(login_url="login")
def edit_profile(request):

    # Current logged-in user को profile
    profile, created = Profile.objects.get_or_create(
        user=request.user
    )

    if request.method == "POST":

        # Photo upload
        if request.FILES.get("photo"):

            profile.photo = request.FILES["photo"]

        # Bio
        profile.bio = request.POST.get("bio", "")

        # Database मा save
        profile.save()

        return redirect("dashboard")

    context = {
        "profile": profile
    }

    return render(
        request,
        "edit_profile.html",
        context
    )


# =========================
# LOGOUT
# =========================

def logout_view(request):

    logout(request)

    return redirect("login")


# =========================
# REGISTER
# =========================

def register_view(request):

    if request.method == "POST":

        username = request.POST.get("username")
        email = request.POST.get("email")
        password = request.POST.get("password")
        confirm_password = request.POST.get("confirm_password")

        # Password check
        if password != confirm_password:

            return render(request, "register.html", {
                "error": "Passwords do not match"
            })

        # Username check
        if User.objects.filter(
            username=username
        ).exists():

            return render(request, "register.html", {
                "error": "Username already exists"
            })

        # Email check
        if User.objects.filter(
            email=email
        ).exists():

            return render(request, "register.html", {
                "error": "Email already exists"
            })

        # User create
        User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        return redirect("login")

    return render(request, "register.html")


# =========================
# CV
# =========================

def cv(request):

    cv = CV.objects.first()

    return render(
        request,
        "cv.html",
        {
            "cv": cv
        }
    )
# =========================
# add project
# =========================
@login_required(login_url="login")
def add_project(request):

    if request.method == "POST":

        title = request.POST.get("title")
        description = request.POST.get("description")
        github = request.POST.get("github")
        demo = request.POST.get("demo")
        database = request.POST.get("database")
        backendtools = request.POST.get("backendtools")
        html = request.POST.get("html")
        css = request.POST.get("css")
        js = request.POST.get("js")
        image = request.FILES.get("image")

        Project.objects.create(
            title=title,
            description=description,
            github=github,
            demo=demo,
            database=database,
            backendtools=backendtools,
            html=html,
            css=css,
            js=js,
            image=image
        )

        return redirect("project")

    return render(request, "add_project.html")