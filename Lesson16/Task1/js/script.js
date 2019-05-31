var skill = {

    name:'html',
    level:5,
    fullInfo : function(){
        return this.name + "-" + this.level;
    }
}

console.log(skill.fullInfo());
