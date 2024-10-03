let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function appendValue(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}