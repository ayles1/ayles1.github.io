//From header to footer
import { renderHeader, renderNavbar, renderFooter } from "./modules.js";

renderHeader();
renderNavbar();
renderFooter();

let forwardingAddress = "Hello geys tp 5 cats";

const navbar = document.querySelector(".navbar");
navbar.addEventListener("click", (event) => {
  console.log("wefgjrgjrlgjrlgjrgrgklfke");
  if (event.target.closest("navbar__list__item")) {
    forwardingAddress = event.target.firstChild.innerHTML;
  }
});

export { forwardingAddress };
// function navbarForwardingHelper() {
//   let forwardingAddress;
//   const navbar = document.querySelector(".navbar");
//   navbar.addEventListener("click", (event) => {
//     console.log("Я жив");
//     if (event.target.closest("navbar__list__item")) {
//       forwardingAddress = event.target.firstChild.innerHTML;
//     }
//   });
//   return forwardingAddress;
// }

// export { navbarForwardingHelper };

let test = 10;
function makeA(letter) {
  return (letter += 5);
}
makeA(test);

console.log(test);
