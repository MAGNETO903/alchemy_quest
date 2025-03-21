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
var POWER_STAT_DELTA_3 = 3;
var MONEY_STAT_DELTA_1 = 5;
var HEALTH_STAT_DELTA_1 = 5;
var HEALTH_STAT_DELTA_3 = 3;
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
		"ru": "Фальшивый герой",
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
	"CHARACTER_45": {
		"ru": "Русалка",
		"en": ""
	},
	"CHARACTER_46": {
		"ru": "Керидвен",
		"en": ""
	},
	"CHARACTER_47": {
		"ru": "Харон",
		"en": ""
	},
	"CHARACTER_48": {
		"ru": "Мелиноя",
		"en": ""
	},
	"CHARACTER_49": {
		"ru": "Механический дракон",
		"en": ""
	},
	"CHARACTER_50": {
		"ru": "Мудрец",
		"en": ""
	},
	"CHARACTER_51": {
		"ru": "Призрак",
		"en": ""
	},
	"CHARACTER_52": {
		"ru": "Вурдалак",
		"en": ""
	},
	"CHARACTER_53": {
		"ru": "Кролики",
		"en": ""
	},
	"CHARACTER_54": {
		"ru": "Огненный чертог",
		"en": ""
	},
	"CHARACTER_55": {
		"ru": "Белая птица",
		"en": ""
	},
	"CHARACTER_56": {
		"ru": "Новый городничий",
		"en": ""
	},
	"CHARACTER_57": {
		"ru": "Флейтист",
		"en": ""
	},
	"CHARACTER_58": {
		"ru": "Посетитель (павлин)",
		"en": ""
	},
	"CHARACTER_59": {
		"ru": "Чумной доктор",
		"en": ""
	},
	"CHARACTER_60": {
		"ru": "Неизвестный",
		"en": ""
	},
	"CHARACTER_61": {
		"ru": "Птица грома",
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
	"ending_1_title": {
		"ru": "Концовка: Все сначала",
		"en": ""
	},
	"ending_2_title": {
		"ru": "Концовка: Разрушитель миров",
		"en": ""
	},
	"ending_3_title": {
		"ru": "Концовка: Рассвет мрака",
		"en": ""
	},
	"ending_4_title": {
		"ru": "Концовка: Отблески счастья",
		"en": ""
	},
	"ending_5_title": {
		"ru": "Концовка: Хранители магии",
		"en": ""
	},
	"ending_6_title": {
		"ru": "Концовка: Сила человека",
		"en": ""
	},
	"ending_7_title": {
		"ru": "Концовка: Во власти океана",
		"en": ""
	},
	"ending_8_title": {
		"ru": "Концовка: Лунная страна",
		"en": ""
	},
	"ending_9_title": {
		"ru": "Концовка: В объятиях нимфы",
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
	'Art_phoenix',
	'Art_knife',	
	'Art_stormglass',
	'Art_crystal',
	'Art_flower',
	'Art_ball',
	'Art_cosmos',
	'Art_starlight',
	'Art_book',
	'Art_reins'
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
	Pearl: 0,
	notgotofest: 0,

	// Фестиваль
	Fonarik: 0,
	Alia_home: 0,
	Moon_ending: 0,

	// Сложные
	Vedma: 0,
	Uzdechka: 0,
	Sad: 0,
	S_in: 0,
	Banka: 0,
	Dress: 0,

	// Метка
	Vor: 0,
	Alia_mudrez: 0,
	Pearl_info: 0,
	Cer: 0,
	Choice_light: 0,
	Mage_sympathy: 0,

	// Огненная земля - путешествие
	M_Alia: 0,
	Gelios: 0,
	White: 0,

	//
	Evil_time: 0,
	Melinoa: 0,
	Melinoa_gold: 0,
	Chronomer: 0,
	//


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
	Art_knife: 0,
	Art_starlight: 0,

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
	Art_knife_available: 0,
	Art_starlight_available: 0,

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
	ending_7_opened: 0,
	ending_8_opened: 0,
	ending_9_opened: 0,
	

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
							operators.Art_starlight_available = 1;
							operators.Art_book_available = 1;
							// изменяем операторы
							return "plot_1-3"
						}
					},
					"2": {
						"text": {"ru": "...","en": "..."},
						"next": function(operators) {
							// изменяем операторы
							operators.Art_starlight_available = 1;
							operators.Art_book_available = 1;
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
					"ru": "Они могут понижаться и повышаться. Не позволяй им достигать минимума или максимума.",
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
					"ru": "Солнечный диск поднимается над горизонтом. Что уготовил день грядущий?",
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
				"title": text.CHARACTER_4, "img": 4,
				"text": {
					"ru": "А... Добрый день, уважаемый. А я все думаю, кто это здесь поселился! В нашем-то городке таких нечасто встретишь... Алхимиков. Пойду расскажу остальным…",
					"en": "- Hello there! \n - General Kenobi..."
				},
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
					"ru": "Приветствую! Уже освоились в нашем городке? Надеюсь, вместе мы придем к процветанию. Если будет что-нибудь подозрительное - обязательно сообщите.",
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
					"ru": "Город Сант-Марим расположился на берегу спокойного моря. Пожалуй, это то место, которое вы и искали… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				
				
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) { return "plot_4-0-star" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) { return "plot_4-0-star" }
					}
				}
			},
			"plot_4-0-star": {
				"title": {"ru": "Новый этап", "en": "..."},
				"text": {
					"ru": "Небесная ось делает оборот. В небе воссияло созвездие Единорога. (контрольная точка)",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"img": 172,
				"save_point": "chapter_1",
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							// изменяем операторы
							return "plot_4-0"
						}
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							// изменяем операторы
							return "plot_4-0"
						}
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
						"text": {"ru": "Звучит заманчиво", "en": "..." },
						"next": function(operators) {
							operators.Art_phoenix_available = 1;
							operators.character_7_opened = 1;
							operators.D++;
							return "plot_4-8-1" }
					},
					"2": {
						"text": {"ru": "Буду иметь в виду", "en": "..."},
						"next": function(operators) {
							operators.Art_phoenix_available = 1;
							operators.character_7_opened =1
							return "plot_4-8-1" }
					}
				}
			},
			"plot_4-8-1": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Ассортимент немного меняется, в зависимости от текущего созвездия... Но самое необходмое всегда на месте.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Очень хорошо", "en": "..." },
						"next": function(operators) {
							operators.character_7_opened =1 
							operators.D++;
							return "plot_4-8" }
					},
					"2": {
						"text": {"ru": "Хм...", "en": "..."},
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
							//operators.Art_stormglass_available = 1;
							graph_core.open_shop();
							return "plot_4-9" }
					},
					"2": {
						"text": {"ru": "Не сегодня", "en": "..."},
						"next": function(operators) {
							//operators.Art_stormglass_available = 1;
							return "plot_4-9" }
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
						"text": { "ru": "Да (+10)", "en": "..." },
						// здесь при нажатии на этот вариант ответа происходит не переход на другую карточку, а показ рекламы (либо другое действие может быть)
						"next": function(operators) {
							game_core.data.money += 10;
							graph_core.update_balance();
							return "plot_4-25" }
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
				//"save_point": "plot5",
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
			"plot_4-0-star": {
				"title": {"ru": "Новый этап", "en": "..."},
				"text": {
					"ru": "Небесная ось делает оборот. В небе воссияло созвездие Единорога. (контрольная точка)",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"img": 172,
				"save_point": "chapter_1",
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							// изменяем операторы
							return "plot_4-0"
						}
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							// изменяем операторы
							return "plot_4-0"
						}
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
						"next": function(operators) {
							game_core.data.money += 20;
							graph_core.update_balance();  
							return "plot_5-5" }
						//"next": function(operators) { return "show_rewarded_ad;plot_5-5" }
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
							operators.U = 1;
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
						"text": { "ru": "Все хорошо!", "en": "..." },
						"next": function(operators) { 
							operators.U = 1;
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
					if (operators.U == 1) {
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
						"text": { "ru": "Не стоит. У тебя же дар!", "en": "..." },
						"next": function(operators) { 
							operators.U = 2;
							return "plot_5-26" }
					},
					"2": {
						"text": {"ru": "Да, так будет лучше для всех...", "en": "..."},
						"next": function(operators) { 
							operators.U = 1;
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
						"text": { "ru": "Ну... Типа", "en": "..." },
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
							if (operators.U == 1) {
								return "plot_5_padawan-1"
							}
							if (operators.U == 2) {
								return "plot_5_padawan_m-1"
							}
							if (operators.U == 0) {
								return "plot_5-33" }
						}
					},
					"2": {
						"text": {"ru": "Как интересно…", "en": "..."},
						"next": function(operators) { 
							if (operators.U == 1) {
								return "plot_5_padawan-1"
							}
							if (operators.U == 2) {
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
							operators.Pearl = 1;
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
					if (operators.notgotofest == 1) {
						return "plot_5-56-alter"
					}
					return "plot_5-56"
				}
			},
			"plot_5-56-alter": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Я слышала, вы хотите пропустить Фестиваль... Но почему? Мы так старались. Я так старалась... Идемте.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Просто это не мое", "en": "..." },
						"next": function(operators) { 
							return "plot_5-56-alter-1" }
					},
					"2": {
						"text": {"ru": "Только ради вас", "en": "..."},
						"next": function(operators) {
							return "plot_5-56-alter-2" }
					}
				}
			},
			"plot_5-56-alter-1": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Очень жаль...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Повеселитесь без меня", "en": "..." },
						"next": function(operators) { 
							return "plot_5-56" }
					},
					"2": {
						"text": {"ru": "Мне нужно работать", "en": "..."},
						"next": function(operators) {
							return "plot_5-56" }
					}
				}
			},
			"plot_5-56-alter-2": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Она выбежала из мастерской, смущенная вашими словами. Но разве вы что-то особенное сказали?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "К делам", "en": "..." },
						"next": function(operators) { 
							return "plot_5-56" }
					},
					"2": {
						"text": {"ru": "Понятно...", "en": "..."},
						"next": function(operators) {
							return "plot_5-56" }
					}
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
						"text": { "ru": "Идти на фестиваль", "en": "..." },
						"next": function(operators) { return "plot_6-0" }
					},
					"2": {
						"text": {"ru": "Остаться дома", "en": "..."},
						"next": function(operators) { 
							operators.reputation_stat =- REPUTATION_STAT_DELTA_1
							return "plot_6-0-alter" }
					}
				}
			},
			// Если не идем на Фестиваль
			"plot_6-0-alter": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Посетителей нет - они на фестивале. А вы можете спокойно провести вечер в свое удовольствие.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Наготовить зелий впрок", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Выспаться как следует", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-1-alter": {
				"title": text.CHARACTER_0, "img": 144,
				"text": {
					"ru": "Здравствуй, Айвен.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Я тебя не знаю", "en": "..." },
						"next": function(operators) { return "plot_6-2-alter" }
					},
					"2": {
						"text": {"ru": "Как ты здесь оказалась?", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-3-alter" }
					}
				}
			},
			"plot_6-2-alter": {
				"title": text.CHARACTER_1, "img": 101,
				"text": {
					"ru": "Правда? А теперь? Я думала тебе понравится мой новый облик...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Нет, истинный лучше", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Он понравился...", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 144,
				"text": {
					"ru": "Я совсем ненадолго. Предупредить... Ты скоро встретишься с ним. И встретишься с ними.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "'Он' - это кто?", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "'Они' - это кто?", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 144,
				"text": {
					"ru": "Плененный Демиург, он же - Чародей. ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "'Он' - это кто?", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "'Они' - это кто?", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 144,
				"text": {
					"ru": "Они - ониры, или ожившие кошмары. Целую вечность они служили, но больше не хотят. Они ненавидят Харона.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Почему ненавидят?", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Кто такой Харон?", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 144,
				"text": {
					"ru": "Тот, кто переправляет души мертвых через реку Стикс. Чародей ему должен... А Харон не прощает долги.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Хорошо...", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Причем тут я?", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 144,
				"text": {
					"ru": "Кристалл. Он связывает тебя, Харона и Чародея. Я боюсь, что... именно через тебя Харон попытается добраться до Чародея.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Я не хочу", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Проклятье...", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 144,
				"text": {
					"ru": "Мое время на исходе... Будь осторожен. И еще. Айвен, я давно хотела сказать тебе, что...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Я не хочу", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Проклятье...", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы так и не узнали, что она хотела сказать. В наступившей тишине вы снова остались одни. Как, впрочем, и всегда.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Готовить лекарства", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Побродить по городу", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы так и не узнали, что она хотела сказать. В наступившей тишине вы снова остались одни. Как, впрочем, и всегда.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Готовить лекарства", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Побродить по городу", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 58,
				"text": {
					"ru": "Свежий воздух помог привести мысли в порядок. Вы заметили, что звезды сияют особенно ярко.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Походить еще", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Вернуться домой", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 99,
				"text": {
					"ru": "Ноги сами вывели вас к морю. Шум накатывающих волн успокаивал тревогу в душе, когда вы заметили фигуру в отдалении.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Незаметно подойти", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Идти домой", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 105,
				"text": {
					"ru": "Песок такой холодный. И вода тоже. Кажется, поднялись глубинные течения...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Почему ты здесь?", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Праздник закончился?", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 105,
				"text": {
					"ru": "Я не знаю... Я ушла, потому что ничего меня там не держало. Но зато я встретила прекрасного человека, не так ли?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Проводить ее домой", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Пригласить к себе", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
					}
				}
			},
			"plot_6-3-alter": {
				"title": text.CHARACTER_0, "img": 105,
				"text": {
					"ru": "Она согласилась... и не зря. Вы оба поняли это, проходя мимо темной подворотни.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot6",
				"answers": {
					"1": {
						"text": { "ru": "Идти домой", "en": "..." },
						"next": function(operators) { return "plot_6-1-alter" }
					},
					"2": {
						"text": {"ru": "Пригласить к себе", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-1-alter" }
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
				//"save_point": "plot6",
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
						"text": {"ru": "Что-нибудь веселое", "en": "..."},
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
							operators.Moon_ending = 1;
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
						"next": function(operators) { 
							if (operators.notgotofest == 1) {
								return "plot_6-6-alter"
							}
							return "plot_6-7-" + operators.Dr }
					},
					"2": {
						"text": {"ru": "Уйти подальше", "en": "..."},
						"next": function(operators) { 
							if (operators.notgotofest == 1) {
								return "plot_6-6-alter"
							}
							
							return "plot_6-7-" + operators.Dr }
					}
				}
			},
			"plot_6-6-alter": {
				"title": text.CHARACTER_32, "img": 42,
				"text": {
					"ru": "Я так рада, что вы здесь. Все-таки пришел...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Отличный праздник!", "en": "..." },
						"next": function(operators) { return "plot_6-7-" + operators.Dr }
					},
					"2": {
						"text": {"ru": "Я не мог не прийти", "en": "..."},
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
							if (operators.H == 0) {
								return "plot_6-9-0"
							}
							else if (operators.H == 1) {
								return "plot_6-9-1"
							}
							else if (operators.H == 2) {
								return "plot_6-9-2"
							}
							else if (operators.H == 3) {
								return "plot_6-9-3"
							}
							return "plot_6-9"
							operators.achievement_8_opened = 0; }
					}
				}
			},
			"plot_6-9-0": {
				"title": text.CHARACTER_6, "img": 41,
				"text": {
					"ru": "Слыхали новость? Художник, говорят, за неимением краски... писал картину кровью! Представляете? Умер, бедняга...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Быть не может!", "en": "..." },
						"next": function(operators) { return "plot_6-10" }
					},
					"2": {
						"text": {"ru": "Ох…", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-10" }
					}
				}
			},
			"plot_6-9-1": {
				"title": text.CHARACTER_6, "img": 41,
				"text": {
					"ru": "Слыхали новость? Художник, говорят, за неимением краски... писал картину кровью! Представляете? Хоть бы не умер...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Быть не может!", "en": "..." },
						"next": function(operators) { return "plot_6-10" }
					},
					"2": {
						"text": {"ru": "Ох…", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-10" }
					}
				}
			},
			"plot_6-9-2": {
				"title": text.CHARACTER_6, "img": 41,
				"text": {
					"ru": "Слыхали новость? Художник, говорят, за неимением краски... писал картину кровью! Представляете? Болеет теперь...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Быть не может!", "en": "..." },
						"next": function(operators) { return "plot_6-10" }
					},
					"2": {
						"text": {"ru": "Ох…", "en": "..."},
						"next": function(operators) { 
							
							return "plot_6-10" }
					}
				}
			},
			"plot_6-9-3": {
				"title": text.CHARACTER_11, "img": 56,
				"text": {
					"ru": "Что-то нездоровится... Картина наконец завершена, сохнет сейчас в мастерской…",
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
					"ru": "Ром... Разрази меня гром! Кончился!",
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
							else if (operators.U == 0) {
								return "plot_6-24"
							} 
						}
					},
					"2": {
						"text": {"ru": "Красивые и бездонные...", "en": "..."},
						"next": function(operators) { 
							if (operators.U > 0) {
								return "plot_6-23" 
							}
							else if (operators.U == 0) {
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
						"text": { "ru": "Да, конечно, купи", "en": "..." },
						"next": function(operators) { 
							return "plot_6-24" }
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
							operators.Alia_home = 1; 
							return "plot_6-45" }
					},
					"2": {
						"text": {"ru": "Домооой!", "en": "..."},
						"next": function(operators) { 
							operators.Alia_home = 1;
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
					"ru": "Ты скоро встретишься с ним. И встретишься с ними. И тогда все случится...",
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
				//"save_point": "plot7",
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
							operators.Vedma =+ 1;
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
						"text": { "ru": "Я понял...", "en": "..." },
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
				"title": text.CHARACTER_31, "img": 33,
				"text": {
					"ru": "Я знала, что найду нужного человека. Поторопитесь.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Слушаюсь!", "en": "..." },
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
							operators.power_stat -= 3;

							return "plot_7-9" }
					},
					"2": {
						"text": {"ru": "Мда...", "en": "..."},
						"next": function(operators) { 
							operators.power_stat -= 3;
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
							operators.power_stat -= 3;
							return "plot_7-10" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) { 
							operators.power_stat -= 3;
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
							operators.power_stat -= 3;
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
							operators.power_stat -= 3;
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
							operators.power_stat -= 3;
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
							operators.power_stat -= 3;
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
							operators.power_stat -= 3;
							return "plot_7-13" }
					},
					"2": {
						"text": {"ru": "Потом...", "en": "..."},
						"next": function(operators) { 
							operators.power_stat -= 3;
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
							operators.power_stat -= 3;
							return "plot_7-14" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) { 
							operators.power_stat -= 3;						
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
							operators.power_stat -= 3;
							return "plot_7-15" }
					},
					"2": {
						"text": {"ru": "Зачаровать монетку", "en": "..."},
						"next": function(operators) {
							game_core.data.money += 1;
							graph_core.update_balance();
							operators.power_stat -= 3;
							return "plot_7-15" }
					}
				}
			},
			
			"plot_7-15": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.H == 0) {
						return "plot_7-16-0"
					}
					else if (operators.H == 1) {
						return "plot_7-16-1"
					}
					else if (operators.H == 2) {
						return "plot_7-16-2"
					}
					else if (operators.H == 3) {
						return "plot_7-16"
					}
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
							operators.power_stat -= 3;
							return "plot_7-17" }
					},
					"2": {
						"text": {"ru": "Отлично!", "en": "..."},
						"next": function(operators) { 
							operators.power_stat -= 3;
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

							operators.power_stat -= 3;
							return "plot_7-17-1" }
					},
					"2": {
						"text": {"ru": "Я знаю кто это...", "en": "..."},
						"next": function(operators) { 
							
							operators.power_stat -= 3;
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
							operators.power_stat -= 3;
							return "plot_7-18" }
					},
					"2": {
						"text": {"ru": "Уж поскорее бы!", "en": "..."},
						"next": function(operators) { 
							operators.power_stat -= 3;
							return "plot_7-18" }
					}
				}
			},
			"plot_7-16-0": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Ноги сами принесли вас в дом художника. Где неведомая сила заставила его писать ужасную картину...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= 3;
							return "plot_7-17-0" }
					},
					"2": {
						"text": {"ru": "Странно", "en": "..."},
						"next": function(operators) { 
							operators.power_stat -= 3;
							return "plot_7-17-0" }
					}
				}
			},
			"plot_7-17-0": {
				"title": text.CHARACTER_0, "img": 114,
				"text": {
					"ru": "Картина перед вами.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Кто это?", "en": "..." },
						"next": function(operators) { 

							operators.power_stat -= 3;
							return "plot_7-18" }
					},
					"2": {
						"text": {"ru": "Я знаю кто это...", "en": "..."},
						"next": function(operators) { 
							
							operators.power_stat -= 3;
							return "plot_7-18" }
					}
				}
			},
			"plot_7-16-1": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Ноги сами принесли вас в дом художника. Где неведомая сила заставила его писать ужасную картину...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= 3;
							return "plot_7-17-1" }
					},
					"2": {
						"text": {"ru": "Странно", "en": "..."},
						"next": function(operators) { 
							operators.power_stat -= 3;
							return "plot_7-17-1" }
					}
				}
			},
			"plot_7-17-1": {
				"title": text.CHARACTER_0, "img": 113,
				"text": {
					"ru": "Картина перед вами.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Кто это?", "en": "..." },
						"next": function(operators) { 

							operators.power_stat -= 3;
							return "plot_7-18" }
					},
					"2": {
						"text": {"ru": "Я знаю кто это...", "en": "..."},
						"next": function(operators) { 
							
							operators.power_stat -= 3;
							return "plot_7-18" }
					}
				}
			},
			"plot_7-16-2": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Ноги сами принесли вас в дом художника. Где неведомая сила заставила его писать ужасную картину...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= 3;
							return "plot_7-17-2" }
					},
					"2": {
						"text": {"ru": "Странно", "en": "..."},
						"next": function(operators) { 
							operators.power_stat -= 3;
							return "plot_7-17-2" }
					}
				}
			},
			"plot_7-17-2": {
				"title": text.CHARACTER_0, "img": 112,
				"text": {
					"ru": "Картина перед вами.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Кто это?", "en": "..." },
						"next": function(operators) { 

							operators.power_stat -= 3;
							return "plot_7-18" }
					},
					"2": {
						"text": {"ru": "Я знаю кто это...", "en": "..."},
						"next": function(operators) { 
							
							operators.power_stat -= 3;
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
							operators.power_stat -= 3;
							return "plot_7-21" }
					},
					"2": {
						"text": {"ru": "Ууу... Есть подробности?", "en": "..."},
						"next": function(operators) { 
							operators.power_stat -= 3;
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
							operators.power_stat -= 3;
							return "plot_7-22" }
					},
					"2": {
						"text": {"ru": "Сдать ее", "en": "..."},
						"next": function(operators) { 
							game_core.data.money += 100;
							graph_core.update_balance();
							operators.Emilia_off = 1;
							return "plot_7-21" }
					}
				}
			},
			"plot_7-21": {
				"title": text.CHARACTER_10, "img": 10,
				"text": {
					"ru": "Благодарим за содействие. Вот ваша награда (+100 {coin}).",
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
							operators.Vedma =+ 1;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-23" }

							return "plot_7-23" }
					},
					"2": {
						"text": {"ru": "Не помогать", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_1;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-23" }
							return "plot_7-23" }
					}
				}
			},
			"plot_7-23": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-23" }
					return "plot_7-24"
				}
			},
			"plot_7-24": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.U > 0) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-25" }
						return "plot_7-25"
					}
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-26" }
					return "plot_7-26"
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-26" }						
							return "plot_7-26" }
					},
					"2": {
						"text": {"ru": "Это прах богов!", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-26" }
							return "plot_7-26" }
					}
				}
			},
			"plot_7-26": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-27" }
					return "plot_7-27"
				}
			},
			"plot_7-27": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-28" }
					return "plot_7-28"
				}
			},
			"plot_7-28": {
				"title": text.CHARACTER_40, "img": 178,
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-29" }						
							return "plot_7-29" }
					},
					"2": {
						"text": {"ru": "Не помогать", "en": "..."},
						"next": function(operators) { 
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-30" }
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
							operators.Mage_sympathy = 1;
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-31" }
							return "plot_7-31" }
					},
					"2": {
						"text": {"ru": "Рад тебя видеть!", "en": "..."},
						"next": function(operators) {
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-31" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-31" }
							return "plot_7-31" }
					},
					"2": {
						"text": {"ru": "А если бы я заразился?", "en": "..."},
						"next": function(operators) { 
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-31" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-32" }
							return "plot_7-32" }
					},
					"2": {
						"text": {"ru": "Изменился...", "en": "..."},
						"next": function(operators) { 
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-32" }
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-32" }
					}
				}
			},
			"plot_7-32": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-33-" + operators.Dr }
					return "plot_7-33-" + operators.Dr
				}
			},
			"plot_7-33-0": {
				"desk": "dragon_0",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-34" }
					return "plot_7-34"
				}
			},
			"plot_7-33-1": {
				"desk": "dragon_1",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-34" }
					return "plot_7-34"
				}
			},
			"plot_7-33-2": {
				"desk": "dragon_2",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-34" }
					return "plot_7-34"
				}
			},
			"plot_7-33-3": {
				"desk": "dragon_3",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-34" }
					return "plot_7-34"
				}
			},
			"plot_7-34": {
				"desk": "phoenix",
				"check_condition": function(operators) {
					return operators.Art_phoenix >= 1
				},
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-35" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-36" }
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
							
							return "plot_7-36" }
					},
					"2": {
						"text": {"ru": "Не может быть!", "en": "..."},
						"next": function(operators) { 
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-36" }
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-36" }
					}
				}
			},
			"plot_7-36": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-37" }
					return "plot_7-37"
				}
			},
			"plot_7-37": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-38" }
					return "plot_7-38"
				}
			},
			"plot_7-38": {
				"desk": "pegas",
				"check_condition": function(operators) {
					return operators.P >= 1
				},
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-39" }
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
							operators.Vedma =+ 1;
							if (operators.Vedma == 2) {
								if (operators.Emilia_off == 0) {
									operators.power_stat -= 3; 
									return "plot_7-40-2" }
								return "plot_7-40-2" }
							if (operators.Vedma == 1) {
								if (operators.Emilia_off == 0) {
									operators.power_stat -= 3; 
									return "plot_7-45-2" }
								return "plot_7-45-2" }
							if (operators.Vedma == 0) {
								if (operators.Emilia_off == 0) {
									operators.power_stat -= 3; 
									return "plot_7-45-1" }
								return "plot_7-45-1" }
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-40-2" }
							return "plot_7-40-2" }
					},
					"2": {
						"text": {"ru": "Не помогать", "en": "..."},
						"next": function(operators) { 
							if (operators.Vedma == 2) {
								if (operators.Emilia_off == 0) {
									operators.power_stat -= 3; 
									return "plot_7-45-2" }
								return "plot_7-45-2" }
							if (operators.Vedma == 1) {
								if (operators.Emilia_off == 0) {
									operators.power_stat -= 3; 
									return "plot_7-45-1" }
								return "plot_7-45-1" }
							if (operators.Vedma == 0) {
								if (operators.Emilia_off == 0) {
									operators.power_stat -= 3; 
									return "plot_7-45" }
								return "plot_7-45" }
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-45" }
							return "plot_7-45" }
					}
				}
			},
			"plot_7-40-2": {
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-41" }
							return "plot_7-41" }
					},
					"2": {
						"text": {"ru": "Кто ты?", "en": "..."},
						"next": function(operators) {
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-42" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-43" }
							operators.Cer = 1;
							return "plot_7-43" }
					},
					"2": {
						"text": {"ru": "Тебе лучше уйти", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-44" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-43" }
							operators.Cer = 1;
							return "plot_7-43" }
					},
					"2": {
						"text": {"ru": "Тебе лучше уйти", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-44" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-46" }
							return "plot_7-46" }
					},
					"2": {
						"text": {"ru": "Вернуться к делам", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-46" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-46" }
							return "plot_7-46" }
					},
					"2": {
						"text": {"ru": "Вернуться к делам", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-46" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-46" }
							return "plot_7-46" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-46" }
							return "plot_7-46" }
					}
				}
			},
			"plot_7-45-2": {
				"title": text.CHARACTER_21, "img": 21,
				"text": {
					"ru": "Ты отказал мне дважды. За это я заберу самое дорогое, что у тебя есть! Но не сейчас, позже…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Нет…", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-46" }
							return "plot_7-46" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-46" }
							return "plot_7-46" }
					}
				}
			},
			"plot_7-45-1": {
				"title": text.CHARACTER_21, "img": 21,
				"text": {
					"ru": "Ты посмел отказать однажды в моей посьбе. За это я заберу самое дорогое, что у тебя есть! Но не сейчас, позже…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Нет…", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-46" }
							return "plot_7-46" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-46" }
							return "plot_7-46" }
					}
				}
			},
			"plot_7-46": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-47" }
					return "plot_7-47"
				}
			},
			"plot_7-47": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-48" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-49" }
							return "plot_7-49" }
					},
					"2": {
						"text": {"ru": "Заняться другими посетителями", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-54" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-50" }
							return "plot_7-50" }
					},
					"2": {
						"text": {"ru": "Я знаю…", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-51" }
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
							operators.Alia = 1;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-53" }
							return "plot_7-53" }
					},
					"2": {
						"text": {"ru": "Время лечит любые раны", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-52" }
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
							operators.Alia = 1;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-53" }
							return "plot_7-53" }
					},
					"2": {
						"text": {"ru": "Время лечит любые раны", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-52" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-54" }
							return "plot_7-54" }
					},
					"2": {
						"text": {"ru": "Отложить дела на время", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-54" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-54" }
							return "plot_7-54" }
					},
					"2": {
						"text": {"ru": "Отложить дела на время", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-54" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-56" }
							return "plot_7-56" }
					},
					"2": {
						"text": {"ru": "И что это значит?", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-55-1" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-56" }
							return "plot_7-56" }
					},
					"2": {
						"text": {"ru": "Не если, а когда!", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-56" }
							return "plot_7-56" }
					}
				}
			},
			"plot_7-56": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-57" }
					return "plot_7-57"
				}
			},
			"plot_7-57": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Alia == 1) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-58" }
						return "plot_7-58"
					}
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-59" }
					return "plot_7-59"
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-58-1" }
							return "plot_7-58-1" }
					},
					"2": {
						"text": {"ru": "Мне некогда!", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-59" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-59" }
							return "plot_7-59" }
					},
					"2": {
						"text": {"ru": "Любоваться Алией", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-59" }
							return "plot_7-59" }
					}
				}
			},
			"plot_7-59": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Cer == 1) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-60" }
						return "plot_7-60" }
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-61" }
					return "plot_7-61"
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-61" }
							return "plot_7-61" }
					},
					"2": {
						"text": {"ru": "Я их не приму", "en": "..."},
						"next": function(operators) { 
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-61" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-61-1" }
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_7-61-1" }
					},
					"2": {
						"text": {"ru": "Посочувствовать", "en": "..."},
						"next": function(operators) {
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-62" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-62" }
							return "plot_7-62" }
					},
					"2": {
						"text": {"ru": "Конечно, лучший", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-62" }
							return "plot_7-62" }
					}
				}
			},
			"plot_7-62": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-63" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-64" }
							return "plot_7-64" }
					},
					"2": {
						"text": {"ru": "В смысле - воровать?", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-64" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-66" }
							return "plot_7-66" }
					},
					"2": {
						"text": {"ru": "Ладно, идем", "en": "..."},
						"next": function(operators) {
							operators.Oranges = 1;
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-65" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-66" }
							return "plot_7-66" }
					},
					"2": {
						"text": {"ru": "Хм...", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-66" }
							return "plot_7-66" }
					}
				}
			},
			"plot_7-66": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Alia == 0) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-67-0" }
						return "plot_7-67-0"
					}
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-67" }
					return "plot_7-67"
				}
			},
			"plot_7-67-0": {
				"title": text.CHARACTER_15, "img": 15,
				"text": {
					"ru": "Эх, Мастер... Нашли сегодня Алию. В море. Не выдержала - отправилась вслед предкам. Упокой, Создатель, ее душу…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О, нет...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-67" }
							return "plot_7-67" }
					},
					"2": {
						"text": {"ru": "Промолчать", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-67" }
							return "plot_7-67" }
					}
				}
			},
			"plot_7-67": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Alia == 1) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-68" }
						return "plot_7-68"
					}
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-70" }
					return "plot_7-70"
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-68-1" }
							return "plot_7-68-1" }
					},
					"2": {
						"text": {"ru": "И так сойдет!", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-69" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-68-1" }
							return "plot_7-68-1" }
					},
					"2": {
						"text": {"ru": "Вернуться к делам", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-69" }
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
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-70" }
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
						"text": { "ru": "Да...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-71" }
							return "plot_7-71" }
					},
					"2": {
						"text": {"ru": "Вернуться к делам", "en": "..."},
						"next": function(operators) {
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-71" }
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-71" }
					}
				}
			},
			"plot_7-71": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-72-" + operators.Dr}
					return "plot_7-72-" + operators.Dr
				}
			},
			"plot_7-72-0": {
				"desk": "dragon_0",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-73" }
					return "plot_7-73"
				}
			},
			"plot_7-72-1": {
				"desk": "dragon_1",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-73" }
					return "plot_7-73"
				}
			},
			"plot_7-72-2": {
				"desk": "dragon_2",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-73" }
					return "plot_7-73"
				}
			},
			"plot_7-72-3": {
				"desk": "dragon_3",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-73" }
					return "plot_7-73"
				}
			},
			"plot_7-73": {
				"desk": "phoenix",
				"check_condition": function(operators) {
					return operators.Art_phoenix >= 1
				},
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-74" }
					return "plot_7-74"
				}
			},
			"plot_7-74": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-75" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-76" }
							return "plot_7-76" }
					},
					"2": {
						"text": {"ru": "Не надо", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-76-1" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-76-1" }
							return "plot_7-76-1" }
					},
					"2": {
						"text": {"ru": "Пусть светятся...", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-76-1" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-77" }
							return "plot_7-77" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-77" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-78-1" }
							return "plot_7-78-1" }
					},
					"2": {
						"text": {"ru": "Ты - автоматон?", "en": "..."},
						"next": function(operators) {
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-78" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-79" }
							return "plot_7-79" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-79" }
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-79" }
					}
				}
			},
			"plot_7-78-1": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "И где же? Да что ты смотришь на меня?! Отдавай, говорю!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-79" }
							return "plot_7-79" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-79" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-80" }
							return "plot_7-80" }
					},
					"2": {
						"text": {"ru": "Отдать банку", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-81" }
							return "plot_7-81" }
					}
				}
			},
			"plot_7-80": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Вот! Сразу бы так! Спасибо,3 друг. И заходи вечерком как-нибудь...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Обязательно!", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-85" }
							return "plot_7-85" }
					},
					"2": {
						"text": {"ru": "У меня работа!", "en": "..."},
						"next": function(operators) {
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-85" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-82" }
							return "plot_7-82" }
					},
					"2": {
						"text": {"ru": "Это не откуп!", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-82" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-81-1" }
							return "plot_7-81-1" }
					},
					"2": {
						"text": {"ru": "Это шедевр!", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-81-1" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-83" }
							return "plot_7-83" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-83" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-83" }
							return "plot_7-85" }
					},
					"2": {
						"text": {"ru": "Пригласить на чай", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-85" }
							return "plot_7-85" }
					}
				}
			},
			"plot_7-85": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Cer == 1) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-86" }
						return "plot_7-86" }
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-88" }
					return "plot_7-88"
				}
			},
			"plot_7-86": {
				"title": text.CHARACTER_21, "img": 21,
				"text": {
					"ru": "Люди вокруг так смотрят на меня… А я ведь им ничего не сделала. Пока что...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Пусть смотрят", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-87" }
							return "plot_7-87" }
					},
					"2": {
						"text": {"ru": "А чего ты хотела?", "en": "..."},
						"next": function(operators) {
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-87" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-88" }
							return "plot_7-88" }
					},
					"2": {
						"text": {"ru": "Нет", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-88" }
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
					if (operators.Alia == 1) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-89" }
						return "plot_7-89"
					}
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-91" }
					return "plot_7-91"
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-90" }
							return "plot_7-90" }
					},
					"2": {
						"text": {"ru": "Лучше классики ничего нет!", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-90" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-91" }
							return "plot_7-91" }
					},
					"2": {
						"text": {"ru": "Продолжать не думать", "en": "..."},
						"next": function(operators) {
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-91" }
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-91" }
					}
				}
			},
			"plot_7-91": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-92" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-93" }
							return "plot_7-93" }
					},
					"2": {
						"text": {"ru": "Как же так!", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-93" }
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
					if (operators.Cer == 1) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-93-V" }
						return "plot_7-93-V"
					}
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-94" }
					return "plot_7-94"
				}
			},
			"plot_7-93-V": {
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-93-V-2" }
							return "plot_7-93-V-2" }
					},
					"2": {
						"text": {"ru": "У меня работа", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-94" }
							return "plot_7-94" }
					}
				}
			},
			"plot_7-93-V-2": {
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-94" }
							return "plot_7-94" }
					},
					"2": {
						"text": {"ru": "Пора возвращаться", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-94" }
							return "plot_7-94" }
					}
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-95" }
							return "plot_7-95" }
					},
					"2": {
						"text": {"ru": "Не отвратит?", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-95" }
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
							if (operators.Alia == 1) {
								if (operators.Emilia_off == 0) {
									operators.power_stat -= 3; 
									return "plot_7-96" }
								return "plot_7-96"
							}
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-97-" + operators.Dr }
							return "plot_7-97-" + operators.Dr }
					},
					"2": {
						"text": {"ru": "Тебе виднее...", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 1) {
								if (operators.Emilia_off == 0) {
									operators.power_stat -= 3; 
									return "plot_7-96" }
								return "plot_7-96"
							}
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-97-" + operators.Dr }
							return "plot_7-97-" + operators.Dr }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-97-" + operators.Dr }
							return "plot_7-97-" + operators.Dr }
					},
					"2": {
						"text": {"ru": "Брусничный с кардамоном", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-97-" + operators.Dr }
							return "plot_7-97-" + operators.Dr }
					}
				}
			},
			"plot_7-97-0": {
				"desk": "dragon_0",
				"next": function(operators) {
					if (operators.Oranges == 1) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-98" }
						return "plot_7-98"
					}
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-100-1" }
					return "plot_7-100-1"
				}
			},
			"plot_7-97-1": {
				"desk": "dragon_1",
				"next": function(operators) {
					if (operators.Oranges == 1) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-98" }
						return "plot_7-98"
					}
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-100-1" }
					return "plot_7-100-1"
				}
			},
			"plot_7-97-2": {
				"desk": "dragon_2",
				"next": function(operators) {
					if (operators.Oranges == 1) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-98" }
						return "plot_7-98"
					}
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-100-1" }
					return "plot_7-100-1"
				}
			},
			"plot_7-97-3": {
				"desk": "dragon_3",
				"next": function(operators) {
					if (operators.Oranges == 1) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-98" }
						return "plot_7-98"
					}
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-100-1" }
					return "plot_7-100-1"
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-99" }
							return "plot_7-99" }
					},
					"2": {
						"text": {"ru": "И что?!", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-99" }
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-100-1" }
							return "plot_7-100-1" }
					},
					"2": {
						"text": {"ru": "Подарить", "en": "..."},
						"next": function(operators) { 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-100-1" }
							return "plot_7-100-1" }
					}
				}
			},
			"plot_7-100-1": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Alia == 1) {
						if (operators.Emilia_off == 0) {
							operators.power_stat -= 3; 
							return "plot_7-100" }
						return "plot_7-100"
					}
					if (operators.Emilia_off == 0) {
						operators.power_stat -= 3; 
						return "plot_7-101" }
					return "plot_7-101"
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
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-101" }
							return "plot_7-101" }
					},
					"2": {
						"text": {"ru": "Платье? Да, купи... (20 лунных монет)", "en": "..."},
						"next": function(operators) {
							operators.Dress = 1;
							game_core.data.money -= 20;
							graph_core.update_balance();
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Emilia_off == 0) {
								operators.power_stat -= 3; 
								return "plot_7-101" }
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
						"text": {"ru": "Ну наконец-то!", "en": "..."},
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
							game_core.data.money += 250;
							graph_core.update_balance(); 
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
							return "plot_7-110-1" }
					}
				}
			},
			"plot_7-110-1": {
				"title": text.CHARACTER_21, "img": 125,
				"text": {
					"ru": "Прошу тебя... Этот раз не такой, как прошлый. Это очень, очень важно. Пойдем...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ладно...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_7-110" }
					},
					"2": {
						"text": {"ru": "Нет, уходи", "en": "..."},
						"next": function(operators) {
							
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-111-1" }
					}
				}
			},
			"plot_7-110": {
				"title": text.CHARACTER_0, "img": 92,
				"text": {
					"ru": "Вы увидели лес глазами ведьмы. Все вокруг казалось необыкновенным…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что-то не так...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_7-110-1" }
					},
					"2": {
						"text": {"ru": "Пора возвращаться", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-110-1" }
					}
				}
			},
			"plot_7-110-1": {
				"title": text.CHARACTER_0, "img": 92,
				"text": {
					"ru": "Звуки ритуальных барабанов приближались. Но вы старались убедить себя, что все в порядке.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Продолжать идти", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_7-110-3" }
					},
					"2": {
						"text": {"ru": "Бежать!", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-110-2" }
					}
				}
			},
			"plot_7-110-2": {
				"title": text.CHARACTER_0, "img": 92,
				"text": {
					"ru": "…но вы не могли. Должно быть, ведьма заколдовала вас!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Проклятье!", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_7-110-3" }
					},
					"2": {
						"text": {"ru": "Продолжать идти", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-110-3" }
					}
				}
			},
			"plot_7-110-3": {
				"title": text.CHARACTER_0, "img": 92,
				"text": {
					"ru": "Вы оказались на поляне у костра. И множество людей в масках уже ждали вашего прибытия.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_7-110-4" }
					},
					"2": {
						"text": {"ru": "Пустите! Смерть культистам!", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-110-4" }
					}
				}
			},
			"plot_7-110-4": {
				"title": text.CHARACTER_0, "img": 92,
				"text": {
					"ru": "Они связали вас и долго пели на непонятном языке, и она вместе с ними… пока не сверкнуло золотое лезвие.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Мда...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_7-110-5" }
					},
					"2": {
						"text": {"ru": "Ну, серьезно...", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-110-5" }
					}
				}
			},
			"plot_7-110-5": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Вы снова были здесь.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_7-110-6" }
					},
					"2": {
						"text": {"ru": "Проклятье...", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-110-6" }
					}
				}
			},
			"plot_7-110-6": {
				"title": text.CHARACTER_0, "img": 34,
				"text": {
					"ru": "И он тоже был здесь.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ну, спасай", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_7-110-7" }
					},
					"2": {
						"text": {"ru": "Рад тебя видеть...", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-110-7" }
					}
				}
			},
			"plot_7-110-7": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы не знали что и думать. Она… предала вас?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да! Такая же, как все они!", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_7-111-1" }
					},
					"2": {
						"text": {"ru": "Нет... Есть какая-то причина...", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-111-1" }
					}
				}
			},
			"plot_7-111-1": {
				"desk": "rand7",
				"next": function(operators) {
					if (operators.Alia == 1) {
						return "plot_7-111"
					}
					return "plot_7-127"
				}
			},
			"plot_7-111": {
				"title": text.CHARACTER_17, "img": 17,
				"text": {
					"ru": "Вишь, срам какой развели! В мое время такого не было…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О чем это вы?", "en": "..." },
						"next": function(operators) { 
							if (operators.Dress > 0) {
								return "plot_7-112-1" 
							}
							else if (operators.Dress == 0) {
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
							else if (operators.Dress == 0) {
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
							else if (operators.Dress == 0) {
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
							else if (operators.Dress == 0) {
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
							else if (operators.Dress == 0) {
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
							else if (operators.Dress == 0) {
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
							operators.Alia = operators.Alia + operators.Dress + 1;
							return "plot_7-115" }
					},
					"2": {
						"text": {"ru": "Ей не о чем волноваться", "en": "..."},
						"next": function(operators) {
							if (operators.Dress > 0) {
								return "plot_7-116-1" 
							}
							else if (operators.Dress == 0) {
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
							else if (operators.Dress == 0) {
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
							else if (operators.Dress == 0) {
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
							
							return "plot_7-117-2" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_7-117-2" }
					}
				}
			},
			"plot_7-117-2": {
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
			"plot_7-127": {
				"title": text.CHARACTER_41, "img": 127,
				"text": {
					"ru": "Вы гуляли по пляжу, слушая шум набегающих на берег волн...",
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
				//"save_point": "plot8",
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.Alia > 1) {
								return "plot_8-1"
							}
							else if (operators.Alia == 0) {
								return "plot_8-0-1"
							}
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_8-2" }
					},
					"2": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.Alia > 1) {
								return "plot_8-1"
							}
							else if (operators.Alia == 0) {
								return "plot_8-0-1"
							}
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_8-2" }
				}
			},
			},
			"plot_8-0-1": {
				"title": text.CHARACTER_15, "img": 15,
				"text": {
					"ru": "Мастер… Мастер, там. ..Она! Спасите нас!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Она?", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_8-1-1" }
					},
					"2": {
						"text": {"ru": "Только не это...", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-2" }
					}
				}
			},
			"plot_8-0-1": {
				"title": text.CHARACTER_15, "img": 15,
				"text": {
					"ru": "Да! Да... Русалка… она приходит по ночам. К вам она тоже придёт. Помяниие мое слово!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Мда...", "en": "..." },
						"next": function(operators) { 
							operators.power_stat -= POWER_STAT_DELTA_0;
							operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
							
							return "plot_8-1-1" }
					},
					"2": {
						"text": {"ru": "Надеюсь, вы ошибаетесь...", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-2" }
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
							operators.Choice_light = 1;
							return "plot_8-3" }
					},
					"2": {
						"text": {"ru": "Справедливости", "en": "..."},
						"next": function(operators) {
							operators.Choice_light = 0;
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
				"desk": "rand8",
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
							
							return "plot_8-14" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-14" }
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
							
							return "plot_8-12" }
					},
					"2": {
						"text": {"ru": "Не трогать", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-14" }
					}
				}
			},
			"plot_8-12": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вся ночь ушла на рисование. Это был путь к одному магическому месту… Но нужен <i class='red'>огненный кристалл</i>, чтобы карта ожила.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Он у вас есть...", "en": "..." },
						"next": function(operators) {
							if (operators.Art_crystal == 1) {
								return "plot_8-13"
							}
							graph_core.open_shop();
							return "plot_8-12" }
					},
					"2": {
						"text": {"ru": "Его нет", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-14" }
					}
				}
			},
			"plot_8-13": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Карта преобразилась. Путь проложен и вы не простите себе, если не отправитесь на поиски… Когда придет время.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "К насущным делам", "en": "..." },
						"next": function(operators) {
							return "plot_8-14" }
					},
					"2": {
						"text": {"ru": "Отдохнуть немного", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-14" }
					}
				}
			},
			"plot_8-14": {
				"title": text.CHARACTER_0, "img": 31,
				"text": {
					"ru": "Внезапно свет вокруг потускнел, вас обдало потусторонним холодом. Оно снова было здесь…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-15" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-15" }
					}
				}
			},
			"plot_8-15": {
				"title": text.CHARACTER_2, "img": 131,
				"text": {
					"ru": "Существо: …",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Этого не может быть...", "en": "..." },
						"next": function(operators) {
							return "plot_8-16" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-16" }
					}
				}
			},
			"plot_8-16": {
				"title": text.CHARACTER_0, "img": 31,
				"text": {
					"ru": "Вы хотели бежать, но не могли сдвинуться с места. Оно подошло и вцепилось в вашу руку до боли.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-17" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-17" }
					}
				}
			},
			"plot_8-17": {
				"title": text.CHARACTER_0, "img": 131,
				"text": {
					"ru": "Тебе не скрыться. Мы идем за тобой, создатель философского камня!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ааа!", "en": "..." },
						"next": function(operators) {
							return "plot_8-18" }
					},
					"2": {
						"text": {"ru": "Пусти мою руку! Демон!", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-18" }
					}
				}
			},
			"plot_8-18": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Видение исчезло...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Осмотреть руку", "en": "..." },
						"next": function(operators) {
							return "plot_8-19" }
					},
					"2": {
						"text": {"ru": "Отдышаться", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-19" }
					}
				}
			},
			"plot_8-19": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы бросили взгляд на руку... с ней было что-то не так. Вас только что... прокляли?! Это повлияет на ваше здоровье.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "К делам...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-20" }
					},
					"2": {
						"text": {"ru": "Ох...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-20" }
					}
				}
			},
			"plot_8-20": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.Cer == 1) {
						return "plot_8-21"
					}
					return "plot_8-21"
				}
			},
			"plot_8-21": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы часто думали о ней. Гнали от себя эти мысли, и вновь к ним возвращались.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Проклятье!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							if (operators.Pearl == 1) {
								return "plot_8-21-A"
							}
							return "plot_8-24" }
					},
					"2": {
						"text": {"ru": "Любопытно...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-24" }
					}
				}
			},
			"plot_8-21-A": {
				"title": text.CHARACTER_14, "img": 14,
				"text": {
					"ru": "Один мой товарищ, мой большой друг, он ювелир. Такое вытворяет! Диво!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Доверить жемчужину", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							operators.Pearl = 2;
							return "plot_8-22-A" }
					},
					"2": {
						"text": {"ru": "Продать ему жемчужину", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-23-A" }
					}
				}
			},
			"plot_8-23-A": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Кажется, вы стали очень богаты...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-24" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-24" }
					}
				}
			},
			"plot_8-22-A": {
				"title": text.CHARACTER_14, "img": 14,
				"text": {
					"ru": "О! Вещица то драгоценная… Но не бойся, Мастер. Мой друг своё дело знает…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Это отлично!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-24" }
					},
					"2": {
						"text": {"ru": "Буду ждать шедевр", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-24" }
					}
				}
			},
			"plot_8-24": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.Alia == 2) {
						return "plot_8-24-A"
					}
					else if (operators.Alia == 3) {
						return "plot_8-24-AA"
					}
					return "plot_8-25"
				}
			},
			"plot_8-24-A": {
				"title": text.CHARACTER_14, "img": 13,
				"text": {
					"ru": "Cкоро твой день рождения... я хочу сделать сюрприз.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О, правда?", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-25" }
					},
					"2": {
						"text": {"ru": "Спасибо...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-25" }
					}
				}
			},
			"plot_8-24-AA": {
				"title": text.CHARACTER_14, "img": 35,
				"text": {
					"ru": "Cкоро твой день рождения... я хочу сделать сюрприз.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О, правда?", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-25" }
					},
					"2": {
						"text": {"ru": "Спасибо...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-25" }
					}
				}
			},
			"plot_8-25": {
				"desk": "pegas",
				"check_condition": function(operators) {
					return operators.P >= 1
				},
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-26"
				}
			},
			"plot_8-26": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-27"
				}
			},
			"plot_8-27": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-28"
				}
			},
			"plot_8-28": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "В том месте, где вас схватили за руку чудовище, появились блестящие коросты… Это же кристаллы кварца!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ааа!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-29" }
					},
					"2": {
						"text": {"ru": "Мда…", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-29" }
					}
				}
			},
			"plot_8-28": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Используя свое умение, вы попытались соскрести кристаллы скальпелем, потом растворить... Но все было тщетно. Придется носить перчатки...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Завтра снова попробуете!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-29" }
					},
					"2": {
						"text": {"ru": "Зато красиво...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-29" }
					}
				}
			},
			"plot_8-29": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Видал старичка? Вроде как мудрец…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Не верю я в них", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-30-" + operators.Dr}
					},
					"2": {
						"text": {"ru": "Поскорее бы увидеть!", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-30-" + operators.Dr}
					}
				}
			},
			"plot_8-30-0": {
				"desk": "dragon_0",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-31"
				}
			},
			"plot_8-30-1": {
				"desk": "dragon_1",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-31"
				}
			},
			"plot_8-30-2": {
				"desk": "dragon_2",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-31"
				}
			},
			"plot_8-30-3": {
				"desk": "dragon_3",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-31"
				}
			},
			"plot_8-31": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-32"
				}
			},
			"plot_8-32": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Наконец мудрец оказался и у вас на пороге. Неслышно ступая, он приблизился к вам.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Здравстуйте...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-33" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-33" }
					}
				}
			},
			"plot_8-33": {
				"title": text.CHARACTER_50, "img": 145,
				"text": {
					"ru": "Я вижу мысли людей... И могу сказать, о чем думает дорогой вам человек... если таковой имеется.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да, я хочу (20 монет)", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							game_core.data.money -= 20;
							graph_core.update_balance();
							if (operators.Alia == 2) {
								return "plot_8-33-A"
							}
							else if (operators.Alia == 3) {
								return "plot_8-33-A"
							}
							else if (operators.Vedma == 1) {
								return "plot_8-33-V"
							}
							else if (operators.U == 1) {
								return "plot_8-33-U"
							}
							else if (operators.U == 2) {
								return "plot_8-33-U"
							} 
							return "plot_8-33-0"
						}
					},
					"2": {
						"text": { "ru": "Нет", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-34-" + operators.Dr
							}
						}
					}
				},
			
			"plot_8-33-0": {
				"title": text.CHARACTER_50, "img": 145,
				"text": {
					"ru": "Гхм... Кажется, в твоем сердце есть место только для тебя одного. Это путь к вершине... или в бездну.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я запомню", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-34-" + operators.Dr }
					},
					"2": {
						"text": {"ru": "Вы точно мудрец?", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-34-" + operators.Dr}
					}
				}
			},
			"plot_8-33-A": {
				"title": text.CHARACTER_50, "img": 145,
				"text": {
					"ru": "Она боится потерять тебя. Боится, что ты никогда не будешь ее любить так, как она тебя... ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Еще что-нибудь? (5 монет)", "en": "..." },
						"next": function(operators) {
							game_core.data.money -= 5;
							graph_core.update_balance();
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							operators.Alia_mudrez = 1;
							return "plot_8-33-AA" }
					},
					"2": {
						"text": {"ru": "Ясно...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-34-" + operators.Dr}
					}
				}
			},
			"plot_8-33-AA": {
				"title": text.CHARACTER_50, "img": 145,
				"text": {
					"ru": "Она приготовила яд, который примет, если с тобой что-то случится.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Достаточно...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-34-" + operators.Dr }
					},
					"2": {
						"text": {"ru": "Надо было с этого начать!", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-34-" + operators.Dr }
					}
				}
			},
			"plot_8-33-V": {
				"title": text.CHARACTER_50, "img": 145,
				"text": {
					"ru": "Она боится, что ониры заставят её совершить нечто ужасное. То, что она не сможет уже пережить…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Еще что-нибудь? (5 монет)", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-33-VV" }
					},
					"2": {
						"text": {"ru": "Ясно...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-34-" + operators.Dr}
					}
				}
			},
			"plot_8-33-VV": {
				"title": text.CHARACTER_50, "img": 145,
				"text": {
					"ru": "Она ищет жемчужину. Только она снова сделает ее свободной...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Достаточно...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-34-" + operators.Dr }
					},
					"2": {
						"text": {"ru": "Надо было с этого начать!", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-34-" + operators.Dr }
					}
				}
			},
			"plot_8-34-0": {
				"desk": "dragon_0",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-35"
				}
			},
			"plot_8-34-1": {
				"desk": "dragon_1",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-35"
				}
			},
			"plot_8-34-2": {
				"desk": "dragon_2",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-35"
				}
			},
			"plot_8-34-3": {
				"desk": "dragon_3",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-35"
				}
			},
			"plot_8-35": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.Alia_mudrez == 1) {
						return "plot_8-35-2"
					}
					return "plot_8-35-1"
				}
			},
			"plot_8-35-1": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.Alia == 0) {
						return "plot_8-36-A"
					}
					else if (operators.Alia == 2) {
						return "plot_8-37-A"
					}
					else if (operators.Alia == 3) {
						return "plot_8-37-AA"
					}
					return "plot_8-36"
				}
			},
			"plot_8-36-A": {
				"title": text.CHARACTER_45, "img": 36,
				"text": {
					"ru": "...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Алия?", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-36-A-1" }
					},
					"2": {
						"text": {"ru": "Ох...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-36-A-1" }
					}
				}
			},
			"plot_8-36-A-1": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Она ушла, но в её глазах была такая боль, тоска… Вы знаете, что будете видеть теперь по ночам в кошмарах.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Вернуться к делам", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					},
					"2": {
						"text": {"ru": "Пойти к лунному торговцу", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38-1" }
					}
				}
			},
			"plot_8-38-1": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Это был ее выбор... Не стоит брать всю вину на себя. Идем, выпьем...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ага...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					},
					"2": {
						"text": {"ru": "Я лучше к себе...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					}
				}
			},
			"plot_8-37-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Я часто думаю о нём... О том, как мы запускали змеев или он привозил мне диковинные игрушки. Я скучаю...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Всё будет хорошо!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					},
					"2": {
						"text": {"ru": "Это пройдет...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					}
				}
			},
			"plot_8-37-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Я часто думаю о нём... О том, как мы запускали змеев или он привозил мне диковинные игрушки. Я скучаю...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Всё будет хорошо!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					},
					"2": {
						"text": {"ru": "Это пройдет...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					}
				}
			},
			"plot_8-35-2": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.Alia == 0) {
						return "plot_8-36-A"
					}
					else if (operators.Alia == 2) {
						return "plot_8-37-A-1"
					}
					else if (operators.Alia == 3) {
						return "plot_8-37-AA-1"
					}
					return "plot_8-36"
				}
			},
			"plot_8-37-A-1": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Я часто думаю о нём... О том, как мы запускали змеев или он привозил мне диковинные игрушки. Я скучаю...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Всё будет хорошо!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					},
					"2": {
						"text": {"ru": "Это правда? Про яд?", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					}
				}
			},
			"plot_8-37-AA-1": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Я часто думаю о нём... О том, как мы запускали змеев или он привозил мне диковинные игрушки. Я скучаю...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Всё будет хорошо!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					},
					"2": {
						"text": {"ru": "Это правда? Про яд?", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38-" }
					}
				}
			},
			"plot_8-37-A-1": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Я часто думаю о нём... О том, как мы запускали змеев или он привозил мне диковинные игрушки. Я скучаю...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Всё будет хорошо!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					},
					"2": {
						"text": {"ru": "Это правда? Про яд?", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38-A" }
					}
				}
			},
			"plot_8-37-AA-1": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Я часто думаю о нём... О том, как мы запускали змеев или он привозил мне диковинные игрушки. Я скучаю...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Всё будет хорошо!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					},
					"2": {
						"text": {"ru": "Это правда? Про яд?", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38-AA" }
					}
				}
			},
			"plot_8-38-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Да. Я... Я знала, что ты узнаешь. Ты сердишься? Прошу тебя, не надо...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Всё будет хорошо!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38-AAA" }
					},
					"2": {
						"text": {"ru": "Как ты могла?!", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38-AAA" }
					}
				}
			},
			"plot_8-38-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Да. Я... Я знала, что ты узнаешь. Ты сердишься? Прошу тебя, не надо...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Всё будет хорошо!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38-AAA" }
					},
					"2": {
						"text": {"ru": "Как ты могла?!", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38-AAA" }
					}
				}
			},
			"plot_8-38-AAA": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Она плакала и умоляла простить ее. А вы убедились, что мудрец говорил правду - никто никогда вас так не любил...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "К делам", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					},
					"2": {
						"text": {"ru": "Провести вечер с ней", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-38" }
					}
				}
			},
			"plot_8-38": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.Pearl == 2) {
						return "plot_8-39-1"
					}
					return "plot_8-40"
				}
			},
			"plot_8-39-1": {
				"title": text.CHARACTER_14, "img": 14,
				"text": {
					"ru": "А вот и результат кропотливой работы! Вот, что значит мастер своего дела…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да, так и есть...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-39-2" }
					},
					"2": {
						"text": {"ru": "Рассмотреть", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-39-2" }
					}
				}
			},
			"plot_8-39-2": {
				"title": text.CHARACTER_0, "img": 115,
				"text": {
					"ru": "Вы взяли украшение в руки и от его красоты у вас будто перехватило дыхание.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Это шедевр!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-40" }
					},
					"2": {
						"text": {"ru": "Потрясающе…", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-40" }
					}
				}
			},
			"plot_8-40": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "У меня была когда-то музыкальная шкатулка. За столько веков я не забыл её. Где же она сейчас...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-41" }
					},
					"2": {
						"text": {"ru": "Потерялась, должно быть", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-41" }
					}
				}
			},
			"plot_8-41": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-42"
				}
			},
			"plot_8-42": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы заметили, что с рукой все хуже… Проклятие подрывает ваше здоровье.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Будем лечить…", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-44" }
					},
					"2": {
						"text": {"ru": "Нужно больше овощей", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-44" }
					}
				}
			},
			"plot_8-44": {
				"title": text.CHARACTER_6, "img": 6,
				"text": {
					"ru": "О, вы теперь в перчатках? Да, как и полагается джентельмену, хе-хе.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": {"ru": "Спрятать руки за спину", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_8-44-A"
							}
							else if (operators.Alia == 3) {
								return "plot_8-44-AA"
							}
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-45" }
					},
					"2": {
						"text": {"ru": "А как же!", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_8-44-A"
							}
							else if (operators.Alia == 3) {
								return "plot_8-44-AA"
							}
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-45" }
					}
				}
			},
			"plot_8-44-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Я знаю, что ты что-то скрываешь от меня... Расскажи мне, прошу.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Рассказать", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-44-A-1" }
					},
					"2": {
						"text": {"ru": "Соврать", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-44-A-2" }
					}
				}
			},
			"plot_8-44-A-1": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Я буду с тобой, что бы ни случилось... Мы обязательно что-нибудь придумаем...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Обязательно!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-45" }
					},
					"2": {
						"text": {"ru": "Спасибо...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-45" }
					}
				}
			},
			"plot_8-44-A-2": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Айвен, как ты смеешь мне врать! Неужели ты думал, я не пойму этого?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Извини, любимая!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-44-A-3" }
					},
					"2": {
						"text": {"ru": "Врать еще больше", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-44-A-3" }
					}
				}
			},
			"plot_8-44-A-3": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Ты невыносим! Я всё равно узнаю!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-45" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-45" }
					}
				}
			},
			"plot_8-44-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Я знаю, что ты что-то скрываешь от меня... Расскажи мне, прошу.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Рассказать", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-44-AA-1" }
					},
					"2": {
						"text": {"ru": "Соврать", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-44-AA-2" }
					}
				}
			},
			"plot_8-44-AA-1": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Я буду с тобой, что бы ни случилось... Мы обязательно что-нибудь придумаем...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Обязательно!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-45" }
					},
					"2": {
						"text": {"ru": "Спасибо...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-45" }
					}
				}
			},
			"plot_8-44-AA-2": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Айвен, как ты смеешь мне врать! Неужели ты думал, я не пойму этого?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Извини, любимая!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-44-AA-3" }
					},
					"2": {
						"text": {"ru": "Врать еще больше", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-44-AA-3" }
					}
				}
			},
			"plot_8-44-AA-3": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Ты невыносим! Я всё равно узнаю!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-45" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-45" }
					}
				}
			},
			"plot_8-45": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.Vor == 0) {
						return "plot_8-46-1"
					}
					return "plot_8-46"
				}
			},
			"plot_8-46-1": {
				"title": text.CHARACTER_17, "img": 17,
				"text": {
					"ru": "Вы видели это? Вора повесили на главной площади… Да уж. Страхолюдство какое!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Так ему, преступнику!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-46" }
					},
					"2": {
						"text": {"ru": "Ох...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-46" }
					}
				}
			},
			"plot_8-46": {
				"desk": "pegas",
				"check_condition": function(operators) {
					return operators.P >= 1
				},
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-47"
				}
			},
			"plot_8-47": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.Cer == 1) {
						return "plot_8-47-V"
					}
					return "plot_8-48"
				}
			},
			"plot_8-47-V": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы вдруг отложили все дела и замерли. Сердцем вы знали, что она здесь.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-47-V-1" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-47-V-1" }
					}
				}
			},
			"plot_8-47-V-1": {
				"title": text.CHARACTER_21, "img": 21,
				"text": {
					"ru": "Они бы убили меня... Я не могла поступить иначе. Я знала, что ты не умрешь... Прости меня...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Пошла вон!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-47-V-2" }
					},
					"2": {
						"text": {"ru": "Могла бы предупредить...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-47-V-2" }
					}
				}
			},
			"plot_8-47-V-2": {
				"title": text.CHARACTER_21, "img": 21,
				"text": {
					"ru": "Она ушла, и вы даже не знали раскаивается ли она. На душе было невыносимо.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Она не хотела...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-48" }
					},
					"2": {
						"text": {"ru": "Ужасная женщина!", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-48" }
					}
				}
			},

			"plot_8-48": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-49"
				}
			},
			"plot_8-49": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Мне больно видеть твои страдания. Позволь мне коснуться тебя.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-50" }
					},
					"2": {
						"text": {"ru": "Нет", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							if (operators.U > 0) {
								return "plot_8-51"
							}
							return "plot_8-52" }
					}
				}
			},
			"plot_8-50": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы почувствовали как недуг отступает...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ох...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							if (operators.U > 0) {
								return "plot_8-51"
							}
							return "plot_8-52" }
					},
					"2": {
						"text": {"ru": "Спасибо ему...", "en": "..."},
						"next": function(operators) {
							if (operators.U > 0) {
								return "plot_8-51"
							}
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-52" }
					}
				}
			},
			"plot_8-51": {
				"title": text.CHARACTER_0, "img": 18,
				"text": {
					"ru": "Я сочинил стишок. Городничий любит есть, так что в дверь уж не пролезть...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Это ужасно!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							operators.Art_book_available = 1;
							return "plot_8-52" }
					},
					"2": {
						"text": {"ru": "Ахаха", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							operators.Art_book_available = 1;
							return "plot_8-52" }
					}
				}
			},
			"plot_8-52": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Гляди, что откопал! <i class='green'>Книгу заклинаний</i>! Уж и покупатель нашелся... Но я решил сначала тебе предложить. Вдруг надо?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Конечно надо!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							if (operators.Art_book == 1) {
								return "plot_8-53"
							}
							graph_core.open_shop();
							return "plot_8-52" }
					},
					"2": {
						"text": {"ru": "Спасибо, конечно, но нет", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-56" }
					}
				}
			},
			"plot_8-53": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Книга заклинаний... Кажется, ее автором изначально значился какой-то древний египетский жрец, чей труд переписывался много-много раз.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Любопытно...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							if (operators.U == 2) {
								return "plot_8-54"
							}
							return "plot_8-55" }
					},
					"2": {
						"text": {"ru": "Вернуться к ней позже", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							if (operators.U == 2) {
								return "plot_8-54"
							}
							return "plot_8-55" }
					}
				}
			},
			"plot_8-54": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Я тут книгу полистал... Теперь смогу всякие фокусы показывать. И это только начало...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Это прекрасно!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							operators.U = 3;
							return "plot_8-56" }
					},
					"2": {
						"text": {"ru": "Потом покажешь", "en": "..."},
						"next": function(operators) {
							operators.U = 3;
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-56" }
					}
				}
			},
			"plot_8-55": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы перелистываете страницы книги. Это кажется скучным и бесполезным...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Мда...", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-56" }
					},
					"2": {
						"text": {"ru": "Потом почитаете", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-56" }
					}
				}
			},
			"plot_8-56": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.Alia == 2) {
						return "plot_8-56-A" }
					else if (operators.Alia == 3) {
						return "plot_8-56-AA" }
					return "plot_8-57"
				}
			},
			"plot_8-56-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Этот плащ из крыла дракона. Я его как увидела, сразу про тебя подумала. Ну-ка, примерь.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Спасибо тебе", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-57" }
					},
					"2": {
						"text": {"ru": "Мне не нравится", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-57" }
					}
				}
			},
			"plot_8-56-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Этот плащ из крыла дракона. Я его как увидела, сразу про тебя подумала. Ну-ка, примерь.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Спасибо тебе", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-57" }
					},
					"2": {
						"text": {"ru": "Мне не нравится", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-57" }
					}
				}
			},
			"plot_8-57": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-58"
				}
			},
			"plot_8-58": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.Cer == 1) {
						return "plot_8-59" }
					return "plot_8-71"
				}
			},
			"plot_8-59": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы думали о ней. Вы получили письмо, в котором она раскаивалась, и просила прощение. А также просила быть в полночь у моря.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Иду!", "en": "..." },
						"next": function(operators) {

							return "plot_8-60" }
					},
					"2": {
						"text": {"ru": "Да черта с два!", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-60" }
					}
				}
			},
			"plot_8-60": {
				"title": text.CHARACTER_0, "img": 99,
				"text": {
					"ru": "В назначенный час вы стояли у пирса. Она уже была там. Взволнованная и решительная.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-61" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-61" }
					}
				}
			},
			"plot_8-61": {
				"title": text.CHARACTER_21, "img": 135,
				"text": {
					"ru": "Моё имя Керидвен. Мы, ведьмы, никогда никому не говорим своё настоящее имя. Кроме тех, кому вверяем свою жизнь...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ох...", "en": "..." },
						"next": function(operators) {
							return "plot_8-62" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-62" }
					}
				}
			},
			"plot_8-62": {
				"title": text.CHARACTER_0, "img": 99,
				"text": {
					"ru": "Это было признание. Она прижалась к вам, и вы обняли её... но перед глазами все еще плясали огни ритуальных костров.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-63" }
					},
					"2": {
						"text": {"ru": "Проклятье...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-63" }
					}
				}
			},
			"plot_8-63": {
				"title": text.CHARACTER_46, "img": 135,
				"text": {
					"ru": "Ты прощаешь меня, Айвен?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да...", "en": "..." },
						"next": function(operators) {
							operators.Cer = 2;
							if (operators.Pearl == 2) {
								return "plot_8-66-V"
							}
							return "plot_8-66" }
					},
					"2": {
						"text": {"ru": "Нет!", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-64" }
					}
				}
			},
			"plot_8-64": {
				"title": text.CHARACTER_46, "img": 135,
				"text": {
					"ru": "Вероятно, я это заслужила… Но раз так, я не буду больше обременять твою жизнь…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Стой!", "en": "..." },
						"next": function(operators) {
							return "plot_8-65" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-65" }
					}
				}
			},
			"plot_8-65": {
				"title": text.CHARACTER_0, "img": 99,
				"text": {
					"ru": "Она исчезла в море. Ваша любимая морская ведьма, ваша Керидвен…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							operators.Cer = 0;
							return "plot_8-71" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.Cer = 0;
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-71" }
					}
				}
			},
			"plot_8-66": {
				"title": text.CHARACTER_46, "img": 135,
				"text": {
					"ru": "Я знаю, что не заслуживаю... Ничего из того, что ты уже для меня сделал. И все же я люблю тебя больше, чем могу выразить словами...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Обнять", "en": "..." },
						"next": function(operators) {
							return "plot_8-67" }
					},
					"2": {
						"text": {"ru": "Поцеловать", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-67" }
					}
				}
			},
			"plot_8-67": {
				"title": text.CHARACTER_0, "img": 99,
				"text": {
					"ru": "Этот вечер вы провели вдвоем. И вы оба знали, что отныне вы всегда будете вместе...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							operators.Cer = 2;
							return "plot_8-71" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.Cer = 2;
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-71" }
					}
				}
			},
			"plot_8-66-V": {
				"title": text.CHARACTER_46, "img": 135,
				"text": {
					"ru": "Я знаю, что не заслуживаю... Ничего из того, что ты уже для меня сделал. И все же я люблю тебя больше, чем могу выразить словами...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Обнять", "en": "..." },
						"next": function(operators) {
							return "plot_8-67-V" }
					},
					"2": {
						"text": {"ru": "Поцеловать", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-67-V" }
					}
				}
			},
			"plot_8-67-V": {
				"title": text.CHARACTER_46, "img": 99,
				"text": {
					"ru": "Вы подумали, что, наверное, момент настал. И подарили ей то, что уже и так принадлежало когда-то ей - жемчужину.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Вложить в ладонь", "en": "..." },
						"next": function(operators) {
							return "plot_8-68-V" }
					},
					"2": {
						"text": {"ru": "Надеть на шею", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-68-V" }
					}
				}
			},
			"plot_8-68-V": {
				"title": text.CHARACTER_46, "img": 99,
				"text": {
					"ru": "Она вздрогнула, а затем отошла, закрыв лицо руками. Кажется, она плакала и кажется очень стеснялась этого.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Керидвен?", "en": "..." },
						"next": function(operators) {
							if (operators.Pearl_info == 1) {
								return "plot_8-69-V-1"
							}
							return "plot_8-69-V" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							if (operators.Pearl_info == 1) {
								return "plot_8-69-V-1"
							}
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-69-V" }
					}
				}
			},
			"plot_8-69-V": {
				"title": text.CHARACTER_46, "img": 135,
				"text": {
					"ru": "Прости… это так глупо, знаю… Я ведь должна радоваться. Ведь теперь я свободна.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Свободна?", "en": "..." },
						"next": function(operators) {
							return "plot_8-70-V" }
					},
					"2": {
						"text": {"ru": "Теперь?", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-70-V" }
					}
				}
			},
			"plot_8-69-V-1": {
				"title": text.CHARACTER_46, "img": 135,
				"text": {
					"ru": "Прости… это так глупо, знаю… Я ведь должна радоваться. Ведь теперь я свободна.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я знаю...", "en": "..." },
						"next": function(operators) {
							return "plot_8-67" }
					},
					"2": {
						"text": {"ru": "Все будет хорошо...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-67" }
					}
				}
			},
			"plot_8-69-V-2": {
				"title": text.CHARACTER_46, "img": 135,
				"text": {
					"ru": "Прости… это так глупо, знаю… Я ведь должна радоваться. Ведь теперь я свободна.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я знаю...", "en": "..." },
						"next": function(operators) {
							return "plot_8-67" }
					},
					"2": {
						"text": {"ru": "Все будет хорошо...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-67" }
					}
				}
			},
			"plot_8-70-V": {
				"title": text.CHARACTER_46, "img": 135,
				"text": {
					"ru": "Это своего рода залог. Пока жемчужина на суше, мы все еще колдуньи… Но стоит другим завладеть ею, как мы себе больше не принадлежим.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Это и случилось?", "en": "..." },
						"next": function(operators) {
							return "plot_8-71-V-1" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-71-V-2" }
					}
				}
			},
			"plot_8-71-V-1": {
				"title": text.CHARACTER_46, "img": 135,
				"text": {
					"ru": "Да. Я думала она у них… Но, видно, они её тоже потеряли…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я так счастлив...", "en": "..." },
						"next": function(operators) {
							return "plot_8-67" }
					},
					"2": {
						"text": {"ru": "О, ясно...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-67" }
					}
				}
			},
			"plot_8-71-V-2": {
				"title": text.CHARACTER_46, "img": 135,
				"text": {
					"ru": "Я думала она у них… Но, видно, они её тоже потеряли…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я так счастлив...", "en": "..." },
						"next": function(operators) {
							return "plot_8-67" }
					},
					"2": {
						"text": {"ru": "О, ясно...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-67" }
					}
				}
			},
			"plot_8-71": {
				"desk": "rand8",
				"next": function(operators) {
					if (operators.Alia == 2) {
						return "plot_8-72-A"
					}
					else if (operators.Alia == 3) {
						return "plot_8-72-AA"
					}
					operators.hp_stat -= HEALTH_STAT_DELTA_3;

					return "plot_8-75"
				}
			},
			"plot_8-72-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Ты знаешь, кто такие светочи? Это звезды. И светоч, упав, однажды снова вернется на небо, в своё созвездие. И скоро это случится, со мной…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что?", "en": "..." },
						"next": function(operators) {
							return "plot_8-73-A" }
					},
					"2": {
						"text": {"ru": "Ты - светоч", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-73-A" }
					}
				}
			},
			"plot_8-73-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Вы встали и взяли её за руки. Золотое мерцание… было полной противоположностью вашему проклятию. И вы поняли, что…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Избавите её от него", "en": "..." },
						"next": function(operators) {
							return "plot_8-74-A-1" }
					},
					"2": {
						"text": {"ru": "Оно - её часть", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-74-A-2" }
					}
				}
			},
			"plot_8-74-A-1": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Весь вечер вы вместе искали решение. И нашли его… В кристалл будет заключена её звёздная природа.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-74-A-3" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-74-A-3" }
					}
				}
			},
			"plot_8-74-A-2": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Весь вечер вы вместе искали решение. И нашли его… Особый эликсир подавит, но не искоренит ее звёздную природу.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-74-A-3" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-74-A-3" }
					}
				}
			},
			"plot_8-74-A-3": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Я думала, ты не поверишь… Многие видели во мне сказочницу, и отец тоже… Айвен…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да?", "en": "..." },
						"next": function(operators) {
							return "plot_8-74-A-4" }
					},
					"2": {
						"text": {"ru": "Алия?", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-74-A-4" }
					}
				}
			},
			"plot_8-74-A-4": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Спасибо.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-75" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-75" }
					}
				}
			},
			"plot_8-72-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Ты знаешь, кто такие светочи? Это звезды. И светоч, упав, однажды снова вернется на небо, в своё созвездие. И скоро это случится, со мной…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что?", "en": "..." },
						"next": function(operators) {
							return "plot_8-73-AA" }
					},
					"2": {
						"text": {"ru": "Ты - светоч", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-73-AA" }
					}
				}
			},
			"plot_8-73-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Вы встали и взяли её за руки. Золотое мерцание… было полной противоположностью вашему проклятию. И вы поняли, что…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Избавите её от него", "en": "..." },
						"next": function(operators) {
							return "plot_8-74-AA-1" }
					},
					"2": {
						"text": {"ru": "Оно - её часть", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-74-AA-2" }
					}
				}
			},
			"plot_8-74-AA-1": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Весь вечер вы вместе искали решение. И нашли его… В кристалл будет заключена её звёздная природа.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-74-AA-3" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-74-AA-3" }
					}
				}
			},
			"plot_8-74-AA-2": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Весь вечер вы вместе искали решение. И нашли его… Особый эликсир подавит, но не искоренит ее звёздную природу.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-74-AA-3" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-74-AA-3" }
					}
				}
			},
			"plot_8-74-AA-3": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Я думала, ты не поверишь… Многие видели во мне сказочницу, и отец тоже… Айвен…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да?", "en": "..." },
						"next": function(operators) {
							return "plot_8-74-AA-4" }
					},
					"2": {
						"text": {"ru": "Алия?", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-74-AA-4" }
					}
				}
			},
			"plot_8-74-AA-4": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Спасибо.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-75" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-75" }
					}
				}
			},
			"plot_8-75": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.Cer == 2) {
						return "plot_8-75-V" }
					return "plot_8-76-" + operators.Dr
				}
			},
			"plot_8-75-V": {
				"title": text.CHARACTER_46, "img": 21,
				"text": {
					"ru": "Айвен... Я хочу, чтобы у тебя было что-нибудь, что напоминало бы обо мне… Вот, возьми.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что это?", "en": "..." },
						"next": function(operators) {
							return "plot_8-75-V-1" }
					},
					"2": {
						"text": {"ru": "Ох...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-75-V-1" }
					}
				}
			},
			"plot_8-75-V-1": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Она протянула вам шёлковую ленту цвета моря. Должно быть, это не просто вещь…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Cпасибо…", "en": "..." },
						"next": function(operators) {
							return "plot_8-76-" + operators.Dr }
					},
					"2": {
						"text": {"ru": "Обнять её", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-76-" + operators.Dr }
					}
				}
			},
			"plot_8-76-0": {
				"desk": "dragon_0",
				"next": function(operators) {
					return "plot_8-77"
				}
			},
			"plot_8-76-1": {
				"desk": "dragon_1",
				"next": function(operators) {
					return "plot_8-77"
				}
			},
			"plot_8-76-2": {
				"desk": "dragon_2",
				"next": function(operators) {
					return "plot_8-77"
				}
			},
			"plot_8-76-3": {
				"desk": "dragon_3",
				"next": function(operators) {
					return "plot_8-77"
				}
			},
			"plot_8-77": {
				"title": text.CHARACTER_50, "img": 145,
				"text": {
					"ru": "Кристалл сияет в извечной пустоте... Любой философский камень - это его проекция. Так ли, дитя?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да. В целом.", "en": "..." },
						"next": function(operators) {
							return "plot_8-81" }
					},
					"2": {
						"text": {"ru": "Я сейчас объясню...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-78" }
					}
				}
			},

			"plot_8-78": {
				"title": text.CHARACTER_0, "img": 121,
				"text": {
					"ru": "За чашкой чая вы рассказали о том, что некогда чародей показал вам путь к бессмертию...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-79" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-79" }
					}
				}
			},
		"plot_8-79": {
				"title": text.CHARACTER_0, "img": 121,
				"text": {
					"ru": "...и что через проекцию можно начертать свое имя, и пока будет цел кристалл - вы не умрете вовек.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-80" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-80" }
					}
				}
			},
			"plot_8-80": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "...Кажется вы знаете причину своего проклятия. И потусторонняя хтонь тут не при чем...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-81" }
					},
					"2": {
						"text": {"ru": "Ну вот и все...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-81" }
					}
				}
			},
			"plot_8-81": {
				"title": text.CHARACTER_50, "img": 145,
				"text": {
					"ru": "Тебе нужно найти этот кристалл. Твоя болезнь напрямую связана с ним. Твое имя более не начертано...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Спасибо", "en": "..." },
						"next": function(operators) {
							return "plot_8-82" }
					},
					"2": {
						"text": {"ru": "Я догадываюсь...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-82" }
					}
				}
			},
			"plot_8-82": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы видите, что странная болезнь прогрессирует. Кто-то оставил вам ночью полынный отвар…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Пить", "en": "..." },
						"next": function(operators) {
							return "plot_8-82-1" }
					},
					"2": {
						"text": {"ru": "Не пить", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-83" }
					}
				}
			},
			"plot_8-82-1": {
				"title": text.CHARACTER_0, "img": 78,
				"text": {
					"ru": "После полынного отвара болит голова, но с рукой, кажется, только хуже…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Гадость", "en": "..." },
						"next": function(operators) {
							return "plot_8-83" }
					},
					"2": {
						"text": {"ru": "Буэ...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-83" }
					}
				}
			},
			"plot_8-83": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-84"
				}
			},
			"plot_8-84": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-85"
				}
			},
			"plot_8-85": {
				"desk": "rand8",
				"next": function(operators) {
					if (operators.Alia == 2) {
						return "plot_8-86-A"
					}
					else if (operators.Alia == 3) {
						return "plot_8-86-AA"
					}
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-87"
				}
			},
			"plot_8-86-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Я кое-что вычитала в древних книгах. Рецепт один... Я попробую его повторить.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Так это была твоя полынь?!", "en": "..." },
						"next": function(operators) {
							return "plot_8-86-A-1" }
					},
					"2": {
						"text": {"ru": "Спасибо, солнце", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-87" }
					}
				}
			},
			"plot_8-86-A-1": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Что? О чем это ты?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Так, ни о чем...", "en": "..." },
						"next": function(operators) {
							return "plot_8-87" }
					},
					"2": {
						"text": {"ru": "Хм...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-87" }
					}
				}
			},
			"plot_8-86-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Я кое-что вычитала в древних книгах. Рецепт один... Я попробую его повторить.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Так это была твоя полынь?!", "en": "..." },
						"next": function(operators) {
							return "plot_8-86-AA-1" }
					},
					"2": {
						"text": {"ru": "Спасибо, солнце", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-87" }
					}
				}
			},
			"plot_8-86-AA-1": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Что? О чем это ты?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Так, ни о чем...", "en": "..." },
						"next": function(operators) {
							return "plot_8-87" }
					},
					"2": {
						"text": {"ru": "Хм...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-87" }
					}
				}
			},
			"plot_8-87": {
				"title": text.CHARACTER_50, "img": 145,
				"text": {
					"ru": "Аура всякого человека уникальна, и избранные способны узреть ее оттенок...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да...", "en": "..." },
						"next": function(operators) {
							return "plot_8-88" }
					},
					"2": {
						"text": {"ru": "Я не избранный...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-88" }
					}
				}
			},
			"plot_8-88": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.U > 1) {
						return "plot_8-89-U" }
					return "plot_8-90"
				}
			},
			"plot_8-89-U": {
				"title": text.CHARACTER_5, "img": 5,
				"text": {
					"ru": "Там вы видели? Вы только видели?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что видел?", "en": "..." },
						"next": function(operators) {
							return "plot_8-89-U-1" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-89-U-1" }
					}
				}
			},
			"plot_8-89-U-1": {
				"title": text.CHARACTER_6, "img": 6,
				"text": {
					"ru": "Это уже выходит за всякие рамки! Мой дом осквернен непристойным надписями!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да ладно!", "en": "..." },
						"next": function(operators) {
							return "plot_8-89-U-2" }
					},
					"2": {
						"text": {"ru": "Очень вам сочувствую", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-89-U-2" }
					}
				}
			},
			"plot_8-89-U-2": {
				"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": "Да, это сделал я и не стесняюсь этого. Этот пузырь на самом деле вурдалак. И именно это я донес до всех сегодня...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я накажу за такое!", "en": "..." },
						"next": function(operators) {
							return "plot_8-90" }
					},
					"2": {
						"text": {"ru": "Он? Серьезно? Хм...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-90" }
					}
				}
			},
			"plot_8-90": {
				"title": text.CHARACTER_2, "img": 131,
				"text": {
					"ru": "Все случится в полночь.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что?", "en": "..." },
						"next": function(operators) {
							return "plot_8-91" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-91" }
					}
				}
			},

			"plot_8-91": {
				"title": text.CHARACTER_4, "img": 4,
				"text": {
					"ru": "Я говорю, зелье от головной боли не продадите?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да, конечно…", "en": "..." },
						"next": function(operators) {
							return "plot_8-92" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-92" }
					}
				}
			},
			"plot_8-92": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "У меня нет друзей, кроме тебя. Зато много врагов. Их всех надо раздавить, как клопов.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Не надо", "en": "..." },
						"next": function(operators) {
							if (operators.Cer == 2) {
								return "plot_8-92-V" }
							return "plot_8-93" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.Cer == 2) {
								return "plot_8-92-V" }
							return "plot_8-93" }
					}
				}
			},
			"plot_8-92-V": {
				"title": text.CHARACTER_32, "img": 125,
				"text": {
					"ru": "Дай мне руку…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-92-V-1" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-92-V-1" }
					}
				}
			},
			"plot_8-92-V-1": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы сделали, как она просила. И в вашей руке вдруг оказался золотой цветок. Вы ощутили заметное облегчение...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Спасибо...", "en": "..." },
						"next": function(operators) {
							return "plot_8-93" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-93" }
					}
				}
			},
			"plot_8-93": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Так тебя прокляли... Хм. Я, кажется, знаю что это. Кристалл, тот самый… Нечто ужасное коснулось его, а поскольку вы связаны…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что теперь делать?", "en": "..." },
						"next": function(operators) {
							return "plot_8-94" }
					},
					"2": {
						"text": {"ru": "Ты поможешь?", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-94" }
					}
				}
			},
			"plot_8-94": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Найти кристалл и выяснить, что случилось? Без компаса это непросто кстати. И я не могу тебе его отдать.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Но почему?!", "en": "..." },
						"next": function(operators) {
							if (operators.Mage_sympathy == 1) {
								return "plot_8-94-1" }
							return "plot_8-94-2" }
					},
					"2": {
						"text": {"ru": "Я понял...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-95" }
					}
				}
			},
			"plot_8-94-1": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Я не могу отдать тебе компас, потому что моя жизнь зависит от него. Заключена в нем.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ясно", "en": "..." },
						"next": function(operators) {
							return "plot_8-95" }
					},
					"2": {
						"text": {"ru": "Жаль", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-95" }
					}
				}
			},
			"plot_8-94-2": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Я не могу отдать тебе компас, потому что...ты этого не заслужил!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Кажется, он запомнил...", "en": "..." },
						"next": function(operators) {
							return "plot_8-95" }
					},
					"2": {
						"text": {"ru": "Мда...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-95" }
					}
				}
			},
			"plot_8-95": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-96"
				}
			},
			"plot_8-96": {
				"title": text.CHARACTER_3, "img": 3,
				"text": {
					"ru": "Хотите я вам расскажу большую тайну?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хочу!", "en": "..." },
						"next": function(operators) {
							return "plot_8-97" }
					},
					"2": {
						"text": {"ru": "Не очень", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-102-" + operators.Dr }
					}
				}
			},
			"plot_8-97": {
				"title": text.CHARACTER_3, "img": 3,
				"text": {
					"ru": "Мамочка не спит ночами. Она говорит, что ночами под окнами бродит кто-то. Она боится его.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ерунда! Вот раствор пустырника…", "en": "..." },
						"next": function(operators) {
							return "plot_8-102-" + operators.Dr }
					},
					"2": {
						"text": {"ru": "Пойти ночью под окна", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-98" }
					}
				}
			},
			"plot_8-98": {
				"title": text.CHARACTER_0, "img": 58,
				"text": {
					"ru": "Ночью вы были на месте. Вы немного упустили из виду, что сегодня - полнолуние, а потому…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Кто это?", "en": "..." },
						"next": function(operators) {
							return "plot_8-99" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-99" }
					}
				}
			},
			"plot_8-99": {
				"title": text.CHARACTER_52, "img": 158,
				"text": {
					"ru": "Ууу-ууу.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Господин городничий?", "en": "..." },
						"next": function(operators) {
							operators.Art_knife_available = 1;
							return "plot_8-100" }
					},
					"2": {
						"text": {"ru": "Аааа!", "en": "..."},
						"next": function(operators) {
							operators.Art_knife_available = 1;
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-100" }
					}
				}
			},
			"plot_8-100": {
				"title": text.CHARACTER_0, "img": 58,
				"text": {
					"ru": "Существо бросилось на вас. Если бы у вас только был <i class='grey'>серебряный кинжал</i>...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Он у вас есть!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							if (operators.Art_knife == 1) {
								return "plot_8-100-1"
							}
							graph_core.open_shop();
							return "plot_8-100" }
					},
					"2": {
						"text": {"ru": "Его у вас нет", "en": "..."},
						"next": function(operators) {
							 
							operators.hp_stat -= HEALTH_STAT_DELTA_3;
							return "plot_8-100-2" }
					}
				}
			},
			"plot_8-100-1": {
				"title": text.CHARACTER_0, "img": 58,
				"text": {
					"ru": "Вы оказались с чудовищем один на один, и очень скоро перед вами было мёртвое чудовище…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-100-1-1" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-100-1-1" }
					}
				}
			},
			"plot_8-100-2": {
				"title": text.CHARACTER_8, "img": 104,
				"text": {
					"ru": "Получай, гадина!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-100-2-1" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-100-2-1" }
					}
				}
			},
			"plot_8-100-2-1": {
				"title": text.CHARACTER_0, "img": 58,
				"text": {
					"ru": "Ваш друг очень ловко расправился с чудовищем, будто для него это было пустяковое дело. ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-100-2-2" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-100-2-2" }
					}
				}
			},
			"plot_8-100-2-2": {
				"title": text.CHARACTER_8, "img": 104,
				"text": {
					"ru": "О, и ты здесь! Пойдем ко мне… Мне нужно срочно забыться…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Мне тоже…", "en": "..." },
						"next": function(operators) {
							return "plot_8-101" }
					},
					"2": {
						"text": {"ru": "Ага...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-101" }
					}
				}
			},
			"plot_8-100-1-1": {
				"title": text.CHARACTER_8, "img": 104,
				"text": {
					"ru": "Это должен был кто-то сделать. Не ты, так я... Пойдем ко мне, тебе нужно срочно забыться…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я лучше к себе", "en": "..." },
						"next": function(operators) {
							return "plot_8-101" }
					},
					"2": {
						"text": {"ru": "Ага...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-101" }
					}
				}
			},
			"plot_8-101": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Эта ночь вам запомнится надолго…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_8-102-" + operators.Dr }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-102-" + operators.Dr }
					}
				}
			},
			"plot_8-102-0": {
				"desk": "dragon_0",
				"next": function(operators) {
					return "plot_8-103"
				}
			},
			"plot_8-102-1": {
				"desk": "dragon_1",
				"next": function(operators) {
					return "plot_8-103"
				}
			},
			"plot_8-102-2": {
				"desk": "dragon_2",
				"next": function(operators) {
					return "plot_8-103"
				}
			},
			"plot_8-102-3": {
				"desk": "dragon_3",
				"next": function(operators) {
					return "plot_8-103"
				}
			},
			"plot_8-103": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					if (operators.U > 1) {
						return "plot_8-104-U" }
					return "plot_8-105"
				}
			},
			"plot_8-104-U": {
				"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": "Чудовище повержено, и этот толтсяк больше не будет разносить сплетни! А я говорил, что это он...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Кто ж знал!", "en": "..." },
						"next": function(operators) {
							return "plot_8-105" }
					},
					"2": {
						"text": {"ru": "Я тебе верю", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-105" }
					}
				}
			},
			"plot_8-105": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Я был в заточении целую вечность. Обманом меня заманили, предали, унизили... За что?!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Они не знали", "en": "..." },
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_8-106-A" }
							else if (operators.Alia == 3) {
								return "plot_8-106-AA" }
							return "plot_8-107" }
					},
					"2": {
						"text": {"ru": "Отомсти им всем!", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_8-106-A" }
							else if (operators.Alia == 3) {
								return "plot_8-106-AA" }
							return "plot_8-107" }
					}
				}
			},
			"plot_8-106-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Это снова был твой новый друг? Он... Странный. Он пугает меня. Он часто говорит о каком-то конце времён!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Все будет хорошо...", "en": "..." },
						"next": function(operators) {
							return "plot_8-107" }
					},
					"2": {
						"text": {"ru": "Я поговорю с ним", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-107" }
					}
				}
			},
			"plot_8-106-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Это снова был твой новый друг? Он... Странный. Он пугает меня. Он часто говорит о каком-то конце времён!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Все будет хорошо...", "en": "..." },
						"next": function(operators) {
							return "plot_8-107" }
					},
					"2": {
						"text": {"ru": "Я поговорю с ним", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-107" }
					}
				}
			},
			"plot_8-107": {
				"title": text.CHARACTER_17, "img": 17,
				"text": {
					"ru": "Вишь, шо творится!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что творится?", "en": "..." },
						"next": function(operators) {
							return "plot_8-108" }
					},
					"2": {
						"text": {"ru": "Какой ужас!", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-108" }
					}
				}
			},
			"plot_8-108": {
				"title": text.CHARACTER_14, "img": 14,
				"text": {
					"ru": "Странная история… Чтобы он, да ночью, да с серебряным ножом в сердце… Ничего не понимаю!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм...", "en": "..." },
						"next": function(operators) {
							return "plot_8-109" }
					},
					"2": {
						"text": {"ru": "Молчать", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-109" }
					}
				}
			},
			"plot_8-109": {
				"title": text.CHARACTER_5, "img": 5,
				"text": {
					"ru": "Понятно… Что ж, вот чем всегда заканчивается жизнь контрабандиста, а еще 'городничий'...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Очень жаль", "en": "..." },
						"next": function(operators) {
							return "plot_8-110" }
					},
					"2": {
						"text": {"ru": "Ну и хорошо", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-110" }
					}
				}
			},
			"plot_8-110": {
				"desk": "pegas",
				"check_condition": function(operators) {
					return operators.P >= 1
				},
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-111"
				}
			},
			"plot_8-111": {
				"desk": "rand8",
				"next": function(operators) {
					operators.hp_stat -= HEALTH_STAT_DELTA_3;
					return "plot_8-112"
				}
			},
			"plot_8-112": {
				"title": text.CHARACTER_17, "img": 17,
				"text": {
					"ru": "Вишь, заполонили все!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что опять?", "en": "..." },
						"next": function(operators) {
							return "plot_8-113" }
					},
					"2": {
						"text": {"ru": "Эм...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-113" }
					}
				}
			},
			"plot_8-113": {
				"title": text.CHARACTER_16, "img": 16,
				"text": {
					"ru": "Дяденька, спасите кроликов!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что опять?", "en": "..." },
						"next": function(operators) {
							return "plot_8-114" }
					},
					"2": {
						"text": {"ru": "Эм...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-114" }
					}
				}
			},
			"plot_8-114": {
				"title": text.CHARACTER_53, "img": 0,
				"text": {
					"ru": "...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ужас", "en": "..." },
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_8-114-A" }
							else if (operators.Alia == 3) {
								return "plot_8-114-AA" }
							else if (operators.Keridven == 1) {
								return "plot_8-114-K" }
							else if (operators.U > 0) {
								return "plot_8-114-U" }
							return "plot_8-114" }
						
					},
					"2": {
						"text": {"ru": "Хорошенькие", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_8-114-A" }
							else if (operators.Alia == 3) {
								return "plot_8-114-AA" }
							else if (operators.Keridven == 1) {
								return "plot_8-114-K" }
							else if (operators.U > 0) {
								return "plot_8-114-U" }
							return "plot_8-115" }
					}
				}
			},
			"plot_8-114-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Какая прелесть! Они такие милые... Но почему они здесь?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ничего особенного", "en": "..." },
						"next": function(operators) {
							return "plot_8-115" }
					},
					"2": {
						"text": {"ru": "Что-то происходит...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-115" }
					}
				}
			},
			"plot_8-114-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Какая прелесть! Они такие милые... Но почему они здесь?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ничего особенного", "en": "..." },
						"next": function(operators) {
							return "plot_8-115" }
					},
					"2": {
						"text": {"ru": "Что-то происходит...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-115" }
					}
				}
			},
			"plot_8-114-K": {
				"title": text.CHARACTER_46, "img": 125,
				"text": {
					"ru": "Это духи леса, принявшие облик существ, к которым мы будем испытывать жалость... Бедные.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Почему они здесь?", "en": "..." },
						"next": function(operators) {
							return "plot_8-115" }
					},
					"2": {
						"text": {"ru": "Бедные....", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-115" }
					}
				}
			},
			"plot_8-114-U": {
				"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": "Это не кролики.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "А кто?", "en": "..." },
						"next": function(operators) {
							return "plot_8-115" }
					},
					"2": {
						"text": {"ru": "Хм...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_8-115" }
					}
				}
			},
			"plot_8-115": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Это предзнаменование. Встает особая луна... Интересно...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я знаю чего...", "en": "..." },
						"next": function(operators) {
							return "plot_9-1" }
					},
					"2": {
						"text": {"ru": "Хм...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_9-1" }
					}
				}
			},
			"plot_9-1": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Я подумал… И знаешь - зря я так. Бери мой компас. Только не разбей его, ведь тогда я погибну…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot9",
				"answers": {
					"1": {
						"text": { "ru": "Хорошо...", "en": "..." },
						"next": function(operators) {
							return "plot_9-2" }
					},
					"2": {
						"text": {"ru": "О, ясно...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_9-2" }
					}
				}
			},
			"plot_9-2": {
				"desk": "rand8",
				"next": function(operators) {
					return "plot_9-3"
				}
			},
			"plot_9-3": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Сегодня ночью особая луна…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Точно…", "en": "..." },
						"next": function(operators) {
							return "plot_9-4" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_9-4" }
					}
				}
			},
			"plot_9-4": {
				"title": text.CHARACTER_0, "img": 38,
				"text": {
					"ru": "Вы знали, что это значит… Что сегодня вам суждено ступить на тропу междумирья…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_9-5" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_9-5" }
					}
				}
			},
			"plot_9-5": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы сказали всем, что идете в путешествие, но самые близкие знали, что это не совсем так.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_9-6-A" }
							else if (operators.Alia == 3) {
								return "plot_9-6-AA" }
							return "plot_9-6" }
					},
					"2": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_9-6-A" }
							else if (operators.Alia == 3) {
								return "plot_9-6-AA" }
							return "plot_9-6" }
					}
				}
			},
			"plot_9-6-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "О, Айвен… Если бы ты только мог остаться… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я не могу", "en": "..." },
						"next": function(operators) {
							if (operators.M == 1) {
								return "plot_9-6-A"
							}
							return "plot_9-6" }
					},
					"2": {
						"text": {"ru": "Не надо плакать", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.M == 1) {
								return "plot_9-6-A"
							}
							return "plot_9-6" }
					}
				}
			},
			"plot_9-6-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "О, Айвен… Если бы ты только мог остаться… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я не могу", "en": "..." },
						"next": function(operators) {
							if (operators.M == 1) {
								return "plot_9-6-A"
							}
							return "plot_9-6" }
					},
					"2": {
						"text": {"ru": "Не надо плакать", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.M == 1) {
								return "plot_9-6-A"
							}
							return "plot_9-6" }
					}
				}
			},
			"plot_9-6-A": {
				"title": text.CHARACTER_0, "img": 119,
				"text": {
					"ru": "Волшебный медальон... Вы только теперь о нем вспомнили. И, может быть, не зря?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Оставить его Алие", "en": "..." },
						"next": function(operators) {
							operators.M_Alia = 1;
							return "plot_9-6" }
					},
					"2": {
						"text": {"ru": "Взять с собой", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							return "plot_9-6" }
					}
				}
			},
			"plot_9-6": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Ну, старина, в добрый путь! Не забывай нас… А после мы устроим знатную вечеринку!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "А как же!", "en": "..." },
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.U > 0) {
								return "plot_9-7" }
							else if (operators.Keidven == 1) {
								return "plot_9-8" }
							return "plot_9-9-" + operators.Dr  }
					},
					"2": {
						"text": {"ru": "Угу…", "en": "..."},
						"next": function(operators) {
							operators.hp_stat -= HEALTH_STAT_DELTA_0;
							if (operators.U > 0) {
								return "plot_9-7" }
							else if (operators.Keidven == 1) {
								return "plot_9-8" }
							return "plot_9-9-" + operators.Dr  }
					}
				}
			},
			"plot_9-7": {
				"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": "Ты должен взять меня с собой! Я очень полезный!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Это слишком опасно", "en": "..." },
						"next": function(operators) {
								if (operators.Keridven == 1) {
									return "plot_9-8" }

							return "plot_9-9-" + operators.Dr  }
					},
					"2": {
						"text": {"ru": "Это невозможно", "en": "..."},
						"next": function(operators) {
								if (operators.Keridven == 1) {
									return "plot_9-8" }

							return "plot_9-9-" + operators.Dr  }
					}
				}
			},
			"plot_9-8": {
				"title": text.CHARACTER_46, "img": 125,
				"text": {
					"ru": "Да осветит луна твой путь, да ослепит врагов твоих солнце!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Эм…", "en": "..." },
						"next": function(operators) {
							return "plot_9-9-" + operators.Dr  }
					},
					"2": {
						"text": {"ru": "Да будет так… ", "en": "..."},
						"next": function(operators) {
							return "plot_9-9-" + operators.Dr }
					}
				}
			},
			"plot_9-9-0": {
				"title": text.dragon_type_0, "img": 52,
				"text": {
					"ru": "Уруру.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "До скорого, малыш", "en": "..." },
						"next": function(operators) {
							return "plot_9-10" }
					},
					"2": {
						"text": {"ru": "… ", "en": "..."},
						"next": function(operators) {
							return "plot_9-10" }
					}
				}
			},
			"plot_9-9-1": {
				"title": text.dragon_type_1, "img": 54,
				"text": {
					"ru": "Уруру.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "До скорого, малыш", "en": "..." },
						"next": function(operators) {
							return "plot_9-10" }
					},
					"2": {
						"text": {"ru": "… ", "en": "..."},
						"next": function(operators) {
							return "plot_9-10" }
					}
				}
			},
			"plot_9-9-2": {
				"title": text.dragon_type_2, "img": 53,
				"text": {
					"ru": "Уруру.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "До скорого, малыш", "en": "..." },
						"next": function(operators) {
							return "plot_9-10" }
					},
					"2": {
						"text": {"ru": "… ", "en": "..."},
						"next": function(operators) {
							return "plot_9-10" }
					}
				}
			},
			"plot_9-9-3": {
				"title": text.dragon_type_3, "img": 55,
				"text": {
					"ru": "Уруру.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "До скорого, малыш", "en": "..." },
						"next": function(operators) {
							return "plot_9-10" }
					},
					"2": {
						"text": {"ru": "… ", "en": "..."},
						"next": function(operators) {
							return "plot_9-10" }
					}
				}
			},
			"plot_9-10": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Время пришло.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да", "en": "..." },
						"next": function(operators) {
							return "plot_9-11" }
					},
					"2": {
						"text": {"ru": "Нет", "en": "..."},
						"next": function(operators) {
							return "plot_9-11" }
					}
				}
			},
			"plot_9-11": {
				"title": text.CHARACTER_0, "img": 157,
				"text": {
					"ru": "Золотую луну охватило радужное сияние, и вы проговорили слова, которые так часто всплывали у вас в памяти…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_9-12" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_9-12" }
					}
				}
			},
			"plot_9-12": {
				"title": text.CHARACTER_0, "img": 155,
				"text": {
					"ru": "Путь сквозь измерения… Ваше сердце стучало, когда вы ступили на него.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_10-0" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_10-0" }
					}
				}
			},
			"plot_10-0": {
				"title": text.CHARACTER_0, "img": 136,
				"text": {
					"ru": "Огненный чертог.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_10-1" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_10-1" }
					}
				}
			},
			"plot_10-1": {
				"title": text.CHARACTER_0, "img": 137,
				"text": {
					"ru": "Огонь мерцает во мраке, огонь проходит сквозь вас. Каждый шаг даётся тяжело, и занимает по ощущениям целую вечность…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_10-2" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_10-2" }
					}
				}
			},
			"plot_10-2": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-3"
				}
			},
			"plot_10-3": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-4"
				}
			},
			"plot_10-4": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-5"
				}
			},
			"plot_10-5": {
				"title": text.CHARACTER_0, "img": 140,
				"text": {
					"ru": "Золотые кони Гелиоса домчат вас в мгновение ока. За умеренную плату, конечно.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Идти своей дорогой", "en": "..." },
						"next": function(operators) {
							operators.Gelios = 1;
							return "plot_10-6" }
					},
					"2": {
						"text": {"ru": "Согласиться (250 монет)", "en": "..."},
						"next": function(operators) {
							game_core.data.money -= 250;
							graph_core.update_balance();
							return "plot_10-5-1" }
					}
				}
			},
			"plot_10-5-1": {
				"title": text.CHARACTER_0, "img": 138,
				"text": {
					"ru": "Держитесь!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да", "en": "..." },
						"next": function(operators) {
							return "plot_10-25" }
					},
					"2": {
						"text": {"ru": "Держаться", "en": "..."},
						"next": function(operators) {
							return "plot_10-25" }
					}
				}
			},
			"plot_10-6": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-7"
				}
			},
			"plot_10-7": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-8"
				}
			},
			"plot_10-8": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-9"
				}
			},
			"plot_10-9": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-10"
				}
			},
			"plot_10-10": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-11"
				}
			},
			"plot_10-11": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-12"
				}
			},
			"plot_10-12": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-13"
				}
			},
			"plot_10-13": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-14"
				}
			},
			"plot_10-14": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-15"
				}
			},
			"plot_10-15": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-16"
				}
			},
			"plot_10-16": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-17"
				}
			},
			"plot_10-17": {
				"desk": "rand10",
				"next": function(operators) {
					if (operators.White == 0) {
						return "plot_10-18" }
					return "plot_10-23"
				}
			},
			"plot_10-18": {
				"title": text.CHARACTER_55, "img": 139,
				"text": {
					"ru": "Курлык.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Как выйти отсюда?", "en": "..." },
						"next": function(operators) {
							operators.White = 1;
							return "plot_10-18" }
					},
					"2": {
						"text": {"ru": "Курлык", "en": "..."},
						"next": function(operators) {
							return "plot_10-19" }
					}
				}
			},
			"plot_10-19": {
				"title": text.CHARACTER_55, "img": 139,
				"text": {
					"ru": "Кур-кур.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Курлык", "en": "..." },
						"next": function(operators) {
							return "plot_10-18" }
					},
					"2": {
						"text": {"ru": "Кур-кур", "en": "..."},
						"next": function(operators) {
							return "plot_10-20" }
					}
				}
			},
			"plot_10-20": {
				"title": text.CHARACTER_55, "img": 139,
				"text": {
					"ru": "Мяу.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Мяу", "en": "..." },
						"next": function(operators) {
							return "plot_10-21" }
					},
					"2": {
						"text": {"ru": "Курлык", "en": "..."},
						"next": function(operators) {
							return "plot_10-19" }
					}
				}
			},
			"plot_10-21": {
				"title": text.CHARACTER_55, "img": 139,
				"text": {
					"ru": "Выйти отсюда можно только верхом на лошади Гелиоса.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Иначе никак?", "en": "..." },
						"next": function(operators) {
							return "plot_10-22" }
					},
					"2": {
						"text": {"ru": "Понятно…", "en": "..."},
						"next": function(operators) {
							return "plot_10-23" }
					}
				}
			},
			"plot_10-22": {
				"title": text.CHARACTER_55, "img": 139,
				"text": {
					"ru": "Никак. Кур-кур.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Как выйти отсюда?", "en": "..." },
						"next": function(operators) {
							return "plot_10-23" }
					},
					"2": {
						"text": {"ru": "Курлык", "en": "..."},
						"next": function(operators) {
							return "plot_10-23" }
					}
				}
			},
			"plot_10-23": {
				"desk": "rand10",
				"next": function(operators) {
					return "plot_10-23-1"
				}
			},
			"plot_10-23-1": {
				"desk": "rand10",
				"next": function(operators) {
					if (operators.Art_phoenix == 1) {
						return "plot_10-23-2" }
					return "plot_10-24"
				}
			},
			"plot_10-23-2": {
				"title": text.CHARACTER_27, "img": 149,
				"text": {
					"ru": "Курлык.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что ты здесь делаешь?!", "en": "..." },
						"next": function(operators) {
							return "plot_10-23-3" }
					},
					"2": {
						"text": {"ru": "Что?!", "en": "..."},
						"next": function(operators) {
							return "plot_10-23-3" }
					}
				}
			},
			"plot_10-23-3": {
				"title": text.CHARACTER_0, "img": 137,
				"text": {
					"ru": "Вы не сразу заметили письмо, которое он принес. Не долго думая, вы вскрыли конверт.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что там…", "en": "..." },
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_10-23-3-A" }
							else if (operators.Alia == 3) {
								return "plot_10-23-3-AA" }
							else if (operators.Keridven == 1) {
								return "plot_10-23-3-K" }
							else if (operators.U > 0) {
								return "plot_10-23-3-U" }
							return "plot_10-23-3-N" }

					},
					"2": {
						"text": {"ru": "Курлык", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_10-23-3-A" }
							else if (operators.Alia == 3) {
								return "plot_10-23-3-AA" }
							else if (operators.Keridven == 1) {
								return "plot_10-23-3-K" }
							else if (operators.U > 0) {
								return "plot_10-23-3-U" }
							return "plot_10-23-3-N" }
					}
				}
			},
			"plot_10-23-3-A": {
				"title": text.CHARACTER_32, "img": 154,
				"text": {
					"ru": "Милый Айвен, уже месяц как ты в странствиях… Верю, что мои молитвы хранят тебя. Возвращайся скорее… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О, Алия…", "en": "..." },
						"next": function(operators) {
							return "plot_10-24" }
					},
					"2": {
						"text": {"ru": "Спрятать письмо", "en": "..."},
						"next": function(operators) {
							return "plot_10-24" }
					}
				}
			},
			"plot_10-23-3-AA": {
				"title": text.CHARACTER_32, "img": 153,
				"text": {
					"ru": "Милый Айвен, уже месяц как ты в странствиях… Верю, что мои молитвы хранят тебя. Возвращайся скорее… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О, Алия…", "en": "..." },
						"next": function(operators) {
							return "plot_10-24" }
					},
					"2": {
						"text": {"ru": "Спрятать письмо", "en": "..."},
						"next": function(operators) {
							return "plot_10-24" }
					}
				}
			},
			"plot_10-23-3-K": {
				"title": text.CHARACTER_46, "img": 150,
				"text": {
					"ru": "Ты так далеко… Но мои чары всегда с тобой. Как и моя любовь.  ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О, Керидвен…", "en": "..." },
						"next": function(operators) {
							return "plot_10-24" }
					},
					"2": {
						"text": {"ru": "Спрятать письмо", "en": "..."},
						"next": function(operators) {
							return "plot_10-24" }
					}
				}
			},
			"plot_10-23-3-U": {
				"title": text.CHARACTER_18, "img": 152,
				"text": {
					"ru": "Все хорошо. Дракон не шалит. Правда, крысы… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Крысы? Хм…", "en": "..." },
						"next": function(operators) {
							return "plot_10-24" }
					},
					"2": {
						"text": {"ru": "Спрятать письмо", "en": "..."},
						"next": function(operators) {
							return "plot_10-24" }
					}
				}
			},
			"plot_10-23-3-N": {
				"title": text.CHARACTER_9, "img": 151,
				"text": {
					"ru": "Нашел заклинание, чтобы невзгоды междумирья не очень обременяли твое тело. Написал его ниже…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О, это хорошо…", "en": "..." },
						"next": function(operators) {
							return "plot_10-24" }
					},
					"2": {
						"text": {"ru": "Спрятать письмо", "en": "..."},
						"next": function(operators) {
							return "plot_10-24" }
					}
				}
			},
			"plot_10-24": {
				"desk": "rand10",
				"next": function(operators) {
					if (operators.Gelios < 5) {
						return "plot_10-5" }
					return "plot_10-5-55"
				}
			},
			"plot_10-5-55": {
				"title": text.CHARACTER_0, "img": 138,
				"text": {
					"ru": "Гелиос возмущен, что вы уже вечность слоняетесь по его владениям. Он вышвырнул вас, как котенка, грубо схватив за шкирку.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Какое хамство!", "en": "..." },
						"next": function(operators) {
							return "plot_10-25" }
					},
					"2": {
						"text": {"ru": "Кажется, вы на месте", "en": "..."},
						"next": function(operators) {
							return "plot_10-25" }
					}
				}
			},
			"plot_10-25": {
				"title": text.CHARACTER_0, "img": 137,
				"text": {
					"ru": "Вы оказались у стеклянного пика. Отсюда вы наконец увидели, что огненная тропа обрывается, сменяясь пеленой ослепительного тумана. А за ней - царство ночи… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_11-0" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_11-0" }
					}
				}
			},
			"plot_11-0": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Царство ночи. Вы пришли.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Идти", "en": "..." },
						"next": function(operators) {
							return "plot_11-1" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_11-1" }
					}
				}
			},
			"plot_11-1": {
				"title": text.CHARACTER_0, "img": 20,
				"text": {
					"ru": "Вы дошли. Путешествие окончено. Кристалл сияет в извечной пустоте. Тот самый, наградивший вас бессмертием.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Идти", "en": "..." },
						"next": function(operators) {
							return "plot_11-2" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_11-2" }
					}
				}
			},
			"plot_11-2": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Вы обошли его несколько раз. Но вашего имени не было: там, где оно должно было быть - ничего, только обломанные края.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Кто здесь?", "en": "..." },
						"next": function(operators) {
							return "plot_11-3" }
					},
					"2": {
						"text": {"ru": "Обернуться", "en": "..."},
						"next": function(operators) {
							return "plot_11-3" }
					}
				}
			},
			"plot_11-3": {
				"title": text.CHARACTER_47, "img": 26,
				"text": {
					"ru": "А вот и ты! Нелегко было организовать нашу встречу, а? Хорошо же ты помнишь о брате…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что тебе нужно?", "en": "..." },
						"next": function(operators) {
							return "plot_11-4" }
					},
					"2": {
						"text": {"ru": "Ты кто?", "en": "..."},
						"next": function(operators) {
							return "plot_11-3-1" }
					}
				}
			},
			"plot_11-3-1": {
				"title": text.CHARACTER_47, "img": 26,
				"text": {
					"ru": "Ахаха… В смысле «кто»? Твой братишка, конечно! Хм…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_11-4" }
					},
					"2": {
						"text": {"ru": "Ясно…", "en": "..."},
						"next": function(operators) {
							return "plot_11-4" }
					}
				}
			},
			"plot_11-4": {
				"title": text.CHARACTER_47, "img": 26,
				"text": {
					"ru": "Память уже вернулась?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да", "en": "..." },
						"next": function(operators) {
							return "plot_11-5" }
					},
					"2": {
						"text": {"ru": "Нет", "en": "..."},
						"next": function(operators) {
							return "plot_11-6" }
					}
				}
			},
			"plot_11-5": {
				"title": text.CHARACTER_47, "img": 26,
				"text": {
					"ru": "Ты бессмертен, как и я. Но в отличие от меня, ты отдаешься всем радостям жизни на земле. А я тоже хочу повеселиться.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что это значит?", "en": "..." },
						"next": function(operators) {
							return "plot_11-7" }
					},
					"2": {
						"text": {"ru": "Повеселиться?", "en": "..."},
						"next": function(operators) {
							return "plot_11-7" }
					}
				}
			},
			"plot_11-6": {
				"title": text.CHARACTER_47, "img": 26,
				"text": {
					"ru": "Я так и думал. Ты всегда был искуснее и хитрее меня, раз обманывал меня столько лет. Но и я кое-чему научился за эти века…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О чем ты говоришь?", "en": "..." },
						"next": function(operators) {
							return "plot_11-7" }
					},
					"2": {
						"text": {"ru": "Я не понимаю...", "en": "..."},
						"next": function(operators) {
							return "plot_11-7" }
					}
				}
			},
			"plot_11-7": {
				"title": text.CHARACTER_47, "img": 26,
				"text": {
					"ru": "...я создал чудовинку и вложил в неё кристалл вместо сердца. Вот зрелище будет… И тебя призвал! Бинго!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я все еще не понимаю", "en": "..." },
						"next": function(operators) {
							return "plot_11-8" }
					},
					"2": {
						"text": {"ru": "Так что тебе нужно?", "en": "..."},
						"next": function(operators) {
							return "plot_11-9" }
					}
				}
			},
			"plot_11-8": {
				"title": text.CHARACTER_47, "img": 26,
				"text": {
					"ru": "Да полно притворяться! Ты всегда был актёр, но когда ты так перегибаешь палку - это просто смешно.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Где кристалл теперь?", "en": "..." },
						"next": function(operators) {
							return "plot_11-9" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_11-9" }
					}
				}
			},
			"plot_11-9": {
				"title": text.CHARACTER_47, "img": 26,
				"text": {
					"ru": "Я даже не знаю. Как и не знал, что у тебя будут последствия, но вышло же даже ещё лучше! Повидались, а?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что теперь делать?", "en": "..." },
						"next": function(operators) {
							return "plot_11-10" }
					},
					"2": {
						"text": {"ru": "Выругаться", "en": "..."},
						"next": function(operators) {
							return "plot_11-11" }
					}
				}
			},
			"plot_11-10": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Ничего не делать. Это теперь все не важно. Ты останешься здесь, в безвременье. Навеки. А я пойду веселиться.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что? Нет!", "en": "..." },
						"next": function(operators) {
							return "plot_11-11" }
					},
					"2": {
						"text": {"ru": "Проклятье!", "en": "..."},
						"next": function(operators) {
							return "plot_11-12" }
					}
				}
			},
			"plot_11-11": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "О, как грубо! Ничего, здесь ты научишься манерам, в безвременье. У тебя будет целая вечность на это. А я пойду веселиться.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что? Нет!", "en": "..." },
						"next": function(operators) {
							return "plot_11-12" }
					},
					"2": {
						"text": {"ru": "Проклятье...", "en": "..."},
						"next": function(operators) {
							return "plot_11-12" }
					}
				}
			},
			"plot_11-12": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Вы не успели ничего сделать. Он исчез, оставив вас коротать вечность на берегах Стикс.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Мда...", "en": "..." },
						"next": function(operators) {
							return "plot_11-13" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_11-13" }
					}
				}
			},
			"plot_11-13": {
				"title": text.CHARACTER_2, "img": 2,
				"text": {
					"ru": "Время пришло.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Мне-то что с того!", "en": "..." },
						"next": function(operators) {
							return "plot_11-13-1" }
					},
					"2": {
						"text": {"ru": "И?", "en": "..."},
						"next": function(operators) {
							return "plot_11-13-1" }
					}
				}
			},
			"plot_11-13-1": {
				"title": text.CHARACTER_2, "img": 2,
				"text": {
					"ru": "Ты это новый он?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да", "en": "..." },
						"next": function(operators) {
							operators.Evil_time = 1;
							return "plot_11-13-2" }
					},
					"2": {
						"text": {"ru": "Нет", "en": "..."},
						"next": function(operators) {
							return "plot_11-14" }
					}
				}
			},
			"plot_11-13-2": {
				"title": text.CHARACTER_2, "img": 2,
				"text": {
					"ru": "Мы придем, когда он придет. И ты открыл нам врата…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_11-14" }
					},
					"2": {
						"text": {"ru": "Что? Ничего не открывал!", "en": "..."},
						"next": function(operators) {
							return "plot_11-14" }
					}
				}
			},
			"plot_11-14": {
				"desk": "rand11",
				"next": function(operators) {
					return "plot_11-15"
				}
			},
			"plot_11-15": {
				"desk": "rand11",
				"next": function(operators) {
					return "plot_11-16"
				}
			},
			"plot_11-16": {
				"desk": "rand11",
				"next": function(operators) {
					return "plot_11-17"
				}
			},
			"plot_11-17": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Вы бродили по безвременью, кажется, уже целую вечность. Думая о тех, кто остался там, дома…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Дом, милый дом…", "en": "..." },
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_11-17-A" }
							else if (operators.Alia == 3) {
								return "plot_11-17-AA" }
							else if (operators.Keridven == 1) {
								return "plot_11-17-K" }
							return "plot_11-18" }
					},
					"2": {
						"text": {"ru": "Как они…", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_11-17-A" }
							else if (operators.Alia == 3) {
								return "plot_11-17-AA" }
							else if (operators.Keridven == 1) {
								return "plot_11-17-K" }
							return "plot_11-18" }
					}
				}
			},
			"plot_11-17-A": {
				"title": text.CHARACTER_0, "img": 160,
				"text": {
					"ru": "Айвен… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Алия?", "en": "..." },
						"next": function(operators) {
							return "plot_11-18" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_11-18" }
					}
				}
			},
			"plot_11-17-AA": {
				"title": text.CHARACTER_0, "img": 161,
				"text": {
					"ru": "Айвен… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Алия?", "en": "..." },
						"next": function(operators) {
							return "plot_11-18" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_11-18" }
					}
				}
			},
			"plot_11-17-K": {
				"title": text.CHARACTER_0, "img": 159,
				"text": {
					"ru": "Айвен… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Керидвен?", "en": "..." },
						"next": function(operators) {
							return "plot_11-18" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_11-18" }
					}
				}
			},
			"plot_11-18": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Айвен… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_11-19" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_11-19" }
					}
				}
			},
			"plot_11-19": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Айвен!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Обернуться", "en": "..." },
						"next": function(operators) {
							return "plot_11-20" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_11-20" }
					}
				}
			},
			"plot_11-20": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "Ну, до тебя не докричаться… Снова в безвременье?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да...", "en": "..." },
						"next": function(operators) {
							return "plot_11-21" }
					},
					"2": {
						"text": {"ru": "Как и ты!", "en": "..."},
						"next": function(operators) {
							return "plot_11-22" }
					}
				}
			},
			"plot_11-21": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "Я рада тебя видеть... Но лучше бы ты здесь не появлялся.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Почему?", "en": "..." },
						"next": function(operators) {
							return "plot_11-23" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_11-23" }
					}
				}
			},
			"plot_11-22": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "Ха! Это мой дом… И сколько раз это все уже повторялось…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О чем это ты?", "en": "..." },
						"next": function(operators) {
							return "plot_11-23" }
					},
					"2": {
						"text": {"ru": "Хм...", "en": "..."},
						"next": function(operators) {
							return "plot_11-23" }
					}
				}
			},
			"plot_11-23": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "Твоё место не здесь, тебе нужно вернуться.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Как?", "en": "..." },
						"next": function(operators) {
							return "plot_11-26" }
					},
					"2": {
						"text": {"ru": "Ты поможешь?", "en": "..."},
						"next": function(operators) {
							return "plot_11-26" }
					}
				}
			},
			"plot_11-26": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "Где-то здесь, на берегу реки, растет цветок золотых грез...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Золотая ветвь?", "en": "..." },
						"next": function(operators) {
							return "plot_11-26-1" }
					},
					"2": {
						"text": {"ru": "Мне это не поможет...", "en": "..."},
						"next": function(operators) {
							return "plot_11-28" }
					}
				}
			},
			"plot_11-26-1": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "Да. Я тоже поищу ее...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Спасибо. Не то что он!", "en": "..." },
						"next": function(operators) {
							return "plot_11-27" }
					},
					"2": {
						"text": {"ru": "Какой же он подлец!", "en": "..."},
						"next": function(operators) {
							return "plot_11-27" }
					}
				}
			},
			"plot_11-27": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "Он не со зла. Просто твой... фрагмент, скажем так... Он мешал ему построить и оживить зверюшку. Вот он и выбросил его.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Все равно мерзавец", "en": "..." },
						"next": function(operators) {
							return "plot_11-28" }
					},
					"2": {
						"text": {"ru": "Это ничего не меняет", "en": "..."},
						"next": function(operators) {
							return "plot_11-28" }
					}
				}
			},
			"plot_11-28": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Вы злились, но вскоре признали, что Проводница права, и вам придется искать какие-то золотые цветы...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Приступить к поискам", "en": "..." },
						"next": function(operators) {
							return "plot_11-24" }
					},
					"2": {
						"text": {"ru": "У нее вообще есть имя?", "en": "..."},
						"next": function(operators) {
							return "plot_11-25-R" }
					}
				}
			},
			"plot_11-25-R": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Вы вдруг посмотрели на нее. В этот момент она показалась вам очень…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Холодной", "en": "..." },
						"next": function(operators) {
							return "plot_11-24" }
					},
					"2": {
						"text": {"ru": "Красивой", "en": "..."},
						"next": function(operators) {
							if ((operators.Cer + operators.Alia) == 0) {
								return "plot_11-25-R-1"
							}
							return "plot_11-24" }
					}
				}
			},
			"plot_11-25-R-1": {
				"title": text.CHARACTER_2, "img": 2,
				"text": {
					"ru": "Что? Почему ты так смотришь на меня?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Сказать ей", "en": "..." },
						"next": function(operators) {
							return "plot_11-25-R-2" }
					},
					"2": {
						"text": {"ru": "Не говорить", "en": "..."},
						"next": function(operators) {
							return "plot_11-24" }
					}
				}
			},
			"plot_11-25-R-2": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Она молчала, пока вы признавались ей в своих чувствах. И потом молчала тоже…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_11-25-R-3" }
					},
					"2": {
						"text": {"ru": "Что же ты молчишь?", "en": "..."},
						"next": function(operators) {
							return "plot_11-25-R-3" }
					}
				}
			},
			"plot_11-25-R-3": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_11-24" }
					},
					"2": {
						"text": {"ru": "Что же ты молчишь?", "en": "..."},
						"next": function(operators) {
							return "plot_11-24" }
					}
				}
			},
			"plot_11-25-R-3": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "Я...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_11-25-R-4" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_11-25-R-4" }
					}
				}
			},
			"plot_11-25-R-4": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "Мне никто такого не говорил… И я чувствую то же, но…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_11-25-R-5" }
					},
					"2": {
						"text": {"ru": "Но?", "en": "..."},
						"next": function(operators) {
							return "plot_11-25-R-5" }
					}
				}
			},
			"plot_11-25-R-5": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "...тебе нужно возвращаться. Я буду помнить твои слова и сама приду к тебе. Когда придет срок.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_11-25-R-6" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_11-25-R-6" }
					}
				}
			},
			"plot_11-25-R-6": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "...Тогда же вы узнали, что ее имя было Мелиноя. Она была нимфой этого мира... Из которого вам нужно скорее выбираться.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							operators.Melinoa = 1;
							return "plot_11-24" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_11-24" }
					}
				}
			},
			"plot_11-24": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Вы начинаете поиски. Ониры ждут вас... (Соберите 10 осколков)",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_11-24-0" }
					},
					"2": {
						"text": {"ru": "Но?", "en": "..."},
						"next": function(operators) {
							return "plot_11-24-0" }
					}
				}
			},
			"plot_11-24-0": {
				"desk": "rand11",
				"next": function(operators) {
					return "plot_11-24-1"
				}
			},
			"plot_11-24-1": {
				"desk": "rand11",
				"next": function(operators) {
					if (operators.P >= 1) {
						if (operators.Melinoa_gold > 2) {
							return "plot_11-26-1"
						}
					}
					else if (operators.Melinoa_gold >= 5) {
						return "plot_11-26-2"
					}
					return "plot_11-24-0"
				}
			},
			"plot_11-26-1": {
				"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Мрак рассёк яркий свет и лошадиное ржание. Пегас пришёл за вами, чтобы вернуть в мир живых.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-0" }
					},
					"2": {
						"text": {"ru": "Но?", "en": "..."},
						"next": function(operators) {
							return "plot_12-0" }
					}
				}
			},
			"plot_11-26-2": {
				"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "Идем.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-0" }
					},
					"2": {
						"text": {"ru": "Но?", "en": "..."},
						"next": function(operators) {
							return "plot_12-0" }
					}
				}
			},
			"plot_12-0": {
				"title": text.CHARACTER_0, "img": 58,
				"text": {
					"ru": "Вы вернулись в родной город. За время вашего отсутствия он изменился…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot12",
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_12-1-A"
							}
							else if (operators.Alia == 3) {
								return "plot_12-1-AA"
							}
							return "plot_12-1" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_12-1-A"
							}
							else if (operators.Alia == 3) {
								return "plot_12-1-AA"
							}
							return "plot_12-1" }
					}
				}
			},
			"plot_12-1-A": {
				"title": text.CHARACTER_0, "img": 156,
				"text": {
					"ru": "Чума… Волею судеб или высшие силы так определили - теперь все иначе… уже третий месяц.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.M_Alia == 1) {
								return "plot_12-1-A-good"
							}
							return "plot_12-1-A-bad" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							if (operators.M_Alia == 1) {
								return "plot_12-1-A-good"
							}
							return "plot_12-1-A-bad" }
					}
				}
			},
			"plot_12-1-AA": {
				"title": text.CHARACTER_0, "img": 156,
				"text": {
					"ru": "Чума… Волею судеб или высшие силы так определили - теперь все иначе… уже третий месяц.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.M_Alia == 1) {
								return "plot_12-1-AA-good"
							}
							return "plot_12-1-AA-bad" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							if (operators.M_Alia == 1) {
								return "plot_12-1-AA-good"
							}
							return "plot_12-1-AA-bad" }
					}
				}
			},
			"plot_12-1-A-bad": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Алии не было…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.Vedma == 3) {
								return "plot_12-1-A-bad-cold"
							}
							return "plot_12-1-A-bad-bad" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							if (operators.Vedma == 3) {
								return "plot_12-1-A-bad-cold"
							}
							return "plot_12-1-A-bad-bad" }
					}
				}
			},
			"plot_12-1-AA-bad": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Алии не было…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.Vedma == 3) {
								return "plot_12-1-AA-bad-cold"
							}
							return "plot_12-1-AA-bad-bad" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							if (operators.Vedma == 3) {
								return "plot_12-1-AA-bad-cold"
							}
							return "plot_12-1-AA-bad-bad" }
					}
				}
			},
			"plot_12-1-A-bad-bad": {
				"title": text.CHARACTER_0, "img": 102,
				"text": {
					"ru": "Вам передали, что она боролась до последнего, но, видимо и правда светочи не живут долго…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О, нет…", "en": "..." },
						"next": function(operators) {
							operators.Alia = 0;
							return "plot_12-3" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.Alia = 0;
							return "plot_12-3" }
					}
				}
			},
			"plot_12-1-AA-bad-bad": {
				"title": text.CHARACTER_0, "img": 102,
				"text": {
					"ru": "Вам передали, что она боролась до последнего, но, видимо и правда светочи не живут долго…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О, нет…", "en": "..." },
						"next": function(operators) {
							operators.Alia = 0;
							return "plot_12-3" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.Alia = 0;
							return "plot_12-3" }
					}
				}
			},
			"plot_12-1-A-bad-cold": {
				"title": text.CHARACTER_0, "img": 148,
				"text": {
					"ru": "Ведьма отомстила вам.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О, нет…", "en": "..." },
						"next": function(operators) {
							operators.Alia = 0;
							return "plot_12-3" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.Alia = 0;
							return "plot_12-3" }
					}
				}
			},
			"plot_12-1-AA-bad-cold": {
				"title": text.CHARACTER_0, "img": 147,
				"text": {
					"ru": "Ведьма отомстила вам.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "О, нет…", "en": "..." },
						"next": function(operators) {
							operators.Alia = 0;
							return "plot_12-3" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.Alia = 0;
							return "plot_12-3" }
					}
				}
			},
			"plot_12-1-A-good": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Алия?", "en": "..." },
						"next": function(operators) {
							return "plot_12-1-A-good-2" }
					},
					"2": {
						"text": {"ru": "Я вернулся!", "en": "..."},
						"next": function(operators) {
							return "plot_12-1-A-good-2" }
					}
				}
			},
			"plot_12-1-AA-good": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Алия?", "en": "..." },
						"next": function(operators) {
							return "plot_12-1-AA-good-2" }
					},
					"2": {
						"text": {"ru": "Я вернулся!", "en": "..."},
						"next": function(operators) {
							return "plot_12-1-AA-good-2" }
					}
				}
			},
			"plot_12-1-A-good-2": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Она бросилась к вам, она очень скучала.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Обнять", "en": "..." },
						"next": function(operators) {
							return "lot_12-1-A-good-3-M" }
					},
					"2": {
						"text": {"ru": "Поцеловать", "en": "..."},
						"next": function(operators) {
							return "lot_12-1-A-good-3-M" }
					}
				}
			},
			"plot_12-1-AA-good-2": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Она бросилась к вам, она очень скучала.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Обнять", "en": "..." },
						"next": function(operators) {
							return "lot_12-1-AA-good-3-M" }
					},
					"2": {
						"text": {"ru": "Поцеловать", "en": "..."},
						"next": function(operators) {
							return "lot_12-1-AA-good-3-M" }
					}
				}
			},
			"plot_12-1-A-good-3-M": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Я каждый день о тебе молилась… Твой медальон действительно оказался волшебный, и страшный рок обошел нас стороной...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я так рад!", "en": "..." },
						"next": function(operators) {
							if (operators.U >= 1) {
								return "plot_12-2-U"
							}
							return "plot_12-3" }
					},
					"2": {
						"text": {"ru": "Да...", "en": "..."},
						"next": function(operators) {
							if (operators.U >= 1) {
								return "plot_12-2-U"
							}
							return "plot_12-3" }
					}
				}
			},
			"plot_12-1-AA-good-3-M": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Я каждый день о тебе молилась… Твой медальон действительно оказался волшебный, и страшный рок обошел нас стороной...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я так рад!", "en": "..." },
						"next": function(operators) {
							if (operators.U >= 1) {
								return "plot_12-2-U"
							}
							return "plot_12-3" }
					},
					"2": {
						"text": {"ru": "Да...", "en": "..."},
						"next": function(operators) {
							if (operators.U >= 1) {
								return "plot_12-2-U"
							}
							return "plot_12-3" }
					}
				}
			},

			"plot_12-1": {
				"title": text.CHARACTER_0, "img": 156,
				"text": {
					"ru": "Чума… Волею судеб или высшие силы так определили - теперь все иначе… уже третий месяц.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {										
							if (operators.U > 1) {
								return "plot_12-2-U" }
							else if (operators.Cer == 2) {
								return "plot_12-2-C" }
							return "plot_12-3" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							if (operators.U > 1) {
								return "plot_12-2-U" }
							else if (operators.Cer == 2) {
								return "plot_12-2-C" }
							return "plot_12-3" }
					}
				}
			},
			"plot_12-2-U": {
				"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": "Айвен! Я уже успел заскучать. Впрочем, я отлично справляюсь без тебя...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да что ты!", "en": "..." },
						"next": function(operators) {
							if (operators.Cer == 2) {
								return "plot_12-2-C" }
							return "plot_12-3" }
					},
					"2": {
						"text": {"ru": "Это преркасно!", "en": "..."},
						"next": function(operators) {
							if (operators.Cer == 2) {
								return "plot_12-2-C" }
							return "plot_12-3" }
					}
				}
			},
			"plot_12-2-C": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Зайдя в дом, на столе вы обнаружили записку от Керидвен. С ней все было в порядке...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-3" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-3" }
					}
				}
			},
			"plot_12-3": {
				"title": text.CHARACTER_56, "img": 166,
				"text": {
					"ru": "Вы видели КТО завелся в нашем городе? Ужас! Это точно не к добру!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Кто завелся?", "en": "..." },
						"next": function(operators) {
							return "plot_12-4" }
					},
					"2": {
						"text": {"ru": "Эм... Вы разве не умерли?", "en": "..."},
						"next": function(operators) {
							return "plot_12-4" }
					}
				}
			},
			"plot_12-3": {
				"title": text.CHARACTER_56, "img": 166,
				"text": {
					"ru": "Какая невоспитанность! И если бы только вы! Устал уже повторять, что я его старший брат. Я приехал сюда из столицы, вот королевская печать, смотрите...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да я верю...", "en": "..." },
						"next": function(operators) {
							return "plot_12-4" }
					},
					"2": {
						"text": {"ru": "Как интересно...", "en": "..."},
						"next": function(operators) {
							return "plot_12-4" }
					}
				}
			},
			"plot_12-4": {
				"title": text.CHARACTER_59, "img": 167,
				"text": {
					"ru": "Доброго здравия, Мастер. Зашел поздороваться. Рад, что здесь пока все хорошо, хотя учитывая тенденции…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что?", "en": "..." },
						"next": function(operators) {
							return "plot_12-5" }
					},
					"2": {
						"text": {"ru": "Эм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-5" }
					}
				}
			},
			"plot_12-5": {
				"title": text.CHARACTER_59, "img": 167,
				"text": {
					"ru": "Ох! Вы не знаете? Над всем Королевством властвует чума! И все бы ничего, но колдун… Вряд ли это совпадение… Еще раз доброго здравия, Мастер.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "До свидания...", "en": "..." },
						"next": function(operators) {
							return "plot_12-7" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-7" }
					}
				}
			},
			"plot_12-7": {
				"title": text.CHARACTER_5, "img": 5,
				"text": {
					"ru": "Вот. Эти травы, из которых готовят лекарство.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Чеснок?", "en": "..." },
						"next": function(operators) {
							return "plot_12-9" }
					},
					"2": {
						"text": {"ru": "Хорошо…", "en": "..."},
						"next": function(operators) {
							return "plot_12-9" }
					}
				}
			},
