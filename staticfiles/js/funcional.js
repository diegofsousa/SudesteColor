var total = 0;

function atualiza(){

	total = 0;
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
		$('#total'+array[i]).html(aux.toFixed(2));
		$('#id_preco'+array[i]).blur();

	}
	$('#precoTotal').html(total.toFixed(2));
	cparc();
	
}


function cparc() {
	var iparc = parseInt($('#parc').val()); 
	var tparc = total / parseInt($('#parc').val());
	$("#nparc").html(iparc);
	$("#din").html(tparc.toFixed(2));
}

$( document ).ready( function() {


  
//Google Maps JS
//Set Map
function initialize() {
		var myLatlng = new google.maps.LatLng(-9.010755,-42.700238);
		var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
		var mapOptions = {
			zoom: 17,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}

	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	//Callout Content
	var contentString = 'Some address here..';
	//Set window width + content
	var infowindow = new google.maps.InfoWindow({
		content: contentString,
		maxWidth: 500,
	});

	//Add Marker
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		icon: imagePath,
		title: 'image title'
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});

	//Resize Function
	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);

});
jQuery(document).ready(function($) { 
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
   });
});


$('#formm').submit(function() {
    var form = $(this);
    $.post(form.attr('action'), form.serialize(), function(retorno) {
        if ($("#first_name").val() !== "" && $("#email").val() !== "" && $("#mensagem").val() !== "" ) {
          email_cont($("#first_name").val(), $("#email").val(), $("#mensagem").val());
        }
    });
    return false;
});

function email_cont(nome, email, mensagem) {
 	var $toastContent = $('<span>...enviando email</span>');
    Materialize.toast($toastContent, 5000);
	$.ajax({
        url : "/postemail/", // the endpoint
        type : "POST", // http method
        data : { 
        	nome : nome,
        	email : email,
        	mensagem : mensagem,
        	 }, // data sent with the post request
             
        // handle a successful response
        success : function(json) {
            if (json == true){
            	var $toastContent = $('<span>Email enviado com sucesso!</span>');
           		Materialize.toast($toastContent, 5000);
            }
            else{
            	var $toastContent = $('<span>Fala ao enviar email!</span>');
            	Materialize.toast($toastContent, 5000);
            }
        },
        // handle a non-successful response
        error : function(xhr,errmsg,err) {
        	console.log(xhr.status + ": " + xhr.responseText);
         	var $toastContent = $('<span>Fala ao enviar email!</span>');
            Materialize.toast($toastContent, 5000);
        }
    });
}

//Cookies globais padrões para utilização do AJAX

function getCookie(name) {
        var cookieValue = null;
        var i = 0;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (i; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        crossDomain: false, // obviates need for sameOrigin test
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type)) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });


