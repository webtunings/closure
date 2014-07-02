//Listing 1.1 - Assign function to a variable

//Returns the circumference of a circle
var circumference = function(circle){
    return 2*Math.PI*circle.radius;
};
//define circle object
var circle = {x:100,y:100,radius:50};

//invoke the function
console.log(circumference(circle)); //314.159


//--------------------------------------------------------
//Listing 1.2 - Passing function as arguments to other functions

/*
This is a JSON replacer function, which filters out property
"radius" from object serialization process
*/

var filter = function(key,value){
//don't serialize property "radius"
    if(key === "radius"){
        return undefined;
    }
    else{
        return value;
    }
};

//define circle object
var circle = {x:100,y:200,radius:50};

//get string version of circle object
var info = JSON.stringify(circle,filter);

//print the string equivalent of object
console.log(info);  // '{"x":100,"y":200}'


//--------------------------------------------------------
//Listing 1.3 - Returning function as the value from other function

//define outer function that returns inner function
function outer(x){
//this secret is a closure - Wait for chapter2
    var secret = 5;
    return function(){
        console.log(secret + x);
    }
}

//get the inner function
var inner = outer(10);

//invoke inner function
inner(); //15



