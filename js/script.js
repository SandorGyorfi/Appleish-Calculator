let currentInput = "";
let previousInput = "";
let currentOperation = null;

document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('#buttons button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const type = button.dataset.type;
            const value = button.dataset.value || button.textContent;
            handleButtonClick(type, value);
        });
    });

    function handleButtonClick(type, value) {
        switch (type) {
            case 'number':
                currentInput += value;
                break;
            case 'operation':
                previousInput = currentInput;
                currentInput = "";
                currentOperation = value;
                break;
            case 'action':
                if (value === 'clear') {
                    currentInput = "";
                    previousInput = "";
                    currentOperation = null;
                } else if (value === 'compute') {
                    computeResult();
                }
                break;
        }
        updateDisplay();
    }

    function updateDisplay() {
        display.textContent = currentInput || '0';
    }