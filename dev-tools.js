(function(){
function reloadStylesheets() {
    var queryString = '?reload=' + new Date().getTime();
    var elements = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < elements.length; i++) {
        elements[i].href = elements[i].href.replace(/\?.*|$/, queryString);
    }
}
window.reloadStylesheets = reloadStylesheets;
})();
