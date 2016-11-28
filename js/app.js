function main(){
	console.log('connected');
	modal();
}

// displays modal
function modal(){
	$('img').on('click', function(){
		// display modal
		$('.modal').show();		

		// look for image src attr
		var image_href = $(this).attr('src');

		//insert img tag with clicked link's href as src value & span with close button
		$('#modal-container').html('<span id=\"close\">Close X</span><img src="' + image_href + '" />');
		
		closeModal();   	
	});
}

// close modal
function closeModal(){
	$('#close').on('click', function(){
		$('.modal').css('display','none');
	});

	$('.modal').on('click', function(){
		$(this).css('display','none');
	});
}


$(document).ready(main);