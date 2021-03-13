// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.getElementsByTagName("header");
const nav = document.querySelector("#mainNav");
const logoTitle = document.getElementById("logoTitle");
const firstCard = document.getElementsByClassName("card")[0];
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector(".card-img-top");
const titleFirstCard = firstCard.querySelector(".card-title");
const subtitleFirstCard = firstCard.querySelector(".card-subtitle");
const textFirstCard = firstCard.querySelector(".card-text");
// C- traversing with dot notation
const link1FirstCard = firstCard.querySelectorAll(".card-link")[0];
const link2FirstCard = firstCard.querySelectorAll(".card-link")[1];

// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
// B- Loop over the links and console.log their text content
// C- Turn the collection of links into a real array
// D- Use .filter to find the anchor tag with the textContent of "Home"
const anchorTags = document.querySelectorAll(".menu-item");
anchorTags.forEach(tag => console.log(tag.innerHTML));
let anchorTagsArray = []
anchorTags.forEach(tag => anchorTagsArray.push({title: tag.innerHTML, link: tag.href}))
console.log(anchorTagsArray);
console.log(anchorTagsArray.filter(tag => tag.title === "Home"));

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
imageFirstCard.src = "https://preview.redd.it/zu3bpvldcsf41.jpg?width=640&crop=smart&auto=webp&s=37464c4ef6f97176f76e6a45375c0086adea0059";
titleFirstCard.innerHTML = "Dog";
subtitleFirstCard.innerHTML = "Looks like a dog";
textFirstCard.innerHTML = "Smells like a dog, must be a dog!";
link2FirstCard.innerHTML = "Dog Ipsum";

// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
titleFirstCard.setAttribute("class", "extra-stuff");

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element
titleFirstCard.classList.toggle("card-title", true);

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const node = document.createElement("A");
node.classList.add("menu-item");
node.innerHTML = "Blog";
node.href = "#";
console.log(node);
console.log(nav);
nav.appendChild(node);
console.log(nav);
// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const cardCopy = document.querySelector(".card");
console.log(cardCopy);
document.querySelector(".card-group").appendChild(cardCopy);

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
