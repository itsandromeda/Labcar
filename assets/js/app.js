/*global document*/
var menu = document.getElementById("menu"),
    options = document.getElementById("menu-options");

menu.addEventListener('click', function () {
    "use strict";
    options.classList.toggle("hide");
});