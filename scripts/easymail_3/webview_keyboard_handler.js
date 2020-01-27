(function () {
    function showMsg(message) {
        window.external.notify(message);
    }
    if (typeof window.catchEvents !== "function") {
        function catchEvents() {
            window.addEventListener("keydown", keydown, false);
        }
        function keydown(e) {
            if (e.altKey && e.ctrlKey && !e.shiftKey) {
                var keyCode = e.keyCode;
                var code = keyCode - 48 * Math.floor(keyCode / 48);
                var char = String.fromCharCode((96 <= keyCode) ? code : keyCode);

                var payload = {
                    Ctrl: e.ctrlKey,
                    Alt: e.altKey,
                    Shift: e.shiftKey,
                    KeyCode: code,
                    Key: char
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
