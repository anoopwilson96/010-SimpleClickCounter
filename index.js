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
let resetEl=document.getElementById('reset-btn')
let saveEl = document.getElementById('save-btn')
let historyEl=document.getElementById('history-el')
let clearEl=document.getElementById('clear-btn')



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
resetEl.addEventListener('click',reset)

function reset() {
    count = 0
    countEl.innerHTML = count
  }
// save section

saveEl.addEventListener('click',save)

function save(){
  historyString= count + " - "
  historyEl.innerHTML +=  historyString 
}
// clear history

clearEl.addEventListener('click',clear)

function clear(){
  historyString = " "
  historyEl.innerHTML= historyString
  console.log("run")
}