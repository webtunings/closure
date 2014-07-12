
function binaryNumbers() {
    var pattern = /\b[01]+\b/g;
    this.result = this.subject.match(pattern);
}

var object1 = {subject:"100 1234 1010 string"};
var object2 = {subject: "1234 1112 1010 string"}

binaryNumbers.call(object1);
binaryNumbers.call(object2)
/*
obj.method = binaryNumbers;
obj.method();
delete obj.method;
*/
console.log(object1.result);
console.log(object2.result);