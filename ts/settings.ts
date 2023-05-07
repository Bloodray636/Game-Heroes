const langList: Array<string> = ['ru', 'en'];

function setDefaultSettings() {
    if (localStorage['yt-widget'] == undefined) {
        localStorage['yt-widget'] = JSON.stringify({
            'lang': 'en',
            'active': true
        });
    }
    localStorage["settings"] = JSON.stringify({
        "lang": JSON.parse(localStorage['yt-widget']).lang,
        "music_volume": 100,
        "music_enabled": true,
        "sound_effects_volume": 100,
        "sound_effects_enabled": true
    });
}

function validationSettings() {
    if (localStorage["settings"] == undefined) {
        setDefaultSettings();
        return;
    }
    let settings = JSON.parse(localStorage["settings"]);
    if (isNull([settings.lang, settings.music_volume, settings.music_enabled, settings.sound_effects_volume, settings.sound_effects_enabled])) {
        setDefaultSettings();
        return;
    }
    if (typeof settings.lang != 'string' || langList.indexOf(settings.lang) == -1) {
        setDefaultSettings();
        return;
    }
    if (typeof settings.music_volume != 'number' || settings.music_volume < 0 || settings.music_volume > 100) {
        setDefaultSettings();
        return;
    }
    if (typeof settings.music_enabled != 'boolean') {
        setDefaultSettings();
        return;
    }
    if (typeof settings.sound_effects_volume != 'number' || settings.sound_effects_volume < 0 || settings.sound_effects_volume > 100) {
        setDefaultSettings();
        return;
    }
    if (typeof settings.sound_effects_enabled != 'boolean') {
        setDefaultSettings();
        return;
    }
}