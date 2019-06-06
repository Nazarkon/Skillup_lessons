/* Looking for longest word*/ 
var stringText = 'Lorem, ipsum ,dolor, sit ,amet, consectetur, adipiscing ,elit';
var myNewArray = stringText.split(',');
myNewArray.forEach(function (item, i, myNewArray) {
    if (myNewArray[i].length > 5) {
        alert(myNewArray[i]);
    }

});

/*Create a square arr*/ 
var mySimpleArray = [8, 6, 12, 10];

var getSquare = mySimpleArray.map(function (square) {

    return square * 2;
})
alert(getSquare);




