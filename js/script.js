var h1 = document.getElementById("GAA"),
    word = "Ghaith Anas Alnajjar",
    i = 0;

function write() {
    h1.textContent += word[i];
    i++;
    if (i == 20) {
        clearInterval(si);
    }
}
var si = setInterval(write, 250);

var RM = document.getElementById("RM"),
    modal = document.getElementById("modal"),
    left = document.getElementById("left"),
    caption = document.getElementById("caption"),
    close = document.getElementById("close");


RM.onclick = function () {
    "use strict";
    modal.style.display = "block";
    left.style.display = "none";
}
close.onclick = function () {
    "use strict";
    modal.style.display = "none";
    left.style.display = "block";
}

var up = document.getElementById("up");

window.onscroll = function () {
    "use strict";
    if (scrollY == 0) {
        up.style.display = "none";
    } else {
        up.style.display = "block";
    }
}

up.onclick = function () {
    "use strict";
    window.scrollTo(0, 0)
}
