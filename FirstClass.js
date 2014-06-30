//Assign function to a variable

//circle is an object
var circumference = function(circle){
    return 2*Math.PI*circle.radius;
}

var circle = {x:100,y:200,radius:50};

console.log(circumference(circle)); //314.159