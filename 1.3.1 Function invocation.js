//Listing 1.7 Function invocation

//This function returns the word boundaries of a string
//\w to \W or \W to \b transition is a word boundary
function wordBoundaries(subject) {
    //regex for word boundary position
    var pattern = /\b/g;

    //invoke match method defined on the string
    return subject.match(pattern).length;
}

var book = "JavaScript Closure in Depth";
console.log(wordBoundaries(book)); //8