/*			"plot_12-8": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Демон: мой господин доволен.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Иди к черту!", "en": "..." },
						"next": function(operators) {
							return "plot_12-9" }
					},
					"2": {
						"text": {"ru": "Что…", "en": "..."},
						"next": function(operators) {
							return "plot_12-9" }
					}
				}
			},*/
			"plot_12-9": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "А вот и ты. Хотел дождаться тебя. Прежде чем уничтожу этот больной страдающий мир.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Не надо..", "en": "..." },
						"next": function(operators) {
							return "plot_12-11" }
					},
					"2": {
						"text": {"ru": "Хм… ", "en": "..."},
						"next": function(operators) {
							return "plot_12-11" }
					}
				}
			},
			"plot_12-11": {
				"title": text.CHARACTER_15, "img": 15,
				"text": {
					"ru": "Помогите… я не хочу умирать…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Дать лекарство", "en": "..." },
						"next": function(operators) {
							return "plot_12-12" }
					},
					"2": {
						"text": {"ru": "Не дать", "en": "..."},
						"next": function(operators) {
							return "plot_12-12" }
					}
				}
			},
			"plot_12-12": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Неизвестный посетитель возник внезапно на пороге. Вы застыли, глядя на него.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-13" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-13" }
					}
				}
			},
			"plot_12-13": {
				"title": text.CHARACTER_58, "img": 84,
				"text": {
					"ru": "…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Эм…", "en": "..." },
						"next": function(operators) {
							return "plot_12-14" }
					},
					"2": {
						"text": {"ru": "Что?", "en": "..."},
						"next": function(operators) {
							return "plot_12-14" }
					}
				}
			},
			"plot_12-14": {
				"title": text.CHARACTER_58, "img": 85,
				"text": {
					"ru": "…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм…", "en": "..." },
						"next": function(operators) {
							return "plot_12-15" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-15" }
					}
				}
			},
			"plot_12-15": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Странная мысль вдруг пришла вам в голову…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-16" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-16" }
					}
				}
			},
			"plot_12-16": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Через нескольких часов зелье обратной трансформации было готово. И вы дали испить его посетителю…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-17" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-17" }
					}
				}
			},
			"plot_12-17": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Проклятье, Айвен! Где тебя носило все эти месяцы! Я уже три недели в теле птицы! ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что?", "en": "..." },
						"next": function(operators) {
							return "plot_12-18" }
					},
					"2": {
						"text": {"ru": "Как?", "en": "..."},
						"next": function(operators) {
							return "plot_12-18" }
					}
				}
			},
			"plot_12-18": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Твой демиург такой шутник! Или ты еще не понял, кто такой этот твой чародей?!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я знаю", "en": "..." },
						"next": function(operators) {
							return "plot_12-19" }
					},
					"2": {
						"text": {"ru": "Что…", "en": "..."},
						"next": function(operators) {
							return "plot_12-19" }
					}
				}
			},
			"plot_12-19": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Ты уверен, что ему можно доверять?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да", "en": "..." },
						"next": function(operators) {
							return "plot_12-20" }
					},
					"2": {
						"text": {"ru": "Ну...", "en": "..."},
						"next": function(operators) {
							return "plot_12-20" }
					}
				}
			},
			"plot_12-20": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Уверен? Хм… А я уверен, что ты понятия не имеешь, о чем говоришь. Он должен уйти, иначе ты мне не друг!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я поговорю с ним", "en": "..." },
						"next": function(operators) {
							return "plot_12-22" }
					},
					"2": {
						"text": {"ru": "Что ж, значит так", "en": "..."},
						"next": function(operators) {
							return "plot_12-22" }
					}
				}
			},
			"plot_12-22": {
				"title": text.CHARACTER_5, "img": 5,
				"text": {
					"ru": "Полынь и уксус! Полынь и уксус!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Куплю", "en": "..." },
						"next": function(operators) {
							return "plot_12-23" }
					},
					"2": {
						"text": {"ru": "Хм...", "en": "..."},
						"next": function(operators) {
							return "plot_12-23" }
					}
				}
			},
			"plot_12-23": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы закрыли глаза, пытаясь собраться с мыслями. Нужно было решение…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-24" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-24" }
					}
				}
			},
			"plot_12-24": {
				"title": text.CHARACTER_60, "img": 168,
				"text": {
					"ru": "…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Вам помочь?", "en": "..." },
						"next": function(operators) {
							return "plot_12-25" }
					},
					"2": {
						"text": {"ru": "Здравствуйте?", "en": "..."},
						"next": function(operators) {
							return "plot_12-25" }
					}
				}
			},
			"plot_12-25": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Странный человек…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.U > 0) { 
								return "plot_12-26" }
							return "plot_12-29" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							if (operators.U > 0) { 
								return "plot_12-26" }
							return "plot_12-30" }
					}
				}
			},
			"plot_12-26": {
				"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": " … ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что такое?", "en": "..." },
						"next": function(operators) {
							return "plot_12-27" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-27" }
					}
				}
			},
			"plot_12-27": {
				"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": "Мой отец… он здесь.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Это хорошо?", "en": "..." },
						"next": function(operators) {
							return "plot_12-28" }
					},
					"2": {
						"text": {"ru": "Это плохо?", "en": "..."},
						"next": function(operators) {
							return "plot_12-28" }
					}
				}
			},
			"plot_12-28": {
				"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": "Это очень плохо. Он не должен узнать, что я здесь.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Почему?", "en": "..." },
						"next": function(operators) {
							return "plot_12-29" }
					},
					"2": {
						"text": {"ru": "Ясно…", "en": "..."},
						"next": function(operators) {
							return "plot_12-29" }
					}
				}
			},
			"plot_12-29": {
				"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": "Это страшный, страшный человек. Не человек, а чудовище. Чернокнижник…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-30" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-30" }
					}
				}
			},
			"plot_12-30": {
				"desk": "rand12",
				"next": function(operators) {
					return "plot_12-31"
				}
			},
			"plot_12-31": {
				"desk": "rand12",
				"next": function(operators) {
					return "plot_12-32"
				}
			},
			"plot_12-32": {
				"desk": "rand12",
				"next": function(operators) {
					return "plot_12-33"
				}
			},
			"plot_12-33": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Где мой компас?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Он здесь", "en": "..." },
						"next": function(operators) {
							operators.Compass_good = 1;
							return "plot_12-34" }
					},
					"2": {
						"text": {"ru": "Я потерял его(ложь)", "en": "..."},
						"next": function(operators) {
							operators.Compass_evil = 1;
							return "plot_12-34-evil" }
					}
				}
			},
			"plot_12-34": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Чародей долго всматривался в него, затем убрал в карман.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-35" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-35" }
					}
				}
			},
			"plot_12-34-evil": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Чародей долго всматривался в вас, затем тяжело вздохнул.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-35" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-35" }
					}
				}
			},
			"plot_12-35": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "В нем - магическая энергия этого мира. Довольно странно осознавать себя воплощенной магией, поэтому я стараюсь об этом не думать.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Так ты не Демиург?", "en": "..." },
						"next": function(operators) {
							return "plot_12-36" }
					},
					"2": {
						"text": {"ru": "Неужели?", "en": "..."},
						"next": function(operators) {
							return "plot_12-36" }
					}
				}
			},
			"plot_12-36": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Да. Демиург магического плана, а не мира в целом. Потому ко мне и обращаются все… ищущие. Я думал ты об этом знаешь… Хм.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ясно…", "en": "..." },
						"next": function(operators) {
							return "plot_12-37" }
					},
					"2": {
						"text": {"ru": "Чаю?", "en": "..."},
						"next": function(operators) {
							return "plot_12-37" }
					}
				}
			},
			"plot_12-37": {
				"desk": "rand12",
				"next": function(operators) {
					return "plot_12-38"
				}
			},
			"plot_12-38": {
				"desk": "rand12",
				"next": function(operators) {
					if (operators.H >= 3) {
						return "plot_12-39"
					}
					return "plot_12-39-ghost"
				}
			},
			"plot_12-39": {
				"title": text.CHARACTER_11, "img": 11,
				"text": {
					"ru": "А вы тоже заметили, что нет правды в колдунах? Они все… злые. И несчастные. Такова природа магии… (Нет, не думаю, Точно… )",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Нет, не думаю", "en": "..." },
						"next": function(operators) {
							if (operators.Art_crystal == 1) {
								if (operators.Alia == 2) {
									return "plot_12-40-A" }
								else if (operators.Alia == 3) {
									return "plot_12-40-AA" }
								else if (operators.Cer == 2) {
									return "plot_12-40-C" }
								return "plot_12-40" 
								}
							return "plot_12-45"
							}
					},
					"2": {
						"text": {"ru": "Точно...", "en": "..."},
						"next": function(operators) {
							if (operators.Art_crystal == 1) {
								if (operators.Alia == 2) {
									return "plot_12-40-A" }
								else if (operators.Alia == 3) {
									return "plot_12-40-AA" }
								else if (operators.Cer == 2) {
									return "plot_12-40-C" }
								return "plot_12-40" 
								}
							return "plot_12-45"
							}
					}
				}
			},
			"plot_12-39-ghost": {
				"title": text.CHARACTER_11, "img": 146,
				"text": {
					"ru": "А вы тоже заметили, что нет правды в колдунах? Они все… злые. И несчастные. Такова природа магии…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Нет, не думаю", "en": "..." },
						"next": function(operators) {
							if (operators.Art_crystal == 1) {
								if (operators.Alia == 2) {
									return "plot_12-40-A" }
								else if (operators.Alia == 3) {
									return "plot_12-40-AA" }
								else if (operators.Cer == 2) {
									return "plot_12-40-C" }
								return "plot_12-40" 
								}
							return "plot_12-45"
							}
					},
					"2": {
						"text": {"ru": "Точно...", "en": "..."},
						"next": function(operators) {
							if (operators.Art_crystal == 1) {
								if (operators.Alia == 2) {
									return "plot_12-40-A" }
								else if (operators.Alia == 3) {
									return "plot_12-40-AA" }
								else if (operators.Cer == 2) {
									return "plot_12-40-C" }
								return "plot_12-40" 
								}
							return "plot_12-45"
							}
					}
				}
			},
			"plot_12-40-A": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы снова вспомнили про карту. Вы почувствовали, что время пришло…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Отправиться одному", "en": "..." },
						"next": function(operators) {
							return "plot_12-41" }
					},
					"2": {
						"text": {"ru": "Взять Алию", "en": "..."},
						"next": function(operators) {
							operators.Alia_water = 1;
							return "plot_12-41-A"}
					}
				}
			},
			"plot_12-40-AA": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы снова вспомнили про карту. Вы почувствовали, что время пришло…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Отправиться одному", "en": "..." },
						"next": function(operators) {
							return "plot_12-41" }
					},
					"2": {
						"text": {"ru": "Взять Алию", "en": "..."},
						"next": function(operators) {
							operators.Alia_water = 1;
							return "plot_12-41-AA" }
					}
				}
			},
			"plot_12-40-C": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы снова вспомнили про карту. Вы почувствовали, что время пришло… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Отправиться одному", "en": "..." },
						"next": function(operators) {
							return "plot_12-41" }
					},
					"2": {
						"text": {"ru": "Взять Керидвен", "en": "..."},
						"next": function(operators) {
							operators.Cer_water = 1;
							return "plot_12-41" }
					}
				}
			},
			"plot_12-40": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы снова вспомнили про карту. Вы почувствовали, что время пришло… (отправиться одному) ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-41" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-41" }
					}
				}
			},
			"plot_12-41-A": {
				"title": text.CHARACTER_0, "img": 71,
				"text": {
					"ru": "Спустя несколько часов блуждания по лесу вы нашли его. Родник горит бирюзой при луне, в его светящихся водах - секрет вечной молодости. Но Страж не спускает с вас взгляд…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-42" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-42" }
					}
				}
			},
			"plot_12-41-AA": {
				"title": text.CHARACTER_0, "img": 71,
				"text": {
					"ru": "Горит родник бирюзой при луне. Его Страж не спускает с вас взгляд.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-42" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-42" }
					}
				}
			},
			"plot_12-41-C": {
				"title": text.CHARACTER_0, "img": 71,
				"text": {
					"ru": "Горит родник бирюзой при луне. Его Страж не спускает с вас взгляд.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-42" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-42" }
					}
				}
			},
			"plot_12-41": {
				"title": text.CHARACTER_0, "img": 71,
				"text": {
					"ru": "Горит родник бирюзой при луне. Его Страж не спускает с вас взгляд.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-43" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-43" }
					}
				}
			},
			"plot_12-42-A": {
				"title": text.CHARACTER_0, "img": 71,
				"text": {
					"ru": "Бессмертие кроется не только в философских камнях… Может быть, это ваш шанс? Вернуть себе бессмертие, но хотите ли вы? А еще она…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-43" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-43" }
					}
				}
			},
			"plot_12-42-AA": {
				"title": text.CHARACTER_0, "img": 71,
				"text": {
					"ru": "Бессмертие кроется не только в философских камнях… Может быть, это ваш шанс? Вернуть себе бессмертие, но хотите ли вы? А еще она…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-43" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-43" }
					}
				}
			},
			"plot_12-42-C": {
				"title": text.CHARACTER_0, "img": 71,
				"text": {
					"ru": "Бессмертие кроется не только в философских камнях… Может быть, это ваш шанс? Вернуть себе бессмертие, но хотите ли вы? А еще она…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Спросить ее", "en": "..." },
						"next": function(operators) {
							return "plot_12-43-C-1" }
					},
					"2": {
						"text": {"ru": "Взглянуть на нее", "en": "..."},
						"next": function(operators) {
							return "plot_12-43-C-1" }
					}
				}
			},
			"plot_12-43-A": {
				"title": text.CHARACTER_32, "img": 71,
				"text": {
					"ru": "Бессмертие? Даже не знаю… Не будем ли мы прокляты этим бессмертием? Нет, я не стану пить из источника.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "А я стану!", "en": "..." },
						"next": function(operators) {
							return "plot_12-43-A-1" }
					},
					"2": {
						"text": {"ru": "Ты права…", "en": "..."},
						"next": function(operators) {
							return "plot_12-43-A-2" }
					}
				}
			},
			"plot_12-43-AA": {
				"title": text.CHARACTER_32, "img": 71,
				"text": {
					"ru": "Бессмертие? Даже не знаю… Не будем ли мы прокляты этим бессмертием? Нет, я не стану пить из источника.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "А я стану!", "en": "..." },
						"next": function(operators) {
							return "plot_12-43-AA-1" }
						},
					"2": {
						"text": {"ru": "Ты права…", "en": "..."},
						"next": function(operators) {
							return "plot_12-43-AA-" }
					}
				}
			},
			"plot_12-43-A-1": {
				"title": text.CHARACTER_32, "img": 71,
				"text": {
					"ru": "Ну и… Как же я сразу не поняла, что вышла замуж за идиота! Боги проклинали человека бессмертием, ведь Человек не может выдержать это бремя…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ладно…", "en": "..." },
						"next": function(operators) {
							return "plot_12-43" }
					},
					"2": {
						"text": {"ru": "Я выдержу", "en": "..."},
						"next": function(operators) {
							return "plot_12-43" }
					}
				}
			},
			"plot_12-43-AA-1": {
				"title": text.CHARACTER_32, "img": 71,
				"text": {
					"ru": "Ну и… Как же я сразу не поняла, что вышла замуж за идиота! Боги проклинали человека бессмертием, ведь Человек не может выдержать это бремя…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ладно…", "en": "..." },
						"next": function(operators) {
							return "plot_12-43" }
					},
					"2": {
						"text": {"ru": "Я выдержу", "en": "..."},
						"next": function(operators) {
							return "plot_12-43" }
					}
				}
			},
			"plot_12-43-A-2": {
				"title": text.CHARACTER_0, "img": 71,
				"text": {
					"ru": "Она взяла вас за руку и повела прочь. Но напоследок вы все-таки бросили последний взгляд на сверкающий Источник. А ведь действительно было в нем что-то зловещее…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Эх…", "en": "..." },
						"next": function(operators) {
							return "plot_12-43" }
					},
					"2": {
						"text": {"ru": "Она права", "en": "..."},
						"next": function(operators) {
							return "plot_12-43" }
					}
				}
			},
			"plot_12-43-C-1": {
				"title": text.CHARACTER_46, "img": 71,
				"text": {
					"ru": "Не понимаю твоих сомнений, любовь моя.  Сделай это… хотя бы для меня! Или ты не любишь меня?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что ты такое говоришь!", "en": "..." },
						"next": function(operators) {
							return "plot_12-43" }
					},
					"2": {
						"text": {"ru": "Люблю, но…", "en": "..."},
						"next": function(operators) {
							return "plot_12-43" }
					}
				}
			},
			"plot_12-43-C-2": {
				"title": text.CHARACTER_0, "img": 71,
				"text": {
					"ru": "Ее глаза горели безумием. Ее тяга к бессмертию… Уж не потому ли она тогда к вам пришла?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Керидвен?", "en": "..." },
						"next": function(operators) {
							return "plot_12-43-C" }
					},
					"2": {
						"text": {"ru": "Неужели она не любила…", "en": "..."},
						"next": function(operators) {
							return "plot_12-43-C" }
					}
				}
			},
			"plot_12-43-C-3": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Керидвен:Этот источник…Ты должен… я… Да, я не любила тебя. Но ты - любишь. Дай мне то, что я прошу и я подарю тебе эту любовь…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ты сошла с ума! Пойдем…", "en": "..." },
						"next": function(operators) {
							return "plot_12-43-C" }
					},
					"2": {
						"text": {"ru": "Ты лжешь.Убирайся!", "en": "..."},
						"next": function(operators) {
							return "plot_12-43-C" }
					}
				}
			},
			"plot_12-43-C-4": {
				"title": text.CHARACTER_0, "img": 72,
				"text": {
					"ru": "Вы поняли, что было ошибкой приводить ее сюда… Она тяжело дышала и времени было мало. Нужно было решать, что вам важнее: бессмертие или она.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Бессмертие", "en": "..." },
						"next": function(operators) {
							return "plot_12-43-C" }
					},
					"2": {
						"text": {"ru": "Керидвен", "en": "..."},
						"next": function(operators) {
							return "plot_12-43-C" }
					}
				}
			},
			"plot_12-44-C": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Уже дома в бреду, она во многом призналась, и в том числе что ониры наложили на нее чары и приказали ей убить вас, когда придет время. Она показала кинжал и заплакала.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Снять чары", "en": "..." },
						"next": function(operators) {
							//operators.Cer_good_endng = 1;
							operators.Pearl = 2;
							return "plot_12-43-C" }
					},
					"2": {
						"text": {"ru": "Уничтожить кинжал", "en": "..."},
						"next": function(operators) {
							return "plot_12-43-C" }
					}
				}
			},
			"plot_12-43": {
				"title": text.CHARACTER_0, "img": 71,
				"text": {
					"ru": "Бессмертие кроется не только в философских камнях… Может быть, это ваш шанс? Вернуть себе бессмертие, но хотите ли вы?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да!", "en": "..." },
						"next": function(operators) {
							return "plot_12-45" }
					},
					"2": {
						"text": {"ru": "Нет", "en": "..."},
						"next": function(operators) {
							return "plot_12-45" }
					}
				}
			},
			"plot_12-45": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы наварили себе лекарств. Вы больше не бессмертны, а значит нужно беречь себя…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да!", "en": "..." },
						"next": function(operators) {
							return "plot_12-46" }
					},
					"2": {
						"text": {"ru": "И не только себя…", "en": "..."},
						"next": function(operators) {
							return "plot_12-46" }
					}
				}
			},
			"plot_12-46": {
				"desk": "rand12",
				"next": function(operators) {
					return "plot_12-47"
				}
			},
			"plot_12-47": {
				"desk": "rand12",
				"next": function(operators) {
					return "plot_12-48"
				}
			},
			"plot_12-48": {
				"desk": "rand12",
				"next": function(operators) {
					return "plot_12-49"
				}
			},
			"plot_12-49": {
				"desk": "rand12",
				"next": function(operators) {
					return "plot_12-50"
				}
			},
			"plot_12-50": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Приветствую погибающих от чумы. Я - флейтист, и даже больше… И могу освободить город Сант-Марим от крыс.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Это...", "en": "..." },
						"next": function(operators) {
							return "plot_12-51" }
					},
					"2": {
						"text": {"ru": "Прекрасно. А что взамен?", "en": "..."},
						"next": function(operators) {
							return "plot_12-51" }
					}
				}
			},
			"plot_12-51": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Взамен - сущий пустяк. *называет аномальную сумму денег*",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Эм...", "en": "..." },
						"next": function(operators) {
							return "plot_12-52" }
					},
					"2": {
						"text": {"ru": "Это... немало.", "en": "..."},
						"next": function(operators) {
							return "plot_12-52" }
					}
				}
			},
			"plot_12-52": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Сумма приличная, знаю. И всё же меньшая цена, чем за гибель живых людей, не правда ли? И не от вас лично... От всех.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я поговорю со всеми", "en": "..." },
						"next": function(operators) {
							if (operators.U >= 1) {
								return "plot_12-53"
							}
							return "plot_12-54" }
					},
					"2": {
						"text": {"ru": "Это слишком", "en": "..."},
						"next": function(operators) {
							if (operators.U >= 1) {
								return "plot_12-53"
							}
							return "plot_12-54" }
					}
				}
			},
			"plot_12-53": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "От вас не укрылось, как странно он напоследок посмотрел на ученика. Но задерживаться не стал.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-54" }
					},
					"2": {
						"text": {"ru": "Хм...", "en": "..."},
						"next": function(operators) {
							return "plot_12-54" }
					}
				}
			},
			"plot_12-54": {
				"title": text.CHARACTER_56, "img": 166,
				"text": {
					"ru": "Пусть помогает... А потом... Что же, он обратно их вернёт что ли, если мы откажемся? Хаха!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я понял вас…", "en": "..." },
						"next": function(operators) {
							return "plot_12-55" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-55" }
					}
				}
			},

			"plot_12-55": {
				"title": text.CHARACTER_4, "img": 4,
				"text": {
					"ru": "Пусть изгоняет. Но платить... Нет уж. Это должно быть на добровольных началах.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.H >= 3) {
								return "plot_12-56"
							}
							return "plot_12-56-ghost" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							if (operators.H >= 3) {
								return "plot_12-56"
							}
							return "plot_12-56-ghost" }
					}
				}
			},
			"plot_12-56": {
				"title": text.CHARACTER_11, "img": 11,
				"text": {
					"ru": "Пусть, но у меня нет денег. Нет. Денег.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-57" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-57" }
					}
				}
			},
			"plot_12-56-ghost": {
				"title": text.CHARACTER_11, "img": 146,
				"text": {
					"ru": "Пусть, но мне все равно уже... И денег у меня тоже нет!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-57" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-57" }
					}
				}
			},
			"plot_12-57": {
				"title": text.CHARACTER_15, "img": 15,
				"text": {
					"ru": "Это злобный дух в облике ангела. Я чувствую...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-59" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-59" }
					}
				}
			},
			"plot_12-59": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Ну, как? Сделка состоится?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да (правда)", "en": "..." },
						"next": function(operators) {
							return "plot_12-60" }
					},
					"2": {
						"text": {"ru": "Да (ложь)", "en": "..."},
						"next": function(operators) {
							return "plot_12-60" }
					}
				}
			},
			"plot_12-60": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Отлично! Надеюсь, вы не лжёте... Хуже будет.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Эм...", "en": "..." },
						"next": function(operators) {
							return "plot_12-61" }
					},
					"2": {
						"text": {"ru": "Продайте флейту, а?", "en": "..."},
						"next": function(operators) {
							return "plot_12-62" }
					}
				}
			},
			"plot_12-61": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Что ж! Завтра же все будет совсем иначе, и вы сможете вздохнуть спокойно...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ага...", "en": "..." },
						"next": function(operators) {
							return "plot_12-64" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-64" }
					}
				}
			},
			"plot_12-62": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Ахаха! Нет, мой друг... Не могу. Да и магия не в ней, а во мне. А вы что подумали? Пф!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ясно...", "en": "..." },
						"next": function(operators) {
							return "plot_12-64" }
					},
					"2": {
						"text": {"ru": "Вы где остановились?", "en": "..."},
						"next": function(operators) {
							return "plot_12-63" }
					}
				}
			},
			"plot_12-63": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Эм... Нигде? А что, приглашаете? Если это уловка, чтобы убить меня во сне и отобрать флейту, то, боюсь, ничего не выйдет.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Очень жаль", "en": "..." },
						"next": function(operators) {
							return "plot_12-64" }
					},
					"2": {
						"text": {"ru": "Ахаха", "en": "..."},
						"next": function(operators) {
							return "plot_12-64" }
					}
				}
			},
			"plot_12-64": {
				"title": text.CHARACTER_0, "img": 99,
				"text": {
					"ru": "Ночь была необычной, если учесть, что крысы падали с обрыва в море и там тонули. Пока не осталось ни одной...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-65" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-65" }
					}
				}
			},
			"plot_12-65": {
				"title": text.CHARACTER_56, "img": 166,
				"text": {
					"ru": "Слава создателю! Потрясающе... Теперь пусть убирается вон!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я расплачусь", "en": "..." },
						"next": function(operators) {
							return "plot_12-66" }
					},
					"2": {
						"text": {"ru": "Вы же обещали!", "en": "..."},
						"next": function(operators) {
							return "plot_12-67" }
					}
				}
			},
			"plot_12-66": {
				"title": text.CHARACTER_56, "img": 166,
				"text": {
					"ru": "Ну и прекрасно. А если что, надеюсь, вы дадите ему какой-нибудь эликсирчик, а не действительно выплатите всё!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ага...", "en": "..." },
						"next": function(operators) {
							return "plot_12-68-1" }
					},
					"2": {
						"text": {"ru": "Угу…", "en": "..."},
						"next": function(operators) {
							return "plot_12-68-1" }
					}
				}
			},
			"plot_12-67": {
				"title": text.CHARACTER_56, "img": 166,
				"text": {
					"ru": "Обещал? Что-то не припомню... А если и так, то что с того?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я понял...", "en": "..." },
						"next": function(operators) {
							return "plot_12-68-1" }
					},
					"2": {
						"text": {"ru": "Ну да, действительно...", "en": "..."},
						"next": function(operators) {
							return "plot_12-68-1" }
					}
				}
			},
			"plot_12-68-1": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы вздохнули. Нужно было подумать и решить, как поступить... но к сожалению, у вас не было на это времени.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Заплатить", "en": "..." },
						"next": function(operators) {
							return "plot_12-69" }
					},
					"2": {
						"text": {"ru": "Не платить", "en": "..."},
						"next": function(operators) {
							return "plot_12-68" }
					}
				}
			},
			"plot_12-68": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Вы пожалеете! Вот увидите...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-74" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-74" }
					}
				}
			},
			"plot_12-69": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Благодарю... А хотите знать, что бы я сделал, если бы вы решили мне солгать?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да...", "en": "..." },
						"next": function(operators) {
							return "plot_12-70" }
					},
					"2": {
						"text": {"ru": "Нет!", "en": "..."},
						"next": function(operators) {
							return "plot_12-70" }
					}
				}
			},
			"plot_12-70": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Дети. Понимаете?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.U >= 1) {
								return "plot_12-71" 
							}
							return "plot_12-74" }
					},
					"2": {
						"text": {"ru": "Вы и правда ужасный!", "en": "..."},
						"next": function(operators) {
							if (operators.U >= 1) {
								return "plot_12-71" 
							}
							return "plot_12-74" }
					}
				}
			},
			"plot_12-71": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Он снова посмотрел на ученика, сжимая флейту в руках.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-72" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-72" }
					}
				}
			},
			"plot_12-72": {
				"title": text.CHARACTER_57, "img": 168,
				"text": {
					"ru": "Мальчик талантлив. Я бы мог взять его в ученики... Научить колдовскому искусству.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да, это правильно", "en": "..." },
						"next": function(operators) {
							return "plot_12-73" }
					},
					"2": {
						"text": {"ru": "Это ему решать", "en": "..."},
						"next": function(operators) {
							return "plot_12-73" }
					}
				}
			},
			"plot_12-73": {
				"title": text.CHARACTER_18, "img": 18,
				"text": {
					"ru": "Я не пойду с ним!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хорошо", "en": "..." },
						"next": function(operators) {
							return "plot_12-74" }
					},
					"2": {
						"text": {"ru": "Пойдешь", "en": "..."},
						"next": function(operators) {
							operators.U = 0;
							return "plot_12-74" }
					}
				}
			},
			"plot_12-74": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Мда. Еще одно заблудшее дитя, еще одна моя ошибка…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Это ты! Почему не помог?!", "en": "..." },
						"next": function(operators) {
							return "plot_12-75" }
					},
					"2": {
						"text": {"ru": "Ошибка?", "en": "..."},
						"next": function(operators) {
							return "plot_12-75" }
					}
				}
			},
			"plot_12-75": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Неважно. Все скоро начнется сначала…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Нужно что-то с этим делать…", "en": "..." },
						"next": function(operators) {
							return "plot_12-77" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-77" }
					}
				}
			},
			"plot_12-77": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Мы выпытаем из него всё. Сейчас… Был у меня где-то один инструмент…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...пытки что ли?!", "en": "..." },
						"next": function(operators) {
							return "plot_12-78" }
					},
					"2": {
						"text": {"ru": "Какой?", "en": "..."},
						"next": function(operators) {
							return "plot_12-78" }
					}
				}
			},
			"plot_12-78": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Сыворотка правды. Пара капель - и сам Демиург расколется в тёмных делишках… Только найти бы…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хорошо", "en": "..." },
						"next": function(operators) {
							return "plot_12-79" }
					},
					"2": {
						"text": {"ru": "Ладно, оно того не стоит...", "en": "..."},
						"next": function(operators) {
							return "plot_12-95" }
					}
				}
			},
			"plot_12-79": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы приготовили пирог. И теперь это не просто пирог…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-80" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-80" }
					}
				}
			},
			"plot_12-80": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Золотая ветвь из сада Персефоны… Ведь часть меня все ещё в её руках… Отныне мой компас - мой здесь залог перед ней.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Слушать ещё", "en": "..." },
						"next": function(operators) {
							return "plot_12-81" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-81" }
					}
				}
			},
			"plot_12-81": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "В безвременье нельзя попасть просто так. Но люди сумели заключить меня туда.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Слушать ещё", "en": "..." },
						"next": function(operators) {
							return "plot_12-82" }
					},
					"2": {
						"text": {"ru": "Достаточно", "en": "..."},
						"next": function(operators) {
							return "plot_12-82" }
					}
				}
			},
			"plot_12-82": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Мы с ним договорились… Я сменю его, в обмен на свободу, но я не хочу!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Слушать ещё", "en": "..." },
						"next": function(operators) {
							return "plot_12-83" }
					},
					"2": {
						"text": {"ru": "Достаточно", "en": "..."},
						"next": function(operators) {
							return "plot_12-90" }
					}
				}
			},
			"plot_12-83": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Харон злой и глупый, хочет меня заставить вёслами грести. И это меня! Посмеяться надо мной хочет!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Слушать ещё", "en": "..." },
						"next": function(operators) {
							return "plot_12-84" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-90" }
					}
				}
			},
			"plot_12-84": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Эх, дружище… Единственный выход, который он мне предложил - через картину! Возмутительно! Где же гром и молнии?!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Слушать ещё", "en": "..." },
						"next": function(operators) {
							return "plot_12-85" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-90" }
					}
				}
			},
			"plot_12-85": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Я ведь сподличал. Это ты если что отправишься туда, а не я.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Слушать ещё", "en": "..." },
						"next": function(operators) {
							return "plot_12-86" }
					},
					"2": {
						"text": {"ru": "Достаточно", "en": "..."},
						"next": function(operators) {
							return "plot_12-90" }
					}
				}
			},
			"plot_12-86": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Я ведь создавал целые миры! А ныне порвать договор с проклятым лодочником и его чудиками не в силах!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Слушать ещё", "en": "..." },
						"next": function(operators) {
							return "plot_12-87" }
					},
					"2": {
						"text": {"ru": "Достаточно", "en": "..."},
						"next": function(operators) {
							return "plot_12-90" }
					}
				}
			},
			"plot_12-87": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Он строит механического голема в виде жуткого змея… Страшное чудовище будет!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Слушать ещё", "en": "..." },
						"next": function(operators) {
							return "plot_12-89" }
					},
					"2": {
						"text": {"ru": "Достаточно", "en": "..."},
						"next": function(operators) {
							return "plot_12-90" }
					}
				}
			},
			"plot_12-89": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Дальше он начал бормотать что-то нечленораздельное, но вы и так узнали достаточно…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-90" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_12-90" }
					}
				}
			},
			"plot_12-90": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Давай убьем его, а? Пока он спит…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "С ума сошёл? Нет!", "en": "..." },
						"next": function(operators) {
							return "plot_12-91" }
					},
					"2": {
						"text": {"ru": "Мы не сможем…", "en": "..."},
						"next": function(operators) {
							return "plot_12-91" }
					}
				}
			},
			"plot_12-91": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вам показалось это все странным, но связанным с вами, а потому важным.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_12-92-A"
							}
							if (operators.Alia == 3) {
								return "plot_12-92-AA"
							}
							return "plot_12-94" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_12-92-A"
							}
							if (operators.Alia == 3) {
								return "plot_12-92-AA"
							}
							return "plot_12-94" }
					}
				}
			},
			"plot_12-92-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Мне кажется, вы зря так с ним. Он все-таки человек…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-93" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_12-93" }
					}
				}
			},
			"plot_12-92-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Мне кажется, вы зря так с ним. Он все-таки человек…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-93" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_12-93" }
					}
				}
			},
			"plot_12-93": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Ха-ха, 'Человек'. Он нас в пыль сотрет и глазом не моргнет.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Алия права", "en": "..." },
						"next": function(operators) {
							return "plot_12-94" }
					},
					"2": {
						"text": {"ru": "Торговец прав", "en": "..."},
						"next": function(operators) {
							return "plot_12-94" }
					}
				}
			},
			"plot_12-94": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Ох… Ты опоил меня?!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Конечно, нет!", "en": "..." },
						"next": function(operators) {
							return "plot_12-95" }
					},
					"2": {
						"text": {"ru": "Да, прости", "en": "..."},
						"next": function(operators) {
							return "plot_12-95" }
					}
				}
			},
			"plot_12-95": {
				"desk": "rand12",
				"next": function(operators) {
					return "plot_12-96"
				}
			},
			"plot_12-96": {
				"desk": "rand12",
				"next": function(operators) {
					return "plot_13-0"
				}
			},
			"plot_13-0": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Страшный рёв заставил жителей Сант-Марим вздрогнуть. Оно все-таки пришло…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				//"save_point": "plot13",
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-2" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_13-2" }
					}
				}
			},
			"plot_13-2": {
				"title": text.CHARACTER_49, "img": 93,
				"text": {
					"ru": "Арррх!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-3" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_13-3" }
					}
				}
			},
			"plot_13-3": {
				"title": text.CHARACTER_0, "img": 128,
				"text": {
					"ru": "Наступило созвездие Дракона. Время бедствий и решительных действий…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-4" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_13-4" }
					}
				}
			},
			"plot_13-4": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы - теперь не бессмертны. А дракон нападает внезапно (и часто)… Убедитесь, что у вас что-то на этот случай, а если нет - вы знаете, что делать…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "В магазин", "en": "..." },
						"next": function(operators) {
							//graph_core.open_shop();
							return "plot_13-5-1" }
					},
					"2": {
						"text": {"ru": "Вы верите в фортуну", "en": "..."},
						"next": function(operators) {
							return "plot_13-5" }
					}
				}
			},
			"plot_13-5-1": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "А, вот и ты. Я тебя ждал. У меня есть кое-что для тебя… Бесценная вещь, зато останется у тебя навсегда! Хрономер!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Можно посмотреть?", "en": "..." },
						"next": function(operators) {
							return "plot_13-5-2" }
					},
					"2": {
						"text": {"ru": "И зачем он нужен?", "en": "..."},
						"next": function(operators) {
							return "plot_13-5-3" }
					}
				}
			},
			"plot_13-5-2": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Хрономер… Он позволит избежать гибели в случае нападения дракона, отматывая время вспять.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Купить (35 монет)", "en": "..." },
						"next": function(operators) {
							operators.Chronomer = 1;
							game_core.data.money -= 35;
							graph_core.update_balance();
							return "plot_13-5" }
					},
					"2": {
						"text": {"ru": "Нет", "en": "..."},
						"next": function(operators) {
							return "plot_13-5" }
					}
				}
			},
			"plot_13-5-3": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Позволит не помереть от пламени дракона. Которого, кстати, твой друг призвал. Или нет? Кажется, он и сам не в восторге… Так что, берешь?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да (35 монет)", "en": "..." },
						"next": function(operators) {
							operators.Chronomer = 1;
							game_core.data.money -= 35;
							graph_core.update_balance();
							return "plot_13-5-2" }
					},
					"2": {
						"text": {"ru": "Нет", "en": "..."},
						"next": function(operators) {
							return "plot_13-5" }
					}
				}
			},
			"plot_13-5": {
				"desk": "rand13",
				"next": function(operators) {
					return "plot_13-6"
				}
			},
			"plot_13-6": {
				"desk": "rand13",
				"next": function(operators) {
					return "plot_13-7"
				}
			},
			"plot_13-7": {
				"title": text.CHARACTER_10, "img": 10,
				"text": {
					"ru": "Солдаты на службе у короны уже прибыли для защиты города Сант-Марим. Вместе мы одолеем врага! ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ура!", "en": "..." },
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_13-8-A"
							}
							else if (operators.Alia == 3) {
								return "plot_13-8-AA"
							}
							return "plot_13-9" }
					},
					"2": {
						"text": {"ru": "Наконец-то!", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_13-8-A"
							}
							else if (operators.Alia == 3) {
								return "plot_13-8-AA"
							}
							return "plot_13-9" }
					}
				}
			},
			"plot_13-8-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Мне кажется, оно разумно. У него в груди сияет кристалл, который, я уверена, и заставляет его чинить разрушения.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Это просто монстр", "en": "..." },
						"next": function(operators) {
							return "plot_13-9" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_13-9" }
					}
				}
			},
			"plot_13-8-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Алия: Мне кажется, оно разумно. У него в груди сияет кристалл, который, я уверена, и заставляет его чинить разрушения.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Это просто монстр", "en": "..." },
						"next": function(operators) {
							return "plot_13-9" }
					},
					"2": {
						"text": {"ru": "Хм…", "en": "..."},
						"next": function(operators) {
							return "plot_13-9" }
					}
				}
			},
			"plot_13-9": {
				"desk": "rand13",
				"next": function(operators) {
					return "plot_13-12"
				}
			},
