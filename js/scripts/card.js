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

function renderItem() {
  const main = document.querySelector(".main");
  const attributes = JSON.parse(localStorage.getItem("Item Data")).item;
  main.insertAdjacentHTML(
    "afterbegin",
    `<div class="main__product product">
  <div class="product__img">
    <img src="${attributes.img}" alt="" />
    <div class="product__price">${attributes.price} Р</div>
  </div>
  <div class="product__description">
    <div class="product__name">
      ${attributes.type} ${attributes.name}
    </div>
    <div class="product__metrics">
      <div class="product__like">
        <img src="/images/icons/favorite.svg" alt="" />
      </div>
      <div class="product__rating">
        <img src="/images/icons/rating.svg" alt="" />
      </div>
      
    </div>

    
    <div class="product__features features">
    <div class="product__features_n_availability">
      <p>Характеристики</p>
      <p>Наличие в магазинах</p>
    </div>
      <h2 class="features__country country">
        <div>Производитель</div>
        <div class="country__name">${attributes.country}</div>
      </h2>
      <hr />
      <h2 class="features__seats seats">
        <div>Количество мест, шт.</div>
        <div class="seats__amount">${attributes.seats}</div>
      </h2>
      <hr />
      <h2 class="features__power power">
        <div>Мощность, л.с.</div>
        <div class="power__amount">${attributes.power}</div>
      </h2>
      <hr />
      <h2 class="features__year year">
        <div>Год выпуска</div>
        <div class="year__date">${attributes.year}</div>
      </h2>
      <hr />
      <div class="features__buy"><button class="buy">Купить</button></div>
    </div>
    <div class="item__availability"></div>
  </div>
</div>`
  );
  const randomRating = Math.floor(Math.random() * 6);
  const metrics = main.querySelector(".product__metrics");
  const ratingContainer = document.createElement("div");
  metrics.insertAdjacentElement("beforeend", ratingContainer);

  for (let i = 0; i < 5 - randomRating; i++) {
    ratingContainer.insertAdjacentHTML(
      "afterbegin",
      `<img src="/images/icons/Star2.png" alt="rating">`
    );
  }
  for (let i = 0; i < randomRating; i++) {
    ratingContainer.insertAdjacentHTML(
      "afterbegin",
      `<img src="/images/icons/Star1.png" alt="rating">`
    );
  }
}
function renderItemsNavbar() {
  const itemsNavbar = document.querySelector(".items__navbar");
  itemsNavbar.insertAdjacentHTML(
    "afterbegin",
    `<ul class="navbar__list">
  <li class="navbar__list__item">О товаре</li>
  <li class="navbar__list__item">Характеристики</li>
  <li class="navbar__list__item">Отзывы</li>
  <li class="navbar__list__item">Самовывоз</li>
  <li class="navbar__list__item">Доставка</li>
  <li class="navbar__list__item">Сервис</li>
  <li class="navbar__list__item">Гарантия</li>
</ul>`
  );
}
function renderAvailabilitySection() {
  const avSection = document.querySelector(".availability");
  avSection.insertAdjacentHTML(
    "afterbegin",
    `<div class="availability__date">
  <input checked id="opros1" name="opros" type="radio" />
  <label for="opros1">Забрать сегодня</label>
  <input id="opros2" name="opros" type="radio" />
  <label for="opros2">Забрать в течение недели</label>
</div>
<ul class="availability__navigators">
  <li>Адрес</li>
  <li>Режим работы</li>
  <li>Доступно</li>
  <li>Количество</li>
  <li></li>
</ul>
<div class="availability__shops shops">
  <ul class="shops__shop">
    <li class="shops__address">Москва, ул. Науки 25</li>
    <li class="shops__working-hours">
      пн-сб: 08:00-19:00 <br />
      вс:09:00-17:00
    </li>
    <li class="shops__availability">В наличии</li>
    <li class="shops__amount">${Math.floor(Math.random() * 5)}</li>
    <li class="shops__buy"><button class="buy">Купить</button></li>
  </ul>
  <hr />
  <ul class="shops__shop">
    <li class="shops__address">Москва, ул. Южная 134</li>
    <li class="shops__working-hours">
      пн-сб: 08:00-19:00 <br />
      вс: 09:00-17:00
    </li>
    <li class="shops__availability">В наличии</li>
    <li class="shops__amount">${Math.floor(Math.random() * 5)}</li>
    <li class="shops__buy"><button class="buy">Купить</button></li>
  </ul>
  <hr />
  <ul class="shops__shop">
    <li class="shops__address">Санкт-Петербург, ул. Красная 19</li>
    <li class="shops__working-hours">
      пн-сб: 08:00-19:00 <br />
      вс: 09:00-17:00
    </li>
    <li class="shops__availability">В наличии</li>
    <li class="shops__amount">${Math.floor(Math.random() * 5)}</li>
    <li class="shops__buy"><button class="buy">Купить</button></li>
  </ul>
  <hr />
  <ul class="shops__shop">
    <li class="shops__address">Киев, ул Шевченко 167</li>
    <li class="shops__working-hours">
      пн-сб: 08:00-19:00 <br />
      вс: 09:00-17:00
    </li>
    <li class="shops__availability">В наличии</li>
    <li class="shops__amount">${Math.floor(Math.random() * 5)}</li>
    <li class="shops__buy"><button class="buy">Купить</button></li>
  </ul>
  <hr />
</div>`
  );
}

function renderAdditionals() {
  const additionals = document.querySelector(".additionals");
  additionals.insertAdjacentHTML(
    "afterbegin",
    `<h1>С этим товаром покупают</h1>
  <div class="additionals__list list"></div>`
  );
  const list = document.querySelector(".list");
  for (let i = 0; i < 4; i++) {
    //Here i'd like to create a random card generation because i dont know how recommendations system works
    let randomTypeIndex = Math.floor(Math.random() * 8);
    let randomPositionIndex = Math.floor(Math.random() * 12);
    const randomItem = Object.values(Object.values(data)[randomTypeIndex])[
      randomPositionIndex
    ];

    list.insertAdjacentHTML(
      "afterbegin",
      `<a href="card.html">
      <li
        class="list__item item"
        data-type="${randomItem.type}"
        data-name="${randomItem.name}"
        data-price="${randomItem.price}"
        data-drive="${randomItem.drive}"
        data-availability="${randomItem.availability}"
        data-power="${randomItem.power}"
        data-country="${randomItem.country}"
      >
        <div class="item__like">
          <img src="/images/icons/favorite.svg" alt="" />
        </div>
        <div class="item__img">
          <img src="/images/product-img/${randomItem.type}/${randomItem.name}.png" alt="" />
        </div>
        <div class="item__name">${randomItem.type} ${randomItem.name}</div>
        <div class="item__price">${randomItem.price} Р</div>
        <div class="item_addtocart">
          <button class="buy">
            <img src="/images/icons/cartWhite.png" alt="" />
          </button>
        </div>
      </li>
    </a>
    `
    );
  }
}
renderItem();
renderItemsNavbar();
renderAvailabilitySection();
renderAdditionals();
setCardForwardingData();
/*  */
