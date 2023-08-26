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

function symbol(opChoice){ // show operator sign instead of data-operator 

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

function rickRoll(){
    num1 = "Never gonna give you up"
    operator =""
    num2 = "Never gonna let you down"
}

//Buttons

numButton.forEach(button => {
    button.addEventListener('click', () => {
    if(num2.includes(".") && button.textContent === "." || num2[0]==="0" && button.textContent === "0")return
    else{
        append(button);
        updateDisplay();
    }
     
    })
})

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
    
    if (num1 != ""){
        if(num2 === "0" && operator === "divide" || num1 === "0" && operator === "divide"){
        rickRoll();
        updateDisplay();
        clear();
        }
        else{
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        num1 = operate(num1,num2,operator);
        operator = button.getAttribute('data-operator');
        num2 = "";
        updateDisplay();
        }}
    else{
    operator = button.getAttribute('data-operator');
    num1 = num2;
    num2 = '';
        updateDisplay();
    }
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
    if(num2 === "0" && operator === "divide" || num1 === "0" && operator === "divide"){
        rickRoll();
        updateDisplay();
        clear();
        }
        else{
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num2 = operate(num1,num2,operator);
    num1 = num2;
    num2 = "";
    updateDisplay();
}
})

backButton.addEventListener('click',() =>{
    num2 = num2.slice(0,-1);
    updateDisplay();
})