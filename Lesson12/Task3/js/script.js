var a  = 5 , b = 3 ;

if(a>b&&a===b){
    console.log(true);
}else{
    console.log(false);
}

if(true && 0 && "a"<"Z"){
    console.log(true);
}
else{
    console.log(false);
}

if(a>b || true || "2" == 2 || false==""){

    console.log(true);
}
else{
    console.log(false);
}

if(a<b&&0==false){
    console.log(true);
}else{
    console.log(false);
}

if(!(2==2) || true && ""){
    console.log(true);
}else{
    console.log(false);
}