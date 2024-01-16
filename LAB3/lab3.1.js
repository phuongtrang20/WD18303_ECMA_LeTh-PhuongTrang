
const multiply = (num1, num2) =>  
    num1 * num2;
   
const toCelsius = (fahrenheit) => 
    (5 / 9) * (fahrenheit - 32);

const padZeros = (num, totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for(let i = 1; i <= numZeros; i++){
        numStr = "0" + numStr;
    }
    numStr;
};

const power = (base, exponent) => {
    let result = 1;
    for(let i = 0; i < exponent; i++){
        result *= base;
    }
    result;
}

const greent = (who) => {
    console.log('Hello' + who);
}
