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


