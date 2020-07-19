$(document).ready(function(){

	/*=============================================
	SUPER SCROLLORAMA
	=============================================*/
	var controller = $.superscrollorama();

	controller.addTween("#articulos .container", TweenMax.from(

		$("#articulos .container"), .25, {css:{marginLeft:"-100%"}, ease:Quad.easeInOut}

	));

});
