

document.addEventListener('DOMContentLoaded', function () {
    // Get the header element
    const header = document.querySelector('header');

    // Get the button element
    const colorChangeButton = document.createElement('button');
    colorChangeButton.textContent = 'Change Header Color';
    colorChangeButton.addEventListener('click', changeHeaderColor);

    // Append the button to the header
    header.appendChild(colorChangeButton);

    function changeHeaderColor() {
        // Generate a random color
        const randomColor = getRandomColor();

        // Change the header color
        header.style.backgroundColor = randomColor;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
