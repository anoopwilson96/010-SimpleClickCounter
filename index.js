//in-line comments
/* multi-line comments*/

/* let myName = "Anoop"
console.log('myName');



Main types of functions 
function showMessage() {
  console.log('Welcome to basics of JS')
}

let a = function showMessage(){
  console.log('Welcome again')
}

let showNewMessage = () => {
  console.log('Welcome again and agin')
}

showMessage()
a()
showNewMessage()
a() */


let count = 0
let countEl = document.getElementById("count-el")
let addEl = document.getElementById("add-btn")
let minusEl = document.getElementById('minus-btn')


// add section

addEl.addEventListener('click',add)

function add() {
    count = count+1 
    countEl.innerHTML=count 
}

//decrement section

minusEl.addEventListener('click',minus)

function minus(){
  count=count-1
  countEl.innerHTML=count
}


// reset section

let countRe = document.getElementById("count-el")
function reset() {
    count = 0
    countRe.innerHTML = count
  }
