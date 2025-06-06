/*
# **Introduction to the DOM:**
The **Document Object Model** (*DOM*) is the data representation of the objects that comprise the structure and content of a document on the web. This guide will introduce the DOM, look at how the DOM represents an HTML document in memory and how to use APIs to create web content and applications.

# **What is the DOM?**
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
*/

// Understanding DOM Types

// 01.Document - Represents the entire page and it is the root node of the DOM tree.
console.log(document);
// 02.Node - A generic term for any elements in the DOM tree. Element Node, Text Node, Attribute Node .
// 03.Element - A specific type of node that represents HTML tags/elements
// 04.Nodelist - An array of Nodes
// 05.Attribute - Represent the attribute of a node. // <img src="/" alt= "some image">
// 06.NameNodeMap - A collection of attribute.

// Accessing DOM:

// 1.getElementById(idName)
// 2. getElementsByClassName(className)
// 3. getElementsByTagName(tagName)
// 4. querySelector(cssSelector)
// 5. querySelectorAll(cssSelector)

// getElementById()
const titleElem = document.getElementById("heading");
console.log(titleElem);

// getElementsByClassName()
const infoElems = document.getElementsByClassName("info");
console.log(infoElems);
console.log(infoElems[0], infoElems[1], infoElems[2]); // access index
[...infoElems].forEach((element) => console.log(element)); // access for looping
// Note : getElementsByClassName() return HTML Collection

// getElementsByTagName()
const pTagElems = document.getElementsByTagName("p");
console.log(pTagElems);
[...pTagElems].forEach((element) => {
  console.log(element);
});
// getElementsByTagName() return HTML Collection

// Selctors Method - Query Selctor and Query Selctor ALl

// querySelector()
const para = document.querySelector("p.info");
console.log(para);
// Note : quarySelector return always first element

// querySelectorAll()
const paras = document.querySelectorAll("p.info");
console.log(paras);
// Note : querySelectorAll return css selector all matching elemet and return NodeList

const pElem = document.querySelector(".info");
console.log(pElem);

// Note : if you access id element then you use #idName
const hOne = document.querySelector("#heading");
console.log(hOne);

let liveItems = document.getElementsByClassName("item"); // HTMLCollection (live)
let staticItems = document.querySelectorAll(".item"); // NodeList (not live)

