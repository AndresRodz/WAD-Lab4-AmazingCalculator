console.log("JS is working");

//Global variables
let operands = [];
let operators = [];
let log = "";
let operations = 0;
let result = 0;

//Calculator references
inputField = document.getElementById("inputNumber");
validationField = document.getElementById("validation");
addBtn = document.getElementById("addButton");
substractBtn = document.getElementById("substractButton");
multiplyBtn = document.getElementById("multiplicationButton");
divideBtn = document.getElementById("divisionButton");
resetBtn = document.getElementById("resetButton");
equalBtn = document.getElementById("equalButton");
resultField = document.getElementById("resultValue");
logField = document.getElementById("logInformation");

addBtn.addEventListener("click", (event) => {
    console.log("Enter addition");
    if(inputField.value == "" || isNaN(inputField.value)) {
        validationField.style.display = 'inline';
        inputField.value = "";
    } else {
        validationField.style.display = 'none';
        operands.push(Number(inputField.value));
        operators.push('+');
        operations++;
        log += inputField.value + " + ";
        inputField.value = "";
    }
});

substractBtn.addEventListener("click", (event) => {
    console.log("Enter substraction");
    if(inputField.value == "" || isNaN(inputField.value)) {
        validationField.style.display = 'inline';
        inputField.value = "";
    } else {
        validationField.style.display = 'none';
        operands.push(Number(inputField.value));
        operators.push('-');
        operations++;
        log += inputField.value + " - ";
        inputField.value = "";
    }
});

multiplyBtn.addEventListener("click", (event) => {
    console.log("Enter multiplication");
    if(inputField.value == "" || isNaN(inputField.value)) {
        validationField.style.display = 'inline';
        inputField.value = "";
    } else {
        validationField.style.display = 'none';
        operands.push(Number(inputField.value));
        operators.push('*');
        operations++;
        log += inputField.value + " * ";
        inputField.value = "";
    }
});

divideBtn.addEventListener("click", (event) => {
    console.log("Enter division");
    if(inputField.value == "" || isNaN(inputField.value)) {
        validationField.style.display = 'inline';
        inputField.value = "";
    } else {
        validationField.style.display = 'none';
        operands.push(Number(inputField.value));
        operators.push('/');
        operations++;
        log += inputField.value + " / ";
        inputField.value = "";
    }
});

resetBtn.addEventListener("click", (event) => {
    console.log("Enter reset");
    validationField.style.display = 'none';
    inputField.value = "";
    resultField.value = "";
    operands = [];
    operators = [];
    operations = 0;
});

equalBtn.addEventListener("click", (event) => {
    console.log("Enter equal");
    validationField.style.display = 'none';
    operands.push(Number(inputField.value));
    operators.push('=');
    operations++;

    result = operands[0];
    for(let i = 0; i < operations; i++) {
        if(operators[i] == '+')
            result += operands[i+1];
        else if(operators[i] == '-')
            result -= operands[i+1];
        else if(operators[i] == '*')
            result *= operands[i+1];
        else if(operators[i] == '/')
            result /= operands[i+1];
        else if(operators[i] == '=') {
            resultField.value = result;
            log += inputField.value + " = " + result + "\n";
            logField.value = log;
            operands = [];
            operators = [];
            operations = 0;
            inputField.value = "";
        }
    }
});