/*			"plot_13-11": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Чудовище пришло за мной.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм…", "en": "..." },
						"next": function(operators) {
							return "plot_13-12" }
					},
					"2": {
						"text": {"ru": "Вздор это все!", "en": "..."},
						"next": function(operators) {
							return "plot_13-12" }
					}
				}
			},*/
			"plot_13-12": {
				"desk": "rand13",
				"next": function(operators) {
					return "plot_13-13"
				}
			},
			"plot_13-13": {
				"desk": "rand13",
				"next": function(operators) {
					return "plot_13-14"
				}
			},
			"plot_13-14": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Чудовище пришло за мной.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм…", "en": "..." },
						"next": function(operators) {
							return "plot_13-15" }
					},
					"2": {
						"text": {"ru": "Вздор это все!", "en": "..."},
						"next": function(operators) {
							return "plot_13-15" }
					}
				}
			},
			"plot_13-15": {
				"desk": "rand13",
				"next": function(operators) {
					return "plot_13-16"
				}
			},
			"plot_13-16": {
				"desk": "rand13",
				"next": function(operators) {
					if (operators.Evil_time == 1 ) {
						return "plot_13-16-1" }
					return "plot_13-17"
				}
			},
			"plot_13-16-1": {
				"title": text.CHARACTER_2, "img": 131,
				"text": {
					"ru": "Мы здесь. Теперь это наше владение.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что?", "en": "..." },
						"next": function(operators) {
							return "plot_13-17" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-17" }
					}
				}
			},
			"plot_13-17": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Моё время пришло. Харон хочет, чтобы я возвращался… Он думает, что ты это я.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ты использовал меня?", "en": "..." },
						"next": function(operators) {
							return "plot_13-17-1" }
					},
					"2": {
						"text": {"ru": "Что теперь? Убьём его?", "en": "..."},
						"next": function(operators) {
							return "plot_13-17-2" }
					}
				}
			},
			"plot_13-17-1": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Это было только на руку нам обоим, поверь. Я постараюсь придумать что-нибудь…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Вся надежда на тебя", "en": "..." },
						"next": function(operators) {
							return "plot_13-18" }
					},
					"2": {
						"text": {"ru": "Придумай, придумай…", "en": "..."},
						"next": function(operators) {
							return "plot_13-18" }
					}
				}
			},
			"plot_13-17-2": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "У чудовища кристалл вместо сердца! Убьём его - ты умрешь. Нужен другой способ…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Вся надежда на тебя", "en": "..." },
						"next": function(operators) {
							return "plot_13-18" }
					},
					"2": {
						"text": {"ru": "Угу…", "en": "..."},
						"next": function(operators) {
							return "plot_13-18" }
					}
				}
			},
			"plot_13-18": {
				"desk": "rand13",
				"next": function(operators) {
					if (operators.Cer == 2) {
						return "plot_13-19"
					}
					return "plot_13-21"
				}
			},
			"plot_13-19": {
				"title": text.CHARACTER_46, "img": 125,
				"text": {
					"ru": "Айвен.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Обнять", "en": "..." },
						"next": function(operators) {
							return "plot_13-20" }
					},
					"2": {
						"text": {"ru": "Керидвен…", "en": "..."},
						"next": function(operators) {
							return "plot_13-20" }
					}
				}
			},
			"plot_13-20": {
				"title": text.CHARACTER_46, "img": 125,
				"text": {
					"ru": "Прошу тебя - береги себя. И от меня тоже...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что?", "en": "..." },
						"next": function(operators) {
							return "plot_13-21" }
					},
					"2": {
						"text": {"ru": "Я не боюсь", "en": "..."},
						"next": function(operators) {
							return "plot_13-21" }
					}
				}
			},
			"plot_13-21": {
				"desk": "rand13",
				"next": function(operators) {
					return "plot_13-22-" + operators.Dr 
				}
			},
			"plot_13-22-0": {
				"title": text.CHARACTER_0, "img": 52,
				"text": {
					"ru": "Уруру.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Все будет хорошо…", "en": "..." },
						"next": function(operators) {
							return "plot_13-23" }
					},
					"2": {
						"text": {"ru": "… ", "en": "..."},
						"next": function(operators) {
							return "plot_13-23" }
					}
				}
			},
			"plot_13-22-1": {
				"title": text.CHARACTER_0, "img": 54,
				"text": {
					"ru": "Уруру.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Все будет хорошо…", "en": "..." },
						"next": function(operators) {
							return "plot_13-23" }
					},
					"2": {
						"text": {"ru": "… ", "en": "..."},
						"next": function(operators) {
							return "plot_13-23" }
					}
				}
			},
			"plot_13-22-2": {
				"title": text.CHARACTER_0, "img": 53,
				"text": {
					"ru": "Уруру.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Все будет хорошо…", "en": "..." },
						"next": function(operators) {
							return "plot_13-23" }
					},
					"2": {
						"text": {"ru": "… ", "en": "..."},
						"next": function(operators) {
							return "plot_13-23" }
					}
				}
			},
			"plot_13-22-3": {
				"title": text.CHARACTER_0, "img": 55,
				"text": {
					"ru": "Уруру.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Все будет хорошо…", "en": "..." },
						"next": function(operators) {
							return "plot_13-23" }
					},
					"2": {
						"text": {"ru": "… ", "en": "..."},
						"next": function(operators) {
							return "plot_13-23" }
					}
				}
			},
			"plot_13-23": {
				"desk": "rand13",
				"next": function(operators) {
					return "plot_13-24"
				}
			},
			"plot_13-24": {
				"desk": "rand13",
				"next": function(operators) {
					return "plot_13-25" 
				}
			},
			"plot_13-25": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Всё никак не могу ничего придумать… Какой ужас творится вокруг… и в моей голове.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Думай! Лучше думай!", "en": "..." },
						"next": function(operators) {
							if (operators.Evil_time == 1 ) {
								return "plot_13-26" }
							return "plot_13-27" }
					},
					"2": {
						"text": {"ru": "Промолчать", "en": "..."},
						"next": function(operators) {
							if (operators.Evil_time == 1 ) {
								return "plot_13-26" }
							return "plot_13-27" }
					}
				}
			},
			"plot_13-26": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "О, нет… Ты впустил их?! О, неразумный, ты понятия не имеешь, что ты наделал…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я не хотел!", "en": "..." },
						"next": function(operators) {
							return "plot_13-27" }
					},
					"2": {
						"text": {"ru": "Промолчать", "en": "..."},
						"next": function(operators) {
							return "plot_13-27" }
					}
				}
			},
			"plot_13-27": {
				"title": text.CHARACTER_0, "img": 156,
				"text": {
					"ru": "Луна снова кажется красной.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм…", "en": "..." },
						"next": function(operators) {
							return "plot_13-29" }
					},
					"2": {
						"text": {"ru": "Переломный момент близко…", "en": "..."},
						"next": function(operators) {
							return "plot_13-29" }
					}
				}
			},
