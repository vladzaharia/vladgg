var contentElems = document.getElementsByClassName("grid-iama-content");
var i = 0;

setInterval(function() {
    var visibleElems = [];

    for (var j = 0; j < 7; j++) {
        var idx = (i + j) % contentElems.length;
        var elem = contentElems[idx];

        elem.classList.remove("hidden");
        elem.id = "content-" + j;

        visibleElems.push(idx);
    }

    for (var j = 0; j < contentElems.length; j++) {
        if (visibleElems.indexOf(j) === -1) {
            var elem = contentElems[j];
            elem.classList.add("hidden");
            elem.id = null;
        }
    }

    i++;

    if (i >= contentElems.length) {
        i = 0;
    }
}, 2500);