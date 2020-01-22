(function () {
    function showMsg(message) {
        window.external.notify(message);
    }
    if (typeof window.catchEvents !== "function") {
        function catchEvents() {
            window.addEventListener("keydown", keydown, false);
        }
        function keydown(e) {

            var res = {
                Type: "KeyboardEvent",
                Value: {
                    Ctrl: e.ctrlKey,
                    Alt: e.altKey,
                    Shift: e.shiftKey,
                    Char: e.char,
                    Key: e.key,
                    KeyCode: e.keyCode,
                    Type: e.type
                }
            }
            showMsg(JSON.stringify(res));
        }
        window.catchEvents = catchEvents;
    }
    window.catchEvents();
})();
