// main.js
import { changeNavbarBackground } from "./header.js";
import { initializeSliders } from "./slider.js";

initializeSliders();

window.onscroll = function () {
  changeNavbarBackground();
};
