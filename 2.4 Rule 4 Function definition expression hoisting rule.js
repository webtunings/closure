
//This function illustrates the hoisting of function definition expression
function outer() {
    //function inner is not in scope here
    //it can not be invoked at this place
    inner(); //typeError

    console.log(typeof inner === "function");
    //false

    var inner = function () {
        console.log("I am not hoisted at the top");
    };

    //function inner is in scope here
    // it could be invoked at this place
    inner();
    console.log(typeof inner === "function");
    //true
}

outer();