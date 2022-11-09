graph_core.winW = $(window).width();
graph_core.winH = $(window).height();


function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

 if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
    graph_core.user_type = 'mobile';
  } else {
    graph_core.user_type = 'pc';
    // код для обычных устройств
}

//Hack to force scroll redraw
function scrollReDraw() {
    $('body').css('overflow', 'hidden').height();
    $('body').css('overflow', 'auto');
}

var noPX = function(string) {
    return string.slice(0, string.length-2);
}

var num = function(variable) {
    return Number(variable);
}

var set_size = function(el_id, w='none', h='none') {
    if (w != 'none') {
	   $(el_id).css('width', w);
	}
    if (h != 'none') {
        $(el_id).css('height', h);
    }
}

var set_pos = function(el_id, left, top) {
    $(el_id).css('left', left);
    $(el_id).css('top', top)
}

var set_pos2 = function(el_id, left='none', top='none') {
    if (left != 'none') {
        $(el_id).css('margin-left', left);
    }
    if (top != 'none') {
        $(el_id).css('margin-top', top)
    }
}

var get_pos = function(selector) {
    var el = $(selector);
    var x = num(noPX(el.css('left')));
    if (isNaN(x)) {
        x = num(noPX(el.css('margin-left')));
    }

    var y = num(noPX(el.css('top')));
    if (isNaN(y)) {
        y = num(noPX(el.css('margin-top')));
    }

    var x_size = num(noPX(el.css('width')));
    var y_size = num(noPX(el.css('height')));

    
	return {"x": x, "y": y, "right": x + x_size, "bottom": y+y_size }
}

var get_size = function(selector) {
	var el = $(selector);

	return {"x": num(noPX(el.css('width'))), "y": num(noPX(el.css('height')))}
}

var get_pic_size = function(selector) {
    var el = $(selector);

    return {"x": num(noPX(el.attr('width'))), "y": num(noPX(el.attr('height')))}
}

var get_center = function(selector) {
    var size = get_size(selector)
    var pos = get_pos(selector)
    return {"x": pos.x + size.x/2, "y": pos.y + size.y/2}
}

var mouse_in_element = function(selector) {
    var pos = get_pos(selector);
    var size = get_size(selector);

    var x1 = pos.x;
    var y1 = pos.y;

    var x2 = x1 + size.x;
    var y2 = y1 + size.y;

    if (x1 < mouse_x && mouse_x < x2 &&
        y1 < mouse_y && mouse_y < y2) {
        return true
    } else {
        return false
    }
}

var get_optimal_font = function(text, block_x, constant, block_y=1000 ) {
    // текст на слова
    var words = text.split(" ")

    var max_len = 0

    for (var i in words) {
        if (words[i].length > max_len) {
            max_len = words[i].length
        }
    }

    
    return Math.min(block_x / max_len * 1.5 * constant, block_y * 0.7  / words.length * constant)
}



var make_disabled = function(selector) {
    var html_disable_block = '<div id="'+selector.slice(1, selector.length)+'_disabled" class="disable_block"></div>'

    $('body').append(html_disable_block)

    var pos = $(selector).offset()

    set_size(selector+'_disabled', get_size(selector).x, get_size(selector).y)
    set_pos(selector+'_disabled',pos.left+num(noPX($(selector).css('border-width'))), pos.top+num(noPX($(selector).css('border-width'))))
}

var make_enabled = function(selector) {
    document.getElementById(selector.slice(1, selector.length)+'_disabled').outerHTML = "";
}

var set_best_size = function(selector, ratio, size_x, size_y) {
    var width = Math.min(size_x, size_y * ratio)

    set_size(selector, width, width / ratio)
}

var set_size_by_x = function(selector, ratio, size_x) {
    var width = size_x

    set_size(selector, width, width / ratio)
}

var set_size_by_y = function(selector, ratio, size_y) {
    var width = size_y * ratio

    set_size(selector, width, width / ratio)
}

var set_img_best_size = function(selector, ratio, size_x, size_y) {
    var width = Math.min(size_x, size_y * ratio)

    $(selector).attr('width', width + 'px')
    $(selector).attr('height', width / ratio + 'px')
}

var setup_main_menu_block = function(winW, winH, profile) {
    if (profile == 'pc') {

    }   
}


var add_block = function(id, x_ratio, y_ratio) {
    $('#game_viewport').append(`<div id="`+id+`" ></div>`)
}


// собственно здесь всё будет создаваться :)
set_size(".big_block", graph_core.winW, graph_core.winH);

graph_core.html_blocks["game_viewport"] = new my_html_block("game_viewport", document.getElementById('game_viewport'), {}, true);

graph_core.html_blocks["game_viewport"].add_block('top_block', {
    "ratio_x": 1,
    "ratio_y": 0.1,
    "ratio": 2,
    "color": 'rgba(0,0,0,0)',
    "pos_x": 0.5,
    "pos_y": 0.02
})

