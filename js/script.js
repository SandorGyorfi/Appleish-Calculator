let currentInput = "";
let previousInput = "";
let currentOperation = null;

document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('#display');
    const buttons = document.querySelectorAll('button'); // Select all buttons

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
            case 'function':
                handleScientificFunction(value);
                break;
            case 'constant':
                handleConstant(value);
                break;
        }
        updateDisplay();
    }

    function handleScientificFunction(func) {
        const currentNum = parseFloat(currentInput);
        let result;

        switch (func) {
            case 'sin': result = Math.sin(currentNum); break;
            case 'cos': result = Math.cos(currentNum); break;
            case 'tan': result = Math.tan(currentNum); break;
            case 'asin': result = Math.asin(currentNum); break;
            case 'acos': result = Math.acos(currentNum); break;
            case 'atan': result = Math.atan(currentNum); break;
            case 'log': result = Math.log10(currentNum); break;
            case 'ln': result = Math.log(currentNum); break;
            case 'exp': result = Math.exp(currentNum); break;
            case 'sqrt': result = Math.sqrt(currentNum); break;
            case 'square': result = Math.pow(currentNum, 2); break;
            case 'cube': result = Math.pow(currentNum, 3); break;
            case 'inv': result = 1 / currentNum; break;
            case 'abs': result = Math.abs(currentNum); break;
            case 'fact': result = factorial(currentNum); break;
            case 'percent': result = currentNum / 100; break;
            case 'pow':
                currentOperation = 'pow';
                previousInput = currentInput;
                currentInput = '';
                return; 
        }

        currentInput = result.toString();
        previousInput = "";
        currentOperation = null;
    }

    function handleConstant(constant) {
        switch (constant) {
            case 'pi': currentInput = Math.PI.toString(); break;
            case 'e': currentInput = Math.E.toString(); break;
        }
    }

    function computeResult() {
        const num1 = parseFloat(previousInput);
        const num2 = parseFloat(currentInput);
        let result;

        switch (currentOperation) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
            case 'pow': result = Math.pow(num1, num2); break;
        }

        currentInput = result.toString();
        previousInput = "";
        currentOperation = null;
    }

    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }

    function updateDisplay() {
        display.textContent = currentInput || '0';
    }
});
