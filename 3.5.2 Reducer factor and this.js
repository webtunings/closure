
//reducer object has one array a and method reduce
//reduce does the job of reducing using reduce method 0.5*(x+y)
//Below is the calculation using reduce method and array [100,200,300]
//x=100, y=200
//0.5*(100 + 200) = 150 -> this will become x in next iteration
//x=150, y=300
//0.5*(150 + 300) = 225 -> expected value -> but we get NaN
var reducer = {
    a: [100,200,300],
    factor: 0.5,
    reduce: function() {
        return this.a.reduce(function(x,y){
            return this.factor*(x+y);
        });
    }
};
console.log(reducer.reduce()); //NaN