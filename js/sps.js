
var modalCover = $('#modalCover')

$('img').on('click', function(){



})



$('.maintenance_sop').on('click', function(d, i){
	$('')

})


$(document).ready(function(){
	$('img').each(function(){
		console.log("Setting up")
		setupImg($(this))

	})

	

})


function setupImg(img){
	var url = img.attr('src')
	img.wrap("<a href='" + url + "'></a>")


}
