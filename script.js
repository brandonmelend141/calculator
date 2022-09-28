let keyPress = "";
function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1/num2;
}

function operate(op,values){

}

function display(e){
    const displayNum = document.querySelector(".display");
    displayNum.textContent = e.target.textContent;
console.log(e.target.textContent)
}

const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('click',display));