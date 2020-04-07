setTimeout(() => {
    //to be replaced with real template value.
    var data = '<TEMPLATE>';
    data = data.split('\EASYMAIL_NEWLINE').join('\n');
    var target = document.activeElement;
    if (target.setRangeText) {
        target.setRangeText(data);
    }
    else {
        target.focus();
        document.execCommand('insertText', false, data);
    }
}, 500);