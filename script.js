let display = document.querySelector('.display');
let buttons = document.querySelectorAll('button');
let currentValue = '';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value >= '0' && value <= '9' || value === '.') {
            if (waitingForSecondOperand) {
                display.value = value;
                waitingForSecondOperand = false;
            } else {
                display.value = display.value === '0' ? value : display.value + value;
            }
            currentValue = display.value;
        } else if (value === 'clear') {
            display.value = '0';
            currentValue = '';
            firstOperand = null;
            operator = null;
            waitingForSecondOperand = false;
        } else if (value === 'backspace') {
            display.value = display.value.slice(0, -1) || '0';
            currentValue = display.value;
        } else if (value === '=') {
            if (operator && !waitingForSecondOperand) {
                const secondOperand = parseFloat(currentValue);
                const result = calculate(firstOperand, operator, secondOperand);
                display.value = result;
                firstOperand = result;
                operator = null;
                waitingForSecondOperand = true;
            }
        } else {
            const inputValue = parseFloat(currentValue);
            
            if (firstOperand === null && !isNaN(inputValue)) {
                firstOperand = inputValue;
            } else if (operator && !waitingForSecondOperand) {
                const result = calculate(firstOperand, operator, inputValue);
                display.value = result;
                firstOperand = result;
            }

            waitingForSecondOperand = true;
            operator = value;
        }
    });
});

function calculate(first, operator, second) {
    switch (operator) {
        case '+':
            return first + second;
        case '-':
            return first - second;
        case '*':
            return first * second;
        case '/':
            return first / second;
        case '%':
            return first % second;
        default:
            return second;
    }
} 