let navBar = document.querySelector(".navLink");
let menuBar = document.querySelector("#menuBtn");

menuBar.onclick = () => {
  navBar.classList.toggle("active");
};

// scroll section and sticky navbar
window.onscroll = () => {
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);
};

// swiper js

var swiper = new Swiper(".myHome", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// counter section start

let valueDisplay = document.querySelectorAll(".num");
let interval = 100;

valueDisplay.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-value"));

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

// client section swiper
var swiper = new Swiper(".myClient", {
  slidePerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
// < !--FAQ section statr-- >

document.querySelectorAll('.question').forEach(item => {
  item.addEventListener('click', () => {
    // Toggle the active state for the clicked question
    item.classList.toggle('active');

    // Get the answer section within the clicked question
    const answer = item.querySelector('.answer');

    // Show or hide the answer with a smooth transition
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + 'px'; // Expand to show the answer
    } else {
      answer.style.maxHeight = null; // Collapse to hide the answer
    }
  });
});

// < !--My Favourites section statr-- >

const removeButtons = document.querySelectorAll('.remove-favorite');

removeButtons.forEach(button => {
  button.addEventListener('click', function () {
    const carCard = this.parentElement.parentElement;
    carCard.remove(); // Remove the car card from the favorites list
  });
});
