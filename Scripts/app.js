import { HomeNav } from "./gamenav.js"

const homeBtnContainer = document.getElementById("homeBtnContainer");
const homePlayBtn = document.getElementById("homePlayBtn");

const roundContainer = document.getElementById("roundContainer");
const roundNumber = document.getElementById("roundNumber");

homePlayBtn.addEventListener("click", function () {
  HomeNav()
});
