
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


    console.log('resized in '+(performance.now() - s_time).toFixed(2) + 'ms')

}

graph_core.resize_screen = resize_screen

window.addEventListener('resize', function() {
    setTimeout(function() {
        graph_core.resize_screen();
    }, 20)
    
}, false);
window.addEventListener('fullscreenchange', function() {
    setTimeout(function() {
        graph_core.resize_screen();
    }, 20)
}, false)



