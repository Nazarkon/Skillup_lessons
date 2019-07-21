
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




