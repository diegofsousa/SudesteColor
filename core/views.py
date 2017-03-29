from django.shortcuts import render
from .models import Produtos

def home(request):
	produtos = Produtos.objects.all()
	return render(request, 'home.html', {'produtos':produtos})
	