/* create simple object and use prototype to use uppercase*/
var String = function (name){

    this.name = name;
 };

 String.prototype.Upper = function(){

    return this.name.charAt(0).toUpperCase() + this.name.charAt(4).toUpperCase();
 }

var me = new String ('Nazar');

 console.log(me.Upper());

/* Simple calculator using methods*/
var calculator = {
    add: function () {
        this.a = +prompt("Enter value", "");
        this.b = +prompt("Enter value", "");
    },
    sum: function () {
        return this.a + this.b;
    }
}

calculator.add();
alert(calculator.sum());

