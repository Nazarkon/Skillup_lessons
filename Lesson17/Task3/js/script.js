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