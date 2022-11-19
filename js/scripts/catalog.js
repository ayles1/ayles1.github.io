import {
  renderHeader,
  renderNavbar,
  renderFooter,
  renderAddToCart,
  setCatalogForwaringAddress,
  setCardForwardingData,
} from "../modules/methods.js";

import { data } from "../modules/data.js";

// import { forwardingAddress } from "./index.js";
// console.log(forwardingAddress);
renderHeader();
renderNavbar();
renderFooter();
setCatalogForwaringAddress();

//---------------------------------------------
//At this point, i desided to make all cards jetskis alike, cuz i just dont have any other card image references

//Maybe some day later , i ll find the images on the internet , and change all names , but not today, cuz there is still much to do

//Cuz there is all jetskis alike cards i desided to create general search parameters for all of them
// So first of all i made a function that renders it for all of them, cuz i dont want to repeat it

// I ll make two functions for this because im just and idiot who made this things separeted and now i cant return this together in one function

function renderFilters() {
  const filters = document.querySelector(".filters");
  filters.insertAdjacentHTML(
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
  const selects = document.querySelectorAll("select");
  for (let select of selects) {
    select.addEventListener("input", () => {
      let items = Array.from(document.querySelectorAll(".item"));
      items.forEach((item) => {
        if (
          item.dataset.drive === select.value &&
          item.dataset.price <= select.value
        ) {
          item.style.display = "flex";
        } else {
          item.parentElement.style.display = "none";
        }
      });
    });
  }
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
        checked
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
        <option value="90">До 90 л.с.</option>
        <option value="130">До 140 л.с</option>
        <option value="230">До 230 л.с</option>
        <option value="300">До 300 л.с</option>
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
  //Here is one of the most hardest blocks where i render items by their filters
  // 45 lines , up to 195
  const main = document.querySelector(".main");
  const inputs = main.querySelectorAll("input");
  const button = main.querySelector(".params__submit");
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
      button.firstChild.style.backgroundColor = "#1c62cd";
      button.firstChild.style.color = "#fff";
      button.classList.add("ready");
    });
  }

  button.addEventListener("click", () => {
    //preparing inputs value
    const inputs = main.querySelectorAll("input");
    let avValue;
    let countryValue;
    const priceValue = document.getElementById("myRange").value;
    const powerValue = main.querySelector("select").value;

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].checked) {
        if (inputs[i].name == "country") {
          countryValue = inputs[i].value;
        } else if (inputs[i].name == "av") {
          avValue = inputs[i].value;
        }
      }
    }
    //clicking submit button
    if (button.classList.contains("ready")) {
      let items = Array.from(document.querySelectorAll(".item"));
      items.forEach((item) => {
        if (
          item.dataset.availability == avValue &&
          item.dataset.country == countryValue &&
          +item.dataset.price <= +priceValue &&
          +item.dataset.power <= +powerValue
        ) {
          item.style.display = "flex";
        } else {
          item.parentElement.style.display = "none";
        }
      });
    }
  });
}
//----------------Done :) -----------------------------

//

