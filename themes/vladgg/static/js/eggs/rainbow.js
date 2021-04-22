var COLORS = ['#d13438', '#da3b01', '#ffaa44', '#498205', '#0078d4', '#8764b8'];
var NUM_LETTERS = 5;

var rainbowContainerElems = document.getElementsByClassName("rainbow");
var rainbowElems = document.getElementsByClassName("rainbow-ltr");
var timers = [];
var rnb_i = 0;

for (var rnb_k = 0; rnb_k < rainbowContainerElems.length; rnb_k++) {
    var rainbowContainerElem = rainbowContainerElems[rnb_k];

    rainbowContainerElem.addEventListener("mouseenter", function() {
        // Reset variables
        rnb_i = 0;
    
         timers[rnb_k] = setInterval(function() {
            for (var rnb_j = 0; rnb_j < rainbowElems.length; rnb_j++) {
                rainbowElems[rnb_j].style.color = COLORS[(rnb_i+ rnb_j) % COLORS.length];
            }
            
            rnb_i++;
    
            // Reset i if we reach the end
            if (rnb_i === COLORS.length) {
                rnb_i = 0;
            }
        }, 150);
    });
    
    rainbowContainerElem.addEventListener("mouseleave", function() {
        if (timers[rnb_k]) {
            clearInterval(timers[rnb_k]);
            timers[rnb_k] = null;
        }
    
        // Loop to add rainbow colors
        for (var rnb_j = 0; rnb_j < rainbowElems.length; rnb_j++) {
            rainbowElems[rnb_j].style.color = null;
        }
    });
}