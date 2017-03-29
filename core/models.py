from django.db import models

class Produtos(models.Model):

	UM = 1
	DOIS = 2
	TRES = 3
	TAMANHOS = (
		(UM, '10x10'),
		(DOIS, '30x30'),
		(TRES, '70x70'),
	)

	CUM = 1
	CDOIS = 2
	CTRES = 3
	CTIPOS = (
		(CUM, 'A/M'),
		(CDOIS, 'C/M'),
		(CTRES, 'F/M'),
	)

	descricao = models.CharField(max_length=100, blank=False, verbose_name='Descrição')
	preco = models.FloatField(verbose_name='Preço', blank=False)
	tamanho = models.IntegerField(choices=TAMANHOS, default=UM, blank=True, null=True, verbose_name='Tamanho')
	tipos = models.IntegerField(choices=CTIPOS, default=CDOIS, blank=True, null=True, verbose_name='Tipo')
	aberto = models.BooleanField(default=False, verbose_name='Aberto')
	ttamanho = models.BooleanField(default=False, verbose_name='Tem atributos de tamanho?')
	ttipo = models.BooleanField(default=False, verbose_name='Tem tipos?')

	def __str__(self):
		return self.descricao

	#def get_choices_tipos(self):
	#	return dict(self.)