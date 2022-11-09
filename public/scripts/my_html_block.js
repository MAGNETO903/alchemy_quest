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


var my_html_block = function(id, html_element, options = {}, big_block = false) {
	this.id = id;
	this.html_element = html_element;
	this.children = {};
	this.options = options;
	this.big_block = big_block;

	//this.size_x = num(noPX(this.html_element.css('width')))
	//this.size_y = num(noPX(this.html_element.css('height')))

	this.get_size = function() {
		//console.log(this.html_element.offsetWidth)
		return {
			"x": this.html_element.offsetWidth,
			"y": this.html_element.offsetHeight
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

		if (options.onclick) {
			new_html_element.setAttribute('onclick', options.onclick);
			new_html_element.style['cursor'] = 'pointer';
		}

		$('#'+this.id).append(new_html_element)

		if (options.text) {
			var text_div = document.createElement("div");

			text_div.style.width = num(noPX(new_html_element.style.width)) * options.text_padding_w + 'px';
			text_div.style.height = num(noPX(new_html_element.style.height)) * options.text_padding_h + 'px';

			text_div.setAttribute('class', 'text_div')

			var text_div2 = document.createElement("div");
			text_div2.setAttribute('class', 'text')
			text_div2.textContent = options.text;


			

			var words = options.text.split(" ");
			

			var font_size = 1;

			if (words.length == 1 || options['1_line_text']) {
				font_size = Math.min(num(noPX(new_html_element.style.height)) * 0.85 * options.text_padding_h, num(noPX(new_html_element.style.width)) / options.text.length * 1.8* options.text_padding_w);
			} else {
				// будем смотреть по кол-ву строк
				//var max_font_size = 1;
				for (var rows = 1; rows < 10; rows += 1) {
					// примерное число символов в строке
					var symbols_in_row = options.text.length / rows;

					font_size = Math.max(Math.min(num(noPX(new_html_element.style.height))/rows * 0.85 * options.text_padding_h, num(noPX(new_html_element.style.width)) / symbols_in_row * 1.8 * options.text_padding_w), font_size)
				}
			}
			
			text_div2.style['font-size'] = font_size + 'px';
			
			text_div.appendChild(text_div2);
			new_html_element.appendChild(text_div)



			var text_div_size = get_size('#'+id + ' .text_div');

			console.log(id, text_div_size)

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

	}

	this.recalculate = function(parent) {
		var display_state = $('#' + this.id).css('display');

		$('#' + this.id).css('display', 'block');
		$('#' + this.id).css('opacity', '0%');

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
					this.html_element.style.left = (document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().right - num(noPX(this.html_element.style.width))) + (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
				} else if (options.pos_x_mode == "attach_left") {
					this.html_element.style.left = (document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().right)  + (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
					
				} else if (options.pos_x_mode == "attach_left_left") {
					this.html_element.style.left = (document.getElementById(this.options.pos_x_attach_id).getBoundingClientRect().left)  + (num(noPX(this.html_element.style.width)) * this.options.margin_x) + 'px';
					
				} else {
					if (this.options.pos_x) {
						this.html_element.style.left = (parent_size.x-num(noPX(this.html_element.style.width)))*this.options.pos_x + "px";
					}
				}

				if (this.options.pos_y_mode == "attach_bottom") {
					this.html_element.style.top = (document.getElementById(this.options.pos_y_attach_id).getBoundingClientRect().bottom - num(noPX(this.html_element.style.height)))  + (num(noPX(this.html_element.style.height)) * this.options.margin_y) + 'px';
				} else if (this.options.pos_y_mode == "attach_top") {
					this.html_element.style.top = (document.getElementById(this.options.pos_y_attach_id).getBoundingClientRect().bottom)  + (num(noPX(this.html_element.style.height)) * this.options.margin_y) + 'px';
				
				} else {

					if (this.options.pos_y) {
						this.html_element.style.top = (parent_size.y-num(noPX(this.html_element.style.height)))*this.options.pos_y + "px";
					}
				}
			}


			if (this.options.text) {
				//new_html_element.textContent = options.text;

				var words = this.options.text.split(" ");
			

				var font_size = 1;

				
				var text_div = document.querySelector('#'+this.id + ' .text_div')
				text_div.style.width = num(noPX(this.html_element.style.width)) * this.options.text_padding_w + "px";
				text_div.style.height = num(noPX(this.html_element.style.height)) * this.options.text_padding_h + "px";

				var text_div2 = document.querySelector('#'+this.id + ' .text_div .text')

				if (words.length == 1 || this.options['1_line_text']) {
					font_size = Math.min(num(noPX(this.html_element.style.height)) * 0.9 * this.options.text_padding_h, num(noPX(this.html_element.style.width)) * this.options.text_padding_w /  this.options.text.length * 1.8);
				} else {
					// будем смотреть по кол-ву строк
					//var max_font_size = 1;
					for (var rows = 1; rows < 10; rows += 1) {
						// примерное число символов в строке
						var symbols_in_row = this.options.text.length / rows;

						font_size = Math.max(Math.min(num(noPX(this.html_element.style.height))/rows * 0.85 * this.options.text_padding_h, num(noPX(this.html_element.style.width)) / symbols_in_row * 1.8 * this.options.text_padding_w), font_size)
					}
					
				}
				
				text_div2.textContent = this.options.text;
				text_div2.style['font-size'] = font_size + 'px';



				var text_div_size = get_size('#'+this.id + ' .text_div');

			 	text_div.style.left = (num(noPX(this.html_element.style.width)) - text_div_size.x) / 2 + 'px';
			 	text_div.style.top = (num(noPX(this.html_element.style.height)) - text_div_size.y) / 2 + 'px';
			
			 	var text_div2_size = document.querySelector('#'+this.id + ' .text_div .text');

			 	
			 	text_div2.style.left = (num(noPX(this.html_element.style.width)) * this.options.text_padding_w - text_div2_size.offsetWidth) / 2 + 'px';
			 	text_div2.style.top = (num(noPX(this.html_element.style.height)) * this.options.text_padding_h - text_div2_size.offsetHeight) / 2 + 'px';
			}

			if (this.options.background) {
				this.html_element.style.background = this.options.background;
				this.html_element.style['background-size'] = '100%'
			}

		}

		for (var i in this.children) {
			this.children[i].recalculate(this);
		}

		//var display_state = $('#' + this.id).css('display');

		$('#' + this.id).css('display', display_state);
		$('#' + this.id).css('opacity', '100%');
	}
}