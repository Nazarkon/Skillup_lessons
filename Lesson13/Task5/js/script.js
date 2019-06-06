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