// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().toLocaleDateString('fa-ir').substr(0, 4);

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function() {
 // linksContainer.classList.toggle('show-links');
 const linksContainerHeight = linksContainer.getBoundingClientRect().height;
 const linksHeight = links.getBoundingClientRect().height;
 
 if (linksContainerHeight === 0) {
  linksContainer.style.height = `${linksHeight}px`;
 } else {
  linksContainer.style.height = 0;
 }
})
// ********** fixed navbar ************

// ********** smooth scroll ************
