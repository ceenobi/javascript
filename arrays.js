//arrays allows one to store multiple values inside them
const groceries = ['banana', 'apple', 'pineapple', 'grape']
console.log('groceries', groceries)
//so how do we get the apple only? we do that by counting from 0. in code, counting starts from 0 rather than from 1. in otherwords, we call it indexinig
console.log('apple only', groceries[1])

//array methods
//push array method allows you to add a new item to an array and returns the new length of the array
groceries.push('pear')
console.log('new groceries', groceries) 
//slice array method returns the portion of the array that you want in a new array
console.log(groceries.slice(0,2)) //starts from 0 up till 2 [0,1] not inclusive of 2 itself but 2 in index
//what if we want the starting index to begin from pineapple?
console.log(groceries.slice(2,4))
//indexOf array method
console.log(groceries.indexOf('grape'))
//length array method returns the number of elements in a given array
console.log(groceries.length) //in length the starting index begins with 1 rather than 0