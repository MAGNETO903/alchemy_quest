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

var get_best_size = function(ratio, size_x, size_y) {
    var width = Math.min(size_x, size_y * ratio)

    return {x: width, y: ratio}
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

for (var i=0; i < 20; i++) {
    $('body').append("<img src='./images/animation/crystal/00"+format_to_frame(i+1)+".jpg' style='position: absolute; left: -9999px; display: none;' >")
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
    "strict_font_size":20/855,
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавность для обычного состояния
    },
    "hover_style": {
        "transform": "scale(1.1)",
        "transition": "0.3s ease",
        "filter": "brightness(1.2)"
    }
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
    "strict_font_size":20/855,
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавность для обычного состояния
    },
    "hover_style": {
        "transform": "scale(1.1)",
        "transition": "0.3s ease",
        "filter": "brightness(1.2)"
    }
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
    "onclick": "graph_core.open_options();",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавность для обычного состояния
    },
    "hover_style": {
        "transform": "scale(1.3) rotate(180deg)",
        "filter": "brightness(1.2)"
    }
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
    "onclick": "graph_core.open_shop();",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавность для обычного состояния
    },
    "hover_style": {
        "transform": "scale(1.3)",
        "filter": "brightness(1.2)"
    }
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

// основные блоки

// заголовок
graph_core.html_blocks["game_options"].add_block('go_title_block', {
    "ratio_x": 650/930,
    "ratio_y": 200/2625,
    "ratio": 554/85,
    "pos_x": 0.5,
    "pos_y": 0.02,
    "text_padding_h": 0.75,
    "is_prop": true,
    "background": "url('./images/title.png')",


    "text": "настройки",
    "text_color":  STANDARD_TEXT_COLOR,
    "text_align": "center"

})

// центральная карточка
graph_core.html_blocks["game_options"].add_block('go_card_block', {
    "ratio_x": 860/935,
    "ratio_y": 1000/1540,
    "ratio": 764/1083,
    "pos_x": 0.5,
    "pos_y": 0.45,
    "is_prop": true,
    "background": "url('./images/for_shop/new_for_shop.png')",
})

// внизу блок
graph_core.html_blocks["game_options"].add_block('go_bottom_block', {
    "ratio_x": 450/935,
    "ratio_y": 1000/1540 * 0.24,
    "ratio": 3,
    "pos_x": 0.5,
    "pos_y": 0.98,
    "is_prop": true,
    "background": '#440036',
    'border-radius': '20px'
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
    "pos_y": 125/170,
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_1'].add_block('go_cb_sound_btn', {
    "ratio_x": 88/400,
    "ratio_y": 88/170,
    "ratio": 1/1,
    "is_prop": true,
    "background": "url('./images/for_settings/sound_on.png')",
    "pos_x": 305/400,
    "pos_y": 125/170,
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_2'].add_block('go_cb_i2_text_1', {
    "ratio_x": 180/400,
    "ratio_y": 130/180,
    "ratio": 125/30,
    "is_prop": true,
   
    "pos_x": 0.1,
    "pos_y": 0.45,
    "text": "Нашли баг?",
    "text_color": ORANGE_TEXT_COLOR,
})

graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_2'].add_block('go_cb_i2_text_2', {
    "ratio_x": 180/400,
    "ratio_y": 130/180,
    "ratio": 125/30,
    "is_prop": true,
   
    "pos_x": 0.1,
    "pos_y": 0.85,
    "text": "Авторизация",
    "text_color": ORANGE_TEXT_COLOR,
})

// кнопка сообщения об ошибке
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
    onclick: "graph_core.open_popup('#go_bug_report_popup_back')",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

var names = ['Достижения', 'Персонажи', "Концовки"]
var img_name = ['but_achieve.png', 'but_who.png', 'but_ends.png']
var big_blocks_ids1 = ['#game_achievements', '#game_characters', '#game_endings']

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
        "text_padding_h": 0.9,
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
        onclick: "graph_core.open_big_block('"+big_blocks_ids1[i]+"')",
        "style": {
            "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
        },
        "hover_style": {
            "transform": "scale(1.1)", // Увеличение и полный оборот
            "filter": "brightness(1.2)"
        }

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
    "pos_y": 0.9,
    "text": "Войти",
    "text_align": 'center',
    "text_padding_h": 0.7,
    "text_color": STANDARD_TEXT_COLOR,
    onclick: "tech_core.login_to_cloud()",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

graph_core.html_blocks['game_options'].children['go_card_block'].children['go_cb_item_2'].add_block('go_cb_i2_btn_2_ok', {
    "ratio_x": 135/400,
    "ratio_y": 100/180,
    "ratio": 314/99,
    "is_prop": true,
    //background: "url('./images/for_settings/long_blue.png')",
    "pos_x": 0.9,
    "pos_y": 0.9,
    "text": "авторизованы",
    "text_align": 'center',
    "text_padding_h": 0.7,
    "text_color": 'green',
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
    "onclick": "graph_core.open_game_viewport();",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.3)", // Увеличение и полный оборот
        "filter": "brightness(1.3)"
    }
})

// содержимое нижнего блока
graph_core.all_html_blocks['go_bottom_block'].add_block('go_bb_title', {
    "ratio_x": 0.4,
    "ratio_y": 0.25,
    "ratio": 2,
    "pos_x": 0.5,
    "pos_y": 0.05,
    "text": "Совет",
    "text_align": 'center',
    "text_color": "rgb(232, 205, 102)",
    "is_prop": true,
})

graph_core.all_html_blocks['go_bottom_block'].add_block('go_bb_text', {
    "ratio_x": 0.9,
    "ratio_y": 0.7,
    "ratio": 2,
    "pos_x": 0.5,
    "pos_y": 0.95,
    "text": "Всегда следите за вашими показателями. Стоит лишь одному упасть до нуля - путь придётся проходить заново.",
    "text_align": 'center',
    "text_color": "rgb(232, 205, 102)",
    //"is_prop": true,
})



// БЛОК БАГРЕПОРТА
graph_core.html_blocks['game_options'].add_block('go_bug_report_popup_back', {
    "ratio_x": 1,
    "ratio_y": 1,
    "color": 'rgba(0,0,0,0.7)',
    "pos_x": 0.5,
    "pos_y": 0.5,
    "style": {
        "z-index": 2
    }
})

graph_core.html_blocks['game_options'].children['go_bug_report_popup_back'].add_block('go_br_popup', {
    "ratio_x": 500/514,
    "ratio_y": 600/863,
    "ratio": 764/908,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/for_shop_3.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5,
    
})

graph_core.html_blocks['game_options'].children['go_bug_report_popup_back'].children['go_br_popup'].add_block('go_br_popup_close_btn', {
    "ratio_x": 30/426,
    "ratio_y": 30/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    "background": "url('./images/exit.png')",
    "is_prop": true,
    "pos_x": 0.97,
    "pos_y": 0.11,
    onclick: "graph_core.close_popup('#go_bug_report_popup_back');",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1) rotate(180deg)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }

})

graph_core.html_blocks['game_options'].children['go_bug_report_popup_back'].children['go_br_popup'].add_block('go_br_popup_title', {
    "ratio_x": 350/426,
    "ratio_y": 40/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.15,
    "text": "Нашли баг?",
    "text_color": "#ecc868",
    "text_align": "center",
})

graph_core.html_blocks['game_options'].children['go_bug_report_popup_back'].children['go_br_popup'].add_block('go_br_popup_desk', {
    "ratio_x": 360/426,
    "ratio_y": 100/506,
    //"ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.3,
    "text": "x",
    "text_color": "#cd883a",
    "text_align": "center",
})


graph_core.html_blocks['game_options'].children['go_bug_report_popup_back'].children['go_br_popup'].add_block('go_br_popup_textarea', {
    "ratio_x": 400/426,
    "ratio_y": 160/506,
    "ratio": 600/288,
    "textarea": true,
    //"color": '#f48aff',
    //"background": "url('./images/for_shop/for_buying.png')",
    "background": "linear-gradient(#2c1d2e, #3d0b26)",

    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.68, 
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }   
})



