// В этом разделе основные переменные
const PLATFORM_TYPE = 'yandex'
// test

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
var REPUTATION_STAT_DELTA_0 = 0;
var POWER_STAT_DELTA_0 = 0;
var MONEY_STAT_DELTA_0 = 0;
var HEALTH_STAT_DELTA_0 = 0;

var REPUTATION_STAT_DELTA_1 = 5;
var POWER_STAT_DELTA_1 = 5;
var MONEY_STAT_DELTA_1 = 5;
var HEALTH_STAT_DELTA_1 = 5;
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
	"CHARACTER_31": {
		"ru": "Незнакомка",
		"en": ""
	},
	"CHARACTER_32": {
		"ru": "Алия",
		"en": ""
	},
	"CHARACTER_33": {
		"ru": "Аралез",
		"en": ""
	},
	"CHARACTER_34": {
		"ru": "Странствующий музыкант",
		"en": ""
	},
	"CHARACTER_35": {
		"ru": "Бродячая артистка",
		"en": ""
	},
	"CHARACTER_36": {
		"ru": "Странный мальчик",
		"en": ""
	},
	"CHARACTER_37": {
		"ru": "Пиратский командор",
		"en": ""
	},
	"CHARACTER_38": {
		"ru": "Продавец редкостей",
		"en": ""
	},
	"CHARACTER_39": {
		"ru": "Королева Эмилия",
		"en": ""
	},
	"CHARACTER_40": {
		"ru": "Человек в лохмотьях",
		"en": ""
	},
	"CHARACTER_41": {
		"ru": "Невеста",
		"en": ""
	},
	"CHARACTER_42": {
		"ru": "Жена алхимика",
		"en": ""
	},
	"CHARACTER_43": {
		"ru": "Созвездие Единорога",
		"en": ""
	},
	"CHARACTER_44": {
		"ru": "Филипп",
		"en": ""
	},
	"dragon_type_0": {
		"ru": "ледяной",
		"en": ""
	},
	"dragon_type_1": {
		"ru": "цветочный",
		"en": ""
	},
	"dragon_type_2": {
		"ru": "золотой",
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
	Flo: 0,

	// В ритме города
	V: 0,
	T: 0,
	P: 0,
	G: 0,
	Dr_sym: 0,
	U_sum: 0,
	U: 0,

	// Фестиваль
	Fonarik: 0,
	Alia_home: 0,

	// Сложные
	Vedma: 0,
	Uzdechka: 0,
	Sad: 0,
	S_in: 0,
	Banka: 0,
	Dress: 0,

	// Метка
	Vor: 0,

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
	character_44_opened: 0,

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
					"text": {"ru": "...","en": "..."},
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
						operators.character_0_opened = 1
						//console.log(operators)
						// изменяем операторы
						return "plot_2-1"
					}
				},
				"2": {
					"text": {
						"ru": "Нет", "en": "..."},
					"next": function(operators) {
						operators.character_0_opened =1
						//console.log(operators)
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
						operators.character_3_opened =1
						// изменяем операторы
						return "plot_3-2"
					}
				},
				"2": {
					"text": {
						"ru": "Добрый день!", "en": "..."},
					"next": function(operators) {
						operators.character_3_opened =1
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
						operators.character_2_opened =1
						return "plot_3-3" }
				},
				"2": {
					"text": {"ru": "Нет", "en": "..."},
					"next": function(operators) {
						operators.character_2_opened =1 
						return "plot_3-3" }
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
						operators.D+=1;
						operators.character_4_opened =1
						return "plot_3-4" }
				},
				"2": {
					"text": {"ru": "Хлам какой-то... Но ладно", "en": "..."},
					"next": function(operators) {
						operators.character_4_opened =1
						return "plot_3-4" }
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
					"next": function(operators) { 
						operators.character_5_opened =1
						return "plot_3-5" }
				},
				"2": {
					"text": {"ru": "“Деньги не пахнут”", "en": "..."},
					"next": function(operators) { 
						operators.Z++;
						operators.character_5_opened =1
						return "plot_3-5" }
				}
			}
		},
		"plot_3-5": {
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
						operators.character_13_opened =1
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.money_stat += MONEY_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "plot_3-6"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_13_opened =1
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_3-6"
					}
				}
			}
		},
			"plot_3-6": {
			"title": text.CHARACTER_12, "img": 12,
			"text": {
				"ru": "Здравствуйте! Я видал многое. Страну фей и эльфов и страну тех, кто предан Луне… Я рад, что теперь у нас есть толковый человек.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Приятно познакомиться", "en": "..." },
					"next": function(operators) {
						operators.character_11_opened =1
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "plot_3-7" }
				},
				"2": {
					"text": {"ru": "Хм...", "en": "..."},
					"next": function(operators) {
						operators.character_11_opened =1
					return "plot_3-7" }
				}
			}
		},
		"plot_3-7": {
			"title": {"ru": "...", "en": "..."}, "img": 37,
			"text": {
				"ru": " Город Сант-Марим расположился на берегу спокойного моря. Пожалуй, это то место, которое вы и искали… ",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"save_point": "chapter_1",
			
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
						operators.character_6_opened =1
						operators.money_stat -= MONEY_STAT_DELTA_1;
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.N += 1;
						return "plot_4-4-1" }
				},
				"2": {
					"text": {"ru": " Ничего не давать", "en": "..."},
					"next": function(operators) {
						operators.character_6_opened =1
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
			"title": text.CHARACTER_0, "img": 31,
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
			"title": text.CHARACTER_9, "img": 32,
			"text": {
				"ru": "Значит бессмертие. Есть один способ...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_4-65" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { return "plot_4-65" }
				}
			}
		},
		"plot_4-65": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Видение исчезло так же внезапно, как и появилось...",
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
						operators.character_7_opened =1 
						operators.D++;
						return "plot_4-8" }
				},
				"2": {
					"text": {"ru": "Буду иметь в виду", "en": "..."},
					"next": function(operators) { 
						operators.character_7_opened =1
						return "plot_4-8" }
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
					"next": function(operators) { 

						graph_core.open_shop();
						return "plot_4-9" }
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
						operators.character_10_opened =1
						operators.D++;
						return "plot_4-12" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						operators.character_10_opened =1
						return "plot_4-12" }
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
					"next": function(operators) { 
						operators.character_9_opened =1
						return "plot_4-16" }
				},
				"2": {
					"text": {"ru": "Отлично!", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						operators.D++;
						operators.character_9_opened =1
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
			"title": text.CHARACTER_0, "img": 38,
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
				return "plot_4-25-1"
			}
		},
		"plot_4-25-1": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Нынче в моде розовые флоксы и голубые фиалки.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Приобрести","en": "Do it!"},
					"next": function(operators) {
						operators.money_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						// изменяем операторы
						return "plot_4-25-2"	
					}
				},
				"2": {
					"text": { "ru": "Мне это, пожалуй, не нужно...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "plot_4-26"
					}
				}
			}
		},
		"plot_4-25-2": {
			"title": text.CHARACTER_0, "img": 59,
			"text": {
				"ru": "Не флоксы и не фиалки, а какие-то совершенно фантастические цветы оказались у вас в руках...",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Подарить кому-нибудь...","en": "Do it!"},
					"next": function(operators) {
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						operators.Flo = 1;
						// изменяем операторы
						return "plot_4-26"	
					}
				},
				"2": {
					"text": { "ru": "Сделать вытяжки", "en": "dont"},
					"next": function(operators) {
						operators.power_stat += POWER_STAT_DELTA_1;
						// изменяем операторы
						return "plot_4-26"
					}
				}
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
					"next": function(operators) {
						graph_core.open_shop();
						return "plot_4-27" }
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
				"ru": "Вы не видели Алию - мою дочь? Девушку-солнце? Мы разминулись…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Кажется, нет…", "en": "..." },
					"next": function(operators) { 
						return "plot_4-30" }
				},
				"2": {
					"text": {"ru": "Солнце?", "en": "..."},
					"next": function(operators) { return "plot_4-29-1" }
				}
			}
		},
		"plot_4-29-1": {
			"title": text.CHARACTER_12, "img": 12,
			"text": {
				"ru": "Да. О, вы все поймете, когда увидите ее.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Надеюсь, вы найдете ее", "en": "..." },
					"next": function(operators) { 
						return "plot_4-30" }
				},
				"2": {
					"text": {"ru": "Интересно…", "en": "..."},
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
					"text": {"ru": "Эм… Эм!…", "en": "..."},
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_4-32" }
				}
			}
		},
		"plot_4-31-1": {
			"title": text.CHARACTER_13, "img": 13,
			"text": {
				"ru": "Спасибо вам большое! У вас добрые глаза… и сердце. Меня зовут Алия. Будем знакомы, Мастер!",
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
						operators.N += 1;
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
						return "plot_4-38-1" }
				},
				"2": {
					"text": {"ru": "Довольно скучно…", "en": "..."},
					"next": function(operators) { return "plot_4-38-2" }
				}
			}
		},
		"plot_4-38-1": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Это же превосходно! А я вот что пришёл. Не сходить ли нам отобедать куда-нибудь, а? Заодно расскажу, что тут и как.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "А, давай!", "en": "..." },
					"next": function(operators) { 
						operators.O += 1;
						return "plot_4-38-3" }
				},
				"2": {
					"text": {"ru": "Дел много, не могу…", "en": "..."},
					"next": function(operators) { return "plot_4-39" }
				}
			}
		},
		"plot_4-38-2": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Скучно? Ну значит я тем более пришёл не зря! Идем, покажу тебе город и славную забегаловку.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Отлично!", "en": "..." },
					"next": function(operators) { 
						operators.O += 1;
						return "plot_4-38-3" }
				},
				"2": {
					"text": {"ru": "Дел много, не могу…", "en": "..."},
					"next": function(operators) { return "plot_4-39" }
				}
			}
		},
		"plot_4-38-3": {
			"title": text.CHARACTER_0, "img": 58,
			"text": {
				"ru": "День стоял солнечный. И вы до самого вечера смотрели достопримечательности города. Кажется, вы влюбились в Сант-Марим...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуться к делам", "en": "..." },
					"next": function(operators) { 
						
						return "plot_4-39" }
				},
				"2": {
					"text": {"ru": "Варить снадобья", "en": "..."},
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
			"title": text.CHARACTER_0, "img": 118,
			"text": {
				"ru": "У вас в руках оказался странный медальон. Он источал слабое волшебное сияние. Его можно продать. Или усилить.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Продать", "en": "..." },
					"next": function(operators) {
						achievement_1_opened = 1
						operators.money_stat += MONEY_STAT_DELTA_1;
						return "plot_4-47" }
				},
				"2": {
					"text": {"ru": "Зачаровать", "en": "..."},
					"next": function(operators) { 
						achievement_1_opened = 1
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "plot_4-46-3-1" }
				}
			}
		},
		"plot_4-46-3-1": {
			"title": text.CHARACTER_0, "img": 119,
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
					"text": {"ru": "Оставить себе", "en": "..."},
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
			"title": text.CHARACTER_0, "img": 25,
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
					"next": function(operators) { return "plot_4-50-1-1" }
				}
			}
		},
		"plot_4-50-1-1": {
			"title": text.CHARACTER_0, "img": 60,
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
						return "plot_4-50-1-1-2" }
				},
				"2": {
					"text": {"ru": "Оставить на столе", "en": "..."},
					"next": function(operators) { return "plot_4-50-1-1-1" }
				}
			}
		},
		"plot_4-50-1-2": {
			"title": text.CHARACTER_0, "img": 68,
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
						return "plot_4-50-1-2-2" }
				},
				"2": {
					"text": {"ru": "Оставить на столе", "en": "..."},
					"next": function(operators) { return "plot_4-50-1-2-1" }
				}
			}
		},
		"plot_4-50-1-1-1": {
			"title": text.CHARACTER_0, "img": 61,
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
						return "plot_4-50-1-1-1-2" }
				},
				"2": {
					"text": {"ru": "Оставить на столе", "en": "..."},
					"next": function(operators) { return "plot_4-50-1-1-1-1" }
				}
			}
		},
		"plot_4-50-1-1-2": {
			"title": text.CHARACTER_0, "img": 64,
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
						return "plot_4-50-1-1-2-2" }
				},
				"2": {
					"text": {"ru": "Оставить на столе", "en": "..."},
					"next": function(operators) { return "plot_4-50-1-1-2-1" }
				}
			}
		},
		"plot_4-50-1-1-1-1": {
			"title": text.CHARACTER_0, "img": 62,
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
					"next": function(operators) { 
						if (operators.Dr == 0) {
							return "plot_4-50-41" 
						} else if (operators.Dr == 1) {
							return "plot_4-50-42"
						} 
						else if (operators.Dr == 2) {
							return "plot_4-50-43"
						} 
						else if (operators.Dr == 3) {
							return "plot_4-50-44"
						} 
					}
				}
			}
		},
		"plot_4-50-1-1-1-2": {
			"title": text.CHARACTER_0, "img": 63,
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
					"next": function(operators) { 
						if (operators.Dr == 0) {
							return "plot_4-50-41" 
						} else if (operators.Dr == 1) {
							return "plot_4-50-42"
						} 
						else if (operators.Dr == 2) {
							return "plot_4-50-43"
						} 
						else if (operators.Dr == 3) {
							return "plot_4-50-44"
						} 
					}
				}
			}
		},
		"plot_4-50-1-1-2-1": {
			"title": text.CHARACTER_0, "img": 63,
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
					"next": function(operators) { 
						if (operators.Dr == 0) {
							return "plot_4-50-41" 
						} else if (operators.Dr == 1) {
							return "plot_4-50-42"
						} 
						else if (operators.Dr == 2) {
							return "plot_4-50-43"
						} 
						else if (operators.Dr == 3) {
							return "plot_4-50-44"
						} 
					}
				}
			}
		},
		"plot_4-50-1-1-2-2": {
			"title": text.CHARACTER_0, "img": 65,
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
					"next": function(operators) { 
						if (operators.Dr == 0) {
							return "plot_4-50-41" 
						} else if (operators.Dr == 1) {
							return "plot_4-50-42"
						} 
						else if (operators.Dr == 2) {
							return "plot_4-50-43"
						} 
						else if (operators.Dr == 3) {
							return "plot_4-50-44"
						} 
					}
				}
			}
		},
		"plot_4-50-1-2-1": {
			"title": text.CHARACTER_0, "img": 64,
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
						return "plot_4-50-1-2-1-2" }
				},
				"2": {
					"text": {"ru": "Оставить на столе", "en": "..."},
					"next": function(operators) { return "plot_4-50-1-2-1-1" }
				}
			}
		},
		"plot_4-50-1-2-1-1": {
			"title": text.CHARACTER_0, "img": 63,
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
					"next": function(operators) { 
						if (operators.Dr == 0) {
							return "plot_4-50-41" 
						} else if (operators.Dr == 1) {
							return "plot_4-50-42"
						} 
						else if (operators.Dr == 2) {
							return "plot_4-50-43"
						} 
						else if (operators.Dr == 3) {
							return "plot_4-50-44"
						} 
					}
				}
			}
		},
		"plot_4-50-1-2-1-2": {
			"title": text.CHARACTER_0, "img": 65,
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
					"next": function(operators) { 
						if (operators.Dr == 0) {
							return "plot_4-50-41" 
						} else if (operators.Dr == 1) {
							return "plot_4-50-42"
						} 
						else if (operators.Dr == 2) {
							return "plot_4-50-43"
						} 
						else if (operators.Dr == 3) {
							return "plot_4-50-44"
						} 
					}
				}
			}
		},
		"plot_4-50-1-2-2": {
			"title": text.CHARACTER_0, "img": 66,
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
						return "plot_4-50-1-2-2-2" }
				},
				"2": {
					"text": {"ru": "Оставить на столе", "en": "..."},
					"next": function(operators) { return "plot_4-50-1-2-2-1" }
				}
			}
		},
		"plot_4-50-1-2-2-1": {
			"title": text.CHARACTER_0, "img": 65,
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
					"next": function(operators) { 
						if (operators.Dr == 0) {
							return "plot_4-50-41" 
						} else if (operators.Dr == 1) {
							return "plot_4-50-42"
						} 
						else if (operators.Dr == 2) {
							return "plot_4-50-43"
						} 
						else if (operators.Dr == 3) {
							return "plot_4-50-44"
						} 
					}
				}
			}
		},
		"plot_4-50-1-2-2-2": {
			"title": text.CHARACTER_0, "img": 67,
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
					"next": function(operators) { 
						if (operators.Dr == 0) {
							return "plot_4-50-41" 
						} else if (operators.Dr == 1) {
							return "plot_4-50-42"
						} 
						else if (operators.Dr == 2) {
							return "plot_4-50-43"
						} 
						else if (operators.Dr == 3) {
							return "plot_4-50-44"
						} 
					}
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
		"plot_4-50-41": {
			"title": text.CHARACTER_0, "img": 52,
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
		"plot_4-50-42": {
			"title": text.CHARACTER_0, "img": 54,
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
		"plot_4-50-43": {
			"title": text.CHARACTER_0, "img": 53,
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
		"plot_4-50-44": {
			"title": text.CHARACTER_0, "img": 55,
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
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Вы проснулись и ощутили себя... дома. ",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "plot_5-4" }
				},
				"2": {
					"text": {"ru": "…", "en": "..."},
					"next": function(operators) { return "plot_5-4" }
				}
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
					"text": { "ru": "Да, неправда!", "en": "..." },
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
			"title": text.CHARACTER_0, "img": 38,
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
				"ru": "Это будет величайший шедевр. Вот только у меня совсем кончилась <i class='red'>киноварь.</i> Поможете с этим?",
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
			"title": text.CHARACTER_5, "img": 5,
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
				return "plot_5-11-" + operators.Dr
			}
		},
		"plot_5-11-0": {
			"desk": "dragon_0",
			"next": function(operators) {
				return "plot_5-12"
			}
		},
		"plot_5-11-1": {
			"desk": "dragon_1",
			"next": function(operators) {
				return "plot_5-12"
			}
		},
		"plot_5-11-2": {
			"desk": "dragon_2",
			"next": function(operators) {
				return "plot_5-12"
			}
		},
		"plot_5-11-3": {
			"desk": "dragon_3",
			"next": function(operators) {
				return "plot_5-12"
			}
		},
		"plot_5-12": {
			"title": text.CHARACTER_36, "img": 18,
			"text": {
				"ru": "Может быть у вас есть какая-то работа для меня?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да", "en": "..." },
					"next": function(operators) { 
						operators.character_17_opened =1
						operators.U += 1;
						return "plot_5-12-1" }
				},
				"2": {
					"text": {"ru": "Нет, пока нет…", "en": "..."},
					"next": function(operators) {
						operators.character_17_opened =1
					 	return "plot_5-13" }
				}
			}
		},
		"plot_5-12-1": {
			"title": text.CHARACTER_18, "img": 18,
			"text": {
				"ru": "Я готов.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Перебери травы", "en": "..." },
					"next": function(operators) { 
						return "plot_5-13" }
				},
				"2": {
					"text": {"ru": "Отмывай склянки", "en": "..."},
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
			"title": text.CHARACTER_18, "img": 18,
			"text": {
				"ru": "Вы проверили работу парнишки. На некоторых реактивах отчетливо виднелись следы магического пламени... Теперь их придется выбросить.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "К насущным делам...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "plot_5-18" }
				},
				"2": {
					"text": {"ru": "Странно...", "en": "..."},
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
				return "plot_5-21-" + operators.Dr
			}
		},
		"plot_5-21-0": {
			"desk": "dragon_0",
			"next": function(operators) {
				return "plot_5-22"
			}
		},
		"plot_5-21-1": {
			"desk": "dragon_1",
			"next": function(operators) {
				return "plot_5-22"
			}
		},
		"plot_5-21-2": {
			"desk": "dragon_2",
			"next": function(operators) {
				return "plot_5-22"
			}
		},
		"plot_5-21-3": {
			"desk": "dragon_3",
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
			"title": text.CHARACTER_18, "img": 18,
			"text": {
				"ru": " Извините за произошедшее... Не прогоняйте меня. Мне больше некуда идти…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Все хорошо, не переживай.", "en": "..." },
					"next": function(operators) { 
						operators.U = 2;
						return "plot_5-22-1_good" }
				},
				"2": {
					"text": {"ru": "Пшел вон, вредитель!", "en": "..."},
					"next": function(operators) { 
						operators.U = 0;
						return "plot_5-22-1_sad" }
				}
			}
		},
		"plot_5-22-1_good": {
			"title": text.CHARACTER_0, "img": 0,
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
			"title": text.CHARACTER_0, "img": 0,
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
			"title": text.CHARACTER_18, "img": 18,
			"text": {
				"ru": "Простите! Во имя Великого Творца простите! Я... Я буду стараться бороться с этим... Подавлять, если хотите… ",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Не стоит. Развивай свою магию", "en": "..." },
					"next": function(operators) { 
						operators.U = 3;
						return "plot_5-26" }
				},
				"2": {
					"text": {"ru": "Да, так будет лучше для всех.", "en": "..."},
					"next": function(operators) { 
						operators.U = 2;
						return "plot_5-26" }
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
					"next": function(operators) { return "plot_5-27" }
				}
			}
		},
		"plot_5_pegas-1": {
			"title": text.CHARACTER_19, "img": 19,
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
						operators.P = 1;
						return "plot_5_pegas-3" }
				},
				"2": {
					"text": {"ru": "У вас нет возможности", "en": "..."},
					"next": function(operators) { return "plot_5-27" }
				}
			}
		},
		"plot_5_pegas-3": {
			"title": text.CHARACTER_19, "img": 107,
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
					"text": { "ru": "Ну... Эм?", "en": "..." },
					"next": function(operators) { return "plot_5-30" }
				},
				"2": {
					"text": {"ru": "Попрошу!", "en": "..."},
					"next": function(operators) { return "plot_5-30" }
				}
			}
		},
		"plot_5-30": {
			"title": text.CHARACTER_24, "img": 24,
			"text": {
				"ru": "Ладно, мне некогда! Пока.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Пока!", "en": "..." },
					"next": function(operators) { return "plot_5-31" }
				},
				"2": {
					"text": {"ru": "Ну и катись!", "en": "..."},
					"next": function(operators) { return "plot_5-31" }
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
					"text": {"ru": "Оставить", "en": "..."},
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
						if (operators.U == 0) {
							return "plot_5-33" }
					}
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
						if (operators.U == 0) {
							return "plot_5-33" }
					}
				}
			}
		},
		"plot_5_padawan-1": {
			"desk": "padawan",
			"next": function(operators) {
				return "plot_5-33"
			}
		},
		"plot_5_padawan_m-1": {
			"desk": "padawan_m",
			"next": function(operators) {
				return "plot_5-33"
			}
		},
		"plot_5-33": {
			"title": text.CHARACTER_0, "img": 116,
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
				return "plot_5-36-" + operators.Dr
			}
		},
		"plot_5-36-0": {
			"desk": "dragon_0",
			"next": function(operators) {
				return "plot_5-37"
			}
		},
		"plot_5-36-1": {
			"desk": "dragon_1",
			"next": function(operators) {
				return "plot_5-37"
			}
		},
		"plot_5-36-2": {
			"desk": "dragon_2",
			"next": function(operators) {
				return "plot_5-37"
			}
		},
		"plot_5-36-3": {
			"desk": "dragon_3",
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
					"text": { "ru": "Что за вздор!", "en": "..." },
					"next": function(operators) { return "plot_5-44" }
				},
				"2": {
					"text": {"ru": "Что... Наконец, свершится?", "en": "..."},
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
			"title": text.CHARACTER_32, "img": 13,
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
				return "plot_5-55-" + operators.Dr
			}
		},
		"plot_5-55-0": {
			"desk": "dragon_0",
			"next": function(operators) {
				return "plot_5-56"
			}
		},
		"plot_5-55-1": {
			"desk": "dragon_1",
			"next": function(operators) {
				return "plot_5-56"
			}
		},
		"plot_5-55-2": {
			"desk": "dragon_2",
			"next": function(operators) {
				return "plot_5-56"
			}
		},
		"plot_5-55-3": {
			"desk": "dragon_3",
			"next": function(operators) {
				return "plot_5-56"
			}
		},
		"plot_5-56": {
			"title": text.CHARACTER_31, "img": 21,
			"text": {
				"ru": "...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вам помочь?", "en": "..." },
					"next": function(operators) { 
						return "plot_5-57" }
				},
				"2": {
					"text": {"ru": "Кто вы?", "en": "..."},
					"next": function(operators) {
						return "plot_5-57" }
				}
			}
		},
		"plot_5-57": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Мрак и тьма. Холод небытия. И кто-то сзади будто не сводит глаз…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Идти вперёд","en": "Do it!"},
					"next": function(operators) { 
						
						return "plot_5-58"	}
				},
				"2": {
					"text": { "ru": "Идти назад", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "plot_5-58"
					}
				}
			}
		},
		"plot_5-58": {
			"title": text.CHARACTER_2, "img": 2,
				"text": {
					"ru": "…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Эм, вы кто?","en": "Do it!"},
					"next": function(operators) { 
						
						return "plot_5-59"	}
				},
				"2": {
					"text": { "ru": "Так-так, ближе не надо!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "plot_5-59"
					}
				}
			}
		},
		"plot_5-59": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Существо не ответило. Его уродливые костлявые руки потянулись вам навстречу.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Бежать быстро","en": "Do it!"},
					"next": function(operators) { 
						
						return "plot_5-60"	}
				},
				"2": {
					"text": { "ru": "Бежать ещё быстрее", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "plot_5-60"
					}
				}
			}
		},
		"plot_5-60": {
			"title": text.CHARACTER_33, "img": 34,
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

						return "plot_5-61"	}
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
						
						return "plot_5-61"
					}
				}
			}
		},
		"plot_5-61": {
			"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Возвращение в подлунный мир было внезапным и крайне болезненным. Но не таким, как раньше...",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Забыть как сон","en": "Do it!"},
					"next": function(operators) { 
						//operators.money_stat += MONEY_STAT_DELTA_1;
						//operators.power_stat += POWER_STAT_DELTA_1;
						return "plot_5-62"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						//operators.money_stat += MONEY_STAT_DELTA_1;
						//operators.power_stat += POWER_STAT_DELTA_1;
						// изменяем операторы
						return "plot_5-62"
					}
				}
			}
		},
		"plot_5-62": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Незнакомки уже не было. И была ли она вообще?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			
			"answers": {
				"1": {
					"text": { "ru": "Странно...", "en": "..." },
					"next": function(operators) { return "plot_5-63" }
				},
				"2": {
					"text": {"ru": "Очень странно...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_5-63" }
				}
			}
		},
		"plot_5-63": {
			"title": text.CHARACTER_0, "img": 58,
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

		// Фестиваль // НАЧАЛО 3 главы 
		"plot_6-0": {
			"title": text.CHARACTER_0, "img": 57,
			"text": {
				"ru": "На главной площади играет музыка. Доносится смех. Всюду палатки и столы с угощением.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Веселиться", "en": "..." },
					"next": function(operators) { return "plot_6-1" }
				},
				"2": {
					"text": {"ru": "Поискать кого-нибудь", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-1" }
				}
			}
		},
		"plot_6-1": {
			"title": text.CHARACTER_34, "img": 46,
			"text": {
				"ru": "Музыкант с лютней играет прекрасную, но немного печальную мелодию.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Бросить монетку", "en": "..." },
					"next": function(operators) {
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "plot_6-2" }
				},
				"2": {
					"text": {"ru": "Пройти мимо", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-3" }
				}
			}
		},
		"plot_6-2": {
			"title": text.CHARACTER_34, "img": 46,
			"text": {
				"ru": "Благодарю вас, милостивый господин. Хотите сыграю что-нибудь для вас?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Балладу?", "en": "..." },
					"next": function(operators) { return "plot_6-3" }
				},
				"2": {
					"text": {"ru": "Что-нибудь веселое пожалуйста", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-3" }
				}
			}
		},
		"plot_6-3": {
			"title": text.CHARACTER_35, "img": 45,
			"text": {
				"ru": "Хотите покажу вам такое, чего вы раньше еще никогда не видели? Магию…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Люблю фокусы!", "en": "..." },
					"next": function(operators) { return "plot_6-4" }
				},
				"2": {
					"text": {"ru": "Видал я эту вашу магию…", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-5" }
				}
			}
		},
		"plot_6-4": {
			"title": text.CHARACTER_0, "img": 57,
			"text": {
				"ru": "Фокусница начала представление. В ее мастерстве не было сомнений, но и все же это была не магия.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Впечатляет!", "en": "..." },
					"next": function(operators) { return "plot_6-5" }
				},
				"2": {
					"text": {"ru": "Ну-ну…", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-5" }
				}
			}
		},
		"plot_6-5": {
			"title": text.CHARACTER_8, "img": 43,
			"text": {
				"ru": "Ты тоже здесь! Этот восхитительный праздник напоминает мне о родине…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да...", "en": "..." },
					"next": function(operators) { return "plot_6-6" }
				},
				"2": {
					"text": {"ru": "Хотел бы я побывать…", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-5-1" }
				}
			}
		},
		"plot_6-5-1": {
			"title": text.CHARACTER_8, "img": 43,
			"text": {
				"ru": "Почему нет? Скоро мне нужно будет ненадолго вернуться... Я возьму тебя с собой.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Здорово!", "en": "..." },
					"next": function(operators) { return "plot_6-6" }
				},
				"2": {
					"text": {"ru": "Спасибо…", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-6" }
				}
			}
		},
		"plot_6-6": {
			"title": text.CHARACTER_6, "img": 41,
			"text": {
				"ru": "Эх, хорошо!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да! Хорошо!", "en": "..." },
					"next": function(operators) { return "plot_6-7-" + operators.Dr }
				},
				"2": {
					"text": {"ru": "Уйти подальше", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-7-" + operators.Dr }
				}
			}
		},
		"plot_6-7-0": {
			"title": text.dragon_type_0, "img": 48,
			"text": {
				"ru": "Дракон украл бублик.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуть назад", "en": "..." },
					"next": function(operators) { return "plot_6-8" }
				},
				"2": {
					"text": {"ru": "Пусть резвится", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-8" }
				}
			}
		},
		"plot_6-7-1": {
			"title": text.dragon_type_1, "img": 50,
			"text": {
				"ru": "Дракон украл бублик.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуть назад", "en": "..." },
					"next": function(operators) { return "plot_6-8" }
				},
				"2": {
					"text": {"ru": "Пусть резвится", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-8" }
				}
			}
		},
		"plot_6-7-2": {
			"title": text.dragon_type_2, "img": 49,
			"text": {
				"ru": "Дракон украл бублик.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуть назад", "en": "..." },
					"next": function(operators) { return "plot_6-8" }
				},
				"2": {
					"text": {"ru": "Пусть резвится", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-8" }
				}
			}
		},
		"plot_6-7-3": {
			"title": text.dragon_type_3, "img": 51,
			"text": {
				"ru": "Дракон украл бублик.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуть назад", "en": "..." },
					"next": function(operators) { return "plot_6-8" }
				},
				"2": {
					"text": {"ru": "Пусть резвится", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-8" }
				}
			}
		},
		"plot_6-8": {
			"title": text.CHARACTER_32, "img": 42,
			"text": {
				"ru": "У нас есть такая традиция - запускать в небо фонарики в конце. Поучаствуете?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Хорошо! Буду ждать... тебя", "en": "..." },
					"next": function(operators) {
						operators.Fonarik = 1;
						return "plot_6-9" }
				},
				"2": {
					"text": {"ru": "Не стоит. Я и сам могу...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-9" }
				}
			}
		},
		"plot_6-9": {
			"title": text.CHARACTER_11, "img": 56,
			"text": {
				"ru": "Фестиваль прекрасен. А я - счастлив. Картина наконец завершена, сохнет сейчас в мастерской…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Мои поздравления!", "en": "..." },
					"next": function(operators) { return "plot_6-10" }
				},
				"2": {
					"text": {"ru": "Ох…", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-10" }
				}
			}
		},
		"plot_6-10": {
			"title": text.CHARACTER_37, "img": 47,
			"text": {
				"ru": "Где мой ром… А, вот же он. Так на чем я остановился?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Слушать пирата", "en": "..." },
					"next": function(operators) { return "plot_6-11" }
				},
				"2": {
					"text": {"ru": "Очередной вздор, наверное…", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-17" }
				}
			}
		},
		"plot_6-11": {
			"title": text.CHARACTER_37, "img": 47,
			"text": {
				"ru": "Я боролся с самим морским дьяволом три дня и три ночи, пока он не сдался и в гневе не вышвырнул меня на здешние берега...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Слушать еще", "en": "..." },
					"next": function(operators) { return "plot_6-12" }
				},
				"2": {
					"text": {"ru": "Уйти", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-17" }
				}
			}
		},
		"plot_6-12": {
			"title": text.CHARACTER_37, "img": 47,
			"text": {
				"ru": "Какой маленький городишко! Надолго я здесь не останусь…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Слушать еще", "en": "..." },
					"next": function(operators) { return "plot_6-13" }
				},
				"2": {
					"text": {"ru": "Уйти", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-17" }
				}
			}
		},
		"plot_6-13": {
			"title": text.CHARACTER_37, "img": 47,
			"text": {
				"ru": "Морские ведьмы, русалки… С этими демоницами лучше не шутить.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Слушать еще", "en": "..." },
					"next": function(operators) { return "plot_6-14" }
				},
				"2": {
					"text": {"ru": "Уйти", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-17" }
				}
			}
		},
		"plot_6-14": {
			"title": text.CHARACTER_37, "img": 47,
			"text": {
				"ru": "Знавал я одну ведьму… Украл у нее медальон с жемчужиной! И, как дурак, потерял в тот же вечер...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Ведьму?", "en": "..." },
					"next": function(operators) { return "plot_6-15-1" }
				},
				"2": {
					"text": {"ru": "С жемчужиной?", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-15-2" }
				}
			}
		},
		"plot_6-15-1": {
			"title": text.CHARACTER_37, "img": 47,
			"text": {
				"ru": "Та еще бестия… Но хороша, ничего не скажешь. А глазищи какие!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Расскажите подробнее", "en": "..." },
					"next": function(operators) { return "plot_6-16" }
				},
				"2": {
					"text": {"ru": "Ясно...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-16" }
				}
			}
		},
		"plot_6-15-2": {
			"title": text.CHARACTER_37, "img": 47,
			"text": {
				"ru": "Да... Редкая, ценная, страшно дорогая и ярко-синяя. Как морская пучина...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Расскажите подробнее", "en": "..." },
					"next": function(operators) { return "plot_6-16" }
				},
				"2": {
					"text": {"ru": "Ясно...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-16" }
				}
			}
		},
		"plot_6-16": {
			"title": text.CHARACTER_37, "img": 47,
			"text": {
				"ru": "Ром... Кончился что ли опять? Разрази меня гром!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Ну ясно, ему не до меня", "en": "..." },
					"next": function(operators) { return "plot_6-17" }
				},
				"2": {
					"text": {"ru": "Уйти", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-17" }
				}
			}
		},
		"plot_6-17": {
			"title": text.CHARACTER_0, "img": 57,
			"text": {
				"ru": "Лунный торговец и пират устроили дружескую дуэль прямо на главной площади. Множество зевак собрались, чтобы посмотреть и поддержать.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Болеть за торговца", "en": "..." },
					"next": function(operators) { return "plot_6-18" }
				},
				"2": {
					"text": {"ru": "Болеть за пирата", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-18" }
				}
			}
		},
		"plot_6-18": {
			"title": text.CHARACTER_0, "img": 57,
			"text": {
				"ru": "Дуэль завершилась победой пирата. Он победоносно отсалютовал, а затем помог лунному торговцу подняться на ноги. Оба казались довольными и широко улыбались.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Слава победителям!", "en": "..." },
					"next": function(operators) { return "plot_6-19" }
				},
				"2": {
					"text": {"ru": "Да уж...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-19" }
				}
			}
		},
		"plot_6-19": {
			"title": text.CHARACTER_8, "img": 43,
			"text": {
				"ru": "На самом деле я очень зол. Надо же… Вот так позорно продуться. Но спасибо за поддержку, только ты мне здесь и друг...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Конечно, старина", "en": "..." },
					"next": function(operators) { return "plot_6-20" }
				},
				"2": {
					"text": {"ru": "Пойдем выпьем", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-20" }
				}
			}
		},
		"plot_6-20": {
			"title": text.CHARACTER_37, "img": 47,
			"text": {
				"ru": "Этот маленький триумф далеко не первый и отнюдь не последний! Ведь меня ни одному смертному не победить…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Уйти", "en": "..." },
					"next": function(operators) { return "plot_6-21" }
				},
				"2": {
					"text": {"ru": "Хм...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-21" }
				}
			}
		},
		"plot_6-21": {
			"title": text.CHARACTER_31, "img": 77,
			"text": {
				"ru": "...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_6-22" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-22" }
				}
			}
		},
		"plot_6-22": {
			"title": text.CHARACTER_0, "img": 57,
			"text": {
				"ru": "Она ушла, а вы все никак не могли забыть её глаза.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": {"ru": "Дикие и безумные...", "en": "..."},
					"next": function(operators) { 
						if (operators.U > 0) {
							return "plot_6-23" 
						}
						else if (operators.U = 0) {
							return "plot_6-24"
						} 
					}
				},
				"2": {
					"text": {"ru": "Красивые...Дикие и безумные...", "en": "..."},
					"next": function(operators) { 
						if (operators.U > 0) {
							return "plot_6-23" 
						}
						else if (operators.U = 0) {
							return "plot_6-24"
						} 
					}
				},
			}
		},
		"plot_6-23": {
			"title": text.CHARACTER_0, "img": 96,
			"text": {
				"ru": "Можно мне… вон то? *указывает на стойку со сладостями*",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, конечно, купи.", "en": "..." },
					"next": function(operators) { return "plot_6-24" }
				},
				"2": {
					"text": {"ru": "Вот еще! Деньги тратить!", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-24" }
				}
			}
		},
		"plot_6-24": {
			"title": text.CHARACTER_38, "img": 57,
			"text": {
				"ru": "Купите золотую уздечку?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, давайте", "en": "..." },
					"next": function(operators) {
						operators.Uzdechka = 1;
						return "plot_6-25" }
				},
				"2": {
					"text": {"ru": "Пожалуй, нет", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-26" }
				}
			}
		},
		"plot_6-25": {
			"title": text.CHARACTER_0, "img": 57,
			"text": {
				"ru": "Уздечка блестит золотыми звездами. Вы, кажется, догадываетесь, кому она подойдет…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да...", "en": "..." },
					"next": function(operators) { return "plot_6-26" }
				},
				"2": {
					"text": {"ru": "Нет...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-26" }
				}
			}
		},
		"plot_6-26": {
			"title": text.CHARACTER_2, "img": 40,
			"text": {
				"ru": "...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Что...", "en": "..." },
					"next": function(operators) { return "plot_6-27" }
				},
				"2": {
					"text": {"ru": "Бежать", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-27" }
				}
			}
		},
		"plot_6-27": {
			"title": text.CHARACTER_0, "img": 57,
			"text": {
				"ru": "Увиденное не могло не произвести впечатление. Вы ещё долго озирались по сторонам, боясь ненароком снова увидеть зловещую фигуру.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_6-28" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-28" }
				}
			}
		},
		"plot_6-28": {
			"title": text.CHARACTER_32, "img": 42,
			"text": {
				"ru": "Что с вами? Вы так побледнели… Хотите я с вами недолго побуду?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Рассказать ей", "en": "..." },
					"next": function(operators) { return "plot_6-29" }
				},
				"2": {
					"text": {"ru": "Не стоит, все в порядке", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-31" }
				}
			}
		},
		"plot_6-29": {
			"title": text.CHARACTER_32, "img": 42,
			"text": {
				"ru": "Ониры... Они не страшны, пока мы их не боимся. Так говорят древние...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Ониры?", "en": "..." },
					"next": function(operators) { return "plot_6-30" }
				},
				"2": {
					"text": {"ru": "Понятно...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-31" }
				}
			}
		},
		"plot_6-30": {
			"title": text.CHARACTER_32, "img": 42,
			"text": {
				"ru": "Еще их называют Кошмарами... Но они все же больше, чем просто сны.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_6-31" }
				},
				"2": {
					"text": {"ru": "Ясно...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-31" }
				}
			}
		},
		"plot_6-31": {
			"title": text.CHARACTER_17, "img": 97,
			"text": {
				"ru": "Ишь какие ряженные… А вот я была лучше их всех и краше.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Не сомневаюсь...", "en": "..." },
					"next": function(operators) { return "plot_6-32" }
				},
				"2": {
					"text": {"ru": "Хм…", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-32" }
				}
			}
		},
		"plot_6-32": {
			"title": text.CHARACTER_0, "img": 57,
			"text": {
				"ru": "Праздник дарил чувство радости и счастья, но все чаще на лицах людей читалась легкая усталость. Фестиваль медленно подходил к концу...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_6-33" }
				},
				"2": {
					"text": {"ru": "…", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-33" }
				}
			}
		},
		"plot_6-33": {
			"title": text.CHARACTER_0, "img": 98,
			"text": {
				"ru": "В один миг множество огненных фонариков взмыли в небо. Это было невероятное зрелище, отчего стало очень радостно, но и одновременно почему-то грустно на душе…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Смотреть", "en": "..." },
					"next": function(operators) { return "plot_6-36" }
				},
				"2": {
					"text": {"ru": "Запустить фонарик", "en": "..."},
					"next": function(operators) { 
						if (operators.Fonarik == 0) {
							return "plot_6-35" 
						}
						else if (operators.Fonarik == 1) {
							return "plot_6-34"
						} 
					}
				},
			}
		},
		"plot_6-34": {
			"title": text.CHARACTER_0, "img": 98,
			"text": {
				"ru": "Как и обещала, появилась Алия с фонариком. Ловким движением она расправила его и протянула вам. Вы вместе его запустили.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Идти домой", "en": "..." },
					"next": function(operators) { return "plot_6-45" }
				},
				"2": {
					"text": {"ru": "Остаться", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-36" }
				}
			}
		},
		"plot_6-35": {
			"title": text.CHARACTER_0, "img": 98,
			"text": {
				"ru": "Вы взяли фонарик, но одно неаккуратное движение - и его объяло пламя, оставив лишь прах и пепел. Вы оглянулись - кажется никто не заметил…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Идти домой", "en": "..." },
					"next": function(operators) { return "plot_6-45" }
				},
				"2": {
					"text": {"ru": "Остаться", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-36" }
				}
			}
		},
		"plot_6-36": {
			"title": text.CHARACTER_0, "img": 58,
			"text": {
				"ru": "Праздник подошел к концу, и вы задержались, чтобы помочь убраться.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Найти лунного торговца", "en": "..." },
					"next": function(operators) { return "plot_6-37" }
				},
				"2": {
					"text": {"ru": "Найти Алию", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-38" }
				}
			}
		},
		"plot_6-37": {
			"title": text.CHARACTER_8, "img": 104,
			"text": {
				"ru": "Все прошло отлично. Хотя пряная лаванда в пирогах была излишне терпкой. Но это так...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Найти Алию", "en": "..." },
					"next": function(operators) { return "plot_6-38" }
				},
				"2": {
					"text": {"ru": "Идти домой", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-45" }
				}
			}
		},
		"plot_6-38": {
			"title": text.CHARACTER_0, "img": 58,
			"text": {
				"ru": "Вы нашли ее не сразу. Она выглядела утомившейся, растерянной... одинокой. Вас она почти не замечала.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Алия?", "en": "..." },
					"next": function(operators) { return "plot_6-39" }
				},
				"2": {
					"text": {"ru": "Молча наблюдать", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-39" }
				}
			}
		},
		"plot_6-39": {
			"title": text.CHARACTER_32, "img": 105,
			"text": {
				"ru": "Я устраиваю им праздники, а они ничего не ценят. Вот и сейчас. Даже отец бросил меня здесь. Где он?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Ценят. Просто не могут", "en": "..." },
					"next": function(operators) { return "plot_6-39-1" }
				},
				"2": {
					"text": {"ru": "Кажется, я его видел", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-39-1" }
				}
			}
		},
		"plot_6-39-1": {
			"title": text.CHARACTER_0, "img": 58,
			"text": {
				"ru": "Почти все разошлись. Ночь сегодня прекрасна.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Проводить Алию", "en": "..." },
					"next": function(operators) { return "plot_6-40" }
				},
				"2": {
					"text": {"ru": "Прогуляться по пляжу", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-42" }
				}
			}
		},
		"plot_6-40": {
			"title": text.CHARACTER_0, "img": 58,
			"text": {
				"ru": "...и не зря. Потом вы это поняли. Страшно подумать, что могло бы случиться, думали вы, проходя мимо темной подворотни.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Идти домой", "en": "..." },
					"next": function(operators) {
						operators.Alia_home = 1 
						return "plot_6-45" }
				},
				"2": {
					"text": {"ru": "Домооой!", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-45" }
				}
			}
		},
		"plot_6-42": {
			"title": text.CHARACTER_0, "img": 99,
			"text": {
				"ru": "Море влекло вас, успокаивало... Однако все время слышались шаги. Или это всего лишь прибой?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Кто здесь?", "en": "..." },
					"next": function(operators) { return "plot_6-43" }
				},
				"2": {
					"text": {"ru": "Это всего лишь волны...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-44" }
				}
			}
		},
		"plot_6-43": {
			"title": text.CHARACTER_0, "img": 100,
			"text": {
				"ru": "На долю секунды вам показалось, что вы снова видели ее. Хотя, наверное, показалось.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_6-45" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-45" }
				}
			}
		},
		"plot_6-44": {
			"title": text.CHARACTER_0, "img": 99,
			"text": {
				"ru": "Конечно, это волны. А вы, кажется, параноик.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_6-45" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-45" }
				}
			}
		},
		"plot_6-45": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Возвратясь домой, вы почувствовали едкий запах озона и серы. Что-то определенно было не так.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Готовиться к худшему", "en": "..." },
					"next": function(operators) { return "plot_6-46" }
				},
				"2": {
					"text": {"ru": "Надеяться на лучшее", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-46" }
				}
			}
		},
		"plot_6-46": {
			"title": text.CHARACTER_1, "img": 101,
			"text": {
				"ru": "Я искала тебя. Мне нужно кое-что сказать.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Что?", "en": "..." },
					"next": function(operators) { return "plot_6-47" }
				},
				"2": {
					"text": {"ru": "Да?", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-47" }
				}
			}
		},
		"plot_6-47": {
			"title": text.CHARACTER_1, "img": 101,
			"text": {
				"ru": "Он идет за тобой. Рано или поздно это случится…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Что случится?", "en": "..." },
					"next": function(operators) { return "plot_6-48" }
				},
				"2": {
					"text": {"ru": "Я знаю...", "en": "..."},
					"next": function(operators) {
						
						return "plot_6-48" }
				}
			}
		},
		"plot_6-48": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Она исчезла. Внезапно налетевшие из открытого окна потоки ветра обдали потусторонним холодом. Хотя, наверное, показалось…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_6-49-" + operators.Dr }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-49-" + operators.Dr }
				}
			}
		},
		"plot_6-49-0": {
			"title": text.dragon_type_0, "img": 52,
			"text": {
				"ru": "Дракон, почувствовав ваше смятение, залез вам на колени. И холод кристаллов обжег вашу кожу, напомнив о зиме...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Спасибо, малыш...", "en": "..." },
					"next": function(operators) { return "plot_6-50" }
				},
				"2": {
					"text": {"ru": "О, зима...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-50" }
				}
			}
		},
		"plot_6-49-1": {
			"title": text.dragon_type_1, "img": 54,
			"text": {
				"ru": "Дракон, почувствовав ваше смятение, залез вам на колени. И запах цветов напомнил вам о весне...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Спасибо, малыш...", "en": "..." },
					"next": function(operators) { return "plot_6-50" }
				},
				"2": {
					"text": {"ru": "О, весна...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-50" }
				}
			}
		},
		"plot_6-49-2": {
			"title": text.dragon_type_2, "img": 53,
			"text": {
				"ru": "Дракон, почувствовав ваше смятение, залез вам на колени. И искрящееся золото напомнило вам о лете...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Спасибо, малыш...", "en": "..." },
					"next": function(operators) { return "plot_6-50" }
				},
				"2": {
					"text": {"ru": "О, лето...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-50" }
				}
			}
		},
		"plot_6-49-3": {
			"title": text.dragon_type_3, "img": 55,
			"text": {
				"ru": "Дракон, почувствовав ваше смятение, залез вам на колени. Его огненное сияние напомнило вам пожар осени...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Спасибо, малыш...", "en": "..." },
					"next": function(operators) { return "plot_6-50" }
				},
				"2": {
					"text": {"ru": "О, осень...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-50" }
				}
			}
		},
		"plot_6-50": {
			"title": text.CHARACTER_27, "img": 27,
			"text": {
				"ru": "Он тоже был здесь. И как будто знал гораздо больше вашего, и в его спокойствии вы нашли то, что искали.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": {"ru": "Глубоко вздохнуть", "en": "..."},
					"next": function(operators) { 
						if (operators.Alia_home == 0) {
							return "plot_6-51"
						}
						else if (operators.Alia_home == 1) {
							return "plot_6-50-1"
						} 
					}
				},
				"2": {
					"text": {"ru": "Вернуться к делам", "en": "..."},
					"next": function(operators) { 
						if (operators.Alia_home == 0) {
							return "plot_6-51"
						}
						else if (operators.Alia_home == 1) {
							return "plot_6-50-1"
						} 
					}
				}
			}
		},
		"plot_6-50-1": {
			"title": text.CHARACTER_0, "img": 103,
			"text": {
				"ru": "Только теперь вы обратили внимание на цветок, который на прощание подарила вам девушка-солнце. Что бы это могло значить?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Завтра сделаете вытяжку!", "en": "..." },
					"next": function(operators) { return "plot_6-51" }
				},
				"2": {
					"text": {"ru": "Напоминание о ней...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_6-51" }
				}
			}
		},
		"plot_6-51": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Только глубокой ночью вы наконец забылись крепким сном.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_7-0" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-0" }
				}
			}
		},

	// Сложные задания// НАЧАЛО 4 главы// plot_7
		"plot_7-0": {
			"title": text.CHARACTER_0, "img": 102,
			"text": {
				"ru": "Сант-Марим... Наутро все страхи и опасения остались позади. И вы энергично приступили к своим обязанностям.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { return "plot_7-1" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-1" }
				}
			}
		},
		"plot_7-1": {
			"title": text.CHARACTER_16, "img": 16,
			"text": {
				"ru": "Доброе утро! Извините, что рано. Меня прислали за таблетками от головной боли. И еще... Вот список.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Сейчас все выдам", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;

						return "plot_7-2" }
				},
				"2": {
					"text": {"ru": "К сожалению, не все есть", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-2" }
				}
			}
		},
		"plot_7-2": {
			"title": text.CHARACTER_31, "img": 21,
			"text": {
				"ru": "Мне нужны ингредиенты... с неоднозначной репутацией. Понимаете о чем я?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Помочь", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						operators.Vedma = 1;
						return "plot_7-3" }
				},
				"2": {
					"text": {"ru": "Не помогать", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						return "plot_7-3" }
				}
			}
		},
		"plot_7-3": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Говорят, Королева сбежала! Бросила все и сбежала! Ну разве подобает это Ее Величеству?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Не ваше дело!", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= 0;
						operators.reputation_stat -= 0;

						return "plot_7-4" }
				},
				"2": {
					"text": {"ru": "Нет... А это правда?", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= 0;
						return "plot_7-4" }
				}
			}
		},
		"plot_7-4": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-5"
			}
		},
		"plot_7-5": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Я чувствую как монстр идёт. Его шаги под землёй… Земля содрогается…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Как вы мне надоели...", "en": "..." },
					"next": function(operators) { 

						return "plot_7-6" }
				},
				"2": {
					"text": {"ru": "Я знаю", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-6" }
				}
			}
		},
		"plot_7-6": {
			"title": text.CHARACTER_31, "img": 33,
			"text": {
				"ru": "Ваша репутация говорит сама за себя. Мой сын умирает… Редкая форма магической болезни. Вы возьметесь за это дело?(каждый ход будет стоить магии)",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, хорошо...", "en": "..." },
					"next": function(operators) { 

						return "plot_7-7-1" }
				},
				"2": {
					"text": {"ru": "Нет", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-7" }
				}
			}
		},
		"plot_7-7": {
			"title": text.CHARACTER_39, "img": 106,
			"text": {
				"ru": "Боюсь у вас нет права отказаться. Думаю вы понимаете… На кону слишком многое.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Я понял", "en": "..." },
					"next": function(operators) { 

						return "plot_7-8" }
				},
				"2": {
					"text": {"ru": "Да, Ваше Величество…", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-8" }
				}
			}
		},
		"plot_7-7-1": {
			"title": text.CHARACTER_39, "img": 106,
			"text": {
				"ru": "Я знала, что найду нужного человека. Поторопитесь.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Я понял, Ваше Величество…", "en": "..." },
					"next": function(operators) { 

						return "plot_7-8" }
				},
				"2": {
					"text": {"ru": "Да, Ваше Величество…", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-8" }
				}
			}
		},
		"plot_7-8": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Когда она ушла, вы вздохнули. Рецепт будет убивать вас, отнимая магию и жизнь…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Эх, проклятье!", "en": "..." },
					"next": function(operators) { 

						return "plot_7-9" }
				},
				"2": {
					"text": {"ru": "Мда...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-9" }
				}
			}
		},
		"plot_7-9": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Спустя некоторое время вы услышали звуки приближающегося отряда.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Проклятье!", "en": "..." },
					"next": function(operators) { 

						return "plot_7-10" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-10" }
				}
			}
		},
		"plot_7-10": {
			"title": text.CHARACTER_10, "img": 10,
			"text": {
				"ru": "Господин Алхимик. У меня приказ его Величества - обыск! Не оказывайте противодействие…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": {"ru": "Ну, дерзайте!", "en": "..."},
					"next": function(operators) { 
						if (operators.P > 0) {
							return "plot_7-11"
						}
						else if (operators.P == 0) {
							return "plot_7-15"
						} 
					}
				},
				"2": {
					"text": {"ru": "Как будто есть выбор...", "en": "..."},
					"next": function(operators) { 
						if (operators.P > 0) {
							return "plot_7-11"
						}
						else if (operators.P == 0) {
							return "plot_7-15"
						} 
					}
				}
			}
		},
		"plot_7-11": {
			"title": text.CHARACTER_0, "img": 107,
			"text": {
				"ru": "Пегас, напуганный отрядом, пришел к вам, хотя вы и запретили ему заходить в дом. Но прогонять вы его не стали...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": {"ru": "Погладить", "en": "..."},
					"next": function(operators) { 
						if (operators.Uzdechka > 0) {
							return "plot_7-12"
						}
						else if (operators.Uzdechka == 0) {
							return "plot_7-15"
						} 
					}
				},
				"2": {
					"text": {"ru": "Все будет хорошо...", "en": "..."},
					"next": function(operators) { 
						if (operators.Uzdechka > 0) {
							return "plot_7-12"
						}
						else if (operators.Uzdechka == 0) {
							return "plot_7-15"
						} 
					}
				}
			}
		},
		"plot_7-12": {
			"title": text.CHARACTER_0, "img": 108,
			"text": {
				"ru": "Пользуясь случаем, вы достали золотую уздечку, которую приобрели на фестивале. Теперь вы сможете летать...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Лететь сейчас же!", "en": "..." },
					"next": function(operators) { 

						return "plot_7-13" }
				},
				"2": {
					"text": {"ru": "Потом...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-15" }
				}
			}
		},
		"plot_7-13": {
			"title": text.CHARACTER_0, "img": 109,
			"text": {
				"ru": "Теперь и вам довелось покорить небеса…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 

						return "plot_7-14" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-14" }
				}
			}
		},
		"plot_7-14": {
			"title": text.CHARACTER_0, "img": 110,
			"text": {
				"ru": "Звезды мерцают. И Вега ярче всех…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Собрать свет", "en": "..." },
					"next": function(operators) { 

						return "plot_7-15" }
				},
				"2": {
					"text": {"ru": "Зачаровать монетку", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-15" }
				}
			}
		},
		"plot_7-15": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-16"
			}
		},
		"plot_7-16": {
			"title": text.CHARACTER_11, "img": 11,
			"text": {
				"ru": "Я принес.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Так...", "en": "..." },
					"next": function(operators) { 

						return "plot_7-17" }
				},
				"2": {
					"text": {"ru": "Отлично!", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-17" }
				}
			}
		},
		"plot_7-17": {
			"title": text.CHARACTER_0, "img": 111,
			"text": {
				"ru": "Он поставил картину перед вами.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Кто это?", "en": "..." },
					"next": function(operators) { 

						return "plot_7-17-1" }
				},
				"2": {
					"text": {"ru": "Я знаю кто это...", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-17-1" }
				}
			}
		},
		"plot_7-17-1": {
			"title": text.CHARACTER_11, "img": 11,
			"text": {
				"ru": "О, я чувствую такое счастье. Скоро, совсем скоро наш мир изменится…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Как бы не так…", "en": "..." },
					"next": function(operators) { 

						return "plot_7-18" }
				},
				"2": {
					"text": {"ru": "Уж поскорее бы!", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-18" }
				}
			}
		},
		"plot_7-18": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-19"
			}
		},
		"plot_7-19": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-20"
			}
		},
		"plot_7-20": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Слыхали последние новости? Наш старина-путешественник-то не вернулся. Говорят, съели дикие тигры…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Занялись бы своей работой...", "en": "..." },
					"next": function(operators) { 

						return "plot_7-21" }
				},
				"2": {
					"text": {"ru": "Ууу... Есть подробности?", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-22" }
				}
			}
		},
		"plot_7-20": {
			"title": text.CHARACTER_10, "img": 10,
			"text": {
				"ru": "Всех, кто укрывает королеву Эмилию ждет смертная казнь. Назначена награда за поимку.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Заниматься своей работой...", "en": "..." },
					"next": function(operators) { 

						return "plot_7-21" }
				},
				"2": {
					"text": {"ru": "Сдать ее", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-22" }
				}
			}
		},
		"plot_7-21": {
			"title": text.CHARACTER_10, "img": 10,
			"text": {
				"ru": "Благодарим за содействие. Вот ваша награда.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Что... Маловато как-то!", "en": "..." },
					"next": function(operators) { 

						return "plot_7-22" }
				},
				"2": {
					"text": {"ru": "Благодарю", "en": "..."},
					"next": function(operators) { 
						
						return "plot_7-22" }
				}
			}
		},
		"plot_7-22": {
			"title": text.CHARACTER_31, "img": 21,
			"text": {
				"ru": "Мне снова нужны ингредиенты... с неоднозначной репутацией. Понимаете о чем я?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Помочь", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						operators.Vedma = 1;
						return "plot_7-23" }
				},
				"2": {
					"text": {"ru": "Не помогать", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						return "plot_7-23" }
				}
			}
		},
		"plot_7-23": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-24"
			}
		},
		"plot_7-24": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-25"
			}
		},
		"plot_7-25": {
			"title": text.CHARACTER_18, "img": 18,
			"text": {
				"ru": "Мда… Кто ж знал, что ваза с сушоностями такая хрупкая! Или сущностями?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Это просто магнезия", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-26" }
				},
				"2": {
					"text": {"ru": "Это прах богов!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-26" }
				}
			}
		},
		"plot_7-26": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-27"
			}
		},
		"plot_7-27": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-28"
			}
		},
		"plot_7-28": {
			"title": text.CHARACTER_40, "img": 0,
			"text": {
				"ru": "Я умираю. Мои руки испещрены ранами. Помоги мне.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Помочь", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-29" }
				},
				"2": {
					"text": {"ru": "Не помогать", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-30" }
				}
			}
		},
		"plot_7-29": {
			"title": text.CHARACTER_9, "img": 9,
			"text": {
				"ru": "Ты всё так же милосерд, дитя моё. Это может служить оправданием этому миру...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-31" }
				},
				"2": {
					"text": {"ru": "Рад тебя видеть!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-31" }
				}
			}
		},
		"plot_7-30": {
			"title": text.CHARACTER_9, "img": 9,
			"text": {
				"ru": "Я разочарован, дитя мое. Верно, ты забыл, как и сам пришёл ко мне когда-то, страдая и плача?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Прости, не знаю что со мной", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-31" }
				},
				"2": {
					"text": {"ru": "А если бы я заразился?", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-31" }
				}
			}
		},
		"plot_7-31": {
			"title": text.CHARACTER_9, "img": 9,
			"text": {
				"ru": "Я вернулся. Интересно, как изменился мир...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Мир все такой же", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-32" }
				},
				"2": {
					"text": {"ru": "Изменился...", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-32" }
				}
			}
		},
		"plot_7-32": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-33-" + operators.Dr
			}
		},
		"plot_7-33-0": {
			"desk": "dragon_0",
			"next": function(operators) {
				return "plot_7-34"
			}
		},
		"plot_7-33-1": {
			"desk": "dragon_1",
			"next": function(operators) {
				return "plot_7-34"
			}
		},
		"plot_7-33-2": {
			"desk": "dragon_2",
			"next": function(operators) {
				return "plot_7-34"
			}
		},
		"plot_7-33-3": {
			"desk": "dragon_3",
			"next": function(operators) {
				return "plot_7-34"
			}
		},
		"plot_7-34": {
			"desk": "phoenix",
			"check_condition": function(operators) {
				return operators.Art_phoenix >= 1
			},
			"next": function(operators) {
				return "plot_7-35"
			}
		},
		"plot_7-35": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Говорят, вы водитесь с ведьмой! Это возмутительно!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Не ваше дело", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-36" }
				},
				"2": {
					"text": {"ru": "Не может быть!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-36" }
				}
			}
		},
		"plot_7-36": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-37"
			}
		},
		"plot_7-37": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-38"
			}
		},
		"plot_7-38": {
			"desk": "pegas",
			"check_condition": function(operators) {
				return operators.P >= 1
			},
			"next": function(operators) {
				return "plot_7-39"
			}
		},
		"plot_7-39": {
			"title": text.CHARACTER_21, "img": 21,
			"text": {
				"ru": "Мне нужны ингредиенты... с неоднозначной репутацией. Понимаете о чем я?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Помочь", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						operators.Vedma = 1;
						return "plot_7-40" }
				},
				"2": {
					"text": {"ru": "Не помогать", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						return "plot_7-40" }
				}
			}
		},
		"plot_7-40": {
			"title": text.CHARACTER_21, "img": 21,
			"text": {
				"ru": "Ты был добр ко мне, Мастер. Но не потому ли, что не знаешь, кто я?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Я знаю кто ты...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-41" }
				},
				"2": {
					"text": {"ru": "Кто ты?", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-42" }
				}
			}
		},
		"plot_7-41": {
			"title": text.CHARACTER_21, "img": 21,
			"text": {
				"ru": "Знаешь? Знаешь… И что ты будешь делать? Погонишь меня прочь?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Нет…", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-43" }
				},
				"2": {
					"text": {"ru": "Я не желаю тебе зла, но лучше уходи", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-44" }
				}
			}
		},
		"plot_7-42": {
			"title": text.CHARACTER_21, "img": 21,
			"text": {
				"ru": "Я - дочь морей, заклинательница звезд. Я - та, кому имя морская ведьма. И теперь… Ты прогонишь меня?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Нет…", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-43" }
				},
				"2": {
					"text": {"ru": "Я не желаю тебе зла, но лучше уходи", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-44" }
				}
			}
		},
		"plot_7-43": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Она ушла. Но вы знали, что она еще обязательно вернется.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-46" }
				},
				"2": {
					"text": {"ru": "Вернуться к делам", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-46" }
				}
			}
		},
		"plot_7-44": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Она ушла. И вы знали, что она больше не вернется.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-46" }
				},
				"2": {
					"text": {"ru": "Вернуться к делам", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-46" }
				}
			}
		},
		"plot_7-45": {
			"title": text.CHARACTER_21, "img": 21,
			"text": {
				"ru": "Ты отказал мне трижды. За это я заберу самое дорогое, что у тебя есть! Но не сейчас, позже…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Нет…", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-46" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-46" }
				}
			}
		},
		"plot_7-46": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-47"
			}
		},
		"plot_7-47": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-48"
			}
		},
		"plot_7-48": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Алия вошла, безутешно рыдая. От слез она не может вымолвить и слова.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Закрыть лавку, заварить ей чай", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-49" }
				},
				"2": {
					"text": {"ru": "Заняться другими посетителями", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-54" }
				}
			}
		},
		"plot_7-49": {
			"title": text.CHARACTER_0, "img": 120,
			"text": {
				"ru": "Вы заварили ей целебный чай, и она вскоре успокоилась... Но была бледна и дрожала.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Что случилось?", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-50" }
				},
				"2": {
					"text": {"ru": "Я знаю…", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-51" }
				}
			}
		},
		"plot_7-50": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Мой отец... Он... Он не вернулся. Теперь я осталась одна. Совсем одна…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Не одна...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-53" }
				},
				"2": {
					"text": {"ru": "Время лечит любые раны", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-52" }
				}
			}
		},
		"plot_7-51": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Почему? Почему так случилось? Почему именно с ним... Теперь я одна. Совсем одна...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Не одна...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-53" }
				},
				"2": {
					"text": {"ru": "Время лечит любые раны", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-52" }
				}
			}
		},
		"plot_7-52": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Она ушла. Вы дали ей снадобий, уверяя, что они помогут. Надеясь, что помогут…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуться к насущным делам", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-54" }
				},
				"2": {
					"text": {"ru": "Отложить дела на время", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-54" }
				}
			}
		},
		"plot_7-53": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Вы предложили Алие не уходить. И она осталась. Только сейчас вы поняли как и сами были одиноки... До этого времени.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуться к насущным делам", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-54" }
				},
				"2": {
					"text": {"ru": "Отложить дела на время", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-54" }
				}
			}
		},
		"plot_7-54": {
			"title": text.CHARACTER_14, "img": 14,
			"text": {
				"ru": "Много кораблей проплывает, мало из них причаливает. Я уж давно приметил…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Хм…", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-56" }
				},
				"2": {
					"text": {"ru": "И что это значит?", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-55-1" }
				}
			}
		},
		"plot_7-55-1": {
			"title": text.CHARACTER_14, "img": 14,
			"text": {
				"ru": "Хех, невелика загадка! Это военные суда. Грядет переворот, если наследник не исцелится от своей странной болезни...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Хм…", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-56" }
				},
				"2": {
					"text": {"ru": "Не если, а когда!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-56" }
				}
			}
		},
		"plot_7-56": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-57"
			}
		},
		"plot_7-57": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-58"
			}
		},
		"plot_7-58": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Ты много работаешь. Так нельзя! Пойдем. Сходим к морю...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, хорошо...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-58-1" }
				},
				"2": {
					"text": {"ru": "Мне некогда!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-59" }
				}
			}
		},
		"plot_7-58-1": {
			"title": text.CHARACTER_0, "img": 102,
			"text": {
				"ru": "Хоть вы и не заработали за этот день, но точно не считали, что он был потрачен впустую. Море было нежным и спокойным… И невероятно красивым. Прямо как Алия.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Любоваться морем", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-59" }
				},
				"2": {
					"text": {"ru": "Любоваться Алией", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-59" }
				}
			}
		},
		"plot_7-59": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-60"
			}
		},
		"plot_7-60": {
			"title": text.CHARACTER_21, "img": 21,
			"text": {
				"ru": "Даже яд может стать лекарством. Эти травы, уверена, пригодятся…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Спасибо...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-61" }
				},
				"2": {
					"text": {"ru": "Я их не приму", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-61" }
				}
			}
		},
		"plot_7-61": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Эх, торговля так себе! Я же нищий теперь!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Одолжить пару монет", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-61-1" }
				},
				"2": {
					"text": {"ru": "Посочувствовать", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-62" }
				}
			}
		},
		"plot_7-61-1": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Ты мой самый лучший друг.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Эй! С возвратом!", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-62" }
				},
				"2": {
					"text": {"ru": "Конечно, лучший", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-62" }
				}
			}
		},
		"plot_7-62": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-63"
			}
		},
		"plot_7-63": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Дяденька… Идемте собирать апельсины?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Апельсины?", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-64" }
				},
				"2": {
					"text": {"ru": "В смысле - воровать?", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-64" }
				}
			}
		},
		"plot_7-64": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Эм...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Это противозаконно!", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-66" }
				},
				"2": {
					"text": {"ru": "Ладно, идем", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-65" }
				}
			}
		},
		"plot_7-65": {
			"title": text.CHARACTER_0, "img": 71,
			"text": {
				"ru": "Теперь у вас было много апельсинов. А еще в апельсиновой роще вы нашли кольцо... Кому бы оно могло принадлежать?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Интересно...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-66" }
				},
				"2": {
					"text": {"ru": "Хм...", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-66" }
				}
			}
		},
		"plot_7-66": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-67"
			}
		},
		"plot_7-67": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-68"
			}
		},
		"plot_7-68": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Ты знал, что за домом есть запущенный сад? А ведь его можно было бы засадить цветами...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Это очень хорошая идея!", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						operators.Sad = 1;
						return "plot_7-68-1" }
				},
				"2": {
					"text": {"ru": "И так сойдет!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-69" }
				}
			}
		},
		"plot_7-68-1": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Стараниями Алии в саду распустились удивительные по красоте цветы. Они радуют глаз и помогают отвлечься...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "В сад!", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-68-1" }
				},
				"2": {
					"text": {"ru": "Вернуться к делам", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-69" }
				}
			}
		},
		"plot_7-68-1": {
			"desk": "garden",
			"check_condition": function(operators) {
				return operators.Sad >= 1
			},
			"next": function(operators) {
				return "plot_7-70"
			}
		},
		"plot_7-70": {
			"title": text.CHARACTER_39, "img": 33,
			"text": {
				"ru": "Я заплачу, сколько скажете за молчание. Продолжайте свою работу.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-71" }
				},
				"2": {
					"text": {"ru": "Вернуться к делам", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-71" }
				}
			}
		},
		"plot_7-71": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-72-" + operators.Dr
			}
		},
		"plot_7-72-0": {
			"desk": "dragon_0",
			"next": function(operators) {
				return "plot_7-73"
			}
		},
		"plot_7-72-1": {
			"desk": "dragon_1",
			"next": function(operators) {
				return "plot_7-73"
			}
		},
		"plot_7-72-2": {
			"desk": "dragon_2",
			"next": function(operators) {
				return "plot_7-73"
			}
		},
		"plot_7-72-3": {
			"desk": "dragon_3",
			"next": function(operators) {
				return "plot_7-73"
			}
		},
		"plot_7-73": {
			"desk": "phoenix",
			"check_condition": function(operators) {
				return operators.Art_phoenix >= 1
			},
			"next": function(operators) {
				return "plot_7-74"
			}
		},
		"plot_7-74": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-75"
			}
		},
		"plot_7-75": {
			"title": text.CHARACTER_24, "img": 24,
			"text": {
				"ru": "Огненные бабочки в банке - отличный светильник, и заодно домашние питомцы.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Купить", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						operators.Banka = 1
						return "plot_7-76" }
				},
				"2": {
					"text": {"ru": "Не надо", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-76-1" }
				}
			}
		},
		"plot_7-76": {
			"title": text.CHARACTER_0, "img": 122,
			"text": {
				"ru": "Вы слышите еле уловимый звон от взмахов золотых крыльев.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Выпустить", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						operators.Banka = 0
						return "plot_7-76-1" }
				},
				"2": {
					"text": {"ru": "Пусть светятся...", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-76-1" }
				}
			}
		},
		"plot_7-76-1": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Внезапно ваш взгляд упал на что-то маленькое. Из кого-то выпала… шестеренка?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						operators.Banka = 0
						return "plot_7-77" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-77" }
				}
			}
		},
		"plot_7-77": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Ой, я кажется обронил что-то. Ты не видел… штучку одну?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Видел…", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-78" }
				},
				"2": {
					"text": {"ru": "Ты - автоматон?", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-78" }
				}
			}
		},
		"plot_7-78": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Ха-ха-ха! Так где моя шестеренка? Да будь же ты человеком!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-79" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-79" }
				}
			}
		},
		"plot_7-79": {
			"title": text.CHARACTER_0, "img": 122,
			"text": {
				"ru": "Вы вздохнули. Было видно, что ваш друг не намерен делиться с вами тайной. Однако ему явно понравилась волшебная банка.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Отдать шестеренку", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-80" }
				},
				"2": {
					"text": {"ru": "Отдать банку", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-81" }
				}
			}
		},
		"plot_7-80": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Вот! Сразу бы так! Спасибо друг. И заходи вечерком как-нибудь...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Обязательно!", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-85" }
				},
				"2": {
					"text": {"ru": "У меня работа!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-85" }
				}
			}
		},
		"plot_7-81": {
			"title": text.CHARACTER_8, "img": 123,
			"text": {
				"ru": "Это откуп что ли? Ну, что ж... Ой, ладно!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Что?", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-82" }
				},
				"2": {
					"text": {"ru": "Это не откуп!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-82" }
				}
			}
		},
		"plot_7-82": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Он поднял руку и стянул перчатку с руки, которая оказалась технологическим шедевром.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Мне жаль, что...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-81-1" }
				},
				"2": {
					"text": {"ru": "Это шедевр!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-81-1" }
				}
			}
		},
		"plot_7-81-1": {
			"title": text.CHARACTER_8, "img": 123,
			"text": {
				"ru": "Ну... Да... Механизм работает исправно - Антикитерские мастера очень хороши. Лучше так, чем никак, верно?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Верно...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-83" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-83" }
				}
			}
		},
		"plot_7-83": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Вы отдали ему шестеренку и больше вопросов не задавали.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуться к делам", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-85" }
				},
				"2": {
					"text": {"ru": "Пригласить на чай", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-85" }
				}
			}
		},
		"plot_7-85": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-86"
			}
		},
		"plot_7-86": {
			"title": text.CHARACTER_21, "img": 21,
			"text": {
				"ru": "Люди вокруг так смотрят на меня… А я ведь им пока ничего не сделала.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Пусть смотрят", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-87" }
				},
				"2": {
					"text": {"ru": "А чего ты хотела?", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-87" }
				}
			}
		},
		"plot_7-87": {
			"title": text.CHARACTER_21, "img": 21,
			"text": {
				"ru": "Ты тоже так считаешь? Так же, как они?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-88" }
				},
				"2": {
					"text": {"ru": "Нет", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-88" }
				}
			}
		},
		"plot_7-88": {
			"desk": "garden",
			"check_condition": function(operators) {
				return operators.Sad >= 1
			},
			"next": function(operators) {
				return "plot_7-89"
			}
		},
		"plot_7-89": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Я заварила тебе чай. Я добавила мяту и лаванду... Мне показалось, так лучше!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Спасибо, ты - чудо!", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-90" }
				},
				"2": {
					"text": {"ru": "Лучше классики ничего нет!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-90" }
				}
			}
		},
		"plot_7-90": {
			"title": text.CHARACTER_0, "img": 121,
			"text": {
				"ru": "Чай неожиданно помог вам ни о чем не думать и расслабиться. Однако ненадолго - мысли о бессмертии беспокоили вас, хотели вы этого или нет.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуться к делам", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-91" }
				},
				"2": {
					"text": {"ru": "Продолжать не думать", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-91" }
				}
			}
		},
		"plot_7-91": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-92"
			}
		},
		"plot_7-92": {
			"title": text.CHARACTER_4, "img": 4,
			"text": {
				"ru": "Мой фамильный изумруд... Мой далёкий предок извлёк его из недр горы… Но он был украден! Или утерян... много лет назад. Эх, если бы я только мог еще раз взглянуть на него...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Я постараюсь помочь", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-93" }
				},
				"2": {
					"text": {"ru": "Как же так!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-93" }
				}
			}
		},
		"plot_7-93": {
			"desk": "pegas",
			"check_condition": function(operators) {
				return operators.P >= 1
			},
			"next": function(operators) {
				return "plot_7-94"
			}
		},
		"plot_7-94": {
			"title": text.CHARACTER_9, "img": 9,
			"text": {
				"ru": "Да уж… а мне нравится этот городок. Но от моей цели это меня не отвратит.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Цели?", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-95" }
				},
				"2": {
					"text": {"ru": "Не отвратит?", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-95" }
				}
			}
		},
		"plot_7-95": {
			"title": text.CHARACTER_9, "img": 9,
			"text": {
				"ru": "Ради этого я и вернулся. Но тебе нечего страшиться. Тебя это коснется меньше других.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Звучит зловеще", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-96" }
				},
				"2": {
					"text": {"ru": "Тебе виднее...", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-96" }
				}
			}
		},
		"plot_7-96": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Сегодня целый день дождь. А значит нужно испечь пирог! Тебе какой больше нравится?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Яблочный с корицей", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-97-" + operators.Dr }
				},
				"2": {
					"text": {"ru": "Брусничный с кардамоном", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-97-" + operators.Dr }
				}
			}
		},
		"plot_7-97-0": {
			"desk": "dragon_0",
			"next": function(operators) {
				return "plot_7-98"
			}
		},
		"plot_7-97-1": {
			"desk": "dragon_1",
			"next": function(operators) {
				return "plot_7-98"
			}
		},
		"plot_7-97-2": {
			"desk": "dragon_2",
			"next": function(operators) {
				return "plot_7-98"
			}
		},
		"plot_7-97-3": {
			"desk": "dragon_3",
			"next": function(operators) {
				return "plot_7-98"
			}
		},
		"plot_7-98": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Добрый день, господин Алхимик. Про вас говорят! Кхм, как бы вам сказать... Говорят, вы шныряете по садам и набиваете карманы апельсинами...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Что за вздор!", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-99" }
				},
				"2": {
					"text": {"ru": "И что?!", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-99" }
				}
			}
		},
		"plot_7-99": {
			"title": text.CHARACTER_0, "img": 117,
			"text": {
				"ru": "Когда он ушёл вы достали кольцо. Металл, кажется, безнадежно поцарапан, но камень то какой! Сияющий…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Продать", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-100-1" }
				},
				"2": {
					"text": {"ru": "Подарить", "en": "..."},
					"next": function(operators) { 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-100-1" }
				}
			}
		},
		"plot_7-100-1": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-100"
			}
		},
		"plot_7-100": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Лунный торговец удивительный. Он рассказал, что на его родине корабли не ходят по морю… А еще предложил мне платье неземной красоты…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, слышал про корабли...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-101" }
				},
				"2": {
					"text": {"ru": "Платье? Да, купи... (20 лунных монет)", "en": "..."},
					"next": function(operators) {
						operators.Dress = 1; 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-101" }
				}
			}
		},
		"plot_7-101": {
			"title": text.CHARACTER_0, "img": 30,
			"text": {
				"ru": "Прошло изрядное количество времени, но вы все-таки сделали это! Лекарство для юного принца было готово!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Ура!", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-102" }
				},
				"2": {
					"text": {"ru": "Наконец-то!", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-102" }
				}
			}
		},
		"plot_7-102": {
			"title": text.CHARACTER_39, "img": 33,
			"text": {
				"ru": "Готово? Свершилось! Спасибо вам! Если бы вы только знали…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Я догадываюсь", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-103" }
				},
				"2": {
					"text": {"ru": "Не знаю и знать не хочу", "en": "..."},
					"next": function(operators) {
						
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-103" }
				}
			}
		},
		"plot_7-103": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Когда она ушла, вы обнаружили шелковый мешочек, оставленный ею. В нем было...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "250 лунных монет", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-105" }
				},
				"2": {
					"text": {"ru": "Некий артефакт...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-104" }
				}
			}
		},
		"plot_7-104": {
			"title": text.CHARACTER_0, "img": 124,
			"text": {
				"ru": "Вы не знали что это такое, и почему Королева Эмилия решила одарить вас Душой Пламени... но надеялись однажды это понять.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуться к делам", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-105" }
				},
				"2": {
					"text": {"ru": "Тяжело вздохнуть", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-105" }
				}
			}
		},
		"plot_7-105": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-106"
			}
		},
		"plot_7-106": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-107"
			}
		},
		"plot_7-107": {
			"title": text.CHARACTER_9, "img": 9,
			"text": {
				"ru": "Надо же! Здесь продают отменные финики. Хотя мне кажется, это инжир…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Это финики", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-108" }
				},
				"2": {
					"text": {"ru": "Это инжир", "en": "..."},
					"next": function(operators) {
						
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-108" }
				}
			}
		},
		"plot_7-108": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_7-109"
			}
		},
		"plot_7-109": {
			"title": text.CHARACTER_21, "img": 125,
			"text": {
				"ru": "Идем со мной.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-110" }
				},
				"2": {
					"text": {"ru": "У меня работа", "en": "..."},
					"next": function(operators) {
						
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-111" }
				}
			}
		},
		"plot_7-110": {
			"title": text.CHARACTER_0, "img": 71,
			"text": {
				"ru": "Вы увидели лес глазами ведьмы. Все вокруг казалось необыкновенным…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Как и она…", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-111" }
				},
				"2": {
					"text": {"ru": "Пора возвращаться", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-111" }
				}
			}
		},
		"plot_7-111": {
			"title": text.CHARACTER_17, "img": 17,
			"text": {
				"ru": "Ишь, срам какой развели! В мое время такого не было…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "О чем это вы?", "en": "..." },
					"next": function(operators) { 
						if (operators.Dress > 0) {
							return "plot_7-112-1" 
						}
						else if (operators.Dress = 0) {
							return "plot_7-112"
						} 
					}
				},
				"2": {
					"text": {"ru": "Что за вздор?!", "en": "..."},
					"next": function(operators) {
						if (operators.Dress > 0) {
							return "plot_7-112-1" 
						}
						else if (operators.Dress = 0) {
							return "plot_7-112"
						} 
					}
				}
			}
		},
		"plot_7-112-1": {
			"title": text.CHARACTER_32, "img": 35,
			"text": {
				"ru": "Скажи, ты... любишь меня?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да...", "en": "..." },
					"next": function(operators) { 
						if (operators.Dress > 0) {
							return "plot_7-113-1" 
						}
						else if (operators.Dress = 0) {
							return "plot_7-113-1"
						} 
					}
				},
				"2": {
					"text": {"ru": "Почему ты спрашиваешь?", "en": "..."},
					"next": function(operators) {
						if (operators.Dress > 0) {
							return "plot_7-113-1" 
						}
						else if (operators.Dress = 0) {
							return "plot_7-113-1"
						} 
					}
				}
			}
		},
		"plot_7-112": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Скажи, ты... любишь меня?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да...", "en": "..." },
					"next": function(operators) { 
						if (operators.Dress > 0) {
							return "plot_7-113" 
						}
						else if (operators.Dress = 0) {
							return "plot_7-113"
						} 
					}
				},
				"2": {
					"text": {"ru": "Почему ты спрашиваешь?", "en": "..."},
					"next": function(operators) {
						if (operators.Dress > 0) {
							return "plot_7-113" 
						}
						else if (operators.Dress = 0) {
							return "plot_7-113"
						} 
					}
				}
			}
		},
		"plot_7-113-1": {
			"title": text.CHARACTER_32, "img": 35,
			"text": {
				"ru": "Айвен... Все смотрят на меня так, будто я... Будто мы... Грязные сплетни, но я больше так не могу! Мне лучше уйти...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "…", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-114" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-114" }
				}
			}
		},
		"plot_7-113": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Айвен... Все смотрят на меня так, будто я... Будто мы... Грязные сплетни, но я больше так не могу! Мне лучше уйти...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-114" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-114" }
				}
			}
		},
		"plot_7-114": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Вы смотрели на неё. Кажется, она ждала от вас чего-то, и, кажется, вы смутно догадывались чего. И вы решили сказать ей, что…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьмёте ее в жены", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-115" }
				},
				"2": {
					"text": {"ru": "Ей не о чем волноваться", "en": "..."},
					"next": function(operators) {
						if (operators.Dress > 0) {
							return "plot_7-116-1" 
						}
						else if (operators.Dress = 0) {
							return "plot_7-116"
						} 
					}
				}
			}
		},
		"plot_7-115": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Вы не могли понять, почему она снова плачет. Но даже так, она была прекрасна. Вы обняли её, прижимая к себе как дорогое сокровище, и она обняла в ответ. Вы были счастливы.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						if (operators.Dress > 0) {
							return "plot_7-118-1" 
						}
						else if (operators.Dress = 0) {
							return "plot_7-118"
						} 
					}
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						if (operators.Dress > 0) {
							return "plot_7-118-1" 
						}
						else if (operators.Dress = 0) {
							return "plot_7-118"
						} 
					}
				}
			}
		},
		"plot_7-116": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Да, да... Что ж, я, пожалуй, вернусь в дом моего отца. Спасибо тебе, Мастер. За все…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-117" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-117" }
				}
			}
		},
		"plot_7-116-1": {
			"title": text.CHARACTER_32, "img": 35,
			"text": {
				"ru": "Да, да... Что ж, я, пожалуй, вернусь в дом моего отца. Спасибо тебе, Мастер. За все…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-117" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-117" }
				}
			}
		},
		"plot_7-117": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Она ушла, улыбаясь, но вам почудилось, что вы заметили у нее на глазах слезы...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Мда...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-117" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-117" }
				}
			}
		},
		"plot_7-117": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Вы весь вечер думали. За время, что Алия была с вами, вы успели к ней привыкнуть... Но к одиночеству вы, вероятно, тоже снова привыкнете...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Мда...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-0" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-0" }
				}
			}
		},
		"plot_7-118": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Я решилась. Я продам дом моего отца и останусь с тобой навсегда.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-119" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-119" }
				}
			}
		},
		"plot_7-118-1": {
			"title": text.CHARACTER_32, "img": 35,
			"text": {
				"ru": "Я решилась. Я продам дом моего отца и останусь с тобой навсегда.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-119" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-119" }
				}
			}
		},
		"plot_7-119": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Вы просидели всю ночь за кропотливой работой, но чувствуя безграничное счастье. А наутро подарили ей кольцо. Вскоре о свадьбе объявили тоже...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-120" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-120" }
				}
			}
		},
		"plot_7-120": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Ну, мои поздравления, дружище! Кстати... Для церемонии у меня есть прекрасное волшебное платье для Алии.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Здорово! И за сколько?", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-121" }
				},
				"2": {
					"text": {"ru": "У меня нет денег...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-121" }
				}
			}
		},
		"plot_7-121": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Дружище... Я не такой меркантильный, как ты думаешь. Это подарок. Но тебе я его не покажу! Потом сам все увидишь.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Ну, спасибо, друг", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-122" }
				},
				"2": {
					"text": {"ru": "Да...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-122" }
				}
			}
		},
		"plot_7-122": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Ох, я спешила как могла! Лунные лилии и жасмин!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Мне нравится", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-123" }
				},
				"2": {
					"text": {"ru": "Ей понравится", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-123" }
				}
			}
		},
		"plot_7-123": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Оо… Как прекрасно, что в нашем городе случаются настоящие чудеса…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Да...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-124" }
				},
				"2": {
					"text": {"ru": "Ага...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-124" }
				}
			}
		},
		"plot_7-124": {
			"title": text.CHARACTER_0, "img": 57,
			"text": {
				"ru": "Свадебная церемония была волшебной, как и Алия в платье лунного народа. И сама Луна будто была свидетелем этого таинства.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-125" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-125" }
				}
			}
		},
		"plot_7-125": {
			"title": text.CHARACTER_41, "img": 127,
			"text": {
				"ru": "...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_7-126" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_7-126" }
				}
			}
		},
		"plot_7-126": {
			"title": text.CHARACTER_0, "img": 57,
			"text": {
				"ru": "Потом были песни и пляски, подарки и поздравления... И ночь, полная тайны, когда двое становятся одним целым.. теперь у вас была одна душа на двоих.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-0" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-0" }
				}
			}
		},
		// НОВАЯ ГЛАВА - МЕТКА ХАРОНА
		"plot_8-0": {
			"title": text.CHARACTER_43, "img": 128,
			"text": {
				"ru": "Солнце поднимается над горизонтом. Что уготовил день грядущий…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-1" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-1" }
				}
			}
		},
		"plot_8-1": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Алия прекрасна сегодня, в лучах утреннего солнца. Она похожа на нимфу. Вы чувствовали, как ваше сердце замирает при взгляде на неё.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Сказать ей об этом", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-1-1" }
				},
				"2": {
					"text": {"ru": "Промолчать", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-2" }
				}
			}
		},
		"plot_8-1-1": {
			"title": text.CHARACTER_32, "img": 129,
			"text": {
				"ru": "И ты тоже не оставляешь меня равнодушной.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-2" }
				},
				"2": {
					"text": {"ru": "Вернуться к делам", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-2" }
				}
			}
		},
		"plot_8-2": {
			"title": text.CHARACTER_9, "img": 9,
			"text": {
				"ru": "Справедливость и милосердие… Я так и не решил, чего стоит придерживаться…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Милосердия", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-3" }
				},
				"2": {
					"text": {"ru": "Справедливости", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-3" }
				}
			}
		},
		"plot_8-3": {
			"title": text.CHARACTER_9, "img": 9,
			"text": {
				"ru": "Да будет так…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-4" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-4" }
				}
			}
		},
		"plot_8-4": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Когда он ушёл вам стало не по себе. Отчего-то возникло чувство, что только что определилась судьба мира…",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-5" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-5" }
				}
			}
		},
		"plot_8-5": {
			"desk": "rand7",
			"next": function(operators) {
				return "plot_8-6"
			}
		},
		"plot_8-6": {
			"title": text.CHARACTER_24, "img": 24,
			"text": {
				"ru": "У вас есть снадобье? Невидимости, или... Да быстрее!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Есть! Сейчас...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-7" }
				},
				"2": {
					"text": {"ru": "Что...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-7" }
				}
			}
		},
		"plot_8-7": {
			"title": text.CHARACTER_6, "img": 0,
			"text": {
				"ru": "*Тук-тук!* Караул! Украли реликвию! Он здесь?",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "...", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-8" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-8" }
				}
			}
		},
		"plot_8-8": {
			"title": text.CHARACTER_24, "img": 24,
			"text": {
				"ru": "Меня ищут… Спрячьте.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Ищут?", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-9" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-9" }
				}
			}
		},
		"plot_8-9": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Мы ищем вора. Лучше сразу говорите правду! Он здесь? Здесь?!",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Скрыть/соврать", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						operators.Vor = 1
						return "plot_8-11" }
				},
				"2": {
					"text": {"ru": "Сдать", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-10" }
				}
			}
		},
		"plot_8-10": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Вы видели, как его схватили, и о дальнейшей судьбе его вам уже было неизвестно...",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Вернуться к делам", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-10" }
				},
				"2": {
					"text": {"ru": "...", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-10" }
				}
			}
		},
		"plot_8-11": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "“Вор” свалился без сил. Та самая “реликвия” оказалась картой. Она искусна и очень красива… А вам ничего не стоит подделать ее.",
				"en": "- Hello there! \n - General Kenobi..."
			},
			"answers": {
				"1": {
					"text": { "ru": "Так и сделать!", "en": "..." },
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						
						return "plot_8-10" }
				},
				"2": {
					"text": {"ru": "Не трогать", "en": "..."},
					"next": function(operators) {
						 
						operators.hp_stat -= HEALTH_STAT_DELTA_0;
						return "plot_8-10" }
				}
			}
		},









	},
	},

	"rand4": { 
		"type": "rand_norepeat",
		"cards": {
		"rand4-1_start": {
			"title": text.CHARACTER_14, "img": 14,
			"text": {
				"ru": "Иногда для твердости металла я использую золотую пыль или пепел трав. У вас найдется что-нибудь?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, где-то были...","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.money_stat += MONEY_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Закончились", "en": "dont"},
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
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
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
						operators.character_15_opened =1
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет, это вздор", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
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
						operators.character_16_opened =1
						operators.power_stat += POWER_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Увы...", "en": "dont"},
					"next": function(operators) {
						operators.character_16_opened =1
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
						operators.character_16_opened =1
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Эй, я занят вообще-то!", "en": "dont"},
					"next": function(operators) {
						operators.character_16_opened =1
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4-6_start": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Дяденька, я принес <span class='magenta'>цветные перья</span>! Давайте меняться? ",
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
						operators.character_16_opened =1
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Осуждаю!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_17_opened =1
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
						operators.character_17_opened =1
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_17_opened =1
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
						operators.character_12_opened =1
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_12_opened =1
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
					"next": function(operators) { 
						operators.character_12_opened =1
						return "-"	}
				},
				"2": {
					"text": { "ru": "Лучше дома сидеть!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_12_opened =1
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-17_start": {
			"title": text.CHARACTER_14, "img": 14,
			"text": {
				"ru": "Экий вздор! Рыбак говорит, что в рыбе нашёл золотую булавку! Верите ли?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Сущий вздор!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += POWER_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "А вдруг и правда нашел?", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4-18_start": {
			"title": text.CHARACTER_14, "img": 14,
			"text": {
				"ru": "Металл уже не тот, что прежде… И молодёжь не та! Эх…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да полно вам!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						return "-"	
					}
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
		"rand4-19_start": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Не все так просто в этом мире. Говорят, светочи не живут долго, и уж точно не счастливо...",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Это о ком это вы?","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "rand4-19"	
					}
				},
				"2": {
					"text": { "ru": "Что за вздор?!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-19": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Да все знают о ком это. И вы знаете! Все знают!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Зря я спросил...","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Знаете... подите прочь!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand4-20_start": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Дяденька, я принес <span class='auripigment'>золотые фантики</span>! Давайте меняться? ",
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
		"rand4-21_start": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Там клад. Я знаю где…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Где?","en": "Do it!"},
					"next": function(operators) {
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						// изменяем операторы
						return "rand4-21"	
					}
				},
				"2": {
					"text": { "ru": "Вздор!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4-21": {
			"title": text.CHARACTER_0, "img": 58,
			"text": {
				"ru": "Целый день вы копали замлю на пляже. Но, кажется, ничего так и не нашли...",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возвращаться","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						return "rand4-21-1"	
					}
				},
				"2": {
					"text": { "ru": "Копать еще", "en": "dont"},
					"next": function(operators) {
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						// изменяем операторы
						return "rand4-21-2"
					}
				}
			}
		},
		"rand4-21-1": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Он должен был быть там... *плачет*",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Пожалеть","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Заняться делами", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4-21-2": {
			"title": text.CHARACTER_0, "img": 58,
			"text": {
				"ru": "... и вы все-таки нашли его!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Ура!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						return "rand4-21-3"	
					}
				},
				"2": {
					"text": { "ru": "Возвращаться", "en": "dont"},
					"next": function(operators) {
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						// изменяем операторы
						return "rand4-21-3"
					}
				}
			}
		},
		"rand4-21-3": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Честные пираты делят сокровища пополам.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Оставить себе половину","en": "Do it!"},
					"next": function(operators) {
						operators.money_stat += MONEY_STAT_DELTA_1;
						// изменяем операторы
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Передать матери другую половину", "en": "dont"},
					"next": function(operators) {
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4-22_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Как жаль, что у нас не устраивают балов! За этим только в Королевскую столицу…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Эх, столица…","en": "Do it!"},
					"next": function(operators) {
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						// изменяем операторы
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Здесь лучше!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4-23_start": {
			"title": text.CHARACTER_4, "img": 4,
			"text": {
				"ru": "Чёрные кошки развелись тут и резвятся. Ох, не к добру… Это черти ведь…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да полно вам!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Это вздор!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4-24_start": {
			"title": text.CHARACTER_17, "img": 17,
			"text": {
				"ru": "Нога болит, рука отнимается. Старость это наказание за грехи…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Может быть, хотя… Вздор!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Дать лекарств", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4-25_start": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Наш город - это дело каждого. Мы направим его к процветанию, если будем действовать сообща.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "'Моя хата с краю…'", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
	},
	},
	"phoenix": {
		type: "rand_norepeat", 
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
			},
			"2": {
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
		type: 'rand_norepeat',
		"cards":{
		"rand_ch_2-1_start": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Кстати, я умею фехтовать. И очень неплохо. Могу показать пару приёмов.",
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
		"rand_ch_2-2_start": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Мудрецы говорят, что если долго носить маску, она в конечном итоге прирастёт.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Что за вздор?!","en": "Do it!"},
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
		"rand_ch_2-3_start": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Мой отец привез диковинку. Но никто не оценил...",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Что за диковинка?","en": "Do it!"},
					"next": function(operators) { 
						return "rand_ch_2-3"	}
				},
				"2": {
					"text": { "ru": "Мне не до этого", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_ch_2-3_start": {
			"title": text.CHARACTER_32, "img": 69,
			"text": {
				"ru": "“...это цветы восточного ландыша. Они очень красиво смотрелись бы в мастерской...”",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Так и сделать","en": "Do it!"},
					"next": function(operators) { 
						operators.money_stat -= MONEY_STAT_DELTA_1;
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
		"rand_Pandor-box-1_start": {
			"title": text.CHARACTER_22, "img": 22,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) {
						operators.character_20_opened = 1 
						operators.money_stat += MONEY_STAT_DELTA_1;
						return "Pandor_box-1"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						operators.character_20_opened = 1
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

		"rand_Pandor-box-2_start": {
			"title": text.CHARACTER_22, "img": 22,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.character_20_opened = 1 
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						return "Pandor_box-2"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						operators.character_20_opened = 1
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

		"rand_Pandor_box-3_start": {
			"title": text.CHARACTER_22, "img": 22,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.character_20_opened = 1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						return "Pandor_box-3"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						operators.character_20_opened = 1
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

		"rand_Pandor_box-4_start": {
			"title": text.CHARACTER_22, "img": 22,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.character_20_opened = 1
						operators.power_stat += POWER_STAT_DELTA_1;
						return "Pandor_box-4"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						operators.character_20_opened = 1
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

		"rand_Pandor_box-5_start": {
			"title": text.CHARACTER_22, "img": 22,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.character_20_opened = 1
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "Pandor_box-5"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						operators.character_20_opened = 1
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

		"rand_Pandor_box-6_start": {
			"title": text.CHARACTER_22, "img": 22,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.character_20_opened = 1
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "Pandor_box-6"	}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						operators.character_20_opened = 1
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

		"rand_Pandor_box-7_start": {
			"title": text.CHARACTER_22, "img": 22,
			"text": {
				"ru": "О, владеющий тайными знаниями! Не желаешь ли ты заглянуть в Ящик Пандоры?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						operators.character_20_opened = 1;

						game_core.data.money += 10;
						graph_core.update_balance();

						return "Pandor_box-7"}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						operators.character_20_opened = 1
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


		"rand_ch_2-4_start": {
			"title": text.CHARACTER_23, "img": 23,
			"text": {
				"ru": "Слышь! Гони золото! А то порешу!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Слышь, пшел вон!","en": "Do it!"},
					"next": function(operators) {
						operators.character_21_opened = 1 
						operators.money_stat -= MONEY_STAT_DELTA_1;
						operators.hp_stat -= HEALTH_STAT_DELTA_1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Ладно-ладно…", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_21_opened = 1
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-5_start": {
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
		"rand_ch_2-6_start": {
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
		"rand_ch_2-7_start": {
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
		"rand_ch_2-8_start": {
			"title": text.CHARACTER_24, "img": 24,
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
		"rand_ch_2-9_start": {
			"title": text.CHARACTER_14, "img": 14,
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
		},
		"rand_ch_2-10_start": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Мне бы хотелось однажды отправиться с отцом в путешествие. Самой увидеть чудеса…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Пусть мечта сбудется","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "Угу…", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-11_start": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "У вас, кажется, доброе сердце. И чистая душа. Не замарайте её… Как иные здесь.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Не замараю…","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "Вздор! Тут все хорошие!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-12_start": {
			"title": text.CHARACTER_32, "img": 13,
			"text": {
				"ru": "Мне нравится зеленый. Мне нравятся леса, птицы… А вам?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Мне тоже","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "А я люблю больше море…", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-13_start": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Мой прадед командовал войском боевых слонов. Почему мне никто не верит?!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Потому что это… неправда?","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "Ничего себе!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-14_start": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Мои артефакты - самые лучшие. Напоминаю просто, что у меня есть чудесный магазинчик…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Я помню","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "У меня тоже!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-15_start": {
			"title": text.CHARACTER_24, "img": 24,
			"text": {
				"ru": "Я сокрушил немало драконов на своём веку. Дамы просто падали, завидев меня.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Вот это да!","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "Какой наглый вздор!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-16_start": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Я люблю улыбки на лицах детей. Дети! Что-то разве может быть лучше этих ангелов?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Ничего!","en": "Do it!"},
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Ну, как скажете…", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-17_start": {
			"title": text.CHARACTER_10, "img": 10,
			"text": {
				"ru": "Господин Алхимик, сын Его Величества серьёзно болен. Ему срочно нужно лекарство.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Я к вашим услугам","en": "Do it!"},
					"next": function(operators) { 
						operators.power_stat -= POWER_STAT_DELTA_1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Я не могу", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-18_start": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Кто-то считает, что нашему городу не хватает деревьев. Вздор! Их вон сколько! Или вы тоже недовольны?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, не хватает","en": "Do it!"},
					"next": function(operators) { 
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "У нас прекрасный город!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-19_start": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Мне не нравится, что в нашем городе так много сплетников.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Мне тоже","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "Не понимаю о чем ты", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-20_start": {
			"title": text.CHARACTER_12, "img": 12,
			"text": {
				"ru": "В городе тотально не хватает зелени. И умных людей.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да вроде нет...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "Согласен", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-21_start": {
			"title": text.CHARACTER_17, "img": 17,
			"text": {
				"ru": "Эфирное масло почти закончилось. Ох...",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Какое вам нужно?","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "Я подобным не занимаюсь, увы", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-22_start": {
			"title": text.CHARACTER_16, "img": 16,
			"text": {
				"ru": "Меня прислали... Просить зелье для попутного ветра. Такое разве бывает?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Бывает, сейчас...","en": "Do it!"},
					"next": function(operators) { return "-"	}
				},
				"2": {
					"text": { "ru": "Сегодня никак", "en": "dont"},
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
	dragon_1: { 
		type: "rand_repeat",
		"cards":{
		"rand_1_start": {
			"title": text.dragon_type_1, "img": 54,
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
		"rand_2_start": {
			"title": text.dragon_type_1, "img": 54,
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
		"rand_3_start": {
			"title": text.dragon_type_1, "img": 54,
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
		"rand4_start": {
			"title": text.dragon_type_1, "img": 54,
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
	dragon_0: {
		type: "rand_repeat", 
		"cards":{
		"rand_1_start": {
			"title": text.dragon_type_0, "img": 52,
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
		"rand_2_start": {
			"title": text.dragon_type_0, "img": 52,
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
		"rand_3_start": {
			"title": text.dragon_type_0, "img": 52,
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
		type: "rand_repeat",
		"cards":{
		"rand_1_start": {
			"title": text.dragon_type_2, "img": 53,
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
		"rand_2_start": {
			"title": text.dragon_type_2, "img": 53,
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
		"rand_3_start": {
			"title": text.dragon_type_2, "img": 53,
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
		type: "rand_repeat",
		"cards":{
		"rand_1_start": {
			"title": text.dragon_type_3, "img": 55,
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
		"rand_2_start": {
			"title": text.dragon_type_3, "img": '6',
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
		"rand_3_start": {
			"title": text.dragon_type_3, "img": 55,
				"text": {
					"ru": "Дракон выдыхает огненные искры. Когда он вырастет, станет грозным защитником.",
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
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand4_start": {
			"title": text.dragon_type_3, "img": 55,
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
		type: "rand_repeat",
		"cards":{
		"rand_1_start": {
			"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": "Многие вещи, которые вы откладывали на потом, паренёк взял на себя, облегчив работу.",
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
		"rand_2_start": {
			"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": "Многие вещи, которые вы откладывали на потом, паренёк взял на себя, облегчив работу.",
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
		type: "rand_repeat",
		"cards":{
		"rand_1_start": {
			"title": text.CHARACTER_18, "img": 18,
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
		"rand_2_start": {
			"title": text.CHARACTER_18, "img": 18,
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
		type: "rand_repeat",
		"cards":{
		"rand_1_start": {
			"title": text.dragon_type_19, "img": 19,
				"text": {
					"ru": "Пегас скучает по вам. Вы много работаете!",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Сходить с ним на лужайку","en": "Do it!"},
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
		"rand_2_start": {
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
		"rand_3_start": {
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
		"rand4_start": {
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
	garden: { 
		type: "rand_repeat",
		"cards":{
		"rand_1_start": {
			"title": text.CHARACTER_0, "img": 91,
				"text": {
					"ru": "В саду не смолкают нежные трели птиц. Стоит прислушаться - и на душе сразу становится легче…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Остаться","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_2_start": {
			"title": text.CHARACTER_0, "img": 91,
				"text": {
					"ru": "В саду распустились ландыши.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Остаться","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_3_start": {
			"title": text.CHARACTER_0, "img": 91,
				"text": {
					"ru": "В саду распустился дикий миндаль.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Остаться","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_4_start": {
			"title": text.CHARACTER_0, "img": 91,
				"text": {
					"ru": "В саду завелись пчёлы. Они соорудили улей в трещине старого дерева.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Остаться","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_5_start": {
			"title": text.CHARACTER_0, "img": 91,
				"text": {
					"ru": "В саду завелись светлячки.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Остаться","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_6_start": {
			"title": text.CHARACTER_0, "img": 91,
				"text": {
					"ru": "В саду по ночам квакает жаба.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Остаться","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_7_start": {
			"title": text.CHARACTER_0, "img": 91,
				"text": {
					"ru": "В саду распустилась зачарованная лаванда.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Остаться","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_8_start": {
			"title": text.CHARACTER_0, "img": 91,
				"text": {
					"ru": "Дракон резвится в саду.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Остаться","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_9_start": {
			"title": text.CHARACTER_0, "img": 91,
				"text": {
					"ru": "Дракон резвится в саду.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Остаться","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_10_start": {
			"title": text.CHARACTER_0, "img": 91,
				"text": {
					"ru": "Дракон резвится в саду.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Остаться","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Вернуться к делам", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
	},
	},
	"rand7": { 
		"type": "rand_norepeat",
		"cards": {
		"rand7-1_start": {
			"title": text.CHARACTER_14, "img": 14,
			"text": {
				"ru": "Иногда для твердости металла я использую золотую пыль или пепел трав. У вас найдется что-нибудь?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, где-то были...","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.power_stat -= POWER_STAT_DELTA_1;
						operators.money_stat += MONEY_STAT_DELTA_1;
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Закончились", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand7-2_start": {
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
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Нет", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-3_start": {
			"title": text.CHARACTER_15, "img": 15,
			"text": {
				"ru": "Вы слышите этот жалобный крик чаек? Это души погибших в море…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Жуть...","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Не может быть...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-4_start": {
			"title": text.CHARACTER_16, "img": 16,
			"text": {
				"ru": "Где мой мишка?! *плачет*",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Пойти искать","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Найдется", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand7-5_start": {
			"title": text.CHARACTER_4, "img": 4,
			"text": {
				"ru": "Снотворное самое лучшее готовят из сон-травы и бадьяна. Болотного бадьяна! Мне бы...",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Я приготовлю","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Буду знать", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand7-6_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-7_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-8_start": {
			"title": text.CHARACTER_24, "img": 24,
			"text": {
				"ru": "У меня есть деловое предложение! Массовое производство вечных двигателей!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Отлично!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "rand7-8"	
					}
				},
				"2": {
					"text": { "ru": "И?", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "rand7-8"
					}
				}
			}
		},
		"rand7-8": {
			"title": text.CHARACTER_24, "img": 24,
			"text": {
				"ru": "Вы - занимаетесь производством и организацией фабрики, я - продажей и нахваливанием товара.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Звучит как план","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Ужасный план!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-9_start": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Мне бы знаете, такое средство… Чтобы хорошо спать в полнолуние…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Полнолуние?","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "rand7-9"	
					}
				},
				"2": {
					"text": { "ru": "Да, было где-то…", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-9": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Полнолуние-полнолуние… Ну и другие дни тоже…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Простите, закончилось","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Приготовлю к завтрашнему", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-10_start": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Дяденька! Смотрите, зуб акулы! Красивый?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Очень!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Фу, жуть какая!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand7-11_start": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Дяденька, смотрите! Это - Филипп.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Где?","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "rand7-11"	
					}
				},
				"2": {
					"text": { "ru": "Филипп?", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "rand7-11"
					}
				}
			}
		},
		"rand7-11": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Мальчик ловко поместил вам на прилавок огромного жука-оленя.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "rand7-11-1"	
					}
				},
				"2": {
					"text": { "ru": "Что...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "rand7-11-1"
					}
				}
			}
		},
		"rand7-11-1": {
			"title": text.CHARACTER_44, "img": 130,
			"text": {
				"ru": "Бжжж.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Фу, уберите его!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_44_opened = 1
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Красавчик", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_44_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-12_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Волшебный подорожник и голубая трава. Выглядит невзрачно... Но это как посмотреть",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-13_start": {
			"title": text.CHARACTER_24, "img": 24,
			"text": {
				"ru": "Я слышу звуки... Вжьяу... Вжьяу... Это... У меня в голове или нет? Памагити!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Конечно, в голове!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Эм...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-14_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-15_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-16_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-17_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-18_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-19_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-20_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-21_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-22_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-23_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-24_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-25_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-26_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-27_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-28_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-29_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
		"rand7-30_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
	},
	},
	"rand8": { 
		"type": "rand_norepeat",
		"cards": {
		"rand8-1_start": {
			"title": text.CHARACTER_0, "img": 0,
			"text": {
				"ru": "Иногда для твердости металла я использую золотую пыль или пепел трав. У вас найдется что-нибудь?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, где-то были...","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.power_stat -= POWER_STAT_DELTA_0;
						operators.money_stat += MONEY_STAT_DELTA_0;
						operators.reputation_stat += REPUTATION_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Закончились", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						return "-"
					}
				}
			}
		},
		"rand8-2_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Горячие булочки с корицей! Украшены фиалками! Попробуйте!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму парочку!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened =1
						operators.hp_stat += HEALTH_STAT_DELTA_1;
						operators.money_stat -= MONEY_STAT_DELTA_1;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Спасибо, не в этот раз", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.character_15_opened = 1
						return "-"
					}
				}
			}
		},
	},
	},
	eternity: { 
		type: "script",
		"cards":{
		"eternity_start": {
			"title": text.CHARACTER_0, "img": 26,
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
			"title": text.CHARACTER_2, "img": 2,
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
			"title": text.CHARACTER_0, "img": 26,
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
			"title": text.CHARACTER_33, "img": 34,
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
		type: 'script',
		"cards": {
		"r_1_start": {
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
				title: {ru: "Магия в упадке", en: ""},
				text: {ru: "Вы почувствовали дурноту, а затем леденящий душу холод. Магия отняла у вас жизнь за вашу неосторожность...", en: ""},
				img: 78,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
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
					},
					"2": {
						text: {ru: "...", en: "..."},
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
				title: {ru: "Случилось чудо!", en: ""},
				text: {ru: "... но артефакт вам помог! О, чудо!", en: ""},
				img: 81,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					}
				}
			}
		}
	},
	power_high: {
		type: "script",
		cards: {
			"ph_1": {
				title: {ru: "Магия в избытке", en: ""},
				text: {ru: "Вы почувствовали дурноту, а затем адский огонь начал выжигать вас изнутри. Переизбыток магии разорвал ваше тело изнутри...", en: ""},
				img: 78,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_power) {
								operators.Art_extra_power = 0;
								operators.power_stat = 60;
								graph_core.update_stats();
								return "ph_2"
							} else {
								return "eternity_start"
							}
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_power) {
								operators.Art_extra_power = 0;
								operators.power_stat = 60;
								graph_core.update_stats();
								return "ph_2"
							} else {
								return "eternity_start"
							}
						}
					}
				}
			},
			"ph_2": {
				title: {ru: "Случилось чудо!", en: ""},
				text: {ru: "... но артефакт вам помог! О, чудо!", en: ""},
				img: 81,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					}
				}
			}
		}
	},
	health_low: {
		type: "script",
		cards: {
			"hl_1": {
				title: {ru: "Здоровье в упадке", en: ""},
				text: {ru: "Вы игнорировали боль и недомогания слишком долго. И умерли внезапно...", en: ""},
				img: 78,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_hp) {
								operators.Art_extra_hp = 0;
								operators.hp_stat = 60;
								graph_core.update_stats();
								return "hl_2"
							} else {
								return "eternity_start"
							}
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_hp) {
								operators.Art_extra_hp = 0;
								operators.hp_stat = 60;
								graph_core.update_stats();
								return "hl_2"
							} else {
								return "eternity_start"
							}
						}
					}
				}
			},
			"hl_2": {
				title: {ru: "Случилось чудо!", en: ""},
				text: {ru: "... но артефакт вам помог! О, чудо!", en: ""},
				img: 79,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					}
				}
			}
		}
	},
	health_high: {
		type: "script",
		cards: {
			"hh_1": {
				title: {ru: "Здоровье в избытке", en: ""},
				text: {ru: "Вы пеклись о своем здоровье все больше, выискивая новые методы лечения. Пока не перепутали состав и не выпили яд...", en: ""},
				img: 78,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_hp) {
								operators.Art_extra_hp = 0;
								operators.hp_stat = 60;
								graph_core.update_stats();
								return "hh_2"
							} else {
								return "eternity_start"
							}
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_hp) {
								operators.Art_extra_hp = 0;
								operators.hp_stat = 60;
								graph_core.update_stats();
								return "hh_2"
							} else {
								return "eternity_start"
							}
						}
					}
				}
			},
			"hh_2": {
				title: {ru: "Случилось чудо!", en: ""},
				text: {ru: "... но артефакт вам помог! О, чудо!", en: ""},
				img: 79,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					}
				}
			}
		}
	},
	reputation_low: {
		type: "script",
		cards: {
			"rl_1": {
				title: {ru: "Репутация в упадке", en: ""},
				text: {ru: "Вы и не знали, что успели нажить себе в городе врагов. Пока ночью вам не всадили нож в спину...", en: ""},
				img: 78,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_reputation) {
								operators.Art_extra_reputation = 0;
								operators.reputation_stat = 60;
								graph_core.update_stats();
								return "rl_2"
							} else {
								return "eternity_start"
							}
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_reputation) {
								operators.Art_extra_reputation = 0;
								operators.reputation_stat = 60;
								graph_core.update_stats();
								return "rl_2"
							} else {
								return "eternity_start"
							}
						}
					}
				}
			},
			"rl_2": {
				title: {ru: "Случилось чудо!", en: ""},
				text: {ru: "... но артефакт вам помог! О, чудо!", en: ""},
				img: 82,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					}
				}
			}
		}
	},
	reputation_high: {
		type: "script",
		cards: {
			"rh_1": {
				title: {ru: "Репутация в избытке", en: ""},
				text: {ru: "Вы стали идеальным гражданином Сант-Марим, что невольно вызвало зависть. И подстроенный несчастный случай...", en: ""},
				img: 78,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_reputation) {
								operators.Art_extra_reputation = 0;
								operators.reputation_stat = 60;
								graph_core.update_stats();
								return "rh_2"
							} else {
								return "eternity_start"
							}
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_reputation) {
								operators.Art_extra_reputation = 0;
								operators.reputation_stat = 60;
								graph_core.update_stats();
								return "rh_2"
							} else {
								return "eternity_start"
							}
						}
					}
				}
			},
			"rh_2": {
				title: {ru: "Случилось чудо!", en: ""},
				text: {ru: "... но артефакт вам помог! О, чудо!", en: ""},
				img: 82,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					}
				}
			}
		}
	},
	money_low: {
		type: "script",
		cards: {
			"ml_1": {
				title: {ru: "Деньги в упадке", en: ""},
				text: {ru: "Вы постепенно разорились и уже продали все, что только можно. И все равно умерли на улице...", en: ""},
				img: 78,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_money) {
								operators.Art_extra_money = 0;
								operators.money_stat = 60;
								graph_core.update_stats();
								return "ml_2"
							} else {
								return "eternity_start"
							}
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_money) {
								operators.Art_extra_money = 0;
								operators.money_stat = 60;
								graph_core.update_stats();
								return "ml_2"
							} else {
								return "eternity_start"
							}
						}
					}
				}
			},
			"ml_2": {
				title: {ru: "Случилось чудо!", en: ""},
				text: {ru: "... но артефакт вам помог! О, чудо!", en: ""},
				img: 80,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					}
				}
			}
		}
	},
	money_high: {
		type: "script",
		cards: {
			"mh_1": {
				title: {ru: "Деньги в избытке", en: ""},
				text: {ru: "Слава о вашем богатстве распространилась со скоростью молнии. В этот же вечер к вам ворвались грабители...", en: ""},
				img: 78,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_money) {
								operators.Art_extra_money = 0;
								operators.money_stat = 60;
								graph_core.update_stats();
								return "mh_2"
							} else {
								return "eternity_start"
							}
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							if (operators.Art_extra_money) {
								operators.Art_extra_money = 0;
								operators.money_stat = 60;
								graph_core.update_stats();
								return "mh_2"
							} else {
								return "eternity_start"
							}
						}
					}
				}
			},
			"mh_2": {
				title: {ru: "Случилось чудо!", en: ""},
				text: {ru: "... но артефакт вам помог! О, чудо!", en: ""},
				img: 80,
				answers: {
					"1": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					},
					"2": {
						text: {ru: "...", en: "..."},
						next: function(operators) {
							return "-"
						}
					}
				}
			}
		}
	},
}

var shop_items = {
	"1": {
		title: {
			ru: "Цветки горечавки",
			en: "item"
		},
		description: {
			ru: "Спасение от магического выгорания",
			en: "description"
		},
		long_description: {
			ru: "Подвид обыкновенной горечавки, который вывели монахи несколько столетий назад для усиления навыков ясновидения.",
			en: "long description"
		},
		icon_src: "images/for_shop/item_6.png",
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
			ru: "Волшебная клюква",
			en: "item"
		},
		description: {
			ru: "Исцеление в случае телесных недугов",
			en: "description"
		},
		long_description: {
			ru: "Произрастает в отдалённых областях Зачарованного Леса. Дарует исцеление в случае телесных недугов.",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_1.png",
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
			ru: "Королевская медаль",
			en: "item"
		},
		description: {
			ru: "Вы важная шишка, к черту закон",
			en: "description"
		},
		long_description: {
			ru: "Золотая Королевская медаль гарантирует владельцу непоколебимый авторитет при любых обстоятельствах.",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_7.png",
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
			ru: "Морской алмаз",
			en: "item"
		},
		description: {
			ru: "Да кому нужны эти деньги, когда есть он",
			en: "description"
		},
		long_description: {
			ru: "Редкий и дорогой драгоценный камень обеспечит состоянием на всю оставшуюся жизнь. Жаль, что это подделка.",
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
		title: text.CHARACTER_1,
		description: {ru: "Доброжелательная  трансцендентная сущность по ту сторону грани миров", en: ""},
		img_src: "./images/cards/01.jpg"
	},
	"1": {
		title: text.CHARACTER_2,
		description: {ru: "То, что смотрит из мрака, если долго всматриваться", en: ""},
		img_src: "./images/cards/02.jpg"
	},
	"2": {
		title: text.CHARACTER_3,
		description: {ru: "Найдет что угодно и где угодно", en: ""},
		img_src: "./images/cards/03.jpg"
	},
	"3": {
		title: text.CHARACTER_4,
		description: {ru: "Благочестивый гражданин почтенного возраста", en: ""},
		img_src: "./images/cards/04.jpg"
	},
	"4": {
		title: text.CHARACTER_5,
		description: {ru: "Образцовая мать и жена, наивная любительница цветов", en: ""},
		img_src: "./images/cards/05.jpg"
	},
	"5": {
		title: text.CHARACTER_6,
		description: {ru: "Глава города знает все и про всех, даже если неправда", en: ""},
		img_src: "./images/cards/06.jpg"
	},
	"6": {
		title: text.CHARACTER_7,
		description: {ru: "Грязный и измученный болезнями... Он не так прост", en: ""},
		img_src: "./images/cards/07.jpg"
	},
	"7": {
		title: text.CHARACTER_8,
		description: {ru: "Торговец из лунной страны на Востоке", en: ""},
		img_src: "./images/cards/08.jpg"
	},
	"8": {
		title: text.CHARACTER_9,
		description: {ru: "Тот, кто научил вас всему", en: ""},
		img_src: "./images/cards/09.jpg"
	},
	"9": {
		title: text.CHARACTER_10,
		description: {ru: "Посланник короля", en: ""},
		img_src: "./images/cards/10.jpg"
	},
	"10": {
		title: text.CHARACTER_11,
		description: {ru: "Его запомнят как освободившего Демиурга", en: ""},
		img_src: "./images/cards/11.jpg"
	},
	"11": {
		title: text.CHARACTER_12,
		description: {ru: "Путешественник, привезший с Востока немало редкостей", en: ""},
		img_src: "./images/cards/12.jpg"
	},
	"12": {
		title: text.CHARACTER_13,
		description: {ru: "Девушка-солнце", en: ""},
		img_src: "./images/cards/13.jpg"
	},
	"13": {
		title: text.CHARACTER_14,
		description: {ru: "Повелитель металла и славный малый", en: ""},
		img_src: "./images/cards/14.jpg"
	},
	"14": {
		title: text.CHARACTER_15,
		description: {ru: "Меланхоличный предствитель тружеников моря", en: ""},
		img_src: "./images/cards/15.jpg"
	},
	"15": {
		title: text.CHARACTER_16,
		description: {ru: "Невинная душа, верящая во все чудесное", en: ""},
		img_src: "./images/cards/16.jpg"
	},
	"16": {
		title: text.CHARACTER_17,
		description: {ru: "Сживет кого угодно со свету своим ворчанием", en: ""},
		img_src: "./images/cards/17.jpg"
	},
	"17": {
		title: text.CHARACTER_18,
		description: {ru: "Молодой талант с чернокнижными наклонностями", en: ""},
		img_src: "./images/cards/18.jpg"
	},
	"18": {
		title: text.CHARACTER_19,
		description: {ru: "Мало кто знает, что они и правда существуют", en: ""},
		img_src: "./images/cards/19.jpg"
	},
	"19": {
		title: text.CHARACTER_21,
		description: {ru: "Ее гнев подобен шторму", en: ""},
		img_src: "./images/cards/21.jpg"
	},
	"20": {
		title: text.CHARACTER_22,
		description: {ru: "Никто не знает, что теперь находится в ее ящике", en: ""},
		img_src: "./images/cards/22.jpg"
	},
	"21": {
		title: text.CHARACTER_23,
		description: {ru: "Человек сомнительных моральных принципов", en: ""},
		img_src: "./images/cards/23.jpg"
	},
	"22": {
		title: text.CHARACTER_24,
		description: {ru: "Он говорит, что совершил немало подвигов, но о них почему-то никто не слышал", en: ""},
		img_src: "./images/cards/24.jpg"
	},
	"23": {
		title: text.CHARACTER_31,
		description: {ru: "Ее тайну не должны узнать", en: ""},
		img_src: "./images/cards/33.jpg"
	},
	"24": {
		title: text.CHARACTER_33,
		description: {ru: "Нечто чудесное можно встретить на просторах безвременья", en: ""},
		img_src: "./images/cards/34.jpg"
	},
	"not_opened": {
		title: {ru: "?", en: "?"},
		description: {ru: "персонаж не открыт", en: "character is not unlocked"},
		img_src: "./images/cards/83.jpg"
	}
}

var achievements = {
	"1": {
		title: {ru: "Механические люди", en: "achievement 1"},
		img_src: "./images/for_achievements/icons/0.jpg",
		description: {ru: "описание ачивки 1", en: ""},
		hint_description: {ru: "Лунному торговцу  ", en: ""}
	},
	"2": {
		title: {ru: "Благодарность нищих", en: "achievement 2"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"3": {
		title: {ru: "Фамильный изумруд", en: "achievement 3"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"4": {
		title: {ru: "Светочи", en: "achievement 4"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"5": {
		title: {ru: "Свободная", en: "achievement 5"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"6": {
		title: {ru: "Монстр в темноте", en: "achievement 6"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"7": {
		title: {ru: "Без потерь", en: "achievement 7"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"8": {
		title: {ru: "Светлый путь", en: "achievement 8"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"9": {
		title: {ru: "Повелитель бури", en: "achievement 9"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "", en: ""}
	},
	"10": {
		title: {ru: "Все схвачено", en: "achievement 10"},
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
	img_src: "",
	ico_src: ""

}
]