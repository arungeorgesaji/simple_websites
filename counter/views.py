from django.shortcuts import render
from django.http import HttpResponse

def counter(request):
   return render(request,'counter.html')