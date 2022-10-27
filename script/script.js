/* Полезные функции для неоднократного пользования */
function clearClass(elem, itemClass) {
  elem.classList.remove(itemClass);
}
function addClass(elem, itemClass) {
  elem.classList.add(itemClass);
}
function toggleClass(elem, itemClass) {
  elem.classList.toggle(itemClass);
}

/* Клик по иконке в хедере возвращает на главную страницу */
const homeIcon = document.querySelector(".header__icon");
const slides = document.querySelectorAll(".background");

const backHome = () => {
  for (slide of slides) {
    addClass(slide, "none");
    clearClass(slide, "active");
  }
  addClass(slides[0], "active");
};

homeIcon.addEventListener("click", backHome);

/* Переключение на следующий или предыдущий слайд. Функция не зависит от количества слайдов. Используется для кнопки и свайпа. */
const btnNext = document.querySelectorAll(".js-btn-next");

const clickSlideLeft = () => {
  const slideActiv = document.querySelector(".active");
  const lastActiv = slideActiv.previousElementSibling;
  function checkSlide() {
    if (lastActiv == null) {
      backHome();
    }
  }
  checkSlide();
  clearClass(slideActiv, "active");
  addClass(slideActiv, "none");
  addClass(lastActiv, "active");
};

const clickSlide = () => {
  const slideActiv = document.querySelector(".active");
  const newActiv = slideActiv.nextElementSibling;
  function checkSlide() {
    if (newActiv == null) {
      backHome();
    }
  }
  checkSlide();
  clearClass(slideActiv, "active");
  addClass(slideActiv, "none");
  addClass(newActiv, "active");
};

for (btn of btnNext) {
  btn.addEventListener("click", clickSlide);
}

/* pop-up окно */
const btnPopup = document.querySelector(".slideBrend__about-btn");
const slidePlus = document.querySelector(".slidePlus");
const slideBrend = document.querySelector(".slideBrend");
const brendOne = document.querySelector(".slideBrend__slideOne");
const close = document.querySelector(".slidePlus__slideTwo-close");

btnPopup.addEventListener("click", function () {
  brendOne.style.display = "none";
  slidePlus.style.display = "flex";
});

close.addEventListener("click", function () {
  brendOne.style.display = "flex";
  slidePlus.style.display = "none";
});

/* Пагинация на последнем слайде*/
const pagNext = document.querySelector(".paginator__next");
const pagPrev = document.querySelector(".paginator__prev");
const pluses = document.querySelectorAll(".slidePlus__plus");
const pagEllipse = document.querySelectorAll(".paginator__ellipse");

const changeEllipse = () => {
  for (ellipse of pagEllipse) {
    toggleClass(ellipse, "ellipse-choose");
  }
};

pagNext.addEventListener("click", function () {
  clearClass(pluses[0], "active");
  addClass(pluses[1], "active");
  changeEllipse();
});

pagPrev.addEventListener("click", function () {
  clearClass(pluses[1], "active");
  addClass(pluses[0], "active");
  changeEllipse();
});

/* Смена слайда по свайпу */
const slideMessage = document.querySelector(".slideMessage");
let x1 = null;
let dif = 0;

function handleTouchStart(event) {
  const firstTouch = event.touches[0];
  x1 = firstTouch.clientX;
}

function handleTouchMove(event) {
  if (!x1) {
    return false;
  }
  let x2 = event.touches[0].clientX;
  let dif = x1 - x2;
  if (dif > 15) {
    clickSlide();
  } else if (dif < -15) {
    clickSlideLeft();
  }
  x1 = null;
}

for (slide of slides) {
  slide.addEventListener("touchstart", handleTouchStart);
  slide.addEventListener("touchmove", handleTouchMove);
}
