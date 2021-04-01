const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

about.addEventListener('click', function(e) {
 const id = e.target.dataset.id;
 
if (id) {
 const element = document.getElementById(id);
 btns.forEach(function(btn) {
  btn.classList.remove('active');
 });
 e.target.classList.add('active');
 
 content.forEach(function(item) {
  item.classList.remove('active');
 });
 element.classList.add('active');
}
});