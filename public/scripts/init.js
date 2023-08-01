var socket;
if (SOCKETIO) {
    socket = io();
}




var get_random_elements = function(arr, num=1, except_elements = []) {

    var elements = []

    var new_arr = arr.filter(el => !except_elements.includes(el));


    while (elements.length < num) {
        var rand_index = Math.floor(Math.random() * new_arr.length)

        elements.push(new_arr[rand_index])
        new_arr.splice(rand_index, 1);
        
    }

    return elements
}

var get_random_num = function(a, b, except_elements = []) {
    var num = Math.floor(Math.random() * (b-a))+a;

    while (except_elements.includes(num) == true) {
        num = Math.floor(Math.random() * (b-a))+a;
    }

    return num
}

var delete_val = function(arr, val) {
    var myIndex = arr.indexOf(val);
    if (myIndex !== -1) {
        arr.splice(myIndex, 1);
    }

    return arr
}

var format_to_frame = function(frame) {
    if (frame < 10) {
        return '0' + frame
    }
    return String(frame);
}

/*
// store ref to original method in variable
const originalConsoleError = console.error;

// overwrite ref to method with custom function
console.error = function(...args) {
  // get your out-div
  errors.push(args);

  // call original method
  return originalConsoleError.apply(this, args);
};
*/
var make_error = function() {
    x.x = 3;
}

