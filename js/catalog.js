import { renderHeader, renderNavbar, renderFooter } from "./modules.js";
// import { forwardingAddress } from "./index.js";
// console.log(forwardingAddress);
renderHeader();
renderNavbar();
renderFooter();
//---------------------------------------------
//At this point, i desided to make all cards jetskis alike, cuz i just dont have any other card image references

//Maybe some day later , i ll find the images on the internet , and change all names , but not today, cuz there is still much to do

//Cuz there is all jetskis alike cards i desided to create general search parameters for all of them
// So first of all i made a function that renders it for all of them, cuz i dont want to repeat it

// I ll make two functions for this because im just and idiot who made this things separeted and now i cant return this together in one function

function renderFilters() {
  document.querySelector(".filters").insertAdjacentHTML(
    "afterbegin",
    `<li class="filters__item">
  <div class="filters__item_name"></div>
  <select
    name="drive"
    id="drive"
    class="filters__item__select select"
  >
    <option value="rear">Заднеприводный</option>
    <option value="front">Переднеприводный</option>
    <option value="all">Полноприводный</option>
  </select>
</li>
<li class="filters__item">
  <div class="filters__item_name"></div>
  <select name="" id="" class="filters__item__select select">
    <option value="100000">от 100 000</option>
    <option value="500000">от 500 000</option>
    <option value="2000000">от 2 000 000</option>
  </select>
</li>
<li class="filters__item">
  <ul>
    <li class="filter__by-grid">
      <img src="/images/icons/grid.svg" alt="" />
    </li>
    <li class="filter__by-list">
      <img src="/images/icons/list.svg" alt="" />
    </li>
  </ul>
</li>`
  );
}
//Second function
function renderMain() {
  document.querySelector(".main").insertAdjacentHTML(
    "afterbegin",
    `<div class="main__params params">
  <div class="params__name">ПАРАМЕТРЫ</div>
  <div class="params__availability availability">
    <p class="availability__name">Наличие</p>
    <div class="availability__inputs">
      <div>
        <input
          type="radio"
          name="av"
          id="availability1"
          value="true"
        />
        <label for="availability1">В наличии</label>
      </div>
      <div>
        <input
          type="radio"
          name="av"
          id="availability2"
          value="false"
        />
        <label for="availability2">Под заказ</label>
      </div>
    </div>
  </div>
  <div class="params__price">
    <p>Цена</p>
    <input
      type="range"
      min="10000"
      max="2000000"
      value="1000000"
      class="slider"
      id="myRange"
    />
    <label for="myRange" id="label"></label>
  </div>
  <div class="params__power">
    <div>
      <p>Мощность, л.с.</p>
      <select name="" id="">
        <option value="90">90</option>
        <option value="130">130</option>
        <option value="230">230</option>
      </select>
    </div>
  </div>
  <div class="params__country country">
    <p class="country__name">Страна</p>
    <div class="country__inputs">
      <div>
        <input
          type="radio"
          name="country"
          id="country1"
          value="Russia"
        />
        <label for="country1">Россия</label>
      </div>
      <div>
        <input
          type="radio"
          name="country"
          id="country2"
          value="Germany"
        />
        <label for="country2">Германия</label>
      </div>
      <div>
        <input
          type="radio"
          name="country"
          id="country3"
          value="China"
        />
        <label for="country3">Китай</label>
      </div>
      <div>
        <input
          type="radio"
          name="country"
          id="country4"
          value="USA"
        />
        <label for="country4">Америка</label>
      </div>
    </div>
  </div>
  <div class="params__submit"><button>Отправить</button></div>
</div>`
  );
}
function renderQuadbikes() {}
function renderLaunch() {}

function renderJetskis(models) {
  renderFilters();
  renderMain();
  const jetskisList = document.querySelector(".list");
  let test = Object.values(models);
  for (let jetski of test) {
    jetskisList.insertAdjacentHTML(
      "beforeend",
      `<li
      class="list__item item"
      data-name=${jetski.name}
      data-price=${jetski.price}
      data-drive=${jetski.drive}
      data-availability=${jetski.availability}
      data-power=${jetski.power}
      data-country=${jetski.country}
    >
      <div class="item__like">
        <img src="/images/icons/favorite.svg" alt="" />
      </div>
      <div class="item__img">
        <img src="/images/product-img/${jetski.name}.png" alt="" />
      </div>
      <div class="item__name">
        Гидроцикл ${jetski.name}
      </div>
      <div class="item__price">${jetski.price} Р</div>
      <div class="item_addtocart">
        <button>
          <img src="/images/icons/cartWhite.png" alt="" />
        </button>
      </div>
    </li>`
    );
  }
  const slider = document.getElementById("myRange");
  const output = document.getElementById("label");
  output.innerHTML = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function () {
    output.innerHTML = this.value;
  };
}

function renderBoats() {}
function renderAllTerrainVehicles() {}
function renderSnowmobiles() {}
function renderEngines() {}
function renderSpares() {}
//-------------------------------------------------------------------------------
//---------------------Jetskis---------------------------------------------------
const jetskis = {
  jetski1: {
    name: "BRP SeaDoo GTI 130hp",
    price: "1049500",
    drive: "front",
    availability: "true",
    power: "110",
    country: "USA",
  },
  jetski2: {
    name: "Spark 2-UP 900 Ho",
    price: "857666",
    drive: "rear",
    availability: "true",
    power: "91",
    country: "Russia",
  },
  jetski3: {
    name: "BRP SeaDoo GTX 300hp",
    price: "732345",
    drive: "all",
    availability: "true",
    power: "141",
    country: "China",
  },
  jetski4: {
    name: "BRP SeaDoo WAKE 230hp PRO",
    price: "1503150",
    drive: "front",
    availability: "true",
    power: "200",
    country: "Germany",
  },
  jetski5: {
    name: "Spark 2-UP 700",
    price: "505555",
    drive: "rear",
    availability: "true",
    power: "121",
    country: "China",
  },
  jetski6: {
    name: "BPR Scoobie-Doo 228",
    price: "770000",
    drive: "all",
    availability: "true",
    power: "200",
    country: "USA",
  },
  jetski7: {
    name: "RGD Eshkere 1330",
    price: "1800000",
    drive: "all",
    availability: "true",
    power: "257",
    country: "Germany",
  },
  jetski8: {
    name: "BRP SeaDoo Spark 60hp",
    price: "960755",
    drive: "all",
    availability: "true",
    power: "170",
    country: "Russia",
  },
  jetski9: {
    name: "PGD Scoobie-Doo 1400",
    price: "1666666",
    drive: "rear",
    availability: "true",
    power: "235",
    country: "Germany",
  },
  jetski10: {
    name: "BRP SeaDoo GTR 300hp",
    price: "120753",
    drive: "front",
    availability: "true",
    power: "167",
    country: "China",
  },
  jetski11: {
    name: "BRP SeaDoo GTI 155hp",
    price: "460798",
    drive: "rear",
    availability: "true",
    power: "85",
    country: "Russia",
  },
  jetski12: {
    name: "FBI SeaDoo GTX 666hp",
    price: "1999999",
    drive: "all",
    availability: "true",
    power: "300",
    country: "Germany",
  },
};
//----------------------------------------------------------------------------

// renderQuadbikes(quadBikes);
// renderLaunch(launch);

// const basotka = obertka();
// basotka(jetskis);

renderJetskis(jetskis);

// renderBoats(boats);
// renderAllTerrainVehicles(allTerrainVehicles);
// renderSnowmobiles(snowmobiles);
// renderEngines(engines);
// renderSpares(spares);
