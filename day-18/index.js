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

{
  // Read, Write, and Remove Attributes

  const imgElem = document.querySelector("img");
  console.log(imgElem);

  // Read Attribute
  console.log(imgElem.getAttribute("alt"));
  // Write / Update Attribute
  imgElem.setAttribute("alt", "avatar image");

  //Remove Attribute
  imgElem.removeAttribute("width");

  // check attribute true or false
  imgElem.hasAttribute("alt"); //  true
  imgElem.hasAttribute("width"); // false
}

{
  // Tavarsing / Navigating DOM

  // parentNode / parentElement
  const span = document.getElementById("text");
  // console.log(span);

  //   access span parent  p element
  console.log("ParentNode", span.parentNode); //  span > p
  console.log("ParentNode", span.parentElement); // span > p

  // access span parent p element and p parent access div element
  console.log("ParentNode", span.parentNode.parentNode); // span > p > div
  console.log("ParentElement", span.parentElement.parentElement); // span > p > div

  // children / childNodes
  const mainElem = document.getElementById("main");
  //   console.log(mainElem);
  console.log("Children", mainElem.children); // retrun html collection
  console.log("childNodes", mainElem.childNodes); // return NodeList

  // nextSibling / nextSiblingElement:

  const h1Elem = document.getElementById("something-id2");
  console.log(h1Elem); // <p id="something-id2">Something More</p>
  console.log("nextSibling", h1Elem.nextSibling); // return text
  console.log("nextElementSibling", h1Elem.nextElementSibling); // return <p id="something-id3">Something Even More</p>

  // previousSibling /  previousElementSibling:
  console.log(h1Elem); // <p id="something-id2">Something More</p>
  console.log("previousSibling", h1Elem.previousSibling); // return #text
  console.log("previousElementSibling", h1Elem.previousElementSibling); // return <h1 id="something-id">Something</h1>

  // note : nextSibling - previousSibling both return nodeList
}

{
  // Manipulating Styles
  const pElem = document.getElementById("p-id");
  console.log(pElem.style);
  pElem.style.backgroundColor = "pink";
}

{
  // Manipulating Classes :
  const divElem = document.getElementById("main");
  console.log(divElem.className); // main-class
  //   divElem.className = "secendory-class ";
  console.log(divElem.className); // secendory-class
}

{
  // ClassList :
  const divElem = document.getElementById("main");
  console.log(divElem.className); // secendory-class
  // add class list;
  divElem.classList.add("test");

  // remove classlist
  divElem.classList.remove("layout");

  // replace classlist
  divElem.classList.replace("main-class", "secendory-class");

  // class has or not
  console.log("Does it have test", divElem.classList.contains("test"));
  console.log(
    "Does it have main-class",
    divElem.classList.contains("main-class")
  );

  // toggle
  divElem.classList.toggle("test"); // false
  divElem.classList.toggle("test"); // true
}

{
  // Controlling Visibilities
  const divElem = document.getElementById("main");
  // divElem.style.display = "none";
  // divElem.style.visibility = "hidden";
//   divElem.style.opacity = "0.2";
}


{
    // Project - 01 
    
}