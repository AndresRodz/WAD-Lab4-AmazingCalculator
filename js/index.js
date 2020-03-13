console.log("JS is working");

//Global variables
let operands = [];
let operators = [];
let log = "";
let operations = 0;

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
        inputField.value = "";
        log += inputField.value + " + ";
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
        inputField.value = "";
        log += inputField.value + " - ";
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
        inputField.value = "";
        log += inputField.value + " * ";
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
        inputField.value = "";
        log += inputField.value + " / ";
    }
});

resetBtn.addEventListener("click", (event) => {
    console.log("Enter reset");
    validationField.style.display = 'none';
    inputField.value = "";
    resultField = "";
    log = "";
});

equalBtn.addEventListener("click", (event) => {
    console.log("Enter equal");
    validationField.style.display = 'none';
    inputField.value = "";
    
    log += inputField.value + " = ";
    logField.value = log;
    log = "";
});