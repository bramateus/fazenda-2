
function getPercentuais(value) {
	let porcentagemLike;
	let porcentagemDislike;

	if (value.positive != null && value.negative != null) {
	 	let like = parseInt(value.positive);
	 	let dislike = parseInt(value.negative);
	 	let total = like + dislike;

	 	porcentagemLike = (like / total) * 100;
	 	porcentagemDislike = (dislike / total) * 100;
	} 
	else {
	 	porcentagemLike = 0;
	 	porcentagemDislike = 0;
	}

	return {porcentagemLike, porcentagemDislike};
}


$(document).ready(function(){

	$.ajax({
		type: 'GET',
		url: 'http://raw.githubusercontent.com/r7com/frontend-test/master/public/fazenda.json',
		data: 'json',
		contentType: "application/json; charset=utf-8",
		crossDomain: true,
		cache: false,

		// data : JSON.stringify('fazenda.json'),
		success: function(data) {

			var JSONordered = data.data.sort(function(obj1, obj2){
				let porcentagemLike1 = getPercentuais(obj1).porcentagemLike;
				let porcentagemLike2 = getPercentuais(obj2).porcentagemLike;
				return porcentagemLike1 < porcentagemLike2 ? 1 :
				(porcentagemLike1 > porcentagemLike2 ? -1 : 0);
			});
			console.log(JSONordered);


			$(JSONordered).each(function(index,value) {


				//var featureData = [{name:"chris",description:"description 1"}, {name:"guilherme",description:"description 2"},{name:"bianca",description:"description 3"}];

				let {porcentagemLike, porcentagemDislike} = getPercentuais(value);


				// let porcentagemLike;
				// let porcentagemDislike;

				// if (value.positive != null && value.negative != null) {
				//  	let like = parseInt(value.positive);
				//  	let dislike = parseInt(value.negative);
				//  	let total = like + dislike;

				//  	porcentagemLike = (like / total) * 100;
				//  	porcentagemDislike = (dislike / total) * 100;
				// } 
				// else {
				//  	porcentagemLike = 0;
				//  	porcentagemDislike = 0;
				// }








				 // var item  = '<li class="card__item2 id_'+value.__id+' hover-trigger" style="float: right; clear:both;   ">' 		
				 var item  = '<li class="card__item2 id_'+value.__id+' hover-trigger" style="float: right; clear:both; background-color: #272727;  ">' 		
				 item += '<table style="width:100%; ">'
				 item += '<tr style="color: #fff; ">'
				 item += '<td class="font" style="background-color: #ba3638 ;padding: 5px 22px; border-top-left-radius: 10px;">GOSTAM</th>'
				 item += '<td class="font" style="background-color: #ba3638 ;border-top-right-radius: 10px; padding: 5px 5px">NAO GOSTAM</th>'
				 item += '</tr>'
				 item += '<tr>'
				 item += '<td style="background-color: #444; text-align: center; color: #fff; border-bottom-left-radius: 10px; font-size: 27px; font-weight: bold">'+porcentagemLike.toFixed(0)+ '%</td>'
				 item += '<td style="background-color: #444; text-align: center; color: #fff; border-bottom-right-radius: 10px; font-size: 27px; font-weight: bold">'+porcentagemDislike.toFixed(0)+ '%</td>'
				 item += '</tr>'
				 item += '</table>'
				 item += '</li>'

				 item += '<li class="card__item" style="display:none">'
				 item += '</li>'

				 item += '<li class="card__item" data-idd="'+value.__id+'">'
				 item += '<div class="card__info">'
				 item += '<div class="info-player">'
				 item += '<p class="info-player__num"><img class="imgrr" src='+ value.picture +'></p>'
				 item += '<p class="indicator">'+ (index+1) +'</p>'
				 item += '<span class="info-player__name"><p class="player-name" id="result">'+ value.name +'</p><p class="player-desc">'+ value.description +'</p></span>'
				 item += '</div>'
				 item += '</div>'
				 item += '</li>'
				
				// console.log(value.name);
				$('.card__list').append(item);


				// $( ".card__item" ).on('mouseover', function() {
				//   	console.log($(this).data('idd'));
				//   	$('.id_'+$(this).data('idd')).show();
				// });
				// $( ".card__item" ).on('mouseleave', function() {
				//   	console.log($(this).data('idd'));
				//   	$('.id_'+$(this).data('idd')).hide();
				// });




			});
		},




		error:function(jqXHR, textStatus, errorThrown){

        // alert('Erro ao carregar');
        console.log(textStatus);
        console.log(errorThrown);
        console.log(jqXHR);
    }




	});



});