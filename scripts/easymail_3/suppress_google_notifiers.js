$(document).ready(function () {
    //IFrame popups.
    try {
        $("iframe[src*='widget/callout?']").children(':button').click();
        $("iframe[src*='widget/callout?']").hide();
    } catch (e) {
        console.log(e);
    }


    //Non-IFrame popups.
    try {
        var em_elements = document.querySelectorAll("a[href^='https://www.google.com/url?q=https://www.google.com/chrome/browser']");
        for (var em_element of em_elements) {
            em_element.removeAttribute("href");
            em_element.click();
        }
    } catch (e) {
        console.log(e);
    }
});
