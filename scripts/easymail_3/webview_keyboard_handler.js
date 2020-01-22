(function () {
    function showMsg(message) {
        window.external.notify(message);
    }
    if (typeof window.catchEvents !== "function") {
        function catchEvents() {
            window.addEventListener("keydown", keydown, false);
        }
        function keydown(e) {

            var payload = {
                Ctrl: e.ctrlKey,
                Alt: e.altKey,
                Shift: e.shiftKey,
                Key: e.key.charCodeAt(0),
                VirtualKey: e.keyCode
            }

            var res = {
                Type: "KeyboardEvent",
                Value: JSON.stringify(payload)
            }
            showMsg(JSON.stringify(res));
        }
        window.catchEvents = catchEvents;
    }
    window.catchEvents();
})();
