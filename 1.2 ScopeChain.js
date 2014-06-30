//Listing 1.4 - Scope Test1

var g = 1000;

function scopeTest1(){
    console.log(a); //undefined
    console.log(b); //undefined
    console.log(c); //undefined
    console.log(g); //1000
    var a = 100;
    console.log(a); // 100
    console.log(b); //undefined
    console.log(c); //undefined
    console.log(g); //1000
    if(a === 100){
        console.log(a); //100
        console.log(b); //undefined
        console.log(c); //undefined
        console.log(g); //1000
        var b = 200;
        console.log(a); //100
        console.log(b); //200
        console.log(c); //undefined
        console.log(g); //1000
    }
    var c = 300;
    console.log(a); //100
    console.log(b); //200
    console.log(c); //300
    console.log(g); //1000
}

scopeTest1();
//console.log(a); ReferenceError
//console.log(b); ReferenceError
//console.log(c); ReferenceError
console.log(g); //1000

//---------------------------------------------------------------------------------
//Listing 1.5 - Scope Test2

function scopeTest2(){
    console.log(a); //undefined
    console.log(b); //undefined
    console.log(c); //undefined
    console.log(g); //undefined
    var a = 100;
    console.log(a); // 100
    console.log(b); //undefined
    console.log(c); //undefined
    console.log(g); //undefined
    if(a === 100){
        console.log(a); //100
        console.log(b); //undefined
        console.log(c); //undefined
        console.log(g); //undefined
        var b = 200;
        console.log(a); //100
        console.log(b); //200
        console.log(c); //undefined
        console.log(g); //undefined
    }
    var g = 1;
    var c = 300;
    console.log(a); //100
    console.log(b); //200
    console.log(c); //300
    console.log(g); //1000
}

scopeTest2();
//console.log(a); ReferenceError
//console.log(b); ReferenceError
//console.log(c); ReferenceError
console.log(g); //1000


//--------------------------------------------------------------------------------
