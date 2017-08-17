(function () {
    try {
        function removeSign() {
            var elements = document.getElementsByClassName('Am Al editable LW-avf');
            for (let i = 0; i < elements.length; i++) {
                var divs = elements[i].getElementsByClassName('em_signature');
                while (divs.length > 0)
                    divs[0].remove();
            }
        }

        document.addEventListener('focusin', function () {
            setTimeout(removeSign, 1);
        });
    } catch (error) {
        window.external.notify('error');
    }
})();