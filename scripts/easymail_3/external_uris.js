(function () {
    function showMsg(message) {
        window.external.notify(message);
    }
    if (typeof window.catchLinks !== "function") {
        function catchLinks() {
            $(document).on("mousedown", "a", clickLink);
        }
        window.catchLinks = catchLinks;
        function clickLink(event) {
            var res = {
                Type: "Uri",
                Value: event.currentTarget.href
            }
            showMsg(JSON.stringify(res));
        }
    }
    window.catchLinks();
})();
