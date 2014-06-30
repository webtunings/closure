//Assign function to a variable

//circle is an object
var circumference = function(circle){
    return 2*Math.PI*circle.radius;
};

var circle = {x:100,y:200,radius:50};

console.log(circumference(circle)); //314.159


//--------------------------------------------------------
//Passing function as arguments to other functions
//JSON replacer function - don't stringify if property name is radius
var filter = function(key,value){
    if(key === "radius"){
        return undefined;
    }
    else{
        return value;
    }
};

var circle = {x:100,y:200,radius:50};
var info = JSON.stringify(circle,filter);
console.log(info);  // '{"x":100,"y":200}'
console.log(typeof info); 'string'


//--------------------------------------------------------
//Returning them as the values from other function




