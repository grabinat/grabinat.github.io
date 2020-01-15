$(document).ready(function () {
    $("iframe[src*='widget/callout?']").children(':button').click();
    $("iframe[src*='widget/callout?']").hide();
});
