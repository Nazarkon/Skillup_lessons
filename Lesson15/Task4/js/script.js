
var array = [1,9,22,7,6];

function AddNumber(){
array.splice(3,0,8);
return array;
}
alert(AddNumber());

var myArray = [];
function getRandomArray() {
    for (var i = 0; i < 9; i++) {
        myArray[i] = Math.round(Math.random() * 100);
        myArray.push(myArray[i]);
    }
    return myArray;
}
alert(getRandomArray());


