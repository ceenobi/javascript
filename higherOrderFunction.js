//we have the map method, filter method, and reduce method
//we can map through and array
;[1, 2, 3, 4, 5, 6].map((number) => console.log(number))

//we are mapping through the array like a from of loop and returing the numbers back
//we can double the number using map method also
let resultDouble = [1, 2, 3, 4, 5, 6].map((number) => number * 2)
console.log('result', resultDouble)
//map method loops and returns an array

const tripleNumber = (numbers) => {
  return numbers.map((number) => number * 3)
}
console.log(tripleNumber([2, 3, 4]))

//filter - loops and returns an array with matching conditons
const filter = (numbers, greaterThan) => {
  let result = []
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number)
    }
  }
  return result
}
console.log(filter([1, 2, 3, 4, 5, 6], 3))

const nums = [1, 2, 3, 4, 5, 6, 7]
const numsFilter = nums.filter((num) => num > 3 || num < 2)
console.log('numsFilter', numsFilter)

//using logical OR denoted by || only needs to match one of both conditions in order to be true

const actors = [
  { name: 'The Rock', networth: 350000 },
  { name: 'Johnny Depp', networth: 300000 },
  { name: 'Will Smith', networth: 250000 },
  { name: 'Sandra Bullock', networth: 450000 },
]

const filterNetworth = actors.filter((actor) => actor.networth >= 300000)
console.log(filterNetworth)
const actorNames = actors.map((actor) => actor.name).join(', ')
console.log(actorNames)
//manipulating the dom
document.getElementById('actors').innerHTML = `<h1>${actorNames}</h1>`

//reduce
//generaly when we think of summing a number we use the reduce method
//reduce takes in a function as an argument
//reduce loops and gives you bac an accumulator

const sumArrayReduce = (numbers) => {
  const reduceResult = numbers.reduce((prev, curr) => prev + curr)
  return reduceResult
}

console.log(sumArrayReduce([1, 2, 3, 4, 5, 6]))

//excercise
function reduceMultiply(a, b) {
  return a * b
}
const multiply = [2, 3, 4, 5]
const multiReduce = multiply.reduce(reduceMultiply)
console.log('multiReduce', multiReduce)

const sumNetworth = actors.reduce((a,b)=> a + b.networth, 0)
console.log(sumNetworth)