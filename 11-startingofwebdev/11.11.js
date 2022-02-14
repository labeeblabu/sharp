// Start watching the video from here uptill 1:25:00

// https://www.youtube.com/watch?v=hdI2bqOjy3c&t=4230s



// Deliverables



// Code like the way the youtuber does and manipulate the DOM
// Make the first <li> tag which has HELLO -> green in color
// Make the second Li tag yellow in color﻿
let ul=document.querySelector(`.items`)

console.log();

ul.firstElementChild.textContent=`hello`

let firstChild=ul.firstElementChild

ul.firstElementChild.style.color=`green`

ul.children[1].style.color=`yellow`


// Watch the video from here uptill the end

// https://www.youtube.com/watch?v=hdI2bqOjy3c&t=5080s



// Deliverable



// 1) Add separate events for click , mouseover and mouseout functionality (Dont club them into 1)

// 2)Now take the value in the form and console log the value in the browsers after doing the necessary validations

let btn = document.querySelector(`.btn`)



let msg = document.querySelector(`.msg`)



console.log(btn);







// btn.addEventListener("click",(e)=>{



// e.preventDefault()



//   document.querySelector(`body`).style.backgroundColor=`blue`



// })



btn.addEventListener("mouseenter", (e) => {
  e.preventDefault()
  btn.style.backgroundColor = `grey`
})
btn.addEventListener("mouseleave", (e) => {
  e.preventDefault()
  btn.style.backgroundColor = `black`
})
let form = document.querySelector(`#my-form`)
let nameInput = document.querySelector(`#name`)
console.log(nameInput);
let emailInput = document.querySelector(`#email`)
let users = document.querySelector(`#users`)
form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log(nameInput.value);
  console.log(emailInput.value);
  if (nameInput.value == "" || emailInput.value == "") {
  msg.innerHTML = "Please enter all field"
  } else {
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))
    users.appendChild(li)
    nameInput.value = ''
    emailInput.value = ''
  }
})