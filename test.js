 const display = document.getElementById('display');

 function addToDisplay(input) {
 
    display.value += input;
}

 function clearDisplay() {
    display.value = "";
}

   display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
       display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
