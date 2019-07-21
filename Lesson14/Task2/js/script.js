/*A simple array with function that connect into line and all words start from Upper 
letter*/ 
var arr = ["lorem","ipsum","is","simply","dummy"]; 
var connect;
function Showmembers (){
    for(var prop in arr){
        connect = arr[0].concat("",arr[1],arr[2],arr[3],arr[4]);
        return connect.toUpperCase() + arr.slice(1);
       }
}
console.log(Showmembers());