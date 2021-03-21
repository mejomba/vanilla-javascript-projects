// const questions = document.querySelectorAll('.question');

// questions.forEach(function(question) {
//  // console.log(question);
//  const btn = question.querySelector('.question-btn');
//  // console.log(btn);
//  btn.addEventListener('click', function() {
//   questions.forEach(function(item) {
//    if (item !== question) {
//     item.classList.remove('show-text');
//    }
//   })
//   question.classList.toggle('show-text');
//  })
// })

const btns = document.querySelectorAll('.question-btn');

btns.forEach(function(btn) {
 btn.addEventListener('click', function(e) {
  e.currentTarget.classList.toggle('active');
  const answer = e.currentTarget.nextElementSibling;
  // answer.classList.toggle('active');
  if (answer.style.height) {
   answer.style.height = null;
  } else {
   answer.style.height = answer.scrollHeight + 'px';
   btns.forEach(function(item) {
    console.log('item', item);
    if (item !== btn) {
     console.log('if item', item);
     item.classList.remove('active');
     item.nextElementSibling.style.height = null;
    }
   })
  }
 })
})
