
tech_core.say_hello_to_server();

window.onload = function() {
	
	try {
		tech_core.init_sdk();
	} catch (err) {
		console.log(err)
	}
	
	if (PLATFORM_TYPE != 'yandex') {
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		    // код для мобильных устройств
		    tech_core.user_type = 'mobile';
		  } else {
		    tech_core.user_type = 'desktop';
		    // код для обычных устройств
		}
	}
	//tech_core.set_auto_control();
	graph_core.resize_screen();
	graph_core.translate()
	console.log('сборка', build)

	game_core.start_game();
	$('#game_preloader').fadeOut(1000)
}	


if (MAKE_SCREEN_ON_X) {
    $( 'body' ).keydown(function( event ) {
        //console.log(event.which)
        if ( event.which == 88 ) {
            //event.preventDefault();
            make_screenshot();
        }
    })
}





