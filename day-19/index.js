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
