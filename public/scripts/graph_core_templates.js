// здесь будут сидеть наши шаблоны)

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


var ORANGE_TEXT_COLOR = '#F7931E';
var YELLOW_TEXT_COLOR = '#FFCF17';
var STANDARD_TEXT_COLOR = "#e8cd66";


// собственно здесь всё будет создаваться :)

var create_alchemy_quiz_graphic = function() {


for (var i=0; i < 20; i++) {
    $('body').append("<img src='./images/animation/crystal/00"+format_to_frame(i+1)+".jpg') style='position: absolute; left: -9999px; display: none;' >")
}

set_size(".big_block", graph_core.winW, graph_core.winH);

graph_core.html_blocks["game_viewport"] = new my_html_block("game_viewport", document.getElementById('game_viewport'), {}, true);

graph_core.html_blocks["game_viewport"].add_block('top_block', {
    "ratio_x": 0.9,
    "ratio_y": 0.15,
    "ratio": 2,
    "color": 'rgba(0,0,0,0)',
    "pos_x": 0.5,
    "pos_y": 0.02
})


// СТАТЫ
for (var i=0; i < 4; i++) {
    graph_core.html_blocks["game_viewport"].children['top_block'].add_block('status_block_'+(i+1), {
        "ratio_x": 1,
        "ratio_y": 1,
        "is_prop": true,
        "ratio": 170/467,
        /*"background": "url('./images/stats/0"+(i+1)+".png')",*/


        "pos_x": 1*((i)/4+0.125) 
    })
    graph_core.html_blocks["game_viewport"].children['top_block'].children['status_block_'+(i+1)].add_block('sb_progressbar_'+(i+1), {
        "ratio_x": 1,
        "ratio_y": 0.75,
        "pos_y": 0.5,
        "background": "linear-gradient(#DEE700, #FF2E51)",
        "border-radius": "35%"
    })
    graph_core.html_blocks["game_viewport"].children['top_block'].children['status_block_'+(i+1)].add_block('sb_anti_progressbar_'+(i+1), {
        "ratio_x": 1,
        "ratio_y": 0.4,
        "pos_y_mode": "attach_top_top",
        "margin_y": 0,
        "pos_y_attach_id": 'sb_progressbar_'+(i+1),

        "background": "#1A1D31",
    })
     graph_core.html_blocks["game_viewport"].children['top_block'].children['status_block_'+(i+1)].add_block('sb_img_'+(i+1), {
        "ratio_x": 1,
        "ratio_y": 1,
        "ratio": 170/467,
        "is_prop": true,
        "background": "url('./images/stats/0"+(i+1)+".png')"
    })
}

graph_core.html_blocks["game_viewport"].add_block('card_block', {
    "ratio_x": 400/480,
    "ratio_y": 520/800,
    "ratio": 764/979,
    "is_prop": true,
    "background": "url('./images/base_4.png')",
    "color": '#e683f6',
    "pos_x": 0.5,
    "pos_y": 0.35
})

graph_core.html_blocks["game_viewport"].children['card_block'].add_block('card_title', {
    "ratio_x": 320/440,
    "ratio_y": 50/580,
    "is_prop": true,
    "ratio": 554/85,
    /*"background": "url('./images/title.png')",*/
   
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
    "ratio_x": 395/440,
    "ratio_y": 355/580,
    "is_prop": true,
    "ratio": 688/492,
    "pos_y": 0.45,
    "pos_x": 0.5,
    "style": {
        "z-index": -1
    }
})

graph_core.html_blocks["game_viewport"].children['card_block'].add_block('card_description', {
    "ratio_x": 320/380,
    "ratio_y": 100/512,
    "is_prop": true,
    "ratio": 320/100,
    "pos_y": 0.90,
    "pos_x": 0.5,
    "text": "Мне не нравится, что в нашем городе так много сплетников.",
    "text_color": "#e8cd66",
    "text_align": "center",
    "strict_font_size":30/855
})

graph_core.html_blocks["game_viewport"].add_block('ans_block_1', {
    "ratio_x": 240/535,
    "ratio_y": 85/890,
    "ratio": 401/161,
    "is_prop": true,
    "background": "url('./images/right_btn_new.png')",
    "color": '#f48aff',
    "pos_y_mode": "attach_top",
    "pos_y_attach_id": "card_block",
    "pos_x_mode": "attach_left_left",
    "pos_x_attach_id": "card_block",
    "margin_x": -0.1,
    "margin_y": 0.1,
    "pos_x": 0.1,
    "pos_y": 0.75,
    "text": "Мне тоже",
    "text_color": "#e8cd66",
    "text_padding_w": 0.75,
    "text_padding_h": 0.7,
    "text_align": "center",
    "onclick": "game_core.next_card(1);",
    "strict_font_size":20/855
})

graph_core.html_blocks["game_viewport"].add_block('ans_block_2', {
    "ratio_x": 240/535,
    "ratio_y": 85/890,
    "ratio": 401/161,
    "is_prop": true,
    "background": "url('./images/left_btn_new.png')",
    "pos_y_mode": "attach_top",
    "pos_y_attach_id": "card_block",
    "pos_x_mode": "attach_right",
    "pos_x_attach_id": "card_block",
    "margin_x": 0.1,
    "margin_y": 0.1,
    "pos_x": 0.9,
    "pos_y": 0.75,
    "text": "Прости, но я не знаю что со мной",
    "text_color": "#e8cd66",
    "text_padding_w": 0.75,
    "text_padding_h": 0.7,
    "text_align": "center",
    "onclick": "game_core.next_card(2);",
    "strict_font_size":20/855
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
    "onclick": "graph_core.open_shop();"
})

graph_core.html_blocks["game_viewport"].add_block('date_block', {
    "ratio_x": 220/535,
    "ratio_y": 60/890,
    "ratio": 376/100,
   
    "is_prop": true,
    "pos_x": 0.5,
    /*
     "color": '#f48aff',
    "background": "url('./images/time.png')",
    */
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

// карточки времени
/*
graph_core.html_blocks["game_viewport"].add_block("time_block", {
    "ratio_x": 1,
    "ratio_y": 1,
    "color": 'black',
})

// её текст

graph_core.html_blocks["game_viewport"].children['time_block'].add_block("time_block_time", {
    "ratio_x": 0.3,
    "ratio_y": 0.1,
    "pos_x": 0.5,
    "pos_y": 0.2,
    "text": "1089 ц.у.",
    "text_align": "center",
    "text_color": "white"
})

graph_core.html_blocks["game_viewport"].children['time_block'].add_block("time_block_text", {
    "ratio_x": 0.4,
    "ratio_y": 0.1,
    "pos_x": 0.5,
    "pos_y": 0.4,
    "text": "с момента заточения Великого демиурга",
    "text_align": "center",
    "text_color": "white"
})
*/





////////////////////////////////////////////////
///// РАЗДЕЛ НАСТРОЕК //////
////////////////////////////////////////////////

graph_core.html_blocks["game_options"] = new my_html_block("game_options", document.getElementById('game_options'), {}, true);



graph_core.html_blocks["game_options"].add_block('go_title_block', {
    "ratio_x": 650/930,
    "ratio_y": 200/2625,
    "ratio": 554/85,
    "pos_x": 0.5,
    "pos_y": 0.02,
    "text_padding_h": 0.75,
    "is_prop": true,
    "background": "url('./images/title.png')",


    "text": "Настройки",
    "text_color":  STANDARD_TEXT_COLOR,
    "text_align": "center"

})

graph_core.html_blocks["game_options"].add_block('go_card_block', {
    "ratio_x": 860/935,
    "ratio_y": 1000/1540,
    "ratio": 764/1083,
    "pos_x": 0.5,
    "pos_y": 0.45,
    "is_prop": true,
    "background": "url('./images/for_shop/new_for_shop.png')",
})

for (var i=0; i < 3; i++) {

    graph_core.html_blocks['game_options'].children['go_card_block'].add_block('go_cb_item_'+(i+1), {
        "ratio_x": 700/763,
        "ratio_y": 295/1085,
        "ratio": 700/295,
        //"color": '#f48aff',
        //"background": "url('./images/clock.png')",
        "is_prop": true,
        "pos_x": 0.5,
        "pos_y": 0.06 + i*0.415
    })
    if (i < 2) {
        graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_'+(i+1)].add_block('go_cb_i'+(i+1)+'_title', {
            "ratio_x": 650/700,
            "ratio_y": 90/295,
            //"ratio": 500/75,
            //"color": '#f48aff',
            //"background": "url('./images/for_shop/unicorn_1.png')",
            //"is_prop": true,
            "pos_x": 0.5,
            "pos_y": 0.02,
            "text": text.options[i].title[graph_core.lang],
            "text_color":  STANDARD_TEXT_COLOR,
            "text_align": "center",
            "strict_font_size": 0.5,
        })
    }
}

graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_1'].add_block('go_cb_music_btn', {
    "ratio_x": 88/400,
    "ratio_y": 88/170,
    "ratio": 1/1,
    "is_prop": true,
    "background": "url('./images/for_settings/music_on.png')",
    "pos_x": 95/400,
    "pos_y": 125/170
})

graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_1'].add_block('go_cb_sound_btn', {
    "ratio_x": 88/400,
    "ratio_y": 88/170,
    "ratio": 1/1,
    "is_prop": true,
    "background": "url('./images/for_settings/sound_on.png')",
    "pos_x": 305/400,
    "pos_y": 125/170
})

graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_2'].add_block('go_cb_i2_text_1', {
    "ratio_x": 135/400,
    "ratio_y": 100/180,
    "ratio": 125/30,
    "is_prop": true,
   
    "pos_x": 0.1,
    "pos_y": 0.45,
    "text": "Нашли баг?",
    "text_color": ORANGE_TEXT_COLOR,
})

graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_2'].add_block('go_cb_i2_text_2', {
    "ratio_x": 135/400,
    "ratio_y": 100/180,
    "ratio": 125/30,
    "is_prop": true,
   
    "pos_x": 0.1,
    "pos_y": 0.85,
    "text": "Авторизация",
    "text_color": ORANGE_TEXT_COLOR,
})


graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_2'].add_block('go_cb_i2_btn_1', {
    "ratio_x": 135/400,
    "ratio_y": 100/180,
    "ratio": 314/99,
    "is_prop": true,
    background: "url('./images/for_settings/long_red.png')",
    "pos_x": 0.9,
    "pos_y": 0.45,
    "text": "Сообщить",
    "text_align": 'center',
    "text_padding_h": 0.7,
    "text_color": STANDARD_TEXT_COLOR,
})

