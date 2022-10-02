let keyPress = "";

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
function calculatorLogic(e){
    
    // if(calcObj.value !== '' && calcObj.result !==""){
    //     console.log("Result Check: ", calcObj.result);
    //     calcObj.operationValues.pop();
    //     calcObj.result = "";
    // }

    if(e.target.id !== ""){

        if(e.target.id === "equals"){  
            calcObj.operationValues.push(parseInt(calcObj.value));

            calcObj.value = operate(calcObj.operator,calcObj.operationValues);
            calcObj.result = calcObj.value;

            // console.log(calcObj.result,calcObj.operationValues);
            // calcObj.operationValues.push(parseFloat(calcObj.result));
            
            displayValue(calcObj.value);
            calcObj.operationValues = [];
            // calcObj.value = '';

        }else if(e.target.id === "clear"){
            calcObj.operationValues = [];
            calcObj.value = '';
            displayValue(0);
        }else if(e.target.id === "del"){
            calcObj.value = calcObj.value.slice(0,-1);
            displayValue(calcObj.value);
        }else if(e.target.id === "negate"){
            calcObj.value = -1 * parseFloat(calcObj.value);
            displayValue(calcObj.value);
        }else if(e.target.id === "decimal"){
            if(calcObj.value.indexOf(".") == -1){
                calcObj.value += e.target.textContent;
                displayValue(calcObj.value);
            }
        }else{
            calcObj.operationValues.push(parseFloat(calcObj.value));
         
            if(calcObj.operationValues.length==2){
                calcObj.value = operate(calcObj.operator,calcObj.operationValues);
                calcObj.operationValues = [];
                calcObj.operationValues.push(parseFloat(calcObj.value));
                displayValue(calcObj.value);
            }

            calcObj.operator = e.target.textContent;
            calcObj.value = '';
            console.log(calcObj.operator);
        }
    }else{
        calcObj.value += e.target.textContent;
        displayValue(calcObj.value);

    }
  
}

const keys = document.querySelectorAll('.keys');
keys.forEach(key => key.addEventListener('click',calculatorLogic));