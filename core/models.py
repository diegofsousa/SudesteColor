from django.db import models



class Produto(models.Model):
	descricao = models.CharField(max_length=100, blank=False, verbose_name='Descrição')
	aberto = models.BooleanField(default=False, verbose_name='Aberto')
	minimo_permitido = models.IntegerField(default=3, verbose_name='Minimo de unidades permitidas para compra', blank=True, null=True)
	maximo_permitido = models.IntegerField(default=50, verbose_name='Máximo de unidades permitidas para compra', blank=True, null=True)

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

class Slide(models.Model):
	titulo = models.CharField(max_length=100, blank=False, verbose_name='Título')
	subtitulo = models.CharField(max_length=100, blank=False, verbose_name='Subtítulo')
	imagem = models.ImageField(blank=False, null=False)
	lado_legenda = models.BooleanField(default=False, verbose_name='Legenda: True para à esquesda e False para à direita')

	def __str__(self):
		return self.titulo