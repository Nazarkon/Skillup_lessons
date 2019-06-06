function addInput(){
    var input = document.createElement("input");
    input.type = "text";
    input.className = "custom-file";
    button1.insertBefore(input , button1.children[1]);
}