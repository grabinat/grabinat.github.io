(function (){
    try {
        var topNotifierButton = document.getElementsByClassName('gb_xa gb_rd gb_vd');
        for (var k = 0; k < topNotifierButton.length; k++) {
            topNotifierButton[k].click();
        }
        var topNotifier = document.getElementsByClassName('gb_id gb_jd gb_7c gb_od gb_g');
        for (var s = 0; s < topNotifier.length; s++) {
            topNotifier[s].style.display = 'none';
        }
        
        var gkeep = document.getElementsByClassName('gb_id gb_jd gb_7c gb_od gb_g');
        for (var i = 0; i < gkeep.length; i++) {
            gkeep[i].style.display = 'none';
        }
        var gcalendar = document.getElementsByClassName('gb_id gb_jd gb_7c gb_od gb_g');
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
