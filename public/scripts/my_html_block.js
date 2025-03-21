(function($){
    $.fn.offsetRelative = function(top){
        var $this = $(this);
        var $parent = $this.offsetParent();
        var offset = $this.position();
        if(!top) return offset; // Didn't pass a 'top' element 
        else if($parent.get(0).tagName == "BODY") return offset; // Reached top of document
        else if($(top,$parent).length) return offset; // Parent element contains the 'top' element we want the offset to be relative to 
        else if($parent[0] == $(top)[0]) return offset; // Reached the 'top' element we want the offset to be relative to 
        else { // Get parent's relative offset
            var parent_offset = $parent.offsetRelative(top);
            offset.top += parent_offset.top;
            offset.left += parent_offset.left;
            return offset;
        }
    };

    $.fn.positionRelative = function(top){
        return $(this).offsetRelative(top);
    };
}(jQuery));
var injectCSS = css => {
  let el = document.createElement('style');
  el.type = 'text/css';
  el.innerText = css;
  document.head.appendChild(el);
  return el;
};

var my_html_block = function(id, html_element,  options = {},  big_block = false, add_to_big_blocks = 'none') {
    this.id = id;
    this.html_element = html_element;
    this.children = {};

    this.options = options;
    this.big_block = big_block;
    this.parent_id = -1;

    graph_core.all_html_blocks[id] = this;

    if (html_element === 'global_popup') {
        var big_block_div = document.createElement("div");
        big_block_div.id = id;
        this.parent_id = 'game_viewport';
        this.html_element = big_block_div;
        $('body').append(big_block_div);
    } else {
        if (big_block === true) {
            var big_block_div2 = document.createElement("div");
            big_block_div2.id = id;
            if (big_block) {
                if (add_to_big_blocks === 'none') {
                    add_to_big_blocks = true;
                }
            }
            if (add_to_big_blocks) {
                big_block_div2.classList.add('big_block');
                graph_core.big_blocks_ids.push(id);
            }
            this.html_element = big_block_div2;
            $('body').append(big_block_div2);
        }
    }

    // Получение размеров блока
    this.get_size = function() {
        var display_state = $('#' + this.id).css('display');
        $('#' + this.id).css('display', 'block');
        $('#' + this.id).css('opacity', '0%');

        var size = this.html_element.getBoundingClientRect();

        $('#' + this.id).css('display', display_state);
        $('#' + this.id).css('opacity', '100%');

        return {
            x: size.width,
            y: size.height
        };
    };

    // Получение позиции блока
    this.get_pos = function() {
        return this.html_element.getBoundingClientRect();
    };

    // Добавление внутрь текущего блока нового блока
    this.add_block = function(id, options) {
        if (options.text_padding_w === undefined) {
            options.text_padding_w = 0.9;
        }
        if (options.text_padding_h === undefined) {
            options.text_padding_h = 0.9;
        }

        var new_html_element = document.createElement("div");
        if (options.textarea) {
            new_html_element = document.createElement('textarea');
        }
        new_html_element.style.position = 'absolute';
        new_html_element.id = id;
        var parent_size = this.get_size();

        if (options.is_prop) {
            var width = Math.min(
                parent_size.x * options.ratio_x,
                parent_size.y * options.ratio_y * options.ratio
            );
            new_html_element.style.width = width + "px";
            new_html_element.style.height = width / options.ratio + "px";
        } else {
            new_html_element.style.width = parent_size.x * options.ratio_x + "px";
            new_html_element.style.height = parent_size.y * options.ratio_y + "px";
        }

        if (options.pos_mode === 'center') {
            new_html_element.style.left = 
                (parent_size.x - num(noPX(new_html_element.style.width))) / 2 + "px";
            new_html_element.style.top = 
                (parent_size.y - num(noPX(new_html_element.style.height))) / 2 + "px";
        } else {
            // Примерные привязки (attach_right и т.д.)
            if (options.pos_x_mode === "attach_right") {
                new_html_element.style.left =
                    document.getElementById(options.pos_x_attach_id).getBoundingClientRect().right -
                    num(noPX(new_html_element.style.width)) +
                    (num(noPX(new_html_element.style.width)) * options.margin_x) + 'px';
            } else if (options.pos_x_mode === "attach_left") {
                new_html_element.style.left =
                    document.getElementById(options.pos_x_attach_id).getBoundingClientRect().right +
                    (num(noPX(new_html_element.style.width)) * options.margin_x) + 'px';
            } else if (options.pos_x_mode === "attach_left_left") {
                new_html_element.style.left =
                    document.getElementById(options.pos_x_attach_id).getBoundingClientRect().left +
                    (num(noPX(new_html_element.style.width)) * options.margin_x) + 'px';
            } else {
                if (options.pos_x) {
                    new_html_element.style.left =
                        (parent_size.x - num(noPX(new_html_element.style.width))) *
                        options.pos_x + "px";
                }
            }

            if (options.pos_y_mode === "attach_bottom") {
                new_html_element.style.top =
                    document.getElementById(options.pos_y_attach_id).getBoundingClientRect().bottom -
                    num(noPX(new_html_element.style.height)) +
                    (num(noPX(new_html_element.style.height)) * options.margin_y) + 'px';
            } else if (options.pos_y_mode == "attach_top") {
                new_html_element.style.top =
                    document.getElementById(options.pos_y_attach_id).getBoundingClientRect().bottom +
                    (num(noPX(new_html_element.style.height)) * options.margin_y) + 'px';
            } else {
                if (options.pos_y) {
                    new_html_element.style.top =
                        (parent_size.y - num(noPX(new_html_element.style.height))) *
                        options.pos_y + "px";
                }
            }
        }

        if (options.color) {
            new_html_element.style.backgroundColor = options.color;
        }
        if (options.background) {
            new_html_element.style.background = options.background;
            new_html_element.style['background-size'] = '100%';
        }
        if (options['border-radius']) {
            new_html_element.style['border-radius'] = options['border-radius'];
        }
        if (options['z-index']) {
            new_html_element.style['z-index'] = options['z-index'];
        }
        if (options.onclick) {
            new_html_element.setAttribute('onclick', options.onclick);
            if (options.onclick !== "") {
                new_html_element.style['cursor'] = 'pointer';
            } else {
                new_html_element.style['cursor'] = 'cursor';
            }
        }

        if (options.style) {
            for (var i in options.style) {
                new_html_element.style[i] = options.style[i];
            }
        }

        // hover_style (если нужна динамическая вставка CSS)
        if (options.hover_style) {
            var hover_style = "#" + id + ":hover {";
            for (var h in options.hover_style) {
                hover_style += String(h) + ":" + options.hover_style[h] + " !important; ";
            }
            if (options.hover_style.background) {
                hover_style += "background-size: 100% !important;";
            }
            hover_style += "}";
            injectCSS(hover_style); // функция injectCSS должна быть где-то глобально
        }

        // ячейка таблицы (упрощённый пример)
        if (options.table_cell_num !== undefined) {
        	if (options.table_margin_x == undefined) {
        		options.table_margin_x = 1;
        	}
        	if (options.table_margin_y == undefined) {
        		options.table_margin_y = 1;

        	}
            var parent_size_x = parent_size.x;
            var block_size_x = num(noPX(new_html_element.style.width));
            var cols = Math.floor(parent_size_x / block_size_x);
            var cell_x_pos = (options.table_cell_num % cols) / cols;
            var cell_y_pos = options.table_cell_num / cols;
            new_html_element.style.left =
                (parent_size.x - num(noPX(new_html_element.style.width))) *
                cell_x_pos + "px";
            new_html_element.style.top =
                num(noPX(new_html_element.style.height)) * cell_y_pos + "px";
        }

        $('#' + this.id).append(new_html_element);

        // Если нужно добавить текст
        if (options.text) {
            options.text.replace(/\{\{(.*?)\}\}/g, function (match, expression) {
                const variablePath = expression.trim();
                if (!graph_core.dynamic_bindings[variablePath]) {
                    graph_core.dynamic_bindings[variablePath] = [];
                }
                if (!graph_core.dynamic_bindings[variablePath].includes(id)) {
                    graph_core.dynamic_bindings[variablePath].push(id);
                }
            });


            var text_div = document.createElement("div");
            text_div.style.width = num(noPX(new_html_element.style.width)) * options.text_padding_w + 'px';
            text_div.style.height = num(noPX(new_html_element.style.height)) * options.text_padding_h + 'px';
            text_div.setAttribute('class', 'text_div');

            var text_div2 = document.createElement("span");
            text_div2.setAttribute('class', 'text');

            var words = options.text.replace("{coin}", "{}").split(" ");
            var font_size = 1;

            if (words.length === 1 || options['1_line_text']) {
                font_size = Math.min(
                    num(noPX(new_html_element.style.height)) * 0.75 * options.text_padding_h,
                    (num(noPX(new_html_element.style.width)) / options.text.length) * 1.8 * options.text_padding_w
                );
            } else {
                // перебираем потенциальное количество строк
                for (var rows = 1; rows < 10; rows++) {
                    var symbols_in_row = options.text.length / rows;
                    font_size = Math.max(
                        Math.min(
                            (num(noPX(new_html_element.style.height)) / rows) * 0.75 * options.text_padding_h,
                            (num(noPX(new_html_element.style.width)) / symbols_in_row) * 1.8 * options.text_padding_w
                        ),
                        font_size
                    );
                }
            }

            if (options.strict_font_size) {
                font_size = options.strict_font_size * parent_size.y;
            }

            text_div2.style['font-size'] = font_size + 'px';
            text_div2.innerHTML = options.text.replace(
                "{coin}",
                "<img src='./images/coin_little.png' height='" + font_size + "' > </img>"
            );

            text_div.appendChild(text_div2);
            new_html_element.appendChild(text_div);

            var text_div_size = get_size('#' + id + ' .text_div');
            text_div.style.left = (num(noPX(new_html_element.style.width)) - text_div_size.x) / 2 + 'px';
            text_div.style.top = (num(noPX(new_html_element.style.height)) - text_div_size.y) / 2 + 'px';

            if (options.text_color) {
                text_div2.style.color = options.text_color;
            }
            if (options.text_align) {
                text_div2.style["text-align"] = options.text_align;
            }

            var text_div2_size = get_size('#' + id + ' .text_div .text');
            text_div2.style.left =
                (num(noPX(new_html_element.style.width)) * options.text_padding_w - text_div2_size.x) / 2 + 'px';
            //text_div2.style.top =
                (num(noPX(new_html_element.style.height)) * options.text_padding_h - text_div2_size.y) / 2 + 'px';
        }

        // Регистрируем созданный блок в graph_core
        this.children[id] = new my_html_block(id, new_html_element, options);
        this.children[id].parent_id = this.id;
        graph_core.all_html_blocks[id] = this.children[id];
    };

    // Перерасчёт размеров и позиций (респонсивность)
    this.recalculate = function(parent = 'none') {
        if (parent === 'none' && this.big_block === false) {
            parent = graph_core.all_html_blocks[this.parent_id];
        }
        var display_state = $('#' + this.id).css('display');
        $('#' + this.id).css('display', 'block');
        $('#' + this.id).css('opacity', '0%');

        var parents_chain = [];
        var parent_id2 = this.id;
        var child_id = this.id;
        while (parent_id2 !== -1) {
            child_id = parent_id2;
            parent_id2 = graph_core.all_html_blocks[child_id].parent_id;
            if (parent_id2 !== -1) {
                parents_chain.push({
                    id: parent_id2,
                    display_state: $('#' + parent_id2).css('display')
                });
                $('#' + parent_id2).css('display', 'block');
                $('#' + parent_id2).css('opacity', '0%');
            }
        }

        if (this.big_block) {
            set_size('#' + this.id, graph_core.winW, graph_core.winH);
        } else {
            if (this.options.text_padding_w === undefined) {
                this.options.text_padding_w = 1;
            }
            if (this.options.text_padding_h === undefined) {
                this.options.text_padding_h = 1;
            }

            if (parent == undefined) {
                parent = graph_core.all_html_blocks[this.parent_id]
            }

            if (parent !== undefined) {
                var parent_size = parent.get_size();

                if (this.options.is_prop) {
                    var width = Math.min(
                        parent_size.x * this.options.ratio_x,
                        parent_size.y * this.options.ratio_y * this.options.ratio
                    );
                    this.html_element.style.width = width + "px";
                    this.html_element.style.height = width / this.options.ratio + "px";
                } else {
                    this.html_element.style.width =
                        parent_size.x * this.options.ratio_x + "px";
                    this.html_element.style.height =
                        parent_size.y * this.options.ratio_y + "px";
                }

                if (this.options.pos_mode === 'center') {
                    this.html_element.style.left =
                        (parent_size.x - num(noPX(this.html_element.style.width))) / 2 + "px";
                    this.html_element.style.top =
                        (parent_size.y - num(noPX(this.html_element.style.height))) / 2 + "px";
                } else {
                    // pos_x_mode, pos_y_mode
                    if (this.options.pos_x_mode === "attach_right") {
                        this.html_element.style.left =
                            document.getElementById(this.options.pos_x_attach_id)
                                .getBoundingClientRect().right -
                            num(noPX(this.html_element.style.width)) +
                            (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
                    } else if (this.options.pos_x_mode === "attach_left") {
                        this.html_element.style.left =
                            document.getElementById(this.options.pos_x_attach_id)
                                .getBoundingClientRect().right +
                            (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
                    } else if (this.options.pos_x_mode === "attach_left_left") {
                        this.html_element.style.left =
                            document.getElementById(this.options.pos_x_attach_id)
                                .getBoundingClientRect().left +
                            (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
                    } else if (this.options.pos_x_mode === 'v2_attach_left') {
                        this.html_element.style.left =
                            -document.getElementById(this.options.pos_x_attach_id)
                                .getBoundingClientRect().left +
                            document.getElementById(this.options.pos_x_attach_id)
                                .getBoundingClientRect().right +
                            (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
                    } else {
                        if (this.options.pos_x) {
                            this.html_element.style.left =
                                (parent_size.x - num(noPX(this.html_element.style.width))) *
                                this.options.pos_x + "px";
                        }
                    }

                    if (this.options.pos_y_mode === "attach_bottom") {
                        this.html_element.style.top =
                            document.getElementById(this.options.pos_y_attach_id)
                                .getBoundingClientRect().bottom -
                            num(noPX(this.html_element.style.height)) +
                            (num(noPX(this.html_element.style.height)) * this.options.margin_y) + 'px';
                    } else if (this.options.pos_y_mode === "attach_top") {
                        this.html_element.style.top =
                            document.getElementById(this.options.pos_y_attach_id)
                                .getBoundingClientRect().bottom +
                            (num(noPX(this.html_element.style.height)) * this.options.margin_y) + 'px';
                    } else if (this.options.pos_y_mode === "attach_top_top") {
                        this.html_element.style.top =
                            $('#' + this.options.pos_y_attach_id).offsetRelative().top +
                            (num(noPX(this.html_element.style.height)) * this.options.margin_y) + 'px';
                    } else {
                        if (this.options.pos_y) {
                            this.html_element.style.top =
                                (parent_size.y - num(noPX(this.html_element.style.height))) *
                                this.options.pos_y + "px";
                        }
                    }
                }

                // Табличная логика
                if (this.options.table_cell_num !== undefined) {

                    var parent_size_x2 = parent_size.x;
                    var block_size_x2 = num(noPX(this.html_element.style.width));
                    var cols2 = Math.floor(parent_size_x2 / block_size_x2);
                    var x_margin = (parent_size_x2 - block_size_x2 * cols2) / (cols2 + 1);
                    var cell_x_pos2 = x_margin +
                        (this.options.table_cell_num % cols2) * (x_margin + block_size_x2);
                    var cell_y_pos2 = Math.floor(this.options.table_cell_num / cols2);

                    this.html_element.style.left = cell_x_pos2 + "px";
                    this.html_element.style.top =
                        num(noPX(this.html_element.style.height)) * cell_y_pos2 * this.options.table_margin_y + "px";
                }

                // Пересчёт текста
                if (this.options.text) {
                    
                    var actual_text = this.options.text.replace("{coin}", "{}").replace("{yan}", "{}");
                    if (this.options.text.includes('{{')) {
                        actual_text = this.options.text.replace(/\{\{(.*?)\}\}/g, function (match, expression) {
                            return safeGetValue(expression.trim());
                        });
                    }

                    
                    



                    var words2 = actual_text.split(" ");
                    var font_size2 = 1;

                    var text_div = document.querySelector('#' + this.id + ' .text_div');

                    text_div.style.width =
                        num(noPX(this.html_element.style.width)) * this.options.text_padding_w + "px";
                    text_div.style.height =
                        num(noPX(this.html_element.style.height)) * this.options.text_padding_h + "px";

                    var text_div_size = get_size('#' + id + ' .text_div');
                    var text_div2 = document.querySelector('#' + this.id + ' .text_div .text');
                    text_div2.style.display = 'inline';

                    if (words2.length === 1 || this.options['1_line_text']) {
                        font_size2 = Math.min(
                            num(noPX(this.html_element.style.height)) * 0.95 * this.options.text_padding_h,
                            (num(noPX(this.html_element.style.width)) *
                                this.options.text_padding_w) /
                                this.options.text.length *
                                1.2
                        );
                    } else {
                        var length = actual_text.length
                        var words = actual_text.split(" ");
                        var max_word_len = 0;

                        for (var i = 0; i < words.length; i++) {
                            if (words[i].length > max_word_len) {
                                max_word_len = words[i].length;
                            }
                        }

                        // Умножаем на коэффициент, если это необходимо для расчета ширины
                        max_word_len *= 0.55;
                        for (var rows2 = 1; rows2 < 10; rows2++) {
                            var symbols_in_row2 = Math.max(length / rows2, max_word_len);

                            font_size2 = Math.max(
                                Math.min(
                                    (num(noPX(this.html_element.style.height)) / rows2) *
                                        1 *
                                        this.options.text_padding_h,
                                    (num(noPX(this.html_element.style.width)) / symbols_in_row2) *
                                        1 *
                                        this.options.text_padding_w
                                ),
                                font_size2
                            );
                        }
                        
                        /*
                        let font_size2 = 10; // Минимальный начальный размер шрифта
                        const max_font_size = 200; // Максимальный размер шрифта
                        const block_width = num(noPX(this.html_element.style.width)) * this.options.text_padding_w;
                        const block_height = num(noPX(this.html_element.style.height)) * this.options.text_padding_h;
                        const words = actual_text.split(" "); // Разбиваем текст на слова

                        while (font_size2 < max_font_size) {
                            const test_element = document.createElement("span");
                            test_element.style.fontSize = font_size2 + "px";
                            test_element.style.visibility = "hidden";
                            test_element.style.position = "absolute"; // Обеспечивает точное измерение
                            test_element.style.whiteSpace = "nowrap"; // Для измерения ширины слов
                            document.body.appendChild(test_element);

                            let lines = 1; // Количество строк
                            let current_line_width = 0; // Ширина текущей строки

                            for (const word of words) {
                                test_element.innerText = word;
                                const word_width = test_element.getBoundingClientRect().width;

                                if (current_line_width + word_width > block_width) {
                                    // Если слово не помещается, переносим на новую строку
                                    lines += 1;
                                    current_line_width = word_width;
                                } else {
                                    // Добавляем слово в текущую строку
                                    current_line_width += word_width + font_size2 * 0.2; // Учитываем пробел между словами
                                }

                                if (lines * font_size2 > block_height) {
                                    // Если текст выходит за пределы блока, уменьшаем шрифт и начинаем заново
                                    font_size2 -= 1;
                                    break;
                                }
                            }

                            document.body.removeChild(test_element);

                            if (lines * font_size2 <= block_height) {
                                // Если текст полностью помещается, увеличиваем шрифт
                                font_size2 += 1;
                            } else {
                                break;
                            }
                        }

                        // Устанавливаем окончательный размер шрифта
                        font_size2 = Math.max(font_size2, 10); // Минимальный размер для читабельности
                        */


                    }

                    if (this.options.strict_font_size) {
                        font_size2 = this.options.strict_font_size * parent_size.y;
                    }



                    var html = this.options.text.replace(
                        "{coin}",
                        "<img class='coin_ico' src='./images/coin_little.png' style='top: " +
                            font_size2 * 0.2 +
                            "px;' height='" +
                            font_size2 * 1.2 +
                            "' > </img>"
                    );
                    html = html.replace(
                        "{yan}",
                        "<img class='coin_ico' src='./images/yans.svg' style='top: " +
                            font_size2 * 0.2 +
                            "px;' height='" +
                            font_size2 * 1.2 +
                            "' > </img>"
                    );

                    if (this.options.text.includes('{{')) {
                        html = html.replace(/\{\{(.*?)\}\}/g, function (match, expression) {
                            return safeGetValue(expression.trim());
                        });
                    }
					text_div2.style.display = 'block';
                    //text_div2.style.position = 'absolute';

                    text_div2.innerHTML = html;
                    text_div2.style['font-size'] = font_size2 + 'px';

                    text_div.style.display = 'block';
                    text_div.style.position = 'absolute';

                    var text_div_size2 = get_size('#' + this.id + ' .text_div');
                    text_div.style.left =
                        (num(noPX(this.html_element.style.width)) - text_div_size2.x) / 2 + 'px';

                    text_div.style.top =
                        (num(noPX(this.html_element.style.height)) - text_div_size2.y) / 2 + 'px';

                    

                    var text_div2_size2 = get_size('#' + this.id + ' .text_div .text');
                    if (this.options.text_pos_y === undefined) {
                        this.options.text_pos_y = 0.5;
                    }
                    if (this.options.text_pos_x === undefined) {
                        this.options.text_pos_x = 0.5;
                    }

                    text_div2.style.left =
                        (num(noPX(this.html_element.style.width)) * this.options.text_padding_w -
                            text_div2_size2.x) *
                            this.options.text_pos_x + 'px';

                    text_div2.style['margin-top'] =
                        (num(noPX(this.html_element.style.height)) * this.options.text_padding_h -
                            text_div2_size2.y) *
                            this.options.text_pos_y + 'px';


                    if (num(noPX(text_div2.style['margin-top'])) < 0) {
                        text_div2.style['font-size'] =
                            num(noPX(text_div2.style['font-size'])) /
                                (1 +
                                    Math.abs(num(noPX(text_div2.style['margin-top']))) /
                                        (num(noPX(this.html_element.style.height)) * this.options.text_padding_h)) +
                            "px";
                        text_div2_size2 = get_size('#' + this.id + ' .text_div .text');
                        text_div2.style['margin-top'] =
                            (num(noPX(this.html_element.style.height)) * this.options.text_padding_h -
                                text_div2_size2.y) *
                            this.options.text_pos_y + 'px';

                        //text_div2.style['margin-top'] = 0;
                    }

                    text_div2.style.left =
                        (num(noPX(this.html_element.style.width)) * this.options.text_padding_w -
                            text_div2_size2.x) *
                            this.options.text_pos_x + 'px';

                    
                    text_div2.style['margin-top'] =
                        (text_div_size.y * this.options.text_padding_h -
                            text_div2_size2.y*0.95) * this.options.text_pos_y + 'px';

                    if (this.options.text.split(" ").length == 1) {
                    	 text_div2.style['margin-top'] = 
                        (text_div_size.y * this.options.text_padding_h -
                            font_size2*1.5) * this.options.text_pos_y + 'px';
                    }

                    if (this.options.text_color) {
                        text_div2.style.color = this.options.text_color;
                    }
                }

                
                if (this.options.onclick !== undefined) {
                    this.html_element.setAttribute('onclick', this.options.onclick);
                    if (this.options.onclick === "") {
                        this.html_element.style['cursor'] = 'default';
                    } else {
                        this.html_element.style['cursor'] = 'pointer';
                    }
                }
            }
        }

        if (this.options.style) {
            for (var st in this.options.style) {
                this.html_element.style[st] = this.options.style[st];
            }
        }

        if (this.options.background) {
            this.html_element.style.background = this.options.background;
            this.html_element.style['background-size'] = '100%';
        }

        for (var child in this.children) {
            this.children[child].recalculate(this);
        }

        $('#' + this.id).css('display', display_state);
        $('#' + this.id).css('opacity', '100%');

        for (var p in parents_chain) {
            $('#' + parents_chain[p].id).css('display', parents_chain[p].display_state);
            $('#' + parents_chain[p].id).css('opacity', '100%');
        }
    };
};