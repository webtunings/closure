
/*
this function tries to explain the flexibility of arguments supplied
*/

function test(x,y) {
    // I don't do anything
    console.log(x);
    console.log(y);
    //print arguments object - Array like object
    console.log(arguments);
}

//no argument supplied
test();
// x - undefined
// y - undefined
// { }

//less arguments supplied
test(1);
// x - 1
// y - undefined
// { '0': 1}

//arguments = parameters = 2
test(1,2);
// x - 1
// y - 2
// {'0': 1, '1': 2 }

//more argument supplied than actual parameters
test(1,2,3);
// x - 1
// y - 2
// {'0': 1, '1': 2, '2': 3}


