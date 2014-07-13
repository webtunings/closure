
//this function adds all the arguments supplied
function add(){
    console.log(arguments.length); //3
    var sum = 0;
    //iterate over all arguments
    //trick - save arguments.length in some variable
    for(var i=0; i < arguments.length; i++){
        sum +=arguments[i];
    }
    return sum;
}

console.log(add(1,2,3)); //6