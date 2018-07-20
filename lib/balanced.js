// Create a function that will return true or false if a collection of brakcets are balanced or not.
// This method must handle a combination of parentheses, curly braces, and square brackets

var balanced = function(string) {
  var array = []
  brackets = string.replace(/[^\'\(\)\[\]\{\}]/g, '').split("")
  brackets.forEach((bracket) => {
    if (array[array.length - 1] == opposite[bracket]) {
      array.pop()
    } else {
      array.push(bracket)
    }
  })
  return array.length == 0
};

const opposite = {
  "'": "'",
  ")": "(",
  "]": "[",
  "}": "{"
}


// balanced('()'); // true
// balanced('(');  // false
// balanced('(())');  // true
// balanced(')(');  // false
// balanced('[](){}'); // true
// balanced('[({})]');   // true
// balanced('[(]{)}'); // false
// balanced('][)(}{'); // false
// balanced('var greeting = { sayHello: hello() }'); // true
// balanced('var sayGoodbye = function() { goodbye();'); // false


// BONUS: Can you test 50% or more of the use cases?
module.exports = { balanced }
