const todoInput = document.getElementById('todo');
const btnSubmit = document.querySelector('.btn-submit');
const todoList = document.getElementById('todo-list');
const todoContainer = document.querySelector('.todo-container');

function todoSubmit (e) {
 e.preventDefault();
 const inputValue = todoInput.value;
 if (inputValue) {
  const element = document.createElement('article');
  let attr = document.createAttribute('data-id');
  const id = attr.value = new Date().getTime();
  attr.value = id;

  element.innerHTML = `<div class="todo-item">
     <p class="todo-text">${inputValue}</p>
     <div class="control-container">
      <button type="button" class="btn btn-edit">ویرایش</button>
      <button type="button" class="btn btn-delet">&times;</button>
     </div>
   </div>`

  todoList.appendChild(element);
  todoInput.value = '';

  // get btns
  const btnEdit = document.querySelector('.btn-edit');
  const btnDelet = document.querySelector('.btn-delet');
  btnEdit.addEventListener('click', todoEdit);
  btnDelet.addEventListener('click', todoDelet);
  todoContainer.classList.add('show-container');
 }
}

function todoEdit(e) {
 console.log('edit');
}

function todoDelet(e) {
 const element = e.currentTarget.parentElement.parentElement.parentElement;
 element.classList.add('delet');
}
btnSubmit.addEventListener('click', todoSubmit);
// btnEdit.addEventListener('click', todoEdit);
