//Listing 1.14 this & nested function issue

var reducer = {
    a: [100,200,300],
    reduce: function() {
        return this.a.reduce(function(x,y){
            return 0.5*(x+y);
        });
    }
};
console.log(reducer.reduce()); //NaN

