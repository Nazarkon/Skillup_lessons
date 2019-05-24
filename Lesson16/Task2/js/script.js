
var names = 'Lorem, ipsum ,dolor, sit ,amet, consectetur, adipiscing ,elit';

var arr = names.split(',');

function FindBiggerString(){
    for(var i=0;i<arr.length;i++){

        if(arr[i].length>5){
            alert(arr[i]);
        }else{
            alert(false);
        }
    } 
}
alert(FindBiggerString());


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

  
var stringText = 'Lorem, ipsum ,dolor, sit ,amet, consectetur, adipiscing ,elit';
var myNewArray = stringText.split(',');
myNewArray.forEach(function (item, i, myNewArray) {
    if (myNewArray[i].length > 5) {
        alert(myNewArray[i]);
    }

});


var mySimpleArray = [8, 6, 12, 10];

var getSquare = mySimpleArray.map(function (square) {

    return square * 2;
})
alert(getSquare);

