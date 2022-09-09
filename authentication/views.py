from telnetlib import LOGOUT
from django.shortcuts import redirect, render
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.contrib.auth import authenticate,login, logout
# from django_email_verification import sendConfirm
from django.contrib.auth import get_user_model

# Create your views here.

def home(request):
    return render(request, 'authentication\index.html')

def faith_center(request):
    return render(request, 'authentication/faith_center.html')

def rani_sati(request):
    return render(request, 'authentication/rani_sati.html')

def buddha(request):
    return render(request, 'authentication/buddha.html')

def tridev(request):
    return render(request, 'authentication/tridev.html')

def somnath(request):
    return render(request, 'authentication/somnath.html')

def rishikesh(request):
    return render(request, 'authentication/rishikesh.html')

def tirupati(request):
    return render(request, 'authentication/tirupati.html')

def meenakshi(request):
    return render(request, 'authentication/meenakshi.html')

def kanchipuram(request):
    return render(request, 'authentication/kanchipuram.html')

def signup(request):
    if request.method == 'POST':
        username = request.POST['username']
        fname = request.POST['fname']
        lname = request.POST['lname']
        email = request.POST['email']
        pass1 = request.POST['pass1']
        pass2 = request.POST['pass2']

        if pass1==pass2:
            

            myuser = User.objects.create_user(username, email, pass1)
            myuser.first_name = fname
            myuser.last_name = lname

            myuser.save()

            messages.success(request, "your account has been successfully created.")
            return redirect('signin')

        else:
            messages.error(request, "passwords don't match!!")

            return redirect('signup')
        


    return render(request, 'authentication\signup.html')

def signin(request):
    if request.method == 'POST':
        username = request.POST['username']
        pass1 = request.POST['pass1']

        user = authenticate(username = username, password = pass1)

        if user is not None:
            login(request,user)
            fname = user.first_name
            return render(request, 'authentication/index2.html',{'fname':fname})

        else:
            messages.error(request, "bad credentials")
            return redirect('signin')

    return render(request, 'authentication\signin.html')

def signout(request):
    logout(request)
    messages.success(request, "logged out successfully")
    return redirect('home')

# def sendEmail(request):
#     password = request.post.get('pass1')
#     username = request.post.get('username')
#     email = request.post.get('email')
#     user = get