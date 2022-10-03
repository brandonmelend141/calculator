// let keyPress = "";

let calcObj = {
    operationValues: [],
    operator:"",
    value:"",
    result:""
}

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
            return (values[1] === 0)? "ERR": divide(values[0],values[1]);
    }

}

function displayValue(updateValue){
    const displayNum = document.querySelector(".display");
    displayNum.textContent = updateValue;

}

function appendValueClick(e){
    calcObj.value += e.target.textContent;
    displayValue(calcObj.value);
}

function appendValuePress(key){
    calcObj.value += key;
    displayValue(calcObj.value);
}

function operateClick(e){
    if(calcObj.value !== '' && calcObj.result !== ''){
        calcObj.operationValues.pop();
        calcObj.result = "";
    }

    if(calcObj.operationValues.length==2){
        calcObj.value = operate(calcObj.operator,calcObj.operationValues);
        calcObj.operationValues = [];
        calcObj.operationValues.push(parseFloat(calcObj.value));
        displayValue(calcObj.value);
    }
    
    if(calcObj.value !== "")calcObj.operationValues.push(parseFloat(calcObj.value));
    calcObj.operator = e.target.textContent;
    calcObj.value = '';

}

function operatePress(key){
   
    if(calcObj.value !== '' && calcObj.result !== ''){
        calcObj.operationValues.pop();
        calcObj.result = "";
    }

    if(calcObj.operationValues.length==2){
        calcObj.value = operate(calcObj.operator,calcObj.operationValues);
        calcObj.operationValues = [];
        calcObj.operationValues.push(parseFloat(calcObj.value));
        displayValue(calcObj.value);
    }

    if(calcObj.value !== "")calcObj.operationValues.push(parseFloat(calcObj.value));
    calcObj.operator = key;
    calcObj.value = '';

}

function evaluate(){
    if(calcObj.value === ""){
        calcObj.operationValues = []
        return  displayValue("ERR");
    }
    calcObj.operationValues.push(parseInt(calcObj.value));

    calcObj.value = operate(calcObj.operator,calcObj.operationValues);
    calcObj.result = calcObj.value;

    // console.log(calcObj.result,calcObj.operationValues);
    
    
    displayValue(calcObj.value);
    calcObj.operationValues = [];
    calcObj.operationValues.push(parseFloat(calcObj.result));
    calcObj.value = '';
}
function clearDisplay(){
    calcObj.operationValues = [];
    calcObj.value = '';
    displayValue(0);
}

function deleteValue(){
    calcObj.value = calcObj.value.slice(0,-1);
    displayValue(calcObj.value);
}

function negateValue(){
    if(calcObj.result !== '' && calcObj.value === ""){
        calcObj.result = -1 * parseFloat(calcObj.result);

        calcObj.operationValues.pop();
        calcObj.operationValues.push(parseFloat(calcObj.result));
        
        displayValue(calcObj.result);
    }else{
        calcObj.value = -1 * parseFloat(calcObj.value);
        displayValue(calcObj.value);
    }
    
    
}

function decimalValue(e){
    if(calcObj.value.indexOf(".") == -1){
        calcObj.value += e.target.textContent;
        displayValue(calcObj.value);
    }
}

function decimalValuePress(key){
    if(calcObj.value.indexOf(".") == -1){
        calcObj.value += key;
        displayValue(calcObj.value);
    }
}


const numKeys = document.querySelectorAll('.num-keys');
numKeys.forEach(key => key.addEventListener('click',appendValueClick));

const opKeys = document.querySelectorAll('.operator-keys');
opKeys.forEach(op => op.addEventListener('click',operateClick));

const equalKey = document.querySelector('.equals-keys');
equalKey.addEventListener('click',evaluate);

const clearKey = document.querySelector(".clear-keys");
clearKey.addEventListener('click',clearDisplay);

const deleteKey = document.querySelector(".del-keys");
deleteKey.addEventListener('click',deleteValue);

const negateKey = document.querySelector('.negate-keys');
negateKey.addEventListener('click',negateValue);

const decimalKey = document.querySelector('.decimal-keys');
decimalKey.addEventListener('click',decimalValue);

window.addEventListener('keydown',(e)=>{
    console.log(e.key);
    if(e.key > 0 || e.key <= 9) appendValuePress(e.key);
    if(e.key === "/" || e.key === "+" || e.key === "*" || e.key === "-") operatePress(e.key);
    if(e.key === "=") evaluate();
    if(e.key === "Enter") evaluate();
    if(e.key === "Escape") clearDisplay();
    if(e.key === "Backspace") deleteValue();
    if(e.key === ".") decimalValuePress(e.key);
    if(e.key === "_") negateValue();
})






// function calculatorLogic(e){
    
//     // if(calcObj.value !== '' && calcObj.result !==""){
//     //     console.log("Result Check: ", calcObj.result);
//     //     calcObj.operationValues.pop();
//     //     calcObj.result = "";
//     // }
//     console.log(document.querySelector('[data-key]'));
//     if(e.target.id !== ""){
       
//         if(e.target.id === "equals"){  
//             if(calcObj.value === "")return  displayValue("ERR");
//             calcObj.operationValues.push(parseInt(calcObj.value));

//             calcObj.value = operate(calcObj.operator,calcObj.operationValues);
//             calcObj.result = calcObj.value;

//             // console.log(calcObj.result,calcObj.operationValues);
//             // calcObj.operationValues.push(parseFloat(calcObj.result));
            
//             displayValue(calcObj.value);
//             calcObj.operationValues = [];
//             // calcObj.value = '';

//         }else if(e.target.id === "clear"){
//             calcObj.operationValues = [];
//             calcObj.value = '';
//             displayValue(0);
//         }else if(e.target.id === "del"){
//             calcObj.value = calcObj.value.slice(0,-1);
//             displayValue(calcObj.value);
//         }else if(e.target.id === "negate"){
            
//         }else if(e.target.id === "decimal"){
            
//         }else{
//             calcObj.operationValues.push(parseFloat(calcObj.value));
         
//             if(calcObj.operationValues.length==2){
//                 calcObj.value = operate(calcObj.operator,calcObj.operationValues);
//                 calcObj.operationValues = [];
//                 calcObj.operationValues.push(parseFloat(calcObj.value));
//                 displayValue(calcObj.value);
//             }

//             calcObj.operator = e.target.textContent;
//             calcObj.value = '';
//             console.log(calcObj.operator);
//         }
//     }else{
//         calcObj.value += e.target.textContent;
//         displayValue(calcObj.value);

//     }
  
// }
