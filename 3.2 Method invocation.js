
//define cylinder object
var cylinder = {
    radius: 10,
    height: 20
};

/*
define function on cylinder object
volume is the property of cylinder object
this inside function is the cylinder object
this.radius means radius property of the cylinder object
this = invocation context = cylinder object
*/
cylinder.volume = function() {
    return Math.PI * Math.pow(this.radius,2) * this.height;
};

//invoke the method on the cylinder object
console.log(cylinder.volume());

