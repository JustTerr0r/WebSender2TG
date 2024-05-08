"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var label = document.querySelector('#myLabel');
    var button = document.querySelector('#myButton');
    var changeColor = function () {
        if (label) {
            label.style.color = getRandomColor();
        }
    };
    var getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    button === null || button === void 0 ? void 0 : button.addEventListener('click', changeColor);
});
