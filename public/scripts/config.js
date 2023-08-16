// В этом разделе основные переменные
const PLATFORM_TYPE = 'yandex'


//const SERVER_URL = 'https://alchemy-quest.adaptable.app/';
//const SERVER_URL = 'https://alchemy-quest.onrender.com/'
//const SERVER_URL = 'http://localhost:3000/'

//var SERVER_URL = 'https://lively-culottes-bull.cyclic.cloud/'

//var SERVER_URL = 'https://test4-cherkashindaniel.b4a.run/' 

//var SERVER_URL = 'https://alchemy-quest.zeabur.app/'

var SERVER_URL = 'https://alchemy-quest-umber.vercel.app/'

const build = 65;
var SHOULD_LOAD_PROGRESS = false;
var MAKE_SCREEN_ON_X = true;
var HIDE_VERSION = false;

var SOCKETIO = false;

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




// ДЛЯ БАЛАНСА ИГРЫ
var REPUTATION_STAT_DELTA_1 = 10;
var POWER_STAT_DELTA_1 = 10;
var MONEY_STAT_DELTA_1 = 10;
var HEALTH_STAT_DELTA_1 = 10;
var MAX_STAT_VALUE = 100;

var START_POS = 'plot_1-1'
var PROGRESS_PROTOCOL = 1;

var DUR_ACHIEVE = 3000;



// В этом разделе локализация на другие языки разных разделов игры
// Локализация для динамичных блоков
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
	},
	"CHARACTER_0": {
		"ru": "...",
		"en": "..."
	},
	"CHARACTER_1": {
		"ru": "Проводница",
		"en": "Conductor"
	},
	"CHARACTER_2": {
		"ru": "Существо",
		"en": ""
	},
	"CHARACTER_3": {
		"ru": "Мальчик",
		"en": ""
	},
	"CHARACTER_4": {
		"ru": "Старик",
		"en": ""
	},
	"CHARACTER_5": {
		"ru": "Цветочница",
		"en": ""
	},
	"CHARACTER_6": {
		"ru": "Городничий",
		"en": ""
	},
	"CHARACTER_7": {
		"ru": "Нищий",
		"en": ""
	},
	"CHARACTER_8": {
		"ru": "Лунный торговец",
		"en": ""
	},
	"CHARACTER_9": {
		"ru": "Чародей",
		"en": ""
	},
	"CHARACTER_10": {
		"ru": "Посланник",
		"en": ""
	},
	"CHARACTER_11": {
		"ru": "Художник",
		"en": ""
	},
	"CHARACTER_12": {
		"ru": "Путешественник",
		"en": ""
	},
	"CHARACTER_13": {
		"ru": "Девушка с лентами",
		"en": ""
	},
	"CHARACTER_14": {
		"ru": "Кузнец",
		"en": ""
	},
	"CHARACTER_15": {
		"ru": "Рыбак",
		"en": ""
	},
	"CHARACTER_16": {
		"ru": "Девочка",
		"en": ""
	},
	"CHARACTER_17": {
		"ru": "Бабка",
		"en": ""
	},
	"CHARACTER_18": {
		"ru": "Ученик ",
		"en": ""
	},
	"CHARACTER_19": {
		"ru": "Пегас",
		"en": ""
	},
	"CHARACTER_20": {
		"ru": "Дракон",
		"en": ""
	},
	"CHARACTER_21": {
		"ru": "Ведьма",
		"en": ""
	},
	"CHARACTER_22": {
		"ru": "Пандора",
		"en": ""
	},
	"CHARACTER_23": {
		"ru": "Разбойник",
		"en": ""
	},
	"CHARACTER_24": {
		"ru": "Герой",
		"en": ""
	},
	"CHARACTER_24": {
		"ru": "Герой",
		"en": ""
	},
	"CHARACTER_25": {
		"ru": "Яйцо",
		"en": ""
	},
	"CHARACTER_26": {
		"ru": "Пустошь",
		"en": ""
	},
	"CHARACTER_27": {
		"ru": "Феникс",
		"en": ""
	},
	"CHARACTER_28": {
		"ru": "Космос",
		"en": ""
	},
	"CHARACTER_29": {
		"ru": "Шар",
		"en": ""
	},
	"CHARACTER_30": {
		"ru": "Цветок",
		"en": ""
	},
	"dragon_type_0": {
		"ru": "цветочный",
		"en": ""
	},
	"dragon_type_1": {
		"ru": "переливчатый",
		"en": ""
	},
	"dragon_type_2": {
		"ru": "златокрыл",
		"en": ""
	},
	"dragon_type_3": {
		"ru": "огненный",
		"en": ""
	},
	"shop_popup_2_title": {
		"ru": "Бесплатные лунные монеты",
		"en": "Free lunar money"
	},
	"shop": {
		0: {
			"title": {
				"ru": "Волшебная клюква",
				"en": ""
			},
			"desk": {
				"ru": "Исцеление в случае телесных недугов"
			},
			"long_desk": {
				"ru": "Произрастает в отадённых областях Зачарованного Леса. Дарует исцеление в случае телесных недугов."
			},
			"cost": 10

		},
		1: {
			"title": {
				"ru": "Огненные кристаллы",
				"en": ""
			},
			"desk": {
				"ru": "Ключ к секрету украденного..."
			},
			"long_desk": {
				"ru": "Произрастает в отадённых областях Зачарованного Леса. Дарует исцеление в случае телесных недугов."
			},
			"cost": 50
		},
		2: {
			"title": {
				"ru": "Яйцо существа",
				"en": ""
			},
			"desk": {
				"ru": "Некая тайна, или грезы о звездах"
			},
			"long_desk": {
				"ru": "Произрастает в отадённых областях Зачарованного Леса. Дарует исцеление в случае телесных недугов."
			},
			"cost": 100,
		},
	},
	"options": {
		0: {
			"title": {
				"ru": "Музыка и звук"
			}
		},
		1: {
			"title": {
				"ru": "Авторизация и прогресс"
			}
		},
	},
	"achievements": {
		"1": {
			'title': {
				"ru": 'достижение 1',
				"en": "achievement 1"
			},
			"desc": {
				"ru": "описание достижения 1",
				"en": "achievement 1's description"
			}
		},
		"default": {
			"title": {
				"ru": "???",
				"en": "???"
			},
			"desk": {
				"ru": "попробуйте покормить нищего несколько раз",
				"en": "hello there"
			}
		}
	},
	"promocode_result": {
		"error": {
			"gso_popup3_title": {
				"ru": "Промокод не обнаружен",
				"en": ""
			},
			"gso_popup3_desk": {
				"ru": "Наш сервер отказался признавать ваш код промокодом. Возможно он просто им и не был, или же истёк срок действия.",
				"en": ""
			}
		},
		"already_used": {
			"gso_popup3_title": {
				"ru": "Промокод уже использован",
				"en": ""
			},
			"gso_popup3_desk": {
				"ru": "Промокод который вы ввели является одноразовым. Вы уже им воспользовались",
				"en": ""
			}
		},
		"debugging": {
			"gso_popup3_title": {
				"ru": "Отладка доступна",
				"en": ""
			},
			"gso_popup3_desk": {
				"ru": "Доступ к расширенной отладке получен. При закрытии блока отладки введите промокод снова для повторной активации.",
				"en": ""
			}
		}
	},
	"buy": {
		"ru": "купить",
		en: "buy"
	},
	"bought": {
		ru: "куплено",
		en: "bought"
	}
}

// Локализация для статичных блоков
var html_block_texts = {
	'gso_title_block': {
		'ru': "Предложения",
		'en': "Offers"
	},
	'go_br_popup_desk': {
		'ru': "Нашли баг? Сообщите нам о нём! Помогите Выбору Алхимика стать лучше!",
		'en': 'Found bug?'
	},
	"go_title_block": {
		"ru": "настройки",
		"en": "options"
	},
	'go_cb_i1_title': {
		"ru": "Музыка и звук",
		"en": "Music and sound"
	},
	"go_cb_i2_title": {
		"ru": "Авторизация и прогресс",
		"en": "Authorizaton and progress"
	},
	"go_cb_i2_text_1": {
		"ru": "Нашли баг?",
		"en": "Found bug?"
	},
	go_cb_i2_btn_1: {
		ru: "Сообщить",
		en: 'Report'
	},
	go_cb_i2_text_2: {
		ru: "Авторизация",
		en: "Authorizaton"
	},
	go_cb_i2_btn_2: {
		ru: "Войти",
		en: "Login"
	},
	go_cb_i3_text_1: {
		ru: "Достижения",
		en: "Achievements"
	},
	go_cb_i3_text_2: {
		ru: "Персонажи",
		en: "Characters"
	},
	go_cb_i3_text_3: {
		ru: "Концовки",
		en: "Endings"
	},
	go_bb_title: {
		ru: "Совет",
		en: "Tip"
	},
	ga_title: {
		ru: "достижения",
		en: "achievements"
	},
	ga_bb_title: {
		ru: "Совет",
		en: "Tip"
	},
	gs_title_block: {
		ru: "магазин",
		en: "shop"
	},
	gs_special_offer_block: {
		ru: "Специальные предложения",
		en: "Special offers"
	},
	gs_popup2_title: {
		ru: "Бесплатные бонусные монеты",
		en: "Free lunal coins"
	},
	gs_popup2_desk: {
		ru: "Посмотрите рекламу и получите бесплатные бонусные монеты!",
		en: "Watch advertisment and get free lunar coins!"
	},
	gs_popup2_item_title: {
		ru: "Лунные монеты",
		en: "Lunar coins"
	},
	gs_popup2_buy_btn: {
		ru: "Посмотреть",
		en: "Watch"
	},
	gso_promocode_btn: {
		ru: "Ввести промокод",
		en: "Enter promocode"
	},
	gso_p_popup_title: {
		ru: "Нашли промокод?",
		en: "Found promocode?"
	},
	gso_p_popup_desk: {
		ru: "Если у вас есть промокод, то поскорее им воспользуйтесь :)",
		en: "If you've got a promocode, don't wait to use it :)"
	},
	gso_p_p_sb_text: {
		ru: "Отправить",
		en: "Send"
	},
	gch_title: {
		ru: "персонажи",
		en: "characters"
	},
	ge_title: {
		ru: "концовки",
		en: "endings"
	}
}

