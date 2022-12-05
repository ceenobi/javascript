//for loop method is javascript
const fruits = ['avocado', 'lettuce', 'pine', 'orange']
//to print out banana or any other fruit here in the array we would need to do
console.log(fruits[2])
//the above method would not be an efficient method to print out all fruits if we had a long list of items in the array. in order to achieve efficiengly, we introduce the forloop method which will loop over the items and run the same function on each item in the array

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i])
}
//i = 0, here above in the forloop method, we take the index and give it a starting of 0 and then it will run the function based on the items but will give each item it's own index.
// i < fruits.length; is saying run the function based on the number of items in our fruit array which is 4. i is less than 4 so the forloop will run up until 4 and then stop

//a more cleaner way of writing the forloop function is shown here-

for (const fruit of fruits) {
  console.log('new forloop', fruit)
}

const numbers = [1, 2, 3, 4, 5, 6]
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
for (const number of numbers) {
  console.log('new fornumbers', number * 2)
}

//to store the number * 2 result in an array opf it's own, we use a previous array method we discused earlier and it's called the push method.
//first we create a new varaible and initialise it with an empty array
let result = []
for (const number of numbers) {
  result.push(number * 2)
}
console.log('result', result)

//practice
//lets create a function that triples our number

const triple = (tripleNumbers) => {
  let tripleResult = []
  for (const tri of tripleNumbers) {
    tripleResult.push(tri * 3)
  }
  return tripleResult
}
console.log('triple numbers', triple([1, 2, 4, 6, 8]))

//create a letter counter function
const letterCounter = (phrase) => {
  let result = 0
  for (const letter in phrase) {
    console.log('lettercount', letter)
    result = Number(letter) + 1
  }
  return { result: result }
}
const phrase = 'Hey can you turn off the projector?'
console.log(letterCounter(phrase))

//another way to get the number is to get the number is to use the .length property which works on all strings
const letterCounterB = (sentence) => {
  for (const alphabets in sentence) {
    result = Number(alphabets) + 1
  }
  return { result: sentence.length }
}
const sentence = 'we are getting the sentence length using the length property'
console.log(letterCounterB(sentence))

//sum array
const sumNumbers = (numbers) => {
  let result = 0
  for (const number of numbers) {
    console.log(number)
    result = result + number
    // result += number
  }
  return { result }
}

let num = [1, 2, 3, 4, 5, 6]
console.log(sumNumbers(num))

const maxNum = (numbers) => {
  let result = numbers[0]
  for (const number of numbers) {
    if (number > result) {
      result = number
    }
  }
  return { result }
}
console.log(maxNum([1, 3, 4, 6, 7]))

const letterFrequency = (phrase) => {
  let frequency = {}
  for (const letter of phrase) {
    if (letter in frequency) {
      frequency[letter] += 1
      // frequency[letter] ++
    } else {
      frequency[letter] = 1
    }
  }
  return frequency
}
console.log(letterFrequency('There once was a boy'))

//incremental operators ++, --, +=

const wordFrequency = (phrase) => {
  // let frequency = {}
  const words = phrase.split(' ')
  return letterFrequency(words)
  // for (const word of words) {
  //   if (word in frequency) {
  //     frequency[word] += 1 
  //   } else {
  //     frequency[word] = 1
  //   }
  // }

  // return frequency
}
console.log(wordFrequency('Real Madrid is the best club club in in the world'))