// техническое ядро
var tech_core = {
    "user_type": 'none',
    "sdk": "",
    "sdk_ready": false,
    "console_errors": [],
    "payments": null, // для внутриигровых покупок,
    "payments_ready": false,
    "platform": PLATFORM_TYPE,
    "game_ready": false,
    "mouse_down": false,
    "mouse_x": 0,
    "mouse_y": 0,
    "last_interstitial_ad_show": 0,
    "last_interstitial_ad_open": 0,
    "last_ad_suggest": 0,
    "launch_time": Date.now(),
    "tv_data": {
    },
    "ysdk_player": 1,
    "local_storage_ready": false,
    "cloud_storage_ready": false,
    "my_server_ready": false,
    "streaming": false,
    "init_sdk": function() {
        YaGames
            .init({
                /*
                adv: {
                    onAdvClose: wasShown => {
                        console.info('[yandex] adv closed!');
                    }
                }
                */
            })
            .then(y_sdk => {
                y_sdk.getStorage().then(safeStorage => Object.defineProperty(window, 'localStorage', { get: () => safeStorage }))
                .then(() => {
                   localStorage.setItem('key', '[yandex] safe storage is working');
                   console.log(localStorage.getItem('key'))
                   tech_core.local_storage_ready = true;
                })
            })
        // инициализция SDK
       if (PLATFORM_TYPE == 'yandex') {
            YaGames
                .init({
                    /*
                    adv: {
                        onAdvClose: wasShown => {
                            console.info('[yandex] adv closed!');
                        }
                    }
                    */
                })
                .then(y_sdk => {
                    console.log("[yandex] вторая инициализация")
                    y_sdk.getPlayer({scopes: false}).then(_player => {
                        tech_core.ysdk_player = _player;
                        if (_player.getMode() === 'lite') {
                            console.log('[yandex] игрок не авторизован')
                        } else {
                            tech_core.cloud_storage_ready = true;
                            console.log('[yandex] серверное хранилище яндекса готово')
                            graph_core.set_logged_status();
                        }
                    }).catch(err => {
                        // Ошибка при инициализации объекта Player.
                        
                        console.log('[yandex] не удалось выгрузить профиль с сервера')
                        console.log(err)
                    });

                    tech_core.sdk = y_sdk;
                    tech_core.user_type = y_sdk.deviceInfo.type
                    if (y_sdk.deviceInfo.type != 'tv') {
                        /*
                        y_sdk.adv.showFullscreenAdv({
                            callbacks: {
                                onOpen: function() {

                                    tech_core.last_interstitial_ad_open = Date.now();

                                },
                                onClose: function(wasShown) {
                                // some action after close
                                    if (wasShown) {
                                        tech_core.send_ym_report('fullscreen_adv_shown')
                                        tech_core.last_interstitial_ad_show = Date.now();
                                        if (tech_core.last_interstitial_ad_show - tech_core.last_interstitial_ad_show > 3000) {
                                            //tech_core.send_ym_report('fullscreen_adv_3_sec')
                                        }
                                    }
                                },
                                onError: function(error) {
                                    // some action on error
                                }
                            }
                        })
                        */
                    }
                   
                    //tech_core.user_type = 'tv'
                    tech_core.set_control(tech_core.user_type)
                    //tech_core.set_auto_control();
                    if (tech_core.user_type == "tv") {
                        tech_core.send_ym_report("visit_ya_tv");
                    }
                    if (PLATFORM_TYPE == 'yandex') {
                        tech_core.sdk_ready = true;
                        if (tech_core.game_ready) {
                            tech_core.sdk.features.LoadingAPI.ready();
                        }
                    }
                    console.log('[yandex] yandex sdk ready')

                    // запускаем подготовку покупок

                    y_sdk.getPayments({ signed: true }).then(payments => {
                            // Покупки доступны.
                            tech_core.payments = payments;
                            console.log('[yandex] покупки доступны')
                            tech_core.payments_ready = true;
                        }).catch(err => {
                            // Покупки недоступны. Включите монетизацию в консоли разработчика.
                            // Убедитесь, что на вкладке Покупки консоли разработчика присутствует таблица
                            // хотя бы с одним внутриигровым товаром и надписью «Покупки разрешены».
                            console.log('[yandex] покупки недоступны. Ошибка:')
                            console.log(err);
                        })
                })
        } else if (PLATFORM_TYPE == 'vk') {
            VK.init(function() {
                 // API initialization succeeded
                 // Your code here
                 console.log('[vk] VK SDK inited')
              }, function() {
                 // API initialization failed
                 // Can reload page here
                 console.log('[vk] VK SDK failed to init')
            }, '5.131');


            var user_id = null;   // user's id
            var app_id = VK_APP_ID;  // your app's id
             
            admanInit({
                user_id: user_id,
                app_id: VK_APP_ID,
                type: 'preloader',         // 'preloader' or 'rewarded' (default - 'preloader')
                params: {preview: 1}   // to verify the correct operation of advertising
            }, onAdsReady, onNoAds);
             
            function onAdsReady(adman) {
              adman.onStarted(function () {});
              adman.onCompleted(function() {});          
              adman.onSkipped(function() {});          
              adman.onClicked(function() {});
              adman.start('preroll');

              vkBridge.send("VKWebAppShowNativeAds", {ad_format:"preloader"})
                .then(data => console.log('[vk]', data.result))
                .catch(error => console.log('[vk]', error));
            };
            function onNoAds() {
                console.log('[vk] no ads')
            };

            // подгружает рекламу
            vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "reward"});
            vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});
        } else if (PLATFORM_TYPE == 'sber') {
            var onSuccess = () => {
                tech_core.sdk_ready = true
                console.log('[sber] AdSdk Inited');
            };
            var onError = (err) => {
                console.error('[sber] AdSDK Init Error', err);
            };
            const token = SBER_APP_TOKEN;
            const initPhrase = 'Запусти ' + SBER_APP_NAME;

            add_inner_script_to_head(`
                  window.assistant.createAssistant({
                         getState: () => {
                                return {};
                         },
                  });
           `);
            
            if (SBER_testing == true) {
                window.SberDevicesAdSDK.initDev({ token: token, initPhrase: initPhrase, onSuccess, onError, test: true });
            } else {
                window.SberDevicesAdSDK.init({onSuccess, onError, test: false})
            }       
        } else if (PLATFORM_TYPE == 'gm') {
            window.SDK_OPTIONS = {
                gameId: GM_APP_ID,
                onEvent: function (a) {
                    switch (a.name) {
                        case "SDK_GAME_PAUSE":
                
                        // pause game logic / mute audio
                        break;
                        case "SDK_GAME_START":
                            
                            // advertisement done, resume game logic and unmute audio
                        break;
                        case "SDK_READY":
                            console.log('[gm] sdk ready')
                            tech_core.sdk_ready = true
                            // when sdk is ready
                        break;
                    }
                }     
            };
            (function (a, b, c) {
                var d = a.getElementsByTagName(b)[0];
                a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d))
            })(document, "script", "gamemonetize-sdk"); 
        } else if (PLATFORM_TYPE == 'gd') {
            window["GD_OPTIONS"] = {
                "gameId": GD_APP_ID,
                "advertisementSettings": {
                    "debug": GD_AD_DEBUG, // Enable IMA SDK debugging.
                    "autoplay": false, // Don't use this because of browser video autoplay restrictions.
                    "locale": "en", // Locale used in IMA SDK, this will localize the "Skip ad after x seconds" phrases.
                },
                "onEvent": function(event) {
                    switch (event.name) {
                        case "SDK_GAME_START":
                        // advertisement done, resume game logic and unmute audio

                        break;
                        case "SDK_GAME_PAUSE":
                            // pause game logic / mute audio
                            back_music.mute(true)
                            Howler.volume(0);
                            break;
                        case "SDK_GDPR_TRACKING":
                            // this event is triggered when your user doesn't want to be tracked
                            break;
                        case "SDK_GDPR_TARGETING":
                            // this event is triggered when your user doesn't want personalised targeting of ads and such
                            break;
                    }
                },
            };
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://html5.api.gamedistribution.com/main.min.js';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'gamedistribution-jssdk'));
        }
    },
    "validate_progress": function(data) {
        if (data == null) {
            return game_core.data;
        } else {
            if (data.protocol) {
                if (data.protocol == PROGRESS_PROTOCOL) {
                    return data;
                } else {
                    // смена протокола
                    // у нас пока один протокол так что
                    return game_core.data;
                }
            } else {
                return game_core.data
            }
        }
    },
    "load_progress": function() {
        if (SHOULD_LOAD_PROGRESS) {
            var data = null;
            try {
                var data = localStorage.getItem(STORAGE_NAME)
            } catch(e) {
                console.log('[tech_core] не удалось загрузить прогресс из локального хранилища')
                console.log(e)
            }
            

            if (data != null) {

                //game_core.data = data
                game_core.data = tech_core.validate_progress(JSON.parse(localStorage.getItem(STORAGE_NAME)))
                console.log('[tech_core] прогресс загружен из локального хранилища')
            }

            // здесь мы должны выгрузить прогресс из облака а затем сравнить и сказать игроку так и так дескать


        } else {
            // данные по умолчанию (при первом запуске)
            // тут в принципе ничего не надо трогать значение по умолчанию и так уже предзаписано


        }
        
    },
    "save_progress": function() {
        if (tech_core.local_storage_ready) {
            localStorage.setItem(STORAGE_NAME, JSON.stringify(game_core.get_progress_data()))
            console.log('[tech_core] прогресса сохранен на локальное хранилище')
        }

        if (tech_core.cloud_storage_ready) {
            var data_for_cloud = {};
            data_for_cloud[STORAGE_NAME] = JSON.stringify(game_core.get_progress_data())
            tech_core.ysdk_player.setData(data_for_cloud)
            console.log('[tech_core] прогресс сохранён на серверное хралище Яндекса')
        }
        //window.localStorageFallback.setItem(STORAGE_NAME, JSON.stringify(game_core.data))
    },
    "show_rewarded_video": function(success_callback) {
        tech_core.send_ym_report('rewarded_video_try');
        if (tech_core.platform == 'yandex') {
            tech_core.sdk.adv.showRewardedVideo({
                callbacks: {
                    onOpen: () => {
                        console.log('[yandex] Video ad open.');
                        tech_core.send_ym_report('rewarded_video_open');
                    },
                    onRewarded: () => {
                        console.log('[yandex] Rewarded!');
                        success_callback()
                        tech_core.send_ym_report('rewarded_video_rewarded')
                    },
                    onClose: () => {
                        console.log('[yandex] Video ad closed.');
                    }, 
                    onError: (e) => {
                        console.log('[yandex] Error while open video ad:', e);
                    }
                }
            })
        } else if (tech_core.platform == 'sber') {
             window.SberDevicesAdSDK.runVideoAd({
                onSuccess: function() {
                    success_callback();
                    tech_core.send_ym_report('rewarded_video_rewarded')
                }, 
                onError: function(e) {
                    console.log(e)
                }, 
                mute: false,
            });
        } else if (tech_core.platform == 'vk') {
            
            vkBridge.send("VKWebAppShowNativeAds", {ad_format:"reward"})
            .then(function(data) {
                success_callback()
                tech_core.send_ym_report('rewarded_video_rewarded')
            })
            .catch(error => console.log(error));
            vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "reward", "use_waterfall": true});
        }
    },
    "send_ym_report": function(msg) {
        if (SEND_YM_REPORTS) {
            console.log(msg)
            ym(YM_NUMBER, 'reachGoal', msg)
        }
    },
    "show_interstitial_ad": function(limit = true, success_callback_1, success_callback_2) {
        var start_time = 0;
        var dur = 0;
        if ((Date.now() - tech_core.last_interstitial_ad_show > AD_INTERVAL && Date.now() - tech_core.launch_time > AD_DELAY) || limit == false) {
            tech_core.send_ym_report('fullscreen_adv_try')
            if (tech_core.platform == 'yandex') {
                tech_core.sdk.adv.showFullscreenAdv({
                    callbacks: {
                        onOpen: function() {

                           start_time = Date.now();
                           
                           //alert("ad opened")
                        },
                        onClose: function(wasShown) {
                        // some action after close
                            if (wasShown) {
                                dur = Date.now() - start_time; 
                                tech_core.last_interstitial_ad_show = Date.now();
                                console.log(dur)
                                if (dur > DUR_ACHIEVE) {
                                    success_callback_1();
                                } else {
                                    success_callback_2();
                                }
                            }
                        },
                        onError: function(error) {
                            // some action on error
                            return 0;
                        }
                    }
                })
            } else if (tech_core.platform == 'sber') {
                var onSuccess = function() {
                    tech_core.last_interstitial_ad_show = Date.now();
                    tech_core.send_ym_report('fullscreen_adv_shown')
                }
                var onError = function(e) {
                    console.log(e)
                }
                window.SberDevicesAdSDK.runBanner({
                    onSuccess,
                    onError,
                });
            } else if (tech_core.platform == 'vk') {
                vkBridge.send("VKWebAppCheckNativeAds", {"ad_format": "interstitial"});

                vkBridge.send("VKWebAppShowNativeAds", {ad_format:"interstitial"})
                    .then(function(data) {
                        tech_core.last_interstitial_ad_show = Date.now();
                        tech_core.send_ym_report('fullscreen_adv_shown')
                    })
                    .catch(error => console.log(error));
            }
        }

        
    },
    "open_vk_group": function() {
        window.open("https://vk.com/ingenium_games", "_blank");
        return false
    },
    "invite_friend": function() {
        tech_core.send_ym_report("invite_friend_btn")
        if (tech_core.platform == 'vk') {
            vkBridge.send("VKWebAppShowInviteBox", {})
            .then(function(data) {
                console.log('[vk]', data)
                if (data.success) {
                    tech_core.send_ym_report('share_with_friend')
                }
                
            })
            .catch(function(error) {
                console.log('[vk]', error)
            });
        }
    },
    "add_game_to_menu": function() {
        tech_core.send_ym_report("add_to_fav_btn")
        if (tech_core.platform == 'vk') {
            vkBridge.send("VKWebAppAddToFavorites")
            .then(function(data) {
                if (data.result) {
                    // чувак добавил в избранное наше приложение
                    tech_core.send_ym_report('add_to_fav')
                }
            })
        }
    },
    "join_group": function() {
        tech_core.send_ym_report("join_group_btn");
        if (tech_core.platform == 'vk') {
            vkBridge.send("VKWebAppJoinGroup", {"group_id": 212602446})
            .then(function(data) {
               
                if (data.result) {
                    // чувак успешно вступил в группу
                    tech_core.send_ym_report('joined_group')
                }
                
            })
        }
        graph_core.hide_join_group_block();
        game_core.get_next_answer(false);
        game_core.data.joined_group = true
        tech_core.save_progress();
    },
    "send_post": function(message, attachments = VK_APP_LINK) {
        tech_core.send_ym_report("send_vk_post_btn")
        if (tech_core.platform == 'vk') {

            vkBridge.send("VKWebAppShowWallPostBox", {
                "message": message,
                "attachments": attachments
            }).then(function(data) {
               
                if (data.post_id != null && data.post_id != undefined) {
                    // чувак успешно вступил в группу
                    tech_core.send_ym_report('sent_post')
                } 
            })
        }
    },
    "reset_progress": function(default_data) {
        game_core.data = default_data
        /*
        game_core.data = {
            "history": [],
            "mistakes_history": [],
            "lifes": 3,
            "streak": 0,
            "streak_history": ['0'],
            "right_answers": 0,
            "gotten_review": false,
            "joined_group": false,
            "available_questions": [],
        }
        */
        /*
        for (var i = 0; i < FILMS_AMOUNT; i++) {
            game_core.data.available_questions.push(i+1)
        }
        */
        tech_core.save_progress();
    },
    "set_auto_control": function() {
        
        // автоматическое определение устройства по поведению пользователя
        // по умолчанию - телек
        //tech_core.set_control("tv")
        //tech_core.user_type = "tv"

        $('body').bind('touchstart', function(e) {
            if (tech_core.user_type != "mobile") {
                tech_core.set_control("mobile")
                tech_core.user_type = 'mobile'
                
                
            }
        })
        $('body').mousemove(function(event) {

            if (tech_core.user_type != 'desktop') {
                tech_core.set_control("desktop")
                tech_core.user_type = "desktop"
                
            }
        })
    },
    "set_control": function(user_type) {
        $('body').mousedown(function(event) {
            tech_core.mouse_down = true
        })

        $('body').mouseup(function(event) {
            tech_core.mouse_down = false
        })

        

        if (user_type == 'desktop') {
            $('body').mouseup(function(event) {
                tech_core.mouse_down = false
            })

            $('body').mousemove(function(event) {
                tech_core.mouse_x = event.pageX;
                tech_core.mouse_y = event.pageY;
            })

        
        } else if (user_type == 'mobile') {
        
            $('body').bind('touchstart', function(e) {
                var touches = e.originalEvent.touches || e.originalEvent.changedTouches;
                var touch = touches[touches.length-1]
                var x = touch.pageX;
                var y = touch.pageY;
                tech_core.mouse_x = x;
                tech_core.mouse_y = y;
                tech_core.mouse_down = true;
            })
        

            $("body").bind('touchend', function() {
                tech_core.mouse_down = false
                
            })

            $("body").bind('touchmove', function(e) {
                var touches = e.originalEvent.touches || e.originalEvent.changedTouches;
                var touch = touches[touches.length-1]
                var x = touch.pageX;
                var y = touch.pageY;
                tech_core.mouse_x = x;
                tech_core.mouse_y = y;
                
            })
        } else if (user_type == 'tv') {
            graph_core.tv_update_cursor();
            if (tech_core.platform == 'yandex') {
                window.addEventListener("keydown", function(event) {
                    
                    if (tech_core.user_type == 'tv') {
                        if (event.code == 'Enter' || event.key == 'Enter') {
                            
                        } else if (['ArrowLeft', "ArrowRight", "ArrowUp","ArrowDown"].includes(event.code) == true && tech_core.tv_data.buttons_active) {
                           
                        }
                    } 
                    if (tech_core.user_type != 'tv') {
                        console.log('tv')
                        //tech_core.set_control("tv")
                        tech_core.user_type = "tv"
                        graph_core.reset_buttons();
                        
                        graph_core.tv_update_cursor();
                    }
                })

                tech_core.sdk.onEvent(tech_core.sdk.EVENTS.HISTORY_BACK, () => {
                    //if (Date.now() - tech_core.tv_data.last_press_back_time < 300) {
                        graph_core.show_exit_block();
                    //}
                    tech_core.tv_data.last_press_back_time = Date.now()
                });
            }
        }
    },
    "login_to_cloud": function() {
        if (PLATFORM_TYPE == 'yandex') {
            if (tech_core.sdk_ready) {
                if (tech_core.cloud_storage_ready == false) {
                    tech_core.sdk.auth.openAuthDialog().then(() => {
                        // Игрок успешно авторизован
                         tech_core.sdk.getPlayer({scopes: false}).then(_player => {
                            tech_core.ysdk_player = _player;
                            if (_player.getMode() === 'lite') {
                                console.log('[yandex] игрок не авторизован')
                            } else {
                                tech_core.cloud_storage_ready = true;
                                
                                // СРАВНИВАЕМ ПРОГРЕССЫ И ЗАГРУЖАЕМ

                                graph_core.set_logged_status();
                            }
                        }).catch(err => {
                            // Ошибка при инициализации объекта Player.
                            console.log(err)
                            console.log('[yandex] не удалось выгрузить профиль с сервера')
                        });
                    }).catch(() => {
                        // Игрок не авторизован.
                        console.log('[yandex] невозможно открыть диалоговое окно')
                    });
                } else {
                    console.log("Вы уже зашли в облако")
                    graph_core.set_logged_status();
                }
            } else {
                console.log('SDK не инициализирован')
            }
        }
    },
    "say_hello_to_server": function(custom_server_url = 'none') {
        var xhr = new XMLHttpRequest();
        
        var report = {
            "time": Date.now(),
            "player_id": game_core.data.player_id
        }
        if (custom_server_url == 'none') {
            xhr.open('POST', SERVER_URL + 'hello/', true)
        } else  {
            xhr.open('POST', custom_server_url + 'hello/', true)
        }
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        
        // 3. Отсылаем запрос
        xhr.send(JSON.stringify(report));

        var s_time = Date.now()

        xhr.onload = function() {
            if (xhr.status == 200) { 
                var user = JSON.parse(xhr.responseText)
                console.log(user.msg);
                tech_core.my_server_ready = true;
                // записываем себе ID-шник от сервера
                game_core.data.player_id = user.player_id;

                console.log(Date.now() - s_time)
            } else {
                console.log("Server response: ", xhr.statusText);
            }
        }
    },
    "send_data_to_server": function() {
        var xhr = new XMLHttpRequest();
        
        var report = {
            "time": Date.now(),
        }
    
        // 2. Конфигурируем его: POST-запрос на URL http://127.17.0.1:8080/function/histogram/
        //xhr.open('POST', 'https://ingenium-alchemy.herokuapp.com/report', true);
        //xhr.open('POST', 'http://localhost:3000/report', true);
        //xhr.open('POST', 'https://alchemy-quest.onrender.com/report', true)

        xhr.open('POST', SERVER_URL + 'report', true)

        //xhr.setRequestHeader("Access-Control-Allow-Origin", "https://evil-eagle-97.loca.lt")
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*")

        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        

        // 3. Отсылаем запрос
        //console.log(xhr.response)
        //response.addHeader("Access-Control-Allow-Origin", "*")
        xhr.send(JSON.stringify(report));

        // действия при получении ответа
        xhr.onload = function() {
            if (xhr.status == 200) { 
                var user = JSON.parse(xhr.responseText)
                console.log(user.name)
            } else {
                console.log("Server response: ", xhr.statusText);
            }
        }
    },
    "activate_stream_mode": function() {
        socket.emit('i_am_streamer');
        tech_core.streaming = true;
    },
    "make_purchase": function(product_id) {
        if (tech_core.platform == 'yandex') {
            tech_core.payments.purchase({ id: product_id }).then(purchase => {
                // Покупка успешно совершена!
                console.log('[yandex] покупка совершена!!!')
                tech_core.payments.consumePurchase(purchase.purchaseToken);
            }).catch(err => {
                // Покупка не удалась: в консоли разработчика не добавлен товар с таким id,
                // пользователь не авторизовался, передумал и закрыл окно оплаты,
                // истекло отведенное на покупку время, не хватило денег и т. д.
                console.log('[yandex] покупка не удалась T_T')
                console.log(err);
            })
        }
    },
    load_on_background: function() {
        for (var i=0; i < 10; i++) {
            $('body').append("<img src='./images/cards/0"+(i)+".jpg' style='position: absolute; left: -9999px;' >")
        }
        $('body').append("<img src='./images/cards/09_2.jpg' style='position: absolute; left: -9999px;' >")
        
        for (var i=10; i <= 30; i++) {
            $('body').append("<img src='./images/cards/"+(i)+".jpg' style='position: absolute; left: -9999px;' >")
        }
    },
    send_report: function() {
        var xhr = new XMLHttpRequest();
        
        var report = {
            "time": Date.now(),
            "user_type": tech_core.user_type,
            "platform": tech_core.platform,
            "sdk_ready": tech_core.sdk_ready,
            "payments_ready": tech_core.payments_ready,
            "game_ready": tech_core.game_ready,
            "local_storage_ready": tech_core.local_storage_ready,
            "cloud_storage_ready": tech_core.cloud_storage_ready,
            "my_server_ready": tech_core.my_server_ready,
            "launch_time": tech_core.launch_time,
            "game_data": game_core.data,
            "errors": tech_core.console_errors,
            "user_msg": document.getElementById('go_br_popup_textarea').value
        }
    
        // 2. Конфигурируем его: POST-запрос на URL http://127.17.0.1:8080/function/histogram/
        //xhr.open('POST', 'https://ingenium-alchemy.herokuapp.com/report', true);
        //xhr.open('POST', 'http://localhost:3000/report', true);
        //xhr.open('POST', 'https://alchemy-quest.onrender.com/report', true)

        xhr.open('POST', SERVER_URL + 'report', true)

        //xhr.setRequestHeader("Access-Control-Allow-Origin", "https://evil-eagle-97.loca.lt")
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*")

        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        

        // 3. Отсылаем запрос
        //console.log(xhr.response)
        //response.addHeader("Access-Control-Allow-Origin", "*")
        xhr.send(JSON.stringify(report));

        // действия при получении ответа
        xhr.onload = function() {
            if (xhr.status == 200) { 
                var user = JSON.parse(xhr.responseText)
                console.log(user.name)
            } else {
                console.log("Server response: ", xhr.statusText);
            }
        }
    },
    send_promocode: function() {
        var xhr = new XMLHttpRequest();

        var data = {
            "promocode": document.getElementById('gso_p_popup_textarea').value,
            "player_id": game_core.data.player_id
        }

        console.log(data);

        xhr.open('POST', SERVER_URL + 'promocode', true)

        //xhr.setRequestHeader("Access-Control-Allow-Origin", "https://evil-eagle-97.loca.lt")
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*")

        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");

        xhr.send(JSON.stringify(data));

        // действия при получении ответа
        xhr.onload = function() {
            if (xhr.status == 200) { 
                var user = JSON.parse(xhr.responseText)
                console.log(user.name)
            } else {
                console.log("Server response: ", xhr.statusText);
            }
            graph_core.update_promocode_result_block(user.msg);
            graph_core.open_popup('#gso_popup3_back')
        }
    }
}

