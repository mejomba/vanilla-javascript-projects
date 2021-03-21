const modalBtn = document.querySelector('.modal-btn');
const closelBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay');
const modalContainer = document.querySelector('.modal-container');

modalBtn.addEventListener('click', function() {
 modal.classList.toggle('open-modal');
})

closelBtn.addEventListener('click', function() {
 modal.classList.remove('open-modal');
})

modalContainer.addEventListener('overflow', function(e) {
 e.currentTarget.style.overflowY = 'scroll';
})