for (var i=0; i < 4; i++) {
    graph_core.html_blocks["game_viewport"].children['top_block'].add_block('status_block_'+(i+1), {
        "ratio_x": 1,
        "ratio_y": 1,
        "is_prop": true,
        "ratio": 0.9,
        "color": '#414bb2',
        "pos_x": 1*((i)/4+0.125) 
    })
}

graph_core.html_blocks["game_viewport"].add_block('card_block', {
    "ratio_x": 380/480,
    "ratio_y": 500/800,
    "ratio": 764/962,
    "is_prop": true,
    "background": "url('./images/base.png')",
    "color": '#e683f6',
    "pos_x": 0.5,
    "pos_y": 0.35
})

graph_core.html_blocks["game_viewport"].children['card_block'].add_block('card_title', {
    "ratio_x": 320/440,
    "ratio_y": 50/580,
    "is_prop": true,
    "ratio": 554/85,
    "background": "url('./images/title.png')",
    "color": '#f4b9ff',
    "pos_y": 0.15,
    "pos_x": 0.5,
    "text": "Лунный торговец",
    "text_color": "#e8cd66",
    "1_line_text": false,
    "text_padding_w": 0.8,
    "text_padding_h": 0.8,
    "text_align": "center"
})

graph_core.html_blocks["game_viewport"].children['card_block'].add_block('card_img', {
    "ratio_x": 355/440,
    "ratio_y": 255/580,
    "is_prop": true,
    "ratio": 355/255,
    "pos_y": 0.45,
    "pos_x": 0.5
})

graph_core.html_blocks["game_viewport"].children['card_block'].add_block('card_description', {
    "ratio_x": 320/380,
    "ratio_y": 100/512,
    "is_prop": true,
    "ratio": 320/100,
    "pos_y": 0.92,
    "pos_x": 0.5,
    "text": "Мне не нравится, что в нашем городе так много сплетников.",
    "text_color": "#e8cd66"
})

graph_core.html_blocks["game_viewport"].add_block('ans_block_1', {
    "ratio_x": 230/535,
    "ratio_y": 50/890,
    "ratio": 394/86,
    "is_prop": true,
    "background": "url('./images/button_long.png')",
    "color": '#f48aff',
    "pos_y_mode": "attach_top",
    "pos_y_attach_id": "card_block",
    "pos_x_mode": "attach_left_left",
    "pos_x_attach_id": "card_block",
    "margin_x": -0.1,
    "margin_y": 0.45,
    "pos_x": 0.1,
    "pos_y": 0.78,
    "text": "Мне тоже",
    "text_color": "#e8cd66",
    "text_padding_w": 0.8,
    "text_padding_h": 0.7,
    "text_align": "center",
    "onclick": "game_core.next_card(1);"
})

graph_core.html_blocks["game_viewport"].add_block('ans_block_2', {
    "ratio_x": 230/535,
    "ratio_y": 50/890,
    "ratio": 394/86,
    "is_prop": true,
    "background": "url('./images/button_long.png')",
    "pos_y_mode": "attach_top",
    "pos_y_attach_id": "card_block",
    "pos_x_mode": "attach_right",
    "pos_x_attach_id": "card_block",
    "margin_x": 0.1,
    "margin_y": 0.45,
    "pos_x": 0.9,
    "pos_y": 0.78,
    "text": "Прости, но я не знаю что со мной",
    "text_color": "#e8cd66",
    "text_padding_w": 0.75,
    "text_padding_h": 0.8,
    "text_align": "center",
    "onclick": "game_core.next_card(2);"
})



graph_core.html_blocks["game_viewport"].add_block('options_block', {
    "ratio_x": 110/535,
    "ratio_y": 210/890,
    "ratio": 206/370,
    "color": '#f48aff',
    "background": "url('./images/clock.png')",
    "is_prop": true,
    "pos_x": 0,
    "pos_y": 1
})

graph_core.html_blocks["game_viewport"].children['options_block'].add_block('options_btn', {
    "ratio_x": 0.5,
    "ratio_y": 0.2,
    "ratio": 1/1,
    "color": '#f48aff',
    "background": "url('./images/settings.png')",
    "is_prop": true,
    "pos_x": 0.2,
    "pos_y": 0.9,
    "onclick": "graph_core.open_options();"
})

graph_core.html_blocks["game_viewport"].add_block('lm_block', {
    "ratio_x": 110/535,
    "ratio_y": 210/890,
    "ratio": 206/370,
    "color": '#f48aff',
    "background": "url('./images/clock_right.png')",
    "is_prop": true,
    "pos_x": 1,
    "pos_y": 1
})

