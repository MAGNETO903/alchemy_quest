// техническое ядро
var tech_core = {
    "user_type": 'none',
    "sdk": "",
    "sdk_ready": true,
    "platform": PLATFORM_TYPE,
    "mouse_down": false,
    "mouse_x": 0,
    "mouse_y": 0,
    "last_interstitial_ad_show": 0,
    "last_interstitial_ad_open": 0,
    "launch_time": Date.now(),
    "tv_data": {
    },
    "ysdk_player": 1,
    "local_storage_ready": false,
    "cloud_storage_ready": false,
    "my_server_ready": false,
    "init_sdk": function() {
        YaGames
            .init({
                adv: {
                    onAdvClose: wasShown => {
                        console.info('[yandex] adv closed!');
                    }
                }
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
                    adv: {
                        onAdvClose: wasShown => {
                            console.info('[yandex] adv closed!');
                        }
                    }
                })
                .then(y_sdk => {
                    console.log("[yandex] вторая инициализация")
                    y_sdk.getPlayer({scopes: false}).then(_player => {
                        tech_core.ysdk_player = _player;
                        if (_player.getMode() === 'lite') {
                            console.log('[yandex] игрок не авторизован')
                        } else {
                            tech_core.cloud_storage_ready = true;
                        }
                    }).catch(err => {
                        // Ошибка при инициализации объекта Player.
                        console.log(err)
                        console.log('[yandex] не удалось выгрузить профиль с сервера')
                    });

                    tech_core.sdk = y_sdk;
                    tech_core.user_type = y_sdk.deviceInfo.type
                    if (y_sdk.deviceInfo.type != 'tv') {
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
                    }
                    console.log(y_sdk.deviceInfo.type)
                    //tech_core.user_type = 'tv'
                    tech_core.set_control(tech_core.user_type)
                    //tech_core.set_auto_control();
                    if (tech_core.user_type == "tv") {
                        tech_core.send_ym_report("visit_ya_tv");
                    }
                    if (PLATFORM_TYPE == 'yandex') {
                        tech_core.sdk_ready = true
                    }
                    console.log('[yandex] yandex sdk ready')
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
    "load_progress": function() {
        if (SHOULD_LOAD_PROGRESS) {
            var data = localStorage.getItem(STORAGE_NAME)

            if (data != null) {
                //game_core.data = data
                game_core.data = JSON.parse(localStorage.getItem(STORAGE_NAME))

            }

        } else {
            // данные по умолчанию (при первом запуске)
        }
        
    },
    "save_progress": function() {
        if (tech_core.local_storage_ready) {
            localStorage.setItem(STORAGE_NAME, JSON.stringify(game_core.get_progress_data()))
        }

        if (tech_core.cloud_storage_ready) {
            var data_for_cloud = {};
            data_for_cloud[STORAGE_NAME] = JSON.stringify(game_core.get_progress_data())
            tech_core.ysdk_player.setData(data_for_cloud)
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
    "show_interstitial_ad": function() {
        
        if (Date.now() - tech_core.last_interstitial_ad_show > AD_INTERVAL && Date.now() - tech_core.launch_time > AD_DELAY) {
            tech_core.send_ym_report('fullscreen_adv_try')
            if (tech_core.platform == 'yandex') {
                tech_core.sdk.adv.showFullscreenAdv({
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
                                    tech_core.send_ym_report('fullscreen_adv_3_sec')
                                }
                            }
                        },
                        onError: function(error) {
                            // some action on error
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
    "send_post": function() {
        tech_core.send_ym_report("send_vk_post_btn")
        if (tech_core.platform == 'vk') {
            
            var message = ''   


            vkBridge.send("VKWebAppShowWallPostBox", {
                "message": message,
                "attachments": VK_APP_LNIK
            }).then(function(data) {
               
                if (data.post_id != null && data.post_id != undefined) {
                    // чувак успешно вступил в группу
                    tech_core.send_ym_report('sent_post')
                }
                
            })
            
        }
    },
    "reset_progress": function() {
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
        for (var i = 0; i < FILMS_AMOUNT; i++) {
            game_core.data.available_questions.push(i+1)
        }
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
                }
            } else {
                console.log('SDK не инициализирован')
            }
        }
    },
    "say_hello_to_server": function() {
        var xhr = new XMLHttpRequest();
        
        var report = {
            "time": Date.now(),
        }

        xhr.open('POST', SERVER_URL + 'hello', true)
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Accept", "application/json");
        
        // 3. Отсылаем запрос
        xhr.send(JSON.stringify(report));
        xhr.onload = function() {
            if (xhr.status == 200) { 
                var user = JSON.parse(xhr.responseText)
                console.log(user.msg);
                tech_core.my_server_ready = true;
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
    }
}

// графическое ядро
var graph_core = {
    "winW": 0,
    "winH": 0,
    "user_type": 'none',
    "lang": DEFAULT_LANG,
    "resize_screen": function() {},
    "translate": function(lang = this.lang) {
        document.title = text.title[lang]
    },
    
    "open_game_viewport": function() {
        //$('#game_viewport').css('display', 'block')
        $('#game_viewport').fadeIn(ANIMATION*1000)
    },
    "html_blocks": {
        
    },
    "open_options": function () {
        console.log(1);
        $('#game_options').css('display', 'block')
        $('#game_viewport').css('display', 'none')
    }
}

// игровой объект
var game_core = {
    "data": {
        "history": [],
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
        tech_core.load_progress();
        
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
        var data_obj = {
            "time": Date.now()
        }
        data_obj.history = game_core.data.history;
 
        return data_obj;
    }
}

var make_screenshot = function() {
    console.log('making screen')
}