graph_core.html_blocks['game_options'].children['go_bug_report_popup_back'].children['go_br_popup'].add_block('go_br_popup_send_btn', {
    "ratio_x": 200/426,
    "ratio_y": 40/506,
    "ratio": 372/82,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/button_off.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.92, 
    "text": "отправить",
    /*
    "text": "Купить",
    "text_color": "#cd883a",
    "text_align": "center",   
    */
    "text_color": STANDARD_TEXT_COLOR,
    "onclick": "tech_core.send_report(); graph_core.close_report_popup();",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
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
    "text_padding_h": 0.9,
    //"text_pos_y": 0.9,
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
    "pos_y": 0.8,
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

graph_core.html_blocks["game_shop"].add_block('gs_card_block_outer', {
    "ratio_x": 860/935,
    "ratio_y": 1000/1540,
    "ratio": 764/1083,
    "pos_x": 0.5,
    "pos_y": 0.45,
    "is_prop": true,
    "background": "url('./images/for_shop/card.png')",
})

graph_core.all_html_blocks["gs_card_block_outer"].add_block('gs_card_block', {
    "ratio_x": 0.95,
    "ratio_y": 0.9,
    "pos_x": 0.5,
    "pos_y": 0.5,
})



for (var i=0; i < Object.keys(shop_items).length; i++) {

    graph_core.all_html_blocks['gs_card_block'].add_block('gs_cb_item_'+(i+1), {
        "ratio_x": 800/763,
        "ratio_y": 400/1085,
        "ratio": 697/290,
        //"color": '#f48aff',
        "background": "url('./images/for_shop/block.png')",
        "is_prop": true,
        "pos_x": 0.5,
        "pos_y": 0.06 + i*0.435
    })

    graph_core.all_html_blocks['gs_card_block'].children['gs_cb_item_'+(i+1)].add_block('gs_cb_i'+(i+1)+'_pic', {
        "ratio_x": 200/700,
        "ratio_y": 200/295,
        "ratio": 1/1,
        //"color": '#f48aff',
        "background": "url('"+shop_items[i+1].icon_src+"')",
        "is_prop": true,
        "pos_x": 0.03,
        "pos_y": 0.5
    })

    graph_core.all_html_blocks['gs_card_block'].children['gs_cb_item_'+(i+1)].add_block('gs_cb_i'+(i+1)+'_title', {
        "ratio_x": 500/700,
        "ratio_y": 75/295,
        "ratio": 500/75,
        //"color": '#f48aff',
        //"background": "url('./images/for_shop/unicorn_1.png')",
        "is_prop": true,
        "pos_x": 0.9,
        "pos_y": 0.05,
        "text": shop_items[i+1].title[graph_core.lang],
        "text_color": "#ffcf13",
        "text_align": "center",
        "font_size": 0.3,
    })

    graph_core.all_html_blocks['gs_card_block'].children['gs_cb_item_'+(i+1)].add_block('gs_cb_i'+(i+1)+'_desk', {
        "ratio_x": 400/700,
        "ratio_y": 100/295,
        "ratio": 400/100,
        //"color": '#f48aff',
        //"background": "url('./images/for_shop/unicorn_1.png')",
        "is_prop": true,
        "pos_x": 0.85,
        "pos_y": 0.45,
        "text_align": "right",
        "text":  shop_items[i+1].description[graph_core.lang],
        "text_color": "#fa8f1d",
    })

    graph_core.all_html_blocks['gs_card_block'].children['gs_cb_item_'+(i+1)].add_block('gs_cb_i'+(i+1)+'_buy_btn', {
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
        "text_padding_h": 0.8,
        "onclick": "graph_core.open_shop_popup("+(i+1)+");",
        "style": {
            "transition": "transform 0.3s ease, filter 0.3s ease" // Плавность для обычного состояния
        },
        "hover_style": {
            "transform": "scale(1.1)",
            "filter": "brightness(1.2)"
        }
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
    "onclick": "graph_core.open_game_viewport();",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавность для обычного состояния
    },
    "hover_style": {
        "transform": "scale(1.3)",
        "filter": "brightness(1.2)"
    }
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
    "onclick": "graph_core.open_special_offers()",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавность для обычного состояния
    },
    "hover_style": {
        "transform": "scale(1.1)",
        "filter": "brightness(1.2)"
    }
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
    "margin_y": -2,
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавность для обычного состояния
    },
    "hover_style": {
        "transform": "scale(1.1)",
        "filter": "brightness(1.2)"
    }
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
    "onclick": "graph_core.open_shop_popup2();",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавность для обычного состояния
    },
    "hover_style": {
        "transform": "scale(1.3)",
        "filter": "brightness(1.3)"
    }
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
    "ratio_x": 500/514,
    "ratio_y": 600/863,
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
    onclick: "graph_core.close_shop_popup();",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1) rotate(180deg)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

