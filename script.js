const colorBox = document.getElementById("color-box");
const basicColorRadio = document.getElementById("basic-color");
const gradientColorRadio = document.getElementById("gradient-color");
const generateBtn = document.getElementById("generate-btn");
const customColorInput = document.getElementById("custom-color");
const colorCodeInput = document.getElementById("color-code");
const copyBtn = document.getElementById("copy-btn");

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateBasicColor() {
    return customColorInput.value;
}

function generateGradientColor() {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    return `linear-gradient(45deg, ${color1}, ${color2})`;
}

generateBtn.addEventListener("click", () => {
    let backgroundColor;

    if (basicColorRadio.checked) {
        backgroundColor = generateBasicColor();
    } else {
        backgroundColor = generateGradientColor();
    }

    colorBox.style.background = backgroundColor;
    colorCodeInput.value = backgroundColor;
});

copyBtn.addEventListener("click", () => {
    colorCodeInput.select();
    document.execCommand("copy");
});
