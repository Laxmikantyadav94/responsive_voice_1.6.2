if (typeof responsivevoice != 'undefined') {
    console.log('ResponsiveVoice already loaded');
    console.log(responsivevoice);
} else {
    var ResponsiveVoice = function () {
        var self = this;
        self.version = "1.6.2";
        self.audioPause = false;
        rvApiKey="Zm2GVAuq"
        console.log("ResponsiveVoice r" + self.version);
        self.ResponsiveVoices = [{
                name: "UK English Female",
                flag: "gb",
                gender: "f",
                lang: "en-GB",
                voiceIDs: [3, 7, 171, 201, 5, 1, 257, 286, 342, 258, 287, 343, 8]
            }, {
                name: "UK English Male",
                flag: "gb",
                gender: "m",
                lang: "en-GB",
                voiceIDs: [0, 277, 202, 75, 4, 2, 256, 285, 341, 159]
            }, {
                name: "US English Female",
                flag: "us",
                gender: "f",
                lang: "en-US",
                voiceIDs: [432, 433, 434, 40, 41, 42, 383, 205, 204, 43, 173, 235, 283, 339, 408, 44]
            }, {
                name: "US English Male",
                flag: "us",
                gender: "m",
                lang: "en-US",
                voiceIDs: [431, 39, 234, 282, 338, 236, 284, 340, 2, 4, 0, 75, 195, 169]
            }, {
                name: "Arabic Male",
                flag: "ar",
                gender: "m",
                lang: "ar-SA",
                voiceIDs: [96,
                    95, 97, 196, 388
                ]
            }, {
                name: "Arabic Female",
                flag: "ar",
                gender: "f",
                lang: "ar-SA",
                voiceIDs: [98]
            }, {
                name: "Armenian Male",
                flag: "hy",
                gender: "f",
                lang: "hy-AM",
                voiceIDs: [99]
            }, {
                name: "Australian Female",
                flag: "au",
                gender: "f",
                lang: "en-AU",
                voiceIDs: [415, 276, 201, 87, 5, 88]
            }, {
                name: "Australian Male",
                flag: "au",
                gender: "m",
                lang: "en-AU",
                voiceIDs: [86, 386]
            }, {
                name: "Bangla Bangladesh Female",
                flag: "bd",
                gender: "f",
                lang: "bn-BD",
                voiceIDs: [435]
            }, {
                name: "Bangla Bangladesh Male",
                flag: "bd",
                gender: "m",
                lang: "bn-BD",
                voiceIDs: [410, 436]
            }, {
                name: "Bangla India Female",
                flag: "bd",
                gender: "f",
                lang: "bn-IN",
                voiceIDs: [447]
            }, {
                name: "Bangla India Male",
                flag: "bd",
                gender: "m",
                lang: "bn-IN",
                voiceIDs: [411, 448]
            }, {
                name: "Brazilian Portuguese Female",
                flag: "br",
                gender: "f",
                lang: "pt-BR",
                voiceIDs: [245, 124, 123, 125, 186, 223, 126]
            }, {
                name: "Brazilian Portuguese Male",
                flag: "br",
                gender: "m",
                lang: "pt-BR",
                voiceIDs: [315, 332, 371, 399]
            }, {
                name: "Chinese Female",
                flag: "cn",
                gender: "f",
                lang: "zh-CN",
                voiceIDs: [249, 58, 59, 380, 281, 231, 155, 60, 191, 268, 297, 353, 269, 298, 354, 409, 61]
            }, {
                name: "Chinese Male",
                flag: "cn",
                gender: "m",
                lang: "zh-CN",
                voiceIDs: [317, 334, 373, 389]
            }, {
                name: "Chinese (Hong Kong) Female",
                flag: "hk",
                gender: "f",
                lang: "zh-HK",
                voiceIDs: [192, 193, 232, 250, 251, 270, 299, 355, 409, 444, 252]
            }, {
                name: "Chinese (Hong Kong) Male",
                flag: "hk",
                gender: "m",
                lang: "zh-HK",
                voiceIDs: [430, 318, 335, 374, 445, 390]
            }, {
                name: "Chinese Taiwan Female",
                flag: "tw",
                gender: "f",
                lang: "zh-TW",
                voiceIDs: [194, 233, 253, 254, 305, 322, 361, 384, 319, 336, 375, 409, 255]
            }, {
                name: "Chinese Taiwan Male",
                flag: "tw",
                gender: "m",
                lang: "zh-TW",
                voiceIDs: [320, 337, 376, 391]
            }, {
                name: "Czech Female",
                flag: "cz",
                gender: "f",
                lang: "cs-CZ",
                voiceIDs: [412, 101, 100, 102, 197, 103]
            }, {
                name: "Czech Male",
                flag: "cz",
                gender: "m",
                lang: "cs-CZ",
                voiceIDs: [161]
            }, {
                name: "Danish Female",
                flag: "dk",
                gender: "f",
                lang: "da-DK",
                voiceIDs: [413, 105, 104, 106, 198, 107]
            }, {
                name: "Danish Male",
                flag: "da",
                gender: "m",
                lang: "da-DK",
                voiceIDs: [162]
            }, {
                name: "Deutsch Female",
                flag: "de",
                gender: "f",
                lang: "de-DE",
                voiceIDs: [27, 28, 29, 30, 78, 170, 275, 199, 31, 261, 290, 346, 262, 291, 347, 32]
            }, {
                name: "Deutsch Male",
                flag: "de",
                gender: "m",
                lang: "de-DE",
                voiceIDs: [307, 324, 363,
                    377, 393
                ]
            }, {
                name: "Dutch Female",
                flag: "nl",
                gender: "f",
                lang: "nl-NL",
                voiceIDs: [243, 219, 84, 157, 158, 184, 45]
            }, {
                name: "Dutch Male",
                flag: "nl",
                gender: "m",
                lang: "nl-NL",
                voiceIDs: [157, 220, 407]
            }, {
                name: "Estonian Male",
                flag: "ee",
                gender: "m",
                lang: "et-EE",
                voiceIDs: [416, 446]
            }, {
                name: "Filipino Female",
                flag: "ph",
                gender: "f",
                lang: "fil-PH",
                voiceIDs: [418, 437]
            }, {
                name: "Finnish Female",
                flag: "fi",
                gender: "f",
                lang: "fi-FI",
                voiceIDs: [417, 90, 89, 91, 209, 92]
            }, {
                name: "Finnish Male",
                flag: "fi",
                gender: "m",
                lang: "fi-FI",
                voiceIDs: [160]
            }, {
                name: "French Female",
                flag: "fr",
                gender: "f",
                lang: "fr-FR",
                voiceIDs: [240, 21, 22, 23, 77, 178, 279, 210, 266, 295, 351, 304, 321, 360, 26]
            }, {
                name: "French Male",
                flag: "fr",
                gender: "m",
                lang: "fr-FR",
                voiceIDs: [311, 328, 367, 378, 392]
            }, {
                name: "French Canadian Female",
                flag: "ca",
                gender: "f",
                lang: "fr-CA",
                voiceIDs: [419, 210, 449]
            }, {
                name: "French Canadian Male",
                flag: "ca",
                gender: "m",
                lang: "fr-CA",
                voiceIDs: [450]
            }, {
                name: "Greek Female",
                flag: "gr",
                gender: "f",
                lang: "el-GR",
                voiceIDs: [414, 62, 63, 80, 200, 64]
            }, {
                name: "Greek Male",
                flag: "gr",
                gender: "m",
                lang: "el-GR",
                voiceIDs: [163]
            },
            {
                name: "Hindi Female",
                flag: "hi",
                gender: "f",
                lang: "hi-IN",
                voiceIDs: [247, 66, 154, 179, 213, 259, 288, 344, 67]
            }, {
                name: "Hindi Male",
                flag: "hi",
                gender: "m",
                lang: "hi-IN",
                voiceIDs: [394]
            }, {
                name: "Hungarian Female",
                flag: "hu",
                gender: "f",
                lang: "hu-HU",
                voiceIDs: [420, 9, 10, 81, 214, 11]
            }, {
                name: "Hungarian Male",
                flag: "hu",
                gender: "m",
                lang: "hu-HU",
                voiceIDs: [164]
            }, {
                name: "Indonesian Female",
                flag: "id",
                gender: "f",
                lang: "id-ID",
                voiceIDs: [241, 111, 112, 180, 215, 113]
            }, {
                name: "Indonesian Male",
                flag: "id",
                gender: "m",
                lang: "id-ID",
                voiceIDs: [395]
            },
            {
                name: "Italian Female",
                flag: "it",
                gender: "f",
                lang: "it-IT",
                voiceIDs: [242, 33, 34, 35, 36, 37, 79, 181, 216, 271, 300, 356, 38]
            }, {
                name: "Italian Male",
                flag: "it",
                gender: "m",
                lang: "it-IT",
                voiceIDs: [312, 329, 368, 406]
            }, {
                name: "Japanese Female",
                flag: "jp",
                gender: "f",
                lang: "ja-JP",
                voiceIDs: [51, 280, 217, 52, 153, 182, 273, 302, 358, 274, 303, 359, 53]
            }, {
                name: "Japanese Male",
                flag: "jp",
                gender: "m",
                lang: "ja-JP",
                voiceIDs: [248, 50, 313, 330, 369, 396]
            }, {
                name: "Korean Female",
                flag: "kr",
                gender: "f",
                lang: "ko-KR",
                voiceIDs: [54, 55, 56, 156, 183, 218, 306, 323,
                    362, 384, 57
                ]
            }, {
                name: "Korean Male",
                flag: "kr",
                gender: "m",
                lang: "ko-KR",
                voiceIDs: [397]
            }, {
                name: "Latin Female",
                flag: "va",
                gender: "f",
                lang: "la",
                voiceIDs: [114],
                deprecated: !0
            }, {
                name: "Latin Male",
                flag: "va",
                gender: "m",
                lang: "la",
                voiceIDs: [165]
            }, {
                name: "Nepali",
                flag: "np",
                gender: "f",
                lang: "ne-NP",
                voiceIDs: [423, 441]
            }, {
                name: "Norwegian Female",
                flag: "no",
                gender: "f",
                lang: "nb-NO",
                voiceIDs: [422, 72, 73, 221, 74]
            }, {
                name: "Norwegian Male",
                flag: "no",
                gender: "m",
                lang: "nb-NO",
                voiceIDs: [166]
            }, {
                name: "Polish Female",
                flag: "pl",
                gender: "f",
                lang: "pl-PL",
                voiceIDs: [244, 120, 119, 121, 185, 222, 267, 296, 352, 122]
            }, {
                name: "Polish Male",
                flag: "pl",
                gender: "m",
                lang: "pl-PL",
                voiceIDs: [314, 331, 370, 398]
            }, {
                name: "Portuguese Female",
                flag: "br",
                gender: "f",
                lang: "pt-BR",
                voiceIDs: [128, 127, 129, 187, 224, 272, 301, 357, 130]
            }, {
                name: "Portuguese Male",
                flag: "br",
                gender: "m",
                lang: "pt-BR",
                voiceIDs: [400]
            }, {
                name: "Romanian Female",
                flag: "ro",
                gender: "f",
                lang: "ro-RO",
                voiceIDs: [424, 151, 150, 152, 225, 46]
            }, {
                name: "Russian Female",
                flag: "ru",
                gender: "f",
                lang: "ru-RU",
                voiceIDs: [246, 47, 48, 83,
                    188, 226, 260, 289, 345, 49
                ]
            }, {
                name: "Russian Male",
                flag: "ru",
                gender: "m",
                lang: "ru-RU",
                voiceIDs: [316, 333, 372, 387]
            }, {
                name: "Sinhala",
                flag: "lk",
                gender: "f",
                lang: "si-LK",
                voiceIDs: [425, 442]
            }, {
                name: "Slovak Female",
                flag: "sk",
                gender: "f",
                lang: "sk-SK",
                voiceIDs: [426, 133, 132, 134, 227, 135]
            }, {
                name: "Slovak Male",
                flag: "sk",
                gender: "m",
                lang: "sk-SK",
                voiceIDs: [167],
                deprecated: !0
            }, {
                name: "Spanish Female",
                flag: "es",
                gender: "f",
                lang: "es-ES",
                voiceIDs: [19, 238, 16, 17, 18, 20, 76, 174, 207, 263, 292, 348, 264, 293, 349, 15]
            }, {
                name: "Spanish Male",
                flag: "es",
                gender: "m",
                lang: "es-ES",
                voiceIDs: [309, 326, 365, 401]
            }, {
                name: "Spanish Latin American Female",
                flag: "es",
                gender: "f",
                lang: "es-MX",
                voiceIDs: [239, 137, 136, 138, 175, 208, 265, 294, 350, 139]
            }, {
                name: "Spanish Latin American Male",
                flag: "es",
                gender: "m",
                lang: "es-MX",
                voiceIDs: [136, 310, 327, 366, 402]
            }, {
                name: "Swedish Female",
                flag: "sv",
                gender: "f",
                lang: "sv-SE",
                voiceIDs: [427, 85, 149, 228, 65]
            }, {
                name: "Swedish Male",
                flag: "sv",
                gender: "m",
                lang: "sv-SE",
                voiceIDs: [148, 168]
            }, {
                name: "Tamil Female",
                flag: "hi",
                gender: "m",
                lang: "hi-IN",
                voiceIDs: [451]
            }, {
                name: "Tamil Male",
                flag: "hi",
                gender: "m",
                lang: "hi-IN",
                voiceIDs: [141]
            }, {
                name: "Thai Female",
                flag: "th",
                gender: "f",
                lang: "th-TH",
                voiceIDs: [143, 142, 144, 189, 229, 145]
            }, {
                name: "Thai Male",
                flag: "th",
                gender: "m",
                lang: "th-TH",
                voiceIDs: [403]
            }, {
                name: "Turkish Female",
                flag: "tr",
                gender: "f",
                lang: "tr-TR",
                voiceIDs: [69, 70, 82, 190, 230, 71]
            }, {
                name: "Turkish Male",
                flag: "tr",
                gender: "m",
                lang: "tr-TR",
                voiceIDs: [404]
            }, {
                name: "Ukrainian Female",
                flag: "ua",
                gender: "f",
                lang: "uk-UA",
                voiceIDs: [428, 443]
            }, {
                name: "Vietnamese Female",
                flag: "vi",
                gender: "f",
                lang: "vi-VN",
                voiceIDs: [429, 405]
            }, {
                name: "Vietnamese Male",
                flag: "vi",
                gender: "m",
                lang: "vi-VN",
                voiceIDs: [146]
            }, {
                name: "Afrikaans Male",
                flag: "af",
                gender: "m",
                lang: "af-ZA",
                voiceIDs: [93]
            }, {
                name: "Albanian Male",
                flag: "sq",
                gender: "m",
                lang: "sq-AL",
                voiceIDs: [94]
            }, {
                name: "Bosnian Male",
                flag: "bs",
                gender: "m",
                lang: "bs",
                voiceIDs: [14]
            }, {
                name: "Catalan Male",
                flag: "catalonia",
                gender: "m",
                lang: "ca-ES",
                voiceIDs: [68]
            }, {
                name: "Croatian Male",
                flag: "hr",
                gender: "m",
                lang: "hr-HR",
                voiceIDs: [13]
            }, {
                name: "Esperanto Male",
                flag: "eo",
                gender: "m",
                lang: "eo",
                voiceIDs: [108]
            }, {
                name: "Icelandic Male",
                flag: "is",
                gender: "m",
                lang: "is-IS",
                voiceIDs: [110]
            }, {
                name: "Latvian Male",
                flag: "lv",
                gender: "m",
                lang: "lv-LV",
                voiceIDs: [115]
            }, {
                name: "Macedonian Male",
                flag: "mk",
                gender: "m",
                lang: "mk-MK",
                voiceIDs: [116]
            }, {
                name: "Moldavian Female",
                flag: "md",
                gender: "f",
                lang: "md",
                voiceIDs: [117]
            }, {
                name: "Moldavian Male",
                flag: "md",
                gender: "m",
                lang: "md",
                voiceIDs: [117],
                deprecated: !0
            }, {
                name: "Montenegrin Male",
                flag: "me",
                gender: "m",
                lang: "me",
                voiceIDs: [118]
            }, {
                name: "Serbian Male",
                flag: "sr",
                gender: "m",
                lang: "sr-RS",
                voiceIDs: [12]
            }, {
                name: "Serbo-Croatian Male",
                flag: "hr",
                gender: "m",
                lang: "hr-HR",
                voiceIDs: [131]
            }, {
                name: "Swahili Male",
                flag: "sw",
                gender: "m",
                lang: "sw-KE",
                voiceIDs: [140]
            }, {
                name: "Welsh Male",
                flag: "cy",
                gender: "m",
                lang: "cy",
                voiceIDs: [147]
            }, {
                name: "Fallback UK Female",
                flag: "gb",
                gender: "f",
                lang: "en-GB",
                voiceIDs: [8]
            }
        ];
        self.voicecollection = [{
                name: "Google UK English Male"
            }, {
                name: "Agnes"
            }, {
                name: "Daniel Compact"
            }, {
                name: "Google UK English Female"
            }, {
                name: "en-GB",
                rate: .25,
                pitch: 1
            }, {
                name: "en-AU",
                rate: .25,
                pitch: 1
            }, {
                name: "ingl\u00e9s Reino Unido"
            }, {
                name: "English United Kingdom"
            }, {
                name: "Fallback en-GB Female",
                lang: "en-GB",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Eszter Compact"
            }, {
                name: "hu-HU",
                rate: .4
            }, {
                name: "Fallback Hungarian Female",
                lang: "hu",
                fallbackvoice: !0,
                service: "g1"
            }, {
                name: "Fallback Serbian Male",
                lang: "sr",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Croatian Male",
                lang: "hr",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Bosnian Male",
                lang: "bs",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Spanish Female",
                lang: "es",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Spanish Spain"
            }, {
                name: "espa\u00f1ol Espa\u00f1a"
            }, {
                name: "Diego Compact",
                rate: .3
            }, {
                name: "Google Espa\u00f1ol"
            }, {
                name: "es-ES",
                rate: .2
            }, {
                name: "Google Fran\u00e7ais"
            }, {
                name: "French France"
            }, {
                name: "franc\u00e9s Francia"
            }, {
                name: "Virginie Compact",
                rate: .5
            }, {
                name: "fr-FR",
                rate: .25
            }, {
                name: "Fallback French Female",
                lang: "fr",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            },
            {
                name: "Google Deutsch"
            }, {
                name: "German Germany"
            }, {
                name: "alem\u00e1n Alemania"
            }, {
                name: "Yannick Compact",
                rate: .5
            }, {
                name: "de-DE",
                rate: .25
            }, {
                name: "Fallback Deutsch Female",
                lang: "de",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google Italiano"
            }, {
                name: "Italian Italy"
            }, {
                name: "italiano Italia"
            }, {
                name: "Paolo Compact",
                rate: .5
            }, {
                name: "it-IT",
                rate: .25
            }, {
                name: "Fallback Italian Female",
                lang: "it",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google US English",
                timerSpeed: 1
            }, {
                name: "English United States"
            },
            {
                name: "ingl\u00e9s Estados Unidos"
            }, {
                name: "Vicki"
            }, {
                name: "en-US",
                rate: .2,
                pitch: 1,
                timerSpeed: 1.3
            }, {
                name: "Fallback US English",
                lang: "en-US",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Dutch Female",
                lang: "nl",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Romanian",
                lang: "ro",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Milena Compact"
            }, {
                name: "ru-RU",
                rate: .25
            }, {
                name: "Fallback Russian",
                lang: "ru",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            },
            {
                name: "Google \u65e5\u672c\u4eba",
                timerSpeed: 1
            }, {
                name: "Kyoko Compact"
            }, {
                name: "ja-JP",
                rate: .25
            }, {
                name: "Fallback Japanese Female",
                lang: "ja",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google \ud55c\uad6d\uc758",
                timerSpeed: 1
            }, {
                name: "Narae Compact"
            }, {
                name: "ko-KR",
                rate: .25
            }, {
                name: "Fallback Korean Female",
                lang: "ko",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google \u4e2d\u56fd\u7684",
                timerSpeed: 1
            }, {
                name: "Ting-Ting Compact"
            }, {
                name: "zh-CN",
                rate: .25
            }, {
                name: "Fallback Chinese",
                lang: "zh-CN",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Alexandros Compact"
            }, {
                name: "el-GR",
                rate: .25
            }, {
                name: "Fallback Greek",
                lang: "el",
                fallbackvoice: !0,
                service: "g3",
                gender: "female"
            }, {
                name: "Fallback Swedish",
                lang: "sv",
                fallbackvoice: !0,
                service: "g3",
                gender: "female"
            }, {
                name: "hi-IN",
                rate: .25
            }, {
                name: "Fallback Hindi Female",
                lang: "hi",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Catalan",
                lang: "ca",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Aylin Compact"
            }, {
                name: "tr-TR",
                rate: .25
            }, {
                name: "Fallback Turkish",
                lang: "tr",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Stine Compact"
            }, {
                name: "no-NO",
                rate: .25
            }, {
                name: "Fallback Norwegian",
                lang: "no",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Daniel"
            }, {
                name: "Monica"
            }, {
                name: "Amelie"
            }, {
                name: "Anna"
            }, {
                name: "Alice"
            }, {
                name: "Melina"
            }, {
                name: "Mariska"
            }, {
                name: "Yelda"
            }, {
                name: "Milena"
            }, {
                name: "Xander"
            }, {
                name: "Alva"
            }, {
                name: "Lee Compact"
            }, {
                name: "Karen"
            }, {
                name: "Fallback Australian Female",
                lang: "en-AU",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Mikko Compact"
            },
            {
                name: "Satu"
            }, {
                name: "fi-FI",
                rate: .25
            }, {
                name: "Fallback Finnish",
                lang: "fi",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Afrikans",
                lang: "af",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Albanian",
                lang: "sq",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Maged Compact"
            }, {
                name: "Tarik"
            }, {
                name: "ar-SA",
                rate: .25
            }, {
                name: "Fallback Arabic",
                lang: "ar",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Armenian",
                lang: "hy",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            },
            {
                name: "Zuzana Compact"
            }, {
                name: "Zuzana"
            }, {
                name: "cs-CZ",
                rate: .25
            }, {
                name: "Fallback Czech",
                lang: "cs",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Ida Compact"
            }, {
                name: "Sara"
            }, {
                name: "da-DK",
                rate: .25
            }, {
                name: "Fallback Danish",
                lang: "da",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Esperanto",
                lang: "eo",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Haitian Creole",
                lang: "ht",
                fallbackvoice: !0
            }, {
                name: "Fallback Icelandic",
                lang: "is",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            },
            {
                name: "Damayanti"
            }, {
                name: "id-ID",
                rate: .25
            }, {
                name: "Fallback Indonesian Female",
                lang: "id",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Latin Female",
                lang: "la",
                fallbackvoice: !0,
                service: "g2",
                gender: "female"
            }, {
                name: "Fallback Latvian Male",
                lang: "lv",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Macedonian Male",
                lang: "mk",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Moldavian Female",
                lang: "mo",
                fallbackvoice: !0,
                service: "g2",
                gender: "female"
            }, {
                name: "Fallback Montenegrin Male",
                lang: "sr-ME",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Agata Compact"
            }, {
                name: "Zosia"
            }, {
                name: "pl-PL",
                rate: .25
            }, {
                name: "Fallback Polish Female",
                lang: "pl",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Raquel Compact"
            }, {
                name: "Luciana"
            }, {
                name: "pt-BR",
                rate: .25
            }, {
                name: "Fallback Brazilian Portuguese Female",
                lang: "pt-BR",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Joana Compact"
            }, {
                name: "Joana"
            }, {
                name: "pt-PT",
                rate: .25
            }, {
                name: "Fallback Portuguese",
                lang: "pt-PT",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Serbo-Croation",
                lang: "sh",
                fallbackvoice: !0,
                service: "g2",
                gender: "male"
            }, {
                name: "Laura Compact"
            }, {
                name: "Laura"
            }, {
                name: "sk-SK",
                rate: .25
            }, {
                name: "Fallback Slovak",
                lang: "sk",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Javier Compact"
            }, {
                name: "Paulina"
            }, {
                name: "es-MX",
                rate: .25
            }, {
                name: "Fallback Spanish (Latin American) Female",
                lang: "es-419",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Swahili",
                lang: "sw",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            },
            {
                name: "Fallback Tamil",
                lang: "ta",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Narisa Compact"
            }, {
                name: "Kanya"
            }, {
                name: "th-TH",
                rate: .25
            }, {
                name: "Fallback Thai Female",
                lang: "th",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Vietnamese Male",
                lang: "vi",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Welsh",
                lang: "cy",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Oskar Compact"
            }, {
                name: "sv-SE",
                rate: .25
            }, {
                name: "Simona Compact"
            }, {
                name: "Ioana"
            }, {
                name: "ro-RO",
                rate: .25
            },
            {
                name: "Kyoko"
            }, {
                name: "Lekha"
            }, {
                name: "Ting-Ting"
            }, {
                name: "Yuna"
            }, {
                name: "Xander Compact"
            }, {
                name: "nl-NL",
                rate: .25
            }, {
                name: "Fallback UK English Male",
                lang: "en-GB",
                fallbackvoice: !0,
                service: "g1",
                voicename: "rjs",
                gender: "male"
            }, {
                name: "Finnish Male",
                lang: "fi",
                fallbackvoice: !0,
                service: "g3",
                voicename: "",
                gender: "male"
            }, {
                name: "Czech Male",
                lang: "cs",
                fallbackvoice: !0,
                service: "g3",
                voicename: "",
                gender: "male"
            }, {
                name: "Danish Male",
                lang: "da",
                fallbackvoice: !0,
                service: "g3",
                voicename: "",
                gender: "male"
            }, {
                name: "Greek Male",
                lang: "el",
                fallbackvoice: !0,
                service: "g3",
                voicename: "",
                gender: "male"
            }, {
                name: "Hungarian Male",
                lang: "hu",
                fallbackvoice: !0,
                service: "g3",
                voicename: "",
                gender: "male"
            }, {
                name: "Latin Male",
                lang: "la",
                fallbackvoice: !0,
                service: "g1",
                voicename: "",
                gender: "male"
            }, {
                name: "Norwegian Male",
                lang: "no",
                fallbackvoice: !0,
                service: "g3",
                voicename: "",
                gender: "male"
            }, {
                name: "Slovak Male",
                lang: "sk",
                fallbackvoice: !0,
                service: "g3",
                voicename: "",
                gender: "male"
            }, {
                name: "Swedish Male",
                lang: "sv",
                fallbackvoice: !0,
                service: "g3",
                voicename: "",
                gender: "male"
            },
            {
                name: "Fallback US English Male",
                lang: "en-US",
                fallbackvoice: !0,
                service: "g3",
                voicename: "",
                gender: "male"
            }, {
                name: "German Germany",
                lang: "de_DE"
            }, {
                name: "English United Kingdom",
                lang: "en_GB"
            }, {
                name: "English India",
                lang: "en_IN"
            }, {
                name: "English United States",
                lang: "en_US"
            }, {
                name: "Spanish Spain",
                lang: "es_ES"
            }, {
                name: "Spanish Mexico",
                lang: "es_MX"
            }, {
                name: "Spanish United States",
                lang: "es_US"
            }, {
                name: "French Belgium",
                lang: "fr_BE"
            }, {
                name: "French France",
                lang: "fr_FR"
            }, {
                name: "Hindi India",
                lang: "hi_IN"
            }, {
                name: "Indonesian Indonesia",
                lang: "in_ID"
            }, {
                name: "Italian Italy",
                lang: "it_IT"
            }, {
                name: "Japanese Japan",
                lang: "ja_JP"
            }, {
                name: "Korean South Korea",
                lang: "ko_KR"
            }, {
                name: "Dutch Netherlands",
                lang: "nl_NL"
            }, {
                name: "Polish Poland",
                lang: "pl_PL"
            }, {
                name: "Portuguese Brazil",
                lang: "pt_BR"
            }, {
                name: "Portuguese Portugal",
                lang: "pt_PT"
            }, {
                name: "Russian Russia",
                lang: "ru_RU"
            }, {
                name: "Thai Thailand",
                lang: "th_TH"
            }, {
                name: "Turkish Turkey",
                lang: "tr_TR"
            }, {
                name: "Chinese China",
                lang: "zh_CN_#Hans"
            }, {
                name: "Chinese Hong Kong",
                lang: "zh_HK_#Hans"
            }, {
                name: "Chinese Hong Kong",
                lang: "zh_HK_#Hant"
            }, {
                name: "Chinese Taiwan",
                lang: "zh_TW_#Hant"
            }, {
                name: "Alex"
            }, {
                name: "Maged",
                lang: "ar-SA"
            }, {
                name: "Zuzana",
                lang: "cs-CZ"
            }, {
                name: "Sara",
                lang: "da-DK"
            }, {
                name: "Anna",
                lang: "de-DE"
            }, {
                name: "Melina",
                lang: "el-GR"
            }, {
                name: "Karen",
                lang: "en-AU"
            }, {
                name: "Daniel",
                lang: "en-GB"
            }, {
                name: "Moira",
                lang: "en-IE"
            }, {
                name: "Samantha (Enhanced)",
                lang: "en-US"
            }, {
                name: "Samantha",
                lang: "en-US"
            }, {
                name: "Tessa",
                lang: "en-ZA"
            }, {
                name: "Monica",
                lang: "es-ES"
            }, {
                name: "Paulina",
                lang: "es-MX"
            }, {
                name: "Satu",
                lang: "fi-FI"
            }, {
                name: "Amelie",
                lang: "fr-CA"
            }, {
                name: "Thomas",
                lang: "fr-FR"
            }, {
                name: "Carmit",
                lang: "he-IL"
            }, {
                name: "Lekha",
                lang: "hi-IN"
            }, {
                name: "Mariska",
                lang: "hu-HU"
            }, {
                name: "Damayanti",
                lang: "id-ID"
            }, {
                name: "Alice",
                lang: "it-IT"
            }, {
                name: "Kyoko",
                lang: "ja-JP"
            }, {
                name: "Yuna",
                lang: "ko-KR"
            }, {
                name: "Ellen",
                lang: "nl-BE"
            }, {
                name: "Xander",
                lang: "nl-NL"
            }, {
                name: "Nora",
                lang: "no-NO"
            }, {
                name: "Zosia",
                lang: "pl-PL"
            }, {
                name: "Luciana",
                lang: "pt-BR"
            }, {
                name: "Joana",
                lang: "pt-PT"
            }, {
                name: "Ioana",
                lang: "ro-RO"
            }, {
                name: "Milena",
                lang: "ru-RU"
            }, {
                name: "Laura",
                lang: "sk-SK"
            }, {
                name: "Alva",
                lang: "sv-SE"
            }, {
                name: "Kanya",
                lang: "th-TH"
            }, {
                name: "Yelda",
                lang: "tr-TR"
            }, {
                name: "Ting-Ting",
                lang: "zh-CN"
            }, {
                name: "Sin-Ji",
                lang: "zh-HK"
            }, {
                name: "Mei-Jia",
                lang: "zh-TW"
            }, {
                name: "Microsoft David Mobile - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Zira Mobile - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Mark Mobile - English (United States)",
                lang: "en-US"
            }, {
                name: "native",
                lang: ""
            }, {
                name: "Google espa\u00f1ol"
            }, {
                name: "Google espa\u00f1ol de Estados Unidos"
            }, {
                name: "Google fran\u00e7ais"
            },
            {
                name: "Google Bahasa Indonesia"
            }, {
                name: "Google italiano"
            }, {
                name: "Google Nederlands"
            }, {
                name: "Google polski"
            }, {
                name: "Google portugu\u00eas do Brasil"
            }, {
                name: "Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439"
            }, {
                name: "Google \u0939\u093f\u0928\u094d\u0926\u0940"
            }, {
                name: "Google \u65e5\u672c\u8a9e"
            }, {
                name: "Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09"
            }, {
                name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"
            }, {
                name: "zh-HK",
                rate: .25
            }, {
                name: "Fallback Chinese (Hong Kong) Female",
                lang: "zh-HK",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"
            }, {
                name: "zh-TW",
                rate: .25
            }, {
                name: "Fallback Chinese (Taiwan) Female",
                lang: "zh-TW",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Microsoft George Mobile - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Susan Mobile - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Hazel Mobile - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Heera Mobile - English (India)",
                lang: "en-In"
            },
            {
                name: "Microsoft Irina Mobile - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Hedda Mobile - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Katja Mobile - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Helena Mobile - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Laura Mobile - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Sabina Mobile - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Julie Mobile - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Paulina Mobile - Polish (Poland)",
                lang: "pl-PL"
            },
            {
                name: "Microsoft Huihui Mobile - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Yaoyao Mobile - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Tracy Mobile - Chinese (Traditional, Hong Kong S.self.R.)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Elsa Mobile - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Maria Mobile - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Ayumi Mobile - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Haruka Mobile - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Helena",
                lang: "de-DE"
            }, {
                name: "Catherine",
                lang: "en-AU"
            }, {
                name: "Arthur",
                lang: "en-GB"
            }, {
                name: "Martha",
                lang: "en-GB"
            }, {
                name: "Marie",
                lang: "fr-FR"
            }, {
                name: "O-ren",
                lang: "ja-JP"
            }, {
                name: "Yu-shu",
                lang: "zh-CN"
            }, {
                name: "Microsoft David - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Zira - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Mark - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft George - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Susan - English (United Kingdom)",
                lang: "en-GB"
            },
            {
                name: "Microsoft Hazel - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Heera - English (India)",
                lang: "en-In"
            }, {
                name: "Microsoft Irina - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Hedda - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Katja - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Helena - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Laura - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Sabina - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Julie - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Paulina - Polish (Poland)",
                lang: "pl-PL"
            }, {
                name: "Microsoft Huihui - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Yaoyao - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Tracy - Chinese (Traditional, Hong Kong S.self.R.)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Elsa - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Maria - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Ayumi - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Haruka - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Hortense - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Hanhan - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Heami - Korean (Korean)",
                lang: "ko-KR"
            }, {
                name: "Microsoft Stefan - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Ravi - English (India)",
                lang: "en-IN"
            }, {
                name: "Microsoft Pablo - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Raul - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Paul - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Cosimo - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Ichiro - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Adam - Polish (Poland)",
                lang: "pl-PL"
            }, {
                name: "Microsoft Daniel - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Pavel - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Kangkang - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Danny - Chinese (Traditional, Hong Kong S.self.R.)",
                lang: "zh-HK"
            }, {
                name: "Microsoft Yating - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Zhiwei - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Hortense Mobile - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Hanhan Mobile - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Heami Mobile - Korean (Korean)",
                lang: "ko-KR"
            }, {
                name: "Microsoft Stefan Mobile - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Ravi Mobile - English (India)",
                lang: "en-IN"
            }, {
                name: "Microsoft Pablo Mobile - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Raul Mobile - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Paul Mobile - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Cosimo Mobile - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Ichiro Mobile - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Adam Mobile - Polish (Poland)",
                lang: "pl-PL"
            }, {
                name: "Microsoft Daniel Mobile - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Pavel Mobile - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Kangkang Mobile - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Danny Mobile - Chinese (Traditional, Hong Kong S.self.R.)",
                lang: "zh-HK"
            }, {
                name: "Microsoft Yating Mobile - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Zhiwei Mobile - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft David Desktop - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Zira Desktop - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft Mark Desktop - English (United States)",
                lang: "en-US"
            }, {
                name: "Microsoft George Desktop - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Susan Desktop - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Hazel Desktop - English (United Kingdom)",
                lang: "en-GB"
            }, {
                name: "Microsoft Heera Desktop - English (India)",
                lang: "en-In"
            }, {
                name: "Microsoft Irina Desktop - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Hedda Desktop - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Katja Desktop - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Helena Desktop - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Laura Desktop - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Sabina Desktop - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Julie Desktop - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Paulina Desktop - Polish (Poland)",
                lang: "pl-PL"
            }, {
                name: "Microsoft Huihui Desktop - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Yaoyao Desktop - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Tracy Desktop - Chinese (Traditional, Hong Kong S.self.R.)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Elsa Desktop - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Maria Desktop - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Ayumi Desktop - Japanese (Japan)",
                lang: "ja-JP"
            },
            {
                name: "Microsoft Haruka Desktop - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Hortense Desktop - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Hanhan Desktop - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Heami Desktop - Korean (Korean)",
                lang: "ko-KR"
            }, {
                name: "Microsoft Stefan Desktop - German (Germany)",
                lang: "de-DE"
            }, {
                name: "Microsoft Ravi Desktop - English (India)",
                lang: "en-IN"
            }, {
                name: "Microsoft Pablo Desktop - Spanish (Spain)",
                lang: "es-ES"
            }, {
                name: "Microsoft Raul Desktop - Spanish (Mexico)",
                lang: "es-MX"
            }, {
                name: "Microsoft Paul Desktop - French (France)",
                lang: "fr-FR"
            }, {
                name: "Microsoft Cosimo Desktop - Italian (Italy)",
                lang: "it-IT"
            }, {
                name: "Microsoft Ichiro Desktop - Japanese (Japan)",
                lang: "ja-JP"
            }, {
                name: "Microsoft Adam Desktop - Polish (Poland)",
                lang: "pl-PL"
            }, {
                name: "Microsoft Daniel Desktop - Portuguese (Brazil)",
                lang: "pt-BR"
            }, {
                name: "Microsoft Pavel Desktop - Russian (Russia)",
                lang: "ru-RU"
            }, {
                name: "Microsoft Kangkang Desktop - Chinese (Simplified, PRC)",
                lang: "zh-CN"
            }, {
                name: "Microsoft Danny Desktop - Chinese (Traditional, Hong Kong S.self.R.)",
                lang: "zh-HK"
            }, {
                name: "Microsoft Yating Desktop - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Zhiwei Desktop - Chinese (Traditional, Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Martin",
                lang: "de-DE"
            }, {
                name: "Daniel",
                lang: "fr-FR"
            }, {
                name: "Hattori",
                lang: "ja-JP"
            }, {
                name: "Li-mu",
                lang: "zh-CN"
            }, {
                name: "Gordon",
                lang: "en-AU"
            }, {
                name: "Aaron",
                lang: "en-US"
            }, {
                name: "Nicky",
                lang: "en-US"
            }, {
                name: "Microsoft Hanhan Desktop - Chinese (Taiwan)",
                lang: "zh-TW"
            }, {
                name: "Microsoft Heami Desktop - Korean",
                lang: "ko-KR"
            }, {
                name: "Fallback Australian Male",
                lang: "en-AU",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Russian Male",
                lang: "ru",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Arabic Male",
                lang: "ar",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Chinese",
                lang: "zh-CN",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Chinese HK",
                lang: "zh-HK",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Chinese TW",
                lang: "zh-TW",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback French Male",
                lang: "fr",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Deutsch Male",
                lang: "de",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Hindi Male",
                lang: "hi",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Indonesian Male",
                lang: "id",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Japanese Male",
                lang: "ja",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Korean Male",
                lang: "ko",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Polish Male",
                lang: "pl",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Brazilian Portuguese Male",
                lang: "pt-BR",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Portuguese Male",
                lang: "pt-PT",
                fallbackvoice: !0,
                service: "g1",
                gender: "male"
            }, {
                name: "Fallback Spanish Male",
                lang: "es",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Spanish (Latin American) Male",
                lang: "es-419",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Thai Male",
                lang: "th",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Turkish Male",
                lang: "tr",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Vietnamese Female",
                lang: "vi",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }, {
                name: "Fallback Italian Male",
                lang: "it",
                fallbackvoice: !0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Dutch Male",
                lang: "nl",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "male"
            }, {
                name: "Microsoft Anna - English (United States)",
                lang: "en-US",
                gender: "female"
            }, {
                name: "Microsoft Lili - Chinese (China)",
                lang: "zh-CN",
                gender: "female"
            }, {
                name: "Bangla Bangladesh",
                lang: "bn_BD",
                gender: "male"
            }, {
                name: "Bangla India",
                lang: "bn_IN",
                gender: "male"
            }, {
                name: "Czech Czechia",
                lang: "cs_CZ",
                gender: "female"
            }, {
                name: "Danish Denmark",
                lang: "da_DK",
                gender: "female"
            }, {
                name: "Greek Greece",
                lang: "el_GR",
                gender: "female"
            }, {
                name: "English Australia",
                lang: "en_AU",
                gender: "female"
            }, {
                name: "Estonian Estonia",
                lang: "et_EE",
                gender: "male"
            }, {
                name: "Finnish Finland",
                lang: "fi_FI",
                gender: "female"
            }, {
                name: "Filipino Philippines",
                lang: "fil_PH",
                gender: "female"
            }, {
                name: "French Canada",
                lang: "fr_CAF",
                gender: "female"
            }, {
                name: "Hungarian Hungary",
                lang: "hu_HU",
                gender: "female"
            }, {
                name: "Khmer Cambodia",
                lang: "km_KH",
                gender: "female"
            }, {
                name: "Norwegian Bokm\u00e5l Norway",
                lang: "nb_NO",
                gender: "female"
            }, {
                name: "Nepali Nepal",
                lang: "ne_NP",
                gender: "female"
            }, {
                name: "Romanian Romania",
                lang: "ro_RO",
                gender: "female"
            }, {
                name: "Sinhala Sri Lanka",
                lang: "si_LK",
                gender: "female"
            }, {
                name: "Slovak Slovakia",
                lang: "sk_SK",
                gender: "female"
            }, {
                name: "Swedish Sweden",
                lang: "sv_SE",
                gender: "female"
            }, {
                name: "Ukrainian Ukraine",
                lang: "uk_UA",
                gender: "female"
            }, {
                name: "Vietnamese Vietnam",
                lang: "vi_VN",
                gender: "female"
            }, {
                name: "Cantonese Hong Kong",
                lang: "yue_HK_#Hant",
                gender: "female"
            }, {
                name: "Microsoft Server Speech Text to Speech Voice (en-US, Guy24kRUS)",
                lang: "en-US",
                gender: "male"
            }, {
                name: "Microsoft Server Speech Text to Speech Voice (en-US, Jessa24kRUS)",
                lang: "en-US",
                gender: "female"
            }, {
                name: "Microsoft Server Speech Text to Speech Voice (en-US, JessaRUS)",
                lang: "en-US",
                gender: "female"
            }, {
                name: "Microsoft Server Speech Text to Speech Voice (en-US, ZiraRUS)",
                lang: "en-US",
                gender: "female"
            }, {
                name: "Fallback Bangla Bangladeh Female",
                lang: "bn-BD",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "female"
            }, {
                name: "Fallback Bangla Bangladeh Male",
                lang: "bn-BD",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Filipino Female",
                lang: "fil-PH",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "female"
            }, {
                name: "Fallback Filipino Male",
                lang: "fil-PH",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Cambodian Khmer Female",
                lang: "km-KH",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "female"
            }, {
                name: "Fallback Cambodian Khmer Male",
                lang: "km-KH",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Nepali Female",
                lang: "ne-NP",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "female"
            }, {
                name: "Fallback Sinhala Female",
                lang: "si-LK",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "female"
            }, {
                name: "Fallback Ukrainian Female",
                lang: "uk-UA",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "female"
            }, {
                name: "Fallback Cantonese Hong Kong Female",
                lang: "yue-HK",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "female"
            }, {
                name: "Fallback Cantonese Hong Kong Male",
                lang: "yue-HK",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Estonian Male",
                lang: "et-EE",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Bangla India Female",
                lang: "bn-IN",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "female"
            }, {
                name: "Fallback Bangla India Male",
                lang: "bn-IN",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "male"
            },
            {
                name: "Fallback French Canadian Female",
                lang: "fr-CA",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "female"
            }, {
                name: "Fallback French Canadian Male",
                lang: "fr-CA",
                fallbackvoice: !0,
                timerSpeed: 0,
                service: "g3",
                gender: "male"
            }, {
                name: "Fallback Tamil",
                lang: "ta",
                fallbackvoice: !0,
                service: "g1",
                gender: "female"
            }
        ];
        self.iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
        self.iOS9 = /(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase());
        self.iOS10 = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
        self.iOS11 = /(iphone|ipod|ipad).* os 11_/.test(navigator.userAgent.toLowerCase());
        self.iOS9plus = /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase()) || /(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
        self.iOS12_0 = /(iphone|ipod|ipad).* os 12_0/.test(navigator.userAgent.toLowerCase());
        self.iOS12 = /(iphone|ipod|ipad).* os 12_/.test(navigator.userAgent.toLowerCase());
        self.iOS13_0 = /(iphone|ipod|ipad).* os 13_0/.test(navigator.userAgent.toLowerCase());
        self.iOS13 = /(iphone|ipod|ipad).* os 13/.test(navigator.userAgent.toLowerCase());
        self.is_chrome = -1 < navigator.userAgent.indexOf("Chrome");
        self.is_safari = -1 < navigator.userAgent.indexOf("Safari");
        self.is_chrome && self.is_safari && (self.is_safari = !1);
        self.is_opera = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
        self.is_android = -1 < navigator.userAgent.toLowerCase().indexOf("android");
        self.iOS_initialized = !1;
        self.iOS9_initialized = !1;
        self.iOS10_initialized = !1;
        self.iOS11_initialized = !1;
        self.cache_ios_voices = [{
                name: "he-IL",
                voiceURI: "he-IL",
                lang: "he-IL"
            }, {
                name: "th-TH",
                voiceURI: "th-TH",
                lang: "th-TH"
            }, {
                name: "pt-BR",
                voiceURI: "pt-BR",
                lang: "pt-BR"
            }, {
                name: "sk-SK",
                voiceURI: "sk-SK",
                lang: "sk-SK"
            }, {
                name: "fr-CA",
                voiceURI: "fr-CA",
                lang: "fr-CA"
            }, {
                name: "ro-RO",
                voiceURI: "ro-RO",
                lang: "ro-RO"
            }, {
                name: "no-NO",
                voiceURI: "no-NO",
                lang: "no-NO"
            }, {
                name: "fi-FI",
                voiceURI: "fi-FI",
                lang: "fi-FI"
            }, {
                name: "pl-PL",
                voiceURI: "pl-PL",
                lang: "pl-PL"
            }, {
                name: "de-DE",
                voiceURI: "de-DE",
                lang: "de-DE"
            }, {
                name: "nl-NL",
                voiceURI: "nl-NL",
                lang: "nl-NL"
            }, {
                name: "id-ID",
                voiceURI: "id-ID",
                lang: "id-ID"
            }, {
                name: "tr-TR",
                voiceURI: "tr-TR",
                lang: "tr-TR"
            }, {
                name: "it-IT",
                voiceURI: "it-IT",
                lang: "it-IT"
            },
            {
                name: "pt-PT",
                voiceURI: "pt-PT",
                lang: "pt-PT"
            }, {
                name: "fr-FR",
                voiceURI: "fr-FR",
                lang: "fr-FR"
            }, {
                name: "ru-RU",
                voiceURI: "ru-RU",
                lang: "ru-RU"
            }, {
                name: "es-MX",
                voiceURI: "es-MX",
                lang: "es-MX"
            }, {
                name: "zh-HK",
                voiceURI: "zh-HK",
                lang: "zh-HK"
            }, {
                name: "sv-SE",
                voiceURI: "sv-SE",
                lang: "sv-SE"
            }, {
                name: "hu-HU",
                voiceURI: "hu-HU",
                lang: "hu-HU"
            }, {
                name: "zh-TW",
                voiceURI: "zh-TW",
                lang: "zh-TW"
            }, {
                name: "es-ES",
                voiceURI: "es-ES",
                lang: "es-ES"
            }, {
                name: "zh-CN",
                voiceURI: "zh-CN",
                lang: "zh-CN"
            }, {
                name: "nl-BE",
                voiceURI: "nl-BE",
                lang: "nl-BE"
            }, {
                name: "en-GB",
                voiceURI: "en-GB",
                lang: "en-GB"
            }, {
                name: "ar-SA",
                voiceURI: "ar-SA",
                lang: "ar-SA"
            }, {
                name: "ko-KR",
                voiceURI: "ko-KR",
                lang: "ko-KR"
            }, {
                name: "cs-CZ",
                voiceURI: "cs-CZ",
                lang: "cs-CZ"
            }, {
                name: "en-ZA",
                voiceURI: "en-ZA",
                lang: "en-ZA"
            }, {
                name: "en-AU",
                voiceURI: "en-AU",
                lang: "en-AU"
            }, {
                name: "da-DK",
                voiceURI: "da-DK",
                lang: "da-DK"
            }, {
                name: "en-US",
                voiceURI: "en-US",
                lang: "en-US"
            }, {
                name: "en-IE",
                voiceURI: "en-IE",
                lang: "en-IE"
            }, {
                name: "hi-IN",
                voiceURI: "hi-IN",
                lang: "hi-IN"
            }, {
                name: "el-GR",
                voiceURI: "el-GR",
                lang: "el-GR"
            }, {
                name: "ja-JP",
                voiceURI: "ja-JP",
                lang: "ja-JP"
            }
        ];
        self.cache_ios9_voices = [{
            name: "Maged",
            voiceURI: "com.apple.ttsbundle.Maged-compact",
            lang: "ar-SA",
            localService: !0,
            "default": !0
        }, {
            name: "Zuzana",
            voiceURI: "com.apple.ttsbundle.Zuzana-compact",
            lang: "cs-CZ",
            localService: !0,
            "default": !0
        }, {
            name: "Sara",
            voiceURI: "com.apple.ttsbundle.Sara-compact",
            lang: "da-DK",
            localService: !0,
            "default": !0
        }, {
            name: "Anna",
            voiceURI: "com.apple.ttsbundle.Anna-compact",
            lang: "de-DE",
            localService: !0,
            "default": !0
        }, {
            name: "Melina",
            voiceURI: "com.apple.ttsbundle.Melina-compact",
            lang: "el-GR",
            localService: !0,
            "default": !0
        }, {
            name: "Karen",
            voiceURI: "com.apple.ttsbundle.Karen-compact",
            lang: "en-AU",
            localService: !0,
            "default": !0
        }, {
            name: "Daniel",
            voiceURI: "com.apple.ttsbundle.Daniel-compact",
            lang: "en-GB",
            localService: !0,
            "default": !0
        }, {
            name: "Moira",
            voiceURI: "com.apple.ttsbundle.Moira-compact",
            lang: "en-IE",
            localService: !0,
            "default": !0
        }, {
            name: "Samantha (Enhanced)",
            voiceURI: "com.apple.ttsbundle.Samantha-premium",
            lang: "en-US",
            localService: !0,
            "default": !0
        }, {
            name: "Samantha",
            voiceURI: "com.apple.ttsbundle.Samantha-compact",
            lang: "en-US",
            localService: !0,
            "default": !0
        }, {
            name: "Tessa",
            voiceURI: "com.apple.ttsbundle.Tessa-compact",
            lang: "en-ZA",
            localService: !0,
            "default": !0
        }, {
            name: "Monica",
            voiceURI: "com.apple.ttsbundle.Monica-compact",
            lang: "es-ES",
            localService: !0,
            "default": !0
        }, {
            name: "Paulina",
            voiceURI: "com.apple.ttsbundle.Paulina-compact",
            lang: "es-MX",
            localService: !0,
            "default": !0
        }, {
            name: "Satu",
            voiceURI: "com.apple.ttsbundle.Satu-compact",
            lang: "fi-FI",
            localService: !0,
            "default": !0
        }, {
            name: "Amelie",
            voiceURI: "com.apple.ttsbundle.Amelie-compact",
            lang: "fr-CA",
            localService: !0,
            "default": !0
        }, {
            name: "Thomas",
            voiceURI: "com.apple.ttsbundle.Thomas-compact",
            lang: "fr-FR",
            localService: !0,
            "default": !0
        }, {
            name: "Carmit",
            voiceURI: "com.apple.ttsbundle.Carmit-compact",
            lang: "he-IL",
            localService: !0,
            "default": !0
        }, {
            name: "Lekha",
            voiceURI: "com.apple.ttsbundle.Lekha-compact",
            lang: "hi-IN",
            localService: !0,
            "default": !0
        }, {
            name: "Mariska",
            voiceURI: "com.apple.ttsbundle.Mariska-compact",
            lang: "hu-HU",
            localService: !0,
            "default": !0
        }, {
            name: "Damayanti",
            voiceURI: "com.apple.ttsbundle.Damayanti-compact",
            lang: "id-ID",
            localService: !0,
            "default": !0
        }, {
            name: "Alice",
            voiceURI: "com.apple.ttsbundle.Alice-compact",
            lang: "it-IT",
            localService: !0,
            "default": !0
        }, {
            name: "Kyoko",
            voiceURI: "com.apple.ttsbundle.Kyoko-compact",
            lang: "ja-JP",
            localService: !0,
            "default": !0
        }, {
            name: "Yuna",
            voiceURI: "com.apple.ttsbundle.Yuna-compact",
            lang: "ko-KR",
            localService: !0,
            "default": !0
        }, {
            name: "Ellen",
            voiceURI: "com.apple.ttsbundle.Ellen-compact",
            lang: "nl-BE",
            localService: !0,
            "default": !0
        }, {
            name: "Xander",
            voiceURI: "com.apple.ttsbundle.Xander-compact",
            lang: "nl-NL",
            localService: !0,
            "default": !0
        }, {
            name: "Nora",
            voiceURI: "com.apple.ttsbundle.Nora-compact",
            lang: "no-NO",
            localService: !0,
            "default": !0
        }, {
            name: "Zosia",
            voiceURI: "com.apple.ttsbundle.Zosia-compact",
            lang: "pl-PL",
            localService: !0,
            "default": !0
        }, {
            name: "Luciana",
            voiceURI: "com.apple.ttsbundle.Luciana-compact",
            lang: "pt-BR",
            localService: !0,
            "default": !0
        }, {
            name: "Joana",
            voiceURI: "com.apple.ttsbundle.Joana-compact",
            lang: "pt-PT",
            localService: !0,
            "default": !0
        }, {
            name: "Ioana",
            voiceURI: "com.apple.ttsbundle.Ioana-compact",
            lang: "ro-RO",
            localService: !0,
            "default": !0
        }, {
            name: "Milena",
            voiceURI: "com.apple.ttsbundle.Milena-compact",
            lang: "ru-RU",
            localService: !0,
            "default": !0
        }, {
            name: "Laura",
            voiceURI: "com.apple.ttsbundle.Laura-compact",
            lang: "sk-SK",
            localService: !0,
            "default": !0
        }, {
            name: "Alva",
            voiceURI: "com.apple.ttsbundle.Alva-compact",
            lang: "sv-SE",
            localService: !0,
            "default": !0
        }, {
            name: "Kanya",
            voiceURI: "com.apple.ttsbundle.Kanya-compact",
            lang: "th-TH",
            localService: !0,
            "default": !0
        }, {
            name: "Yelda",
            voiceURI: "com.apple.ttsbundle.Yelda-compact",
            lang: "tr-TR",
            localService: !0,
            "default": !0
        }, {
            name: "Ting-Ting",
            voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
            lang: "zh-CN",
            localService: !0,
            "default": !0
        }, {
            name: "Sin-Ji",
            voiceURI: "com.apple.ttsbundle.Sin-Ji-compact",
            lang: "zh-HK",
            localService: !0,
            "default": !0
        }, {
            name: "Mei-Jia",
            voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
            lang: "zh-TW",
            localService: !0,
            "default": !0
        }];
        self.cache_ios10_voices = [{
                name: "Maged",
                voiceURI: "com.apple.ttsbundle.Maged-compact",
                lang: "ar-SA"
            }, {
                name: "Zuzana",
                voiceURI: "com.apple.ttsbundle.Zuzana-compact",
                lang: "cs-CZ"
            }, {
                name: "Sara",
                voiceURI: "com.apple.ttsbundle.Sara-compact",
                lang: "da-DK"
            }, {
                name: "Anna",
                voiceURI: "com.apple.ttsbundle.Anna-compact",
                lang: "de-DE"
            }, {
                name: "Helena",
                voiceURI: "com.apple.ttsbundle.siri_female_de-DE_compact",
                lang: "de-DE"
            }, {
                name: "Martin",
                voiceURI: "com.apple.ttsbundle.siri_male_de-DE_compact",
                lang: "de-DE"
            }, {
                name: "Nikos (Enhanced)",
                voiceURI: "com.apple.ttsbundle.Nikos-premium",
                lang: "el-GR"
            }, {
                name: "Melina",
                voiceURI: "com.apple.ttsbundle.Melina-compact",
                lang: "el-GR"
            }, {
                name: "Nikos",
                voiceURI: "com.apple.ttsbundle.Nikos-compact",
                lang: "el-GR"
            }, {
                name: "Catherine",
                voiceURI: "com.apple.ttsbundle.siri_female_en-AU_compact",
                lang: "en-AU"
            }, {
                name: "Gordon",
                voiceURI: "com.apple.ttsbundle.siri_male_en-AU_compact",
                lang: "en-AU"
            }, {
                name: "Karen",
                voiceURI: "com.apple.ttsbundle.Karen-compact",
                lang: "en-AU"
            }, {
                name: "Daniel (Enhanced)",
                voiceURI: "com.apple.ttsbundle.Daniel-premium",
                lang: "en-GB"
            }, {
                name: "Arthur",
                voiceURI: "com.apple.ttsbundle.siri_male_en-GB_compact",
                lang: "en-GB"
            }, {
                name: "Daniel",
                voiceURI: "com.apple.ttsbundle.Daniel-compact",
                lang: "en-GB"
            },
            {
                name: "Martha",
                voiceURI: "com.apple.ttsbundle.siri_female_en-GB_compact",
                lang: "en-GB"
            }, {
                name: "Moira",
                voiceURI: "com.apple.ttsbundle.Moira-compact",
                lang: "en-IE"
            }, {
                name: "Nicky (Enhanced)",
                voiceURI: "com.apple.ttsbundle.siri_female_en-US_premium",
                lang: "en-US"
            }, {
                name: "Samantha (Enhanced)",
                voiceURI: "com.apple.ttsbundle.Samantha-premium",
                lang: "en-US"
            }, {
                name: "Aaron",
                voiceURI: "com.apple.ttsbundle.siri_male_en-US_compact",
                lang: "en-US"
            }, {
                name: "Fred",
                voiceURI: "com.apple.speech.synthesis.voice.Fred",
                lang: "en-US"
            },
            {
                name: "Nicky",
                voiceURI: "com.apple.ttsbundle.siri_female_en-US_compact",
                lang: "en-US"
            }, {
                name: "Samantha",
                voiceURI: "com.apple.ttsbundle.Samantha-compact",
                lang: "en-US"
            }, {
                name: "Tessa",
                voiceURI: "com.apple.ttsbundle.Tessa-compact",
                lang: "en-ZA"
            }, {
                name: "Monica",
                voiceURI: "com.apple.ttsbundle.Monica-compact",
                lang: "es-ES"
            }, {
                name: "Paulina",
                voiceURI: "com.apple.ttsbundle.Paulina-compact",
                lang: "es-MX"
            }, {
                name: "Satu",
                voiceURI: "com.apple.ttsbundle.Satu-compact",
                lang: "fi-FI"
            }, {
                name: "Amelie",
                voiceURI: "com.apple.ttsbundle.Amelie-compact",
                lang: "fr-CA"
            }, {
                name: "Daniel",
                voiceURI: "com.apple.ttsbundle.siri_male_fr-FR_compact",
                lang: "fr-FR"
            }, {
                name: "Marie",
                voiceURI: "com.apple.ttsbundle.siri_female_fr-FR_compact",
                lang: "fr-FR"
            }, {
                name: "Thomas",
                voiceURI: "com.apple.ttsbundle.Thomas-compact",
                lang: "fr-FR"
            }, {
                name: "Carmit",
                voiceURI: "com.apple.ttsbundle.Carmit-compact",
                lang: "he-IL"
            }, {
                name: "Lekha",
                voiceURI: "com.apple.ttsbundle.Lekha-compact",
                lang: "hi-IN"
            }, {
                name: "Mariska",
                voiceURI: "com.apple.ttsbundle.Mariska-compact",
                lang: "hu-HU"
            }, {
                name: "Damayanti",
                voiceURI: "com.apple.ttsbundle.Damayanti-compact",
                lang: "id-ID"
            }, {
                name: "Alice",
                voiceURI: "com.apple.ttsbundle.Alice-compact",
                lang: "it-IT"
            }, {
                name: "Hattori",
                voiceURI: "com.apple.ttsbundle.siri_male_ja-JP_compact",
                lang: "ja-JP"
            }, {
                name: "Kyoko",
                voiceURI: "com.apple.ttsbundle.Kyoko-compact",
                lang: "ja-JP"
            }, {
                name: "O-ren",
                voiceURI: "com.apple.ttsbundle.siri_female_ja-JP_compact",
                lang: "ja-JP"
            }, {
                name: "Yuna",
                voiceURI: "com.apple.ttsbundle.Yuna-compact",
                lang: "ko-KR"
            }, {
                name: "Ellen",
                voiceURI: "com.apple.ttsbundle.Ellen-compact",
                lang: "nl-BE"
            }, {
                name: "Xander",
                voiceURI: "com.apple.ttsbundle.Xander-compact",
                lang: "nl-NL"
            }, {
                name: "Nora",
                voiceURI: "com.apple.ttsbundle.Nora-compact",
                lang: "no-NO"
            }, {
                name: "Zosia",
                voiceURI: "com.apple.ttsbundle.Zosia-compact",
                lang: "pl-PL"
            }, {
                name: "Luciana",
                voiceURI: "com.apple.ttsbundle.Luciana-compact",
                lang: "pt-BR"
            }, {
                name: "Joana",
                voiceURI: "com.apple.ttsbundle.Joana-compact",
                lang: "pt-PT"
            }, {
                name: "Ioana",
                voiceURI: "com.apple.ttsbundle.Ioana-compact",
                lang: "ro-RO"
            }, {
                name: "Milena",
                voiceURI: "com.apple.ttsbundle.Milena-compact",
                lang: "ru-RU"
            }, {
                name: "Laura",
                voiceURI: "com.apple.ttsbundle.Laura-compact",
                lang: "sk-SK"
            }, {
                name: "Alva",
                voiceURI: "com.apple.ttsbundle.Alva-compact",
                lang: "sv-SE"
            }, {
                name: "Kanya",
                voiceURI: "com.apple.ttsbundle.Kanya-compact",
                lang: "th-TH"
            }, {
                name: "Yelda",
                voiceURI: "com.apple.ttsbundle.Yelda-compact",
                lang: "tr-TR"
            }, {
                name: "Li-mu",
                voiceURI: "com.apple.ttsbundle.siri_male_zh-CN_compact",
                lang: "zh-CN"
            }, {
                name: "Ting-Ting",
                voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
                lang: "zh-CN"
            }, {
                name: "Yu-shu",
                voiceURI: "com.apple.ttsbundle.siri_female_zh-CN_compact",
                lang: "zh-CN"
            }, {
                name: "Sin-Ji",
                voiceURI: "com.apple.ttsbundle.Sin-Ji-compact",
                lang: "zh-HK"
            }, {
                name: "Mei-Jia",
                voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
                lang: "zh-TW"
            }
        ];
        self.cache_ios11_voices = [{
                name: "Maged",
                voiceURI: "com.apple.ttsbundle.Maged-compact",
                lang: "ar-SA"
            }, {
                name: "Zuzana",
                voiceURI: "com.apple.ttsbundle.Zuzana-compact",
                lang: "cs-CZ"
            }, {
                name: "Sara",
                voiceURI: "com.apple.ttsbundle.Sara-compact",
                lang: "da-DK"
            }, {
                name: "Anna",
                voiceURI: "com.apple.ttsbundle.Anna-compact",
                lang: "de-DE"
            }, {
                name: "Helena",
                voiceURI: "com.apple.ttsbundle.siri_female_de-DE_compact",
                lang: "de-DE"
            }, {
                name: "Martin",
                voiceURI: "com.apple.ttsbundle.siri_male_de-DE_compact",
                lang: "de-DE"
            }, {
                name: "Melina",
                voiceURI: "com.apple.ttsbundle.Melina-compact",
                lang: "el-GR"
            }, {
                name: "Catherine",
                voiceURI: "com.apple.ttsbundle.siri_female_en-AU_compact",
                lang: "en-AU"
            }, {
                name: "Gordon",
                voiceURI: "com.apple.ttsbundle.siri_male_en-AU_compact",
                lang: "en-AU"
            }, {
                name: "Karen",
                voiceURI: "com.apple.ttsbundle.Karen-compact",
                lang: "en-AU"
            }, {
                name: "Arthur",
                voiceURI: "com.apple.ttsbundle.siri_male_en-GB_compact",
                lang: "en-GB"
            },
            {
                name: "Daniel",
                voiceURI: "com.apple.ttsbundle.Daniel-compact",
                lang: "en-GB"
            }, {
                name: "Martha",
                voiceURI: "com.apple.ttsbundle.siri_female_en-GB_compact",
                lang: "en-GB"
            }, {
                name: "Moira",
                voiceURI: "com.apple.ttsbundle.Moira-compact",
                lang: "en-IE"
            }, {
                name: "Aaron",
                voiceURI: "com.apple.ttsbundle.siri_male_en-US_compact",
                lang: "en-US"
            }, {
                name: "Fred",
                voiceURI: "com.apple.speech.synthesis.voice.Fred",
                lang: "en-US"
            }, {
                name: "Nicky",
                voiceURI: "com.apple.ttsbundle.siri_female_en-US_compact",
                lang: "en-US"
            }, {
                name: "Samantha",
                voiceURI: "com.apple.ttsbundle.Samantha-compact",
                lang: "en-US"
            }, {
                name: "Tessa",
                voiceURI: "com.apple.ttsbundle.Tessa-compact",
                lang: "en-ZA"
            }, {
                name: "Monica",
                voiceURI: "com.apple.ttsbundle.Monica-compact",
                lang: "es-ES"
            }, {
                name: "Paulina",
                voiceURI: "com.apple.ttsbundle.Paulina-compact",
                lang: "es-MX"
            }, {
                name: "Satu",
                voiceURI: "com.apple.ttsbundle.Satu-compact",
                lang: "fi-FI"
            }, {
                name: "Amelie",
                voiceURI: "com.apple.ttsbundle.Amelie-compact",
                lang: "fr-CA"
            }, {
                name: "Daniel",
                voiceURI: "com.apple.ttsbundle.siri_male_fr-FR_compact",
                lang: "fr-FR"
            }, {
                name: "Marie",
                voiceURI: "com.apple.ttsbundle.siri_female_fr-FR_compact",
                lang: "fr-FR"
            }, {
                name: "Thomas",
                voiceURI: "com.apple.ttsbundle.Thomas-compact",
                lang: "fr-FR"
            }, {
                name: "Carmit",
                voiceURI: "com.apple.ttsbundle.Carmit-compact",
                lang: "he-IL"
            }, {
                name: "Lekha",
                voiceURI: "com.apple.ttsbundle.Lekha-compact",
                lang: "hi-IN"
            }, {
                name: "Mariska",
                voiceURI: "com.apple.ttsbundle.Mariska-compact",
                lang: "hu-HU"
            }, {
                name: "Damayanti",
                voiceURI: "com.apple.ttsbundle.Damayanti-compact",
                lang: "id-ID"
            }, {
                name: "Alice",
                voiceURI: "com.apple.ttsbundle.Alice-compact",
                lang: "it-IT"
            }, {
                name: "Hattori",
                voiceURI: "com.apple.ttsbundle.siri_male_ja-JP_compact",
                lang: "ja-JP"
            }, {
                name: "Kyoko",
                voiceURI: "com.apple.ttsbundle.Kyoko-compact",
                lang: "ja-JP"
            }, {
                name: "O-ren",
                voiceURI: "com.apple.ttsbundle.siri_female_ja-JP_compact",
                lang: "ja-JP"
            }, {
                name: "Yuna",
                voiceURI: "com.apple.ttsbundle.Yuna-compact",
                lang: "ko-KR"
            }, {
                name: "Ellen",
                voiceURI: "com.apple.ttsbundle.Ellen-compact",
                lang: "nl-BE"
            }, {
                name: "Xander",
                voiceURI: "com.apple.ttsbundle.Xander-compact",
                lang: "nl-NL"
            }, {
                name: "Nora",
                voiceURI: "com.apple.ttsbundle.Nora-compact",
                lang: "no-NO"
            }, {
                name: "Zosia",
                voiceURI: "com.apple.ttsbundle.Zosia-compact",
                lang: "pl-PL"
            }, {
                name: "Luciana",
                voiceURI: "com.apple.ttsbundle.Luciana-compact",
                lang: "pt-BR"
            }, {
                name: "Joana",
                voiceURI: "com.apple.ttsbundle.Joana-compact",
                lang: "pt-PT"
            }, {
                name: "Ioana",
                voiceURI: "com.apple.ttsbundle.Ioana-compact",
                lang: "ro-RO"
            }, {
                name: "Milena",
                voiceURI: "com.apple.ttsbundle.Milena-compact",
                lang: "ru-RU"
            }, {
                name: "Laura",
                voiceURI: "com.apple.ttsbundle.Laura-compact",
                lang: "sk-SK"
            }, {
                name: "Alva",
                voiceURI: "com.apple.ttsbundle.Alva-compact",
                lang: "sv-SE"
            }, {
                name: "Kanya",
                voiceURI: "com.apple.ttsbundle.Kanya-compact",
                lang: "th-TH"
            }, {
                name: "Yelda",
                voiceURI: "com.apple.ttsbundle.Yelda-compact",
                lang: "tr-TR"
            }, {
                name: "Li-mu",
                voiceURI: "com.apple.ttsbundle.siri_male_zh-CN_compact",
                lang: "zh-CN"
            }, {
                name: "Ting-Ting",
                voiceURI: "com.apple.ttsbundle.Ting-Ting-compact",
                lang: "zh-CN"
            }, {
                name: "Yu-shu",
                voiceURI: "com.apple.ttsbundle.siri_female_zh-CN_compact",
                lang: "zh-CN"
            }, {
                name: "Sin-Ji",
                voiceURI: "com.apple.ttsbundle.Sin-Ji-compact",
                lang: "zh-HK"
            }, {
                name: "Mei-Jia",
                voiceURI: "com.apple.ttsbundle.Mei-Jia-compact",
                lang: "zh-TW"
            }
        ];
        self.systemvoices =null;
        self.CHARACTER_LIMIT = 250;
        self.VOICESUPPORT_ATTEMPTLIMIT = 5;
        self.voicesupport_attempts = 0;
        self.fallbackMode = !1;
        self.WORDS_PER_MINUTE = 130;
        self.fallback_audio = null;
        self.fallback_playbackrate = 1;
        self.def_fallback_playbackrate = self.fallback_playbackrate;
        self.fallback_audiopool = [];
        self.msgparameters = null;
        self.timeoutId = null;
        self.OnLoad_callbacks = [];
        self.useTimer = !1;
        self.utterances = [];
        self.userInteractionEvents = ["mousedown", "mouseup", "mousewheel", "keydown"];
        self.fallbackBufferLength = 5;
        self.iOS && (self.fallbackBufferLength = 2);
        var textReplacementArray = null;
        self.fallbackServicePath = "https://code.responsivevoice.org/getvoice.php";
        self.default_nv = self.ResponsiveVoices[2];
        self.debug = !1;
        self.nvsMapped = !1;
        self.forcedFallbackMode = !1;
        self.speechAllowedByUser = !0;
        self.enableEstimationTimeout = !0;
        self.log = function(b) {
            self.debug && console.log(b)
        };
        function textReplacements(a, c) {
            if (!textReplacementArray) return a;
            var b = a;
            try {
                for (var e = 0; e < textReplacementArray.length; e++) {
                    var h = textReplacementArray[e],
                        f = !1,
                        g = h.collectionvoices;
                    g ? (Array.isArray(g) || (g = [g]), c.collectionvoice && c.collectionvoice.name &&
                        -1 != g.indexOf(c.collectionvoice.name) && (f = !0)) : f = !0;
                    var n = !1,
                        k = h.systemvoices;
                    k ? (Array.isArray(k) || (k = [k]), c.systemvoice && c.systemvoice.name && -1 != k.indexOf(c.systemvoice.name) && (n = !0)) : n = !0;
                    (null == g || null != g && f) && (null == k || null != k && n) && (b = b.replace(h.searchvalue, h.newvalue))
                }
                return b
            } catch (m) {
                return console.warn("ResponsiveVoice: There was an error while processing the textReplacements array"), a
            }
        }
        function replaceNottoSpeakchars(a) {
            a = a.replace(/([\n\r])+/gm, "\n");
            for (var b = /([,.:!\u00a1?\u00bf;()\[\]\u2014\u00ab\u00bb])+[\n\r]/gm, d = !0; d;) null === a.match(b) ? d = !1 : a = a.replace(b, "$1 ");
            return a
        }
        self.init = function() {
            // self.is_wordpress = u();
            // self.is_bundle = q();
            if (self.is_android || self.iOS || self.is_safari) self.useTimer = !0;
            
            if(self.is_opera || "undefined" === typeof speechSynthesis){
                console.log("Voice synthesis not supported");
                self.enableFallbackMode()
            }else{
                setTimeout(function() {
                    var gsvinterval = setInterval(function() {
                        var v = window.speechSynthesis.getVoices();
                        if (v.length == 0 && (systemvoices == null || systemvoices.length == 0)) {
                            console.log('Voice support NOT ready');
                            self.voicesupport_attempts++;
                            if (self.voicesupport_attempts > self.VOICESUPPORT_ATTEMPTLIMIT) {
                                clearInterval(gsvinterval);
                                if (window.speechSynthesis != null) {
                                    if(self.iOS){
                                        if(self.iOS11 || self.iOS12 || self.iOS13_0 || self.iOS13 ){
                                            self.systemVoicesReady(self.cache_ios11_voices)
                                        }else{
                                            if(self.iOS10){
                                                self.systemVoicesReady(self.cache_ios10_voices)
                                            }else{
                                                if(self.iOS9){
                                                    self.systemVoicesReady(self.cache_ios9_voices) 
                                                }else{
                                                    self.systemVoicesReady(self.cache_ios_voices), console.log("Voice support ready (cached)")
                                                }
                                            }
                                        }
                                    }else{
                                        console.log("speechSynthesis present but no system voices found");
                                        self.enableFallbackMode();
                                    }
                                }else{
                                    //We don't support voices. Using fallback
                                    self.enableFallbackMode();
                                }
                            }
                            // else{
                            //     self.enableFallbackMode()
                            // }
                        }else{
                            console.log('Voice support ready');
                            self.systemVoicesReady(v);
                            clearInterval(gsvinterval);
                        }
                    }, 100)
                }, 100);
            }

            if(self.is_android || self.iOS || self.is_safari){
                self.enableWindowClickHook();
            } 
            
            self.Dispatch("OnLoad")
        };

        self.systemVoicesReady = function(b) {
            self.systemvoices = b;
            self.mapNVs();
            null != self.OnVoiceReady && self.OnVoiceReady.call();
            self.Dispatch("OnReady");
            window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ttsSDK_OnReady"))
        };
        self.enableFallbackMode = function() {
            self.fallbackMode = !0;
            self.forcedFallbackMode = !0;
            console.log("Enabling fallback mode");
            self.mapNVs();
            null != self.OnVoiceReady && self.OnVoiceReady.call();
            self.Dispatch("OnReady");
            window.hasOwnProperty("dispatchEvent") && window.dispatchEvent(new Event("ttsSDK_OnReady"));
            self.Dispatch("OnServiceSwitched")
        };
        self.getVoices = function () {
            var v = [];

            for (var i = 0; i < self.ResponsiveVoices.length; i++) {
                v.push({name: self.ResponsiveVoices[i].name});
            }

            return v;
        };
        self.speak = function(text, voicename, parameters) {
            if (null == text) self.log("No text provided");
            else if (self.initializePermissionsTimeout && clearTimeout(self.initializePermissionsTimeout), self.nvsMapped) {
                var lastChunkFormat = function(chunk) {
                        -1 != chunk.search(/[\u3002\n\.:;]/gm) ? chunk.split(/[\u3002\n\.:;]/).filter(function(a) {
                            a &&
                            multipartTextArr.push(a)
                        }) : multipartTextArr.push(chunk)
                    },
                    h = null;
                if (self.isPlaying()){
                    self.log("Cancelling previous speech");
                    self.cancel();
                    setTimeout(function() {
                        self.speak(text, voicename, parameters)
                    }, 50);
                } 
                else {
                    var nv;
                    if (null == voicename) {
                        nv = self.default_nv;
                        self.setDefaultVoice(nv.name)
                    } else{
                        nv = self.getNativeVoice(voicename);
                    }
                    if(!0 === nv.deprecated){
                        console.warn("ResponsiveVoice: Voice " + nv.name + " is deprecated and will be removed in future releases");
                    }

                    var profile = {};
                    if (null != nv.mappedProfile){
                        profile = nv.mappedProfile;
                    } 
                    else if (profile.systemvoice = self.getMatchedVoice(nv), profile.collectionvoice = {}, null == profile.systemvoice) {
                        console.log("ERROR: No voice found for: " +voicename);
                        return
                    }
                    text = textReplacements(text, profile);
                    text = text.replace(/["`]/gm, "'");
                    self.msgparameters =  parameters || {};
                    self.msgtext = text;
                    self.msgvoicename = voicename;
                    self.onstartFired = !1;
                    var multipartTextArr = [];
                    if (text.length > self.CHARACTER_LIMIT) {
                        var tmptxt = replaceNottoSpeakchars(text);
                        while (tmptxt.length > self.CHARACTER_LIMIT) {

                            //Split by common n others phrase delimiters
                            var p = tmptxt.search(/([\u3002:!\u00a1?\u00bf;\(\)\[\]\u2014\u00ab\u00bb\n]+|\.[^0-9]+)/);
                            var part = '';
        
                            //Coludn't split by priority characters, try commas
                            if (p == -1 || p >= CHARACTER_LIMIT) {
                                p = tmptxt.search(/,[^0-9]+/);
                            }
        
                            //Couldn't split by normal characters, then we use spaces
                            if ((p == -1 || p >= CHARACTER_LIMIT) && -1 != tmptxt.search(" ")) {
                                var words = tmptxt.split(' ');
        
                                for (var i = 0; i < words.length; i++) {
                                    if (part.length + words[i].length + 1 > self.CHARACTER_LIMIT){
                                        if(words[i].length >= self.CHARACTER_LIMIT){
                                            part += words[i].substr(0, self.CHARACTER_LIMIT - part.length - 1);
                                        }
                                        break;
                                    }
                                    part += (i != 0 ? ' ' : '') + words[i];
                                }
        
                            } else {
                                if (-1 == p || p >= self.CHARACTER_LIMIT) p = self.CHARACTER_LIMIT - 1;
                                part = tmptxt.substr(0, p + 1);
                            }
                            tmptxt = tmptxt.substr(part.length, tmptxt.length - part.length);
                            multipartTextArr.push(part);
                        }
                        //last chunk
                        if(0 < tmptxt.length){
                            lastChunkFormat(tmptxt)
                        }
                    } else lastChunkFormat(text);

                    self.multipartText = multipartTextArr;
                    console.log("sentences",multipartTextArr);
                    
                    //self.fallbackMode =1;

                    if (self.checkSpeechAllowed()) {
                        self.fallbackMode && 0 < self.fallback_audiopool.length && self.clearFallbackPool();
                        self.msgprofile = profile;
                        console.log("Voice picked: " , self.msgprofile.systemvoice.name);
                        self.utterances = [];
                        self.fallbackChunks = [];
                        for (let i = 0; i < multipartTextArr.length; i++)
                            if (!self.fallbackMode && self.getServiceEnabled(self.services.NATIVE_TTS)){
                                console.log("Using SpeechSynthesis");
                                h = self.services.NATIVE_TTS;
                                //create msg object
                                var msg = new SpeechSynthesisUtterance();
                                msg.voice = profile.systemvoice;
                                msg.voiceURI = profile.systemvoice.voiceURI;
                                msg.volume =self.selectBest([ profile.collectionvoice.volume, profile.systemvoice.volume, 1]);
                                msg.rate = self.selectBest([self.iOS9plus ? 1 : null, profile.collectionvoice.rate, profile.systemvoice.rate, 1]);
                                msg.pitch = self.selectBest([profile.collectionvoice.pitch, profile.systemvoice.pitch, 1]); 
                                msg.text = self.multipartText[i];
                                msg.lang = self.selectBest([profile.collectionvoice.lang, profile.systemvoice.lang]);
                                msg.rvIndex = i;
                                msg.rvTotal = self.multipartText.length;
                                msg.onstart = self.speech_onstart;
                                self.msgparameters.onendcalled = !1;
                                if(parameters !=null){
                                    msg.voice = "undefined" !== typeof parameters.voice ? parameters.voice : profile.systemvoice;
                                    
                                    if(i < self.multipartText.length - 1 && 1 < self.multipartText.length){
                                        msg.onend = self.onPartEnd;
                                        msg.hasOwnProperty("addEventListener") && msg.addEventListener("end", self.onPartEnd)
                                    }else{
                                        msg.onend = self.speech_onend;
                                        msg.hasOwnProperty("addEventListener") && msg.addEventListener("end", self.speech_onend)
                                    }

                                    msg.onerror = parameters.onerror || function(b) {
                                        self.log("Unknow Error");
                                        self.log(b)
                                    }

                                    msg.rate = self.validateParameters(parameters, "rate");
                                    msg.pitch = self.validateParameters(parameters, "pitch");
                                    msg.volume = self.validateParameters(parameters, "volume");
                                    msg.onpause = parameters.onpause;
                                    msg.onresume = parameters.onresume;
                                    msg.onmark = parameters.onmark;
                                    msg.onboundary = parameters.onboundary || self.onboundary;
                                    msg.pitch = null != parameters.pitch ? parameters.pitch : msg.pitch;
                                    msg.rate = self.iOS ? (null != parameters.rate ? parameters.rate * parameters.rate : 1) * msg.rate 
                                                        : (null != parameters.rate ? parameters.rate : 1) * msg.rate;
                                    msg.volume = null != parameters.volume ? parameters.volume : msg.volume;
                                }else{
                                    console.log("No Params received for current Utterance");
                                    msg.voice = profile.systemvoice;
                                    msg.onstart = self.speech_onstart;
                                    msg.onend = self.speech_onend;
                                    msg.onboundary = self.onboundary;
                                    msg.onerror = function(b) {
                                        self.log("Unknow Error");
                                        self.log(b)
                                    }
                                }

                                self.utterances.push(msg);
                                0 == i && (self.currentMsg = msg);
                                console.log(msg);
                                self.tts_speak(msg);
                            }else if(self.fallbackMode && self.getServiceEnabled(self.services.FALLBACK_AUDIO)){
                                h = self.services.FALLBACK_AUDIO;
                                self.fallback_playbackrate = self.def_fallback_playbackrate;
                                let pitch = self.selectBest([profile.collectionvoice.pitch, profile.systemvoice.pitch, 1]);
                                let rate = self.selectBest([self.iOS9plus ? 1 : null, profile.collectionvoice.rate, profile.systemvoice.rate, 1]);
                                let volume = self.selectBest([profile.collectionvoice.volume, profile.systemvoice.volume, 1]);
                                if(parameters !=null){
                                    pitch *= null != parameters.pitch ? parameters.pitch : 1;
                                    rate *= null != parameters.rate ? parameters.rate : 1;
                                    volume *= null != parameters.volume ? parameters.volume : 1;
                                    var extraParams = parameters.extraParams || null;
                                }
                                pitch /= 2;
                                rate /= 2;
                                volume *= 2;

                                pitch = Math.min(Math.max(pitch, 0), 1);
                                rate = Math.min(Math.max(rate, 0), 1);
                                volume = Math.min(Math.max(volume, 0), 1);

                                let query = "?t=" + encodeURIComponent(self.multipartText[i]) + "&tl=" + (profile.collectionvoice.lang || profile.systemvoice.lang || "en-US") + "&sv=" + (profile.collectionvoice.service || profile.systemvoice.service || "") + "&vn=" + (profile.collectionvoice.voicename || profile.systemvoice.voicename || "") + "&pitch=" + pitch.toString() + "&rate=" + rate.toString() + "&vol=" + volume.toString();
                            
                                "undefined" != typeof rvApiEndpoint && rvApiEndpoint && (query = "?text=" + encodeURIComponent(self.multipartText[i]) +
                                    "&lang=" + (profile.collectionvoice.lang || profile.systemvoice.lang || "en-US") + "&engine=" + (profile.collectionvoice.service || profile.systemvoice.service || "") + "&name=" + (profile.collectionvoice.voicename || profile.systemvoice.voicename || "") + "&pitch=" + pitch.toString() + "&rate=" + rate.toString() + "&volume=" + volume.toString());

                                let url = self.fallbackServicePath + query;
                                "undefined" != typeof rvApiKey && (url += "&key=" + rvApiKey);
                                "undefined" == typeof rvApiKey && self.is_bundle && (url += "&key=FQ9r4hgY");
                                "undefined" == typeof rvApiKey && self.is_wordpress && (url += "&key=HY7lTyiS");

                                void 0 !== profile.collectionvoice.gender &&
                                    (url += "&gender=" + profile.collectionvoice.gender);
                                extraParams && (url += "&extraParams=" + JSON.stringify(extraParams));
                                console.log("url----",url)
                                self.fallbackChunks.push({
                                    text: self.multipartText[i],
                                    url: url,
                                    audio: null
                                })

                            } 

                        if(self.fallbackMode && self.getServiceEnabled(self.services.FALLBACK_AUDIO))
                        {
                            self.fallbackChunkIndex = 0;
                            self.fallback_startPart();
                        } 
                        self.log("Service used: " + h)
                    } else self.scheduledSpeak = {
                        text: text,
                        voicename: voicename,
                        parameters: parameters
                    }
                }
            } else {
                setTimeout(function() {
                    self.speak(text, voicename, parameters)
                }, 15)
            }
        };
        self.mapNVs = function() {
            if ("object" == typeof navigator) {
                var b, c = "anguage";
                var d = navigator;
                d = (b = d["l" + c + "s"], b && b.length ? b : (c = d["l" + c] || d["browserL" + c] || d["userL" + c]) ? [c] : c)
            } else d = void 0;
            b = d[0];

            for (var c = 0; c < self.ResponsiveVoices.length; c++) {
                d = self.ResponsiveVoices[c];
                for (var e = 0; e < d.voiceIDs.length; e++) {
                    var h = self.voicecollection[d.voiceIDs[e]];
                    if (1 != h.fallbackvoice) {
                        var f = self.getSystemVoice(h.name);
                        self.forcedFallbackMode && (f = null);
                        self.iOS12_0 &&
                            d.lang.toLowerCase() != b.toLowerCase() && d.lang.toLowerCase().split("-")[0] != b.toLowerCase() && (f = null);
                        
                        if (null != f) {
                            d.mappedProfile = {
                                systemvoice: f,
                                collectionvoice: h
                            };
                            break
                        }
                    } else {
                        d.mappedProfile = {
                            systemvoice: {},
                            collectionvoice: h
                        };
                        break
                    }
                }
            }
            self.nvsMapped = !0
        };
        self.getSystemVoice = function(name) {
            var c = String.fromCharCode(160);
            var d = name.replace(new RegExp("\\s+|" +
                c, "g"), "");
            if ("undefined" === typeof self.systemvoices || null === self.systemvoices) return null;
            for (var e = 0; e < self.systemvoices.length; e++)
                if (0 === self.systemvoices[e].name.localeCompare(name) || 0 === self.systemvoices[e].name.replace(new RegExp("\\s+|" + c, "g"), "").replace(/ *\([^)]*\) */g, "").localeCompare(d)){
                    return self.systemvoices[e];
                } 
            return null
        };
        self.Dispatch = function(name) {
            if (self.hasOwnProperty(name + "_callbacks") && null != self[name + "_callbacks"] && 0 < self[name + "_callbacks"].length) {
                var callbacks = self[name + "_callbacks"];
                for (var d = 0; d < callbacks.length; d++){
                    callbacks[d]();
                }
                return !0
            }
            var e = name + "_callbacks_timeout",
                h = name + "_callbacks_timeoutCount";
            self.hasOwnProperty(e) || (self[h] = 10, self[e] = setInterval(function() {
                --self[h];
                (self.Dispatch(name) || 0 > self[h]) && clearTimeout(self[e])
            }, 50));
            return !1
        };

        self.AddEventListener = function (event, callback) {
                self.hasOwnProperty(event + "_callbacks") || (self[event + "_callbacks"] = []);
                self[event + "_callbacks"].push(callback)
            };
        self.addEventListener = self.AddEventListener;

        self.RemoveEventListener = function (event, callback) {
            if(self[event + "_callbacks"] && -1 != self[event + "_callbacks"].indexOf(callback) )
            {
                self[event + "_callbacks"].splice(self[event + "_callbacks"].indexOf(callback), 1)
            }
        };
        self.clickEvent = function() {
            self.log("Click event");
            self.click_event_detected = !0;
            self.initializePermissionsTimeout = setTimeout(self.initializePermissions, 5);
            self.userInteractionEvents.forEach(function(b) {
                window.removeEventListener(b, self.clickEvent,!1)
            });
            self.Dispatch("OnClickEvent")
        };
        self.initializePermissions = function() {
            if (self.iOS && !self.iOS_initialized) {
                self.log("Initializing iOS click event");
                let b = new SpeechSynthesisUtterance(" ");
                speechSynthesis.speak(b);
                self.iOS_initialized = !0
            }
            if(self.is_android && !self.android_initialized){
                self.log("Initializing Android click event");
                let b = new SpeechSynthesisUtterance(" ");
                speechSynthesis.speak(b)
            }
            self.initFallbackPool()
        };
        self.initFallbackPool = function() {
            if (!self.fallback_audiopool || 0 == self.fallback_audiopool.length) {
                for (var b = 0; 10 > b; b++) {
                    var c = b,
                        d = document.createElement("AUDIO");
                    d.preload = "auto";
                    self.is_android && (d.src = "data:audio/mpeg;base64,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",
                        d.load(), 9 == c && (console.log("Android HTML audio initialized"), self.android_initialized = !0));
                    self.iOS && (d.src = "data:audio/mpeg;base64,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",
                        d.load(), 9 == c && (console.log("iOS HTML audio initialized"), self.iOS_initialized = !0));
                    self.fallback_audiopool.push(d)
                }
                self.fallback_audiopool_index = 0
            }
        };
        self.isPlaying = function() {
            return self.fallbackMode ? null != self.fallback_audio && !self.fallback_audio.ended && !self.fallback_audio.paused :
                "undefined" != typeof speechSynthesis ? speechSynthesis.speaking : !1
        };
        self.checkAndCancelTimeout = function() {
            null != self.timeoutId && (clearTimeout(self.timeoutId), self.timeoutId = null)
        };
        self.clearFallbackPool = function() {
            for (var b = 0; b < self.fallback_audiopool.length; b++) null != self.fallback_audiopool[b] && self.fallback_audiopool[b].pause();
            self.fallback_audiopool_index = 0;
            self.fallback_audio = null;
            self.fallbackChunks = []
        };
        self.cancel = function() {
            self.checkAndCancelTimeout();
            if(self.fallbackMode){
                self.log("fallback pool",self.fallback_audio);
                null != self.fallback_audio && self.fallback_audio.pause();
                self.clearFallbackPool()
            }else{
                self.cancelled = !0;
                speechSynthesis.cancel()
            }
        };
        self.setDefaultVoice = function(b) {
            if (self.nvsMapped) {
                var c = self.getNativeVoice(b);
                null != c && (self.default_nv = c)
            } else setTimeout(function() {
                self.setDefaultVoice(b)
            }, 15)
        };
        self.getNativeVoice = function(b) {
            for (var c = 0; c < self.ResponsiveVoices.length; c++){
                if (self.ResponsiveVoices[c].name == b) {
                    if(self.is_android){
                        self.fallbackMode = !0;
                    }else{
                        b = self.fallbackMode,
                        self.fallbackMode = !0 === self.ResponsiveVoices[c].mappedProfile.collectionvoice.fallbackvoice || !0 === self.forcedFallbackMode ? !0 : !1;
                        if(b != self.fallbackMode){
                            self.mapNVs();
                            self.Dispatch("OnServiceSwitched");
                        } 
                    }
                    return self.ResponsiveVoices[c];
                }
            }
            return null
        };
        self.getMatchedVoice = function(b) {
            for (var c = 0; c < b.voiceIDs.length; c++) {
                var d = self.getSystemVoice(self.voicecollection[b.voiceIDs[c]].name);
                if (null != d) return d
            }
            return null
        };

        self.allowSpeechClicked = function (isAllowed) {
            self.allowSpeechDiv.parentNode.removeChild(self.allowSpeechDiv);
            self.allowSpeechDiv = null;
            if (isAllowed){
                self.speechAllowedByUser = isAllowed;
                self.clickEvent();
                if(self.scheduledSpeak){
                    self.speak(self.scheduledSpeak.text, self.scheduledSpeak.voicename, self.scheduledSpeak.parameters);
                    self.scheduledSpeak = null;
                } 
            } 
            self.Dispatch("OnAllowSpeechClicked")
        };

        self.checkSpeechAllowed = function(b) {
            if (0 == self.speechAllowedByUser) return !1;
            var c = self.is_android || self.iOS,
                d = self.is_safari && (self.fallbackMode || self.forcedFallbackMode);
            if (!0 !== self.disablePermissionPopup && (!0 === self.allowPermissionPopupEverywhere || c || d) && !self.click_event_detected) {
                if (self.allowSpeechDiv) return;
                self.allowSpeechDiv_appearances = null == self.allowSpeechDiv_appearances ? 1 : ++self.allowSpeechDiv_appearances;
                if (2 < self.allowSpeechDiv_appearances){
                    console.log("ResponsiveVoice: Speech not allowed by user")
                    return !1;
                } 
                var style = document.createElement("style");
                style.innerHTML = '.rvNotification{position:fixed;background-color:#fff;text-align:center;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:400;line-height:1.5;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:10000;width:100vw;left:0;bottom:0;font-size:1rem;padding-bottom:.5em;padding-right:.5em}.rvButtonRow{padding-right:2em;padding-bottom:1em;text-align:right;font-size:medium}.rvButton{cursor:pointer;display:inline-block;margin-left:1em;padding:.8em 2em;border-radius:3px;font-size:small}.rvButtonAllow{border:none;background-color:#2b8cff;color:#fff}.rvButtonDeny{border:1px solid #2b8cff;color:#2b8cff;background-color:#fff}.rvTextRow{padding-top:1em;padding-bottom:2em}@media (min-width:576px){.rvNotification{width:60vw;left:20vw}}@media (min-width:768px){.rvNotification{width:50vw;left:25vw}}@media (min-width:992px){.rvNotification{width:40vw;left:30vw}}@media (min-width:1200px){.rvNotification{width:30vw;left:35vw}}';
                document.body.appendChild(style);
                self.allowSpeechDiv = document.createElement("div");
                self.allowSpeechDiv.classList.add("rvNotification");
                void 0 == b && (b = {});
                self.allowSpeechDiv.innerHTML = '<div class="rvTextRow"><strong>' + (void 0 != b.urlOverride ? b.urlOverride : window.location.hostname) + "</strong> " + (void 0 != b.textOverride ? b.textOverride : "wants to play speech") + '</div><div class="rvButtonRow"><div onclick="responsivevoice.allowSpeechClicked(false);" class="rvButton rvButtonDeny">DENY</div><div onclick="responsivevoice.allowSpeechClicked(true);" class="rvButton rvButtonAllow">ALLOW</div></div>';
                document.body.appendChild(self.allowSpeechDiv);
                return !1
            }
            return !0
        };
        self.selectBest = function(a) {
            for (var b = 0; b < a.length; b++)
                if (null != a[b]) return a[b];
            return null
        };
        self.validateParameters = function(callbacks, paraName) {
            if ("undefined" === typeof callbacks[paraName]) return callbacks[paraName];
            switch (paraName) {
                case "rate":
                case "pitch":
                case "volume":
                    var b = Number(callbacks[paraName]);
                    isNaN(b) && console.warn("ResponsiveVoice: the parameter " + paraName + ' has a wrong value "' + callbacks[paraName] + '". Defaults were used.');
                    callbacks[paraName] = isNaN(b) ? "1" : callbacks[paraName]
            }
            return callbacks[paraName]
        };
        self.startTimeout = function(text, timeout) {
            var d = self.msgprofile.collectionvoice.timerSpeed;
            null == self.msgprofile.collectionvoice.timerSpeed && (d =1);
            console.log("startTimeouttt..",text, timeout);
            0 >= d || (self.timeoutId = setTimeout(timeout, self.getEstimatedTimeLength(text, d)), self.log("Timeout ID: " + self.timeoutId))
        };
        self.speech_timedout = function() {
            self.cancel();
            self.cancelled = !1;
            self.speech_onend()
        };
        self.speech_onstart = function() {
            if(self.audioPause){
                speechSynthesis.pause();
            }else{
                if (!self.onstartFired && (self.onstartFired = !0, self.enableEstimationTimeout && self.useTimer && (self.fallbackMode || self.startTimeout(self.msgtext, self.speech_timedout)), self.msgparameters.onendcalled = !1, null != self.msgparameters && null != self.msgparameters.onstart)){
                    self.msgparameters.onstart();
                } 
            }
        };
        self.speech_onend = function() {
            self.checkAndCancelTimeout();
            if(!0 === self.cancelled){
                self.cancelled = !1;
            }else{
                self.log("on end fired",self.msgparameters);
                if(null != self.msgparameters && null != self.msgparameters.onend && 1 != self.msgparameters.onendcalled){
                    self.log("Speech on end called  -" + self.msgtext);
                    self.msgparameters.onendcalled = !0;
                    self.msgparameters.onend()
                }
            }
        };
        self.fallback_audioPool_getAudio = function() {
            self.initFallbackPool();
            self.fallback_audiopool_index >= self.fallback_audiopool.length && (self.fallback_audiopool_index = 0);
            return self.fallback_audiopool[self.fallback_audiopool_index++]
        };
        self.fallback_updateChunksBuffer = function() {
            for (var b = self.fallbackChunkIndex; b < Math.min(self.fallbackChunks.length, self.fallbackChunkIndex + self.fallbackBufferLength); b++) {
                var c = self.fallbackChunks[b];
                if(null == c.audio){
                    c.audio = self.fallback_audioPool_getAudio();
                    (function(c) {
                        var d = function() {
                            c.audio.src = c.url;
                            c.audio.playbackRate = self.fallback_playbackrate;
                            c.audio.preload = "auto";
                            c.audio.load()
                        };
                        0 == b ? d() : setTimeout(d, 50 * b)
                    }(c))
                }
            }
        };
        self.fallback_startPart = function() {
            
            0 == self.fallbackChunkIndex && self.speech_onstart();
            self.fallback_updateChunksBuffer();
            self.fallback_audio = self.fallbackChunks[self.fallbackChunkIndex].audio;
            if(null == self.fallback_audio){
                console.log("Fallback Audio is not available")
            }else{
                (function() {
                    
                    var audio = self.fallback_audio;
                    setTimeout(function() {
                        audio.playbackRate = self.fallback_playbackrate
                    }, 50);
                    audio.onloadedmetadata = function() {
                        audio.playbackRate = self.fallback_playbackrate
                    };
                    
                    var c = function(audio) {
                        setTimeout(function() {
                            if (0 == audio.currentTime && !audio.paused) {
                                self.enableEstimationTimeout = !1;
                                self.checkAndCancelTimeout();
                                audio.load();
                                var c = function() {
                                    audio.play();
                                    audio.removeEventListener("canplaythrough",c)
                                };
                                audio.addEventListener("canplaythrough", c, !1)
                            }
                        }, 700)
                    };

                    audio.addEventListener('pause', (event) => {
                        self.msgparameters.onpausecalled = !0;
                        if(self.msgparameters.onpause) self.msgparameters.onpause();
                    })

                    audio.addEventListener('play', (event) => {
                        self.msgparameters.onpausecalled = !0;
                        if(self.msgparameters.onresume) self.msgparameters.onresume();
                    })

                    if (2 <= audio.readyState){
                        audio.play(), c(audio);
                    } 
                    else {
                        var d = function() {
                            audio.play();
                            audio.removeEventListener("canplaythrough", d)
                        };
                        audio.addEventListener("canplaythrough", d, !1)
                    }
                })();

                self.fallback_audio.onerror = function(err) {
                    function b() {
                        if (this.readyState == this.DONE && 200 !== this.status) switch (this.status) {
                            case 400:
                                console.log("ResponsiveVoice audio could not be loaded. Invalid parameters.");
                                break;
                            case 403:
                                console.log("ResponsiveVoice invalid API key." +
                                    encodeURIComponent(window.location.href));
                                break;
                            default:
                                console.log("ResponsiveVoice audio could not be loaded. There is an issue connecting your browser to the API endpoint.")
                        }
                    }
                    switch (err.target.error.code) {
                        case err.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:
                            var d = new XMLHttpRequest;
                            d.open("GET", err.target.src, !0);
                            d.send();
                            d.onreadystatechange = b;
                            break;
                        default:
                            console.error("ResponsiveVoice: an unknown error occurred.")
                    }
                };
                
                self.fallback_audio.addEventListener("ended", self.fallback_finishPart)
            }

        };
        self.isFallbackAudioPlaying = function () {
            for (var b = 0; b < self.fallback_audiopool.length; b++) {
                var audio = self.fallback_audiopool[b];
                if (!audio.paused && !audio.ended && audio.currentTime != audio.duration) return !0
            }
            return !1
        };
        self.fallback_finishPart = function (b) {
            if(self.isFallbackAudioPlaying()){
                self.checkAndCancelTimeout();
                self.timeoutId = setTimeout(self.fallback_finishPart, 1000 * (self.fallback_audio.duration - self.fallback_audio.currentTime))
            }else{
                self.checkAndCancelTimeout();
                if(self.fallbackChunkIndex < self.fallbackChunks.length - 1){
                    self.fallbackChunkIndex++;
                    self.fallback_startPart();
                }else {
                    self.speech_onend();
                }
            }
        };
        self.tts_speak = function(b) {
            self.audioPause = false;
            setTimeout(function() {
                self.cancelled = !1;
                try{
                    console.log("in tts")
                    speechSynthesis.speak(b);
                }catch(err){
                    console.log("err",err)
                }
                
            }, .01)
        };
        self.pause = function () {
            if(self.fallbackMode){
                null != self.fallback_audio && self.fallback_audio.pause()
            }else{
                speechSynthesis.pause(),
                self.audioPause = true,
                self.ttsCancelledByTimeout = !1;
                self.ttsKeepAliveTimeout = setTimeout(function () {
                    self.ttsKeepAliveTimeout = null;
                    speechSynthesis.cancel();
                    self.ttsCancelledByTimeout = !0
                }, 6E4)
            }
        };
        self.resume = function () {
            if (self.fallbackMode) {
                try {
                    null != self.fallback_audio && self.fallback_audio.play()
                } catch (err) {
                    console.log("error in resume..." + err)
                }
            }
            else if (self.ttsCancelledByTimeout) {
                for (var b = self.ttsCancelledByTimeout = !1, c = 0; c < self.utterances.length; c++) {
                    var utterance = self.utterances[c];
                    self.currentMsg == utterance && (b = !0);
                    b && self.tts_speak(utterance)
                }
            } else{
                self.audioPause = false;
                if(self.ttsKeepAliveTimeout){
                    clearTimeout(self.ttsKeepAliveTimeout);
                    self.ttsKeepAliveTimeout = null
                }
                speechSynthesis.resume()
            }
        };
        self.setVolume = function (volume) {
            if (self.isPlaying())
                if (self.fallbackMode) {
                    for (var c =0; c < self.fallback_audiopool.length; c++){
                        self.fallback_audiopool[c].volume = volume;
                    } 
                    self.fallback_audio.volume = volume
                } else{
                    for (var c = 0; c < self.utterances.length; c++){
                        self.utterances[c].volume = volume
                    } 
                }
        };
        self.onPartEnd = function (b) {
            if (null != self.msgparameters && null != self.msgparameters.onchuckend) self.msgparameters.onchuckend();
            self.Dispatch("OnPartEnd");
            var index = self.utterances.indexOf(b.utterance);
            self.currentMsg = self.utterances[index + 1]
        };
        self.onboundary = function (b) {
            self.iOS && !self.onstartFired && self.speech_onstart()
        };        
        self.numToWords = function (b) {
            function c(a) {
                if (Array.isArray(a)) {
                    for (var b =0, c = Array(a.length); b < a.length; b++){
                        c[b] = a[b];
                    } 
                    return c
                }
                return Array.from(a)
            }
            var d = function () {
                return function (a, b) {
                    if (Array.isArray(a)) return a;
                    if (Symbol.iterator in Object(a)) {
                        var c = [],
                            d = !0,
                            e = !1,
                            f = void 0;
                        try {
                            for (var g = a[Symbol.iterator](), h; !(d = (h = g.next()).done) && (c.push(h.value), !b || c.length !== b); d = !0);
                        } catch (w) {
                            e = !0, f = w
                        } finally {
                            try {
                                if (!d && g["return"]) g["return"]()
                            } finally {
                                if (e) throw f;
                            }
                        }
                        return c
                    }
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                }
            }(),
                e = function (a) {
                    return 0 ===
                        a.length
                },
                h = function (a) {
                    return function (b) {
                        return b.slice(0, a)
                    }
                },
                f = function (a) {
                    return function (b) {
                        return b.slice(a)
                    }
                },
                g = function (a) {
                    return a.slice(0).reverse()
                },
                l = function (a) {
                    return function (b) {
                        return function (c) {
                            return a(b(c))
                        }
                    }
                },
                k = function (a) {
                    return !a
                },
                m = function v(a) {
                    return function (b) {
                        return e(b) ? [] : [h(a)(b)].concat(c(v(a)(f(a)(b))))
                    }
                },
                p = " one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" "),
                q = "  twenty thirty forty fifty sixty seventy eighty ninety".split(" "),
                r = " thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion".split(" "),
                t = function (a) {
                    var b = d(a, 3);
                    a = b[0];
                    var c = b[1];
                    b = b[2];
                    return [0 === (Number(b) || 0) ? "" : p[b] + " hundred ", 0 === (Number(a) || 0) ? q[c] : q[c] && q[c] + " " || "", p[c + a] || p[a]].join("")
                },
                u = function (a, b) {
                    return "" === a ? a : a + " " + r[b]
                };
            return "number" === typeof b ? self.numToWords(String(b)) : "0" === b ? "zero" : l(m(3))(g)(Array.from(b)).map(t).map(u).filter(l(k)(e)).reverse().join(" ").trim()
        };
        self.getWords = function (text) {
            text = text.replace(/$|\u00a5|\u20a1|\u20ac|\u00a3|\u20aa|\u20b9|\uffe5|\u17db|\u20a9|\u20a6|\u0e3f|\u20b4|\u20ab/gi," dummy currency ");
            var c = text.split(/(\s*[\s,]\s*|\?|;|:|\.|\(|\)|!)/);
            c = c.filter(function (a) {
                return /[^\s]/.test(a)
            });
            for (var d = 0; d < c.length; d++){
                if(null != (text = c[d].toString().match(/\d+/))){
                    c.splice(d, 1);
                    self.numToWords(+text[0]).split(/\s+/).map(function (a) {
                        c.push(a)
                    })
                }
            }
            return c
        };
        self.getEstimatedTimeLength = function (text, timeout) {
            text = self.getWords(text);
            var d = 0,
                e = self.fallbackMode ? 1300 : 700;
            timeout = timeout || 1;
            text.map(function (a, b) {
                d += (a.toString().match(/[^ ]/igm) || a).length
            });
            var h = text.length,
                f = 60 / self.WORDS_PER_MINUTE * timeout * 1E3 * h;
            5 > h && (f = timeout * (e + 50 * d));
            self.log("Estimated time length: " +
                f + " ms, words: [" + text + "], charsCount: " + d);
            return f
        };

        self.services = {
            NATIVE_TTS: 0,
            FALLBACK_AUDIO: 1
        };
        self.servicesPriority = [0, 1];
        self.servicesEnabled = [];
        self.getServiceEnabled = function(b) {
            return self.servicesEnabled[b] || !1
        };
        self.setServiceEnabled = function(b, c) {
            self.servicesEnabled[b] = c
        };
        self.setServiceEnabled(self.services.NATIVE_TTS, !0);
        self.setServiceEnabled(self.services.FALLBACK_AUDIO, !0);

        self.forceFallbackMode = function(b) {
            self.forcedFallbackMode = b;
            self.fallbackMode = b;
            self.mapNVs();
            self.Dispatch("OnServiceSwitched")
        };

        self.enableWindowClickHook = function() {
            self.userInteractionEvents.forEach(function(b) {
                window.addEventListener(b, self.clickEvent, !1)
            })
        };

        self.setTextReplacements = function(objArr) {
            if (null == objArr) textReplacementArray = null;
            else {
                textReplacementArray = [];
                for (var b = 0; b < objArr.length; b++) {
                    var obj = objArr[b],
                        searchvalue = d.searchvalue;
                    if ("string" == typeof searchvalue){
                        try {
                            var h = searchvalue.match(/^\/(.*?)\/([gimy]*)$/),
                                f = new RegExp(h[1], h[2]);
                            f instanceof RegExp && (searchvalue = f)
                        } catch (g) {
                            searchvalue = new RegExp(searchvalue, "g")
                        }
                    }
                    textReplacementArray.push({
                        searchvalue: searchvalue,
                        newvalue: obj.newvalue,
                        collectionvoices: obj.collectionvoices,
                        systemvoices: obj.systemvoices
                    })
                }
            }
        };

        //We should use jQuery if it's available
        if (typeof $ === 'undefined') {
            document.addEventListener('DOMContentLoaded', function () {
                self.init();
            });
        } else {

            $(document).ready(function () {
                self.init();
            });
        }  
    }
    
    var responsivevoice = new ResponsiveVoice();
}