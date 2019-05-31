//Write a simple function which takes value and return value
function init() {
    var name = prompt("enter name", "");
    function displayName() { 
        alert(name); 
    }
    displayName();
}
init();

//A simple code which counts numbers
var calculator = {

    number1: 2,
    number2: 3,

    sum: function () {
        return this.number1 + this.number2;
    },

    mul: function () {
        return this.number1 * this.number2;
    }

}
alert(calculator.sum());
alert(calculator.mul());

// A simple calculator with constructor
function Calculator(number1, number2) {
    this.number1 = number1;
    this.number2 = number2;

    this.sum = function () {
        return this.number1 + this.number2;
    };
    this.mul = function () {
        return this.number1 * this.number2;
    };
}

//A simple calculator with explicit function call
var calculator = new Calculator('2', '3');

console.log("Сума =" + calculator.sum());
console.log("Добуток =" + calculator.mul());


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

