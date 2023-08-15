
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
	graph_core.close_all_big_blocks();
	graph_core.close_all_popups();
	graph_core.translate()
	graph_core.resize_screen();
	
	console.log('сборка', build)

	game_core.start_game();
	//graph_core.open_options();
	//graph_core.open_popup('#gso_promocode_popup_back');
	//graph_core.open_popup('#gso_popup_back')
	//graph_core.open_big_block('#game_special_offers');
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

var steps = 0;

var step = function() {
	steps += 1;

	if (steps == 6) {
		graph_core.play_animation();
		steps = 0;
	}
	window.requestAnimationFrame(step);
}

if (SOCKETIO) {

	socket.on('streamer_action', function(streamer_data) {
		console.log('got data')
		game_core.data = streamer_data;

		graph_core.update_card(desks[game_core.data.cur_desk][game_core.data.cur_card])
	    graph_core.update_stats();
	})

	socket.on('open_game_viewport', graph_core.open_game_viewport);
	socket.on('open_options', graph_core.open_options);
	socket.on('open_shop', graph_core.open_shop);
	socket.on('open_shop_popup', graph_core.open_shop_popup);
	socket.on('open_shop_popup2', graph_core.open_shop_popup2);
	socket.on('open_shop_popup3', graph_core.open_shop_popup3);
	socket.on('close_shop_popup', graph_core.close_shop_popup);
	socket.on('close_shop_popup2', graph_core.close_shop_popup2);
	socket.on('close_shop_popup3', graph_core.close_shop_popup3);

	socket.on('make_screenshot', function() {
		make_screenshot();
	});
}

window.requestAnimationFrame(step);

