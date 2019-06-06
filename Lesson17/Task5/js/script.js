var Calculator = {
    number1: 2,
    number2: 3
};

function sum(firstNumber1,secondNumber2){
    alert( this[firstNumber1] + this[secondNumber2]);

}

function mal(firstNumber1,secondNumber2){

  alert(this[firstNumber1] * this[secondNumber2]);
}

sum.call(Calculator,'number1','number2');
mal.call(Calculator,'number1','number2');

