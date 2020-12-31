(function () {
    try {

        //Get attachments block root element.
        //TODO: Think about better solution, 
        //becuase using of class name might be not good idea in long term.
        var parents = document.querySelectorAll('.aAH, .aBH, .aCH, aDH, .aEH, .aFH, .aGH, .aHH .aIH, .aJH, .aKH, .aLH, .aMH, .aNH, .aOH, .aPH, .aQH, .aRH, .aSH, .aTH, .aUH, .aVH, .aWH, .aXH, .aYH, .aZH');
        for (var p = 0; p < parents.length; p++) {

            var parent = parents[p];

            if (parent != null) {

                console.log(parent.childNodes.length)

                for (var i = 0; i < parent.childNodes.length; i++) {

                    var child = parent.childNodes[i];
                    if (child != null) {

                        var aTag = child.getElementsByTagName("a")[0];

                        if (aTag == null)
                            continue;

                        var exists = aTag.querySelector("img[title='PDF']") != null;

                        console.log("Is PDF: " + exists);

                        if (exists == false)
                            continue;

                        var buttons = child.querySelectorAll("div[role='button']");
                        if (buttons != null) {

                            buttonsContainer = buttons[buttons.length - 1].parentNode;

                            var exists = buttonsContainer.getElementsByClassName('easyBtn').length > 0;
                            if (exists == true)
                                continue;

                            var html = '<div id="EasyButtons" class="easyBtn"><link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.0/css/all.css"><style> .divBtn { background-color: rgba(98,98,98,1); text-align:center; border-radius: 3px; line-height: 23px; margin-right: 8px; min-width: 0; float: left; border: none; height: 24px; width: 30px; color: white; padding: 0 px; font-size: 14px; cursor: pointer; } .divBtn:hover { background-color: rgba(49, 49, 49, 1); } </style> <div tagName="Launch EasyPDF" class="divBtn" url="$URL$" data-tooltip="Open in new window" role="button"><i style="pointer-events: none; cursor: default;" class="fa fa-external-link-alt"></i></div></div>';
                            var div = createFromString(html.split('$URL$').join(aTag.href));

                            buttonsContainer.insertBefore(div, buttons[0]);
                            buttonsContainer.style = 'float: left; width: 200px;'

                            var buttons = buttonsContainer.querySelectorAll('.divBtn');

                            for (var j = 0; j < buttons.length; j++) {

                                var button = buttons[j];

                                if (button != null) {

                                    addListener('click', button, function (e) {

                                        var name = e.target.getAttribute('tagName');

                                        var url = e.target.getAttribute('url')
                                            .split('inline')
                                            .join('safe');

                                        var payload = {
                                            Name: name,
                                            Url: url,
                                            ActionType: 'Viewing'
                                        };

                                        var res = {
                                            Type: "ActionButton",
                                            Value: JSON.stringify(payload)
                                        };

                                        notifyApp(JSON.stringify(res));

                                        //setTimeout(() => {

                                        //    var container = e.target.parentNode.parentNode.parentNode;
                                        //    if (container == null)
                                        //        return;

                                        //    var downloadbtn = container.childNodes[1];
                                        //    if (downloadbtn != null) {
                                        //        simulateMouseClick(downloadbtn);
                                        //    }
                                        //}, 50);
                                    });
                                }
                            }
                        }
                    }
                }
            }
        }

        function simulateMouseClick(targetNode) {
            function triggerMouseEvent(targetNode, eventType) {
                var clickEvent = document.createEvent('MouseEvents');
                clickEvent.initEvent(eventType, true, true);
                targetNode.dispatchEvent(clickEvent);
            }
            ["mouseover", "mousedown", "mouseup", "click"].forEach(function (eventType) {
                triggerMouseEvent(targetNode, eventType);
            });
        }

        function createFromString(htmlString) {
            var div = document.createElement('div');
            div.innerHTML = htmlString.trim();
            return div;
        }

        function addListener(event, obj, fn) {
            if (obj.addEventListener) {
                obj.addEventListener(event, fn, false);
            } else {
                obj.attachEvent("on" + event, fn);
            }
        }

        function notifyApp(message) {
            console.log(message);
            window.external.notify(message);
        }

    }
    catch (e) {
        console.log(e);
        window.external.notify(e);
    }
})();
