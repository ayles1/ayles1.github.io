import { renderHeader, renderNavbar, renderFooter } from "./modules.js";
renderHeader();
renderNavbar();
renderFooter();

function renderQuadbikes() {}
function renderLaunch() {}
function renderJetskis() {}
function renderBoats() {}
function renderAllTerrainVehicles() {}
function renderSnowmobiles() {}
function renderEngines() {}
function renderSpares() {}

var slider = document.getElementById("myRange");
var output = document.getElementById("label");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
};
