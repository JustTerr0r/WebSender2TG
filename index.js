document.addEventListener('DOMContentLoaded', function () {
    var label = document.querySelector('#myLabel');
    var button = document.querySelector('#myButton');
    var input = document.querySelector('#message-input');
    function changeColor() {
        if (label) {
            label.style.color = getRandomColor();
        }
    }
    var getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log("ЗАШЁЛ В ЦВЕТ");
        return color;
    };
    var sendMessage = function () {
        console.log("ЗАШЁЛ В СЭНДМЭССЭЖ");
        if (input) {
            fetch('http://localhost:3000/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: input.value })
            })
                .then(function (response) {
                if (response.ok) {
                    return response.text();
                }
                else {
                    throw new Error('Something went wrong');
                }
            })
                .then(function (data) { return console.log(data); })
                .catch(function (error) { return console.error('Error:', error); });
        }
    };
    button === null || button === void 0 ? void 0 : button.addEventListener('click', changeColor);
    button === null || button === void 0 ? void 0 : button.addEventListener('click', sendMessage);
});
