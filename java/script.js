function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    if (display.value !== '') {
        display.value += operator;
    }
}

function appendDot() {
    const display = document.getElementById('display');
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}
