//Listing 1.9 Constructor invocation

//This is a constructor function
//Accepts 2 arguments and set the newly created object's properties
//this or invocation context is the newly created cylinder object
function Cylinder(radius, height) {
    this.radius = radius; //object property
    this.height = height; //object property
    //object method
    this.volume = function() {
        return Math.PI * Math.pow(this.radius,2) * this.height;
    };
}

//create object using constructor function
//this inside constructor = cylinder1
var cylinder1 = new Cylinder(10,20);
console.log(cylinder1.volume());

//create another object
//this inside constructor = cylinder2
var cylinder2 = new Cylinder(20,10);
console.log(cylinder2.volume());