graph_core.html_blocks["game_viewport"].children['lm_block'].add_block('lm_btn', {
    "ratio_x": 0.6,
    "ratio_y": 0.3,
    "ratio": 1/1,
    "color": '#f48aff',
    "background": "url('./images/coin.png')",
    "is_prop": true,
    "pos_x": 0.9,
    "pos_y": 0.97,

})

graph_core.html_blocks["game_viewport"].add_block('date_block', {
    "ratio_x": 220/535,
    "ratio_y": 60/890,
    "ratio": 376/100,
    "color": '#f48aff',
    "is_prop": true,
    "pos_x": 0.5,
    "background": "url('./images/time.png')",
    /*
    "pos_y_mode": "attach_bottom",
    "pos_y_attach_id": "options_block",
    */
    "pos_y": 0.99,
    "text": "34 ц.у.",
    "text_align": "center",
    "text_color": "#e8cd66",
    "text_padding_w": 0.75,
    "text_padding_h": 0.6,

})



////////////////////////////////////////////////
///// РАЗДЕЛ НАСТРОЕК //////
////////////////////////////////////////////////

graph_core.html_blocks["game_options"] = new my_html_block("game_options", document.getElementById('game_options'), {}, true);

graph_core.html_blocks["game_options"].add_block('title_block', {
    "ratio_x": 200/520,
    "ratio_y": 60/880,
    "ratio": 150/45,
    "pos_x": 0.05,
    "is_prop": true,
    /*
    "pos_x_mode": "attach_left_left",
    "pos_x_attach_id": "game_options",
    "marin_x": 0,
    */
    "pos_y": 0.01,
    "text": "Настройки",
    "text_color": "#e8cd66",
    "text_align": "center"
})


graph_core.html_blocks["game_options"].add_block('go_card_block', {
    "ratio_x": 435/520,
    "ratio_y": 700/880,
    "ratio": 435/735,
    "color": "#5b1821",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.45,
})

for (var i=0; i < 3; i++) {
    graph_core.html_blocks["game_options"].children['go_card_block'].add_block('option_'+(i+1), {
        "ratio_x": 395/430,
        "ratio_y": 165/730,
        "ratio": 395/165,
        "color": "#340024",
        "is_prop": true,
        "pos_x": 0.5,
        "pos_y": 0.05 + (i)*0.33,
    })
}

graph_core.html_blocks["game_options"].add_block('back_btn', {
    "ratio_x": 290/520,
    "ratio_y": 65/880,
    "ratio": 394/86,
    "color": "#5b1821",
    "background": "url('./images/button_long.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.98,
    "text": 'Вернуться в игру',
    "text_align": "center",
    "text_color": "#e8cd66",
    "text_padding_w": 0.75,
    "text_padding_h": 0.6,
    "onclick": "graph_core.open_game_viewport();"
})




/*
graph_core.html_blocks["game_viewport"].add_block('test', {
    "ratio_x": 0.8,
    "ratio_y": 0.5,
    "color": 'orange',
    "pos_mode": "center",
    "pos_x"
})


graph_core.html_blocks["game_viewport"].children["test"].add_block('test2', {
    "ratio_x": 1,
    "ratio_y": 0.5,
    "color": 'rgba(0,0,0,0.3)',
    "pos_mode": "center"
})
*/


var setup_game_viewport = function(winW, winH, profile) {
   

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
}



// PC horizontal
var profile_1 = function(winW, winH) {
    
}

// mobile vertical
var profile_2 = function(winW, winH) {

   
} 

var resize_screen = function() {
    var s_time = performance.now();
    
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // код для мобильных устройств
        graph_core.user_type = 'mobile';

    } else {
        graph_core.user_type = 'pc';
        // код для обычных устройств
    }


    graph_core.winW = $(window).width();
    graph_core.winH = $(window).height();


    var winW = graph_core.winW;
    var winH = graph_core.winH;

    var ratio = winW / winH

    if (tech_core.platform == 'sber') {
        winH *= 0.9
        if (winW > winH) {
            winH *= 0.95
        }
    }



    // горизонтальный
    if (ratio >= 0.95) {

        setup_game_viewport(winW, winH, 1)
    // вертикальный
    } else if (ratio <= 0.6) {
        setup_game_viewport(winW, winH, 2)
    // квадратный
    } else {
        setup_game_viewport(winW, winH, 3)
    }

    graph_core.html_blocks["game_viewport"].recalculate();
    graph_core.html_blocks["game_options"].recalculate();

    //console.log('resized in '+(performance.now() - s_time).toFixed(2) + 'ms')

}

graph_core.resize_screen = resize_screen

window.addEventListener('resize', function() {
    //setTimeout(function() {
        graph_core.resize_screen();
    //}, 20)
    
}, false);
window.addEventListener('fullscreenchange', function() {
    //setTimeout(function() {
        graph_core.resize_screen();
    //}, 20)
}, false)



