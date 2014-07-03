//Listing 1.5 Function declaration statement hoisting rule

//This function illustrates the hoisting of function statement
function outer() {
    //function inner is in scope here
    //it could be invoked at this place
    inner();

    console.log(typeof inner === "function");
    //true

    function inner() {
        console.log("I can be invoked anywhere inside outer function");
    }

    //function inner is in scope here
    // it could be invoked at this place
    inner();
    console.log(typeof inner === "function");
    //true
}

outer();