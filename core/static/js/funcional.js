function atualiza(){

	var total = 0;
	for (var i = 0; i < array.length; i++) {
		var aux = 0;
		if (!parseFloat($('#id_preco'+array[i]).val())) {
			var quant = 1;
		}else{
			var quant = parseFloat($('#id_preco'+array[i]).val())
		}
		var aux = parseFloat($('#id_tipo'+array[i]).val()) * quant;
		if($("#cb"+array[i]).is(':checked') == false && $("#cb"+array[i]).length > 0){
			console.log("checou");
			var aux = 0;
		}
		if ($("#cb"+array[i]).is(':checked') == false) {
			
			$('#id_tipo'+array[i]).prop('disabled', true);
			$('#id_preco'+array[i]).prop('disabled', true);
			$('#id_tipo'+array[i]).material_select();
			$('#id_preco'+array[i]).material_select();

			console.log("campo desabilitado");
		}else{
			
			$('#id_tipo'+array[i]).prop('disabled', false);
			$('#id_preco'+array[i]).prop('disabled', false);
			$('#id_tipo'+array[i]).material_select();
			$('#id_preco'+array[i]).material_select();
			console.log("campo habilitado");
		}
		total += aux;
		$('#total'+array[i]).html(aux);
		$('#id_preco'+array[i]).blur();

	}
	$('#precoTotal').html(total);
}

