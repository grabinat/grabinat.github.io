﻿(function () {
    try {
        var topNotifierButton = document.getElementsByClassName('gb_yb gb_pd gb_Ba');
        for (var k = 0; k < topNotifierButton.length; k++) {
            topNotifierButton[k].click();
        }
        var topNotifier = document.querySelector('.gb_Pc gb_g');
        if (topNotifier) {
            for (var k = 0; k < topNotifier.length; k++) {
                topNotifier[k].style.display = 'none';
            }
        }

        var gkeep = document.getElementsByClassName('gb_rc gb_jb gb_qc gb_Nd');
        for (var i = 0; i < gkeep.length; i++) {
            gkeep[i].style.display = 'none';
        }
        var gcalendar = document.getElementsByClassName('gb_jb gb_9f gb_R gb_8f gb_T');
        for (var j = 0; j < gcalendar.length; j++) {
            gcalendar[j].style.display = 'none';
        }
    }
    catch (error) {
        var res = {
            Type: "__NOTIFIER",
            Error: "error",
            Message: error.toString()
        };
        showMsg(JSON.stringify(res));
    }
})()
