
var table = document.querySelector('table');

table.addEventListener('click',function(changecolor){

   var block = changecolor.target;

   if(block.tagName=="TD"){
      
    block.style.background="red";
   }else{

    alert("Coming together is a beginning, staying together is progress, and working together is success. ")
   }
})
