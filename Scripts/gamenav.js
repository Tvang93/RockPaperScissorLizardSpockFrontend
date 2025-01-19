function HomeNav() {
  homePlayBtn.classList = "inactive";
  let chosePvp = false;
  let chosePve = false;

  let pvpBtn = document.createElement("button");
  pvpBtn.innerText = "vs Player";

  let pveBtn = document.createElement("button");
  pveBtn.innerText = "vs Comp";

  let oneMatchBtn = document.createElement("button");
  oneMatchBtn.innerText = "Sudden Death";

  let fiveMatchBtn = document.createElement("button");
  fiveMatchBtn.innerText = "Best of 5";

  let sevenMatchBtn = document.createElement("button");
  sevenMatchBtn.innerText = "Best of 7";

  let backBtn = document.createElement("button");
  backBtn.innerText = "Back";
  backBtn.style.background = "red";

  pvpBtn.addEventListener("click", function(){
    Link("playerVsPlayer.html")
  })

  pveBtn.addEventListener("click", function () {
    chosePve = true;
    pvpBtn.classList = "inactive";
    pveBtn.classList = "inactive";
    homeBtnContainer.appendChild(oneMatchBtn);
    homeBtnContainer.appendChild(fiveMatchBtn);
    homeBtnContainer.appendChild(sevenMatchBtn);
    homeBtnContainer.appendChild(backBtn);
  });

  backBtn.addEventListener("click", function () {
    if (chosePve) {
      chosePve = false;
      pvpBtn.classList = "";
      pveBtn.classList = "";
      oneMatchBtn.remove();
      fiveMatchBtn.remove();
      sevenMatchBtn.remove();
    } else {
      pvpBtn.remove();
      pveBtn.remove();
      backBtn.remove();
      homePlayBtn.classList = "";
    }
  });

  oneMatchBtn.addEventListener("click", function () {
    Link("playerVsCompSD.html");
  });

  fiveMatchBtn.addEventListener("click", function () {
    Link("playerVsCompBO5.html");
  });

  sevenMatchBtn.addEventListener("click", function () {
    Link("playerVsCompBO7.html");
  });

  homeBtnContainer.appendChild(pvpBtn);
  homeBtnContainer.appendChild(pveBtn);
  homeBtnContainer.appendChild(backBtn);
}

function Link(url){
  const link = document.createElement("a");
  link.href = `./pages/${url}`;
  link.click();
}

export { HomeNav };
