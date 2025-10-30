const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function() {
    return array.reduce((total, current)=> total * current)
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(num) {
	let total = 1; //start at 1 
    for (let i = 1; i <= num; i++){
        total = total * i;
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};