// графическое ядро
var graph_core = {
    "winW": 0,
    "winH": 0,
    "user_type": 'none',
    "lang": DEFAULT_LANG,
    "animation": {
        "playing": false,
        "name": "none",
        "frames": 20,
        "cur_frame": 1
    },
    popup_ids: ['go_bug_report_popup_back', 'gso_promocode_popup_back', 'gso_popup_back', 'gso_popup3_back'],
    big_blocks_ids: [],
    "start_animation": function(name) {
        graph_core.animation.playing = true;
        graph_core.animation.name = name;
        graph_core.animation.cur_frame = 1;
        graph_core.animation.frames = frames[name];
    },
    "resize_screen": function() {},
    "translate": function(lang = this.lang) {
        document.title = text.title[lang];
       
        
            //graph_core.html_blocks["game_options"].children['title_block'].options.text = text['game_options_title'][lang];
            //graph_core.html_blocks["game_options"].children['back_btn'].options.text = text['game_options_back_btn'][lang];
            //graph_core.html_blocks["game_options"].children['title_block'].recalculate();
            //graph_core.html_blocks["game_options"].children['title_block'].recalculate();
        
        
        for (var i in html_block_texts) {
            graph_core.all_html_blocks[i].options.text = html_block_texts[i][lang];
        }

        graph_core.resize_screen();
    },
    
    "open_game_viewport": function() {
        //$('#game_viewport').css('display', 'block')
        $('#game_viewport').fadeIn(ANIMATION*1000)
        if (tech_core.streaming) {
            socket.emit('open_game_viewport');
        }
    },
    "html_blocks": {
        
    },
    "open_options": function () {
        //console.log(1);
        $('#game_options').css('display', 'block')
        $('#game_viewport').css('display', 'none')
        $('#game_shop').css('display', 'none');
        if (tech_core.streaming) {
            socket.emit('open_options');
        }
    },
    "open_game_viewport": function() {
        $('#game_options').css('display', 'none')
        $('#game_viewport').css('display', 'block')
        $('#game_shop').css('display', 'none');
        if (tech_core.streaming) {
            socket.emit('open_game_viewport');
        }
    },
    "open_shop": function() {

        $('#game_options').css('display', 'none')
        $('#game_viewport').css('display', 'none')
        $('#game_shop').css('display', 'block');
        graph_core.update_balance();
        if (tech_core.streaming) {
            socket.emit('open_shop');
        }
    },
    "open_popup": function(popup_id) {
        $(popup_id).css('display', 'block');
    },
    "close_popup": function(popup_id) {
        $(popup_id).css('display', 'none');
    },
    close_all_popups: function() {
        for (var i in graph_core.popup_ids) {
            $('#'+graph_core.popup_ids[i]).css('display', 'none');
        }
    },
    close_all_big_blocks: function() {
        for (var i in graph_core.big_blocks_ids) {
            $('#'+graph_core.big_blocks_ids[i]).css('display', 'none');
        }
    },
    "open_special_offers": function() {
        $('#game_special_offers').css('display', 'block');
    },
    "close_special_offers": function() {
        $('#game_special_offers').css('display', 'none');
    },
    "open_shop_popup": function(item_id) {
        $('#gs_popup_back').css('display', 'block');
        graph_core.update_shop_popup(item_id);
        if (tech_core.streaming) {
            socket.emit('open_shop_popup');
        }
    },
     "open_shop_popup2": function(item_id) {
        $('#gs_popup2_back').css('display', 'block');
        //graph_core.update_shop_popup(item_id);
        if (tech_core.streaming) {
            socket.emit('open_shop_popup2');
        }
    },
    "update_shop_popup": function(item_id) {
        var popup_block = graph_core.html_blocks['game_shop'].children['gs_popup_back'].children['gs_popup'];
        console.log(text.shop, item_id)
        popup_block.children['gs_popup_title'].options.text = text.shop[item_id].title[graph_core.lang];
        popup_block.children['gs_popup_desk'].options.text = text.shop[item_id].long_desk[graph_core.lang];
        popup_block.children['gs_popup_slot'].children['gs_p_s_img'].options.background = "url('./images/for_shop/unicorn_"+(item_id+1)+".png')"
        popup_block.children['gs_popup_item_title'].options.text = text.shop[item_id].title[graph_core.lang];
        popup_block.children['gs_popup_buy_btn'].children["gs_p_bb_text"].options.text = "{coin} " + text.shop[item_id].cost;

        popup_block.recalculate(graph_core.html_blocks['game_shop'].children['gs_popup_back'])
    },
    "close_shop_popup": function() {
        $('#gs_popup_back').css('display', 'none');
        if (tech_core.streaming) {
            socket.emit('close_shop_popup');
        }
    },
    "close_shop_popup2": function() {
        $('#gs_popup2_back').css('display', 'none');
        if (tech_core.streaming) {
            socket.emit('close_shop_popup2');
        }
    },
    "open_shop_popup3": function(item_id) {
        $('#gs_popup3_back').css('display', 'block');
        //graph_core.update_shop_popup(item_id);
        if (tech_core.streaming) {
            socket.emit('open_shop_popup3');
        }
    },
    "close_shop_popup3": function() {
        $('#gs_popup3_back').css('display', 'none');
        if (tech_core.streaming) {
            socket.emit('close_shop_popup3');
        }
    },
    "update_card": function(card) {
        //console.log(card)
       
        //console.log(graph_core.lang)
        graph_core.html_blocks["game_viewport"].children['card_block'].children['card_title'].options.text = card.title[graph_core.lang];

        var card_text = card.text[graph_core.lang];

        //console.log('dragon_type_'+game_core.data.operators.Dr)
        //console.log(text)

        card_text = card_text.replace("<dragon_type>", text['dragon_type_'+String(game_core.data.operators.Dr)][graph_core.lang]);

        graph_core.html_blocks["game_viewport"].children['card_block'].children['card_description'].options.text = card_text;

        // если вдруг это анимация
        //console.log(card)
        if (card.animation) {
            graph_core.start_animation(card['animation'])
           } else {
            //console.log('lmao')
            // crystal
            graph_core.html_blocks["game_viewport"].children['card_block'].children['card_img'].options.background = `url("./images/cards/`+ format_to_frame(card['img']) +`.jpg")`;
            graph_core.animation.playing = false;
        }
        
        graph_core.html_blocks["game_viewport"].children['ans_block_1'].options.text = card.answers['1'].text[graph_core.lang];

        graph_core.html_blocks["game_viewport"].children['ans_block_2'].options.text = card.answers['2'].text[graph_core.lang];

        graph_core.html_blocks["game_viewport"].recalculate();


        //graph_core.html_blocks["game_viewport"].recalculate();
    },
    "update_stats": function(operators = game_core.data.operators) {
        // СКОЛЬКИБАЛЬНАЯ ШКАЛА
        var scale = MAX_STAT_VALUE;
        var max_h = get_size('#sb_progressbar_1').y;
        set_size("#sb_anti_progressbar_1", 'none', (1 - game_core.data.operators.power_stat / scale) * max_h);
        set_size("#sb_anti_progressbar_2", 'none', (1 - game_core.data.operators.hp_stat / scale) * max_h);
        set_size("#sb_anti_progressbar_3", 'none', (1 - game_core.data.operators.reputation_stat / scale) * max_h);
        set_size("#sb_anti_progressbar_4", 'none', (1 - game_core.data.operators.money_stat / scale) * max_h);
    },
    "update_balance": function() {
        var block = graph_core.html_blocks["game_shop"].children['gs_second_block'].children['gs_sb_balance_block']
        block.children['gs_sb_bb_text'].options.text = String(game_core.data.money);

        block.children['gs_sb_bb_text'].recalculate(block);

    },

    "play_animation": function() {
        if (graph_core.animation.playing) {
            graph_core.html_blocks["game_viewport"].children['card_block'].children['card_img'].options.background = `url("./images/animation/`+ graph_core.animation.name +`/00`+format_to_frame(graph_core.animation.cur_frame)
            +`.jpg")`;
            //console.log(format_to_frame(graph_core.animation.cur_frame))
           // graph_core.html_blocks["game_viewport"].children['card_block'].children['card_img'].html_element.style.background = `url("./images/animation/`+ graph_core.animation.name +`/00`+format_to_frame(graph_core.animation.cur_frame)+`.jpg")`;
            
            graph_core.animation.cur_frame += 1;
            if (graph_core.animation.cur_frame > graph_core.animation.frames) {
                graph_core.animation.cur_frame -= graph_core.animation.frames;
            }
            graph_core.html_blocks["game_viewport"].children['card_block'].children['card_img'].recalculate(graph_core.html_blocks["game_viewport"].children['card_block']);
        
        }
        //
       //graph_core.html_blocks["game_viewport"].children['card_block'].children['card_img'].recalculate(graph_core.html_blocks["game_viewport"].children['card_block']);
    },
    all_html_blocks: {},
    set_logged_status: function() {
        $('#go_cb_i2_btn_2').css('display', 'none');
        $('#go_cb_i2_btn_2_ok').css('display', 'block');
    },
    open_big_block: function(id) {
        for (var i in graph_core.big_blocks_ids) {
            $('#' + graph_core.big_blocks_ids[i]).css('display', 'none');
        }
        $(id).css('display', 'block');
    },
    open_special_shop_popup: function(product_number) {
        $('#gso_popup_back').css('display', 'block')
    },
    close_report_popup: function() {
        document.getElementById('go_br_popup_textarea').value = '';
        graph_core.close_all_popups();
    },
    update_promocode_result_block(msg) {
        for (var i in text.promocode_result[msg]) {
            graph_core.all_html_blocks[i].options.text = text.promocode_result[msg][i][graph_core.lang];
        }
        graph_core.all_html_blocks['gso_popup3_back'].recalculate();
    }
}

