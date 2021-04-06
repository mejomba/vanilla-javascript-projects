const timer = document.querySelectorAll('.single-timer h4');
const futureTime = new Date('2021', '3', '6', '18', '9', '55');
const expire = document.querySelector('.timer')

function format(x) {
 if (x < 10) {
  return (x = `0${x}`)
 } else {
  return x
 }
}
function setTimer() {
 const today = new Date().getTime()
 let t = futureTime - today;
console.log(t);
 let oneDay = 24 * 60 * 60 * 1000;
 let oneHour = 60 * 60 * 1000;
 let oneMin = 60 * 1000;

 let days = Math.floor(t / oneDay);
 let hours = Math.floor((t % oneDay) / oneHour);
 let minuets = Math.floor((t % oneHour) / oneMin) ;
 let seconds = Math.floor((t % oneMin) / 1000);

 const value = [days, hours, minuets, seconds]
 timer.forEach(function(item, idx) {
  item.innerHTML = format(value[idx])
 })
  
 if (t <= 1000) {
  expire.innerHTML = `<h3 class="expire">افتتاح شد</h3>`
  clearInterval(countDown);
 }
}

let countDown = setInterval(setTimer, 1000);
setTimer()