var names = ['Достижения', 'Персонажи', "Концовки"]
var img_name = ['but_achieve.png', 'but_who.png', 'but_ends.png']

for (var i=0; i < 3; i++) {
    graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_3'].add_block('go_cb_i3_text_'+(i+1), {
        "ratio_x": 1/3,
        "ratio_y": 35/180,
        "ratio": 314/99,
        //"is_prop": true,
        //background: "url('./images/for_settings/long_red.png')",
        "pos_x": 0.5*i,
        "pos_y": 0.1,
        "text": names[i],
        "text_align": 'center',
        "text_padding_h": 0.7,
        "text_color": ORANGE_TEXT_COLOR,
    })

    graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_3'].add_block('go_cb_i3_img_'+(i+1), {
        "ratio_x": 100/400,
        "ratio_y": 100/180,
        "ratio": 1,
        "is_prop": true,
        "background": "url('./images/for_settings/"+img_name[i]+"')",
        "pos_x": 0.5*i+(1-i)*0.07,
        "pos_y": 0.8,

    })
}


graph_core.html_blocks["game_options"].add_block('go_back_block', {
    "ratio_x": 110/535,
    "ratio_y": 210/890,
    "ratio": 206/370,
    "color": '#f48aff',
    "background": "url('./images/clock.png')",
    "is_prop": true,
    "pos_x": 0,
    "pos_y": 1
})


graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_2'].add_block('go_cb_i2_btn_2', {
    "ratio_x": 135/400,
    "ratio_y": 100/180,
    "ratio": 314/99,
    "is_prop": true,
    background: "url('./images/for_settings/long_blue.png')",
    "pos_x": 0.9,
    "pos_y": 0.85,
    "text": "Войти",
    "text_align": 'center',
    "text_padding_h": 0.7,
    "text_color": STANDARD_TEXT_COLOR,
})


graph_core.html_blocks["game_options"].children['go_back_block'].add_block('go_bb_back_button', {
    "ratio_x": 1,
    "ratio_y": 0.25,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/back.png')",
    "is_prop": true,
    "pos_x": 0.2,
    "pos_y": 0.9,
    "onclick": "graph_core.open_game_viewport();"
})



////////////////////////////////////////////////
///// РАЗДЕЛ МАГАЗИНА //////
////////////////////////////////////////////////

graph_core.html_blocks["game_shop"] = new my_html_block("game_shop", document.getElementById('game_shop'), {}, true);


graph_core.html_blocks["game_shop"].add_block('gs_title_block', {
    "ratio_x": 650/930,
    "ratio_y": 200/2625,
    "ratio": 554/85,
    "pos_x": 0.5,
    "pos_y": 0.02,
    "text_padding_h": 0.75,
    "is_prop": true,
    "background": "url('./images/title.png')",


    "text": "Магазин",
    "text_color": "#ffcf13",
    "text_align": "center"

})

