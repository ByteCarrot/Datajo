function replaceAll(txt, replace, withThis) {
    return txt.replace(new RegExp(replace, 'g'), withThis);
}

function addCode(to, from) {
    var html = $(from).html();
    if ($.browser.msie !== true) {
        html = replaceAll(html, '"', "'");
        html = replaceAll(html, '&quot;', '"');
    }
    $(to).text(html);
}