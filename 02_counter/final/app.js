const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
var count = parseInt(value.textContent);

btns.forEach(function(btn) {
 btn.addEventListener('click', function(e) {
  let styles = e.currentTarget.classList
  console.log(styles);
  if (styles.contains('increase')) {
   count++;
  } else if (styles.contains('decrease')) {
    count--;
  } else {
    count = 0;
  }

  value.textContent = count;

  if (count > 0) {
    value.style.color = 'green';
  } else if (count < 0) {
    value.style.color = 'red';
  } else {
     value.style.color = 'black';
  }
 })
})