graph_core.html_blocks["game_shop"].add_block('gs_second_block', {
    "ratio_x": 762/935,
    "ratio_y": 100/1540,
    "ratio": 762/100,
    "pos_x": 0.5,
    "pos_y": 0.11,
    "is_prop": true,
    //"background": "red",
})


graph_core.html_blocks["game_shop"].children['gs_second_block'].add_block('gs_sb_text', {
    "ratio_x": 442/762,
    "ratio_y": 1.0,
    "ratio": 762/100,
    "pos_x": 0.0,
    "pos_y": 0.0,
    "is_prop": false,
    //"background": "green",
    "text": "Созвездие: Единорог",
    "text_color": "#ffcf13",
})

graph_core.html_blocks["game_shop"].children['gs_second_block'].add_block('gs_sb_balance_block', {
    "ratio_x": (762-442)/762,
    "ratio_y": 1.0,
    "ratio": 189/99,
    "pos_y": 0.0,
    "is_prop": true,

    "background": "url('./images/for_shop/but_blue.png')",
    "pos_x_mode": "v2_attach_left",
    "pos_x_attach_id": "gs_sb_text",
    "margin_x": 0.5,
})

graph_core.html_blocks["game_shop"].children['gs_second_block'].children['gs_sb_balance_block'].add_block('gs_sb_bb_coin', {
    "ratio_x": 70/189,
    "ratio_y": 70/100,
    "ratio": 1/1,
    "pos_y": 0.5,
    "pos_x": 0.15,
    "is_prop": true,
    "background": "url('./images/coin_little.png')",
})

graph_core.html_blocks["game_shop"].children['gs_second_block'].children['gs_sb_balance_block'].add_block('gs_sb_bb_text', {
    "ratio_x": 70/189,
    "ratio_y": 70/100,
    "ratio": 1/1,
    "pos_y": 0.5,
    "pos_x": 0.75,
    "is_prop": true,
    "text": "123",
    "text_color": "#e8cd66",
})

graph_core.html_blocks["game_shop"].add_block('gs_card_block', {
    "ratio_x": 860/935,
    "ratio_y": 1000/1540,
    "ratio": 764/1083,
    "pos_x": 0.5,
    "pos_y": 0.45,
    "is_prop": true,
    "background": "url('./images/for_shop/new_for_shop.png')",
})


for (var i=0; i < 3; i++) {

    graph_core.html_blocks['game_shop'].children['gs_card_block'].add_block('gs_cb_item_'+(i+1), {
        "ratio_x": 700/763,
        "ratio_y": 295/1085,
        "ratio": 700/295,
        //"color": '#f48aff',
        //"background": "url('./images/clock.png')",
        "is_prop": true,
        "pos_x": 0.5,
        "pos_y": 0.06 + i*0.435
    })

    graph_core.html_blocks['game_shop'].children['gs_card_block'].children['gs_cb_item_'+(i+1)].add_block('gs_cb_i'+(i+1)+'_pic', {
        "ratio_x": 200/700,
        "ratio_y": 200/295,
        "ratio": 1/1,
        //"color": '#f48aff',
        "background": "url('./images/for_shop/unicorn_"+(i+1)+".png')",
        "is_prop": true,
        "pos_x": 0.03,
        "pos_y": 0.5
    })

    graph_core.html_blocks['game_shop'].children['gs_card_block'].children['gs_cb_item_'+(i+1)].add_block('gs_cb_i'+(i+1)+'_title', {
        "ratio_x": 500/700,
        "ratio_y": 75/295,
        "ratio": 500/75,
        //"color": '#f48aff',
        //"background": "url('./images/for_shop/unicorn_1.png')",
        "is_prop": true,
        "pos_x": 0.9,
        "pos_y": 0.05,
        "text": text.shop[i].title[graph_core.lang],
        "text_color": "#ffcf13",
        "text_align": "center",
        "font_size": 0.3,
    })

    graph_core.html_blocks['game_shop'].children['gs_card_block'].children['gs_cb_item_'+(i+1)].add_block('gs_cb_i'+(i+1)+'_desk', {
        "ratio_x": 400/700,
        "ratio_y": 100/295,
        "ratio": 400/100,
        //"color": '#f48aff',
        //"background": "url('./images/for_shop/unicorn_1.png')",
        "is_prop": true,
        "pos_x": 0.85,
        "pos_y": 0.45,
        "text_align": "right",
        "text": text.shop[i].desk[graph_core.lang],
        "text_color": "#fa8f1d",
    })

    graph_core.html_blocks['game_shop'].children['gs_card_block'].children['gs_cb_item_'+(i+1)].add_block('gs_cb_i'+(i+1)+'_buy_btn', {
        "ratio_x": 360/700,
        "ratio_y": 80/295,
        "ratio": 372/82,
        //"color": '#f48aff',
        "background": "url('./images/for_shop/button_off.png')",
        "is_prop": true,
        "pos_x": 0.85,
        "pos_y": 0.95,
        "text_align": "center",
        "text": "Купить",
        "text_color": "#ffcf13",
        "text_padding_w": 0.75,
        "text_padding_h": 0.7,
        "onclick": "graph_core.open_shop_popup("+i+");"
    })
}



