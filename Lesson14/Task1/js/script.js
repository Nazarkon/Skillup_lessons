/*Function that generate random number and checks the number for parity*/
function RandomNumber (){
    var c =  Math.floor(Math.random()*10)+1;

   if (c%2==0){
       return 'Parne';
   }
   else {
       return 'neparne'
   }
}
alert(RandomNumber());






