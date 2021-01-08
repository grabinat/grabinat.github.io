(function () {
    try {

        document.body.addEventListener('click', function () {
            var res = {
                Type: "DomChanged",
                Value: true
            };
            notifyApp(JSON.stringify(res));

        }, true);

        function notifyApp(message) {
            console.log(message);
            window.external.notify(message);
        }

    } catch (e) {
        console.log(e);
        window.external.notify(e);
    }
})();
