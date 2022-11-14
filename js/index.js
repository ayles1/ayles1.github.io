//From header to footer
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
    <img src="/images/icons/Logo.svg" alt="Logo" />
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
    <a href="#" class="user__cart"
      ><img src="/images/icons/cart.svg" alt=""
    /></a>
  </div>`
  );
}

function renderNavbar() {
  const navbar = document.querySelector(".navbar");
  navbar.insertAdjacentHTML(
    "afterbegin",
    `<ul class="navbar__list">
  <li class="navbar__list__item"><a href="#">Квадроциклы</a></li>
  <li class="navbar__list__item"><a href="#">Катера</a></li>
  <li class="navbar__list__item"><a href="#">Гидроциклы</a></li>
  <li class="navbar__list__item"><a href="#">Лодки</a></li>
  <li class="navbar__list__item"><a href="#">Вездеходы</a></li>
  <li class="navbar__list__item"><a href="#">Снегоходы</a></li>
  <li class="navbar__list__item"><a href="#">Двигатели</a></li>
  <li class="navbar__list__item"><a href="#">Запчасти</a></li>
</ul>`
  );
}

renderHeader();
renderNavbar();
