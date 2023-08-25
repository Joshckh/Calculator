//Connecting Buttons
const numA = document.querySelector(".numA")
const numB = document.querySelector(".numB")
const opSign = document.querySelector(".opSign")
const numButton = document.querySelectorAll('[data-number]')
const operatorButton = document.querySelectorAll('[data-operator]')
const operateButton = document.querySelector('[data-operate]')
const acButton = document.querySelector("[data-ac]")
const backButton = document.querySelector('[data-back]')
const percentButton = document.querySelector('[data-percent]')

let num1 = "";
let num2 = "";
let operator = "";

//Functions Needed
function clear()
{
    num1 = ""
    num2 = ""
    operator = undefined
}

function backSpace(array) {
    array.splice(0,-1);
    }
    

function append(number){

        num2 += number.textContent
    }

    function operate(numA, numB, operation) {
        switch (operation) {
            case "plus":
                return plus(numA, numB);
            case "minus":
                return minus(numA, numB);
            case "multiply":
                return multiply(numA, numB);
            case "divide":
                return divide(numA, numB);
        }
    }

function updateDisplay(){
    numB.textContent = num2;
    numA.textContent = num1;
    opSign.textContent = symbol(operator);
    }

function symbol(opChoice){

   let choice = "";
    switch(opChoice){
        case "plus":
            choice = "+";
            break;
        case "minus":
            choice = "-";
            break;
        case "divide":
            choice = "÷";
            break;
        case "multiply":
            choice = "x";
            break;
    }
    return choice;
    

}

const plus = (a,b) => a + b;
const minus = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;


//Buttons

numButton.forEach(button => {
    button.addEventListener('click', () => {
       append(button);
        updateDisplay();
    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
       operator = button.getAttribute('data-operator');
       num1 = num2;
       num2 = '';
        updateDisplay();
    })
})


acButton.addEventListener('click',() =>{
    clear();
    updateDisplay();
})

percentButton.addEventListener('click',() =>{
    num2 /= 100;
    updateDisplay();
})

operateButton.addEventListener('click', () =>{
    numb1 = parseFloat(num1);
    numb2 = parseFloat(num2);
    num2 = operate(numb1,numb2,operator);
    num1 = num2;
    num2 = "";
    updateDisplay();
})

backButton.addEventListener('click',() =>{
    num2.splice(0,-1)
    updateDisplay();
})