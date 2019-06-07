function limitation(event){

 var x = event.which || event.keyCode;




    switch (x) {

        case x < 48:
            console.log("Sorry the Unicode number smaller then we need");
        case x > 57:
            console.log("Sorry the Unicode number bigger then we need");
        case x < 96:
            console.log("Sorry the Unicode number smaller then we need");
        case x > 105:
            console.log("Sorry the Unicode number bigger then we need");
        default:
            document.getElementById("demo").innerHTML = "The Unicode value is:" + x;
    }
//  if(event.which < 48){
//     console.log("Sorry the Unicode number smaller then we need");
//  }else if(event.which > 57){
//     console.log("Sorry the Unicode number bigger then we need");
//  }else if(event.which < 96){
//     console.log("Sorry the Unicode number smaller then we need");
//  }else if(event.which > 105){
//     console.log("Sorry the Unicode number bigger then we need");
//  }else{
//    document.getElementById("demo").innerHTML = "The Unicode value is:" + x;
 
// }
}