// В этом разделе основные переменные
const PLATFORM_TYPE = 'yandex'


//const SERVER_URL = 'https://alchemy-quest.adaptable.app/';
//const SERVER_URL = 'https://alchemy-quest.onrender.com/'
//const SERVER_URL = 'https://statuesque-mousse-af3981.netlify.app/'
//const SERVER_URL = 'http://localhost:3000/'
var SERVER_URL = 'https://test-cherkashindaniel.b4a.run/'

const build = 65;
var SHOULD_LOAD_PROGRESS = false;
var MAKE_SCREEN_ON_X = false;
var HIDE_VERSION = false;

var FORCE_TV_VERSION = false;

var DEFAULT_LANG = 'ru'
var yandex_metrika = true
var YM_NUMBER = 89960530
var SEND_YM_REPORTS = false;

var ANIMATION = true;
var SHOW_STRIKE_BLOCK = true

var STORAGE_NAME = 'alchemy_quiz_data'

const UPDATE_BTN_SELECTOR = '';
const UPDATE_MOBILE_BTN_SELECTOR = '';

const AD_DELAY = 20*1000
const AD_INTERVAL = 2*60*1000

// vk
const VK_APP_ID = 51404440;
const VK_APP_LINK = "https://vk.com/app51404440"

// sber
const SBER_APP_NAME = 'Викторина: Войны клонов'
const SBER_APP_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmZjAwMThiNWZhMGIzNzczNTYwM2ZiZDcyMjliNDY2MDNmNTEwMzI0YzQ0ODlkZjIwNWM1YTczMDM5NTk2Yzk5NDdhYTYiLCJhdWQiOiJWUFMiLCJleHAiOjE2NDg4OTY5NTgsImlhdCI6MTY0ODgxMDU0OCwiaXNzIjoiS0VZTUFTVEVSIiwidHlwZSI6IkJlYXJlciIsImp0aSI6IjRkNTA1ZTBkLWZlZjQtNGQyZS04MTEyLWYwNThlNDU1NWY4MiIsInNpZCI6IjllNTBmYzQ3LWY4MDAtNDg0ZC05YzVjLTUyMzJlMDY3ZGMxOSJ9.IyMSsjNAQJoJ7eZPT90vA6IU7ff8hZUwbO4gvXZCtFgyMil0QxlUPjqy9eA4aexvC4_jLMek2GMUA44dUfYTYKxhTXbhSHddrvqqyRi6jUhkdSdmvtpv9TXhIyuRM9KTPa9UQPveMVxYbzi9dHZKy8aEWfsSwmH_YL2THzBQzVUj7d8EbZ-FZqWaVOm8gN3M-jY6G4jSmASO3m4tPYKIig5uy6f2S6rJWNO2GIb4_CsyXM_GzEOmDOYf7jfcl9n0ygYMWQ-GhvWE-EbLpJi7Vb3DnyTv_QvKBxEndrPcxyGROoV31suI01qsm9VUIAehEn3dHnoums0A2NiJn6CQq2xzul6peZakbhaE_BmX4f1Tm7g5TlYcfU_ghtlhTF9Tt8FjlT2D2yNRUNHcL75eFLAEiM9hsf4MVtmEUp3reaXaxB5F-xl6Ar2jFriKRLtEGSOJQs1VlWLv4Ss9DtkrjLB8WkcGzAIYRM9AIVlFvanowJYMGLxg2Llgk6tIH_XfPUnOC1XIQttEKWgQE61yDLzyyhBsrG17PhR-pCNqzUsnqrHwiwJnUDMxgV5e-Kqk4AAEBo4X8xSI0N0L9BOcgooYrbVL0W1Q9dIW02rM5X642fzp9HuRy3nc2G9bzIT4eLD40TV0c1GUDrGZKU6pHqxmOjgoDOkNwjmZUBdXMTg';
const SBER_testing = false

// gamemonetize
const GM_APP_ID = 'mbhvcbunhuru6t4h7b37sgtfehf1vl77'

// gamedistribution
const GD_APP_ID = "05ff9c8b10a447739074c8c676a3193b"
const GD_AD_DEBUG = true;

var CAMERA_ZOOM = 1.5;

// условные единицы
var sqrs_in_h = 12

// кол-во фильмов
var FILMS_AMOUNT = 100
// 
var WINNER_STREAK = 100

// задержка после ответа
var NEXT_QUESTION_DELAY = 200*ANIMATION

var DELAY_BEFORE_FLASHING = 600*ANIMATION;
var FLASH_DELAY_1 = 1000*ANIMATION;
var FLASH_DELAY_2 = 50*ANIMATION;

// после какого вопроса просят отзыв
var REVIEW_QUESTION_NUM = 8*100;

var JOIN_GROUP_NUM = 16*100;



var MARK_RIGHT_ANS = true


var tv_moves = {
	"game": {
		1: {
			"ArrowLeft": 2,
			"ArrowRight": 2,
			"ArrowUp": 3,
			"ArrowDown": 3
		},
		2: {
			"ArrowLeft": 1,
			"ArrowRight": 1,
			"ArrowUp": 4,
			"ArrowDown": 4
		},
		3: {
			"ArrowLeft": 4,
			"ArrowRight": 4,
			"ArrowUp": 1,
			"ArrowDown": 1
		},
		4: {
			"ArrowLeft": 3,
			"ArrowRight": 3,
			"ArrowUp": 2,
			"ArrowDown": 2
		},
	}
}

// пропорции блоков
const proportions = {
	
}