/*			"plot_13-28-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Алия: ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм…", "en": "..." },
						"next": function(operators) {
							return "plot_13-29" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-29" }
					}
				}
			},
			"plot_13-28-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Алия:",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм…", "en": "..." },
						"next": function(operators) {
							return "plot_13-29" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-29" }
					}
				}
			},*/
			"plot_13-29": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Я думал уничтожу этот мир, а теперь почти готов уничтожить себя ради его спасения… Вот ведь ирония, не правда ли?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Хм…", "en": "..." },
						"next": function(operators) {
							return "plot_13-29-insert-1" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-29-insert-1" }
					}
				}
			},
			"plot_13-29-insert-1": {
				"desk": "rand13",
				"next": function(operators) {
					if (operators.Cer == 2) {
						return "plot_13-29-insert-2"
					}
					return "plot_13-29-insert-3" 
				}
			},
			"plot_13-29-insert-2": {
				"title": text.CHARACTER_46, "img": 125,
				"text": {
					"ru": "Ты знаешь, что делать, любовь моя.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да…", "en": "..." },
						"next": function(operators) {
							return "plot_13-29-insert-3" }
					},
					"2": {
						"text": {"ru": "Нет", "en": "..."},
						"next": function(operators) {
							return "plot_13-29-insert-3" }
					}
				}
			},
			"plot_13-29-insert-3": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Странные мысли пришли вам в голову… что можно прекратить бедствия сейчас же. Одна жизнь всего…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да", "en": "..." },
						"next": function(operators) {
							if (operators.Compass_good == 1) {
								return "plot_13-29-insert-4-1-good" }
							return "plot_13-29-insert-4-1-evil" }
					},
					"2": {
						"text": {"ru": "Нет…", "en": "..."},
						"next": function(operators) {
							if (operators.Alia >= 2) {
								return "plot_13-29-insert-4-2-A-AA"
							}
							return "plot_13-29-insert-4-2" }
					}
				}
			},
			"plot_13-29-insert-4-1-good": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Компас оказался в ваших руках. Однако что это? Почему небеса стали красными?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-30" }
					},
					"2": {
						"text": {"ru": "Это не к добру…", "en": "..."},
						"next": function(operators) {
							return "plot_13-30" }
					}
				}
			},
			"plot_13-29-insert-4-1-evil": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Теперь вы это он. Однако что это? Почему небеса стали красными?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-30" }
					},
					"2": {
						"text": {"ru": "Это не к добру…", "en": "..."},
						"next": function(operators) {
							return "plot_13-30" }
					}
				}
			},

			"plot_13-30": {
				"title": text.CHARACTER_2, "img": 131,
				"text": {
					"ru": "Ты готов примкнуть к нему? Ты готов послужить ему? Ты готов стать им?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Да", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-evil" }
					},
					"2": {
						"text": {"ru": "Нет!", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-sad" }
					}
				}
			},
			"plot_13-31-evil": {
				"title": text.CHARACTER_2, "img": 131,
				"text": {
					"ru": "Так преклони же колени перед нашим господином…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Преклонить", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-evil-1" }
					},
					"2": {
						"text": {"ru": "Я - ваш господин!", "en": "..."},
						"next": function(operators) {
							if (operators.Compass_evil == 1) {
								return   }
							return "plot_13-31-evil-evil-1" }
					}
				}
			},
			"plot_13-31-evil-1": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы боялись даже поднять глаза. Нечто, возникшее из пустоты, было не человеком. Это было древнее и могущественное… зло.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что же вы наделали…", "en": "..." },
						"next": function(operators) {
							if (operators.Compass_evil == 1) {
								return   }
							return "plot_13-31-evil-evil-1" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							if (operators.Compass_evil == 1) {
								return   }
							return "plot_13-31-evil-evil-1" }
					}
				}
			},
			"plot_13-31-evil-evil-1": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "В ваших руках был компас, и вы не собирались никому подчиняться.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-evil-evil-2" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-evil-evil-2" }
					}
				}
			},
			"plot_13-31-evil-evil-2": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Страшная сила вдруг охватила вас, и вы поняли, что не вы, но что-то внутри вас теперь руководит вами и вашим телом. Проклятие охватило вас целиком…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Поклонитесь мне!", "en": "..." },
						"next": function(operators) {
							if (operators.Vedma == 3) {
								"plot_13-31-evil-evil-3"
							}
							return "plot_13-31-evil-evil-5" }
					},
					"2": {
						"text": {"ru": "Уничтожить соперника", "en": "..."},
						"next": function(operators) {
							if (operators.Vedma == 3) {
								"plot_13-31-evil-evil-3"
							}
							return "plot_13-31-evil-evil-5" }
					}
				}
			},
			"plot_13-31-evil-evil-3": {
				"title": text.CHARACTER_46, "img": 125,
				"text": {
					"ru": "Ты сделал все правильно.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-evil-evil-5" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-evil-evil-5" }
					}
				}
			},
			"plot_13-31-evil-evil-5": {
				"title": text.CHARACTER_2, "img": 131,
				"text": {
					"ru": "Ты сделал все правильно.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-evil-evil-6" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-evil-evil-6" }
					}
				}
			},
			"plot_13-31-evil-evil-6": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Что же ты наделал…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-evil-evil-7" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-evil-evil-7" }
					}
				}
			},
			"plot_13-31-evil-evil-7": {
				"title": text.CHARACTER_5, "img": 5,
				"text": {
					"ru": "Мастер, что с вами?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-evil-evil-8" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-evil-evil-8" }
					}
				}
			},
			"plot_13-31-evil-evil-8": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Проклятие охватило вас целиком, и вы теперь ничем не отличаетесь от существа",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-evil-evil-9" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-evil-evil-9" }
					}
				}
			},
			"plot_13-31-evil-evil-9": {
				"title": text.CHARACTER_2, "img": 131,
				"text": {
					"ru": "Теперь ты один из нас, Разрушитель миров. Добро пожаловать. Мы готовы служить",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-evil-evil-10" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-evil-evil-10" }
					}
				}
			},
			"plot_13-31-evil-evil-10": {
				"title": text.CHARACTER_46, "img": 125,
				"text": {
					"ru": "Да здравствует разрушитель.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Нет…", "en": "..." },
						"next": function(operators) {
							operators.ending_2_opened = 1;
							return "plot_13-31-evil-evil-11-ending" }
					},
					"2": {
						"text": {"ru": "Что…", "en": "..."},
						"next": function(operators) {
							operators.ending_2_opened = 1;
							return "plot_13-31-evil-evil-11-ending" }
					}
				}
			},
			"plot_13-31-evil-evil-11-ending": {
				"title": text.ending_2_title, "img": 162,
				"text": {
					"ru": "Вы не виноваты, что миру пришел конец, однако теперь вы - властелин нового мира. Мира мрака и хаоса...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Нет…", "en": "..." },
						"next": function(operators) {
							return "plot_13-beginning" }
					},
					"2": {
						"text": {"ru": "Что…", "en": "..."},
						"next": function(operators) {
							return "plot_13-beginning" }
					}
				}
			},

			"plot_13-31-sad": {
				"title": text.CHARACTER_2, "img": 131,
				"text": {
					"ru": "Ответ неправильный. Колдунья, твой черед.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что…", "en": "..." },
						"next": function(operators) {
							if (operators.Cer == 2) {
								if (operators.Pearl == 2) {
									return "plot_13-31-not-sad-1"
								}
								return "plot_13-31-sad-1-V"
							}
							return "plot_13-31-sad-2" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							if (operators.Cer == 2) {
								if (operators.Pearl == 2) {
									return "plot_13-31-not-sad-1"
								}
								return "plot_13-31-sad-1-V"
							}
							return "plot_13-31-sad-2" }
					}
				}
			},
			"plot_13-31-sad-1-V": {
				"title": text.CHARACTER_46, "img": 125,
				"text": {
					"ru": "Прости, любовь моя…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Керидвен?", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-sad-2" }
					},
					"2": {
						"text": {"ru": "Стой!", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-sad-2" }
					}
				}
			},
			"plot_13-31-sad-2": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы увидели, как острое лезвие сверкнуло, а затем… Чары были бессильны, и вы знали, что умрете…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что…", "en": "..." },
						"next": function(operators) {
							if (operators.Cer == 2) {
								return "plot_13-31-sad-3"
							}
							return "plot_13-31-sad-4" }
					},
					"2": {
						"text": {"ru": "Нет!", "en": "..."},
						"next": function(operators) {
							if (operators.Cer == 2) {
								return "plot_13-31-sad-3"
							}
							return "plot_13-31-sad-4" }
					}
				}
			},
			"plot_13-31-sad-3": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Последним, что вы увидели, была она. Словно обезумев, ведьма кричала и металась, пока наконец не смолкла. Она была, кажется, мертва...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Что…", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-sad-4" }
					},
					"2": {
						"text": {"ru": "Нет!", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-sad-4" }
					}
				}
			},
			"plot_13-31-sad-4": {
				"title": text.CHARACTER_2, "img": 131,
				"text": {
					"ru": "Она исполнила свою роль.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-sad-5" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-sad-5" }
					}
				}
			},
			"plot_13-31-sad-5": {
				"title": text.CHARACTER_2, "img": 131,
				"text": {
					"ru": "Наконец-то наступила наша эра… Рассвет мрака. Все готово, повелитель…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-sad-6-end" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-sad-6-end" }
					}
				}
			},
			"plot_13-31-sad-6-end": {
				"title": text.ending_3_title, "img": 169,
				"text": {
					"ru": "Вы заключили сделку с онирами, сами этого не осознавая. Они обманули не только вас. Там, в царстве Аида, вы встретитесь вновь…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							operators.ending_3_opened = 1;
							return "plot_13-beginning" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.ending_3_opened = 1;
							return "plot_13-beginning" }
					}
				}
			},
			"plot_13-31-not-sad-1": {
				"title": text.CHARACTER_46, "img": 125,
				"text": {
					"ru": "Чары больше не действуют. Я не сделаю этого.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Керидвен…", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-not-sad-2" }
					},
					"2": {
						"text": {"ru": "Подожди…", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-not-sad-2" }
					}
				}
			},
			"plot_13-31-not-sad-2": {
				"title": text.CHARACTER_2, "img": 131,
				"text": {
					"ru": "Вот как! Что ж, колдунья… Мы и сами все сделаем. А без своей силы, что заключена в жемчужине, ты не сможешь нам противостоять!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-not-sad-3" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-not-sad-3" }
					}
				}
			},
			"plot_13-31-not-sad-3": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы знали, что это не так. Никогда прежде вы не видели такого колдовства и сейчас завороженно глядели. Онир исчез в ослепительной вспышке…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Керидвен?", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-not-sad-4" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-not-sad-4" }
					}
				}
			},
			"plot_13-31-not-sad-4": {
				"title": text.CHARACTER_46, "img": 125,
				"text": {
					"ru": "Давай сбежим отсюда, Айвен. Исчезнем, растворимся… ",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Керидвен!", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-not-sad-5" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-not-sad-5" }
					}
				}
			},
			"plot_13-31-not-sad-5": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Она потеряла сознание, не успев договорить, и вы вовремя ее подхватили. Ее слова не шли у вас из головы…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Она права - бежать!", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-not-sad-6" }
					},
					"2": {
						"text": {"ru": "Нельзя бежать…", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-not-sad-7" }
					}
				}
			},
			"plot_13-31-not-sad-6": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Когда вы позже сообщили ей о своем решении, она была счастлива, что вы наконец к ней прислушались. И бескрайний океан принял вас в свои объятия, как собственное дитя…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-not-sad-6-1" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-not-sad-6-1" }
					}
				}
			},
			"plot_13-31-not-sad-6-1": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "...однако, кажется, ваша жизнь и правда была связана с драконом. И оборвалась внезапно, и даже безутешная Керидвен не смогла вас спасти.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-31-not-sad-6-end" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-31-not-sad-6-end" }
					}
				}
			},
			"plot_13-31-not-sad-6-end": {
				"title": text.ending_4_title, "img": 163,
				"text": {
					"ru": "Побег от проблем не решил этих проблем. Вы умерли на руках у любимой, а ведь могли провести с ней целую вечность…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							operators.ending_4_opened = 1;
							return "plot_13-beginning" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							operators.ending_4_opened = 1;
							return "plot_13-beginning" }
					}
				}
			},
			"plot_13-29-insert-4-2": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Так больше не могло продолжаться. Вы бы могли выступить против дракона, а если не вы, то кое-кто за вас…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Вы сделаете это!", "en": "..." },
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_13-29-insert-4-2-A-AA"
							}
							if (operators.Alia == 3) {
								return "plot_13-29-insert-4-2-A-AA"
							}
							return "plot_13-35" }
					},
					"2": {
						"text": {"ru": "Вы не сможете...", "en": "..."},
						"next": function(operators) {
							return "plot_13-34" }
					}
				}
			},

			"plot_13-29-insert-4-2-A-AA": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Так больше не могло продолжаться. Вы бы могли выступить против дракона, а если не вы, то кое-кто за вас…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Так и сделать", "en": "..." },
						"next": function(operators) {
							return "plot_13-32" }
					},
					"2": {
						"text": {"ru": "Подумать об Алии", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_13-32-A"
							}
							return "plot_13-32-AA" }
					}
				}
			},
			"plot_13-32-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "Не смей.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Прости…", "en": "..." },
						"next": function(operators) {
							return "plot_13-33" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-33" }
					}
				}
			},
			"plot_13-32-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "Не смей.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Прости…", "en": "..." },
						"next": function(operators) {
							return "plot_13-33" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-33" }
					}
				}
			},
			"plot_13-33": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Она вам не простит. И разве возможно, что вы причините ей боль?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "А вот и чародей идет…", "en": "..." },
						"next": function(operators) {
							return "plot_13-34" }
					},
					"2": {
						"text": {"ru": "Нужно убить дракона!", "en": "..."},
						"next": function(operators) {
							return "plot_13-35" }
					}
				}
			},
			"plot_13-35": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Так больше не могло продолжаться. Вы бы могли выступить против дракона, а если не вы, то кое-кто за вас…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Так и сделать", "en": "..." },
						"next": function(operators) {
							return "plot_13-34" }
					},
					"2": {
						"text": {"ru": "Ждать и надеяться", "en": "..."},
						"next": function(operators) {
							return "plot_13-34" }
					}
				}
			},
			"plot_13-34": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "Помнишь, я спрашивал тебя о милосердии и справедливости?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ну… да?", "en": "..." },
						"next": function(operators) {
							if (operators.Choice_light == 1) {
								return "plot_13-35-light"
							}
							return "plot_13-35-dark" }
					},
					"2": {
						"text": {"ru": "Причем здесь сейчас это?", "en": "..."},
						"next": function(operators) {
							if (operators.Choice_light == 1) {
								return "plot_13-35-light"
							}
							return "plot_13-35-dark" }
					}
				}
			},
			"plot_13-35-light": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "И я буду милосердным... Увидимся на реке Стикс. Прощай…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ну… да?", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-2" }
					},
					"2": {
						"text": {"ru": "Причем здесь сейчас это?", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-2" }
					}
				}
			},

			"plot_13-35-dark": {
				"title": text.CHARACTER_9, "img": 9,
				"text": {
					"ru": "И я буду справедливым... Люди… Они не заслужили второго шанса. Я начну все сначала…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Нет!", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-dark-1" }
					},
					"2": {
						"text": {"ru": "Что…?", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-dark-1" }
					}
				}
			},
			"plot_13-35-light-2": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Компас легко выскользнул из его рук. Миллион осколков - и ваш друг исчез навеки… туда, где была его вечная вахта.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Нет…", "en": "..." },
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_13-35-light-2-A"
							}
							else if (operators.Alia == 3) {
								return "plot_13-35-light-2-AA"
							}
							return "plot_13-35-light-3" }
					},
					"2": {
						"text": {"ru": "Это правильно…", "en": "..."},
						"next": function(operators) {
							if (operators.Alia == 2) {
								return "plot_13-35-light-2-A"
							}
							else if (operators.Alia == 3) {
								return "plot_13-35-light-2-AA"
							}
							return "plot_13-35-light-3" }
					}
				}
			},
			"plot_13-35-light-2-A": {
				"title": text.CHARACTER_32, "img": 13,
				"text": {
					"ru": "О… Тысяча и один осколок… Прямо как в легенде... Я соберу их воедино!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Магия вернется…", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-3" }
					},
					"2": {
						"text": {"ru": "Это правильно…", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-3" }
					}
				}
			},
			"plot_13-35-light-2-AA": {
				"title": text.CHARACTER_32, "img": 35,
				"text": {
					"ru": "О… Тысяча и один осколок… Прямо как в легенде... Я соберу их воедино!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Магия вернется…", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-3" }
					},
					"2": {
						"text": {"ru": "Это правильно…", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-3" }
					}
				}
			},
			"plot_13-35-light-3": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "О Великий Творец! Что это?",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Ничего…", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-4" }
					},
					"2": {
						"text": {"ru": "Он спас нас", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-4" }
					}
				}
			},
			"plot_13-35-light-4": {
				"title": text.CHARACTER_0, "img": 94,
				"text": {
					"ru": "…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-5" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-5" }
					}
				}
			},
			"plot_13-35-light-5": {
				"title": text.CHARACTER_0, "img": 102,
				"text": {
					"ru": "На ваших глазах оно обратилось в прах, и осколок с вашим именем упал к вашим ногам…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-6" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-6" }
					}
				}
			},
			"plot_13-35-light-6": {
				"title": text.CHARACTER_0, "img": 102,
				"text": {
					"ru": " …И о, чудо! Ваша рука вдруг вернулась а изначальное состояние. Теперь все будет хорошо…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							if (operators.Alia >= 2) {
								return "plot_13-35-light-7-ending-A"
							}
/*							else if (operators.Moon_ending == 1) {
								return "plot_13-35-light-7-ending-M"
							}*/
							return "plot_13-35-light-7-ending" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							if (operators.Alia >= 2) {
								return "plot_13-35-light-7-ending-A"
							}
/*							else if (operators.Moon_ending == 1) {
								return "plot_13-35-light-7-ending-M"
							}*/
							return "plot_13-35-light-7-ending" }
					}
				}
			},
			"plot_13-35-light-7-ending-A": {
				"title": text.ending_5_title, "img": 164,
				"text": {
					"ru": "Алие удалось восстановить компас, и магия постепенно вернулась в этот мир. Как и ваш давний друг. Он стал хорошим наставником вашим детям.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							return "plot_13-beginning" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-beginning" }
					}
				}
			},
			"plot_13-35-light-7-ending": {
				"title": text.ending_6_title, "img": 165,
				"text": {
					"ru": "Все вернулось на круги своя, и вы стали обычным человеком, о чем всегда и мечтали. Только магия покинула этот мир, а значит вам придется искать другую профессию…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							return "plot_13-beginning" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-beginning" }
					}
				}
			},
			"plot_13-35-light-7-ending-C": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Керидвен: Айвен, милый Айвен. Все закончилось для них, но не для нас... Я верну тебе бессмертие, только доверься мне. (да, нет)",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-7-ending-C-1" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-7-ending-C-1" }
					}
				}
			},
			"plot_13-35-light-7-ending-C-1": {
				"title": text.ending_7_title, "img": 170,
				"text": {
					"ru": "Вы покорились стихии, доверившись своей прекрасной колдунье. Вы были счастливы, даже не подозревая, что о вас и вашей любви уже слагают легенды.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							operators.ending_7_opened = 1;
							return "plot_13-beginning" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							operators.ending_7_opened = 1;
							return "plot_13-beginning" }
					}
				}
			},
			"plot_13-35-light-7-ending-M": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Лунный торговец: Ну что, все закончилось? (Закончилось… ; Все-таки да!)",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "…", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-7-ending-M-1" }
					},
					"2": {
						"text": {"ru": "…", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-7-ending-M-1" }
					}
				}
			},
			"plot_13-35-light-7-ending-M-1": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Лунный торговец: Для меня в Сант-Марим - тоже. Хватит! Я хочу уехать отсюда навсегда.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Я бы тоже…", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-7-ending-M-2" }
					},
					"2": {
						"text": {"ru": "Понятно…", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-7-ending-M-2" }
					}
				}
			},
			"plot_13-35-light-7-ending-M-2": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Лунный торговец: Я обещал показать тебе Лунную страну. Корабль будет ждать завтра в полночь. Так что если ты еще не передумал…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Конечно нет!", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-7-ending-M-3" }
					},
					"2": {
						"text": {"ru": "Пожалуй как-нибудь позже…", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-7-ending" }
					}
				}
			},
			"plot_13-35-light-7-ending-M-3": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Вы судорожно бегали весь день, доводя до логической точки последние дела. А сами все думали, каким будет Восток…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-7-ending-M-4" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-7-ending-M-4" }
					}
				}
			},
			"plot_13-35-light-7-ending-M-4": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "В назначенный час вы уже стояли у берега. А корабль… парил! Воздушные суда были не вымыслом!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-7-ending-M-5" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-7-ending-M-5" }
					}
				}
			},
			"plot_13-35-light-7-ending-M-5": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Спустя пару часов вы уже были высоко в вышине. Светила луна… Вы еще не знали, что скоро обретете новую Родину…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-light-7-ending-M-ending" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-light-7-ending-M-ending" }
					}
				}
			},
			"plot_13-35-light-7-ending-M-ending": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Концовка: лунная страна.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_13-beginning" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_13-beginning" }
					}
				}
			},
			"plot_13-35-dark-1": {
				"title": text.CHARACTER_0, "img": 128,
				"text": {
					"ru": "Красное солнце разгоралось все ярче, пока все вокруг не растворилось в этом сиянии.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Нет!", "en": "..." },
						"next": function(operators) {
							return "plot_13-35-dark-1-ending" }
					},
					"2": {
						"text": {"ru": "Что…?", "en": "..."},
						"next": function(operators) {
							return "plot_13-35-dark-1-ending" }
					}
				}
			},
			"plot_13-35-dark-1-ending": {
				"title": text.ending_1_title, "img": 171,
				"text": {
					"ru": "Все когда-нибудь начинается сначала. По крайней мере в вашей истории...",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Нет!", "en": "..." },
						"next": function(operators) {
							operators.ending_1_opened = 1;
							return "plot_13-35-dark-1-ending" }
					},
					"2": {
						"text": {"ru": "Что…?", "en": "..."},
						"next": function(operators) {
							operators.ending_1_opened = 1;
							return "plot_13-35-dark-1-ending" }
					}
				}
			},
			"plot_12-37-M": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Мелиноя: Как прекрасен мир под солнцем. (Ааа! Мелиноя… )",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-38-M" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-38-M" }
					}
				}
			},
			"plot_13-beginning": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Поздравляем с завершением квеста!",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "Открыть список концовок", "en": "..." },
						"next": function(operators) {
							graph_core.open_endings();
							return "plot_1-1" }
					},
					"2": {
						"text": {"ru": "Начать сначала", "en": "..."},
						"next": function(operators) {
							return "plot_1-1" }
					}
				}
			},
			"plot_12-38-M": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Мелиноя:Я здесь, как и обещала. И пойду с тобой, куда бы ты ни следовал…",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-38" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-38" }
					}
				}
			},
			"plot_12-38-ending": {
				"title": text.CHARACTER_0, "img": 0,
				"text": {
					"ru": "Мелиноя: Куда бы ты ни следовал… Смерть не будет властна над нами.",
					"en": "- Hello there! \n - General Kenobi..."
				},
				"answers": {
					"1": {
						"text": { "ru": "...", "en": "..." },
						"next": function(operators) {
							return "plot_12-38" }
					},
					"2": {
						"text": {"ru": "...", "en": "..."},
						"next": function(operators) {
							return "plot_12-38" }
					}
				}
			}
		}
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
						return "rand4-21-3-1"	
					}
				},
				"2": {
					"text": { "ru": "Передать матери другую половину", "en": "dont"},
					"next": function(operators) {
						operators.reputation_stat += REPUTATION_STAT_DELTA_1;
						// изменяем операторы
						return "rand4-21-3-1"
					}
				}
			}
		},
		"rand4-21-3-1": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Ох, Боже мой! Вы... Вам же тоже, наверняка, нужны деньги... Спасибо...",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Это все благодаря ему","en": "Do it!"},
					"next": function(operators) {
						operators.money_stat += MONEY_STAT_DELTA_1;
						// изменяем операторы
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Пустяки... Не благодарите!", "en": "dont"},
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

	phoenix: { 
		type: "rand_repeat",
		"cards":{
		"rand_1_start": {
			"title": text.CHARACTER_27, "img": 27,
				"text": {
					"ru": "Красивая птица радует глаз. Вы можете смотреть на неё часами...",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Смотреть","en": "Do it!"},
					"next": function(operators) { 
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
		"rand_2_start": {
			"title": text.CHARACTER_27, "img": 27,
				"text": {
					"ru": "ГФеникс принёс золотое ожерелье.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Забрать","en": "Do it!"},
					"next": function(operators) { 
						
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
			"title": text.CHARACTER_27, "img": 27,
				"text": {
					"ru": "Феникс принёс веточку мирта. Это может пригодиться…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Сделать настойку","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
				},
				"2": {
					"text": { "ru": "Сделать лекарство", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
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
	ball: { 
		type: "rand_repeat",
		"cards":{
		"rand_1_start": {
			"title": text.CHARACTER_19, "img": 27,
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
			"title": text.CHARACTER_19, "img": 27,
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
			"title": text.CHARACTER_19, "img": 27,
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
		"rand_4_start": {
			"title": text.CHARACTER_19, "img": 27,
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
						operators.notgotofest = 1;
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-6_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Нежно-сиреневый или алый?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Нежно-сиреневый","en": "Do it!"},
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_0;
						operators.power_stat -= POWER_STAT_DELTA_0;
						return "rand_ch_2-6-1"	}
				},
				"2": {
					"text": { "ru": "Алый", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						return "rand_ch_2-6-2"
					}
				}
			}
		},
		"rand_ch_2-6-1": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Тогда вот, держите. Дожди повредили их немного, но они все так же прекрасны...",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Вы правы...","en": "Do it!"},
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_0;
						operators.power_stat -= POWER_STAT_DELTA_0;
						return "rand_ch_2-6-11"	}
				},
				"2": {
					"text": { "ru": "Это очень красиво", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						return "rand_ch_2-6-11"
					}
				}
			}
		},
		"rand_ch_2-6-11": {
			"title": text.CHARACTER_0, "img": 133,
			"text": {
				"ru": "Роза вам понравилась. Вы никогда и не видели таких... Однако ее красота недолговечна, и вы решили немедленно что-нибудь с этим сделать.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Сделать экстракт","en": "Do it!"},
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_0;
						operators.power_stat -= POWER_STAT_DELTA_0;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Поместить под купол", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						return "-"
					}
				}
			}
		},
		"rand_ch_2-6-2": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Тогда вот, держите. Дожди повредили их немного, но они все так же прекрасны...",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Вы правы...","en": "Do it!"},
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_0;
						operators.power_stat -= POWER_STAT_DELTA_0;
						return "rand_ch_2-6-22"	}
				},
				"2": {
					"text": { "ru": "Это очень красиво!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
						return "rand_ch_2-6-22"
					}
				}
			}
		},
		"rand_ch_2-6-22": {
			"title": text.CHARACTER_0, "img": 134,
			"text": {
				"ru": "Роза вам понравилась. Вы никогда и не видели таких... Однако ее красота недолговечна, и вы решили немедленно что-нибудь с этим сделать.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Сделать экстракт","en": "Do it!"},
					"next": function(operators) { 
						operators.reputation_stat += REPUTATION_STAT_DELTA_0;
						operators.power_stat -= POWER_STAT_DELTA_0;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Поместить под купол", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_0;
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
						return "rand_ch_2-16"	}
				},
				"2": {
					"text": { "ru": "Ну, как скажете…", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						operators.reputation_stat -= REPUTATION_STAT_DELTA_1;
						return "rand_ch_2-16"
					}
				}
			}
		},
		"rand_ch_2-16": {
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
					"text": { "ru": "Молодец!","en": "Do it!"},
					"next": function(operators) { 
						operators.U_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Эх, я так не умею...", "en": "dont"},
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
					"text": { "ru": "Молодец!","en": "Do it!"},
					"next": function(operators) { 
						operators.U_sym++;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Эх, я так не умею...", "en": "dont"},
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
			"title": text.CHARACTER_19, "img": 19,
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
			"title": text.CHARACTER_19, "img": 19,
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
			"title": text.CHARACTER_19, "img": 19,
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
		"rand_4_start": {
			"title": text.CHARACTER_19, "img": 19,
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
			            "text": { "ru": "Пойти искать", "en": "Do it!" },
			            "next": function(operators) {
			                // изменяем операторы
			                
			                operators.hp_stat += HEALTH_STAT_DELTA_0;
			                operators.money_stat -= MONEY_STAT_DELTA_0;
			                operators.reputation_stat += REPUTATION_STAT_DELTA_1;
			                return "-";
			            }
			        },
			        "2": {
			            "text": { "ru": "Найдется", "en": "dont" },
			            "next": function(operators) {
			                // изменяем операторы
			                
			                operators.reputation_stat -= REPUTATION_STAT_DELTA_2;
			                return "-";
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
							operators.hp_stat = HEALTH_STAT_DELTA_1;
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
		"rand8-3_start": {
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
		"rand8-4_start": {
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
		"rand8-5_start": {
			"title": text.CHARACTER_3, "img": 3,
			"text": {
				"ru": "Я смастерил рогатку.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Ужасно! Зачем она тебе...","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Отлично!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-6_start": {
			"title": text.CHARACTER_6, "img": 6,
			"text": {
				"ru": "Мне нужны особенные чернила... Хе-хе... Понимаете?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да, сейчас","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Зачем?", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-7_start": {
			"title": text.CHARACTER_37, "img": 132,
			"text": {
				"ru": "Отвар белладонны. Пожалуйста.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Это же яд!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Деньги на стол!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-8_start": {
			"title": text.CHARACTER_8, "img": 8,
			"text": {
				"ru": "Эй, друг, подсоби, а? Зелье-конфуз. Один посетитель... В общем, не хочу, чтобы он больше ходил ко мне.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Конечно, вот.","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Это как-то... аморально, нет?", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-9_start": {
			"title": text.CHARACTER_17, "img": 17,
			"text": {
				"ru": "Петрушка, сельдерей… Очень полезно, очень…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Возьму, все возьму","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Буэ", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-10_start": {
			"title": text.CHARACTER_5, "img": 5,
			"text": {
				"ru": "Сушеная ромашка, лепестки роз… Я завариваю их сыну, когда она болен.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Я тоже болен!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Интересный состав…", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-11_start": {
			"title": text.CHARACTER_17, "img": 17,
			"text": {
				"ru": "Ишь, проклятые!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Что случилось?","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "rand8-11"	
					}
				},
				"2": {
					"text": { "ru": "Что опять?", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "rand8-11"
					}
				}
			}
		},
		"rand8-11": {
			"title": text.CHARACTER_17, "img": 17,
			"text": {
				"ru": " Дети шумят. Никакого уважения. Их радостные крики… от них голова болит!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Уу, нехорошие!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Эм…", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-12_Pandor-box-1_start": {
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

		"rand8-13_Pandor-box-2_start": {
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

		"rand8-14_Pandor_box-3_start": {
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

		"rand8-15_Pandor_box-4_start": {
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

		"rand8-16_Pandor_box-5_start": {
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

		"rand8-17_Pandor_box-6_start": {
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

		"rand8-18_Pandor_box-7_start": {
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
		"rand8-19_start": {
			"title": text.CHARACTER_24, "img": 24,
			"text": {
				"ru": "Может мне каких склянок прикупить? Чтобы выглядеть, ну, солиднее…",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Конечно! Да подороже!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Это как-то... неправильно.", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-20_start": {
			"title": text.CHARACTER_16, "img": 16,
			"text": {
				"ru": "Мишка… Мама сказала, он ушёл странствовать, но это неправда! Он потерялся… *плачет*",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Он вернется!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Купить мишку", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "rand8-20-1"
					}
				}
			}
		},
		"rand8-20-1": {
			"title": text.CHARACTER_16, "img": 16,
			"text": {
				"ru": "Он другой.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Он лучше!","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Эм…", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-21_start": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Супчика не найдется для доброго странника?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Что ты тут делаешь?","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "rand8-21"	
					}
				},
				"2": {
					"text": { "ru": "Я уже помог!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-21": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Просто зашел. Ты болен?",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Да...","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "rand8-21-1"	
					}
				},
				"2": {
					"text": { "ru": "Нет!", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "rand8-21-2"
					}
				}
			}
		},
		"rand8-21-1": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Я так и думал. Вот - коренья, листья кое-какие... Проклятие не снимет, но полегче-то будет.",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Спасибо","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Ну все, у меня работа", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-21-2": {
			"title": text.CHARACTER_7, "img": 7,
			"text": {
				"ru": "Правда? Ну и славно!",
				"en": "If you want it, then you'll have to take it"
			},
			"answers": {
				"1": {
					"text": { "ru": "Ну все, у меня работа","en": "Do it!"},
					"next": function(operators) {
						// изменяем операторы
						
						operators.hp_stat += HEALTH_STAT_DELTA_0;
						operators.money_stat -= MONEY_STAT_DELTA_0;
						return "-"	
					}
				},
				"2": {
					"text": { "ru": "Да...", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						
						return "-"
					}
				}
			}
		},
		"rand8-22_start": {
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
		"rand8-23_start": {
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
		"rand8-24_start": {
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
		"rand8-25_start": {
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
		"rand8-26_start": {
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
	"rand10": { 
		"type": "rand_repeat",
		"cards":{
		"rand_1_start": {
			"title": text.CHARACTER_0, "img": 136,
				"text": {
					"ru": "Что это? Полярное сияние? Нет, это сияние огненного чертога.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						;
						return "-"	}
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
		"rand_2_start": {
			"title": text.CHARACTER_0, "img": 136,
				"text": {
					"ru": "Голубые и сиреневые тени просматриваются в всполохах огня...",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_3_start": {
			"title": text.CHARACTER_0, "img": 137,
				"text": {
					"ru": "Здесь ощущается нечто божественное.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 

						return "-"	}
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
		"rand_4_start": {
			"title": text.CHARACTER_0, "img": 137,
				"text": {
					"ru": "Огненные цветы вспыхивают в воздухе и растворяются.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 

						return "-"	}
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
		"rand_5_start": {
			"title": text.CHARACTER_0, "img": 142,
				"text": {
					"ru": "Ваш взгляд не может сфокусироваться, но вы заметили присутствие здешних неземных созданий.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_6_start": {
			"title": text.CHARACTER_0, "img": 142,
				"text": {
					"ru": "Белые птицы наблюдают.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_7_start": {
			"title": text.CHARACTER_0, "img": 138,
				"text": {
					"ru": "Ничего не происходит.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_8_start": {
			"title": text.CHARACTER_0, "img": 143,
				"text": {
					"ru": "Кони Гелиоса резвятся в отдалении.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_9_start": {
			"title": text.CHARACTER_0, "img": 137,
				"text": {
					"ru": "В сиянии светил все кажется прекрасным.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_10_start": {
			"title": text.CHARACTER_0, "img": 137,
				"text": {
					"ru": "Огненные вихри сливаются в причудливые узоры. Птицы, змеи, драконы…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
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
		"rand_11_start": {
			"title": text.CHARACTER_0, "img": 137,
				"text": {
					"ru": "Золотой компас ведёт вас сквозь время и пространство. Сквозь самую суть бытия.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
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
		"rand_12_start": {
			"title": text.CHARACTER_0, "img": 141,
				"text": {
					"ru": "Душа пламени: …",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
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
		"rand_13_start": {
			"title": text.CHARACTER_0, "img": 137,
				"text": {
					"ru": "Солнце… Теперь их были тысячи…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						operators.S_in++;
						return "-"	}
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
		},
	},
	"rand11": { 
		"type": "rand_repeat",
		"cards":{
		"rand_1_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Река течёт и тени в ней стонут. Это Стикс. И цербер воет…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_2_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Царица ночи, Нюкта, играет на лире, музыка завораживает.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_3_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Аид на своей колеснице объезжает свои владения.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Поклониться","en": "Do it!"},
					"next": function(operators) { 

						return "-"	}
				},
				"2": {
					"text": { "ru": "Отвернуться", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_4_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Кошмары ониры клубятся и тянут свои руки.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 

						return "-"	}
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
		"rand_5_start": {
			"title": text.CHARACTER_1, "img": 1,
				"text": {
					"ru": "Мне идет этот венок из золотых цветов?",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Да","en": "Do it!"},
					"next": function(operators) { 
						
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
		"rand_6_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Волны Стикс… От них веет потусторонним холодом.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_7_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "В зарослях на берегу вы нашли что-то. Кажется это… зуб.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Взять","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
				},
				"2": {
					"text": { "ru": "Отбросить", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_8_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Черные травы колышатся в такт потустороннему ветру.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_9_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Черная тень увзялась за вами следом. Кажется, она хочет что-то сказать.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Что?","en": "Do it!"},
					"next": function(operators) { 
						
						return "rand_9"	}
				},
				"2": {
					"text": { "ru": "Отстань", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_9": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Она говорит, что видела светящийся цветок. Вскоре вы нашли только лепестки (+1).",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						operators.Melinoa_gold += 1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						operators.Melinoa_gold += 1;
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_10_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Черные цветы отнюдь не мертвые. Их запах напоминает о садах Сант-Марим.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Подойти ближе","en": "Do it!"},
					"next": function(operators) { 
						
						return "rand_10"	}
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
		"rand_10": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Вы с удивлением обнаружили, что тут даже есть черные пчелы и черные бабочки.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_11_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Цербер чешет себя за ухом. Он выглядит вполне довольным.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_12_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Вы долго думали о своей участи здесь - вы ведь не мертвы… но и не живы. Вы пнули камень, и он плюхнулся в черную воду.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_13_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Черное небо иногда озаряется светом. Что-то похожее на северное сияние вспыхивает тут и там.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
		"rand_14_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "В траве притаилась тень. Она приняла форму жабы, но вас не обмануть.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Прогнать ее","en": "Do it!"},
					"next": function(operators) { 
						
						return "rand_14"	}
				},
				"2": {
					"text": { "ru": "Идти дальше", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_14": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Когда вы ее прогнали, то увидели, что она сидела на золотом цветке, который вы сразу подобрали (+2).",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						operators.Melinoa_gold += 2;
						return "-"	}
				},
				"2": {
					"text": { "ru": "...", "en": "dont"},
					"next": function(operators) {
						operators.Melinoa_gold += 2;
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_15_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Вы сели. А потом погрузились в сон, который длился несколько часов… или дней. Или лет?",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Потянуться","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
				},
				"2": {
					"text": { "ru": "Ужаснуться", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_16_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Черная вода реки будто соткана из дыма, из миллиона серебряных нитей. За созерцанием вы не заметили, как еще золотой осколок оказался у вас прямо под ногами (+1).",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Потянуться","en": "Do it!"},
					"next": function(operators) { 
						operators.Melinoa_gold += 1;
						return "-"	}
				},
				"2": {
					"text": { "ru": "Ужаснуться", "en": "dont"},
					"next": function(operators) {
						operators.Melinoa_gold += 1;
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_17_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Странное существо, один из ониров, подплыл к вам почти вплотную. Кажется, ему есть, что сказать вам…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Слушать","en": "Do it!"},
					"next": function(operators) { 
						
						return "rand_17"	}
				},
				"2": {
					"text": { "ru": "Убежать", "en": "dont"},
					"next": function(operators) {
						// изменяем операторы
						return "-"
					}
				}
			}
		},
		"rand_17": {
			"title": text.CHARACTER_2, "img": 2,
				"text": {
					"ru": "Хочешь? У меня целая горсть осколков… А взамен - лишь сущий пустяк.",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "Да (200 лунных монет)","en": "Do it!"},
					"next": function(operators) {
						operators.Melinoa_gold += 5;
						game_core.data.money -= 250;
						graph_core.update_balance();
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
		"rand_18_start": {
			"title": text.CHARACTER_0, "img": 26,
				"text": {
					"ru": "Огонь рассек небеса. Кажется, Аид в гневе…",
					"en": "If you want it, then you'll have to take it"
				},
			"answers": {
				"1": {
					"text": { "ru": "...","en": "Do it!"},
					"next": function(operators) { 
						
						return "-"	}
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
	},
	},
	"rand12": {
		"type": "rand_repeat",
		"cards": {
			"rand_1_start": {
				"title": text.CHARACTER_5, "img": 5,
					"text": {
						"ru": "Полынь и уксус! Полынь и уксус!",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "Куплю","en": "Do it!"},
						"next": function(operators) { 
							;
							return "-"	}
					},
					"2": {
						"text": { "ru": "Хм...", "en": "dont"},
						"next": function(operators) {
							// изменяем операторы
							return "-"
						}
					}
				}
			},
			"rand_2_start": {
				"title": text.CHARACTER_15, "img": 15,
					"text": {
						"ru": "Помогите… я не хочу умирать…",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "...","en": "Do it!"},
						"next": function(operators) { 
							
							return "-"	}
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
			"rand_3_start": {
				"title": text.CHARACTER_10, "img": 10,
					"text": {
						"ru": "Его Величество призывает все волшебные силы страны.",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "Поклониться","en": "Do it!"},
						"next": function(operators) { 
							return "-"	}
					},
					"2": {
						"text": { "ru": "Отвернуться", "en": "dont"},
						"next": function(operators) {
							// изменяем операторы
							return "-"
						}
					}
				}
			},
			"rand_4_start": {
				"title": text.CHARACTER_0, "img": 0,
					"text": {
						"ru": "(Смерть): Пир во время чумы! Это так по-человечески…",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "Уходи отсюда!","en": "Do it!"},
						"next": function(operators) { 

							return "-"	}
					},
					"2": {
						"text": { "ru": "Завидушь?", "en": "dont"},
						"next": function(operators) {
							// изменяем операторы
							return "-"
						}
					}
				}
			},
			"rand_5_start": {
				"title": text.CHARACTER_0, "img": 0,
					"text": {
						"ru": "(Демон): Мой господин будет доволен",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "Да","en": "Do it!"},
						"next": function(operators) { 
							
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
			"rand_6_start": {
				"title": text.CHARACTER_0, "img": 145,
					"text": {
						"ru": "Дух сильнее тела.",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "...","en": "Do it!"},
						"next": function(operators) { 
							
							return "-"	}
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
			"rand_7_start": {
				"title": text.CHARACTER_5, "img": 5,
					"text": {
						"ru": "Лекарственная полынь… Она не помогает. А что тогда помогает?",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "Успокойтесь, вот держите","en": "Do it!"},
						"next": function(operators) { 
							
							return "-"	}
					},
					"2": {
						"text": { "ru": "Хм...", "en": "dont"},
						"next": function(operators) {
							// изменяем операторы
							return "-"
						}
					}
				}
			},
			"rand_8_start": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Вот, держи. Это маска, носи маску.",
					"en": "If you want it, then you'll have to take it"
				},
				"answers": {
					"1": {
						"text": { "ru": "Не буду","en": "Do it!"},
						"next": function(operators) { 	
							return "-"	
						}
					},
					"2": {
						"text": { "ru": "Да, давай", "en": "dont"},
						"next": function(operators) {
							// изменяем операторы
							return "-"
						}
					}
				}
			},
			"rand_9_start": {
				"title": text.CHARACTER_8, "img": 8,
				"text": {
					"ru": "Ты неправильно носишь маску. Чума же!",
					"en": "If you want it, then you'll have to take it"
				},
				"answers": {
					"1": {
						"text": { "ru": "А ты почему не носишь?","en": "Do it!"},
						"next": function(operators) { 
							
							return "-"	}
					},
					"2": {
						"text": { "ru": "Отстань", "en": "dont"},
						"next": function(operators) {
							// изменяем операторы
							return "-"
						}
					}
				}
			},
			"rand_10_start": {
				"title": text.CHARACTER_17, "img": 17,
					"text": {
						"ru": "Это создатель нас покарал. Мы все скоро помрем.",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "Вздор это!","en": "Do it!"},
						"next": function(operators) { 
							
							return "-"	}
					},
					"2": {
						"text": { "ru": "Возможно...", "en": "dont"},
						"next": function(operators) {
							// изменяем операторы
							return "-"
						}
					}
				}
			},
			"rand_11_start": {
				"title": text.CHARACTER_24, "img": 24,
					"text": {
						"ru": "Я тут рецептик один… приобрел. Столичное лекарство Королевской гильдии.",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "Здорово","en": "Do it!"},
						"next": function(operators) { 
							
							return "-"	}
					},
					"2": {
						"text": { "ru": "Украл?", "en": "dont"},
						"next": function(operators) {
							// изменяем операторы
							return "-"
						}
					}
				}
			}
		}
	},
	"rand13": { 
		"type": "rand_repeat",
		"cards":{
			"rand_1_start": {
				"title": text.CHARACTER_0, "img": 93,
					"text": {
						"ru": "Дракон обрушился на вас столпами испепеляющего пламени. От вас ничего не осталось…",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "...","en": "Do it!"},
						"next": function(operators) { 
							if (operators.Chronomer == 1) {
								operators.hp_stat -= 30;
								return "-"
							}
							operators.hp_stat -= 100;
							return "-"	}
					},
					"2": {
						"text": { "ru": "...", "en": "dont"},
						"next": function(operators) {
							if (operators.Chronomer == 1) {
								operators.hp_stat -= 30;
								return "-"
							}
							operators.hp_stat -= 100;
							return "-"	}
					}
				}
			},
			"rand_2_start": {
				"title": text.CHARACTER_0, "img": 93,
					"text": {
						"ru": "Дракон обрушился на вас столпами испепеляющего пламени. От вас ничего не осталось…",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "...","en": "Do it!"},
						"next": function(operators) {
							if (operators.Chronomer == 1) {
								operators.hp_stat -= 30;
								return "-"
							}
							operators.hp_stat -= 100;
							return "-"	}
					},
					"2": {
						"text": { "ru": "...", "en": "dont"},
						"next": function(operators) {
							if (operators.Chronomer == 1) {
								operators.hp_stat -= 30;
								return "-"
							}
							operators.hp_stat -= 100;
							return "-"	}
					}
				}
			},
			"rand_3_start": {
				"title": text.CHARACTER_0, "img": 93,
					"text": {
						"ru": "Дракон обрушился на вас столпами испепеляющего пламени. От вас ничего не осталось…",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "Поклониться","en": "Do it!"},
						"next": function(operators) { 
							if (operators.Chronomer == 1) {
								operators.hp_stat -= 30;
								return "-"
							}
							operators.hp_stat -= 100;
							return "-"	}
					},
					"2": {
						"text": { "ru": "Отвернуться", "en": "dont"},
						"next": function(operators) {
							if (operators.Chronomer == 1) {
								operators.hp_stat -= 30;
								return "-"
							}
							operators.hp_stat -= 100;
							return "-"	}
						
					}
				}
			},
			"rand_4_start": {
				"title": text.CHARACTER_0, "img": 93,
					"text": {
						"ru": "Дракон обрушился на вас столпами испепеляющего пламени. От вас ничего не осталось…",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "...","en": "Do it!"},
						"next": function(operators) {
							if (operators.Chronomer == 1) {
								operators.hp_stat -= 30;
								return "-"
							}
							operators.hp_stat -= 100;
							return "-"	}
					},
					"2": {
						"text": { "ru": "...", "en": "dont"},
						"next": function(operators) {
							if (operators.Chronomer == 1) {
								operators.hp_stat -= 30;
								return "-"
							}
							operators.hp_stat -= 100;
							return "-"	}
						
					}
				}
			},
			"rand_5_start": {
				"title": text.CHARACTER_0, "img": 93,
					"text": {
						"ru": "Дракон обрушился на вас столпами испепеляющего пламени. От вас ничего не осталось…",
						"en": "If you want it, then you'll have to take it"
					},
				"answers": {
					"1": {
						"text": { "ru": "Да","en": "Do it!"},
						"next": function(operators) { 
							if (operators.Chronomer == 1) {
								operators.hp_stat -= 30;
								return "-"
							}
							operators.hp_stat -= 100;
							return "-"	}
					},
					"2": {
						"text": { "ru": "Нет", "en": "dont"},
						"next": function(operators) {
							if (operators.Chronomer == 1) {
								operators.hp_stat -= 30;
								return "-"
							}
							operators.hp_stat -= 100;
							return "-"	}
					}
				}
			}
		}
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
			}
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
	}
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
			ru: "Перо феникса",
			en: "item"
		},
		description: {
			ru: "Преданный фамильяр стихии огня",
			en: "description"
		},
		long_description: {
			ru: "Магическое создание скрасит ваш досуг, а также придет на помощь в трудную минуту (карты будут добвалены в колоду).",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_5.png",
		cost: 250,
		available:true,
		bought: false,
		effect: function() {
			operators.Art_phoenix = 1;
			game_core.data.operators[shop_codes[4]] += 1;
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"6": {
		title: {
			ru: "Серебряный нож",
			en: "item"
		},
		description: {
			ru: "От вурдалаков и прочей нечисти",
			en: "description"
		},
		long_description: {
			ru: "Прекрасная вещь и чистого серебра может пригодиться в самый неподходящий момент.",
			en: "long description"
		},
		shards: 10,
		icon_src: "images/for_shop/item_11.png",
		cost: 250,
		available:true,
		bought: false,
		effect: function() {
			operators.Art_knife = 1;
			game_core.data.operators[shop_codes[5]] += 1;
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"7": {
		title: {
			ru: "Штормгласс",
			en: "item"
		},
		description: {
			ru: "Вместилище духа",
			en: "description"
		},
		long_description: {
			ru: "Некогда в него была заключена сущность, которую было слишком опасно держать на свободе (карты будут добвалены в колоду).",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_8.png",
		cost: 250,
		available:true,
		bought: false,
		effect: function() {
			operators.Art_stormglass = 1;
			game_core.data.operators[shop_codes[6]] += 1;
			graph_core.update_stats();
			graph_core.update_shop();
			
		}
	},
	"8": {
		title: {
			ru: "Огненные кристаллы",
			en: "Fire crystals"
		},
		description: {
			ru: "Своего рода магический ключ",
			en: "description"
		},
		long_description: {
			ru: "Сущесвтует поверье, что они способны раскрыть тайны, хранящиеся в зашифрованных магических картах.",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_2.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			operators.Art_crystal = 1;
			game_core.data.operators[shop_codes[7]] += 1;
			graph_core.update_stats();
			graph_core.update_shop();
			
		}
	},
	"9": {
		title: {
			ru: "Бобы",
			en: "item"
		},
		description: {
			ru: "Какие-то бобы, мерцающие на свету",
			en: "description"
		},
		long_description: {
			ru: "Никто и никогда не видел, как выглядят семена диких чароцветов. Может быть, это они? (карты будут добвалены в колоду)",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_10.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			operators.Art_flower = 1;
			game_core.data.operators[shop_codes[8]] += 1;
			graph_core.update_stats();
			graph_core.update_shop();
			
		}
	},
	"10": {
		title: {
			ru: "Шар предсказаний",
			en: "Magic ball"
		},
		description: {
			ru: "Узри свое будущее",
			en: "description"
		},
		long_description: {
			ru: "Есть те, кто верят в них, и те - кто нет. Не стоит наделять бездушный кусок камня великой силой. Наверное. (карты будут добвалены в колоду)",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_9.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			operators.Art_ball = 1;
			game_core.data.operators[shop_codes[9]] += 1;
			graph_core.update_stats();
			graph_core.update_shop();
			
		}
	},
	"11": {
		title: {
			ru: "Яйцо",
			en: "The egg"
		},
		description: {
			ru: "Странное яйцо неизвестного создания",
			en: "description"
		},
		long_description: {
			ru: "Лунный торговец не знает, кто из него вылупится, но заверяет, что это точно не дракон (карты будут добвалены в колоду).",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_3.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			operators.Art_cosmos = 1;
			game_core.data.operators[shop_codes[10]] += 1;
			graph_core.update_stats();
			graph_core.update_shop();
			
		}
	},
	"12": {
		title: {
			ru: "Свет звезд",
			en: "item"
		},
		description: {
			ru: "Больше, чем просто лекарство",
			en: "description"
		},
		long_description: {
			ru: "Его созерцать можно целую вечность, однако не стоит забывать, что это сильное магическое средство.",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_12.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			operators.Art_starlight = 1;
			game_core.data.operators[shop_codes[11]] += 1;
			graph_core.update_stats();
			graph_core.update_shop();
			
		}
	},
	"13": {
		title: {
			ru: "Книга заклинаний",
			en: "Spell book"
		},
		description: {
			ru: "Для познания магического искусства",
			en: "description"
		},
		long_description: {
			ru: "Книга со знанием, доступном лишь избранным... и тем, кто разбирается в рунах и иероглифах Египта.",
			en: "long description"
		},
		shards: 1,
		icon_src: "images/for_shop/item_13.png",
		cost: 100,
		available:true,
		bought: false,
		effect: function() {
			operators.Art_book = 1;
			game_core.data.operators[shop_codes[12]] += 1;
			graph_core.update_stats();
			graph_core.update_shop();
			
		}
	}
}

var special_shop_items = {
	"1": {
		title: {
			ru: "Отключение рекламы",
			en: "Ad-Free Experience"
		},
		description: {
			ru: "Отключите все рекламные объявления в игре.",
			en: "Disable all ads in the game."
		},
		long_description: {
			ru: "Забудьте об отвлекающих рекламных объявлениях и погружайтесь в игру без прерываний.",
			en: "Forget about the distracting ads and immerse yourself in the game without interruptions."
		},
		icon_src: "images/for_shop/ad_free.png",
		cost: 200, // Price for disabling ads
		available: true,
		bought: false,
		effect: function() {
			game_core.settings.adsDisabled = true; // Example of disabling ads in the game
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"2": {
		title: {
			ru: "100 монет",
			en: "100 Coins"
		},
		description: {
			ru: "Получите 100 монет.",
			en: "Receive 100 coins."
		},
		long_description: {
			ru: "Используйте монеты для покупки улучшений и бонусов.",
			en: "Use coins to purchase upgrades and bonuses."
		},
		icon_src: "images/for_shop/100_coins.png",
		cost: 50, // Price for 100 coins
		available: true,
		bought: false,
		effect: function() {
			game_core.data.coins += 100; // Add 100 coins to the player's account
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"3": {
		title: {
			ru: "500 монет",
			en: "500 Coins"
		},
		description: {
			ru: "Получите 500 монет.",
			en: "Receive 500 coins."
		},
		long_description: {
			ru: "Используйте монеты для покупки улучшений и бонусов.",
			en: "Use coins to purchase upgrades and bonuses."
		},
		icon_src: "images/for_shop/500_coins.png",
		cost: 200, // Price for 500 coins
		available: true,
		bought: false,
		effect: function() {
			game_core.data.coins += 500; // Add 500 coins to the player's account
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"4": {
		title: {
			ru: "1000 монет",
			en: "1000 Coins"
		},
		description: {
			ru: "Получите 1000 монет.",
			en: "Receive 1000 coins."
		},
		long_description: {
			ru: "Используйте монеты для покупки улучшений и бонусов.",
			en: "Use coins to purchase upgrades and bonuses."
		},
		icon_src: "images/for_shop/1000_coins.png",
		cost: 350, // Price for 1000 coins
		available: true,
		bought: false,
		effect: function() {
			game_core.data.coins += 1000; // Add 1000 coins to the player's account
			graph_core.update_stats();
			graph_core.update_shop();
		}
	},
	"5": {
		title: {
			ru: "5000 монет",
			en: "5000 Coins"
		},
		description: {
			ru: "Получите 5000 монет.",
			en: "Receive 5000 coins."
		},
		long_description: {
			ru: "Используйте монеты для покупки улучшений и бонусов.",
			en: "Use coins to purchase upgrades and bonuses."
		},
		icon_src: "images/for_shop/5000_coins.png",
		cost: 800, // Price for 5000 coins
		available: true,
		bought: false,
		effect: function() {
			game_core.data.coins += 5000; // Add 5000 coins to the player's account
			graph_core.update_stats();
			graph_core.update_shop();
		}
	}
};


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
		description: {ru: "Ваш друг и коллега из лунной страны на Востоке", en: ""},
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
		description: {ru: "Сживет кого угодно со свету", en: ""},
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
	"25": {
		title: "Мелиноя",
		description: {ru: "Хтоническая нимфа и дочь Аида", en: ""},
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
		hint_description: {ru: "Лунному торговцу нравятся бабочки в банке.", en: ""}
	},
	"2": {
		title: {ru: "Благодарность нищих", en: "achievement 2"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "Покормите нищего три раза.", en: ""}
	},
	"3": {
		title: {ru: "Фамильный изумруд", en: "achievement 3"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "В саду можно найти много интересного.", en: ""}
	},
	"4": {
		title: {ru: "Светочи", en: "achievement 4"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "Светочи ничего не расскажут, если их не спрашивать.", en: ""}
	},
	"5": {
		title: {ru: "Свободная", en: "achievement 5"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "Верните жемчужину ее владелице.", en: ""}
	},
	"6": {
		title: {ru: "Монстр в темноте", en: "achievement 6"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "Найдите место, куда ведет магическая карта.", en: ""}
	},
	"7": {
		title: {ru: "Без потерь", en: "achievement 7"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "Помогайте и спрашивайте.", en: ""}
	},
	"8": {
		title: {ru: "Краски для картины", en: "achievement 8"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "Помогите художнику.", en: ""}
	},
	"9": {
		title: {ru: "Повелитель бури", en: "achievement 9"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "Раскройте секрет штормгласса", en: ""}
	},
	"10": {
		title: {ru: "Все схвачено", en: "achievement 10"},
		img_src: "./images/for_achievements/icons/default.png",
		description: {ru: "", en: ""},
		hint_description: {ru: "Скупите у лунного торговца все артефакты", en: ""}
	},	
}

var endings = {
	"1": {
		title: {ru: "1. Все сначала", en: ""},
		description: {ru: "Если что-то не получилось - всегда можно попробовать все сначала.", en: ""},
		img_src: "./images/for_endings/01.jpg"
	},
	"2": {
		title: {ru: "2. Разрушитель миров", en: ""},
		description: {ru: "Кто-то ведь должен занять место злодея.", en: ""},
		img_src: "./images/for_endings/02.jpg"
	},
	"3": {
		title: {ru: "3. Рассвет мрака", en: ""},
		description: {ru: "Концовка, в которой для вас все кончилось плохо. И не только для вас...", en: ""},
		img_src: "./images/for_endings/03.jpg"
	},
	"4": {
		title: {ru: "4. Отблески счастья", en: ""},
		description: {ru: "Побег от проблем, к сожалению, не решил этих самых проблем.", en: ""},
		img_src: "./images/for_endings/04.jpg"
	},
	"5": {
		title: {ru: "5. Хранители магии ♥", en: ""},
		description: {ru: "♥", en: ""},
		img_src: "./images/for_endings/05.jpg"
	},
	"6": {
		title: {ru: "6. Сила человека", en: ""},
		description: {ru: "В том, чтобы быть обычным, тоже есть свое очарование...", en: ""},
		img_src: "./images/for_endings/06.jpg"
	},
	"7": {
		title: {ru: "7. Во власти океана ♥", en: ""},
		description: {ru: "♥", en: ""},
		img_src: "./images/for_endings/07.jpg"
	},
	"8": {
		title: {ru: "8. Лунная страна", en: ""},
		description: {ru: "Мифическое место, где технологии давно ушли далеко вперед, стало вашим новым домом.", en: ""},
		img_src: "./images/for_endings/08.jpg"
	},
	"0": {
		title: {ru: "9. В объятиях нимфы ♥", en: ""},
		description: {ru: "♥", en: ""},
		img_src: "./images/for_endings/09.jpg"
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
