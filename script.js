let color = document.querySelector('#colorContainer');
let textElements = document.querySelectorAll('.textContent');

color.addEventListener('input', () => {
    let selectedColor = color.value;
    document.body.style.backgroundColor = selectedColor;
    
    let invertedColor = invertColor(selectedColor);
    textElements.forEach(text => {
        text.style.color = invertedColor;
    });
});

// Function to invert color
function invertColor(hex) {
    let r = (255 - parseInt(hex.substr(1, 2), 16)).toString(16).padStart(2, '0');
    let g = (255 - parseInt(hex.substr(3, 2), 16)).toString(16).padStart(2, '0');
    let b = (255 - parseInt(hex.substr(5, 2), 16)).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`;
}
