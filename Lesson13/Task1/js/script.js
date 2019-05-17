/*Function that generate random number and checks the number for parity*/
// function RandomNumber (){
//     var c =  Math.floor(Math.random()*10)+1;

//    if (c%2==0){
//        return 'Parne';
//    }
//    else {
//        return 'neparne'
//    }
// }
// alert(RandomNumber());

// var arr = ["lorem","ipsum","is","simply","dummy"]; 
// var connect;
// function Showmembers (){
//     for(var prop in arr){
//         connect = arr[0].concat("",arr[1],arr[2],arr[3],arr[4]);
//         return connect.toUpperCase() + arr.slice(1);
//        }
// }
// console.log(Showmembers());

var line1 = prompt("Веведіть строку 1");
var line2 = prompt("Введіть строку 2");
var result = line1,line2;

switch (result){
    case line1!=String&&line2!=String:
        alert("Не число");
        break;
    case line1 > line2:
        alert(line1);
        break;
    case line2>line1:
        alert(line2);
        break;
    case line1 === line2:
        alert(Rivno);
    break;

}

// if(line1!=String&&line2!=String){
//     alert("Не число");
// }
// else if (line1 === line2) {
//     alert("Rivno");
// }
// else if (line1 > line2) {
//     alert(typeof line1);
// }
// else {
//     alert(typeof line2)
// }

