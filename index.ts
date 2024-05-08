document.addEventListener('DOMContentLoaded', () => {
    const label: HTMLLabelElement | null = document.querySelector('#myLabel');
    const button: HTMLButtonElement | null = document.querySelector('#myButton');
    const input: HTMLInputElement | null = document.querySelector('#message-input');

    function changeColor(): void {
        if (label) {
            label.style.color = getRandomColor();
        }
    }

    const getRandomColor = (): string => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log("ЗАШЁЛ В ЦВЕТ")
        return color;
    };

    const sendMessage = (): void => {
        console.log("ЗАШЁЛ В СЭНДМЭССЭЖ")
        if (input) {
            fetch('http://localhost:3000/send-message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: input.value })
            })
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('Something went wrong');
                }
            })
            .then(data => console.log(data))
            .catch((error) => console.error('Error:', error));
        }
    };

    button?.addEventListener('click', changeColor);
    button?.addEventListener('click', sendMessage);
});