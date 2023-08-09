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


var my_html_block = function(id, html_element, options = {}, big_block = false, add_to_big_blocks = 'none') {
	this.id = id;
	this.html_element = html_element;
	this.children = {};
	this.options = options;
	this.big_block = big_block;
	this.parent_id = -1;

	graph_core.all_html_blocks[id] = this;

	if (html_element == 'global_popup') {
		var big_block_div = document.createElement("div");
		big_block_div.id = id;

		this.parent_id = 'game_viewport';

		this.html_element = big_block_div;
		$('body').append(big_block_div)
	} else {

		if (big_block == true) {
			var big_block_div = document.createElement("div");
			big_block_div.id = id;

			if (big_block) {
				if (add_to_big_blocks == 'none') {
					
					add_to_big_blocks = true;
				}
			}
			if (add_to_big_blocks) {
				big_block_div.classList.add('big_block');
				graph_core.big_blocks_ids.push(id);
			}
			this.html_element = big_block_div;
			$('body').append(big_block_div)
		}
	}

	//this.size_x = num(noPX(this.html_element.css('width')))
	//this.size_y = num(noPX(this.html_element.css('height')))

	this.get_size = function() {
		//console.log(this.html_element.offsetWidth)
		var display_state = $('#' + this.id).css('display');

		$('#' + this.id).css('display', 'block');
		$('#' + this.id).css('opacity', '0%');

		var size = this.html_element.getBoundingClientRect()
		
		$('#' + this.id).css('display', display_state);
		$('#' + this.id).css('opacity', '100%');

		return {
			"x": size.width,
			"y": size.height
		}
	}

	this.get_pos = function() {
		return this.html_element.element.getBoundingClientRect();
	}


	this.add_block = function(id, options) {
		if (options.text_padding_w == undefined) {
			options.text_padding_w = 1;
		}

		if (options.text_padding_h == undefined) {
			options.text_padding_h = 1;
		}

		var new_html_element = document.createElement("div");
		if (options.textarea) {
			new_html_element = document.createElement('textarea');
		}
		//console.log('adding block')
		//console.log(new_html_element, this, this.html_element)

		new_html_element.id = id;
		var parent_size = this.get_size();
		if (options.is_prop) {
			var width = Math.min(parent_size.x * options.ratio_x, parent_size.y * options.ratio_y * options.ratio)



    		//set_size(selector, width, width / options.ratio)

    		new_html_element.style.width = width + "px";
			new_html_element.style.height = width/options.ratio + "px";

		} else {
			new_html_element.style.width = parent_size.x * options.ratio_x + "px";
			new_html_element.style.height = parent_size.y * options.ratio_y + "px";

			//console.log(parent_size.x)
		}



		if (options.pos_mode == 'center') {
			//new_html_element.style.position = 'absolute'
			
			new_html_element.style.left = (parent_size.x-num(noPX(new_html_element.style.width)))/2 + "px";
			new_html_element.style.top = (parent_size.y-num(noPX(new_html_element.style.height)))/2 + "px";
			
		} else {
			if (options.pos_x_mode == "attach_right") {
				new_html_element.style.left = (document.getElementById(options.pos_x_attach_id).getBoundingClientRect().right - num(noPX(new_html_element.style.width))) + ( num(noPX(new_html_element.style.width)) * options.margin_x) + 'px';
			} else if (options.pos_x_mode == "attach_left") {
				new_html_element.style.left = (document.getElementById(options.pos_x_attach_id).getBoundingClientRect().right)  + ( num(noPX(new_html_element.style.width)) * options.margin_x) + 'px';
				
			} else if (options.pos_x_mode == "attach_left_left") {
				new_html_element.style.left = (document.getElementById(options.pos_x_attach_id).getBoundingClientRect().left)  + ( num(noPX(new_html_element.style.width)) * options.margin_x) + 'px';
				
			} else {
				if (options.pos_x) {
					new_html_element.style.left = (parent_size.x-num(noPX(new_html_element.style.width)))*options.pos_x + "px";
				}
			}

			if (options.pos_y_mode == "attach_bottom") {
				new_html_element.style.top = (document.getElementById(options.pos_y_attach_id).bottom - num(noPX(new_html_element.style.height))) + ( num(noPX(new_html_element.style.height)) * options.margin_y) + 'px';
			} else if (options.pos_y_mode == "attach_top") {

				new_html_element.style.top = (document.getElementById(options.pos_y_attach_id).getBoundingClientRect().bottom)  + (num(noPX(new_html_element.style.height)) * options.margin_y) + 'px';
				
			}
			 else if (options.pos_y_mode == "attach_top_top") {
			 	//console.log(options.pos_y_attach_id, document.getElementById(options.pos_y_attach_id).getBoundingClientRect().top, )
			 	//console.log($('#'+options.pos_y_attach_id).offsetRelative().top)
				new_html_element.style.top = ($('#'+options.pos_y_attach_id).offsetRelative().top)  + (num(noPX(new_html_element.style.height)) * options.margin_y) + 'px';
				
			} else {
				if (options.pos_y) {
					new_html_element.style.top = (parent_size.y-num(noPX(new_html_element.style.height)))*options.pos_y + "px";
				}
			}

			
		}


    
		if (options.color) {
			new_html_element.style.backgroundColor = options.color;
		}
		
		if (options.background) {
			new_html_element.style.background = options.background;
			new_html_element.style['background-size'] = '100%'
		}

		if (options['border-radius']) {
			new_html_element.style['border-radius'] = options['border-radius'];
		}

		if (options.onclick) {
			new_html_element.setAttribute('onclick', options.onclick);
			if (options.onclick != "") {
				new_html_element.style['cursor'] = 'pointer';
			} else {
				new_html_element.style['cursor'] = 'cursor'
			}
		}

		if (options.style) {
			for (var i in options.style) {
				new_html_element.style[i] = options.style[i];
			}
		}

		// если это ячейка таблицы
		if (options.table_cell_num != undefined) {
			var parent_size_x = parent_size.x;
			var block_size_x = num(noPX(new_html_element.style.width));

			var cols = Math.floor(parent_size_x/block_size_x);

			var cell_x_pos = (options.table_cell_num % cols)/cols ;
			var cell_y_pos = (options.table_cell_num / cols);

			new_html_element.style.left = (parent_size.x-num(noPX(new_html_element.style.width)))*cell_x_pos + "px";

			new_html_element.style.top = num(noPX(new_html_element.style.height))*cell_y_pos + "px";
					
		}

		$('#'+this.id).append(new_html_element)

		if (options.text) {
			var text_div = document.createElement("div");

			text_div.style.width = num(noPX(new_html_element.style.width)) * options.text_padding_w + 'px';
			text_div.style.height = num(noPX(new_html_element.style.height)) * options.text_padding_h + 'px';

			text_div.setAttribute('class', 'text_div')

			
			var text_div2 = document.createElement("span");
			text_div2.setAttribute('class', 'text')

			

			var words = options.text.replace("{coin}", "{}").split(" ");
			

			var font_size = 1;

			if (words.length == 1 || options['1_line_text']) {
				font_size = Math.min(num(noPX(new_html_element.style.height)) * 0.75 * options.text_padding_h, num(noPX(new_html_element.style.width)) / options.text.length * 1.8* options.text_padding_w);
			} else {
				// будем смотреть по кол-ву строк
				//var max_font_size = 1;
				for (var rows = 1; rows < 10; rows += 1) {
					// примерное число символов в строке
					var symbols_in_row = options.text.length / rows;

					font_size = Math.max(Math.min(num(noPX(new_html_element.style.height))/rows * 0.75 * options.text_padding_h, num(noPX(new_html_element.style.width)) / symbols_in_row * 1.8 * options.text_padding_w), font_size)
				}
			}

			if (options.strict_font_size) {
				font_size = options.strict_font_size * parent_size.y;
			}
		
			text_div2.style['font-size'] = font_size + 'px';

			
			if (options.text.includes("{coin}")) {
				//options.text = options.text.replace("{coin}", "<img src='./images/coin_little.png' height='"+font_size+"' > </img>")
			}

			
			text_div2.innerHTML = options.text.replace("{coin}", "<img src='./images/coin_little.png' height='"+font_size+"' > </img>")
			
			text_div.appendChild(text_div2);
			new_html_element.appendChild(text_div)



			var text_div_size = get_size('#'+id + ' .text_div');

			//console.log(id, text_div_size)

		 	text_div.style.left = (num(noPX(new_html_element.style.width)) - text_div_size.x) / 2 + 'px';
		 	text_div.style.top = (num(noPX(new_html_element.style.height)) - text_div_size.y) / 2 + 'px';

		 	
		 	var text_div2_size = get_size('#'+id + ' .text_div .text');

		 	text_div2.style.left = (num(noPX(new_html_element.style.width)) * options.text_padding_w - text_div2_size.x) / 2 + 'px';
		 	text_div2.style.top = (num(noPX(new_html_element.style.height)) * options.text_padding_h - text_div2_size.y) / 2 + 'px';
			

		 	if (options.text_color) {
		 		text_div2.style.color = options.text_color;
		 	}

		 	if (options.text_align) {
		 		text_div2.style["text-align"] = options.text_align;
		 	}
		}

		
		this.children[id] = new my_html_block(id, new_html_element, options);
		this.children[id].parent_id = this.id;
		graph_core.all_html_blocks[id] = this.children[id];
	}

	this.recalculate = function(parent='none') {

		if (parent == 'none' && this.big_block == false) {
			parent = graph_core.all_html_blocks[this.parent_id]
			
		}
		
		var display_state = $('#' + this.id).css('display');

		$('#' + this.id).css('display', 'block');
		$('#' + this.id).css('opacity', '0%');

		var display_parent_state = $('#' + this.parent_id).css('display');

		$('#' + this.parent_id).css('display', 'block');
		$('#' + this.parent_id).css('opacity', '0%');

		if (this.big_block) {
			set_size('#'+this.id, graph_core.winW, graph_core.winH);
		} else {
			if (this.options.text_padding_w == undefined) {
				this.options.text_padding_w = 1;
				
			}

			if (this.options.text_padding_h == undefined) {
				this.options.text_padding_h = 1;
			}

			var parent_size = parent.get_size();


			//console.log('id: ', this.id)
			//console.log(parent_size)
			if (this.options.is_prop) {
				var width = Math.min(parent_size.x * this.options.ratio_x, parent_size.y * this.options.ratio_y * this.options.ratio)

	    		//set_size(this.id, width, width / this.options.ratio)

	    		this.html_element.style.width = width + "px";
				this.html_element.style.height = width/this.options.ratio + "px";

			} else {
				this.html_element.style.width = parent_size.x * this.options.ratio_x + "px";
				this.html_element.style.height = parent_size.y * this.options.ratio_y + "px";
			}

			if (this.options.pos_mode == 'center') {
				//new_html_element.style.position = 'absolute'
				
				this.html_element.style.left = (parent_size.x-num(noPX(this.html_element.style.width)))/2 + "px";
				this.html_element.style.top = (parent_size.y-num(noPX(this.html_element.style.height)))/2 + "px";
				
			}  else {
				if (this.options.pos_x_mode == "attach_right") {
					this.html_element.style.left =  (document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().right - num(noPX(this.html_element.style.width))) + (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
				} else if (options.pos_x_mode == "attach_left") {
					this.html_element.style.left = (document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().right)  + (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
					
				} else if (options.pos_x_mode == "attach_left_left") {
					this.html_element.style.left = (document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().left)  + (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
				} else if (options.pos_x_mode == 'v2_attach_left') {
					this.html_element.style.left = -document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().left +(document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().right) + (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
				
				} else {
					if (this.options.pos_x) {
						this.html_element.style.left = (parent_size.x-num(noPX(this.html_element.style.width)))*this.options.pos_x + "px";
					}
				} 

				if (this.options.pos_y_mode == "attach_bottom") {
					this.html_element.style.top = (document.getElementById(this.options.pos_y_attach_id).getBoundingClientRect().bottom - num(noPX(this.html_element.style.height)))  + (num(noPX(this.html_element.style.height)) * this.options.margin_y) + 'px';
				} else if (this.options.pos_y_mode == "attach_top") {
					this.html_element.style.top = (document.getElementById(this.options.pos_y_attach_id).getBoundingClientRect().bottom)  + (num(noPX(this.html_element.style.height)) * this.options.margin_y) + 'px';
				
				} else if (this.options.pos_y_mode == "attach_top_top") {

					this.html_element.style.top = ($('#'+options.pos_y_attach_id).offsetRelative().top)  + (num(noPX(this.html_element.style.height)) * this.options.margin_y) + 'px';
				
				}  else {

					if (this.options.pos_y) {
						this.html_element.style.top = (parent_size.y-num(noPX(this.html_element.style.height)))*this.options.pos_y + "px";
					}
				}
			}

			if (this.options.table_cell_num != undefined) {
				var parent_size_x = parent_size.x;
				var block_size_x = num(noPX(this.html_element.style.width));

				var cols = Math.floor(parent_size_x/block_size_x);
				var x_margin = (parent_size_x - block_size_x*cols)/(cols+1);

				var cell_x_pos = x_margin + (this.options.table_cell_num % cols)*(x_margin+block_size_x);
				
				var cell_y_pos = Math.floor(this.options.table_cell_num / cols);

				this.html_element.style.left = cell_x_pos + "px";

				this.html_element.style.top = num(noPX(this.html_element.style.height))*cell_y_pos + "px";
						
			}


			if (this.options.text) {
				//console.log('text')
				//new_html_element.textContent = options.text;

				var words = (this.options.text.replace("{coin}","{}")).replace('{yan}', "{}").split(" ");

				var actual_text = (this.options.text.replace("{coin}", "{}")).replace('{yan}', '{}');

				
				
				var font_size = 1;

				
				var text_div = document.querySelector('#'+this.id + ' .text_div')
				text_div.style.width = num(noPX(this.html_element.style.width)) * this.options.text_padding_w + "px";
				text_div.style.height = num(noPX(this.html_element.style.height)) * this.options.text_padding_h + "px";

				var text_div2 = document.querySelector('#'+this.id + ' .text_div .text')
				text_div2.style.display = 'inline';
				//text_div2.style.width = text_div.style.width
				//text_div2.style.height = text_div.style.height 

				if (words.length == 1 || this.options['1_line_text']) {
					font_size = Math.min(num(noPX(this.html_element.style.height)) * 0.75 * this.options.text_padding_h, num(noPX(this.html_element.style.width)) * this.options.text_padding_w /  this.options.text.length * 1.8);
				} else {
					// будем смотреть по кол-ву строк
					//var max_font_size = 1;
					for (var rows = 1; rows < 10; rows += 1) {
						// примерное число символов в строке
						var symbols_in_row = actual_text.length / rows;

						//console.log(symbols_in_row)

						font_size = Math.max(Math.min(num(noPX(this.html_element.style.height))/rows * 0.75 * this.options.text_padding_h, num(noPX(this.html_element.style.width)) / symbols_in_row * 1.8 * this.options.text_padding_w), font_size)
					}
					
				}


				//text_div2.innerHTML = options.text.replace("{coin}", "<img src='./images/coin_little.png' height='"+font_size+"' > </img>")
				var html = this.options.text.replace("{coin}", "<img class='coin_ico' src='./images/coin_little.png' style='top: "+font_size*0.2+"px;' height='"+font_size*1.2+"' > </img>");
				html = html.replace("{yan}", "<img class='coin_ico' src='./images/yans.svg' style='top: "+font_size*0.2+"px;' height='"+font_size*1.2+"' > </img>");

				text_div2.innerHTML = html;

				if (this.options.strict_font_size) {
					font_size = this.options.strict_font_size * parent_size.y;
				}

				//console.log('font_size: ', font_size);

				text_div2.style['font-size'] = font_size + 'px';


				

				var text_div_size =  get_size('#'+this.id + ' .text_div');



			 	text_div.style.left = (num(noPX(this.html_element.style.width)) - text_div_size.x) / 2 + 'px';
			 	text_div.style.top = (num(noPX(this.html_element.style.height)) - text_div_size.y) / 2 + 'px';



			 	text_div2.style.display = 'block';

			 	

			 	var text_div2_size = get_size('#'+this.id + ' .text_div .text');
				 	

			 	text_div2.style.left = (num(noPX(this.html_element.style.width)) * this.options.text_padding_w - text_div2_size.x) / 2 + 'px';
			 	text_div2.style.top = (num(noPX(this.html_element.style.height)) * this.options.text_padding_h - text_div2_size.y) / 2 + 'px';
				
			 	if (num(noPX(text_div2.style.top)) < 0) {
			 		text_div2.style['font-size'] = num(noPX(text_div2.style['font-size'])) / (1 + Math.abs(num(noPX(text_div2.style.top))) / (num(noPX(this.html_element.style.height)) * this.options.text_padding_h)) + "px";
			 		var text_div2_size = get_size('#'+this.id + ' .text_div .text');
				 	text_div2.style.top = (num(noPX(this.html_element.style.height)) * this.options.text_padding_h - text_div2_size.y) / 2 + 'px';
					
			 	}

			 	
			}

			if (this.options.background) {
				this.html_element.style.background = this.options.background;
				this.html_element.style['background-size'] = '100%'
			}

			if (this.options.onclick != undefined) {

				this.html_element.setAttribute('onclick', this.options.onclick);
				if (this.options.onclick == "") {
					this.html_element.style['cursor'] = 'default';
				} else {
					this.html_element.style['cursor'] = 'cursor';
					
				}
			}
		}

		for (var i in this.children) {

			this.children[i].recalculate(this);
		}

		//var display_state = $('#' + this.id).css('display');

		$('#' + this.id).css('display', display_state);
		$('#' + this.id).css('opacity', '100%');
		
		$('#' + this.parent_id).css('display', display_parent_state);
		$('#' + this.parent_id).css('opacity', '100%');
	}
}