graph_core.html_blocks["game_shop"].add_block('gs_back_block', {
    "ratio_x": 110/535,
    "ratio_y": 210/890,
    "ratio": 206/370,
    "color": '#f48aff',
    "background": "url('./images/clock.png')",
    "is_prop": true,
    "pos_x": 0,
    "pos_y": 1
})

graph_core.html_blocks["game_shop"].children['gs_back_block'].add_block('gs_bb_back_button', {
    "ratio_x": 1,
    "ratio_y": 0.25,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/back.png')",
    "is_prop": true,
    "pos_x": 0.2,
    "pos_y": 0.9,
    "onclick": "graph_core.open_game_viewport();"
})

graph_core.html_blocks["game_shop"].add_block('gs_special_offer_block', {
    "ratio_x": 448/935,
    "ratio_y": 150/1540,
    "ratio": 446/140,
    "color": '#f48aff',
    "background": "url('./images/for_shop/big_off.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.98,
    "text": "Специальное предложение",
    "text_color": "#e8cd66",
    "text_padding_w": 0.75,
    "text_padding_h": 0.85,
    "text_align": "center",
    "onclick": "graph_core.open_special_offers()"
})

graph_core.html_blocks["game_shop"].add_block('gs_reset_shop_btn', {
    "ratio_x": 190/935,
    "ratio_y": 105/1540,
    "ratio": 189/99,
    "background": "url('./images/for_shop/but_red2.png')",
    "is_prop": true,
    "pos_x": 0.99,
    "pos_y": 0.92,
    "pos_y_mode": "attach_top",
    "pos_y_attach_id": "gs_special_offer_block",
    "margin_y": -2
})

graph_core.html_blocks["game_shop"].add_block('gs_watch_ad_btn', {
    "ratio_x": 190/935,
    "ratio_y": 105/1540,
    "ratio": 189/99,
    "background": "url('./images/for_shop/but_blue2.png')",
    "is_prop": true,
    "pos_x": 0.99,
    "pos_y": 0.99,
    "pos_y_mode": "attach_top",
    "pos_y_attach_id": "gs_reset_shop_btn",
    "margin_y": 0.1,
    "onclick": "graph_core.open_shop_popup2();"
})






// ВСПЛЫВАЮЩИЙ БЛОК ПРИ ПОКУПКЕ

