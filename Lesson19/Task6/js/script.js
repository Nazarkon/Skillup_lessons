window.addEventListener('resize',function(){
    if(this.innerHeight<768){

       document.getElementById("tst").classList.add('text');
    }else{
        console.log("Bigger then 768")
    }
})