function renderQuadbikes(models) {
  renderFilters();
  renderMain();

  //some eventListeners
  const filterbyGrid = document.querySelector(".filter__by-grid");
  const filiterbyList = document.querySelector(".filter__by-list");
  const name = document.querySelector(".products__name");
  name.innerHTML = "Квадроциклы";
  filterbyGrid.addEventListener("click", () => {
    quadbikesList.style.display = "grid";
  });
  filiterbyList.addEventListener("click", () => {
    quadbikesList.style.display = "block";
  });
  //---------------------
  const quadbikesList = document.querySelector(".list");
  let values = Object.values(models);
  for (let quadbike of values) {
    quadbikesList.insertAdjacentHTML(
      "beforeend",
      `<a href="card.html">
      <li
      class="list__item item"
      data-type='${quadbike.type}'
      data-name='${quadbike.name}'
      data-price='${quadbike.price}'
      data-drive='${quadbike.drive}'
      data-availability='${quadbike.availability}'
      data-power=${quadbike.power}
      data-country='${quadbike.country}'
    >
      <div class="item__like">
        <img src="/images/icons/favorite.svg" alt="" />
      </div>
      <div class="item__img">
        <img src="/images/product-img/${quadbike.type}/${quadbike.name}.png" alt="" />
      </div>
      <div class="item__name">
       Квадроцикл ${quadbike.name}
      </div>
      <div class="item__price">${quadbike.price} Р</div>
      <div class="item_addtocart">
        <button class='buy'>
          <img src="/images/icons/cartWhite.png" alt="" />
        </button>
      </div>
    </li>
      </a>`
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

//-----------------Launch---------------------
function renderLaunch(models) {
  renderFilters();
  renderMain();

  //some eventListeners
  const filterbyGrid = document.querySelector(".filter__by-grid");
  const filiterbyList = document.querySelector(".filter__by-list");
  const name = document.querySelector(".products__name");
  name.innerHTML = "Катера";
  filterbyGrid.addEventListener("click", () => {
    launchList.style.display = "grid";
  });
  filiterbyList.addEventListener("click", () => {
    launchList.style.display = "block";
  });
  //---------------------
  const launchList = document.querySelector(".list");
  let values = Object.values(models);
  for (let launch of values) {
    launchList.insertAdjacentHTML(
      "beforeend",
      `<a href="card.html">
      <li
      class="list__item item"
      data-type='${launch.type}'
      data-name='${launch.name}'
      data-price='${launch.price}'
      data-drive='${launch.drive}'
      data-availability='${launch.availability}'
      data-power=${launch.power}
      data-country='${launch.country}'
    >
      <div class="item__like">
        <img src="/images/icons/favorite.svg" alt="" />
      </div>
      <div class="item__img">
        <img src="/images/product-img/${launch.type}/${launch.name}.png" alt="" />
      </div>
      <div class="item__name">
        Катер ${launch.name}
      </div>
      <div class="item__price">${launch.price} Р</div>
      <div class="item_addtocart">
        <button class='buy'>
          <img src="/images/icons/cartWhite.png" alt="" />
        </button>
      </div>
    </li>
      </a>`
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

function renderJetskis(models) {
  renderFilters();
  renderMain();

  //some eventListeners
  const filterbyGrid = document.querySelector(".filter__by-grid");
  const filiterbyList = document.querySelector(".filter__by-list");
  const name = document.querySelector(".products__name");
  name.innerHTML = "Гидроциклы";
  filterbyGrid.addEventListener("click", () => {
    jetskisList.style.display = "grid";
  });
  filiterbyList.addEventListener("click", () => {
    jetskisList.style.display = "block";
  });
  //---------------------
  const jetskisList = document.querySelector(".list");
  let values = Object.values(models);
  for (let jetski of values) {
    jetskisList.insertAdjacentHTML(
      "beforeend",
      `<a href="card.html">
      <li
      class="list__item item"
      data-type='${jetski.type}'
      data-name='${jetski.name}'
      data-price='${jetski.price}'
      data-drive='${jetski.drive}'
      data-availability='${jetski.availability}'
      data-power=${jetski.power}
      data-country='${jetski.country}'
    >
      <div class="item__like">
        <img src="/images/icons/favorite.svg" alt="" />
      </div>
      <div class="item__img">
        <img src="/images/product-img/${jetski.type}/${jetski.name}.png" alt="" />
      </div>
      <div class="item__name">
        Гидроцикл ${jetski.name}
      </div>
      <div class="item__price">${jetski.price} Р</div>
      <div class="item_addtocart">
        <button class='buy'>
          <img src="/images/icons/cartWhite.png" alt="" />
        </button>
      </div>
    </li>
     </a>`
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

function renderBoats(models) {
  renderFilters();
  renderMain();

  //some eventListeners
  const filterbyGrid = document.querySelector(".filter__by-grid");
  const filiterbyList = document.querySelector(".filter__by-list");
  const name = document.querySelector(".products__name");
  name.innerHTML = "Лодки";
  filterbyGrid.addEventListener("click", () => {
    boatsList.style.display = "grid";
  });
  filiterbyList.addEventListener("click", () => {
    boatsList.style.display = "block";
  });
  //---------------------
  const boatsList = document.querySelector(".list");
  let values = Object.values(models);
  for (let boat of values) {
    boatsList.insertAdjacentHTML(
      "beforeend",
      `<a href="card.html">
      <li
        class="list__item item"
        data-type='${boat.type}'
        data-name='${boat.name}'
        data-price='${boat.price}'
        data-drive='${boat.drive}'
        data-availability='${boat.availability}'
        data-power=${boat.power}
        data-country='${boat.country}'
      >
        <div class="item__like">
          <img src="/images/icons/favorite.svg" alt="" />
        </div>
        <div class="item__img">
          <img src="/images/product-img/${boat.type}/${boat.name}.png" alt="" />
        </div>
        <div class="item__name">
         Лодка ${boat.name}
        </div>
        <div class="item__price">${boat.price} Р</div>
        <div class="item_addtocart">
          <button class='buy'>
            <img src="/images/icons/cartWhite.png" alt="" />
          </button>
        </div>
      </li>
      </a>`
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

//----------------All Terrain Vehicles------------------------------------

function renderAllTerrainVehicles(models) {
  renderFilters();
  renderMain();

  //some eventListeners
  const filterbyGrid = document.querySelector(".filter__by-grid");
  const filiterbyList = document.querySelector(".filter__by-list");
  const name = document.querySelector(".products__name");
  name.innerHTML = "Вездеходы";
  filterbyGrid.addEventListener("click", () => {
    allTerrainVehiclesList.style.display = "grid";
  });
  filiterbyList.addEventListener("click", () => {
    allTerrainVehiclesList.style.display = "block";
  });
  //---------------------
  const allTerrainVehiclesList = document.querySelector(".list");
  let values = Object.values(models);
  for (let vehicle of values) {
    allTerrainVehiclesList.insertAdjacentHTML(
      "beforeend",
      `<a href="card.html">
      <li
        class="list__item item"
        data-type='${vehicle.type}'
        data-name='${vehicle.name}'
        data-price='${vehicle.price}'
        data-drive='${vehicle.drive}'
        data-availability='${vehicle.availability}'
        data-power=${vehicle.power}
        data-country='${vehicle.country}'
      >
        <div class="item__like">
          <img src="/images/icons/favorite.svg" alt="" />
        </div>
        <div class="item__img">
          <img src="/images/product-img/${vehicle.type}/${vehicle.name}.png" alt="" />
        </div>
        <div class="item__name">
         Вездеход ${vehicle.name}
        </div>
        <div class="item__price">${vehicle.price} Р</div>
        <div class="item_addtocart">
          <button class='buy'>
            <img src="/images/icons/cartWhite.png" alt="" />
          </button>
        </div>
      </li>
      </a>`
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
//------------------------------------------------------------

//----------------Snowmobiles---------------------------------
function renderSnowmobiles(models) {
  renderFilters();
  renderMain();

  //some eventListeners
  const filterbyGrid = document.querySelector(".filter__by-grid");
  const filiterbyList = document.querySelector(".filter__by-list");
  const name = document.querySelector(".products__name");
  name.innerHTML = "Снегоходы";
  filterbyGrid.addEventListener("click", () => {
    snowmobilesList.style.display = "grid";
  });
  filiterbyList.addEventListener("click", () => {
    snowmobilesList.style.display = "block";
  });
  //---------------------
  const snowmobilesList = document.querySelector(".list");
  let values = Object.values(models);
  for (let snowmobile of values) {
    snowmobilesList.insertAdjacentHTML(
      "beforeend",
      `<a href="card.html>
      <li
        class="list__item item"
        data-type='${snowmobile.type}'
        data-name='${snowmobile.name}'
        data-price='${snowmobile.price}'
        data-drive='${snowmobile.drive}'
        data-availability='${snowmobile.availability}'
        data-power=${snowmobile.power}
        data-country='${snowmobile.country}'
      >
        <div class="item__like">
          <img src="/images/icons/favorite.svg" alt="" />
        </div>
        <div class="item__img">
          <img src="/images/product-img/${snowmobile.type}/${snowmobile.name}.png" alt="" />
        </div>
        <div class="item__name">
         Снегоход ${snowmobile.name}
        </div>
        <div class="item__price">${snowmobile.price} Р</div>
        <div class="item_addtocart">
          <button class='buy'>
            <img src="/images/icons/cartWhite.png" alt="" />
          </button>
        </div>
      </li>
      </a>`
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
//----------------------------------------------------------------

//----------------Engines----------------------------------------------

function renderEngines(models) {
  renderFilters();
  renderMain();

  //some eventListeners
  const filterbyGrid = document.querySelector(".filter__by-grid");
  const filiterbyList = document.querySelector(".filter__by-list");
  const name = document.querySelector(".products__name");
  name.innerHTML = "Двигатели";
  filterbyGrid.addEventListener("click", () => {
    enginesList.style.display = "grid";
  });
  filiterbyList.addEventListener("click", () => {
    enginesList.style.display = "block";
  });
  //---------------------
  const enginesList = document.querySelector(".list");
  let values = Object.values(models);
  for (let engine of values) {
    enginesList.insertAdjacentHTML(
      "beforeend",
      `<a href="card.html">
      <li
        class="list__item item"
        data-type='${engine.type}'
        data-name='${engine.name}'
        data-price='${engine.price}'
        data-drive='${engine.drive}'
        data-availability='${engine.availability}'
        data-power=${engine.power}
        data-country='${engine.country}'
      >
        <div class="item__like">
          <img src="/images/icons/favorite.svg" alt="" />
        </div>
        <div class="item__img">
          <img src="/images/product-img/${engine.type}/${engine.name}.png" alt="" />
        </div>
        <div class="item__name">
         Двигатель ${engine.name}
        </div>
        <div class="item__price">${engine.price} Р</div>
        <div class="item_addtocart">
          <button class='buy'>
            <img src="/images/icons/cartWhite.png" alt="" />
          </button>
        </div>
      </li>
      </a>`
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
//--------------------------------------------------------------------------------

//----------------Spares----------------------------------------------------------
function renderSpares(models) {
  renderFilters();
  renderMain();

  //some eventListeners
  const filterbyGrid = document.querySelector(".filter__by-grid");
  const filiterbyList = document.querySelector(".filter__by-list");
  const name = document.querySelector(".products__name");
  name.innerHTML = "Запчасти";
  filterbyGrid.addEventListener("click", () => {
    sparesList.style.display = "grid";
  });
  filiterbyList.addEventListener("click", () => {
    sparesList.style.display = "block";
  });
  //---------------------
  const sparesList = document.querySelector(".list");
  let values = Object.values(models);
  for (let spare of values) {
    sparesList.insertAdjacentHTML(
      "beforeend",
      `<a href="card.html">
      <li
        class="list__item item"
        data-type='${spare.type}'
        data-name='${spare.name}'
        data-price='${spare.price}'
        data-drive='${spare.drive}'
        data-availability='${spare.availability}'
        data-power=${spare.power}
        data-country='${spare.country}'
      >
        <div class="item__like">
          <img src="/images/icons/favorite.svg" alt="" />
        </div>
        <div class="item__img">
          <img src="/images/product-img/${spare.type}/${spare.name}.png" alt="" />
        </div>
        <div class="item__name">
         Запчасть ${spare.name}
        </div>
        <div class="item__price">${spare.price} Р</div>
        <div class="item_addtocart">
          <button class='buy'>
            <img src="/images/icons/cartWhite.png" alt="" />
          </button>
        </div>
      </li>
      </a>`
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

//--------------------------------------------------------------------

localStorage.getItem("forwardingAddress") === "Квадроциклы"
  ? renderQuadbikes(data.quadbikes)
  : localStorage.getItem("forwardingAddress") === "Катера"
  ? renderLaunch(data.launch)
  : localStorage.getItem("forwardingAddress") === "Гидроциклы"
  ? renderJetskis(data.jetskis)
  : localStorage.getItem("forwardingAddress") === "Лодки"
  ? renderBoats(data.boats)
  : localStorage.getItem("forwardingAddress") === "Вездеходы"
  ? renderAllTerrainVehicles(data.vehicles)
  : localStorage.getItem("forwardingAddress") === "Снегоходы"
  ? renderSnowmobiles(data.snowmobiles)
  : localStorage.getItem("forwardingAddress") === "Двигатели"
  ? renderEngines(data.engines)
  : localStorage.getItem("forwardingAddress") === "Запчасти"
  ? renderSpares(data.spares)
  : renderJetskis(data.jetskis);

renderAddToCart();
setCardForwardingData();
