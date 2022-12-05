let todo1 = 'Get groceries'
let todo2 = 'Wash car'
let todo3 = 'Make dinner'

console.log(typeof todo1)

//creating elements in javascript
//in order to add this element to our page we use which uses the body as the parent and adds another child to with the appendChild

// let element = document.createElement('div')
// element.innerText = todo1
// document.body.appendChild(element)
// element = document.createElement('div')
// element.innerText = todo2
// document.body.appendChild(element)
// element = document.createElement('div')
// element.innerText = todo3
// document.body.appendChild(element)

//we can put our codes in a function making them reusuable

// const addTodo = () => {
//   let element = document.createElement('div')
//   element.innerText = todo1
//   document.body.appendChild(element)
// }

// addTodo()

//in order to make our addTodo function dynamic we can add a parameter

// const addTodo = (todoTitle) => {
//   let element = document.createElement('div')
//   element.innerText = todoTitle
//   document.body.appendChild(element)
// }

// addTodo(todo1)
// addTodo(todo2)
// addTodo(todo3)

//note-function => defining a function
//running a function => calling or invoking a function
//when a function has a parameter => takes a parameter
//then we pass a value to the function through the brackets => argument

//we can further optimise our wok by storing our values in an array
//array represents a list of values
//why array? it's easier to modify or add new values to an array than always trying to run a function to modify a value
let todos
//MODEL SECTION
const getTodos = JSON.parse(localStorage.getItem('todo'))
if (Array.isArray(getTodos)) {
  todos = getTodos
} else {
  todos = [
    { title: 'Get groceries', dueDate: '2022-12-1', id: '1' },
    { title: 'Wash car', dueDate: '2022-12-2', id: '2' },
    { title: 'Make dinner', dueDate: '2022-12-3', id: '3' },
  ]
}

let todoA
console.log(todos)

//to add tan item to an array we use the push method
//to remove an item in an array we use the pop method
//to check out methods of a fucntions we can access them with the dot
console.log('hello'.toUpperCase())

//to enable the user add new items to array, we can use the loop function
//the todo runs a function using all values given.it will take the values of each todo array and put them in the parameter and run it

//delete an item from  out todo list, we need a way to identify each button to their respective todo item, we an do that by attaching an id
const deleteTodo = (event) => {
  console.log('deleted')
  console.log(event)
  const deleteButton = event.target
  const idToDelete = deleteButton.id

  //to find and remove values from an array , we need to use another array method called filter. Here we wil use the return statement. a return whatever we tell it to return. codes after the return sttement does not run. So our filter function will take each item in our todo and pass as a parameter and keep or remove it based on matching conditons. filter methods dont modify arays but creates a copy of the array, so to update our og array we have to overwrite the array variable and reassign the todos list with the result  of the filter
  todos = todos.filter(function (todo) {
    //if id of todos matches the idToDelete, retrun false else return true
    if (todo.id === idToDelete) {
      return false
    } else {
      return true
    }
  })
  saveTodo()
  render()
}

//saving our data uses the browsers storage called local storage which provides a setItem passed into with a key and data and then use this key to retrieve our data. localstorage can only save string so we need to convert our object to string
const saveTodo = () => {
  localStorage.setItem('todo', JSON.stringify(todos))
}

//retrieveing our data from local storage, we use an if statement to check if local storage exist and if so, we use it otherwise use the default todo array

const render = () => {
  document.getElementById('todo-list').innerHTML = ''

  todos.forEach(function (todo) {
    const element = document.createElement('div')
    element.innerText = todo.title + ' ' + todo.dueDate

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.style = 'margin-left: 12px;'
    deleteButton.onclick = deleteTodo
    deleteButton.id = todo.id
    element.appendChild(deleteButton)

    const todoList = document.getElementById('todo-list')
    todoList.appendChild(element)
  })
}

//we will create an input box in our html amd when we input a text we want to push the value of the text into out todos array

//to show the new updated list cos the previous foreach todo funcion goes though each list and renders them but it does so without the new update

//when we make a new list it renders the inital array and then clears it using the render function to an empty spcae and then re renders the new updated list

//to associate the date with the todo, we need to create an object=> objetcs group different values that are related

const addNewTodo = () => {
  const textBox = document.getElementById('todo-title')
  const title = textBox.value
  const datePicker = document.getElementById('date-picker')
  const id = '' + new Date().getTime()

  const dueDate = datePicker.value
  todos.push({
    title: title,
    dueDate: dueDate,
    id: id,
  })
  saveTodo()
  render()
}
addNewTodo()

//model view controller mvc
//model contains all codes that saves and manages data
//view contains codes that manages visuals, renders visuals using data from model
//controller connects the model and view together, responds to events from the view eg button click and the tells te model to update its data and the view to re-render

//MODEL
// let todos = [
//   { title: 'Get groceries', dueDate: '2022-12-1', id: '1' },
//   { title: 'Wash car', dueDate: '2022-12-2', id: '2' },
//   { title: 'Make dinner', dueDate: '2022-12-3', id: '3' },
// ]

//CREATE TODO
// const createTodo = (title, dueDate) => {
//   const id = '' + new Date().getTime()
//   todos.push({
//     title: title,
//     dueDate: dueDate,
//     id: id,
//   })
// saveTodo()
// }

// const saveTodo = () => {
//   localStorage.setItem('todo', JSON.stringify(todos))
// }

//CONTROLLER
// const addNewTodo = () => {
//   const textBox = document.getElementById('todo-title')
//   const title = textBox.value
//   const datePicker = document.getElementById('date-picker')
//   const dueDate = datePicker.value

//   createTodo(title, dueDate)
//   render()
// }
// addNewTodo()

//DELETE TODO
// const removeTodo = (idToDelete) => {
//   todos = todos.filter(function (todo) {
//     if (todo.id === idToDelete) {
//       return false
//     } else {
//       return true
//     }
//   })
// saveTodo()
// }

// const deleteTodo = (event) => {
//   const deleteButton = event.target
//   const idToDelete = deleteButton.id

//   removeTodo(idToDelete)
//   render()
// }

//VIEW
// const render = () => {
//   document.getElementById('todo-list').innerHTML = ''

//   todos.forEach(function (todo) {
//     const element = document.createElement('div')
//     element.innerText = todo.title + ' ' + todo.dueDate

//     const deleteButton = document.createElement('button')
//     deleteButton.innerText = 'Delete'
//     deleteButton.style = 'margin-left: 12px;'
//     deleteButton.onclick = deleteTodo
//     deleteButton.id = todo.id
//     element.appendChild(deleteButton)

//     const todoList = document.getElementById('todo-list')
//     todoList.appendChild(element)
//   })
// }
