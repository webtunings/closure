//Listing 1.9 - Call method

//This is a function that returns the circumference of a circle
var circumference = function(){
    return 2*Math.PI*this.radius;
};
//define circle objects
var circle1 = {x:100,y:200,radius:50};
var circle2 = {x:200,y:300,radius:25};

//invoke the function
console.log(circumference.call(circle1)); //314.159
console.log(circumference.call(circle2)); //157.079


//--------------------------------------------------------------------------------
//Listing 1.10 - call & apply with arguments
var makeNonEnumerable = function(){
    for(var i=0; i < arguments.length; i++){
        Object.defineProperty(this,arguments[i],{enumerable:false});
    }
};

var testObject1 = {x:1,y:2,z:3};

makeNonEnumerable.call(testObject1,"x","y");
console.log(Object.getOwnPropertyDescriptor(testObject1,"x").enumerable); //false
console.log(Object.getOwnPropertyDescriptor(testObject1,"y").enumerable); //false
console.log(Object.getOwnPropertyDescriptor(testObject1,"z").enumerable); //true

var testObject2 = {p:1,q:2,r:3};
makeNonEnumerable.apply(testObject2,["p","q"]);
console.log(Object.getOwnPropertyDescriptor(testObject2,"p").enumerable); //false
console.log(Object.getOwnPropertyDescriptor(testObject2,"q").enumerable); //false
console.log(Object.getOwnPropertyDescriptor(testObject2,"r").enumerable); //true

//-------------------------------------------------------------------------------
