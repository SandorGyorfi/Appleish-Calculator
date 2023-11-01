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