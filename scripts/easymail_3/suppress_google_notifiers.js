$(document).ready(function ()
{
    var buttons = document.getElementsByClassName('gb_0 gb_nd gb_od');
    for (var k = 0; k < buttons.length; k++) {
        buttons[k].click();
    }
    //As backup solution just hide notification.
    $(".gb_hd.gb_Ec.gb_Ta, .gb_hd.gb_Ec.gb_Ua, .gb_hd.gb_Ec.gb_F, .gb_Ec.gb_F").css("display", "none");
});
