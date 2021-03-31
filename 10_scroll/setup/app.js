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
const navbar = document.getElementById('nav');
const goTop = document.querySelector('.go-top');

window.addEventListener('scroll', function() {
 const scrollHeight  = window.pageYOffset;
 const navHeight = navbar.getBoundingClientRect().height;
 if (scrollHeight > navHeight) {
  navbar.classList.add('fixed-nav');
 } else {
  navbar.classList.remove('fixed-nav');
 }

 if (scrollHeight > 400) {
  goTop.classList.add('show-link')
 } else {
  goTop.classList.remove('show-link')
 }
})
// ********** smooth scroll ************
const scrollLink = document.querySelectorAll('.scroll-link');
scrollLink.forEach(function(link) {
 link.addEventListener('click', function(e) {
  e.preventDefault();
  const id = e.currentTarget.getAttribute('href').slice(1);
  const element = document.getElementById(id);
  
  const navHeight = navbar.getBoundingClientRect().height;
  const linksContainerHeight = linksContainer.getBoundingClientRect().height;
  const fixdNav = navbar.classList.contains('fixed-nav');
  let position = element.offsetTop - navHeight;
  
  if (!fixdNav) {
   position = position - navHeight;
  }

  if (navHeight > 100) {
   position = position + linksContainerHeight;
  }
  window.scrollTo({
   left:0,
   top: position
  });
  linksContainer.style.height = 0;
 })
})