// коды товаров
var shop_codes = [
	'Art_extra_power',
	'Art_extra_hp',
	'Art_extra_reputation',
	'Art_extra_money',
	'Art_cosmos',
	'Art_stormglass',
	'Art_flower',
	'Art_ball',
	'Art_reins',
	'Art_crystal',
	'Art_book',
	'Art_phoenix'	
]


// операторы
var operators = {
	"power_stat": 50,
	"hp_stat": 50,
	"reputation_stat": 50,
	"money_stat": 50,

	// Введение
	"Z": 0,
	"D": 0,

	// Только-только в городе
	"N": 0,
	"M": 0,
	H: 0,
	S: 0,
	Dr: 0,
	Sym: 0,
	O: 0,

	// В ритме города
	V: 0,
	T: 0,
	P: 0,
	G: 0,
	Dr_sym: 0,
	U_sum: 0,

	// артефакты - доп жизни
	Art_extra_power: 0,
	Art_extra_hp: 0,
	Art_extra_reputation: 0,
	Art_extra_money: 0,

	// артефакты - доп сюжет
	Art_cosmos: 0,
	Art_stormglass: 0,
	Art_flower: 0,

	Art_ball: 0,
	Art_reins: 0,
	Art_crystal: 0,

	Art_book: 0,
	Art_phoenix: 0,

	// Доп операторы
	// доступность товаров

	// артефакты - доп сюжет
	Art_cosmos_available: 0,
	Art_stormglass_available: 0,
	Art_flower_available: 0,

	Art_ball_available: 0,
	Art_reins_available: 0,
	Art_crystal_available: 0,

	Art_book_available: 0,
	Art_phoenix_available: 0,

	// критическое значение статов
	critical: 0,


	// открытость персов
	character_0_opened: 0,
	character_1_opened: 0,
	character_2_opened: 0,
	character_3_opened: 0,
	character_4_opened: 0,
	character_5_opened: 0,
	character_6_opened: 0,
	character_7_opened: 0,
	character_8_opened: 0,
	character_9_opened: 0,
	character_10_opened: 0,
	character_11_opened: 0,
	character_12_opened: 0,
	character_13_opened: 0,
	character_14_opened: 0,
	character_15_opened: 0,
	character_16_opened: 0,
	character_17_opened: 0,
	character_18_opened: 0,
	character_19_opened: 0,
	character_20_opened: 0,
	character_21_opened: 0,
	character_22_opened: 0,
	character_23_opened: 0,
	character_24_opened: 0,
	character_25_opened: 0,
	character_26_opened: 0,
	character_27_opened: 0,
	character_28_opened: 0,
	character_29_opened: 0,
	character_30_opened: 0,

	// достижения
	achievement_1_opened: 0,
	achievement_2_opened: 0,
	achievement_3_opened: 0,
	achievement_4_opened: 0,
	achievement_5_opened: 0,
	achievement_6_opened: 0,
	achievement_7_opened: 0,
	achievement_8_opened: 0,
	achievement_9_opened: 0,
	achievement_10_opened: 0,

	// концовки
	ending_0_opened: 0,
	ending_1_opened: 0,
	ending_2_opened: 0,
	ending_3_opened: 0,
	ending_4_opened: 0,
	ending_5_opened: 0,
	ending_6_opened: 0,
	

}





// число кадров у анимаций
var frames = {
	"crystal": 20
}


