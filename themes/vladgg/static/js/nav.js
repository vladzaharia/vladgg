var navBtnElem = document.getElementById("nav-button");
var expandElem = document.getElementById("nav-expand");
var contractElem = document.getElementById("nav-contract");
var containerElem = document.getElementById("nav-container");

var expanded = false;

function setupNav() {
    var navBreakpoint = window.matchMedia('only screen and (max-width: 800px)');

    if (navBreakpoint.matches) {
        navBtnElem.classList.remove("display-none");

        if (!expanded) {
            containerElem.classList.add("display-none");
        }
    } else {
        navBtnElem.classList.add("display-none");
        containerElem.classList.remove("display-none");
    }
}

setupNav();

window.addEventListener("resize", setupNav);

navBtnElem.addEventListener("click", function() {
    if (expanded) {
        contractElem.classList.add("opacity-0");
        containerElem.classList.add("opacity-0");

        setTimeout(function() {
            contractElem.classList.add("display-none");
            contractElem.classList.remove("opacity-0");
            containerElem.classList.add("display-none");
            containerElem.classList.remove("opacity-0");
            expandElem.classList.remove("display-none");
        }, 200);
    } else {
        expandElem.classList.add("opacity-0");

        setTimeout(function() {
            expandElem.classList.add("display-none");
            expandElem.classList.remove("opacity-0");
            contractElem.classList.remove("display-none");
            containerElem.classList.remove("display-none");
        }, 200);
    }

    // Flip value
    expanded = !expanded;
});
