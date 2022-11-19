//From header to footer
import {
  renderHeader,
  renderNavbar,
  renderFooter,
  setCatalogForwaringAddress,
  setCardForwardingData,
} from "../modules/methods.js";

import { data } from "../modules/data.js";

renderHeader();
renderNavbar();
renderFooter();

setCatalogForwaringAddress();
setCardForwardingData();

function renderSale() {
  const preview = document.querySelector(".preview");
  preview.insertAdjacentHTML(
    "beforeend",
    `<div class="preview__sale sale">
  <div class="sale__card card">
    <div class="card__header">
      <div class="card__alert">Акция</div>
      <div class="card__price">
        <div class="card__price_current">
          190 000
          <img src="/images/other/icons8-рубль-50.svg" alt="" />
        </div>
        <div class="card__price_previous">
          225 000 <img src="/images/other/Union.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="card__main">
      <img src="/images/product-img/Двигатель/Engine 1.png" alt="" />
      <div class="card__description">
        Лодочный мотор <br />
        Suzuki DF9.9BRS
      </div>
    </div>
  </div>
  <div class="sale__date">
    Акция действует до <span>31.11.2022</span>
  </div>
  </div>`
  );
}
function renderSearchCards(items) {
  const search = document.querySelector(".search__cards");
  for (let i = 0; i < 6; i++) {
    let currentItem = Object.values(Object.values(items)[i]);
    if (i === 3) {
      currentItem = Object.values(Object.values(items)[6]);
    }
    search.insertAdjacentHTML(
      "afterbegin",
      `<a href="catalog.html">
    <li class="search__cards__item item">
  <div class="item__container">
    <h1>${
      i === 3
        ? currentItem[0].type.replace(/$[1]/, "и")
        : currentItem[0].type + "ы"
    }</h1>
    <p>Подробнее ></p>
  </div>
  <div>
  <img src="/images/product-img/${currentItem[0].type}/${
        currentItem[0].name
      }.png" alt="" />
  </div>
  
</li>
    </a>`
    );
  }
  const searchItems = search.querySelectorAll(".item");
  for (let item of searchItems) {
    item.addEventListener("click", () => {
      localStorage.setItem(
        "forwardingAddress",
        item.firstElementChild.firstElementChild.innerHTML
      );
    });
  }
}

function renderPopular() {
  const popular = document.querySelector(".popular");
  popular.insertAdjacentHTML(
    "afterbegin",
    `<h1 class="popular__text">Популярные товары</h1>
  <ul class="popular__types">
    <li class="popular__types__item">Запчасти</li>
    <li class="popular__types__item">Моторы</li>
    <li class="popular__types__item">Шины</li>
    <li class="popular__types__item">Электроника</li>
    <li class="popular__types__item">Инструменты</li>
    <li class="popular__types__item">Аксессуары</li>
  </ul>
  <ul class="popular__list list">
    <li class="list__item item">
      <div class="item__like">
        <img src="/images/icons/favorite.svg" alt="" />
      </div>
      <div class="item__img">
        <img src="/images/product-img/backpack.png" alt="" />
      </div>
      <div class="item__name">Водонепроницаемый рюкзак</div>
      <div class="item__price">9 800 Р</div>
      <div class="item_addtocart">
        <button>
          <img src="/images/icons/cartWhite.png" alt="" />
        </button>
      </div>
    </li>
    <li class="list__item item">
      <div class="item__like">
        <img src="/images/icons/favorite.svg" alt="" />
      </div>
      <div class="item__img">
        <img src="/images/product-img/Jilet.png" alt="" />
      </div>
      <div class="item__name">
        Спасательный жилет BRP Men's Airflow PFD
      </div>
      <div class="item__price">6900 Р</div>
      <div class="item_addtocart">
        <button>
          <img src="/images/icons/cartWhite.png" alt="" />
        </button>
      </div>
    </li>
    <li class="list__item item">
      <div class="item__like">
        <img src="/images/icons/favorite.svg" alt="" />
      </div>
      <div class="item__img">
        <img src="/images/product-img/audiosystem.png" alt="" />
      </div>
      <div class="item__name">BRP Audio-Premium System</div>
      <div class="item__price">68 000 Р</div>
      <div class="item_addtocart">
        <button>
          <img src="/images/icons/cartWhite.png" alt="" />
        </button>
      </div>
    </li>
    <li class="list__item item">
      <div class="item__like">
        <img src="/images/icons/favorite.svg" alt="" />
      </div>
      <div class="item__img">
        <img src="/images/product-img/saveEquip.png" alt="" />
      </div>
      <div class="item__name">Спасательное снаряжение</div>
      <div class="item__price"></div>
      <div class="item_addtocart"></div>
    </li>
  </ul>
  <div class="popular__more">
    <button>Показать еще</button>
  </div>`
  );
}

function renderAdvert() {
  const advert = document.querySelector(".advert");
  advert.insertAdjacentHTML(
    "afterbegin",
    `<img src="/images/product-img/квадроцикл/Quadbike 2.png" alt="" />
  <img src="/images/product-img/Квадроцикл/Quadbike 1.png" alt="" />
  <div class="advert__text">
    CКИДКИ <br />
    на все запчасти <br />
    до 70%
  </div>
  <div class="advert__button"><a href="catalog.html">ПОСМОТЕТЬ ВСЕ</button></a>`
  );
  const button = advert.querySelector("a");
  button.addEventListener("click", () => {
    localStorage.setItem("forwardingAddress", "Запчасти");
  });
}

renderSale();
renderSearchCards(data);
renderPopular();
renderAdvert();
