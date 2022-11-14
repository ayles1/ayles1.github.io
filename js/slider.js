//Dynamic rendering HTML

//slider

function renderSlider() {
  const slider = document.querySelector("#slider");
  slider.insertAdjacentHTML(
    `afterbegin`,
    `<div class="slider__item">
        <img src="/images/other/слайдер баннер.jpg" alt="" />
        </div>
        
        <div class="slider__item">
        <img src="/images/other/Без названия.jpg" alt="" />
        </div>
        
        
        <div class="slider__item">
        <img src="/images/other/Без названия (1).jpg" alt="" />
        </div>
        <div class="slider__left-btn">&lt;</div>
        <div class="slider__right-btn">&gt;</div>`
  );
}

renderSlider();

let slideIndex = 1;

showSlides(slideIndex);

const rightBtn = document.querySelector(".slider__right-btn");
const leftBtn = document.querySelector(".slider__left-btn");

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", previousSlide);

function nextSlide() {
  showSlides((slideIndex += 1));
}

function previousSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slider__item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
