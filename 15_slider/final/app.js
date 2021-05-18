const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let counter = 0;

nextBtn.addEventListener('click', function() {
    counter++;
    carousel()
})

prevBtn.addEventListener('click', function() {
    counter--;
    carousel()
})

slides.forEach(function(slide, idx) {
    slide.style.left = `${idx * 100}%`;
})



function carousel() {
    // if (counter < 0) {
    //     counter = slides.length - 1;
    // } else if (counter === slides.length) {
    //     counter = 0
    // }

    if (counter > 0) {
        prevBtn.style.display = 'block';
    } else {
        prevBtn.style.display = 'none';
    }

    if (counter === slides.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }



    
    slides.forEach(function(slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
        console.log(counter);
    })
}
prevBtn.style.display = "none";
