window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 60) {
    navbar.classList.add("sticky-navbar");
  } 
  else {
    navbar.classList.remove("sticky-navbar");
  }
});



const observer = new IntersectionObserver((elements) => {
  elements.forEach(element => {
    if (element.isIntersecting) {
      element.target.classList.add('show');
    }
    // else {
    //   element.target.classList.remove('show');
    // }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

const textChangeElement = document.getElementById('text-change');
const paraChangeElement = document.getElementById('para-change');

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active-slide");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active-slide");

  const counterElement = document.getElementById('counter');

  const updateCount = (maxValue, speed) => {
    const value = parseInt(counterElement.dataset.value);
    let initialValue = 0;
    

    const increaseCount = setInterval(() => {
      initialValue += 1;

      if (initialValue > value || initialValue > maxValue) {
        clearInterval(increaseCount);
        return;
      }

      counterElement.textContent = `${initialValue}`;
    }, speed);
  };

  if (slideIndex === 1) {

    textChangeElement.innerText = "Start Project";
    paraChangeElement.innerText = "more than a hundred successful project";
  
    updateCount(400, 4);


  } else if (slideIndex === 2) {

    textChangeElement.innerText = "Explore Project";
    paraChangeElement.innerText = "Years of Experienced Projects";


    updateCount(21,20);

  }


  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 6000);
}







document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
    slidesPerView: 3,
    loop: false,
    navigation: false,
    pagination: false,
    observer: true,
    observeParents: true,
    on: {
      slideChange: function () {
        updateActiveDot(swiper.activeIndex);
      }
    }
  });

  function updateActiveDot(index) {
    const dots = document.querySelectorAll('.c-dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  const dots = document.querySelectorAll('.c-dot');
  dots.forEach((dot, index) => {
    dot.addEventListener('click', function () {
      swiper.slideTo(index);
    });
  });
});


function checkMediaQuery() {

  const mediaQuery = window.matchMedia('(max-width: 767px)');
  
  const elements = document.querySelectorAll('.justify-content-end');

  if (mediaQuery.matches) {
    elements.forEach((element) => {
      element.classList.remove('justify-content-end');
    });
  } else {
    elements.forEach((element) => {
      element.classList.add('justify-content-end');
    });
  }
}


checkMediaQuery();


window.addEventListener('resize', checkMediaQuery);
