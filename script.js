let keyPress = "";
let value = "";
let operationValues = []
let operator =""

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
    switch(op){
        case "+":
            return add(values[0],values[1]);
        case "-":
            return sub(values[0],values[1]);
        case "*":
            return multiply(values[0],values[1]);
        case "/":
            return divide(values[0],values[1]);
    }

}

function display(e){
    const displayNum = document.querySelector(".display");
    

    console.log(e.target.id )

    if(e.target.id !== ""){
        if(e.target.id !== "del" && e.target.id !== "clear" && e.target.id !== "equals"){
            operationValues.push(parseFloat(value));
            operator = e.target.textContent;
            console.log(operationValues.length)
            if(operationValues.length==2){
                value = operate(operator,operationValues);
                operationValues = []
                operationValues.push(parseFloat(value));
                displayNum.textContent = value;
                console.log(operationValues)
            }

            value = '';
            
        }else if(e.target.id === "equals"){  
            operationValues.push(parseInt(value));
            value = operate(operator,operationValues);
            displayNum.textContent = value;
            operationValues = [];
            
        }
    }else{
        value += e.target.textContent;
        displayNum.textContent = value;

    }
  

    // console.log('value is now: ',value )

// console.log(value)
}

const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('click',display));