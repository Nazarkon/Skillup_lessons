
page.addEventListener('scroll',function(){
    if(this.scrollTop > 200){
        
       document.getElementById("text").classList.add("text2")
      console.log("Good");
        
    }else{
      document.getElementById("text").classList.remove('text');
    }
  });