function person(){
    this.eat=function(){
        console.log("res");
    };
    this.say=function(){
        console.log("saying");
        
    }
}
module.exports=person;