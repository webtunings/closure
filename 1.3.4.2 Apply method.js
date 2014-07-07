//Listing 1.12 - call & apply with arguments

//this function makes all arguments non enumerable
var makeNonEnumerable = function() {
    //iterate over all arguments and change the enumerable attribute false
    for(var i=0; i < arguments.length; i++){
        Object.defineProperty(this,arguments[i],{enumerable:false});
    }
};

var testObject1 = {x:1,y:2,z:3};

//make x and y property non enumerable
//We pass individual argument instead of array
makeNonEnumerable.call(testObject1,"x","y");
//check the enumerable attribute
console.log(Object.getOwnPropertyDescriptor(testObject1,"x").enumerable); //false
console.log(Object.getOwnPropertyDescriptor(testObject1,"y").enumerable); //false
console.log(Object.getOwnPropertyDescriptor(testObject1,"z").enumerable); //true

var testObject2 = {p:1,q:2,r:3};
//We pass array instead of individual argument
makeNonEnumerable.apply(testObject2,["p","q"]);
console.log(Object.getOwnPropertyDescriptor(testObject2,"p").enumerable); //false
console.log(Object.getOwnPropertyDescriptor(testObject2,"q").enumerable); //false
console.log(Object.getOwnPropertyDescriptor(testObject2,"r").enumerable); //true

var property;
for(property in testObject1){
    console.log(property);
}
//z