graph_core.html_blocks['game_shop'].children['gs_popup_back'].children['gs_popup'].add_block('gs_popup_title', {
    "ratio_x": 350/426,
    "ratio_y": 60/506,
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
    "ratio_y": 150/506,
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
    "ratio_x": 190/426,
    "ratio_y": 80/506,
    "ratio": 170/30,
    //"color": '#f48aff',
    //"background": "url('./images/for_shop/for_buying.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.83, 
    "text_padding_h": 1,
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
    "text": "{coin} 10",
    "text_color": "#cd883a",
    "text_align": "center",
    "onclick": "tech_core.buy_item();",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
    /*
    "text": "Купить",
    "text_color": "#cd883a",
    "text_align": "center",   
    */
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
    "ratio_x": 500/514,
    "ratio_y": 600/863,
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
    onclick: "graph_core.close_shop_popup2();",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1) rotate(180deg)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

graph_core.html_blocks['game_shop'].children['gs_popup2_back'].children['gs_popup2'].add_block('gs_popup2_title', {
    "ratio_x": 350/426,
    "ratio_y": 60/506,
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
    "text_padding_h": 1,
    "text_padding_w": 1,
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
    "ratio_x": 250/426,
    "ratio_y": 80/506,
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
    onclick: "game_core.get_free_money()",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
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
    pos_x: 0.94,
    "is_prop": true,

    "background": "url('./images/for_shop/but_blue.png')",
    //"pos_x_mode": "v2_attach_left",
    //"pos_x_attach_id": "gs_sb_text",
    //"margin_x": 0.5,
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

graph_core.html_blocks["game_special_offers"].add_block('gso_card_block_outer', {
    "ratio_x": 860/935,
    "ratio_y": 1000/1540,
    "ratio": 764/1083,
    "pos_x": 0.5,
    "pos_y": 0.45,
    "is_prop": true,
    "background": "url('./images/for_shop/card.png')",
})

graph_core.all_html_blocks["gso_card_block_outer"].add_block('gso_card_block', {
    "ratio_x": 0.95,
    "ratio_y": 0.9,
    "pos_x": 0.5,
    "pos_y": 0.5,
})


for (var i=0; i < Object.keys(special_shop_items).length; i++) {

    graph_core.all_html_blocks['gso_card_block'].add_block('gso_cb_item_'+(i+1), {
        "ratio_x": 800/763,
        "ratio_y": 400/1085,
        "ratio": 697/290,
        //"color": '#f48aff',
        "background": "url('./images/for_shop/block.png')",
        "is_prop": true,
        "pos_x": 0.5,
        "pos_y": 0.06 + i*0.435,
        "table_cell_num": i,
        "table_margin_y": 1.15
    })

    graph_core.all_html_blocks['gso_card_block'].children['gso_cb_item_'+(i+1)].add_block('gso_cb_i'+(i+1)+'_pic', {
        "ratio_x": 200/700,
        "ratio_y": 200/295,
        "ratio": 1/1,
        //"color": '#f48aff',
        "background": "url('"+special_shop_items[i+1].icon_src+"')",
        "is_prop": true,
        "pos_x": 0.03,
        "pos_y": 0.5
    })

    graph_core.all_html_blocks['gso_card_block'].children['gso_cb_item_'+(i+1)].add_block('gso_cb_i'+(i+1)+'_title', {
        "ratio_x": 500/700,
        "ratio_y": 75/295,
        "ratio": 500/75,
        //"color": '#f48aff',
        //"background": "url('./images/for_shop/unicorn_1.png')",
        "is_prop": true,
        "pos_x": 0.9,
        "pos_y": 0.05,
        "text": special_shop_items[i+1].title[graph_core.lang],
        "text_color": "#ffcf13",
        "text_align": "center",
        "font_size": 0.3,
    })

    graph_core.all_html_blocks['gso_card_block'].children['gso_cb_item_'+(i+1)].add_block('gso_cb_i'+(i+1)+'_desk', {
        "ratio_x": 400/700,
        "ratio_y": 100/295,
        "ratio": 400/100,
        //"color": '#f48aff',
        //"background": "url('./images/for_shop/unicorn_1.png')",
        "is_prop": true,
        "pos_x": 0.85,
        "pos_y": 0.45,
        "text_align": "right",
        "text":  special_shop_items[i+1].description[graph_core.lang],
        "text_color": "#fa8f1d",
    })

    graph_core.all_html_blocks['gso_card_block'].children['gso_cb_item_'+(i+1)].add_block('gso_cb_i'+(i+1)+'_buy_btn', {
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
        "text_padding_h": 0.8,
        "onclick": "graph_core.open_shop_popup2("+(i+1)+");",
        "style": {
            "transition": "transform 0.3s ease, filter 0.3s ease" // Плавность для обычного состояния
        },
        "hover_style": {
            "transform": "scale(1.1)",
            "filter": "brightness(1.2)"
        }
    })
}


/*

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
    "onclick": "graph_core.open_special_shop_popup("+i+");"
})

// кнопки переключения 
graph_core.all_html_blocks['game_special_offers'].add_block('gso_left_button', {
    "ratio_x": 0.1,
    "ratio_y": 0.15,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/left.png')",
    "is_prop": true,
    "pos_x": 0.08,
    "pos_y": 0.5,
    "onclick": "graph_core.open_big_block('#game_shop');"
})

graph_core.all_html_blocks['game_special_offers'].add_block('gso_right_button', {
    "ratio_x": 0.1,
    "ratio_y": 0.15,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/right.png')",
    "is_prop": true,
    "pos_x": 0.92,
    "pos_y": 0.5,
    "onclick": "graph_core.open_big_block('#game_shop');"
})

*/


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

graph_core.all_html_blocks['gso_back_block'].add_block('gso_bb_back_button', {
    "ratio_x": 1,
    "ratio_y": 0.25,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/back.png')",
    "is_prop": true,
    "pos_x": 0.2,
    "pos_y": 0.9,
    "onclick": "graph_core.open_big_block('#game_shop');",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.3) ", // Увеличение и полный оборот
        "filter": "brightness(1.3)"
    }
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
    onclick: "graph_core.open_popup('#gso_promocode_popup_back');",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})




// ВСПЛЫВАЮЩИЙ БЛОК ДЛЯ ВВОДА ПРОМОКОДА
graph_core.html_blocks['game_special_offers'].add_block('gso_promocode_popup_back', {
    "ratio_x": 1,
    "ratio_y": 1,
    "color": 'rgba(0,0,0,0.7)',
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.all_html_blocks['gso_promocode_popup_back'].add_block('gso_p_popup', {
    "ratio_x": 1,
    "ratio_y": 600/863,
    "ratio": 764/908,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/for_shop_3.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.all_html_blocks['gso_p_popup'].add_block('gso_p_popup_close_btn', {
    "ratio_x": 30/426,
    "ratio_y": 30/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    "background": "url('./images/exit.png')",
    "is_prop": true,
    "pos_x": 0.97,
    "pos_y": 0.11,
    onclick: "graph_core.close_popup('#gso_promocode_popup_back');",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease", // Плавный переход
        "z-index": 2
    },
    "hover_style": {
        "transform": "scale(1.1) rotate(180deg)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

graph_core.all_html_blocks['gso_p_popup'].add_block('gso_p_popup_title', {
    "ratio_x": 420/426,
    "ratio_y": 60/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.15,
    "text": "Нашли промокод?",
    "text_color": "#ecc868",
    "text_align": "center",
})

graph_core.all_html_blocks['gso_p_popup'].add_block('gso_p_popup_desk', {
    "ratio_x": 360/426,
    "ratio_y": 100/506,
    //"ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.3,
    "text": "Если у вас есть промокод, то поскорее им воспользуйтесь :)",
    "text_color": "#cd883a",
    "text_align": "center",
})


graph_core.all_html_blocks['gso_p_popup'].add_block('gso_p_popup_textarea', {
    "ratio_x": 400/426,
    "ratio_y": 160/506,
    "ratio": 600/288,
    "textarea": true,
    //"color": '#f48aff',
    //"background": "url('./images/for_shop/for_buying.png')",
    "background": "linear-gradient(#2c1d2e, #3d0b26)",
    style: {
        "color": STANDARD_TEXT_COLOR
    },
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.68,    
})



graph_core.all_html_blocks['gso_p_popup'].add_block('gso_p_popup_send_btn', {
    "ratio_x": 200/426,
    "ratio_y": 40/506,
    "ratio": 372/82,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/button_off.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.92, 
    
    "text": "Отправить",
    "text_color": STANDARD_TEXT_COLOR,
    "text_align": "center",   
    
    "onclick": "tech_core.send_promocode(); graph_core.close_popup('#gso_promocode_popup_back')",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})




// ВСПЛЫВАЮЩИЙ БЛОК - РЕКАЦИЯ НА ВВОД ПРОМОКОДА

graph_core.html_blocks['game_special_offers'].add_block('gso_popup3_back', {
    "ratio_x": 1,
    "ratio_y": 1,
    "color": 'rgba(0,0,0,0.7)',
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.html_blocks['game_special_offers'].children['gso_popup3_back'].add_block('gso_popup3', {
    "ratio_x": 426/514,
    "ratio_y": 426/863,
    "ratio": 764/656,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/for_shop_4.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.html_blocks['game_special_offers'].children['gso_popup3_back'].children['gso_popup3'].add_block('gso_popup3_close_btn', {
    "ratio_x": 30/426,
    "ratio_y": 30/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    "background": "url('./images/exit.png')",
    "is_prop": true,
    "pos_x": 0.96,
    "pos_y": 0.15,
    onclick: "graph_core.close_all_popups();"
})

graph_core.html_blocks['game_special_offers'].children['gso_popup3_back'].children['gso_popup3'].add_block('gso_popup3_title', {
    "ratio_x": 350/426,
    "ratio_y": 55/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.23,
    "text": "Спасибо за просмотр!",
    "text_color": "#ecc868",
    "text_align": "center",
})


graph_core.html_blocks['game_special_offers'].children['gso_popup3_back'].children['gso_popup3'].add_block('gso_popup3_desk', {
    "ratio_x": 330/426,
    "ratio_y": 150/506,
    //"ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.6,
    "text": "Благодарим вас за просмотр рекламы!<br> Вот ваша награда!",
    "text_color": "#cd883a",
    "text_align": "center",
})


graph_core.html_blocks['game_special_offers'].children['gso_popup3_back'].children['gso_popup3'].add_block('gso_popup3_buy_btn', {
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
    "onclick": "graph_core.close_all_popups();"
})


///
/// ВСПЛЫВАЮЩИЙ БЛОК ПРИ ПОКУПКЕ ТОВАРА ИЗ ОСОБЫХ ПРЕДЛОЖЕНИЙ

graph_core.html_blocks['game_special_offers'].add_block('gso_popup_back', {
    "ratio_x": 1,
    "ratio_y": 1,
    "color": 'rgba(0,0,0,0.7)',
    "pos_x": 0.5,
    "pos_y": 0.5,
    "style": {
        "z-index": 2
    }
})

graph_core.all_html_blocks['gso_popup_back'].add_block('gso_popup', {
    "ratio_x": 500/514,
    "ratio_y": 600/863,
    "ratio": 764/908,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/for_shop_3.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.all_html_blocks['gso_popup'].add_block('gso_popup_close_btn', {
    "ratio_x": 30/426,
    "ratio_y": 30/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    "background": "url('./images/exit.png')",
    "is_prop": true,
    "pos_x": 0.97,
    "pos_y": 0.11,
    "onclick": "graph_core.close_all_popups();",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1) rotate(180deg)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

graph_core.all_html_blocks['gso_popup'].add_block('gso_popup_title', {
    "ratio_x": 350/426,
    "ratio_y": 60/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.15,
    "text": "Волшебная клюква",
    "text_color": "#ecc868",
    "text_align": "center",
})


graph_core.all_html_blocks['gso_popup'].add_block('gso_popup_desk', {
    "ratio_x": 340/426,
    "ratio_y": 130/506,
    //"ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.3,
    "text": "Произрастает в отдалённых областях Зачарованного Леса. Дарует исцеление в случае телесных недугов &#214;",
    "text_color": "#cd883a",
    "text_align": "center",
})

graph_core.all_html_blocks['gso_popup'].add_block('gso_popup_slot', {
    "ratio_x": 160/426,
    "ratio_y": 160/506,
    "ratio": 290/288,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/for_buying.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.68,    
})

graph_core.all_html_blocks['gso_popup_slot'].add_block('gso_p_s_img', {
    "ratio_x": 1,
    "ratio_y": 1,
    "ratio": 1/1,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/unicorn_1.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5,    
})

graph_core.all_html_blocks['gso_popup'].add_block('gso_popup_item_title', {
    "ratio_x": 190/426,
    "ratio_y": 80/506,
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

graph_core.all_html_blocks['gso_popup'].add_block('gso_popup_buy_btn', {
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
    onclick: "tech_core.make_purchase(1);",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

graph_core.all_html_blocks['gso_popup_buy_btn'].add_block("gso_p_bb_text", {
    "ratio_x": 0.6,
    "ratio_y": 1,
    //"ratio": 372/82,
    //"color": '#f48aff',
    //"background": "url('./images/for_shop/button_off.png')",
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5, 
    "text": "{yan} 1",
    "text_color": "#cd883a",
    "text_align": "center",
    "text_padding_h": 0.85,
    
})





graph_core.html_blocks['game_shop'].add_block('go_gso_popup_back', {
    "ratio_x": 1,
    "ratio_y": 1,
    "color": 'rgba(0,0,0,0.7)',
    "pos_x": 0.5,
    "pos_y": 0.5,
    "style": {
        "z-index": 2
    }
})

graph_core.all_html_blocks['go_gso_popup_back'].add_block('go_gso_popup', {
    "ratio_x": 500/514,
    "ratio_y": 600/863,
    "ratio": 764/908,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/for_shop_3.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5,
})

graph_core.all_html_blocks['go_gso_popup'].add_block('go_gso_popup_close_btn', {
    "ratio_x": 30/426,
    "ratio_y": 30/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    "background": "url('./images/exit.png')",
    "is_prop": true,
    "pos_x": 0.97,
    "pos_y": 0.11,
    "onclick": "graph_core.close_all_popups();",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1) rotate(180deg)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

graph_core.all_html_blocks['go_gso_popup'].add_block('go_gso_popup_title', {
    "ratio_x": 350/426,
    "ratio_y": 60/506,
    "ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.15,
    "text": "Волшебная клюква",
    "text_color": "#ecc868",
    "text_align": "center",
})


graph_core.all_html_blocks['go_gso_popup'].add_block('go_gso_popup_desk', {
    "ratio_x": 340/426,
    "ratio_y": 130/506,
    //"ratio": 1/1,
    //"color": '#f48aff',
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.3,
    "text": "Произрастает в отдалённых областях Зачарованного Леса. Дарует исцеление в случае телесных недугов &#214;",
    "text_color": "#cd883a",
    "text_align": "center",
})

graph_core.all_html_blocks['go_gso_popup'].add_block('go_gso_popup_slot', {
    "ratio_x": 160/426,
    "ratio_y": 160/506,
    "ratio": 290/288,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/for_buying.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.68,    
})

graph_core.all_html_blocks['go_gso_popup_slot'].add_block('go_gso_p_s_img', {
    "ratio_x": 1,
    "ratio_y": 1,
    "ratio": 1/1,
    //"color": '#f48aff',
    "background": "url('./images/for_shop/unicorn_1.png')",
    "is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5,    
})

graph_core.all_html_blocks['go_gso_popup'].add_block('go_gso_popup_item_title', {
    "ratio_x": 190/426,
    "ratio_y": 80/506,
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

graph_core.all_html_blocks['go_gso_popup'].add_block('go_gso_popup_buy_btn', {
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
    onclick: "tech_core.make_purchase(1);",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

graph_core.all_html_blocks['go_gso_popup_buy_btn'].add_block("go_gso_p_bb_text", {
    "ratio_x": 0.6,
    "ratio_y": 1,
    //"ratio": 372/82,
    //"color": '#f48aff',
    //"background": "url('./images/for_shop/button_off.png')",
    //"is_prop": true,
    "pos_x": 0.5,
    "pos_y": 0.5, 
    "text": "{yan} 1",
    "text_color": "#cd883a",
    "text_align": "center",
    "text_padding_h": 0.85,
    
})







///////////////////////////////////////////////
//////// БЛОК ДОСТИЖЕНИЙ ////////////////////
/////////////////////////////////////////////////

graph_core.html_blocks["game_achievements"] = new my_html_block("game_achievements", {}, {}, true);

graph_core.html_blocks["game_achievements"].add_block('ga_title', {
    "ratio_x": 650/930,
    "ratio_y": 200/2625,
    "ratio": 554/85,
    "pos_x": 0.5,
    "pos_y": 0.02,
    "text_padding_h": 0.75,
    "is_prop": true,
    "background": "url('./images/title.png')",
    "text": "достижения",
    "text_color": "#ffcf13",
    "text_align": "center"
})

graph_core.html_blocks["game_achievements"].add_block('ga_back_block', {
    "ratio_x": 110/535,
    "ratio_y": 210/890,
    "ratio": 206/370,
    "color": '#f48aff',
    "background": "url('./images/clock.png')",
    "is_prop": true,
    "pos_x": 0,
    "pos_y": 1,
   
})

graph_core.html_blocks["game_achievements"].children['ga_back_block'].add_block('ga_bb_back_button', {
    "ratio_x": 1,
    "ratio_y": 0.25,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/back.png')",
    "is_prop": true,
    "pos_x": 0.2,
    "pos_y": 0.9,
    "onclick": "graph_core.open_big_block('#game_options');",
     "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.3)", // Увеличение и полный оборот
        "filter": "brightness(1.3)"
    }
})

// сам список ачивок
graph_core.html_blocks["game_achievements"].add_block('ga_card_block_outer', {
    "ratio_x": 860/935,
    "ratio_y": 1000/1540,
    "ratio": 764/1083,
    "pos_x": 0.5,
    "pos_y": 0.45,
    "is_prop": true,
    "background": "url('./images/for_achievements/card.png')",
})

graph_core.all_html_blocks["ga_card_block_outer"].add_block('ga_card_block', {
    "ratio_x": 0.95,
    "ratio_y": 0.85,
    "pos_x": 0.5,
    "pos_y": 0.5,
})




for (var i=0; i < 10; i++) {

    graph_core.all_html_blocks['ga_card_block'].add_block('ga_cb_item_'+(i+1), {
        "ratio_x": 700/763,
        "ratio_y": 295/1085,
        "ratio": 697/290,
        //"color": '#f48aff',
        "background": "url('./images/for_achievements/block.png')",
        "is_prop": true,
        "pos_x": 0.5,
        "pos_y": 0.06 + i*0.435
    })

     graph_core.all_html_blocks['ga_card_block'].children['ga_cb_item_'+(i+1)].add_block('ga_cb_i'+(i+1)+'_pic', {
        "ratio_x": 200/700,
        "ratio_y": 200/295,
        "ratio": 1/1,
        //"color": '#f48aff',
        "background": "url('./images/for_achievements/icons/"+('default')+".png')",
        "is_prop": true,
        "pos_x": 0.03,
        "pos_y": 0.5
    })

    graph_core.all_html_blocks['ga_card_block'].children['ga_cb_item_'+(i+1)].add_block('ga_cb_i'+(i+1)+'_title', {
        "ratio_x": 500/700,
        "ratio_y": 75/295,
        "ratio": 500/75,
        //"color": '#f48aff',
        //"background": "url('./images/for_shop/unicorn_1.png')",
        "is_prop": true,
        "pos_x": 0.9,
        "pos_y": 0.05,
        "text": text.achievements['default'].title[graph_core.lang],
        "text_color": "#ffcf13",
        "text_align": "center",
        "font_size": 0.3,
    })

     graph_core.all_html_blocks['ga_card_block'].children['ga_cb_item_'+(i+1)].add_block('ga_cb_i'+(i+1)+'_desk', {
        "ratio_x": 400/700,
        "ratio_y": 100/295,
        "ratio": 400/100,
        //"color": '#f48aff',
        //"background": "url('./images/for_shop/unicorn_1.png')",
        "is_prop": true,
        "pos_x": 0.85,
        "pos_y": 0.45,
        "text_align": "right",
        "text": text.achievements['default'].desk[graph_core.lang],
        "text_color": "#fa8f1d",
    })

    /*raph_core.html_blocks['game_achievements'].children['ga_card_block'].children['ga_cb_item_'+(i+1)].add_block('ga_cb_i'+(i+1)+'_buy_btn', {
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
    */
}

// внизу блок
graph_core.html_blocks["game_achievements"].add_block('ga_bottom_block', {
    "ratio_x": 450/935,
    "ratio_y": 1000/1540 * 0.24,
    "ratio": 3,
    "pos_x": 0.5,
    "pos_y": 0.98,
    "is_prop": true,
    "background": '#440036',
    'border-radius': '20px'
})

graph_core.all_html_blocks['ga_bottom_block'].add_block('ga_bb_title', {
    "ratio_x": 0.4,
    "ratio_y": 0.25,
    "ratio": 2,
    "pos_x": 0.5,
    "pos_y": 0.05,
    "text": "Совет",
    "text_align": 'center',
    "text_color": "rgb(232, 205, 102)",
    "is_prop": true,
})

graph_core.all_html_blocks['ga_bottom_block'].add_block('ga_bb_text', {
    "ratio_x": 0.9,
    "ratio_y": 0.8,
    "ratio": 2,
    "pos_x": 0.5,
    "pos_y": 0.95,
    "text": "За игру вы не раз встретите рекламного мага. Не отказывайтесь от его предложений ;)",
    "text_align": 'center',
    "text_color": "rgb(232, 205, 102)",
    //"is_prop": true,
})

///////////////////////////////////////////////
//////// БЛОК ПЕРСОНАЖЕЙ ////////////////////
/////////////////////////////////////////////////

graph_core.html_blocks["game_characters"] = new my_html_block("game_characters", {}, {}, true);

// заголовок
graph_core.html_blocks["game_characters"].add_block('gch_title', {
    "ratio_x": 650/930,
    "ratio_y": 200/2625,
    "ratio": 554/85,
    "pos_x": 0.5,
    "pos_y": 0.02,
    "text_padding_h": 0.75,
    "is_prop": true,
    "background": "url('./images/title.png')",
    "text": "персонажи",
    "text_color": "#ffcf13",
    "text_align": "center"
})

// подложка
graph_core.html_blocks["game_characters"].add_block('gch_card', {
    "ratio_x": 760/935,
    "ratio_y": 1250/1540,
    "ratio": 764/1083,
    "pos_x": 0.5,
    "pos_y": 0.75,
    "is_prop": false,
    "background": "#440036",
    "style": {
        "z-index": -1
    },
})

// карточки внутри подложки
for (var i=0; i < 30; i++) {
    graph_core.all_html_blocks["gch_card"].add_block('gch_card_block_'+i, {
        "ratio_x": 0.95,
        "ratio_y": 0.5,
        "ratio": 764/979,
        "is_prop": true,
        "background": "url('./images/base_4.png')",
        "color": '#e683f6',
        "pos_x": 0.1,
        "pos_y": 0.1,
        "table_cell_num": i
    })

    graph_core.all_html_blocks["gch_card_block_"+i].add_block('gch_cb_title_'+i, {
        "ratio_x": 360/440,
        "ratio_y": 70/580,
        "is_prop": true,
        "ratio": 554/85,
        
       
        "pos_y": 0.15,
        "pos_x": 0.5,
        "text": "?",
        "text_color": "#e8cd66",
        "1_line_text": false,
        "text_padding_w": 0.8,
        "text_padding_h": 0.8,
        "text_align": "center"
    })

    graph_core.all_html_blocks["gch_card_block_"+i].add_block('gch_cb_img_'+i, {
        "ratio_x": 395/440,
        "ratio_y": 355/580,
        "is_prop": true,
        "ratio": 688/492,
        "pos_y": 0.45,
        "pos_x": 0.5,
        "style": {
            "z-index": -1
        },
        "background": "url('./images/cards/00.jpg')",
    })

    graph_core.all_html_blocks["gch_card_block_"+i].add_block('gch_cb_description_'+i, {
        "ratio_x": 320/380,
        "ratio_y": 100/512,
        "is_prop": true,
        "ratio": 320/100,
        "pos_y": 0.90,
        "pos_x": 0.5,
        "text": "Персонаж не открыт",
        "text_color": "#e8cd66",
        "text_align": "center",
        "strict_font_size":50/855
    })

}

graph_core.html_blocks["game_characters"].add_block('gch_back_block', {
    "ratio_x": 110/535,
    "ratio_y": 210/890,
    "ratio": 206/370,
    "color": '#f48aff',
    "background": "url('./images/clock.png')",
    "is_prop": true,
    "pos_x": 0,
    "pos_y": 1
})

graph_core.html_blocks["game_characters"].children['gch_back_block'].add_block('gch_bb_back_button', {
    "ratio_x": 1,
    "ratio_y": 0.25,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/back.png')",
    "is_prop": true,
    "pos_x": 0.2,
    "pos_y": 0.9,
    "onclick": "graph_core.open_big_block('#game_options');",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.3)", // Увеличение и полный оборот
        "filter": "brightness(1.3)"
    }
})


///////////////////////////////////////////////
//////// БЛОК КОНЦОВОК ////////////////////
/////////////////////////////////////////////////

graph_core.html_blocks["game_endings"] = new my_html_block("game_endings", {}, {}, true);

// заголовок
graph_core.html_blocks["game_endings"].add_block('ge_title', {
    "ratio_x": 650/930,
    "ratio_y": 200/2625,
    "ratio": 554/85,
    "pos_x": 0.5,
    "pos_y": 0.02,
    "text_padding_h": 0.75,
    "is_prop": true,
    "background": "url('./images/title.png')",
    "text": "концовки",
    "text_color": "#ffcf13",
    "text_align": "center"
})

// подложка
graph_core.html_blocks["game_endings"].add_block('ge_card', {
    "ratio_x": 760/935,
    "ratio_y": 1250/1540,
    "ratio": 764/1083,
    "pos_x": 0.5,
    "pos_y": 0.75,
    "is_prop": false,
    "background": "#440036",
    "style": {
        "z-index": -1
    },
})

// карточки внутри подложки
for (var i=0; i < 7; i++) {
    graph_core.all_html_blocks["ge_card"].add_block('ge_card_block_'+i, {
        "ratio_x": 0.95,
        "ratio_y": 0.5,
        "ratio": 764/979,
        "is_prop": true,
        "background": "url('./images/base_4.png')",
        "color": '#e683f6',
        "pos_x": 0.1,
        "pos_y": 0.1,
        "table_cell_num": i
    })

    graph_core.all_html_blocks["ge_card_block_"+i].add_block('ge_cb_title_'+i, {
        "ratio_x": 360/440,
        "ratio_y": 70/580,
        "is_prop": true,
        "ratio": 554/85,
        
       
        "pos_y": 0.15,
        "pos_x": 0.5,
        "text": "?",
        "text_color": "#e8cd66",
        "1_line_text": false,
        "text_padding_w": 0.8,
        "text_padding_h": 0.8,
        "text_align": "center"
    })

    graph_core.all_html_blocks["ge_card_block_"+i].add_block('ge_cb_img_'+i, {
        "ratio_x": 395/440,
        "ratio_y": 355/580,
        "is_prop": true,
        "ratio": 688/492,
        "pos_y": 0.45,
        "pos_x": 0.5,
        "style": {
            "z-index": -1
        },
        "background": "url('./images/cards/00.jpg')",
    })

    graph_core.all_html_blocks["ge_card_block_"+i].add_block('ge_cb_description_'+i, {
        "ratio_x": 320/380,
        "ratio_y": 100/512,
        "is_prop": true,
        "ratio": 320/100,
        "pos_y": 0.90,
        "pos_x": 0.5,
        "text": "Концовка не открыта",
        "text_color": "#e8cd66",
        "text_align": "center",
        "strict_font_size":50/855
    })

}

graph_core.html_blocks["game_endings"].add_block('ge_back_block', {
    "ratio_x": 110/535,
    "ratio_y": 210/890,
    "ratio": 206/370,
    "color": '#f48aff',
    "background": "url('./images/clock.png')",
    "is_prop": true,
    "pos_x": 0,
    "pos_y": 1
})

graph_core.html_blocks["game_endings"].children['ge_back_block'].add_block('ge_bb_back_button', {
    "ratio_x": 1,
    "ratio_y": 0.25,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/back.png')",
    "is_prop": true,
    "pos_x": 0.2,
    "pos_y": 0.9,
    "onclick": "graph_core.open_big_block('#game_options');",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.3)", // Увеличение и полный оборот
        "filter": "brightness(1.3)"
    }
})


/// ПЛАВАЮЩИЙ БЛОК ДЛЯ ОТЛАДКИ
graph_core.html_blocks["game_debug"] = new my_html_block("game_debug", 'global_popup', {
    "ratio_x": 0.3,
    "ratio_y": 0.2,
    "pos_x": 0.0,
    "pos_y": 0.0,
    "is_prop": false,
    "background": "rgba(255, 255, 255, 0.3)"
});

graph_core.html_blocks["game_debug"].add_block('gd_save_btn', {
    "ratio_x": 0.4,
    "ratio_y": 0.4,
    "pos_x": 0.5,
    "pos_y": 0.05,
    "is_prop": false,
    text: "сохранить",
    "text_align": "center",
    "background": "orange",
    onclick: "tech_core.save_progress();"
})

graph_core.html_blocks["game_debug"].add_block('gd_load_btn', {
    "ratio_x": 0.4,
    "ratio_y": 0.4,
    "pos_x": 0.5,
    "pos_y": 0.95,
    "is_prop": false,
    text: "загрузить",
    "text_align": "center",
    "background": "orange",
    onclick: "SHOULD_LOAD_PROGRESS = 1; tech_core.load_progress(); SHOULD_LOAD_PROGRESS = 0;"
})

const position = { x: 0, y: 0 }

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y);

  graph_core.html_blocks["game_debug"].recalculate();
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener
interact('#game_debug')
  .resizable({
    // resize from all edges and corners
    edges: { left: true, right: true, bottom: true, top: true },

    listeners: {
      move (event) {
        var target = event.target
        var x = (parseFloat(target.getAttribute('data-x')) || 0)
        var y = (parseFloat(target.getAttribute('data-y')) || 0)

        // update the element's style
        target.style.width = event.rect.width + 'px'
        target.style.height = event.rect.height + 'px'

        graph_core.html_blocks["game_debug"].options.ratio_x = event.rect.width/graph_core.winW
         graph_core.html_blocks["game_debug"].options.ratio_y = event.rect.height/graph_core.winH

        graph_core.html_blocks["game_debug"].recalculate();

        // translate when resizing from top or left edges
        x += event.deltaRect.left
        y += event.deltaRect.top

        target.style.transform = 'translate(' + x + 'px,' + y + 'px)'

        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
        //target.textContent = Math.round(event.rect.width) + '\u00D7' + Math.round(event.rect.height)
      }
    },
    modifiers: [
      // keep the edges inside the parent
      interact.modifiers.restrictEdges({
        outer: 'parent'
      }),

      // minimum size
      interact.modifiers.restrictSize({
        min: { width: 100, height: 50 }
      })
    ],

    inertia: true
  })
  .draggable({
    listeners: { move: window.dragMoveListener },
    inertia: true,
    modifiers: [
      interact.modifiers.restrictRect({
        restriction: 'parent',
        endOnly: true
      })
    ]
  })


// стилизованный скролбар
var ss = document.styleSheets[0];

ss.insertRule('::-webkit-scrollbar {width: 4px}', 0)

//ss.insertRule('::-webkit-scrollbar {height: 90%}', 0)

ss.insertRule('::-webkit-scrollbar {box-shadow: inset 0 0 5px grey}', 0);
ss.insertRule('::-webkit-scrollbar {border-radius: 10px}', 0);

ss.insertRule('::-webkit-scrollbar-thumb {background: #ffcf13}', 0)
ss.insertRule('::-webkit-scrollbar-thumb {border-radius: 10px}', 0)
ss.insertRule('::-webkit-scrollbar-thumb {width: 2px}', 0)


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
    
    // телефон - портретная ориентация
    if (profile == 2) {
        // настройки: делаем нижний блок выше
        //graph_core.all_html_blocks['go_bottom_block'].options.y_ratio = 1000/1540 * 0.4

         // блок достижений
         graph_core.all_html_blocks['ga_bottom_block'].options.ratio = 1.5
         $('#ga_bb_title').css('display', 'none');
         graph_core.all_html_blocks['ga_bb_text'].options.ratio_y = 0.95;
         graph_core.all_html_blocks['ga_bb_text'].options.ratio_x = 0.95;
         
         // опускаем кнопки для переключения товаров их раздела особых предложений
         graph_core.all_html_blocks['gso_left_button'].options.pos_y = 0.85;
         graph_core.all_html_blocks['gso_right_button'].options.pos_y = 0.85;


        // кнопка купить
        graph_core.all_html_blocks['gsi_cb_buy_btn'].options.pos_y = 0.841

    // ПК - альбомная ориентация
    } else {
        //graph_core.all_html_blocks['go_bottom_block'].options.y_ratio = 1000/1540 * 0.24
         graph_core.all_html_blocks['go_bottom_block'].options.ratio = 3
         $('#go_bb_title').css('display', 'block');
         graph_core.all_html_blocks['go_bb_text'].options.ratio_y = 0.7;
         graph_core.all_html_blocks['go_bb_text'].options.ratio_x = 0.9;
         //graph_core.all_html_blocks['go_bb_text'].options.x_ratio = 0.8;

         // блок достижений
         // блок достижений
         graph_core.all_html_blocks['ga_bottom_block'].options.ratio = 3
         $('#ga_bb_title').css('display', 'block');
         

        // возвращаем на середину кнопки для переключения товаров их раздела особых предложений
        //graph_core.all_html_blocks['gso_left_button'].options.pos_y = 0.5;
        //graph_core.all_html_blocks['gso_right_button'].options.pos_y = 0.5;

        // кнопка купить
        //graph_core.all_html_blocks['gsi_cb_buy_btn'].options.pos_y = 0.86










        // ЗДЕСЬ БУДЕМ ЖЁСТКО ПЕРЕКРАИВАТЬ ИНТЕРФЕЙС

        graph_core.all_html_blocks['ans_block_1'].options = {
            "ratio_x": 240/535,
            "ratio_y": 85/890,
            "ratio": 401/161,
            "is_prop": true,
            "background": "url('./images/right_btn_new.png')",
            "color": '#f48aff',
            "pos_x_mode": "attach_left_left",
            "pos_x_attach_id": "card_block",
            "margin_x": -1.1,
            "margin_y": 0.1,
            "pos_x": 0.1,
            "pos_y": 0.7,
            "text_color": "#e8cd66",
            "text_padding_w": 0.75,
            "text_padding_h": 0.7,
            "text_align": "center",
            "onclick": "game_core.next_card(1);",
            "strict_font_size": 20/855,
            "hover_style": {
                "transform": "scale(1.1)",
                "transition": "0.3s ease",
                "filter": "brightness(1.2)"
            }
        };


        graph_core.all_html_blocks['ans_block_2'].options = {
            "ratio_x": 240/535,
            "ratio_y": 85/890,
            "ratio": 401/161,
            "is_prop": true,
            "background": "url('./images/left_btn_new.png')",
            
            "pos_x_mode": "attach_right",
            "pos_x_attach_id": "card_block",
            "margin_x": 1.1,
            "margin_y": 0.1,
            "pos_x": 1.5,
            "pos_y": 0.7,
            //"text": "Прости, но я не знаю что со мной",
            "text_color": "#e8cd66",
            "text_padding_w": 0.75,
            "text_padding_h": 0.7,
            "text_align": "center",
            "onclick": "game_core.next_card(2);",
            "strict_font_size":20/855
            }

        graph_core.all_html_blocks['card_description'].options = {
            "ratio_x": 320/380,
            "ratio_y": 150/512,
            "is_prop": true,
            "ratio": 320/100,
            "pos_y": 0.90,
            "pos_x": 0.5,
            "text_padding_h": 1,
            //"text": "Мне не нравится, что в нашем городе так много сплетников.",
            "text_color": "#e8cd66",
            "text_align": "center",
            "strict_font_size":40/855
        }

        graph_core.all_html_blocks['card_block'].options =  {
            "ratio_x": 450/480,
            "ratio_y": 580/800,
            "ratio": 764/979,
            "is_prop": true,
            "background": "url('./images/base_4.png')",
            "color": '#e683f6',
            "pos_x": 0.5,
            "pos_y": 0.5
        }

        // Добавляем стили для анимации
var style = document.createElement('style');
style.innerHTML = `
    @keyframes flashGreen {
        0% { background: linear-gradient(#00FF00, #00AA00); }
        100% { background: linear-gradient(#DEE700, #FF2E51); }
    }

    @keyframes flashRed {
        0% { background: linear-gradient(#FF0000, #AA0000); }
        100% { background: linear-gradient(#DEE700, #FF2E51); }
    }

    .flash-green {
        animation: flashGreen 0.5s ease-in-out;
    }

    .flash-red {
        animation: flashRed 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);
        

        // МАГАЗ

        graph_core.all_html_blocks['gs_title_block'].options = {
    "ratio_x": 650/930,
    "ratio_y": 200/2625,
    "ratio": 554/85,
    "pos_x": 0.02,
    "pos_y": 0.02,
    "text_padding_h": 0.9,
    //"text_pos_y": 0.9,
    "is_prop": true,
    "background": "url('./images/title.png')",


    "text": "Магазин",
    "text_color": "#ffcf13",
    "text_align": "center"

}

graph_core.all_html_blocks['gs_second_block'].options = {
    "ratio_x": 762/935,
    "ratio_y": 100/1540,
    "ratio": 762/100,
    "pos_x": 0.95,
    "pos_y": 0.02,
    "is_prop": true,
    //"background": "red",
}

graph_core.all_html_blocks['gs_sb_balance_block'].options = {
    "ratio_x": (762-442)/762,
    "ratio_y": 1.0,
    "ratio": 250/99,
    "pos_y": 0.0,
    "is_prop": true,

    "background": "url('./images/for_shop/but_blue.png')",
    "pos_x_mode": "v2_attach_left",
    "pos_x_attach_id": "gs_sb_text",
    "margin_x": 0.4,
}

graph_core.all_html_blocks['gs_sb_bb_text'].options = {
    "ratio_x": 100/189,
    "ratio_y": 90/100,
    //"ratio": 1/1,
    "pos_y": 0.95,
    "pos_x": 0.95,
    //"is_prop": true,
    "text": "123",
    "text_color": "#e8cd66",
}

graph_core.all_html_blocks['gs_card_block_outer'].options = {
    "ratio_x": 780/935,
    "ratio_y": 1000/1540,
    "ratio": (764*2)/1083,
    "pos_x": 0.5,
    "pos_y": 0.45,
    //"is_prop": true,
    "background": "url('./images/for_shop/card.png') 100%",
    "style": {
        "background-size": "50%",
        "border-radius": "40px 40px"
    }
}

cols = 3
margin = 0.02

shop_margins = {
    "2": 0,
    "3": -0.1, 
    "4": -0.6
}




for (var i=0; i < Object.keys(shop_items).length; i++) {
    block_w = (1 - margin*(cols+1)) / cols 
    graph_core.all_html_blocks['gs_cb_item_'+(i+1)].options.table_cell_num = i
    graph_core.all_html_blocks['gs_cb_item_'+(i+1)].options.table_margin_y = 1.15


    graph_core.all_html_blocks['gs_cb_i'+(i+1)+'_pic'].options = {
        "ratio_x": 200/700,
        "ratio_y": 200/295,
        "ratio": 1/1,
        //"color": '#f48aff',
        "background": "url('"+shop_items[i+1].icon_src+"')",
        "is_prop": true,
        "pos_x": 0.03,
        "pos_y": 0.5
    }

    /*
    graph_core.all_html_blocks['gs_cb_i'+(i+1)+'_title'].options = {
        "ratio_x": 500/700,
        "ratio_y": 75/295,
        "ratio": 500/75,
        //"color": '#f48aff',
        //"background": "url('./images/for_shop/unicorn_1.png')",
        "is_prop": true,
        "pos_x": 0.9,
        "pos_y": 0.05,
        "text": shop_items[i+1].title[graph_core.lang],
        "text_color": "#ffcf13",
        "text_align": "center",
        "font_size": 0.3,
    }

    graph_core.all_html_blocks['gs_cb_i'+(i+1)+'_desk'].options = {
        "ratio_x": 400/700,
        "ratio_y": 100/295,
        "ratio": 400/100,
        //"color": '#f48aff',
        //"background": "url('./images/for_shop/unicorn_1.png')",
        "is_prop": true,
        "pos_x": 0.85,
        "pos_y": 0.45,
        "text_align": "right",
        "text":  shop_items[i+1].description[graph_core.lang],
        "text_color": "#fa8f1d",
    }

    graph_core.all_html_blocks['gs_cb_i'+(i+1)+'_buy_btn'].options = {
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
        "text_padding_h": 0.8,
        "onclick": "graph_core.open_shop_popup("+(i+1)+");",
        "style": {
            "transition": "transform 0.3s ease, filter 0.3s ease" // Плавность для обычного состояния
        },
        "hover_style": {
            "transform": "scale(1.1)",
            "filter": "brightness(1.2)"
        }
    }
    */
}


// НАСТРОЙКИ
// центральная карточка
graph_core.all_html_blocks['go_card_block'].options = {
    "ratio_x": 860/935,
    "ratio_y": 1000/1540,
    "ratio": 1083/764,
    "pos_x": 0.5,
    "pos_y": 0.45,
    "is_prop": true,
    "background": "url('./images/for_shop/shop_2.png')",
}

// внизу блок
graph_core.html_blocks["game_options"].add_block('go_bottom_block', {
    "ratio_x": 450/935,
    "ratio_y": 1000/1540 * 0.24,
    "ratio": 3,
    "pos_x": 0.5,
    "pos_y": 0.98,
    "is_prop": true,
    "background": '#440036',
    'border-radius': '20px'
})


for (var i=0; i < 3; i++) {
    graph_core.all_html_blocks['go_cb_item_'+(i+1)].options = {
        "ratio_x": 0.62,
        "ratio_y": 0.42,
        "ratio": 700/295,
        //"color": '#f48aff',
        "background": "linear-gradient(to right, #8a4b2c, #121212, #003366)",
        "is_prop": true,
        "pos_x": 0.15,
        "pos_y": 0.12 + i*0.76,
        "style": {
            "border-radius": "30px"
        }
    }
    if (i < 2) {
        graph_core.all_html_blocks['go_cb_i'+(i+1)+'_title'].options = {
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
        }
    }
}


graph_core.all_html_blocks['go_cb_item_3'].options = {
        "ratio_x": 270/1085,
        "ratio_y": 650/763,
        "ratio": 250/700,
        //"color": '#f48aff',
        "background": "linear-gradient(to right, #8a4b2c, #121212, #003366)",
        "is_prop": true,
        "pos_x": 0.92,
        "pos_y": 0.5 ,
        "style": {
            "border-radius": "30px"
        }
    }
/*
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

// кнопка сообщения об ошибке
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
    onclick: "graph_core.open_popup('#go_bug_report_popup_back')"
})*/

var names = ['Достижения', 'Персонажи', "Концовки"]
var img_name = ['but_achieve.png', 'but_who.png', 'but_ends.png']
var big_blocks_ids1 = ['#game_achievements', '#game_characters', '#game_endings']

for (var i=0; i < 3; i++) {
    graph_core.all_html_blocks['go_cb_i3_img_'+(i+1)].options =  {
        "ratio_y": 100/400,
        "ratio_x": 100/180,
        "ratio": 1,
        "is_prop": true,
        "background": "url('./images/for_settings/"+img_name[i]+"')",
        "pos_y": 0.5*i+(1-i)*0.07-0.04,
        "pos_x": 0.5,
        onclick: "graph_core.open_big_block('"+big_blocks_ids1[i]+"')"
    }

    graph_core.all_html_blocks['go_cb_i3_text_'+(i+1)].options = {
        "ratio_y": 35/180,
        "ratio_x": 0.9,
        "ratio": 314/99,
        //"is_prop": true,
        //background: "url('./images/for_settings/long_red.png')",
        "pos_x": 0.5,
        "pos_y": 0.5*i+0.2,
        "text": names[i],
        "text_align": 'center',
        "text_padding_h": 0.9,
        "text_color": ORANGE_TEXT_COLOR,
        "pos_y_mode": "attach_bottom",
        "pos_y_attach_id": 'go_cb_i3_img_'+(i+1),
        "margin_y": -1.2,
    }

    
}

// МАГАЗИН АЧИВОК

graph_core.all_html_blocks['ga_card_block_outer'].options = {
    "ratio_x": 860/935,
    "ratio_y": 1000/1540,
    "ratio": (764*2)/1083,
    "pos_x": 0.5,
    "pos_y": 0.45,
    //"is_prop": true,
    "background": "url('./images/for_achievements/card.png') center",
    "style": {
        "border-radius": "40px"
    }
}

graph_core.all_html_blocks["ga_card_block"].options = {
    "ratio_x": 0.95,
    "ratio_y": 0.85,
    "pos_x": 0.5,
    "pos_y": 0.5,
}




for (var i=0; i < 10; i++) {
    graph_core.all_html_blocks['ga_cb_item_'+(i+1)].options = {
        "ratio_x": 700/763,
        "ratio_y": 400/1085,
        "ratio": 697/290,
        //"color": '#f48aff',
        "background": "url('./images/for_achievements/block.png')",
        "is_prop": true,
        "pos_x": 0.5,
        "pos_y": 0.06 + i*0.435,
        "table_cell_num": i,
        "table_margin_y": 1.1,
    }

    graph_core.all_html_blocks['ga_cb_i'+(i+1)+'_desk'].options = {
        "ratio_x": 400/700,
        "ratio_y": 200/295,
        "ratio": 300/100,
        //"color": '#f48aff',
        //"background": "url('./images/for_shop/unicorn_1.png')",
        "is_prop": true,
        "pos_x": 0.85,
        "pos_y": 0.45,
        "text_align": "right",
        "text": text.achievements['default'].desk[graph_core.lang],
        "text_color": "#fa8f1d",
    }
}

/*
// внизу блок
graph_core.html_blocks["game_achievements"].add_block('ga_bottom_block', {
    "ratio_x": 450/935,
    "ratio_y": 1000/1540 * 0.24,
    "ratio": 3,
    "pos_x": 0.5,
    "pos_y": 0.98,
    "is_prop": true,
    "background": '#440036',
    'border-radius': '20px'
})

graph_core.all_html_blocks['ga_bottom_block'].add_block('ga_bb_title', {
    "ratio_x": 0.4,
    "ratio_y": 0.25,
    "ratio": 2,
    "pos_x": 0.5,
    "pos_y": 0.05,
    "text": "Совет",
    "text_align": 'center',
    "text_color": "rgb(232, 205, 102)",
    "is_prop": true,
})

graph_core.all_html_blocks['ga_bottom_block'].add_block('ga_bb_text', {
    "ratio_x": 0.9,
    "ratio_y": 0.7,
    "ratio": 2,
    "pos_x": 0.5,
    "pos_y": 0.95,
    "text": "За игру вы не раз встретите рекламного мага. Не отказывайтесь от его предложений ;)",
    "text_align": 'center',
    "text_color": "rgb(232, 205, 102)",
    //"is_prop": true,
})

        */

        // ДОНАТНАЯ СЕКЦИЯ
        
        graph_core.all_html_blocks['gso_title_block'].options = {
    "ratio_x": 650/930,
    "ratio_y": 200/2625,
    "ratio": 554/85,
    "pos_x": 0.02,
    "pos_y": 0.02,
    "text_padding_h": 0.9,
    //"text_pos_y": 0.9,
    "is_prop": true,
    "background": "url('./images/title.png')",


    "text": "Предложения",
    "text_color": "#ffcf13",
    "text_align": "center"

}

graph_core.all_html_blocks['gso_second_block'].options = {
    "ratio_x": 762/935,
    "ratio_y": 100/1540,
    "ratio": 762/100,
    "pos_x": 0.95,
    "pos_y": 0.02,
    "is_prop": true,
    //"background": "red",
}

graph_core.all_html_blocks['gso_sb_balance_block'].options = {
    "ratio_x": (762-442)/762,
    "ratio_y": 1.0,
    "ratio": 250/99,
    "pos_y": 0.0,
    "is_prop": true,

    "background": "url('./images/for_shop/but_blue.png')",
    "pos_x_mode": "v2_attach_left",
    "pos_x_attach_id": "gs_sb_text",
    "margin_x": 0.4,
}

graph_core.all_html_blocks['gso_sb_bb_text'].options = {
    "ratio_x": 100/189,
    "ratio_y": 90/100,
    //"ratio": 1/1,
    "pos_y": 0.95,
    "pos_x": 0.95,
    //"is_prop": true,
    "text": "123",
    "text_color": "#e8cd66",
}

graph_core.all_html_blocks['gso_card_block_outer'].options = {
    "ratio_x": 780/935,
    "ratio_y": 1000/1540,
    "ratio": (764*2)/1083,
    "pos_x": 0.5,
    "pos_y": 0.45,
    //"is_prop": true,
    "background": "url('./images/for_shop/card.png') 100%",
    "style": {
        "background-size": "50%",
        "border-radius": "40px 40px"
    }
}
/*
graph_core.all_html_blocks['gso_card_block_outer'].options = {
    "ratio_x": 780/935,
    "ratio_y": 1000/1540,
    "ratio": (764*2)/1083,
    "pos_x": 0.5,
    "pos_y": 0.45,
    //"is_prop": true,
    "background": "url('./images/for_shop/card.png') 100%",
    "style": {
        "background-size": "50%",
        "border-radius": "40px 40px"
    }
}
*/

/*
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

graph_core.all_html_blocks['gso_back_block'].add_block('gso_bb_back_button', {
    "ratio_x": 1,
    "ratio_y": 0.25,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/back.png')",
    "is_prop": true,
    "pos_x": 0.2,
    "pos_y": 0.9,
    "onclick": "graph_core.open_big_block('#game_shop');",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.3) ", // Увеличение и полный оборот
        "filter": "brightness(1.3)"
    }
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
    "onclick": "graph_core.open_special_shop_popup("+i+");"
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
    onclick: "graph_core.open_popup('#gso_promocode_popup_back');",
    "style": {
        "transition": "transform 0.3s ease, filter 0.3s ease" // Плавный переход
    },
    "hover_style": {
        "transform": "scale(1.1)", // Увеличение и полный оборот
        "filter": "brightness(1.2)"
    }
})

// кнопки переключения 
graph_core.all_html_blocks['game_special_offers'].add_block('gso_left_button', {
    "ratio_x": 0.1,
    "ratio_y": 0.15,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/left.png')",
    "is_prop": true,
    "pos_x": 0.08,
    "pos_y": 0.5,
    "onclick": "graph_core.open_big_block('#game_shop');"
})

graph_core.all_html_blocks['game_special_offers'].add_block('gso_right_button', {
    "ratio_x": 0.1,
    "ratio_y": 0.15,
    "ratio": 63/105,
    "color": '#f48aff',
    "background": "url('./images/for_shop/right.png')",
    "is_prop": true,
    "pos_x": 0.92,
    "pos_y": 0.5,
    "onclick": "graph_core.open_big_block('#game_shop');"
})*/
    }

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

    set_size('body', winW, winH);

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

    //set_size('body', winW, winH);
    for (var i in graph_core.big_blocks_ids) {
        graph_core.html_blocks[graph_core.big_blocks_ids[i]].recalculate();
    }
    graph_core.html_blocks['game_debug'].html_element['style'].display = 'none'
    graph_core.html_blocks['game_debug'].recalculate();

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



