console.log("Day 19: MASTER JavaScript Events Like a PRO 🤩");
// What is an Event (Browser)
// An Event is just a Signal that something happened in the browser.

// Event Handling in Markup
function handleClick(message) {
  console.log("Hey, Man", message);
}

// Event Handling is Script :
const myBtnElem = document.getElementById("myBtn");
// Option - 1
myBtnElem.onclick = function () {
  console.log("Hello World");
};

// Option - 2
function buttonClickAgain() {
  console.log("Click Me Again");
}
myBtnElem.onclick = buttonClickAgain;

{
  // addEventListener :
  let counter = 0;
  const eventBtnElem = document.getElementById("countBtn");
  eventBtnElem.addEventListener("click", function () {
    console.log("counter :", counter);
    counter++;
  });
}

{
  // removeEventListener :
  const eventBtnElem = document.getElementById("countBtn2");

  let counter = 0;
  function handleClick() {
    console.log(`Counter : ${counter}`);
    counter++;
  }

  // addEventListener:
  eventBtnElem.addEventListener("click", handleClick);

  // removeEventListener:
  eventBtnElem.removeEventListener("click", handleClick);
}

// Handling Multiple Listeners
const multiCountElem = document.getElementById("multiCount");

let counter = 0;
function handleCount() {
  console.log(`Counter : ${counter}`);
  counter++;
}

function greetMe() {
  console.log("Thank You");
}

multiCountElem.addEventListener("click", handleCount);
multiCountElem.addEventListener("click", greetMe);

// remove event listeners
multiCountElem.removeEventListener("click", handleCount);

// Event Object ;
const inputElem = document.getElementById("search-id");

function handleChange(event) {
  console.log(event);
  console.log(event.target);
  console.log(event.target.name);
  console.log(event.target.value);
  console.log(event.type);
  console.log(event.currentTarget);
  console.log(this);
}

inputElem.addEventListener("change", handleChange);
