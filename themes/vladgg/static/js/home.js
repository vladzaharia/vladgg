var contentElems = document.getElementsByClassName("grid-iama-content");
var home_i = 0;

setInterval(function() {
    var visibleElems = [];

    for (var home_j = 0; home_j < 7; home_j++) {
        var idx = (home_i + home_j) % contentElems.length;
        var elem = contentElems[idx];

        elem.classList.remove("hidden");
        elem.id = "content-" + home_j;

        visibleElems.push(idx);
    }

    for (var home_j = 0; home_j < contentElems.length; home_j++) {
        if (visibleElems.indexOf(home_j) === -1) {
            var elem = contentElems[home_j];
            elem.classList.add("hidden");
            elem.id = null;
        }
    }

    home_i++;

    if (home_i >= contentElems.length) {
        home_i = 0;
    }
}, 2500);