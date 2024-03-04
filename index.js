// javascript
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

// Increment section



let count =0
let saveEl = document.getElementById('save-el')
let countEl = document.getElementById("count-el")
let clearEl = document.getElementById('save-el')
let countRe = document.getElementById("count-el")

function increment() {
    count += 1 
    countEl.innerText=count
}
// reset section


function reset() {
count = 0
countRe.innerText = count
}

//save section

function save(){
    let countStr = count + " - "
    saveEl.textContent+= countStr
    //on above step we changed .innerText with .textContent 
    //to make spaces even and clear
}

//clear button
function clear(){
 saveEl.textContent = "_";
      
  }
  


