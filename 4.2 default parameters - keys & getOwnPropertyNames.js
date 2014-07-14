
/*
this function returns object properties based on the flag onlyEnumerable
getProperties(obj) -> return enumerable own properties
getProperties(obj,false) -> return enumerable as well as non enumerable properties
getProperties(obj,true) -> return enumerable own properties
*/

function getProperties(obj, onlyEnumerable){
    //if onlyEnumerable is not passed, set it to true
    if(onlyEnumerable === undefined) { onlyEnumerable = true;}

    if(onlyEnumerable){
        return Object.keys(obj);
    }
    else{
        // enumerable + non enumerable
        return Object.getOwnPropertyNames(obj);
    }
}

//define object with 2 properties
//by default newly created properties are enumerable
var obj = {x:1, y:2};

//define one non enumerable property "z"
Object.defineProperty(obj,"z",{enumerable: false,value:3});

console.log(getProperties(obj)); // [ 'x', 'y' ]
console.log(getProperties(obj,false)); // [ 'x', 'y', 'z' ]
console.log(getProperties(obj,true)); // [ 'x', 'y' ]