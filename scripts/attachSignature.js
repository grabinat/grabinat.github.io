(function () {

    try {
        function attachSign() {
            var elements = document.getElementsByClassName('Am Al editable LW-avf');
            for (let i = 0; i < elements.length; i++) {
                //try remove existing sign
                //to avoid duplicates
                if (elements[i].getElementsByClassName('em_signature').length > 0)
                    continue;
                //create new one sign
                var div = document.createElement('div');
                div.className = 'em_signature';
                div.innerHTML = '<div>\n' +
                    '<div><br/></div>\n' +
                    '<div>\n' +
                    '<p><i>Sent with <a href=http://clkde.tradedoubler.com/click?p=259740&amp;a=2839228&amp;g=0&amp;url=https%3a%2f%2fwww.microsoft.com%2fstore%2fp%2fEasyMail+for+Gmail%2f9nblggh626nc%3fcid%3dsignature>EasyMail</a></i></p>\n' +
                    '</div>\n' +
                    '</div>';
                elements[i].appendChild(div);
            }
        }

        document.addEventListener('focusin', function () {
            setTimeout(attachSign, 1);
        });
    }
    catch (error) {
        var res = {
            Type: "__SIGNATURE",
            Error: "error",
            Message: error.toString()
        };
        showMsg(JSON.stringify(res));
    }

})();