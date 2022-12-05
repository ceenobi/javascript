//document object module, it's just the manipulating stuff on the screen rather than console
let club = document.getElementById('club')
console.log(club.innerText)
//in order to change the og out on the scrren we can simply
club.innerText = 'Real Madrid'
console.log('after', club.innerText)
club.innerHTML = '<h2>Barcelona</h2>'
let message = 'I love football'
club.innerText = message
club.innerHTML = `<h1>${message}</h1>`
club.style.color = 'red'
club.style.backgroundColor = 'gray'
club.style.padding = '10px'
club.style.textAlign = 'center'

const boxes = document.getElementById('boxes')
boxes.style.display = 'flex'
boxes.style.gap = '20px'

let sizeRed = document.getElementById('red')
sizeRed.style.width = '200px'
sizeRed.style.height = '200px'
sizeRed.style.backgroundColor = 'red'
let sizeYellow = document.getElementById('yellow')
sizeYellow.style.width = '200px'
sizeYellow.style.height = '200px'
sizeYellow.style.backgroundColor = 'yellow'
let sizeBlue = document.getElementById('blue')
sizeBlue.style.width = '200px'
sizeBlue.style.height = '200px'
sizeBlue.style.backgroundColor = 'blue'

// sizeRed.onclick = () => console.log('You clicked Red')
// sizeYellow.onclick = () => console.log('You clicked Yellow')
// sizeBlue.onclick = () => console.log('You clicked Blue')

//using our classname to target the entire boxes
const squares = document.querySelectorAll('.colorButton')
// console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)
//we can use a for each loop to run over the code and loop the function
// 

//we can also loop through our forEach function and update the onClick function we have at the top

const timesClicked = {'red': 0, 'yellow': 0, 'blue': 0, }

squares.forEach((square)=> {
    square.onclick = () => console.log(square.value)
})