// В этом разделе локализация на другие языки разных разделов игры
var text = {
	'title': {
		"ru": "Алхимический квест",
		"en": "Alchemy quest"
	},
	"game_options_title": {
		"ru": "Настройки",
		"en": "Options"
	},
	"game_options_back_btn": {
		"ru": "Вернуться в игру",
		"en": "Back to game"
	}
}


// Некоторые карточки (сюжетные) удаляют определенный карточки из случайной колоды

// операторы
var operators = {
	"taken_1": 0,
	"taken_2": 0,
	"taken_3": 0
}

// Список карточек
var cards = {
	"plot_1-1": {
		"title": {
			"ru": "Дратути!",
			"en": "Hello there!"
		},
		"text": {
			"ru": "Просто здравствуй! Просто как дела? Просто здравствуйте! Просто как дела?",
			"en": "- Hello there! \n - General Kenobi..."
		},
		"img": "url('./images/1.jpg')",
		
		"answers": {
			"1": {
				"text": {
					"ru": "Привет!",
					"en": "Hi!"
				},
				"next": function(operators) {
					// изменяем операторы
					return "plot_1-2"
				}
			},
			"2": {
				"text": {
					"ru": "Эээ...",
					"en": "Umm..."
				},
				"next": function(operators) {
					// изменяем операторы
					return "plot_1-2"
				}
			}
		}
	},
	"plot_1-2": {
		"title": {
			"ru": "Взять или не взять?",
			"en": "Do or not to do?!"
		},
		"text": {
			"ru": "Если ты хочешь это, то тебе придется взять этой силой",
			"en": "If you want it, then you'll have to take it"
		},
		"img": "url('./images/2.jpg')",
		"answers": {
			"1": {
				"text": {
					"ru": "Взять!",
					"en": "Do it!"
				},
				"next": function(operators) {
					// изменяем операторы
					operators.taken_1 = 1;
					return "plot_1-3"
				}
			},
			"2": {
				"text": {
					"ru": "Не брать",
					"en": "dont"
				},
				"next": function(operators) {
					// изменяем операторы
					return "plot_1-3"
				}
			}
		}
	},
	"plot_1-3": {
		"title": {
			"ru": "Взять или не взять 2?",
			"en": "Do or not to do 2?!"
		},
		"text": {
			"ru": "Если ты хочешь это, то тебе придется взять этой силой. Но ты и так уже это знаешь",
			"en": "If you want it, then you'll have to take it"
		},
		"img": "url('./images/3.jpg')",
		"answers": {
			"1": {
				"text": {
					"ru": "Взять снова!",
					"en": "Do it!"
				},
				"next": function(operators) {
					// изменяем операторы
					operators.taken_2 = 1;
					return "plot_1-4"
				}
			},
			"2": {
				"text": {
					"ru": "Не брать",
					"en": "dont"
				},
				"next": function(operators) {
					// изменяем операторы
					return "plot_1-4"
				}
			}
		}
	},
	"plot_1-4": {
		"title": {
			"ru": "Взять или не взять 3?",
			"en": "Do or not to do 2?!"
		},
		"text": {
			"ru": "В каком же ты отчаянии, если пришёл ко мне... Чего ради?!",
			"en": "If you want it, then you'll have to take it"
		},
		"img": "url('./images/4.jpg')",
		"answers": {
			"1": {
				"text": {
					"ru": "Взять опять!",
					"en": "Do it!"
				},
				"next": function(operators) {
					// изменяем операторы
					if (operators.taken_1 && operators.taken_2) {
						return "plot_1-6"
					} else {
						return "plot_1-5"
					}
				}
			},
			"2": {
				"text": {
					"ru": "Не брать :3",
					"en": "dont"
				},
				"next": function(operators) {
					// изменяем операторы
					return "plot_1-5"
				}
			}
		}
	},
	"plot_1-5": {
		"title": {
			"ru": "Вы не решились?",
			"en": "Do or not to do 2?!"
		},
		"text": {
			"ru": "Ты взял явно не всё...",
			"en": "If you want it, then you'll have to take it"
		},
		"img": "url('./images/6.jpg')",
		"answers": {
			"1": {
				"text": {
					"ru": "Начать заново!",
					"en": "Do it!"
				},
				"next": function(operators) {
					// изменяем операторы
					
					return "plot_1-1"
					
				}
			},
			"2": {
				"text": {
					"ru": "Не начинать заново",
					"en": "dont"
				},
				"next": function(operators) {
					// изменяем операторы
					return "plot_1-1"
				}
			}
		}
	},
	"plot_1-6": {
		"title": {
			"ru": "Вы взяли всё!",
			"en": "Do or not to do 2?!"
		},
		"text": {
			"ru": "Ты догадался взять всё! Теперь у тебя есть суперспособность",
			"en": "If you want it, then you'll have to take it"
		},
		"img": "url('./images/5.jpg')",
		"answers": {
			"1": {
				"text": {
					"ru": "Начать заново!",
					"en": "Do it!"
				},
				"next": function(operators) {
					// изменяем операторы
					operators.taken_1 = 0;
					operators.taken_2 = 0;
					return "plot_1-1"
					
				}
			},
			"2": {
				"text": {
					"ru": "Не начинать заново",
					"en": "dont"
				},
				"next": function(operators) {
					// изменяем операторы
					operators.taken_1 = 0;
					operators.taken_2 = 0;
					return "plot_1-1"
				}
			}
		}
	}
}

// структура, колоды?
var chapters = {
	"1": {
		"first_card": "plot_1-1",
		"plot_cards": [],
		"random_cards": []
	}
}
