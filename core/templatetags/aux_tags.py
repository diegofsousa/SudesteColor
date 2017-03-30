from django import template
from ..models import Produto

register = template.Library()

@register.filter(name='listq')
def listq(value):
	p = Produto.objects.get(pk=value)
	return range(p.minimo_permitido, p.maximo_permitido+1)