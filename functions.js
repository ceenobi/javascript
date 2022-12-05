//functions
//javascript functions is a block of code designed to perform a particular task and it's executed when something calls it

//this function has no arguments
function sayMyName() {
  console.log('Charles')
  console.log('Precious')
  console.log('Austin')
}
//note a function wont run/execute unless called. we run it here
sayMyName()
//but what if we want to make it more dynamic
function sayMyDynamicName(name) {
  console.log(name)
}
//the sayMyDynamicName function takes an argument of name and so when calling the function we pass that argument and it'll run the function based off the argument given. This name variable can only live inside the function and cannot be accessed outside of it.
sayMyDynamicName('Fathia')

function greeting(name) {
  greet = 'hi ' + name + ' nice to meet you'
  console.log(greet)
}
greeting('Peter')

//however from the greeting fucntion, we used concatenate to create spaces between the words but there is a much more efficient way to to that using template literals
function greetingB(name) {
  const greet = `hi ${name}, nice to meet you`
  console.log(greet)
}
greetingB('Wisdom')

//handling multiple arguments and return statements.
//return statements stops the execution of a fucntion and returns a value
//the return statement makes functions reuseable wherever needed
function sum(a, b) {
  return a + b
}
numTotal = sum(2, 4)
console.log(numTotal)

//example - calculator tip
function calcFoodTotal(food, tip) {
  const tipPercent = tip / 100
  const tipAmount = food * tipPercent
  const total = sum(food, tipAmount)
  return total
}
console.log('calcFoodTotal', calcFoodTotal(600, 10))

//so far we have used the old javascript method of writing fucntions, however we have a newer way which was introduced in ES6 called arrow functions

const sumArrowFunction = (a, b) => {
  return a + b
} // explicit arrow function

//the difference between the arrow and function type is that we don't neccesarily don't have to use the return statement

const sumArrowFunctionB = (a, b) => a + b //here we keep things simple and our logic stays on the same line. Also known as implicit arrow function
console.log('sumArrowFunctionB', sumArrowFunctionB(40, 70))

//excerise
//   TODO: Write a function that sums two numbers
//   TODO: Write a function that subtracts two numbers
//   TODO: Write a function that divides two numbers.
//   TODO: Write a function that multiplies two numbers.
//   *NOTE* be sure to handle dividing by zero 😉
//   ES5 Syntax: function Add(){}
//   ES6 Syntax (Arrow function): const add = () => {}


function add(){
  //Add function here
}

function sub(){
  //Subtract function here
}

function div(){
  //Divide function here
}

function mul(){
  //Multiply function here
}

console.log('hello from the SUM exercise')
/* 
  TODO: create a function that console logs the result of any of the above operations.
*/ 