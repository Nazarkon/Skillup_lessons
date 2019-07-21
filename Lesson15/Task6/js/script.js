/*Fill array with random numbers*/ 
var myArray = [];
function getRandomArray() {
    for (var i = 0; i < 9; i++) {
        myArray[i] = Math.round(Math.random() * 100);
        myArray.push(myArray[i]);
    }
    return myArray;
}
alert(getRandomArray());


/*Looking for a number in arr*/
var newArray = [1, 4, 8, 6, 3, 2, 5, 4, 7];

console.log(newArray.indexOf(+prompt("Введіть число","")));


var newArray = [1, 4, 8, 6, 3, 2, 5, 4, 7];

function testForRightNumber() {

    var number = +prompt("Введіть число для пошуку", "");
    for (var i = 0; i < newArray.length; i++) {
        if (newArray[i] === number) {
            return true;
        }
        else {
            return false;
        }
    }

}
alert(testForRightNumber());



