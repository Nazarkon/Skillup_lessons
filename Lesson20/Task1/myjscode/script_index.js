$("header").each(function(index){
    console.log(index + ":" + $(this).html());
});
$("#nav").each(function(index){
    console.log(index + ":" + $(this).html());
});


console.log($("#header").children());
console.log($("#nav").children().html());
console.log($("#main").children());
console.log($("#intro").children());
console.log($(".spotlight").children().nextUntil("#first"));
console.log($("body.is-preload").children());
console.log($("#wrapper").children(),$("#header").find());
