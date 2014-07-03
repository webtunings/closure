// Listing 1.4 - Variable declarations are hoisted at the top of enclosing function
//This function tries to check the presence of variable "a" before and after its declaration
function scopeTest(){
    console.log(a); // undefined - this means variable a is hoisted at this point.No ReferenceError
    var a = 1;
    console.log(a); //1
}

scopeTest();