graph_core.html_blocks['game_shop'].add_block('gs_popup_back', {
    "ratio_x": 1,
    "ratio_y": 1,
    "color": 'rgba(0,0,0,0.7)',
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.html_blocks['game_shop'].children['gs_popup_back'].add_block('gs_popup', {
    "ratio_x": 426/514,
    "ratio_y": 506/863,
    "ratio": 764/908,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/for_shop_3.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.html_blocks['game_shop'].children['gs_popup_back'].children['gs_popup'].add_block('gs_popup_close_btn', {
    "ratio_x": 30/426,
    "ratio_y": 30/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    "background": "url('./images/exit.png')",
    "is_prop": true,
    "pos_x": 0.97,
    "pos_y": 0.11,
    onclick: "graph_core.close_shop_popup();"
})

graph_core.html_blocks['game_shop'].children['gs_popup_back'].children['gs_popup'].add_block('gs_popup_title', {
    "ratio_x": 350/426,
    "ratio_y": 40/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.15,
    "text": "Волшебная клюква",
    "text_color": "#ecc868",
    "text_align": "center",
})


graph_core.html_blocks['game_shop'].children['gs_popup_back'].children['gs_popup'].add_block('gs_popup_desk', {
    "ratio_x": 360/426,
    "ratio_y": 100/506,
    //"ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.3,
    "text": "Произрастает в отдалённых областях Зачарованного Леса. Дарует исцеление в случае телесных недугов &#214;",
    "text_color": "#cd883a",
    "text_align": "center",
})

graph_core.html_blocks['game_shop'].children['gs_popup_back'].children['gs_popup'].add_block('gs_popup_slot', {
    "ratio_x": 160/426,
    "ratio_y": 160/506,
    "ratio": 290/288,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/for_buying.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.68,    
})

graph_core.html_blocks['game_shop'].children['gs_popup_back'].children['gs_popup'].children['gs_popup_slot'].add_block('gs_p_s_img', {
    "ratio_x": 1,
    "ratio_y": 1,
    "ratio": 1/1,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/unicorn_1.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5,    
})

graph_core.html_blocks['game_shop'].children['gs_popup_back'].children['gs_popup'].add_block('gs_popup_item_title', {
    "ratio_x": 170/426,
    "ratio_y": 30/506,
    "ratio": 170/30,
    //"color": '#f48aff',
    //"background": "url('./images/for_shop/for_buying.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.83, 
    "text": "Волшебная клюква",
    "text_color": "#cd883a",
    "text_align": "center",   
})

graph_core.html_blocks['game_shop'].children['gs_popup_back'].children['gs_popup'].add_block('gs_popup_buy_btn', {
    "ratio_x": 200/426,
    "ratio_y": 40/506,
    "ratio": 372/82,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/button_off.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.92, 
    /*
    "text": "Купить",
    "text_color": "#cd883a",
    "text_align": "center",   
    */
})

graph_core.html_blocks['game_shop'].children['gs_popup_back'].children['gs_popup'].children['gs_popup_buy_btn'].add_block("gs_p_bb_text", {
    "ratio_x": 0.6,
    "ratio_y": 1,
    //"ratio": 372/82,
    //"color": '#f48aff',
    //"background": "url('./images/for_shop/button_off.png')",
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5, 
    "text": "{coin} 10",
    "text_color": "#cd883a",
    "text_align": "center",
    "text_padding_h": 0.85,
    "onclick": "graph_core.close_shop_popup()"
})






// ВСПЛЫВАЮЩИЙ БЛОК ПРИ НАЖАТИИ НА КНОПКУ ПОСМОТРЕТЬ РЕКЛАМУ ЗА БОНУСНЫЕ МОНЕТКИ

graph_core.html_blocks['game_shop'].add_block('gs_popup2_back', {
    "ratio_x": 1,
    "ratio_y": 1,
    "color": 'rgba(0,0,0,0.7)',
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.html_blocks['game_shop'].children['gs_popup2_back'].add_block('gs_popup2', {
    "ratio_x": 426/514,
    "ratio_y": 506/863,
    "ratio": 764/908,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/for_shop_3.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.html_blocks['game_shop'].children['gs_popup2_back'].children['gs_popup2'].add_block('gs_popup2_close_btn', {
    "ratio_x": 30/426,
    "ratio_y": 30/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    "background": "url('./images/exit.png')",
    "is_prop": true,
    "pos_x": 0.97,
    "pos_y": 0.11,
    onclick: "graph_core.close_shop_popup2();"
})

graph_core.html_blocks['game_shop'].children['gs_popup2_back'].children['gs_popup2'].add_block('gs_popup2_title', {
    "ratio_x": 350/426,
    "ratio_y": 40/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.15,
    "text": text.shop_popup_2_title[graph_core.lang],
    "text_color": "#ecc868",
    "text_align": "center",
})


graph_core.html_blocks['game_shop'].children['gs_popup2_back'].children['gs_popup2'].add_block('gs_popup2_desk', {
    "ratio_x": 280/426,
    "ratio_y": 80/506,
    //"ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.3,
    "text": "Посмотрите рекламу и получите бесплатные бонусные монеты!",
    "text_color": "#cd883a",
    "text_align": "center",
})

graph_core.html_blocks['game_shop'].children['gs_popup2_back'].children['gs_popup2'].add_block('gs_popup2_slot', {
    "ratio_x": 160*(382/288)/426,
    "ratio_y": 160/506,
    "ratio": 382/288,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/coins.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.64,    
})

graph_core.html_blocks['game_shop'].children['gs_popup2_back'].children['gs_popup2'].add_block('gs_popup2_item_title', {
    "ratio_x": 170/426,
    "ratio_y": 30/506,
    "ratio": 170/30,
    //"color": '#f48aff',
    //"background": "url('./images/for_shop/for_buying.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.81, 
    "text": "Лунные монеты",
    "text_color": "#cd883a",
    "text_align": "center",   
})

graph_core.html_blocks['game_shop'].children['gs_popup2_back'].children['gs_popup2'].add_block('gs_popup2_buy_btn', {
    "ratio_x": 200/426,
    "ratio_y": 40/506,
    "ratio": 372/82,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/button_off.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.92, 
    
    "text": "Посмотреть",
    "text_color": "#cd883a",
    "text_align": "center",   
    "text_padding_h": 0.8,
    onclick: "game_core.get_free_money()"
})


// ВСПЛЫВАЮЩИЙ БЛОК ПРИ ПОЛУЧЕНИИ БОНУСНЫХ МОНЕТ

graph_core.html_blocks['game_shop'].add_block('gs_popup3_back', {
    "ratio_x": 1,
    "ratio_y": 1,
    "color": 'rgba(0,0,0,0.7)',
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.html_blocks['game_shop'].children['gs_popup3_back'].add_block('gs_popup3', {
    "ratio_x": 426/514,
    "ratio_y": 426/863,
    "ratio": 764/656,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/for_shop_4.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.html_blocks['game_shop'].children['gs_popup3_back'].children['gs_popup3'].add_block('gs_popup3_close_btn', {
    "ratio_x": 30/426,
    "ratio_y": 30/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    "background": "url('./images/exit.png')",
    "is_prop": true,
    "pos_x": 0.96,
    "pos_y": 0.15,
    onclick: "graph_core.close_shop_popup3();"
})

graph_core.html_blocks['game_shop'].children['gs_popup3_back'].children['gs_popup3'].add_block('gs_popup3_title', {
    "ratio_x": 350/426,
    "ratio_y": 40/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.23,
    "text": "Спасибо за просмотр!",
    "text_color": "#ecc868",
    "text_align": "center",
})


graph_core.html_blocks['game_shop'].children['gs_popup3_back'].children['gs_popup3'].add_block('gs_popup3_desk', {
    "ratio_x": 330/426,
    "ratio_y": 65/506,
    //"ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.36,
    "text": "Благодарим вас за просмотр рекламы!<br> Вот ваша награда!",
    "text_color": "#cd883a",
    "text_align": "center",
})

graph_core.html_blocks['game_shop'].children['gs_popup3_back'].children['gs_popup3'].add_block('gs_popup3_reward', {
    "ratio_x": 160/426,
    "ratio_y": 65/506,
    //"ratio": 125/288,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.64,  
    "text": "+2 {coin}",
    "text_color": "#cd883a",
    "text_align": "center",
    "text_padding_h": 0.85,
})

graph_core.html_blocks['game_shop'].children['gs_popup3_back'].children['gs_popup3'].add_block('gs_popup3_buy_btn', {
    "ratio_x": 215/426,
    "ratio_y": 50/506,
    "ratio": 372/82,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/button_off.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.89, 
    
    "text": "Забрать",
    "text_color": "#cd883a",
    "text_align": "center",   
    "text_padding_h": 0.8,
    "onclick": "graph_core.close_shop_popup3();"
})

/////////////////////////////////////////////////////////////
//////////////// РАЗДЕЛ ОСОБЫЕ ПРЕДЛОЖЕНИЯ //////////////////
/////////////////////////////////////////////////////////////

graph_core.html_blocks["game_special_offers"] = new my_html_block("game_special_offers", document.getElementById('game_special_offers'), {}, true);


graph_core.html_blocks["game_special_offers"].add_block('gso_title_block', {
    "ratio_x": 650/930,
    "ratio_y": 200/2625,
    "ratio": 554/85,
    "pos_x": 0.5,
    "pos_y": 0.02,
    "text_padding_h": 0.75,
    "is_prop": true,
    "background": "url('./images/title.png')",


    "text": "Предложения",
    "text_color": "#ffcf13",
    "text_align": "center"

})

graph_core.html_blocks["game_special_offers"].add_block('gso_second_block', {
    "ratio_x": 762/935,
    "ratio_y": 100/1540,
    "ratio": 762/100,
    "pos_x": 0.5,
    "pos_y": 0.11,
    "is_prop": true,
    //"background": "red",
})


graph_core.html_blocks["game_special_offers"].children['gso_second_block'].add_block('gso_sb_text', {
    "ratio_x": 442/762,
    "ratio_y": 1.0,
    "ratio": 762/100,
    "pos_x": 0.0,
    "pos_y": 0.0,
    "is_prop": false,
    //"background": "green",
    "text": "Созвездие: Единорог",
    "text_color": "#ffcf13",
})

graph_core.html_blocks["game_special_offers"].children['gso_second_block'].add_block('gso_sb_balance_block', {
    "ratio_x": (762-442)/762,
    "ratio_y": 1.0,
    "ratio": 189/99,
    "pos_y": 0.0,
    "is_prop": true,

    "background": "url('./images/for_shop/but_blue.png')",
    "pos_x_mode": "v2_attach_left",
    "pos_x_attach_id": "gs_sb_text",
    "margin_x": 0.5,
})

graph_core.html_blocks["game_special_offers"].children['gso_second_block'].children['gso_sb_balance_block'].add_block('gso_sb_bb_coin', {
    "ratio_x": 70/189,
    "ratio_y": 70/100,
    "ratio": 1/1,
    "pos_y": 0.5,
    "pos_x": 0.15,
    "is_prop": true,
    "background": "url('./images/coin_little.png')",
})

graph_core.html_blocks["game_special_offers"].children['gso_second_block'].children['gso_sb_balance_block'].add_block('gso_sb_bb_text', {
    "ratio_x": 70/189,
    "ratio_y": 70/100,
    "ratio": 1/1,
    "pos_y": 0.5,
    "pos_x": 0.75,
    "is_prop": true,
    "text": "123",
    "text_color": "#e8cd66",
})

graph_core.html_blocks["game_special_offers"].add_block('gso_cb_img', {
    "ratio_x": 370/535,
    "ratio_y": 260/890,
    "ratio": 688/492,
    "pos_x": 0.5,
    "pos_y": 0.45,
    "is_prop": true,
    "background": "url('./images/for_shop/donat.jpg')",

})

graph_core.html_blocks["game_special_offers"].add_block('gso_card_block', {
    "ratio_x": 860/935,
    "ratio_y": 1000/1540,
    "ratio": 764/980,
    "pos_x": 0.5,
    "pos_y": 0.45,
    "is_prop": true,
    "background": "url('./images/base_3.png')",
})

graph_core.html_blocks["game_special_offers"].children['gso_card_block'].add_block('gso_cb_title', {
    "ratio_x": 250/415,
    "ratio_y": 80/535,
    "ratio": 554/140,
    "pos_x": 0.5,
    "pos_y": 0.15,
    "is_prop": true,
    "background": "url('./images/for_shop/title_big.png')",
    "text": "Сокровище лунного озера",
    "text_align": "center",
    "text_color": STANDARD_TEXT_COLOR,
    "text_padding_h": 0.85,
    "text_padding_w": 0.8
})

graph_core.html_blocks["game_special_offers"].children['gso_card_block'].add_block('gso_cb_desc', {
    "ratio_x": 400/415,
    "ratio_y": 140/535,
    "ratio": 554/140,
    "pos_x": 0.5,
    "pos_y": 0.95,
    "is_prop": false,
    "text": 'Набор "Сокровище лунного озера" позволит приобрести множество предеметов лунного торговца',
    "text_align": "center",
    "text_color": STANDARD_TEXT_COLOR,
    "text_padding_h": 0.85,
    "text_padding_w": 0.8
})


graph_core.html_blocks["game_special_offers"].add_block('gso_back_block', {
    "ratio_x": 110/535,
    "ratio_y": 210/890,
    "ratio": 206/370,
    "color": '#f48aff',
    "background": "url('./images/clock.png')",
    "is_prop": true,
    "pos_x": 0,
    "pos_y": 1
})

graph_core.html_blocks["game_special_offers"].children['gso_back_block'].add_block('gso_bb_back_button', {
    "ratio_x": 1,
    "ratio_y": 0.25,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/back.png')",
    "is_prop": true,
    "pos_x": 0.2,
    "pos_y": 0.9,
    "onclick": "graph_core.close_special_offers();"
})

graph_core.html_blocks['game_special_offers'].add_block('gsi_cb_buy_btn', {
    "ratio_x": 250/494,
    "ratio_y": 50/828,
    "ratio": 372/82,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/button_off.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.86,
    "text_align": "center",
    "text": "Купить",
    "text_color": "#ffcf13",
    "text_padding_w": 0.75,
    "text_padding_h": 0.7,
    //"onclick": "graph_core.open_shop_popup("+i+");"
})

graph_core.html_blocks['game_special_offers'].add_block('gso_promocode_btn', {
    "ratio_x": 220/500,
    "ratio_y": 60/830,
    "ratio": 314/99,
    "is_prop": true,
    background: "url('./images/for_settings/long_red.png')",
    "pos_x": 0.95,
    "pos_y": 0.98,
    "text": "Ввести промокод",
    "text_align": 'center',
    "text_padding_h": 0.9,
    "text_color": STANDARD_TEXT_COLOR,
})

}