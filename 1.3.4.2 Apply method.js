//Listing 1.12 - call & apply with arguments
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
