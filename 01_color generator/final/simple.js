const colorArray = ['red', 'green', 'rgba(150, 50, 45, 1)', '#1452ea'];

const btn = document.getElementById('change');
const color = document.getElementById('color');

function randomNumber () {
 return Math.floor(Math.random() * colorArray.length);
}
function changeColor() {
 let number = randomNumber()
 console.log(number);
 selectedColor = colorArray[number];
 document.body.style.backgroundColor = selectedColor;
 color.textContent = colorArray[number];
}
btn.addEventListener('click', changeColor);