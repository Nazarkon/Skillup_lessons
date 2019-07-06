var arrayNew = new Array(5);

 for(var i=0; i< 5 ; i++){

    arrayNew[i] = +prompt("Введіть імя");
    if(arrayNew[i]===null){
        alert("Відміна");
       break;
    }
    if(arrayNew[i]===""){
        alert('Введіть число');
        arrayNew[i] = prompt('Введіть імя'); 
    }
 }
 alert(arrayNew);

var matrix = [

    [1,2,3],
    [4,5,6],
    [7,8,9]
];
var sum=0;
for(var i=0;i<matrix.length;i++){
    for(var j=0;j<matrix.length;j++)

    sum+=matrix[i][j];
}
alert(sum);
