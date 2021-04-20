var bwlElem = document.getElementById("bwl");
var bwlAltElem = document.getElementById("bwl-alt");

bwlElem.addEventListener("mouseenter", function() {
    bwlElem.style.opacity = 0;

    setTimeout(function() {
        bwlAltElem.style.display = null;
        bwlAltElem.style.opacity = 1;
        bwlElem.style.display = "none";
    }, 200);
});

bwlAltElem.addEventListener("mouseleave", function() {
    bwlAltElem.style.opacity = 0;

    setTimeout(function() {
        bwlElem.style.display = null;
        bwlElem.style.opacity = 1;
        bwlAltElem.style.display = "none";
    }, 200)
});