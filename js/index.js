const blockPresentationMain = document.querySelector(".block_presentation");

const nav = document.querySelector("nav");

const divOne = document.querySelector(".div-one");
const divTwo = document.querySelector(".div-two");
const divThree = document.querySelector(".div-three");
const divFour = document.querySelector(".div-four");
const divFive = document.querySelector(".div-five");
const divSix = document.querySelector(".div-six");

const hoverLoa = document.querySelector(".loa");
const hoverPassLeaseLoa = document.querySelector(".passlease-loa");
const hoverLdd = document.querySelector(".ldd");
const hoverPassLeaseLdd = document.querySelector(".passlease-ldd");
const credit = document.querySelector(".credit");
const creditBallon = document.querySelector(".credit-ballon");

const svgLoa = document.getElementById("path10531-1");
const svgPassLeaseLoa = document.getElementById("path10531-2");
const svgLdd = document.getElementById("path10531-3");
const svgPassLeaseLdd = document.getElementById("path10531-4");
const svgCredit = document.getElementById("path10531-5");
const svgCreditBallon = document.getElementById("path10531-6");

boolBlockPresentationMain = true;

const mouseOverLoa = () => {
  hoverLoa.classList.toggle("active");
  hoverLoa.innerHTML = "Location avec Option d'Achat";
  divOne.classList.toggle("active");
  hoverLoa.style.paddingRight = "30px";
  svgLoa.style.fill = "#fff";
  svgLoa.style.opacity = "1";
};

const mouseOutLoa = () => {
  hoverLoa.innerHTML = "LOA";
  divOne.classList.remove("active");
  hoverLoa.style.paddingRight = "0px";
  svgLoa.style.fill = "#0066b1";
  svgLoa.style.opacity = "0.5";
};

hoverLoa.addEventListener("click", () => {
  window.location.href = "2-summary-loa.html";
});

const mouseOverPassLeaseLoa = () => {
  hoverPassLeaseLoa.classList.toggle("active");
  hoverPassLeaseLoa.innerHTML =
    "Location avec Option d'Achat puis reprise du <br> véhicule par BMW si l'option n'est pas levée";
  divTwo.classList.toggle("active");
  hoverPassLeaseLoa.style.paddingRight = "50px";
  svgPassLeaseLoa.style.fill = "#fff";
  svgPassLeaseLoa.style.opacity = "1";
};

const mouseOutPassLeaseLoa = () => {
  hoverPassLeaseLoa.innerHTML = "PassLease LOA";
  hoverPassLeaseLoa.style.fontSize = "1em";
  hoverPassLeaseLoa.style.paddingRight = "0px";
  divTwo.classList.remove("active");
  svgPassLeaseLoa.style.fill = "#0066b1";
  svgPassLeaseLoa.style.opacity = "0.5";
};

const mouseOverLdd = () => {
  hoverLdd.classList.toggle("active");
  hoverLdd.innerHTML = "Location Longue Durée sans option d'achat";
  divThree.classList.toggle("active");
  hoverLdd.style.paddingRight = "50px";
  svgLdd.style.fill = "#fff";
  svgLdd.style.opacity = "1";
};

const mouseOutLdd = () => {
  hoverLdd.innerHTML = "LDD";
  divThree.classList.remove("active");
  hoverLdd.style.paddingRight = "0px";
  svgLdd.style.fill = "#0066b1";
  svgLdd.style.opacity = "0.5";
};

const mouseOverPassLeaseLdd = () => {
  hoverPassLeaseLdd.classList.toggle("active");
  hoverPassLeaseLdd.innerHTML =
    "Location Longue Durée sans option d'achat <br> puis reprise du véhicule par BMW";
  divFour.classList.toggle("active");
  hoverPassLeaseLdd.style.paddingRight = "50px";
  svgPassLeaseLdd.style.fill = "#fff";
  svgPassLeaseLdd.style.opacity = "1";
};

const mouseOutPassLeaseLdd = () => {
  hoverPassLeaseLdd.innerHTML = "PassLease LDD";
  divFour.classList.remove("active");
  hoverPassLeaseLdd.style.paddingRight = "0px";
  svgPassLeaseLdd.style.fill = "#0066b1";
  svgPassLeaseLdd.style.opacity = "0.5";
};

const mouseOverCredit = () => {
  credit.classList.toggle("active");
  credit.innerHTML = "Véhicule BMW financé par Crédit";
  divFive.classList.toggle("active");
  credit.style.paddingRight = "30px";
  svgCredit.style.fill = "#fff";
  svgCredit.style.opacity = "1";
};

const mouseOutCredit = () => {
  credit.innerHTML = "Crédit";
  divFive.classList.toggle("active");
  credit.style.paddingRight = "0px";
  svgCredit.style.fill = "#0066b1";
  svgCredit.style.opacity = "0.5";
};

const mouseOverCreditBallon = () => {
  creditBallon.classList.toggle("active");
  creditBallon.innerHTML = "Véhicule BMW financé par Crédit Ballon";
  divSix.classList.toggle("active");
  creditBallon.style.paddingRight = "30px";
  svgCreditBallon.style.fill = "#fff";
  svgCreditBallon.style.opacity = "1";
};

const mouseOutCreditBallon = () => {
  creditBallon.innerHTML = "Crédit Ballon";
  divSix.classList.remove("active");
  creditBallon.style.paddingRight = "0px";
  svgCreditBallon.style.fill = "#0066b1";
  svgCreditBallon.style.opacity = "0.5";
};

/* Menu */

const check = () => {
  const divLogo = document.querySelector(".rowflex");
  const imgPresentation = document.querySelector(".img_presentation");
  const ombragePresentationMobile = document.querySelector(
    ".ombrage_responsive"
  );
  const input = document.querySelector(".checkbox-one").checked;
  const navBar = document.querySelector(".navbar");

  if (screen.width <= 768) {
    if (input === true) {
      imgPresentation.style.position = "static";
      ombragePresentationMobile.style.display = "none";
      divLogo.style.opacity = "0";
      navBar.style.borderBottom = "3px solid rgb(146 161 176 / 100%)";
      navBar.style.boxShadow = "0px 15px 10px -15px";

      if (boolBlockPresentationMain === true) {
        blockPresentationMain.style.display = "none";
        boolBlockPresentationMain = false;
      }
    } else {
      imgPresentation.style.position = "absolute";
      divLogo.style.opacity = "1";
      navBar.style.borderBottom = "none";
      navBar.style.boxShadow = "none";

      if (boolBlockPresentationMain === false) {
        blockPresentationMain.style.display = "block";
        boolBlockPresentationMain = true;
      }

      if (screen.width <= 768) {
        ombragePresentationMobile.style.display = "block";
      }
    }
  } else {
    nav.style.display = "none";
  }
};