// НОВАЯ СТРУКТУРКА
// всё поделено на колоды
// главная сюжетная линия - колода main, все остальные - вспомогательные
var desks = {
	"plot": { 
		"type": "script", // сценарий: важна последовательность, карточки не повторяются. 
		"cards": {
		// ID-шник карточки. Используется для указания ссылок
		"plot_1-1": {
			// заголовок карточки
			"title": { "ru": "Кристалл", "en": "Crystal" },
			// текст на самой карточке
			"text": {
				"ru": "Кристалл сияет в извечной пустоте. Того, кто найдет его - он наградит бессмертием. Но кто посмеет начертать свое имя в вечности?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			// это поле указывается только если эта карточка - точка сохранения, т.е. к ней потом может игрок вернуться (с откатом параметров до тех, что были на момент прохождения карточки)
			"save_point": "beginning",
			// это поле указывается только если на этой карточке надо воспроизводить анимацию (последовательность кадров)

			"animation": "crystal", // имя анимации

			// номер картинки на карточке
			"img": 1,
			// варианты ответа
			"answers": {
				"1": {
					// текст ответа 
					"text": { "ru": "...", "en": "..." },
					// что произойдёт при выборе этого ответа (в данном случае просто переход на карточку с ID "plot_1-2")
					"next": function(operators) {
						// изменяем операторы
						return "plot_1-2"
					}
				},
				// аналогично, второй ответ
				"2": {
					"text": {
						"ru": "...",
						"en": "..."
					},
					"next": function(operators) {
						// изменяем операторы
						return "plot_1-2"
					}
				}
			}
		},
		"plot_1-2": {
			"title": { "ru": "Кристалл", "en": "Crystal" },
			"text": {
				"ru": "...но Великому Демиургу подвластно все, не так ли?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"animation": "crystal",

			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_1-3"
					}
				},
				"2": {
					"text": {
						"ru": "...",
						"en": "..."
					},
					"next": function(operators) {
						// изменяем операторы
						return "plot_1-3"
					}
				}
			}
		},
		"plot_1-3": {
			"title": { "ru": "Кристалл", "en": "Crystal" },
			"text": {
				"ru": "Сейчас 1089 ц.у. с момента заточения Великого Демиурга",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"animation": "crystal",

			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "Что...", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-0"
					}
				},
				"2": {
					"text": {
						"ru": "Как...", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-0"
					}
				}
			}
		},
		"plot_2-0": {
			"title": text.CHARACTER_1,
			"text": {
				"ru": "Ну вот и все. Ты готов принять то, что тебя ждет?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 1,
			"save_point": "tutorial",
			"answers": {
				"1": {
					"text": { "ru": "Да", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-1"
					}
				},
				"2": {
					"text": {
						"ru": "Нет", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-2"
					}
				}
			}
		},
		"plot_2-1": {
			"title": text.CHARACTER_1,
			"text": {
				"ru": "Отлично! Значит история повторяется вновь. Смотри, не оплошай, ладно?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "Конечно", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_3-0"
					}
				},
				"2": {
					"text": {
						"ru": "Посмотрим...", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_3-0"
					}
				}
			}
		},
		"plot_2-2": {
			"title": text.CHARACTER_1,
			"text": {
				"ru": "В любом случае назад пути нет. Объяснить тебе, как тут что работает?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "Да", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-3"
					}
				},
				"2": {
					"text": {
						"ru": "Нет", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-4"
					}
				}
			}
		},
		"plot_2-3": {
			"title": text.CHARACTER_1,
			"text": {
				"ru": "Посмотри в верхнюю часть экрана. Это параметры - магия, здоровье, репутация, деньги. Они будут меняться в зависимости от выборов.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "Ясно", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-3-1"
					}
				},
				"2": {
					"text": { "ru": "Понятно", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-3-1"
					}
				}
			}
		},
		"plot_2-3-1": {
			"title": text.CHARACTER_1,
			"text": {
				"ru": " Они могут понижаться и повышаться. Не позволяй им достигать минимума или максимума.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "Ага", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-3-2"
					}
				},
				"2": {
					"text": {
						"ru": "...", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-3-2"
					}
				}
			}
		},
		"plot_2-3-2": {
			"title": text.CHARACTER_1,
			"text": {
				"ru": "Последствия не у всех выборов будут проявляться немедленно. Выбирай с осторожностью. Просто, да?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "Да", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-5"
					}
				},
				"2": {
					"text": {
						"ru": "Нет", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-5"
					}
				}
			}
		},
		"plot_2-5": {
			"title": text.CHARACTER_1,
			"text": {
				"ru": " Хорошо. Я вывела тебя из безвременья. И то, что было до, уже не имеет значения.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "Кто ты?", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-6"
					}
				},
				"2": {
					"text": {
						"ru": "Нет", "Где я теперь?": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-7"
					}
				}
			}
		},
		"plot_2-6": {
			"title": text.CHARACTER_1,
			"text": {
				"ru": "Мы еще увидимся. А пока что… Это неважно. ",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "Где я теперь?", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-7"
					}
				},
				"2": {
					"text": {
						"ru": "Понятно…", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-8"
					}
				}
			}
		},
		"plot_2-7": {
			"title": text.CHARACTER_1,
			"text": {
				"ru": "Это город на берегу моря, к западу от столицы. Тебя ждет простая человеческая жизнь. Если, конечно, жизнь алхимика можно назвать таковой. Все, как ты и хотел…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "Хорошо", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-8"
					}
				},
				"2": {
					"text": {
						"ru": "Понятно", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_2-8"
					}
				}
			}
		},
		"plot_2-8": {
			"title": text.CHARACTER_1,
			"text": {
				"ru": "Тебе предстоит заново познать… многое. Больше ты узнаешь, когда придет время.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "Ясно...", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_3-0"
					}
				},
				"2": {
					"text": {
						"ru": "...", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_3-0"
					}
				}
			}
		},
		"plot_2-4": {
			"title": text.CHARACTER_1,
			"text": {
				"ru": "Чудно. Тогда увидимся позже. Не забывай меня, ладно?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 1,
			"answers": {
				"1": {
					"text": { "ru": "Прощай", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_3-0"
					}
				},
				"2": {
					"text": {
						"ru": "Ещё увидимся", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_3-0"
					}
				}
			}
		},
		"plot_3-0": {
			"title": {"ru": "...", "en": "..."},
			"text": {
				"ru": " Солнечный диск поднимается над горизонтом. Что уготовил день грядущий?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 0,
			"save_point": "introduction",
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_3-1"
					}
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						return "plot_3-1"
					}
				}
			}
		},
		"plot_3-1": {
			"title": text.CHARACTER_4,
			"text": {
				"ru": "А... Добрый день, уважаемый. А я все думаю, кто это здесь поселился! В нашем-то городке таких нечасто встретишь... Алхимиков. Пойду расскажу остальным…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"img": 4,
			"answers": {
				"1": {
					"text": { "ru": " Ладно…", "en": "..." },
					"next": function(operators) {
						// изменяем операторы
						return "plot_3-2"
					}
				},
				"2": {
					"text": {
						"ru": "Добрый день!", "en": "..."},
					"next": function(operators) {
						// изменяем операторы
						// А здесь уже не просто переход на "plot_3-2", но ещё и изменение операторов (+ к репутации, + к оператоу D)
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						operators.D+=1;
						return "plot_3-2"
					}
				}
			}
		},
		"plot_3-2": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				// здесь мы текст, который хотим покрасить заключили в <span class='цвет'> цветоной текст </span>
				"ru": "Дяденька! У меня есть <span class='blue'>морские камешки</span>! Давайте меняться? ",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да", "en": "..." },
					"next": function(operators) { 
						operators.money_stat -= MONEY_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						operators.D++;
						return "plot_3-3" }
				},
				"2": {
					"text": {"ru": "Нет", "en": "..."},
					"next": function(operators) { return "plot_3-3" }
				}
			}
		},
		"plot_3-3": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Здравствуйте! Вы ведь алхимик? Вот - это то, что осталось от предыдущего Мастера. Возможно, что-то из этого сможет вам пригодиться.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Спасибо. Я найду этому применение", "en": "..." },
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						operators.D++;
						return "plot_3-4" }
				},
				"2": {
					"text": {"ru": "Хлам какой-то... Но ладно", "en": "..."},
					"next": function(operators) { return "plot_3-4" }
				}
			}
		},
		"plot_3-4": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": " Приветствую! Уже освоились в нашем городке? Надеюсь, вместе мы придем к процветанию. Если будет что-нибудь подозрительное - обязательно сообщите.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Обязательно!", "en": "..." },
					"next": function(operators) { return "plot_3-5" }
				},
				"2": {
					"text": {"ru": "“Деньги не пахнут”", "en": "..."},
					"next": function(operators) { 
						operators.Z++;
						return "plot_3-5" }
				}
			}
		},
		"plot_3-5": {
			"title": {"ru": "...", "en": "..."}, "img": 0,
			"text": {
				"ru": " Город Сант-Марим расположился на берегу спокойного моря. Пожалуй, это то место, которое вы и искали… ",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"save_point": "chapter_1",
			"out_point": "plot_4-1",
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_4-0" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { return "plot_4-0" }
				}
			}
		},
		"plot_4-0": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-1"
			}
		},
		"plot_4-1": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-2"
			}
		},
		"plot_4-2": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-3"
			}
		},
		"plot_4-3": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-4"
			}
		},

		"plot_4-4": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Подайте... Подайте нищему. У меня ничего нет. Подайте монетку и немного еды",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Дать", "en": "..." },
					"next": function(operators) { 
						operators.money_stat -= MONEY_STAT_DELTA_1;
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "plot_4-4-1" }
				},
				"2": {
					"text": {"ru": " Ничего не давать", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_4-4-1" }
				}
			}
		},
		"plot_4-4-1": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-5"
			}
		},
		"plot_4-5": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Внезапно дыхание перехватило, окружающий мир завертелся. Вы оказались во власти смутных видений, не поддающихся описанию.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_4-6" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { return "plot_4-6" }
				}
			}
		},
		"plot_4-6": {
			"title": text.CHARACTER_9, "img": 9,
			"text": {
				"ru": "Значит бессмертие. Есть один способ...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_4-7" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { return "plot_4-7" }
				}
			}
		},
		"plot_4-7": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Ищите что-нибудь удивительное? Мои товары не просто товары. Это новые возможности, которые могут значительно изменить историю. ",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "Звучит заманчиво": "Да", "en": "..." },
					"next": function(operators) { 
						operators.D++;
						return "plot_4-8" }
				},
				"2": {
					"text": {"ru": "Буду иметь в виду", "en": "..."},
					"next": function(operators) { return "plot_4-8" }
				}
			}
		},
		"plot_4-8": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "У меня как раз есть кое-что для вас. Заглянете?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "В магазин", "en": "..." },
					"next": function(operators) { return "open_shop" }
				},
				"2": {
					"text": {"ru": "Не сегодня", "en": "..."},
					"next": function(operators) { return "plot_4-9" }
				}
			}
		},
		"plot_4-9": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-10"
			}
		},
		"plot_4-10": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-11"
			}
		},

		"plot_4-11": {
			"title": text.CHARACTER_11, "img": 11,
			"text": {
				"ru": "Здравствуйте… Вы - Мастер? А я художник. Приятно познакомиться.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Мне тоже", "en": "..." },
					"next": function(operators) { 
						operators.D++;
						return "plot_4-12" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { return "plot_4-12" }
				}
			}
		},
		"plot_4-12": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Этот художник... Крайне подозрительный. Кто-то даже считает, что он одержим! Не помогайте ему!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Я сам решу...", "en": "..." },
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_4-13" }
				},
				"2": {
					"text": {"ru": "Хорошо", "en": "..."},
					"next": function(operators) { return "plot_4-13" }
				}
			}
		},
		"plot_4-13": {
			"desk": "phoenix",
			// если условие выполнено - выдаст карточку из указанной колоды, если не выполнено, сразу выдаст то, что в next()
			"check_condition": function(operators) {
				return operators.Art_phoenix >= 1
			},
			"next": function(operators) {
				return "plot_4-14"
			}
		},
		"plot_4-14": {
			"desk": "flower",
			"check_condition": function(operators) {
				return operators.Art_flower >= 1
			},
			"next": function(operators) {
				return "plot_4-15"
			}
		},
		"plot_4-15": {
			"title": text.CHARACTER_10, "img": 10,
			"text": {
				"ru": "Приветствую! А вот и вы… Хо-хо. Его Величеству служат все, кто владеет Искусством. Распишитесь здесь, и вот здесь.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Выбора нет…", "en": "..." },
					"next": function(operators) { return "plot_4-16" }
				},
				"2": {
					"text": {"ru": "Отлично!", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						operators.D++;
						return "plot_4-16" }
				}
			}
		},
		"plot_4-16": {
			"title": text.CHARACTER_10, "img": 10,
			"text": {
				"ru": " Отлично! Поздравляю, теперь вы на службе у короны",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Прескверно…", "en": "..." },
					"next": function(operators) { 
						operators.Z+=1;

						return "plot_4-17" }
				},
				"2": {
					"text": {"ru": "Ураа!", "en": "..."},
					"next": function(operators) { return "plot_4-17" }
				}
			}
		},
		"plot_4-17": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-18"
			}
		},
		"plot_4-18": {
			"desk": "ball",
			"check_condition": function(operators) {
				return operators.Art_ball >= 1
			},
			"next": function(operators) {
				return "plot_4-19"
			}
		},
		"plot_4-19": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Подайте... Подайте нищему. У меня ничего нет. Подайте монетку и немного еды.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Дать", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						operators.N += 1;
						return "plot_4-20" }
				},
				"2": {
					"text": {"ru": "Не давать", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_4-20" }
				}
			}
		},
		
		"plot_4-20": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-21"
			}
		},
		"plot_4-21": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-22"
			}
		},
		"plot_4-22": {
			"desk": "cosmos",
			"check_condition": function(operators) {
				return operators.Art_cosmos >= 1
			},
			"next": function(operators) {
				return "plot_4-23"
			}
		},
		"plot_4-23": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-24"
			}
		},
		"plot_4-24": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Луна сегодня в благоприятной фазе. Зачаровать несколько лунных монет?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да (за рекламу)", "en": "..." },
					// здесь при нажатии на этот вариант ответа происходит не переход на другую карточку, а показ рекламы (либо другое действие может быть)
					"next": function(operators) { return "show_rewarded_ad;plot_4-25" }
				},
				"2": {
					"text": {"ru": "Нет", "en": "..."},
					"next": function(operators) { return "plot_4-25" }
				}
			}
		},
		"plot_4-25": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-26"
			}
		},
		"plot_4-26": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Сегодня прекрасная погода, правда? Самое время для выгодных приобретений!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "В магазин", "en": "..." },
					"next": function(operators) { return "open_shop" }
				},
				"2": {
					"text": {"ru": "Нет", "en": "..."},
					"next": function(operators) { return "plot_4-27" }
				}
			}
		},
		"plot_4-27": {
			"title": text.CHARACTER_11, "img": 11,
			"text": {
				"ru": "Это будет величайший шедевр. Вот только у меня совсем кончился <i class='ultramarin'>синий ультрамарин.</i> Поможете с этим?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Конечно", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.money_stat += MONEY_STAT_DELTA_1;
						operators.H += 1;
						return "plot_4-28" }
				},
				"2": {
					"text": {"ru": "Это же вредно!", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_4-28" }
				}
			}
		},
		"plot_4-28": {
			"desk": "phoenix",
			"check_condition": function(operators) {
				return operators.Art_phoenix >= 1
			},
			"next": function(operators) {
				return "plot_4-29"
			}
		},
		"plot_4-29": {
			"title": text.CHARACTER_12, "img": 12,
			"text": {
				"ru": "Здравствуйте! Я видал многое. Страну фей и эльфов и страну тех, кто предан Луне… Я рад, что теперь у нас есть толковый человек.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Приятно познакомиться", "en": "..." },
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "plot_4-30" }
				},
				"2": {
					"text": {"ru": "Хм...", "en": "..."},
					"next": function(operators) { return "plot_4-30" }
				}
			}
		},
		"plot_4-30": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "К вам в мастерскую зашла девушка. Она проворно стянула туфельку, шёлковые завязки которой разошлись.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_4-31" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { return "plot_4-31" }
				}
			}
		},
		"plot_4-31": {
			"title": text.CHARACTER_13, "img": 13,
			"text": {
				"ru": "Алхимик, не так ли? Вы мне не поможете?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, конечно…", "en": "..." },
					"next": function(operators) { 
						operators.Sym += 1;
						return "plot_4-31-1" }
				},
				"2": {
					"text": {"ru": "Эм… Эм!...", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_4-32" }
				}
			}
		},
		"plot_4-31-1": {
			"title": text.CHARACTER_13, "img": 13,
			"text": {
				"ru": "Спасибо вам большое, у вас очень доброе сердце… Меня зовут Алия. Будем знакомы, Мастер!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Она странная", "en": "..." },
					"next": function(operators) { return "plot_4-32" }
				},
				"2": {
					"text": {"ru": "Она очаровательная", "en": "..."},
					"next": function(operators) { 
						operators.Sym += 1;
						return "plot_4-32" }
				}
			}
		},
		"plot_4-32": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Подайте... Подайте нищему. У меня ничего нет. Подайте монетку и немного еды.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Дать", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "plot_4-33" }
				},
				"2": {
					"text": {"ru": "Не давать", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_4-33" }
				}
			}
		},
		"plot_4-33": {
			"desk": "flower",
			"check_condition": function(operators) {
				return operators.Art_flower >= 1
			},
			"next": function(operators) {
				return "plot_4-34"
			}
		},
		"plot_4-34": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-35"
			}
		},
		"plot_4-35": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-36"
			}
		},
		"plot_4-36": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-37"
			}
		},
		"plot_4-37": {
			"desk": "cosmos",
			"check_condition": function(operators) {
				return operators.Art_cosmos >= 1
			},
			"next": function(operators) {
				return "plot_4-38"
			}
		},
		"plot_4-38": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Ну как дела? Нравится в городе?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Очень!", "en": "..." },
					"next": function(operators) { 
						operators.O += 1;
						return "plot_4-39" }
				},
				"2": {
					"text": {"ru": "Да скучно пока как-то…", "en": "..."},
					"next": function(operators) { return "plot_4-39" }
				}
			}
		},
		"plot_4-39": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-40"
			}
		},
		"plot_4-40": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "В городе говорят, что я, дескать, жадный. Но это неправда! Знали бы все они скольких трудов стоит все это…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Очень жадный", "en": "..." },
					"next": function(operators) { return "plot_4-41" }
				},
				"2": {
					"text": {"ru": "Да ну нет, конечно", "en": "..."},
					"next": function(operators) { 
						operators.D += 1;
						return "plot_4-41" }
				}
			}
		},
		"plot_4-41": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-42"
			}
		},
		"plot_4-42": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-43"
			}
		},
		"plot_4-43": {
			"desk": "stormglass",
			"check_condition": function(operators) {
				return operators.Art_stormglass >= 1
			},
			"next": function(operators) {
				return "plot_4-44"
			}
		},
		"plot_4-44": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-45"
			}
		},
		"plot_4-45": {
			"desk": "rand4",
			"next": function(operators) {
				if (operators.N == 3) {
					return "plot_4-46-1"
				}
				return "plot_4-47"
			}
		},
		"plot_4-46-1": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Ну, чего тебе?", "en": "..." },
					"next": function(operators) { return "plot_4-46-2" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { return "plot_4-46-2" }
				}
			}
		},
		"plot_4-46-2": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Вы были добры. Очень добры… Вот. Примите это. Это хорошая вещь…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_4-46-3" }
				},
				"2": {
					"text": {"ru": "Спасибо?", "en": "..."},
					"next": function(operators) { return "plot_4-46-3" }
				}
			}
		},
		"plot_4-46-3": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "У вас в руках оказался золотой медальон. Он источал слабое волшебное сияние. Его можно продать. Или усилить.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Продать", "en": "..." },
					"next": function(operators) { 
						operators.money_stat += MONEY_STAT_DELTA_1;
						return "plot_4-46-3-1" }
				},
				"2": {
					"text": {"ru": "Зачаровать", "en": "..."},
					"next": function(operators) { 

						operators.power_stat -= POWER_STAT_DELTA_1;
						return "plot_4-47" }
				}
			}
		},
		"plot_4-46-3-1": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Теперь медальон защитит владельца от любого негативного воздействия. В будущем это может пригодиться…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Продать", "en": "..." },
					"next": function(operators) { 
						operators.money_stat += MONEY_STAT_DELTA_1;
						return "plot_4-47" }
				},
				"2": {
					"text": {"ru": "Зачаровать", "en": "..."},
					"next": function(operators) { 
						operators.M = 1;
						return "plot_4-47" }
				}
			}
		},
		"plot_4-47": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-48"
			}
		},
		"plot_4-48": {
			"desk": "rand4",
			"next": function(operators) {
				return "plot_4-49"
			}
		},
		"plot_4-49": {
			"title": text.CHARACTER_11, "img": 11,
			"text": {
				"ru": "Что-то необыкновенное витает в воздухе… Я это чувствую…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Что за вздор!", "en": "..." },
					"next": function(operators) { return "plot_4-50" }
				},
				"2": {
					"text": {"ru": "Что-то грядет…", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_4-50" }
				}
			}
		},
		"plot_4-50": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "В честь нашей дружбы я хочу сделать подарок. Это <i class='orange'>яйцо</i>. Я, правда, не совсем уверен, кто из него вылупится…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Круто! Спасибо!", "en": "..." },
					"next": function(operators) { 
						operators.D += 1;
						return "plot_4-50-1" }
				},
				"2": {
					"text": {"ru": "Мне это не надо", "en": "..."},
					"next": function(operators) { return "plot_4-50-2" }
				}
			}
		},
		"plot_4-50-1": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Яйцо лежало, загадочно переливаясь в свете огня. (Внимание: от ваших действий будет зависеть какой вид получится)",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"save_point": "dragon_egg",
			"answers": {
				"1": {
					"text": { "ru": "Положить в огонь", "en": "..." },
					"next": function(operators) { 
						operators.Dr += 1;
						return "plot_4-50-1-2" }
				},
				"2": {
					"text": {"ru": "Оставить на столе", "en": "..."},
					"next": function(operators) { return "plot_4-50-1-2" }
				}
			}
		},
		"plot_4-50-1-2": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Яйцо лежало, загадочно переливаясь в свете огня. (Внимание: от ваших действий будет зависеть какой вид получится)",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"save_point": "dragon_egg",
			"answers": {
				"1": {
					"text": { "ru": "Положить в огонь", "en": "..." },
					"next": function(operators) { 
						operators.Dr += 1;
						return "plot_4-50-1-3" }
				},
				"2": {
					"text": {"ru": "Оставить на столе", "en": "..."},
					"next": function(operators) { return "plot_4-50-1-3" }
				}
			}
		},
		
		"plot_4-50-1-3": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Яйцо лежало, загадочно переливаясь в свете огня. (Внимание: от ваших действий будет зависеть какой вид получится)",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"save_point": "dragon_egg",
			"answers": {
				"1": {
					"text": { "ru": "Положить в огонь", "en": "..." },
					"next": function(operators) { 
						operators.Dr += 1;
						return "plot_4-50-3" }
				},
				"2": {
					"text": {"ru": "Оставить на столе", "en": "..."},
					"next": function(operators) { return "plot_4-50-3" }
				}
			}
		},
		"plot_4-50-2": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "А я не спрашиваю! Бери, а то разобью его прямо тебе на прилавок. Куда мне девать его, а?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Слов нет!", "en": "..." },
					"next": function(operators) { return "plot_4-50-1" }
				},
				"2": {
					"text": {"ru": "Ну ладно", "en": "..."},
					"next": function(operators) { return "plot_4-50-1" }
				}
			}
		},
		"plot_4-50-3": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Теперь нужно только ждать. Время до вылупления: <timer>. Пропустить за рекламу?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да", "en": "..." },
					"next": function(operators) { return "skip_timer" }
				},
				"2": {
					"text": {"ru": "Нет", "en": "..."},
					"next": function(operators) { return "plot_4-50-4" }
				}
			}
		},
		"plot_4-50-4": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				// здесь у нас подстановка: вместо <dragon_type> будет подставлено нужное значение. Нужно будет потом мне написать список всех подстановок и на что они заменяются
				"ru": "Вот и настал момент истины. Глянцевая скорлупка треснула, и оттуда показалась крошечная мордочка дракона. (Поздравляем! Вид дракона: <dragon_type>)",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Ну здравствуй, малыш!", "en": "..." },
					"next": function(operators) { return "plot_5-0" }
				},
				"2": {
					"text": {"ru": "Хочу другого дракона!", "en": "..."},
					"next": function(operators) { 
						operators.Dr = 0;
						return "plot_4-50-1" }
				}
			}
		},
		"plot_5-0": {
			"desk": "chapter_2",
			"save_point": "chapter_2",
			"next": function(operators) {
				return "plot_5-1"
			}
		},
		"plot_5-1": {
			"desk": "phoenix",
			"check_condition": function(operators) {
				return operators.Art_phoenix >= 1
			},
			"next": function(operators) {
				return "plot_5-2"
			}
		},
		"plot_5-2": {
			"desk": "flower",
			"check_condition": function(operators) {
				return operators.Art_flower >= 1
			},
			"next": function(operators) {
				return "plot_5-3"
			}
		},
		"plot_5-3": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Дяденька, представляете! Я видел сегодня дракона! Он парил высоко в вышине.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да неправда!", "en": "..." },
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_5-4" }
				},
				"2": {
					"text": {"ru": "Может быть…", "en": "..."},
					"next": function(operators) { return "plot_5-4" }
				}
			}
		},
		"plot_5-4": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Луна сегодня в благоприятной фазе. Зачаровать несколько лунных монет?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да (за рекламу)", "en": "..." },
					// здесь как бы пока рекламы, а потом переход на следующую карточку
					"next": function(operators) { return "show_rewarded_ad;plot_5-5" }
				},
				"2": {
					"text": {"ru": "Нет", "en": "..."},
					"next": function(operators) { return "plot_5-5" }
				}
			}
		},
		"plot_5-5": {
			"title": text.CHARACTER_11, "img": 11,
			"text": {
				"ru": "Это будет величайший шедевр. Вот только у меня совсем кончился <i class='red'>киноварь.</i> Поможете с этим?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Конечно", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.money_stat += MONEY_STAT_DELTA_1;
						return "plot_5-6" }
				},
				"2": {
					"text": {"ru": " Это же вредно!", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_5-6" }
				}
			}
		},
		"plot_5-6": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-7"
			}
		},
		"plot_5-7": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-8"
			}
		},
		"plot_5-8": {
			"desk": "cosmos",
			"check_condition": function(operators) {
				return operators.Art_cosmos >= 1
			},
			"next": function(operators) {
				return "plot_5-9"
			}
		},
		"plot_5-9": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Вы видели странного мальчика?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Что…", "en": "..." },
					"next": function(operators) { return "plot_5-10" }
				},
				"2": {
					"text": {"ru": "Эм… Нет?", "en": "..."},
					"next": function(operators) { return "plot_5-10" }
				}
			}
		},
		"plot_5-10": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-11"
			}
		},
		"plot_5-11": {
			// здесь тоже подстановка, но уже оператора. т.е. если Dr = 0, то выдаст из колоды dragon_0, если Dr=1, то из dragon_1 и т.д.
			"desk": "dragon_<operators.Dr>",
			"next": function(operators) {
				return "plot_5-12"
			}
		},
		"plot_5-12": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Может быть у вас есть какая-то работа для меня?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да", "en": "..." },
					"next": function(operators) { return "plot_5-12-1" }
				},
				"2": {
					"text": {"ru": "Нет, пока нет…", "en": "..."},
					"next": function(operators) { return "plot_5-13" }
				}
			}
		},
		"plot_5-12-1": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Я готов",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да", "en": "..." },
					"next": function(operators) { 
						operators.U += 1;
						return "plot_5-13" }
				},
				"2": {
					"text": {"ru": "Мне нужно время подумать", "en": "..."},
					"next": function(operators) { return "plot_5-13" }
				}
			}
		},
		"plot_5-13": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-14"
			}
		},
		"plot_5-14": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-15"
			}
		},
		"plot_5-15": {
			"title": text.CHARACTER_11, "img": 11,
			"text": {
				"ru": "Это будет величайший шедевр. Вот только у меня совсем кончился <i class='auripigment'>аурипигмент.</i> Поможете с этим?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Конечно", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.money_stat += MONEY_STAT_DELTA_1;
						operators.H += 1;
						return "plot_5-16" }
				},
				"2": {
					"text": {"ru": "Это же вредно!", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_5-16" }
				}
			}
		},
		"plot_5-16": {
			"desk": "phoenix",
			"check_condition": function(operators) {
				return operators.Art_phoenix >= 1
			},
			"next": function(operators) {
				if (operators.U == 1) {
					return "plot_5-17"
				} else {
					return "plot_5-18"
				}
				
			}
		},
		"plot_5-17": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Вы проверили работу парнишки. На некоторых реактивах отчетливо виднелись следы магического пламени... Теперь их придется выбросить",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "К насущным делам", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "plot_5-18" }
				},
				"2": {
					"text": {"ru": "Эм… Нет?", "en": "..."},
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.Z -= 1;
						return "plot_5-18" }
				}
			}
		},
		"plot_5-18": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-19"
			}
		},
		"plot_5-19": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-20"
			}
		},
		"plot_5-20": {
			"desk": "ball",
			"check_condition": function(operators) {
				return operators.Art_ball >= 1
			},
			"next": function(operators) {
				return "plot_5-21"
			}
		},
		"plot_5-21": {
			"desk": "dragon_<operators.Dr>",
			"next": function(operators) {
				return "plot_5-22"
			}
		},
		"plot_5-22": {
			"desk": "chapter_2",
			"next": function(operators) {
				if (operators.U == 1) {
					return "plot_5-22-1"
				}
				return "plot_5-23"
			}
		},
		"plot_5-22-1": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": " Извините за произошедшее... Не прогоняйте меня. Мне больше некуда идти…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Все хорошо, не переживай", "en": "..." },
					"next": function(operators) { 
						operators.U += 1;
						return "plot_5-22-1_good" }
				},
				"2": {
					"text": {"ru": "Пшел вон, вредитель!", "en": "..."},
					"next": function(operators) { return "plot_5-22-1_sad" }
				}
			}
		},
		"plot_5-22-1_good": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Вы вновь проверили работу парнишки. На некоторых реактивах отчетливо виднелись следы магического пламени... Кажется, у него дар. И недюжинный…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуться к делам", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "plot_5-23" }
				},
				"2": {
					"text": {"ru": "Пойти проветриться", "en": "..."},
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "plot_5-23" }
				}
			}
		},
		"plot_5-22-1_sad": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Мальчик ушел. Он знал, что вы прогоните его, и знал, что заслужил это. Возможно, это стало последней каплей в становлении его мнения о людях…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						
						return "plot_5-23" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_5-23" }
				}
			}
		},
		"plot_5-23": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-24"
			}
		},
		"plot_5-24": {
			"desk": "cosmos",
			"check_condition": function(operators) {
				return operators.Art_cosmos >= 1
			},
			"next": function(operators) {
				return "plot_5-25"
			}
		},
		"plot_5-25": {
			"desk": "chapter_2",
			"next": function(operators) {
				if (operators.U == 2) {
					return "plot_5_boy_7"
				}
				return "plot_5-26"
			}
		},
		"plot_5_boy_7": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Простите! Во имя Великого Творца простите! Я... Я буду стараться бороться с этим... Подавлять, если хотите… ",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Не стоит. Развивай свою магию", "en": "..." },
					"next": function(operators) { 
						operators.U += 1;
						return "plot_5-26" }
				},
				"2": {
					"text": {"ru": "Да, так будет лучше для всех.", "en": "..."},
					"next": function(operators) { return "plot_5-26" }
				}
			}
		},
		"plot_5-26": {
			"title": text.CHARACTER_14, "img": 14,
			"text": {
				"ru": " Там это... Животинка погибает. Может, ну... Сможете у себя приютить, а? Необычная животинка, я таких не видывал...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Идём", "en": "..." },
					"next": function(operators) { return "plot_5_pegas-1" }
				},
				"2": {
					"text": {"ru": "Мне некогда", "en": "..."},
					"next": function(operators) { return "plot_5_27" }
				}
			}
		},
		"plot_5_pegas-1": {
			"title": text.CHARACTER_19, "img": 9,
			"text": {
				"ru": "Маленький пегас не может подняться. Он отчаянно хлопает крыльями, но часы его сочтены.(На лечение уйдет много ресурсов, но в этом случае он останется у вас)",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Забрать себе", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						return "plot_5_pegas-3" }
				},
				"2": {
					"text": {"ru": "У вас нет возможности", "en": "..."},
					"next": function(operators) { return "plot_5-27" }
				}
			}
		},
		"plot_5_pegas-3": {
			"title": text.CHARACTER_19, "img": 9,
			"text": {
				"ru": "Спустя пару часов он уже чувствует себя лучше. Теперь он навсегда привяжется к вам и будет рядом в трудную минуту.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						
						return "plot_5-27" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { return "plot_5-27" }
				}
			}
		},
		"plot_5-27": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-28"
			}
		},
		"plot_5-28": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-29"
			}
		},
		"plot_5-29": {
			"title": text.CHARACTER_24, "img": 24,
			"text": {
				"ru": "Здрастье-здрастье! Мы еще не знакомы. Еще бы! Только что вернулся с очередного подвига! А вы, типа, Мастер?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Ну, типа; Эм?", "en": "..." },
					"next": function(operators) { return "plot_5-30" }
				},
				"2": {
					"text": {"ru": " Попрошу!", "en": "..."},
					"next": function(operators) { return "plot_5-30" }
				}
			}
		},
		"plot_5-30": {
			"title": text.CHARACTER_14, "img": 14,
			"text": {
				"ru": "Ладно, мне некогда! Пока",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Пока!", "en": "..." },
					"next": function(operators) { return "plot_5-31" }
				},
				"2": {
					"text": {"ru": "Ну и катись!", "en": "..."},
					"next": function(operators) { return "plot_5_31" }
				}
			}
		},
		"plot_5-31": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5_children-2"
			}
		},
		"plot_5_children-2": {
			"title": text.CHARACTER_16, "img": 16,
			"text": {
				"ru": "Дяденька, помогите! У этого котенка что-то с лапкой... Ему, наверное, очень больно.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Помочь", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "plot_5-vedma-1" }
				},
				"2": {
					"text": {"ru": "Остановить", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_5-vedma-1" }
				}
			}
		},
		"plot_5-vedma-1": {
			"title": text.CHARACTER_15, "img": 15,
			"text": {
				"ru": "Знаете... Они все смеются, но я-то знаю. Морская ведьма бродит по берегу. Берегитесь ее...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Ой, да ладно!", "en": "..." },
					"next": function(operators) { 
						// функция может выполнить только один return. Соотвественно, если вернулось plot_5_padawan-1, то остальные уже не будут возвращены

						// в зависимости от условия будет та или иная карточка. (И да-да, можно было через плавающие окна реализовать тоже самое;)  )
						if (operators.U == 2) {
							return "plot_5_padawan-1"
						}
						if (operators.U == 3) {
							return "plot_5_padawan_m-1"
						}
						return "plot_5-32" }
				},
				"2": {
					"text": {"ru": "Как интересно…", "en": "..."},
					"next": function(operators) { 
						if (operators.U == 2) {
							return "plot_5_padawan-1"
						}
						if (operators.U == 3) {
							return "plot_5_padawan_m-1"
						}
						return "plot_5_32" }
				}
			}
		},
		"plot_5_padawan-1": {
			"desk": "padawan",
			"next": function(operators) {
				return "plot_5_33"
			}
		},
		"plot_5_padawan_m-1": {
			"desk": "padawan_m",
			"next": function(operators) {
				return "plot_5_33"
			}
		},
		"plot_5-33": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Вы наводили порядок на полках и нашли сказочную по красоте крупную жемчужину...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Продать", "en": "..." },
					"next": function(operators) { 
						operators.money_stat += MONEY_STAT_DELTA_1;
						return "plot_5-34" }
				},
				"2": {
					"text": {"ru": "Оставить", "en": "..."},
					"next": function(operators) { 
						operators.G += 1;
						return "plot_5-34" }
				}
			}
		},
		"plot_5-34": {
			"desk": "phoenix",
			"check_condition": function(operators) {
				return operators.Art_phoenix >= 1
			},
			"next": function(operators) {
				return "plot_5-35"
			}
		},
		"plot_5-35": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-36"
			}
		},
		"plot_5-36": {
			"desk": "dragon_<operators.Dr>",
			"next": function(operators) {
				return "plot_5-37"
			}
		},
		"plot_5-37": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-38"
			}
		},

		"plot_5-38": {
			"title": text.CHARACTER_11, "img": 11,
			"text": {
				"ru": "Картина выходит поистине потрясающей!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Покажете потом?", "en": "..." },
					"next": function(operators) { return "plot_5-39" }
				},
				"2": {
					"text": {"ru": "Рад за вас", "en": "..."},
					"next": function(operators) { return "plot_5-39" }
				}
			}
		},
		"plot_5-39": {
			"title": text.CHARACTER_11, "img": 11,
			"text": {
				"ru": "Это будет величайший шедевр. Вот только у меня совсем кончился <i class='green'> вердигрис. </i> Поможете с этим?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Конечно", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.money_stat += MONEY_STAT_DELTA_1;

						return "plot_5-40" }
				},
				"2": {
					"text": {"ru": "Это же вредно!", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_5-40" }
				}
			}
		},
		"plot_5-40": {
			"desk": "pegas",
			"check_condition": function(operators) {
				return operators.P >= 1
			},
			"next": function(operators) {
				return "plot_5_tigers-2"
			}
		},
		"plot_5_tigers-2": {
			"title": text.CHARACTER_12, "img": 12,
			"text": {
				"ru": "Скоро я иду в большое плавание. Опасное путешествие… Пожелайте удачи!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Пожелать", "en": "..." },
					"next": function(operators) { return "plot_5-41" }
				},
				"2": {
					"text": {"ru": "Снабдить чем только можно", "en": "..."},
					"next": function(operators) { 
						operators.money_stat -= MONEY_STAT_DELTA_1;
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.T += 1;
						return "plot_5-41" }
				}
			}
		},
		"plot_5-41": {
			"desk": "flower",
			"check_condition": function(operators) {
				return operators.Art_flower >= 1
			},
			"next": function(operators) {
				return "plot_5-42"
			}
		},
		"plot_5-42": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-43"
			}
		},
		"plot_5-43": {
			"title": text.CHARACTER_11, "img": 11,
			"text": {
				"ru": "Знаете, хотите узнать секрет? Он избрал меня. Время пришло, и заточению настанет конец… Как только картина будет готова.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Какой ужас!", "en": "..." },
					"next": function(operators) { return "plot_5-44" }
				},
				"2": {
					"text": {"ru": "Наконец свершится!", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_5-44" }
				}
			}
		},

		"plot_5-44": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-45"
			}
		},
		"plot_5-45": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-46"
			}
		},
		"plot_5-46": {
			"title": text.CHARACTER_13, "img": 13,
			"text": {
				"ru": "Некоторые вещи происходят, можем мы им противостоять или нет. Согласны?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Согласен", "en": "..." },
					"next": function(operators) { return "plot_5-47" }
				},
				"2": {
					"text": {"ru": "Вздор!", "en": "..."},
					"next": function(operators) { return "plot_5-47" }
				}
			}
		},
		"plot_5-47": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Он придёт. И тогда миру придёт конец!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да вы все ненормальные!", "en": "..." },
					"next": function(operators) { return "plot_5-48" }
				},
				"2": {
					"text": {"ru": "Художник говорил об этом…", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_5-48" }
				}
			}
		},
		"plot_5-48": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-49"
			}
		},
		"plot_5-49": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-50"
			}
		},
		"plot_5-50": {
			"desk": "stormglass",
			"check_condition": function(operators) {
				return operators.Art_stormglass >= 1
			},
			"next": function(operators) {
				return "plot_5-51"
			}
		},
		"plot_5-51": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-52"
			}
		},
		"plot_5-52": {
			"desk": "pegas",
			"check_condition": function(operators) {
				return operators.P >= 1
			},
			"next": function(operators) {
				return "plot_5-53"
			}
		},
		"plot_5-53": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-54"
			}
		},
		"plot_5-54": {
			"desk": "chapter_2",
			"next": function(operators) {
				return "plot_5-55"
			}
		},
		"plot_5-55": {
			"desk": "dragon_<operators.Dr>",
			"next": function(operators) {
				return "plot_5-56"
			}
		},
		"plot_5-56": {
			"title": text.CHARACTER_21, "img": 21,
			"text": {
				"ru": "Мне нужны ингредиенты с неоднозначной репутацией. Понимаете о чем я?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Помочь", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;

						return "plot_5-57" }
				},
				"2": {
					"text": {"ru": "Не помогать", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						return "plot_5-57" }
				}
			}
		},
		"plot_5-57": {
			"desk": "eternity",
			save_point: "chapter_3",
			"next": function(operators) {
				return "plot_5-58"
			}
		},
		"plot_5-58": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Наступал день, который так многие ждали -  долгожданный Фестиваль!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_6-0" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-0" }
				}
			}
		},
		// НАЧАЛО 3 главы 
		"plot_6-0": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Он придёт. И тогда миру придёт конец!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да вы все ненормальные!", "en": "..." },
					"next": function(operators) { return "plot_5-48" }
				},
				"2": {
					"text": {"ru": "Художник говорил об этом…", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_5-48" }
				}
			}
		},
		"plot_5-47": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Он придёт. И тогда миру придёт конец!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да вы все ненормальные!", "en": "..." },
					"next": function(operators) { return "plot_5-48" }
				},
				"2": {
					"text": {"ru": "Художник говорил об этом…", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_5-48" }
				}
			}
		},
		"plot_5-47": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Он придёт. И тогда миру придёт конец!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да вы все ненормальные!", "en": "..." },
					"next": function(operators) { return "plot_5-48" }
				},
				"2": {
					"text": {"ru": "Художник говорил об этом…", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_5-48" }
				}
			}
		},
		"plot_5-47": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Он придёт. И тогда миру придёт конец!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да вы все ненормальные!", "en": "..." },
					"next": function(operators) { return "plot_5-48" }
				},
				"2": {
					"text": {"ru": "Художник говорил об этом…", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_5-48" }
				}
			}
		},
		"plot_5-47": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Он придёт. И тогда миру придёт конец!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да вы все ненормальные!", "en": "..." },
					"next": function(operators) { return "plot_5-48" }
				},
				"2": {
					"text": {"ru": "Художник говорил об этом…", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_5-48" }
				}
			}
		},
		"plot_5-47": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Он придёт. И тогда миру придёт конец!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да вы все ненормальные!", "en": "..." },
					"next": function(operators) { return "plot_5-48" }
				},
				"2": {
					"text": {"ru": "Художник говорил об этом…", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_5-48" }
				}
			}
		},
		"plot_5-47": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Он придёт. И тогда миру придёт конец!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да вы все ненормальные!", "en": "..." },
					"next": function(operators) { return "plot_5-48" }
				},
				"2": {
					"text": {"ru": "Художник говорил об этом…", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_5-48" }
				}
			}
		},
		"plot_5-47": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Он придёт. И тогда миру придёт конец!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да вы все ненормальные!", "en": "..." },
					"next": function(operators) { return "plot_5-48" }
				},
				"2": {
					"text": {"ru": "Художник говорил об этом…", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_5-48" }
				}
			}
		},
		"plot_5-47": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Он придёт. И тогда миру придёт конец!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да вы все ненормальные!", "en": "..." },
					"next": function(operators) { return "plot_5-48" }
				},
				"2": {
					"text": {"ru": "Художник говорил об этом…", "en": "..."},
					"next": function(operators) { 
						operators.S += 1;
						return "plot_5-48" }
				}
			}
		},
		"for_rand1-1": {
			"desk": "rand_3",
			"next": function(operators) {
				return "plot_1-2"
			}
		}
	},
	},
	"rand4": { 
		"type": "rand_norepeat",
		"cards": {
		"rand4-1_start": {
			"title": text.CHARACTER_14, "img": 14,
			"text": {
				"ru": "О! Наконец-то в нашем городе Мастер появился! Это хорошо... да, хорошо... У меня дикая головная боль! А аптекарь лишь фигню говорит. Но вы-то поможете?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.money_stat += MONEY_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-2_start": {
			"title": text.CHARACTER_15, "img": 15,
			"text": {
				"ru": "Глядите-ка! Видано ли такую рыбину поймать? Возьмете?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand4-3_start": {
			"title": text.CHARACTER_15, "img": 15,
			"text": {
				"ru": "Эх, совсем не ловит последнее время. Может духи моря гневаются?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет, это бред", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-4_start": {
			"title": text.CHARACTER_16, "img": 16,
			"text": {
				"ru": "Я принесла травы. Может быть, какие-то из них волшебные?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, посмотрим","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.power_stat += POWER_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Увы...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4-5_start": {
			"title": text.CHARACTER_16, "img": 16,
			"text": {
				"ru": "Говорят, за Зачарованным лесом водятся златогривые солнечные лошади.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Это чистая правда","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Эй, я занят вообще-то!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4-6_start": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Дяденька, я принес <что-то>. Давайте меняться? ",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Давай!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.power_stat += POWER_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Не хочу", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4-7_start": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Смотрите, какой краб!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "О, я тоже хочу подержать!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Уноси его отсюда немедленно!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-8_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Посмотрите только на мои руки! Ни одна заживляющая мазь не помогает. На вас, Мастер, вся надежда…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.money_stat += MONEY_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-9_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Знаете, мне нужен амулет.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, пожалуйста!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.money_stat += MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-10_start": {
			"title": text.CHARACTER_4, "img": 4,
			"text": {
				"ru": "Амброзия снова распустилась! Это адово растение! Нужно немедленно его уничтожить!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-11_start": {
			"title": text.CHARACTER_4, "img": 4,
			"text": {
				"ru": "Ох. Выпадают волосы! Мне бы чего-нибудь, и чтобы побыстрее и поэффективнее.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.money_stat += MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-12_start": {
			"title": text.CHARACTER_17, "img": 17,
			"text": {
				"ru": "Этот странный художник кормит бродячих псов! У него уже целая свора! Ходить мимо страшно! Это недопустимо!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Пусть!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Осуждаю!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-13_start": {
			"title": text.CHARACTER_17, "img": 17,
			"text": {
				"ru": "Собираем на строительство нового храма. Пожертвуйте хоть самую малость?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-14_start": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Вечером будет проходить собрание. Все уважаемые люди должны прийти. Не забудьте про взнос.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Я приду","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.money_stat -= MONEY_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Я не приду", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-15_start": {
			"title": text.CHARACTER_12, "img": 12,
			"text": {
				"ru": "Городничий просто хам и нахал. Пускает гнусные слухи обо всех на свете. Вы согласны?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-16_start": {
			"title": text.CHARACTER_12, "img": 12,
			"text": {
				"ru": "Чай здесь совсем не тот, что на Востоке… Моё будущее путешествие будет вновь туда.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Восток зовёт!","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "Лучше дома сидеть!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
	},
	},
	"phoenix": { 
		"cards":{
		"1": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Феникс",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		}
	},
	},
	"flower": { 
		"cards":{
		"1": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Цветок",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		}
	},
	},
	"ball": { 
		"cards":{
		"1": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Шар",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		}
	},
	},
	"cosmos": { 
		"cards":{
		"1": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Шар",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		}
	},
	},
	"stormglass": { 
		"cards":{
		"1": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Штормгласс",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		}
	},
	},
	chapter_2: { 
		"cards":{
		"rand_ch_2-1": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Кстати, я умею фехтовать. И очень неплохо. Могу показать пару приёмов",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Вот здорово!","en": "Do it!"},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "У меня дел много!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"ch_2-2": {
			"title": text.CHARACTER_13, "img": 13,
			"text": {
				"ru": "Мудрецы говорят, что если долго носить маску, она в конечном итоге прирастёт.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Что за бред?!","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "Истину говорят…", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		
		"rand_ch_2-3": {
			"title": text.CHARACTER_13, "img": 13,
			"text": {
				"ru": "Это цветы ландыша. Они очень красиво смотрелись бы в мастерской.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Так и сделать","en": "Do it!"},
					"next": function(operators) { 
						operators.money_stat -= MONEY_STAT_DELTA_1;
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Ничего не делать", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		
		"rand_Pandor_box-1": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.money_stat += MONEY_STAT_DELTA_1;
						return "Pandor_box-1"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"Pandor_box-1": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "В нем оказалась стопка монет!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},

		"rand_Pandor_box-2": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						return "Pandor_box-2"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"Pandor_box-2": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "В нем оказалась бешенная крыса!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},

		"rand_Pandor_box-3": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						return "Pandor_box-3"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"Pandor_box-3": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "В нем оказались свежие яблоки!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},

		"rand_Pandor_box-4": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.power_stat += POWER_STAT_DELTA_1;
						return "Pandor_box-4"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"Pandor_box-4": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "В нем оказались кристаллы аметиста!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},

		"rand_Pandor_box-5": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "Pandor_box-5"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"Pandor_box-5": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "В нем оказалось проклятое ожерелье!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},

		"rand_Pandor_box-6": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "Pandor_box-1"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"Pandor_box-6": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "В нем оказался мрак и холод космоса!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},

		"rand_Pandor_box-7": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						return "Pandor_box-7;add_lunar_money"}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"Pandor_box-7": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "В нем оказалась горстка лунных монет!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},


		"rand_ch_2-4": {
			"title": text.CHARACTER_23, "img": 23,
			"text": {
				"ru": "Слышь! Гони золото! А то порешу!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Слышь, пшел вон!","en": "Do it!"},
					"next": function(operators) { 
						operators.money_stat -= MONEY_STAT_DELTA_1;
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Ладно-ладно…", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-5": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Скоро будет необыкновенное событие - долгожданный праздник. Фестиваль! Рекомендую-рекомендую…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Жду с нетерпением!","en": "Do it!"},
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "У меня много дел!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-6": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Мой мальчик болен… И это не терпит отлагательств. Я бы предпочла показать его вам, а не аптекарю… Можно?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, конечно","en": "Do it!"},
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Нет, несите ему", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-7": {
			"title": text.CHARACTER_15, "img": 15,
			"text": {
				"ru": "Глядите-ка! Видано ли такую рыбину поймать? Возьмете?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-8": {
			"title": text.CHARACTER_12, "img": 12,
			"text": {
				"ru": "Наш король - просто напыщенный индюк! И вокруг себя собрал таких же. Где же рыцарство, где благородство?! ",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Согласен!","en": "Do it!"},
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Да здравствует король!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-9": {
			"title": text.CHARACTER_12, "img": 12,
			"text": {
				"ru": "Давно уже легенды ходят о новом особенном сплаве… Знающие люди говорят, оно того стоит. Может возьметесь?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		}
		
	},
	},
	dragon_0: { 
		"cards":{
		"rand_1": {
			"title": text.dragon_type_0, "img": 0,
				"text": {
					"ru": "Маленький дракон свернулся клубочком у вас на коленях. От этого стало тепло на душе.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Погладить","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Продолжать работать", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_2": {
			"title": text.dragon_type_0, "img": 0,
				"text": {
					"ru": "Дракон проголодался. Он с радостью пойдет лакомиться на клумбы.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Запретить","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
				},
				"2": {
					"text": { "ru": "Разрешить", "en": "dont"},
					"next": function(operators) {
						operators.Dr_sym++;
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_3": {
			"title": text.dragon_type_0, "img": 0,
				"text": {
					"ru": "Дракон нежится на солнце. Хотелось бы и вам такую беззаботную жизнь.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Отдохнуть","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Работать", "en": "dont"},
					"next": function(operators) {
						
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4": {
			"title": text.dragon_type_0, "img": 0,
				"text": {
					"ru": "Дракон с довольным видом несёт в зубах букет из трав, которые он нашёл на клумбах.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Начать ругаться","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
				},
				"2": {
					"text": { "ru": "Похвалить", "en": "dont"},
					"next": function(operators) {
						operators.Dr_sym++;
						// изменяем операторы
						return "-"
					}
				}
			}
		},
	},
	},
	dragon_1: { 
		"cards":{
		"rand_1": {
			"title": text.dragon_type_1, "img": '20_1',
				"text": {
					"ru": "Маленький дракон свернулся клубочком у вас на коленях. От этого стало тепло на душе.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Погладить","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Продолжать работать", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_2": {
			"title": text.dragon_type_1, "img": '20_1',
				"text": {
					"ru": "Наблюдая за причудливыми переливами дракона, вы чувствуете, что силы возвращаются…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Отдохнуть","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к работе", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_3": {
			"title": text.dragon_type_1, "img": '20_1',
				"text": {
					"ru": "Красные, синие, фиолетовые… Всполохи на чешуе дракона зачаровывают взгляд.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Отдохнуть","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к работе", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
	},
	},
	dragon_2: { 
		"cards":{
		"rand_1": {
			"title": text.dragon_type_2, "img": '0',
				"text": {
					"ru": "Маленький дракон свернулся клубочком у вас на коленях. От этого стало тепло на душе.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Погладить","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Продолжать работать", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_2": {
			"title": text.dragon_type_2, "img": '0',
				"text": {
					"ru": "Дракон несколько раз хлопнул крыльями, и золотая пыльца покрыла ровным слоем все вокруг. Она и впрямь из чистого золота…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Собрать","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Продать", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_3": {
			"title": text.dragon_type_2, "img": '0',
				"text": {
					"ru": "Златокрыл нежится в лучах солнца. Его крылья горят и искрятся.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Погладить","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Продолжать работать", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
	},
	},
	dragon_3: { 
		"cards":{
		"rand_1": {
			"title": text.dragon_type_3, "img": '20_3',
				"text": {
					"ru": "Маленький дракон свернулся клубочком у вас на коленях. От этого стало тепло на душе.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Погладить","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Продолжать работать", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_2": {
			"title": text.dragon_type_6, "img": '6',
				"text": {
					"ru": "Ого! Это что, дракон? Вот это да! В нашем городе это новая достопримечательность! Мы сделаем новый герб!",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "А давайте","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Эм… Ну уж нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_3": {
			"title": text.dragon_type_0, "img": '0',
				"text": {
					"ru": "Караул! Огнедышащий дракон только что поджег мою лавку! Это всё вы со своими фокусами виноваты! Убирайтесь из нашего города!",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Заплатить","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Пригрозить", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4": {
			"title": text.dragon_type_0, "img": '0',
				"text": {
					"ru": "Дракон смотрит вам прямо в душу. Пора бы, может, его снова покормить? ",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Покормить","en": "Do it!"},
					"next": function(operators) { 
						operators.Dr_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Ну уж нет!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
	},
	},
	padawan: { 
		"cards":{
		"rand_1": {
			"title": text.dragon_type_18, "img": 18,
				"text": {
					"ru": "Многие вещи, которые вы откладывали на потом, паренёк взял на себя, облегчив работу",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Поблагодарить","en": "Do it!"},
					"next": function(operators) { 
						operators.U_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Пусть работает!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
	},
	},
	padawan_m: { 
		"cards":{
		"rand_1": {
			"title": text.dragon_type_18, "img": 18,
				"text": {
					"ru": "Паренёк потратил много часов, прежде чем на руке не заплясал крошечный огонёк.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Похвалить","en": "Do it!"},
					"next": function(operators) { 
						operators.U_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Насмехаться", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
	},
	},
	pegas: { 
		"cards":{
		"rand_1": {
			"title": text.dragon_type_19, "img": 19,
				"text": {
					"ru": "Пегас скучает по вам. Вы много работаете!",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "(Сходить с ним на лужайку","en": "Do it!"},
					"next": function(operators) { 
						operators.P++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Но ведь деньги!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_2": {
			"title": text.dragon_type_19, "img": 19,
				"text": {
					"ru": "Грива у Пегаса пошла колтунами. Ее нужно чесать, или подстричь.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Чесать","en": "Do it!"},
					"next": function(operators) { 
						operators.P++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Обстричь!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_3": {
			"title": text.dragon_type_19, "img": 19,
				"text": {
					"ru": "Пегаса очень полюбили дети. И похоже, это взаимно.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Наблюдать за весельем","en": "Do it!"},
					"next": function(operators) { 
						operators.P++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Прогнать детей", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4": {
			"title": text.dragon_type_19, "img": 19,
				"text": {
					"ru": "Странный человек, не называющий имени, просит отдать лошадь за приличную сумму.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Отказаться","en": "Do it!"},
					"next": function(operators) { 
						operators.P++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Согласиться", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
	},
	},
	eternity: { 
		"cards":{
		"eternity_start": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Мрак и тьма. Холод небытия. И кто-то сзади будто не сводит глаз…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Идти вперёд","en": "Do it!"},
					"next": function(operators) { 
						
						return "eternity_2"	}
				},
				"2": {
					"text": { "ru": "Идти назад", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "eternity_2"
					}
				}
			}
		},
		"eternity_2": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Эм, вы кто?","en": "Do it!"},
					"next": function(operators) { 
						
						return "eternity_3"	}
				},
				"2": {
					"text": { "ru": "Так-так, ближе не надо!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "eternity_3"
					}
				}
			}
		},
		"eternity_3": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Существо не ответило. Его уродливые костлявые руки потянулись вам навстречу.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Бежать быстро","en": "Do it!"},
					"next": function(operators) { 
						
						return "eternity_4"	}
				},
				"2": {
					"text": { "ru": "Бежать ещё быстрее", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "eternity_4"
					}
				}
			}
		},
		"eternity_4": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Погоня привлекла внимание местной фауны. И она согласна помочь вам. За умеренную плату, конечно.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Согласиться за рекламу","en": "Do it!"},
					"next": function(operators) { 
						/*
						operators.power_stat = 0.55 * MAX_STAT_VALUE;
						operators.hp_stat = 0.55 * MAX_STAT_VALUE;
						operators.money_stat = 0.55 * MAX_STAT_VALUE;
						operators.reputation_stat = 0.55 * MAX_STAT_VALUE;

						*/

						operators.power_stat = 0.35 * MAX_STAT_VALUE;
						operators.hp_stat = 0.35 * MAX_STAT_VALUE;
						operators.money_stat = 0.35 * MAX_STAT_VALUE;
						operators.reputation_stat = 0.35 * MAX_STAT_VALUE;

						return "eternity_5"	}
				},
				"2": {
					"text": { "ru": "Пытаться своими силами", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						/*
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						*/
						
						operators.power_stat = 0.35 * MAX_STAT_VALUE;
						operators.hp_stat = 0.35 * MAX_STAT_VALUE;
						operators.money_stat = 0.35 * MAX_STAT_VALUE;
						operators.reputation_stat = 0.35 * MAX_STAT_VALUE;
						
						return "eternity_5"
					}
				}
			}
		},
		"eternity_5": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Возвращение в подлунный мир было внезапным и крайне болезненным. Было страшно и непонятно. Под утро получилось немного отвлечься и поспать.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Забыть как сон","en": "Do it!"},
					"next": function(operators) { 
						//operators.money_stat += MONEY_STAT_DELTA_1;
						//operators.power_stat += POWER_STAT_DELTA_1;
						return "eternity_end"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						//operators.money_stat += MONEY_STAT_DELTA_1;
						//operators.power_stat += POWER_STAT_DELTA_1;
						// изменяем операторы
						return "eternity_end"
					}
				}
			}
		},
	},
	},
	ad: { 
		"cards": {
		"r_1": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Здравствуйте, алхимик. Хочешь воспользоваться рекламной магией? Смотри не закрывая 3 секунды и твой кошелёк станет толще",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						
						return "show_interstitial_ad"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"2": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Заклинание в действии. Не торопись",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Угу","en": "Do it!"},
					"next": function(operators) { 
						
						return "3"	}
				},
				"2": {
					"text": { "ru": "Хорошее место для промокода", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "4"
					}
				}
			}
		},
		"3": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Молодец! Заклинание сработало! Держи + 2 {coin}!",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Спасибо","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вау", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"4": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Ты слишком быстро отвёл взор. Но за упорство я дам тебе 1 {coin}. В следущий раз у тебя обязательно получится",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Ага...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
				},
				"2": {
					"text": { "ru": "Надеюсь-надеюсь", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
	}
	},
	power_low: {
		type: "script",
		cards: {
			"pl_1": {
				title: {ru: "мощь в упадке", en: ""},
				text: {ru: "мощь в упадке", en: ""},
				img: 1,
				answers: {
					"1": {
						text: {ru: "", en: ""},
						next: function(operators) {
							if (operators.Art_extra_power) {
								operators.Art_extra_power = 0;
								return "pl_2"
							} else {
								return "eternity_start"
							}
						}
					},
					"2": {
						text: {ru: "", en: ""},
						next: function(operators) {
							if (operators.Art_extra_power) {
								operators.Art_extra_power = 0;
								operators.power_stat = 60;
								graph_core.update_stats();
								return "pl_2"
							} else {
								return "eternity_start"
							}
						}
					}
				}
			},
			"pl_2": {
				title: {ru: "случилось чудо", en: ""},
				text: {ru: "артефакт вам помог", en: ""},
				img: 1,
				answers: {
					"1": {
						text: {ru: "", en: ""},
						next: function(operators) {
							return "-"
						}
					},
					"2": {
						text: {ru: "", en: ""},
						next: function(operators) {
							return "-"
						}
					}
				}
			}
		}
	}
}


var shop_items = {
	"1": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		icon_src: "images/for_shop/item_1.png",
		cost: 100,
		shards: 1,
		available:true,
		bought: false,
		effect: function() {
			game_core.data.operators[shop_codes[0]] = 1;
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"2": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_2.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			game_core.data.operators[shop_codes[1]] = 1;
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"3": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_3.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			game_core.data.operators[shop_codes[2]] = 1;
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"4": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_4.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			game_core.data.operators[shop_codes[3]] = 1;
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"5": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_5.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			game_core.data.operators[shop_codes[4]] += 1;
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"6": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		shards: 10,
		icon_src: "images/for_shop/item_6.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			game_core.data.operators[shop_codes[5]] += 1;
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"7": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_7.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			
		}
	},
	"8": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_8.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			
		}
	},
	"9": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_9.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			
		}
	},
	"10": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_10.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			
		}
	},
	"11": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_1.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			
		}
	},
	"12": {
		title: {
			ru: "предмет",
			en: "item"
		},
		description: {
			ru: "описание",
			en: "description"
		},
		long_description: {
			ru: "длинное описание",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_1.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			
		}
	},
}

var characters = {
	"0": {
		title: text.CHARACTER_0,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"1": {
		title: text.CHARACTER_1,
		description: {ru: "проводница", en: ""},
		img_src: "./images/cards/01.jpg"
	},
	"2": {
		title: text.CHARACTER_2,
		description: {ru: "", en: ""},
		img_src: "./images/cards/02.jpg"
	},
	"3": {
		title: text.CHARACTER_3,
		description: {ru: "", en: ""},
		img_src: "./images/cards/03.jpg"
	},
	"4": {
		title: text.CHARACTER_4,
		description: {ru: "", en: ""},
		img_src: "./images/cards/04.jpg"
	},
	"5": {
		title: text.CHARACTER_5,
		description: {ru: "", en: ""},
		img_src: "./images/cards/05.jpg"
	},
	"6": {
		title: text.CHARACTER_6,
		description: {ru: "", en: ""},
		img_src: "./images/cards/06.jpg"
	},
	"7": {
		title: text.CHARACTER_7,
		description: {ru: "", en: ""},
		img_src: "./images/cards/07.jpg"
	},
	"8": {
		title: text.CHARACTER_8,
		description: {ru: "", en: ""},
		img_src: "./images/cards/08.jpg"
	},
	"9": {
		title: text.CHARACTER_9,
		description: {ru: "", en: ""},
		img_src: "./images/cards/09.jpg"
	},
	"10": {
		title: text.CHARACTER_10,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"11": {
		title: text.CHARACTER_11,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"12": {
		title: text.CHARACTER_12,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"13": {
		title: text.CHARACTER_13,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"14": {
		title: text.CHARACTER_14,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"15": {
		title: text.CHARACTER_15,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"16": {
		title: text.CHARACTER_16,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"17": {
		title: text.CHARACTER_17,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"18": {
		title: text.CHARACTER_18,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"19": {
		title: text.CHARACTER_19,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"20": {
		title: text.CHARACTER_20,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"21": {
		title: text.CHARACTER_21,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"22": {
		title: text.CHARACTER_22,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"23": {
		title: text.CHARACTER_23,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"24": {
		title: text.CHARACTER_24,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"25": {
		title: text.CHARACTER_25,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"26": {
		title: text.CHARACTER_26,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"27": {
		title: text.CHARACTER_27,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"28": {
		title: text.CHARACTER_28,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	
	"29": {
		title: text.CHARACTER_29,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"30": {
		title: text.CHARACTER_30,
		description: {ru: "", en: ""},
		img_src: "./images/cards/00.jpg"
	},
	"not_opened": {
		title: {ru: "?", en: "?"},
		description: {ru: "персонаж не открыт", en: "character is not unlocked"},
		img_src: "./images/cards/00.jpg"
	}
}

var achievements = {
	"1": {
		title: {ru: "ачивка 1", en: "achievement 1"},
		img_src: "./images/for_achievements/icons/0.jpg",
		description: {ru: "описание ачивки 1", en: ""},
		hint_description: {ru: "подсказка к первой ачивке", en: ""}
	},
	"2": {
		title: {ru: "ачивка 2", en: "achievement 2"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"3": {
		title: {ru: "ачивка 3", en: "achievement 3"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"4": {
		title: {ru: "ачивка 4", en: "achievement 4"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"5": {
		title: {ru: "ачивка 5", en: "achievement 5"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"6": {
		title: {ru: "ачивка 6", en: "achievement 6"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"7": {
		title: {ru: "ачивка 7", en: "achievement 7"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"8": {
		title: {ru: "ачивка 8", en: "achievement 8"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"9": {
		title: {ru: "ачивка 9", en: "achievement 9"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"10": {
		title: {ru: "ачивка 10", en: "achievement 10"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	
}

var endings = {
	"1": {
		title: {ru: "концовка 1", en: ""},
		description: {ru: "короткое описание концовки 1", en: ""},
		img_src: "./images/for_endings/00.jpg"
	},
	"2": {
		title: {ru: "концовка 2", en: ""},
		description: {ru: "короткое описание концовки 2", en: ""},
		img_src: "./images/for_endings/00.jpg"
	},
	"3": {
		title: {ru: "концовка 3", en: ""},
		description: {ru: "короткое описание концовки 3", en: ""},
		img_src: "./images/for_endings/00.jpg"
	},
	"4": {
		title: {ru: "концовка 4", en: ""},
		description: {ru: "короткое описание концовки 4", en: ""},
		img_src: "./images/for_endings/00.jpg"
	},
	"5": {
		title: {ru: "концовка 5", en: ""},
		description: {ru: "короткое описание концовки 5", en: ""},
		img_src: "./images/for_endings/00.jpg"
	},
	"6": {
		title: {ru: "концовка 6", en: ""},
		description: {ru: "короткое описание концовки 6", en: ""},
		img_src: "./images/for_endings/00.jpg"
	},
	"0": {
		title: {ru: "концовка 0", en: ""},
		description: {ru: "короткое описание концовки 0", en: ""},
		img_src: "./images/for_endings/00.jpg"
	},
	"not_opened": {
		title: {ru: "???", en: ""},
		description: {ru: "концовка не открыта", en: ""},
		img_src: "./images/for_endings/00.jpg"
	
	}
}

var special_offers = [
{
	title: {ru: "", en: ""},
	description: {ru: "", en: ""},
	img_src: ""
	ico_src:

}
]