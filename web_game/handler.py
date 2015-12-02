__author__ = 'Tim'

from django.shortcuts import render

def home(request):
    return render(request, 'main.html', {})

def about(request):
    return render(request, 'about.html', {})