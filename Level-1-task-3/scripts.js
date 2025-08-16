let display = document.getElementById("display");
let buttons = document.querySelectorAll(".num");
let displayValue = "";

buttons.forEach(button => {
    button.addEventListener("click", function() {
        handleInput(this.getAttribute("data-value"));
    });
});

function handleInput(value) {
    if (value === 'c') {
        displayValue = "";
        display.value = "";
    } 
    else if (value === "=") {
        try {
            display.value = eval(displayValue);
            displayValue = display.value;
        } catch {
            display.value = "Re-entered the number";
            displayValue = "";
        }
    } 
    else {
        displayValue += value;
        display.value = displayValue;
    }
}

//below one use for handleing user input by keyboard.....

// document.addEventListener("keydown", function(event) {
//     let key = event.key;

//     if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
//         handleInput(key);
//     }
//     else if (key === "Enter") {
//         handleInput("=");
//     }
//     else if (key === "Backspace") {
//         displayValue = displayValue.slice(0, -1);
//         display.value = displayValue;
//     }
//     else if (key === "Escape") {
//         handleInput("c");
//     }
// });