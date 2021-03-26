const switchBtn = document.querySelector('.switch-btn');
const myVideo = document.querySelector('.video-container');
const switchToggle = document.querySelector('.switch');
const loading = document.querySelector('.loading');

switchToggle.setAttribute('data-value', '\u25B6');

switchBtn.addEventListener('click', function(e) {
 if (!e.currentTarget.classList.contains('slide')) {
  e.currentTarget.classList.add('slide')
  myVideo.pause()
  switchToggle.setAttribute('data-value', '\u25B6');

 } else {
  e.currentTarget.classList.remove('slide')
  myVideo.play()
  switchToggle.setAttribute('data-value', '||');
 }
})

window.addEventListener('load', function() {
 loading.classList.add('hide-loading');
})
