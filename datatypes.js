//data types
//data types includes anything
//numbers - 1,2, 3, 5, 5.4
//strings - 'hello, how are you', 'hello, how are you'
//arrays - []
//objects - {}
//boolean - true / false

//math operators
//multiply - *
//divide - /
//exponent - **
//Modulo or Remainder - % eg 5%2 = 1
//Add - +
//substract - -

//math methods
//floor - Math.floor() rounds a number down to the nearest integer and returns the result
//ceil - Math.ceil() rounds a number up to the nearest integer and returns the result
const floorMathsEg = Math.floor(110.25)
console.log('floorMathsEg', floorMathsEg)
const floorCeilEg = Math.floor(110.25)
console.log('floorCeilEg', floorCeilEg)
//random - Math.random()returns a random number between 0 (inclusive) and 1 (exclusive)
const mathRandom = Math.random()
console.log('mathRandom', mathRandom)
//you can generate a random between 0 and whatever range you want, he we use 3
const mathRandom3 = Math.random() * 3
console.log('mathRandom3', mathRandom3)
//how do round down the number from mathRandom?
const mathRandom3A = Math.floor(Math.random() * 3)
console.log('mathRandom3A', mathRandom3A)

//varaibles
//we have var, const, let variables types
//var greeting = 'hello'
//let greeting = 'hello'
//const greeting = 'hello'
//note: the use of var variable is deprecated and we only use const or let variables
//use const if you know the variable value is going to be constant - you wont change it
//use let if you might have need to chnage the value

let user = 'Tobi'
user = 'Vic'
console.log(user)


//conditionals are used in statement to compare variables, values, and/or data types. they always return a boolean value - true or false
let x = 5
// == (double equal to) checks for equality
x == 8
x == 5
x == '5'
//run checks against
// === (triple equal to) checks for strict equality and data type
x === 5 //true
x === '5' //false cos the datatype is a mismatch
// >, < - greater than / less than
8 > x
x < 8
// >=, <= - greater than  or equal to / less than or equal to
35 >= x //true
x <= 8 //true
// != not  equal to
8 != x // true
// !==, !==, !==, !==, !==, ! not equal to
x !== '35' // true - same value, different datatype
x !== 35 //false - same value, same type

//excercise - make a baby weather app - here we introduce the concept of conditional statement using if/else statement
let weather = 'rainy'
if (weather == 'rainy') {
  console.log('Grab your umbrella')
} else {
  console.log('Wear your sunglasses')
}
//to demonstrate user interaction we can use the javascript prompt function here again to get the rain input