// игровой объект
var game_core = {
    "data": {
        "player_id": 0,
        "protocol": PROGRESS_PROTOCOL,
        "history": {
            // операторы на начало главы
            "beginning": {
                "cur_card": "plot1-1",
                "cur_desk": "main",
                "operators": operators,
                "used_desks": {
                    "rand_4": [],
                    "chapter_2": [],
                }
            }
        },
        
        //"cur_card": "plot1-1",
        "cur_card": START_POS,
        "money": 100,
        "cur_desk": "main",
        "cur_chapter": 1,
        "used_desks": {
            "rand_4": [],
            "chapter_2": [],
        },
        "operators": operators,
        "real_next_card": "",
        "last_save_point": "beginning"

    },
    "start_game": function() {


        if (tech_core.platform == 'yandex') {
            tech_core.send_ym_report('visit_ya_games')
        } else if (tech_core.platform == 'vk') {
            tech_core.send_ym_report('visit_vk')
        } else if (tech_core.platform == 'sber') {
            tech_core.send_ym_report('visit_sber')
        } else if (tech_core.platform == 'crazygames') {
            tech_core.send_ym_report('visit_crazygames')
        } else if (tech_core.platform == 'gamedistribution') {
            tech_core.send_ym_report('visit_gamedistribution')
        }



        graph_core.open_game_viewport();
        
        //graph_core.open_shop();
        //graph_core.open_special_offers();
        //graph_core.open_shop_popup3();
        tech_core.load_progress();
        tech_core.load_on_background();

        var card = desks[game_core.data.cur_desk][game_core.data.cur_card];

        if (card.title) {
            //console.log(1);
        } else {
            if (card.check_condition) {
                if (card.check_condition(game_core.data.operators)) {
                    game_core.get_card_from_desk(card.desk);
                } else {
                     game_core.next_card('skip')
                }
            } else {
                game_core.get_card_from_desk(card.desk);
            }
        }

        graph_core.update_card(desks[game_core.data.cur_desk][game_core.data.cur_card])
        graph_core.update_stats();
        // игра готова
        tech_core.game_ready = true;
        if (tech_core.platform == 'yandex' && tech_core.sdk_ready) {
            tech_core.sdk.features.LoadingAPI.ready();
        }
    },
    
    
    
    "get_review": function() {
        tech_core.send_ym_report("review_btn")
        
        if (tech_core.platform == 'yandex') {
            tech_core.sdk.feedback.canReview()
                .then(({ value, reason }) => {
                    if (value) {
                        tech_core.sdk.feedback.requestReview()
                            .then(({ feedbackSent }) => {
                                console.log(feedbackSent);
                                if (feedbackSent) {
                                    tech_core.send_ym_report('got_review')
                                }
                                graph_core.hide_get_review_block();
                                
                        })
                } else {
                    console.log(reason)
                }
            })

        } else if (tech_core.platform == 'sber') {
            var assistantRef = window.SberDevicesAdSDK.getAssistantRef();
            var assistant = assistantRef.current;
            assistant.sendData({ action: { action_id: 'SHOW_RATING_SUGGEST'} });
            graph_core.hide_get_review_block();
        } else if (tech_core.platform == 'vk') {
            window.open("https://vk.com/ingenium_games", "_blank");
            return false
        }
        game_core.data.gotten_review = true;
        tech_core.save_progress();
        
    },
    "exit_game": function() {
        if (tech_core.platform == 'yandex') {
            console.log('Выходим')
            tech_core.sdk.dispatchEvent(tech_core.sdk.EVENTS.EXIT);
        }
    },
    "get_progress_data": function() {
        var data_obj = game_core.data;

        //data_obj.history = game_core.data.history;
 
        return data_obj;
    },
    "next_card": function(num) {

        if (num != "skip") {
            //console.log(desks[game_core.data.cur_desk]);
            var next_card = desks[game_core.data.cur_desk][game_core.data.cur_card].answers[num].next(game_core.data.operators);
            
            //console.log(next_card)
            if (next_card == '-') {
                if (game_core.data.cur_desk == 'eternity') {
                    game_core.move_to_save_point(game_core.data.last_save_point)
                }
                next_card = game_core.data.real_next_card;
                game_core.data.cur_desk = 'main';
            }
        } else {
            next_card = game_core.data.real_next_card;
        }

        // НЕОЖИДАННАЯ ВСТАВКА
        
        // смерть
        if ((game_core.data.operators.hp_stat < 0 || game_core.data.operators.hp_stat > MAX_STAT_VALUE || 
            game_core.data.operators.reputation_stat < 0 || game_core.data.operators.reputation_stat > MAX_STAT_VALUE || 
            game_core.data.operators.power_stat < 0 || game_core.data.operators.power_stat > MAX_STAT_VALUE || 
            game_core.data.operators.money_stat < 0 || game_core.data.operators.money_stat > MAX_STAT_VALUE) && (game_core.data.cur_desk != 'eternity')) {
            // делаем замену
            game_core.data.real_next_card = next_card;
            next_card = 'r_1'
            game_core.data.cur_desk = 'eternity';
        }

        // время рекламы!
        if (Date.now() - tech_core.last_ad_suggest > AD_INTERVAL && Date.now() - tech_core.launch_time > AD_DELAY && game_core.data.cur_desk != 'eternity') {
            game_core.data.real_next_card = next_card;
            next_card = 'r_1'
            game_core.data.cur_desk = 'ad';
            tech_core.last_ad_suggest  = Date.now();
        }

        
        // особые условия
        // игрок решил посмотреть рекламу после смерти
        if (num == 1 && game_core.data.cur_desk == 'eternity' && game_core.data.cur_card == 4) {
            tech_core.show_rewarded_video(function() {
                game_core.data.operators.power_stat += 0.2 * MAX_STAT_VALUE;
                game_core.data.operators.hp_stat += 0.2 * MAX_STAT_VALUE;
                game_core.data.operators.money_stat += 0.2 * MAX_STAT_VALUE;
                game_core.data.operators.reputation_stat += 0.2 * MAX_STAT_VALUE;
                graph_core.update_stats();
            })
        }

       

        // возврат не к карточке а совершение действия

        /*
            open_shop - открыть магазин
            show_rewarded_ad - просмотр рекламы за монетки
            show_interestial_ad - просмотр полноэкранной рекламы за монетки

        */

        if (next_card == 'show_interstitial_ad') {
            console.log('ad')
            tech_core.show_interstitial_ad(
                false, 
                function() {
                    game_core.next_card(1);
                    game_core.data.money += 2;
                    tech_core.save_progress();
                },

                function() {
                    game_core.next_card(2);
                }
                );
            next_card = '2'

        }


        var next_card_obj = desks[game_core.data.cur_desk][next_card]


        var next_card_obj = desks[game_core.data.cur_desk][next_card]
        
        
        console.log('next_card_obj', next_card_obj)

        if (next_card_obj.save_point) {
            var save_point = next_card_obj.save_point;
            game_core.data.last_save_point = save_point;
           
            game_core.data.history[save_point] = {
                operators: {},
                used_desks: {},
                cur_card: game_core.data.cur_card,
                cur_desk: "main"
            }
            for (var i in game_core.data.operators) {
                game_core.data.history[save_point].operators[i] = game_core.data.operators[i];
            }
            for (var i in game_core.data.used_desks) {
                game_core.data.history[save_point].used_desks[i] = game_core.data.used_desks[i];
            }

            game_core.data.history[save_point].cur_desk = game_core.data.cur_desk;
        }

        //console.log(next_card)
        if (next_card_obj.title) {
            // должна быть сюжетная карточка
            game_core.data.cur_card = next_card;
            //game_core.data.cur_desk = 'main';
        } else {
            game_core.data.real_next_card = next_card_obj.next(game_core.data.operators);
            var skipping = false;
            if (next_card_obj.check_condition) {
                if (next_card_obj.check_condition(game_core.data.operators) == false) {
                    // не показываем, делаем пропуск
                    console.log("skipping")
                    skipping = true;
                    game_core.next_card("skip")

                }
            }
            // набираем массив случайных карточек
            if (skipping == false) {
                var rand_cards = []
                var desk = next_card_obj.desk;

                // Если колода зависит от оператора
                desk = desk.replace('<operators.Dr>', game_core.data.operators.Dr);

                console.log(desk);

                if (desks_options[desk].norepeat) {
                    for (var i in desks[desk]) {       
                        if (i[0] == 'r' && game_core.data.used_desks[desk].includes(i) == false) {
                            rand_cards.push(i);
                        }
                    }
                    game_core.data.cur_card = get_random_elements(rand_cards, 1, game_core.data.used_desks[desk])[0]
                    game_core.data.used_desks[desk].push(game_core.data.cur_card)
                    game_core.data.cur_desk = desk;
                } else {
                    for (var i in desks[desk]) {                        
                        if (i[0] == 'r') {
                            rand_cards.push(i);
                        }
                    }

                    game_core.data.real_next_card = desks[game_core.data.cur_desk][next_card].next(game_core.data.operators);
                    game_core.data.cur_card = get_random_elements(rand_cards, 1)[0]
                    game_core.data.cur_desk = desk;
                }
            }
        }

         
        // сохраняем контрольную точку
        console.log(desks[game_core.data.cur_desk])
        
        console.log('cur_desk:', game_core.data.cur_desk);
        console.log('cur_card:', game_core.data.cur_card);


        
        graph_core.update_card(desks[game_core.data.cur_desk][game_core.data.cur_card]);
        
        graph_core.update_stats();
        tech_core.save_progress();


        if (tech_core.streaming) {
            socket.emit('streamer_action', game_core.data);
        }
        
    },
    "move_to_save_point": function(save_point) {
        if (game_core.data.history[save_point]) {
            game_core.data.operators = game_core.data.history[save_point].operators;
            game_core.data.used_desks = game_core.data.history[save_point].used_desks;

            game_core.data.cur_desk = game_core.data.history[save_point].cur_desk;
            game_core.data.cur_card = game_core.data.history[save_point].cur_card;

            if (game_core.data.cur_desk == 'main') {
                graph_core.update_card(desks[game_core.data.cur_desk][game_core.data.cur_card]);
            } else {
                game_core.data.history[save_point].cur_desk = game_core.data.cur_desk;
                graph_core.update_card(desks[game_core.data.cur_desk][game_core.data.cur_card]);
            }
            graph_core.update_stats();


        } else {
            console.log("[game_core] нет контрольной точки с названием:", save_point);
        }
    },
    "get_card_from_desk": function(desk) {
        var rand_cards = []
        desk = desk.replace('<operators.Dr>', game_core.data.operators.Dr);

        console.log(desk);

        if (desks_options[desk].norepeat) {
            for (var i in desks[desk]) {       
                if (i[0] == 'r' && game_core.data.used_desks[desk].includes(i) == false) {
                    rand_cards.push(i);
                }
            }
            game_core.data.cur_card = get_random_elements(rand_cards, 1, game_core.data.used_desks[desk])[0]
            game_core.data.used_desks[desk].push(game_core.data.cur_card)
            game_core.data.cur_desk = desk;
        } else {
            for (var i in desks[desk]) {                        
                if (i[0] == 'r') {
                    rand_cards.push(i);
                }
            }

            game_core.data.real_next_card = desks[game_core.data.cur_desk][game_core.data.cur_card].next(game_core.data.operators);
            game_core.data.cur_card = get_random_elements(rand_cards, 1)[0]
            game_core.data.cur_desk = desk;
        }
    },
    "get_free_money": function() {
        tech_core.show_rewarded_video(function() {
            game_core.data.money += 2;
            graph_core.update_balance();
            graph_core.close_shop_popup2();
            graph_core.open_shop_popup3();
        })
    }

}

