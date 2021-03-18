const reviews = [
 {
  id: 1,
  author: 'peter',
  job: 'front-end',
  image: 'images/peter.jpg',
  info: "dolor, sit amet consectetur adipisicing elit. Tempore, deleniti! Est quo dolorum, maxime minima, temporibus quibusdam in nostrum optio obcaecati iure consectetur eum "
 },

 {
  id: 2,
  author: 'susan',
  job: 'back-end',
  image: 'images/susan.jpg',
  info: "dolor, sit  minima, deleniti! Est quo dolorum, maxime minima, temporibus quibusdam in nostrum optio obcaecati iure consectetur eum temporibus quibusdam in nostrum optio obcaecati iure consectetur eum "
 },

 {
  id: 3,
  author: 'anna',
  job: 'UI-UX',
  image: 'images/anna.jpg',
  info: "dolor, sit  in nostrum optio obcaecati iure consectetur eum temporibus quibusdam in nostrum optio obcaecati iure consectetur eum "
 },

 {
  id: 2,
  author: 'bill',
  job: 'database',
  image: 'images/bill.jpg',
  info: "dolor, sit in nostrum optio obcaecati iure consectetur eum "
 },
]

const personImage = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 1;

function changeData() {
	const data = reviews[currentItem];
	personImage.src = data.image;
	author.textContent = data.author;
	job.textContent = data.job;
	info.textContent = data.info;
}

window.addEventListener('DOMContentLoaded', function() {
	changeData()
});

// show next person
nextBtn.addEventListener('click', function() {
	currentItem++;
	if (currentItem > reviews.length - 1) {
		currentItem = 0;
	}
	changeData()
})

// show prev person
prevBtn.addEventListener('click', function() {
	currentItem--;
	if (currentItem < 0) {
		currentItem = reviews.length - 1;
	}
	changeData();
});

randomBtn.addEventListener('click', function() {
	currentItem = Math.floor(Math.random() * reviews.length);
	changeData();
})