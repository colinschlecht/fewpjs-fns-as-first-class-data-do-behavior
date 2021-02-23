/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


/* Write your implementation of greet() */

function greet(time){
  let n = parseInt(time);
  if (n < 12) {
    return "Good Morning"
  } else if (n < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string){
  let element = document.getElementById("greeting");
  element.innerText = string
}
