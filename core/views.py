from django.shortcuts import render, HttpResponse
from .models import Produto, Slide
from django.contrib.auth.models import User
import json
from django.core.mail import send_mail, EmailMessage
from datetime import datetime

def home(request):
	produtos = Produto.objects.all()
	slide = Slide.objects.all()
	return render(request, 'home.html', {'produtos':produtos, 'slide':slide, 'ano':datetime.now().year})
	
def email_message(request):
	if request.method == 'POST':
		nome = request.POST.get('nome')
		email = request.POST.get('email')
		mensagem = request.POST.get('mensagem')
		tupla_emails = []
		for usuario in User.objects.all():
			tupla_emails.append(usuario.email)
		try:
			send_mail(
			    'Novo email do site SudesteColor',
			    '\nNome: '+nome
			    +'\nEmail: '+email
			    +'\nMensagem: '+mensagem,
			    'backendsudestecolor@gmail.com',
			    tupla_emails,
			    fail_silently=False,
			)
			response_data = True
		except Exception as e:
			print("Erro ao enviar email")
			print(e)
			response_data = False
		return HttpResponse(json.dumps(response_data), content_type="application/json")
	return HttpResponse(json.dumps({"nothing to see": "this isn't happening"}),content_type="application/json")
