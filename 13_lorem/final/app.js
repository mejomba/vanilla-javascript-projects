const loremSentence = [
 'این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی.',
 'همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است.',
 'طراحان به جای تایپ و نگارش متن می توانند تنها با یک کپی و پست این متن را در کادرهای مختلف جایگزین نمائید.',
 'همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود.',
 'پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند.',
 'پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم.',
 'یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد.',
 'ﻣﺮﺩ ﺁﻫﺴﺘﻪ ﺩﺭ ﮔﻮﺵ ﻓﺮﺯﻧﺪ ﺗﺎﺯﻩ ﺑﻪ ﺑﻠﻮﻍ ﺭﺳﯿﺪﻩ ﺍﺵ ﺑﺮﺍﯼ ﭘﻨﺪ ﭼﻨﯿﻦ ﻧﺠﻮﺍ ﮐﺮد.',
 'وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند.',
 'ولی به زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌ های وطن خودش می‌باشد و بس.'
]

const btn = document.querySelector('.btn');
const loremText = document.querySelector('.lorem-text');
const option = document.querySelector('#type-id');
const inputNumber = document.querySelector('#amount');

function getRandomNmber () {
 return Math.floor(Math.random() * loremSentence.length);
}

function shuffleArray(arr) {
 for (i=0; i<arr.length; i++) {
  let j = Math.floor(Math.random() * arr.length)
  let temp = arr[i]
  arr[i] = arr[j];
  arr[j] = temp 
 }
 return arr
}

function getParagraph (x, arr) {
 let tempText = []
 if (isNaN(x) || x === 1) {
  const paragraphLen = Math.max(3, Math.floor(Math.random() * 8))
  return arr.slice(0, paragraphLen).join('')  
 } else {
   for (let i=0; i<x; i++) {
    const paragraphLen = Math.max(3, Math.floor(Math.random() * 8))
    tempText.push(`<p>${shuffleArray(arr).slice(0, paragraphLen)}</p>`)
   }
   console.log(tempText);
   return tempText.join('');
 }
}

function getSentence (x, arr) {
 if (isNaN(x) || x === 1) {
  return `<p>${arr[getRandomNmber()]}</p>`
 } else {
  let tempText = []
  for (let i=0; i<x; i++) {
   tempText.push(`<p>${arr[getRandomNmber()]}</p>`)
  }
  return tempText.join('');
 }
}

btn.addEventListener('click', function(e) {
 e.preventDefault();

 const number = parseInt(inputNumber.value);
 if (option.value === 'paragraph') {
  loremText.innerHTML = getParagraph(number, loremSentence);
 } else if (option.value === 'sentence') {
  loremText.innerHTML = getSentence(number, loremSentence);
 }
})

