$(document).ready(function(){



	$.ajax({
		type: 'GET',
		url: 'fazenda.json',
		dataType: 'json',
		contentType: "application/json",
		crossDomain: true,
		cache: false,
		// data : JSON.stringify('fazenda.json'),
		success: function(data) {
			$(data.data).each(function(index,value) {

				console.log(value);

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

			let item = '<li class="card__item2" style="float: right; clear:both; background-color: #272727; display: ">' 		
				item += '<table style="width:100%; ">'
				item += '<tr style="background-color: #ba3638; color: #fff; ">'
				item += '<th style="padding: 5px 30px;  border-top-left-radius: 10px;">GOSTAM</th>'
				item += '<th style="border-top-right-radius: 10px; padding: 5px 15px">NAO GOSTAM</th>'
				item += '</tr>'
				item += '<tr>'
				item += '<td style="background-color: #fff; text-align: center; color: gray; border-bottom-left-radius: 10px; font-size: 27px; font-weight: bold">'+porcentagemLike.toFixed(0)+ '%</td>'
				item += '<td style="background-color: #fff; text-align: center; color: gray; border-bottom-right-radius: 10px; font-size: 27px; font-weight: bold">'+porcentagemDislike.toFixed(0)+ '%</td>'
				item += '</tr>'
				item += '</table>'
				item += '</li>'

			    item += '<li class="card__item">'
				item += '<div class="card__info">'
				item += '<div class="info-player">'
				item += '<p class="info-player__num"><img class="imgrr" src='+ value.picture +'></p>'
				item += '<p class="indicator">'+ (index+1) +'</p>'
				item += '<span class="info-player__name"><p class="player-name" id="result">'+ value.name +'</p><p class="player-desc">'+ value.description +'</p></span>'
				item += '</div>'
				item += '</li>'



			console.log(value.name);
			$('.card__list').append(item);



			});
		},

		error:function(jqXHR, textStatus, errorThrown){
        alert('Erro ao carregar');
        console.log(errorThrown);
    }




	});


// $like = 3;
// $dislike = 10;
// $total = $like + $dislike;
// if($total != 0){
//   $porcentagemLike = ($like / $total) * 100;
//   $porcentagemDislike = ($dislike / $total) * 100;
// } else {
// #caso nao tenha like ou dislike, seta like como 100% e dislike como zero;
//   $porcentagemLike = 100;
//   $porcentagemDislike = 0;

// }

    // $.get("fazenda.json", function(data) {
    //      console.log(data);
    //      var obj = JSON.stringify(data);


        
    //     	console.log(data.data[1]);
    //     $('#result').html(data[0]);
    // });
});