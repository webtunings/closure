//Listing 1.14 this & nested function issue

//Program 1
var a = [100,200,300];
var result = a.reduce(function(x,y){return 0.5*(x+y);});
console.log(result); //225
/*
 0.5(100+200) = 150
 0.5(150+300) ==225
 */

//Program 2
var reducer = {
    a: [100,200,300],
    factor: 0.5,
    reduce: function() {
        var self = this;
        return this.a.reduce(function(x,y){
            return self.factor*(x+y);
        });
    }
};
console.log(reducer.reduce()); //NaN

