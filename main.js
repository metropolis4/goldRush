$(document).on('ready', function() {

	var marker = $('<div>')
		.addClass("glyphicon glyphicon-map-marker");

  	$(document).on('click', '.jumbotron', function(event) {
  		var altMarker = marker.clone();
  		$(altMarker).css({'top': (event.pageY - 28), 'left': (event.pageX - 12)});
  		$('.jumbotron').append(altMarker);

  	});

  	$(document).on('click', '.glyphicon', function(event) {
		$(this).remove();
		event.stopPropagation();
	});
  	
});