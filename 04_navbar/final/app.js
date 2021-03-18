const toggler = document.querySelector('.nav-header');
const links = document.querySelector('.links');

toggler.addEventListener('click', function() {
 // console.log(links.classList.contains('show-links'));
 if (links.classList.contains('show-links')) {
  links.classList.remove('show-links')
 } else {
  links.classList.add('show-links')
 }
});