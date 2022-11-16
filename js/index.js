//From header to footer
import { renderHeader, renderNavbar, renderFooter } from "./modules.js";

renderHeader();
renderNavbar();
renderFooter();

function setForwaringAddress() {
  const navbar = document.querySelector(".navbar");
  let forwardingAddress;
  navbar.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      forwardingAddress = event.target.innerText;
      localStorage.setItem("forwardingAddress", forwardingAddress);
    }
  });
}

setForwaringAddress();
