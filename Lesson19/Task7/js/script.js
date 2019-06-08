function limitation(event) {

    var x  = String.fromCharCode(event.keyCode);
    if (x < 48) {
        console.log("Sorry the Unicode number smaller then we need");
    } else if (x > 57) {
        console.log("Sorry the Unicode number bigger then we need");
    } else if (x < 96) {
        console.log("Sorry the Unicode number smaller then we need");
    } else if (x > 105) {
        console.log("Sorry the Unicode number bigger then we need");
    } else {
        document.getElementById("demo").innerHTML = "The Unicode value is:" + x;

    }
}