var COLORS = ['#d13438', '#da3b01', '#ffaa44', '#498205', '#0078d4', '#8764b8'];
var NUM_LETTERS = 5;

var rainbowContainerElems = document.getElementsByClassName("rainbow");
var rainbowElems = document.getElementsByClassName("rainbow-ltr");
var timers = [];
var i = 0;

for (var k = 0; k < rainbowContainerElems.length; k++) {
    var rainbowContainerElem = rainbowContainerElems[k];

    rainbowContainerElem.addEventListener("mouseenter", function() {
        // Reset variables
        i = 0;
    
         timers[k] = setInterval(function() {
            for (var j = 0; j < rainbowElems.length; j++) {
                rainbowElems[j].style.color = COLORS[(i+ j) % COLORS.length];
            }
            
            i++;
    
            // Reset i if we reach the end
            if (i === COLORS.length) {
                i = 0;
            }
        }, 150);
    });
    
    rainbowContainerElem.addEventListener("mouseleave", function() {
        if (timers[k]) {
            clearInterval(timers[k]);
            timers[k] = null;
        }
    
        // Loop to add rainbow colors
        for (var j = 0; j < rainbowElems.length; j++) {
            rainbowElems[j].style.color = null;
        }
    });
}