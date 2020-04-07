(function () {
    function showMsg(message) {
        window.external.notify(message);
    }
    if (typeof window.catchEvents !== "function") {
        function catchEvents() {
            window.addEventListener("keydown", keydown, false);
        }
        function keydown(e) {
            if (e.altKey && e.ctrlKey && !e.shiftKey && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode > 96 && e.keyCode <= 105))
            {
                var payload = {
                    Ctrl: e.ctrlKey,
                    Alt: e.altKey,
                    Shift: e.shiftKey,
                    KeyCode: e.keyCode,
                    Key: e.keyCode
                }
                var res = {
                    Type: "KeyboardEvent",
                    Value: JSON.stringify(payload)
                }
                showMsg(JSON.stringify(res));
            }
        }
        window.catchEvents = catchEvents;
    }
    window.catchEvents();
})();