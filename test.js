 function addToDisplay(input) {
    const display = document.getElementById('display'); // حط السطر ده هنا
    display.value += input;
}

function clearDisplay() {
    const display = document.getElementById('display'); // وهنا كمان
    display.value = "";
}

function calculate() {
    const display = document.getElementById('display'); // وهنا كمان
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}
