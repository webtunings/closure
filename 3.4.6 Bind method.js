
// This function filters all positive values from an array
// this keyword is not associated with any object
function positiveValues() {
    // predicate function returns true for value >=0
    return this.a.filter(function(value){ return value >=0;});
}

// create object with one array property
var obj = {a:[-20,-10,0,10,20]};

//bind positiveValues function to object obj
//bind returns a new function
//invoking returned function, invokes it as a method of object obj
var b = positiveValues.bind(obj);

//invoke b as a method of object obj
//b is same as positiveValues but now this keyword refers to object obj
console.log(b()); // [ 0, 10, 20 ]
