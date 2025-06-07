console.log("Learn DOM Manipulations");

// Creating Elements :

const h1Elem = document.createElement("h1");
h1Elem.innerText = "40 days of JavaScript";
document.body.appendChild(h1Elem);
console.log(h1Elem); // HTMLHeadingElement

const pElem = document.createElement("p");
pElem.innerText = "Hope you are enjoying Learn 40 days of Javascript";
document.body.appendChild(pElem);
console.log(pElem); // HTMLParagraphElement

const divElem = document.createElement("div");
divElem.innerText = "Hello World";
document.body.appendChild(divElem);
console.log(divElem); // HTMLDivElement

// Inserting Elements :

// Inserting Before :
const spanElem = document.createElement("span");
spanElem.innerText = " I am Span";

const p = document.querySelector("p");
document.body.insertBefore(spanElem, p);
console.log(spanElem); // HTMLSpanElement

// Another Example :
const span = document.createElement("span");
span.innerText = "Yes, I Do it";

const h1 = document.querySelector("h1");
document.body.insertBefore(span, h1);
