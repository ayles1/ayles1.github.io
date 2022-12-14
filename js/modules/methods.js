import { modal } from "../scripts/modal.js";

function renderHeader() {
  const header = document.querySelector(".header");
  header.insertAdjacentHTML(
    "afterbegin",
    `<nav class="header__navbar nav">
      <ul class="nav__items">
        <li class="nav__item">Магазины</li>
        <li class="nav__item">Акции</li>
        <li class="nav__item">Доставка и оплата</li>
      </ul>
    </nav>
    <div class="header__logo">
    <a href="index.html"><img src="/images/icons/Logo.svg" alt="Logo" /></a>
    </div>
    <div class="header__current-location">
      <img src="/images/icons/location.svg" alt="#" />
      <div class="address">Москва, ул.Науки 25</div>
    </div>
    <div class="header__user user">
      <a href="#" class="user__favorite"
        ><img src="/images/icons/favorite.svg" alt=""
      /></a>
      <a href="#" class="user__profile"
        ><img src="/images/icons/account.svg" alt=""
      /></a>
      <a href="cart.html" class="user__cart"
        ><img src="/images/icons/cart.svg" alt=""
      />
      <div class="user__cart__amount"></div
      </a>
    </div>`
  );
  const burger = document.createElement("div");
  burger.classList.add("burger");
  burger.innerHTML = "<div class='burger__button'>&#9776;</div>";
  if (innerWidth < 865) {
    header.insertAdjacentElement("afterbegin", burger);
  }
  const button = document.querySelector(".burger__button");
  if (button) {
    button.addEventListener("click", () => {
      document.body.classList.toggle("burgered");
      button.style.textAlign = "end";
      burger.classList.toggle("active");
      if (burger.classList.contains("active")) {
        button.innerHTML = "X";
      } else {
        button.innerHTML = "&#9776;";
      }
      const navbar = document.querySelector(".navbar__list");
      navbar.classList.toggle("in-burger");
      // navbar.style.display = "flex";
      burger.insertAdjacentElement("beforeend", navbar);
    });
  }
  const cartAmount = document.querySelector(".user__cart__amount");
  if (localStorage.getItem("In Cart")) {
    cartAmount.innerHTML = JSON.parse(localStorage.getItem("In Cart")).length;
  } else {
    cartAmount.style.display = "none";
  }
}

function renderNavbar() {
  const navbar = document.querySelector(".navbar");
  navbar.insertAdjacentHTML(
    "afterbegin",
    `<ul class="navbar__list">
    <li class="navbar__list__item"><a href="catalog.html">Квадроциклы</a></li>
    <li class="navbar__list__item"><a href="catalog.html">Катера</a></li>
    <li class="navbar__list__item"><a href="catalog.html">Гидроциклы</a></li>
    <li class="navbar__list__item"><a href="catalog.html">Лодки</a></li>
    <li class="navbar__list__item"><a href="catalog.html">Вездеходы</a></li>
    <li class="navbar__list__item"><a href="catalog.html">Снегоходы</a></li>
    <li class="navbar__list__item"><a href="catalog.html">Двигатели</a></li>
    <li class="navbar__list__item"><a href="catalog.html">Запчасти</a></li>
  </ul>`
  );
}

function renderFooter() {
  const page = document.querySelector(".page__container");
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = `<div class="footer__spam spam">
  <div class="spam__text">
    Подпишитесь на нашу рассылку <br />
    и узнавайте о акция быстрее
  </div>
  <form action="" class="spam__form">
    <div class="input">
      <input type="text" placeholder="Введите ваш e-mail" />
    </div>
    <div class="button"><button>Отправить</button></div>
  </form>
</div>
<div class="footer__info info">
  <div class="">Информация</div>
  <div class="">О компании</div>
  <div class="">Контакты</div>
  <div class="">Акции</div>
  <div class="">Магазины</div>
  <div class="">Договор оферты</div>
</div>
<div class="footer__shop shop">
  <div class="">Интернет-магазин</div>
  <div class="">Доставка и самовывоз</div>
  <div class="">Оплата</div>
  <div class="">Возврат-обмен</div>
  <div class="">Новости</div>
  <div class="">Политика обработки персональных данных</div>
</div>
<div class="footer__socials">
  <a href="https:/instagram.com" target="_blank">
    <img src="/images/icons/instagram-sketched (1) 1.svg" alt="" />
  </a>
  <a href="http://vk.com" target="_blank" rel="noopener noreferrer">
    <img src="/images/icons/vk 1.svg" alt="" />
  </a>
  <a
    href="http://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/images/icons/facebook 1.svg" alt="" />
  </a>
  <a
    href="http://youtube.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src="/images/icons/youtube 1.svg" alt="" />
  </a>
</div>`;
  page.insertAdjacentElement("beforeend", footer);
}

function setCatalogForwaringAddress() {
  const navbar = document.querySelector(".navbar");
  let forwardingAddress;
  navbar.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      forwardingAddress = event.target.innerText;
      localStorage.setItem("forwardingAddress", forwardingAddress);
    }
  });
}

function setCardForwardingData() {
  const items = document.querySelectorAll(".item");
  for (let item of items) {
    let forwardingData;
    item.addEventListener("click", () => {
      forwardingData = item.dataset;
      forwardingData.seats = Math.floor(Math.random() * 4) + 1;
      forwardingData.year = Math.floor(
        Math.random() * (2022 - 1990 + 1) + 1990
      );
      forwardingData.img =
        item.children[1].firstElementChild.getAttribute("src");

      localStorage.setItem("Item Data", JSON.stringify(forwardingData));
    });
  }
}
// ЕБАНУТЫЕ ВЫКРУТАСЫ НИЖЕ , Я САМ ЕСЛИ ЧЕ УЖЕ ЧЕРЕЗ 10 МИН ПОСЛЕ НАПИСАНИЯ НЕ БУДУ ПОНИМАТЬ ЧЕ ПРОИСХОДИТ))
function renderAddToCart() {
  // const items = document.querySelectorAll(".item");
  const buttons = document.querySelectorAll(".buy");
  for (let i = 0; i < buttons.length; i++) {
    let data;
    let item = buttons[i].parentElement.parentElement;
    buttons[i].addEventListener("click", () => {
      buttons[i].parentElement.parentElement.parentElement.href =
        "javascript:void(0)";
      data = JSON.parse(localStorage.getItem("In Cart"));
      if (data) {
        let arr = item.dataset.type
          ? [...data, item.dataset]
          : [...data, JSON.parse(localStorage.getItem("Item Data"))];
        localStorage.setItem("In Cart", JSON.stringify(arr));
      } else {
        let arr = item.dataset.type
          ? [item.dataset]
          : [JSON.parse(localStorage.getItem("Item Data"))];
        localStorage.setItem("In Cart", JSON.stringify(arr));
      }
      const cartAmount = document.querySelector(".user__cart__amount");
      cartAmount.style.display = "block";
      cartAmount.innerHTML = JSON.parse(localStorage.getItem("In Cart")).length;
      let $modal = modal();
      $modal.open();
    });
  }
}

export {
  renderHeader,
  renderNavbar,
  renderFooter,
  renderAddToCart,
  setCatalogForwaringAddress,
  setCardForwardingData,
};
