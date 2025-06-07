console.log("Toggle Project");

function toggleEvent() {
  console.log("Hi, Toggle");
  const pElem = document.getElementById("myParagraph");
  pElem.classList.toggle("hidden");
}

function toggleBackground() {
  console.log("Hi, Man");
const pElem = document.getElementById("myParagraph");
pElem.classList.toggle('bg-color')

}
