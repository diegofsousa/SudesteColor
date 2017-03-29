from django.db import models



class Produto(models.Model):
	descricao = models.CharField(max_length=100, blank=False, verbose_name='Descrição')
	aberto = models.BooleanField(default=False, verbose_name='Aberto')
	minimo_permitido = models.IntegerField(default=3, verbose_name='Minimo de unidades permitidas para compra', blank=True, null=True)

	def __str__(self):
		return self.descricao

	def get_precos(self):
		return Preco.objects.filter(produto=self.pk)

	#def get_choices_tipos(self):
	#	return dict(self.)

class Preco(models.Model):
	produto = models.ForeignKey(Produto, default=1)
	descricao = models.CharField(max_length=100, blank=False, verbose_name='Descrição')
	preco = models.FloatField(verbose_name='Preço', blank=False)

	def __str__(self):
		return self.descricao + ' em '+ self.produto.descricao