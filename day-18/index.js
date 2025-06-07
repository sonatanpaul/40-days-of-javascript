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
// create element
const span = document.createElement("span");
span.innerText = "Yes, I Do it";

// insert element
const h1 = document.querySelector("h1");
document.body.insertBefore(span, h1);

// Inserting After :
{
  // create element :
  const p = document.createElement("p");
  p.innerText = "Hello World After";

  // insert element
  const h1 = document.querySelector("h1");
  document.body.insertBefore(p, null); // null means last elment
  document.body.insertBefore(p, h1.nextElementSibling); // insert after h1 tag
}

{
  // Modifying Content:

  // innerText :
  const h2 = document.querySelector("h2");
  h2.innerText = "Eid Mubarak Everyone ?";

  // InnerHTML :
  const h1 = document.querySelector("h1");
  h1.innerHTML = `Learn Today <u>DOM</u> Manupalutaion`;
  console.log(h1);

  // TextContent
  const div = document.querySelector("div");
  console.log("InnerText", div.innerText); // not visiblity
  console.log("TextContent", div.textContent); // visibilty
}

{
  // Remove Elements
  //   example - 1
  const deleteItem = document.getElementById("removeMe");
  deleteItem.remove(); // removeitem
  console.log(deleteItem);

  // example-2
  const list = document.getElementById("myList");
  const firstElem = list.children[0];
  list.removeChild(firstElem); // first element is delete
  console.log(list.children); // [li, li, li, li, li]

  //   remove all element

  //   list.innerText = "";
  //   list.textContent = "";
  // list.replaceChildren();

  //   replace Element
  const h2 = document.querySelector("h2");
//   list.replaceChildren(h2);
}
