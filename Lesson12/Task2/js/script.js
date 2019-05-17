/*Verifying numbers*/ 
var a = +prompt('Enter a', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 'a' );
    break;

  case 2:
    alert( 'b' );
    break;
  case 3:
    alert( 'c' );
    break;
    default:
    alert ( 'z' );
    break;
}

/*Output square number*/ 
for(var i=1; i<10;i++){
  alert(Math.pow(i,2));
}

/*Output square number*/ 
var i = 1;
while(i<10){
  alert(Math.pow(i,2));
  i++;
}

/*Output square number*/ 
var i=1;
do{
  i++;
  alert(Math.pow(i,2));
}
while(i<10);

/*Function that compares two numbers and show bigger*/
function showBiggerNumber (a,b){
  if(a==b){
    return 'rivno';
  }
  else if(a>b){
    return a;
  }
  else{
    return b;
  }
}
alert(showBiggerNumber(4,4));