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
const home = document.querySelector(".slideHome");
const slides = document.querySelectorAll(".background");

const backHome = () => {
  for (slide of slides) {
    addClass(slide, "none");
  }
  addClass(home, "active");
};

homeIcon.addEventListener("click", backHome);

/* По кнопке идет переключение на следующий слайд. Функция не зависит от количества слайдов */
const btnNext = document.querySelectorAll(".js-btn-next");
const slideActiv = document.querySelector(".active");
const newActiv = slideActiv.nextElementSibling;

const clickSlide = () => {
  clearClass(slideActiv, "active");
  addClass(slideActiv, "none");
  addClass(newActiv, "active");
};

for (btn of btnNext) {
  btn.addEventListener("click", clickSlide);
}

/* Пагинация на последнем слайде и закрытие окна*/
const pagNext = document.querySelector(".paginator__next");
const pagPrev = document.querySelector(".paginator__prev");
const slidePlus = document.querySelectorAll(".slidePlus__plus");
const pagEllipse = document.querySelectorAll(".paginator__ellipse");
const slideBrend = document.querySelector(".slideBrend__slideOne");
console.log(slideActiv);
console.log(slideBrend);
/* 
close.addEventListener("click", function () {
    addClass(slideActiv, "none");
  clearClass(slideActiv, "active");
  addClass(slideBrend, "active");
}); */

const changeEllipse = () => {
  for (ellipse of pagEllipse) {
    toggleClass(ellipse, "ellipse-choose");
  }
};

pagNext.addEventListener("click", function () {
  clickSlide();
  changeEllipse();
});

pagPrev.addEventListener("click", function () {
  clearClass(slidePlus[1], "active");
  addClass(slidePlus[0], "active");
  changeEllipse();
});
