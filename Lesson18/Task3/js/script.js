function sampleFunction() {
    var elem = document.getElementById("scales");
  
    if (elem.hasAttribute("checked")) {
       
        elem.removeAttribute("checked")
    }
    else{
        elem.setAttribute("checkbox", "checked");
    }
  }

  console.log(sampleFunction());



  
if(elem.classList.contains('text'))
{
    elem.classList.remove('text')
}
else
{
    elem.classList.add('text')
}