var make_screenshot = function() {
    console.log('making screen')
    if (tech_core.streaming) {
        console.log('broadcast')
        socket.emit('make_screenshot');
    }
}

// структура, колоды?
/*
var cards = {
    "plot1-1": {
        "title": { "ru": "Дратути!", "en": "Hello there!" },
        "text": {
            "ru": "Просто здравствуй! Просто как дела? Просто здравствуйте! Просто как дела?",
            "en": "- Hello there! \n - General Kenobi..."
        },
        "img": 1,
        "answers": {
            "1": {
                "text": { "ru": "Привет!", "en": "Hi!" },
                "next": function(operators) {
                    // изменяем операторы
                    return "for_rand1-1"
                }
            },
            "2": {
                "text": {
                    "ru": "Эээ...",
                    "en": "Umm..."
                },
                "next": function(operators) {
                    // изменяем операторы
                    return "for_rand1-1"
                }
            }
        }
    },
    "for_rand1-1": {
        "desk": "rand_1",
        "next": function(operators) {
            return "plot1-2"
        }
    },
    "plot1-2": {
        "title": {
            "ru": "Взять или не взять?",
            "en": "Do or not to do?!"
        },
        "text": {
            "ru": "Если ты хочешь это, то тебе придется взять этой силой",
            "en": "If you want it, then you'll have to take it"
        },
        "img": 2,
        "answers": {
            "1": {
                "text": {
                    "ru": "Взять!",
                    "en": "Do it!"
                },
                "next": function(operators) {
                    // изменяем операторы
                    operators.taken_1 = 1;
                    return "for_rand1-2"
                }
            },
            "2": {
                "text": {
                    "ru": "Не брать",
                    "en": "dont"
                },
                "next": function(operators) {
                    // изменяем операторы
                    return "for_rand1-2"
                }
            }
        }
    },
    
    "for_rand1-2": {
        "desk": "rand_1",
        "next": function(operators) {
            return "plot1-3"
        }
    },
    "plot1-3": {
        "title": {
            "ru": "Взять или не взять 2?",
            "en": "Do or not to do 2?!"
        },
        "text": {
            "ru": "Если ты хочешь это, то тебе придется взять этой силой. Но ты и так уже это знаешь",
            "en": "If you want it, then you'll have to take it"
        },
        "img": 3,
        "answers": {
            "1": {
                "text": {
                    "ru": "Взять снова!",
                    "en": "Do it!"
                },
                "next": function(operators) {
                    // изменяем операторы
                    operators.taken_2 = 1;
                    return "for_rand1-3"
                }
            },
            "2": {
                "text": {
                    "ru": "Не брать",
                    "en": "dont"
                },
                "next": function(operators) {
                    // изменяем операторы
                    return "for_rand1-3"
                }
            }
        }
    },
    "for_rand1-3": {
        "desk": "rand_1",
        "next": function(operators) {
            return "plot1-4"
        }
    },
    "plot1-4": {
        "title": {
            "ru": "Взять или не взять 3?",
            "en": "Do or not to do 2?!"
        },
        "text": {
            "ru": "В каком же ты отчаянии, если пришёл ко мне... Чего ради?!",
            "en": "If you want it, then you'll have to take it"
        },
        "img":4,
        "answers": {
            "1": {
                "text": {
                    "ru": "Взять опять!",
                    "en": "Do it!"
                },
                "next": function(operators) {
                    // изменяем операторы
                    if (operators.taken_1 && operators.taken_2) {
                        return "plot1-6"
                    } else {
                        return "plot1-5"
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
                    return "plot1-5"
                }
            }
        }
    },
    "plot1-5": {
        "title": {
            "ru": "Вы не решились?",
            "en": "Do or not to do 2?!"
        },
        "text": {
            "ru": "Ты взял явно не всё...",
            "en": "If you want it, then you'll have to take it"
        },
        "img":6,
        "answers": {
            "1": {
                "text": {
                    "ru": "Начать заново!",
                    "en": "Do it!"
                },
                "next": function(operators) {
                    // изменяем операторы
                    
                    return "plot1-1"
                    
                }
            },
            "2": {
                "text": {
                    "ru": "Не начинать заново",
                    "en": "dont"
                },
                "next": function(operators) {
                    // изменяем операторы
                    return "plot1-1"
                }
            }
        }
    },
    "plot1-6": {
        "title": {
            "ru": "Вы взяли всё!",
            "en": "Do or not to do 2?!"
        },
        "text": {
            "ru": "Ты догадался взять всё! Теперь у тебя есть суперспособность",
            "en": "If you want it, then you'll have to take it"
        },
        "img": 5,
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
                    return "plot1-1"
                    
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
                    return "plot1-1"
                }
            }
        }
    }
}


var desks = {
    "rand_1": {
        "rand1-1": {
            "title": {
                "ru": "Случайная карточка 1", "en": "Do or not to do 2?!"
            },
            "text": {
                "ru": "Текст случайной карточки 1",
                "en": "If you want it, then you'll have to take it"
            },
            "img": 5,
            "answers": {
                "1": {
                    "text": { "ru": "Дальше!","en": "Do it!"},
                    "next": function(operators) {
                        // изменяем операторы
                        
                        return "-"  
                    }
                },
                "2": {
                    "text": { "ru": "Дальше", "en": "dont"},
                    "next": function(operators) {
                        // изменяем операторы
                        
                        return "-"
                    }
                }
            }
        },
        "rand1-2": {
            "title": {
                "ru": "Случайная карточка 2", "en": "Do or not to do 2?!"
            },
            "text": {
                "ru": "Текст случайной карточки 2",
                "en": "If you want it, then you'll have to take it"
            },
            "img": 5,
            "answers": {
                "1": {
                    "text": { "ru": "Дальше!","en": "Do it!"},
                    "next": function(operators) {
                        // изменяем операторы
                        
                        return "-"  
                    }
                },
                "2": {
                    "text": { "ru": "Дальше", "en": "dont"},
                    "next": function(operators) {
                        // изменяем операторы
                    
                        return "-"
                    }
                }
            }
        },
        "rand1-3": {
            "title": {
                "ru": "Случайная карточка 3", "en": "Do or not to do 2?!"
            },
            "text": {
                "ru": "Текст случайной карточки 3",
                "en": "If you want it, then you'll have to take it"
            },
            "img": 5,
            "answers": {
                "1": {
                    "text": { "ru": "Дальше!","en": "Do it!"},
                    "next": function(operators) {
                        // изменяем операторы
                        
                        return "-"  
                    }
                },
                "2": {
                    "text": { "ru": "Дальше", "en": "dont"},
                    "next": function(operators) {
                        // изменяем операторы
                        
                        return "-"
                    }
                }
            }
        }
    }
}
*/
/*
window.onerror = function(e, url, line){
  //mailError('onerror: ' + e + ' URL:' + url + ' Line:' + line);
  console.error('\nLine ' + line + ':');
  tech_core.console_errors.push([e, url, line]);
  //setTimeout(function(){retry();}, 100); //mainly useful in content scripts for extensions, 
  return true; 
}
*/