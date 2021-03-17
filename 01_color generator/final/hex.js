const myArray = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('change');
const color = document.getElementById('color');

function getRandomNumber() {
 return Math.floor(Math.random() * myArray.length);
}

function changeColor() {
 let colorCode = '#';
 for (let i=0; i<6; i++) {
  let randomNumber = getRandomNumber();
  colorCode += myArray[randomNumber]
 }
 document.body.style.backgroundColor = colorCode;
 color.textContent = colorCode;
}
btn.addEventListener('click', changeColor);