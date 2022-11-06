const rotateArrowOne = document.querySelector("#svg-arrow-one");
const rotateArrowTwo = document.querySelector("#svg-arrow-two");
const blockCollapseOne = document.querySelector(".block_collapse_one");
const blockCollapseTwo = document.querySelector(".block_collapse_two");
const blockCollapseOpenedOne = document.querySelector("#collapse-one");
const blockCollapseOpenedTwo = document.querySelector("#collapse-two");
const blockInfosOne = document.querySelector(".block_principal_infos_one");
const blockInfosTwo = document.querySelector(".block_principal_infos_two");

boolArrowOne = false;
boolArrowTwo = false;

/* Collapse */

rotateArrowOne.addEventListener("click", (event) => {
  event.preventDefault();

  if (blockCollapseOpenedOne.style.display == "block") {
    blockCollapseOpenedOne.style.display = "none";
    boolArrowOne = false;
  } else {
    blockCollapseOpenedOne.style.display = "block";
    boolArrowOne = true;
    boolArrowTwo = false;
  }

  rotateArrowTwo.classList.remove("active");
  blockCollapseTwo.classList.remove("backgroundColor");
  blockCollapseOpenedTwo.style.display = "none";
  rotateArrowOne.classList.toggle("active");
  blockCollapseOne.classList.toggle("backgroundColor");
  blockCollapseOne.style.transition = "0.7s ease-in-out 0s";
  blockCollapseOpenedOne.style.transition = "0.2s ease-in-out 0s";
});

rotateArrowTwo.addEventListener("click", (event) => {
  event.preventDefault();

  if (blockCollapseOpenedTwo.style.display == "block") {
    blockCollapseOpenedTwo.style.display = "none";
    boolArrowTwo = false;
  } else {
    blockCollapseOpenedTwo.style.display = "block";
    boolArrowTwo = true;
    boolArrowOne = false;
  }

  rotateArrowOne.classList.remove("active");
  blockCollapseOne.classList.remove("backgroundColor");
  blockCollapseOpenedOne.style.display = "none";
  rotateArrowTwo.classList.toggle("active");
  blockCollapseTwo.classList.toggle("backgroundColor");
  blockCollapseTwo.style.transition = "0.7s ease-in-out 0s";
  blockCollapseOpenedTwo.style.transition = "0.2s ease-in-out 0s";
});

/* Contact Mail (Button) */

const redirectMail = document.querySelector("button");

redirectMail.addEventListener("click", () => {
  window.location.href = "mailto:contact-finance@bmw.fr";
});

/* Menu */

const check = () => {
  const divLogo = document.querySelector(".rowflex");
  const imgPresentation = document.querySelector(".img_presentation");
  const ombragePresentation = document.querySelector(".ombrage_presentation");
  const input = document.querySelector(".checkbox-one").checked;
  const navBar = document.querySelector(".navbar");

  if (input === true) {
    imgPresentation.style.position = "static";
    ombragePresentation.style.display = "none";
    divLogo.style.opacity = "0";
    navBar.style.borderBottom = "3px solid rgb(146 161 176 / 100%)";
    navBar.style.boxShadow = "0px 15px 10px -15px";

    if (boolArrowOne === true && boolArrowTwo === false) {
      blockCollapseOpenedOne.style.display = "none";
    }
    if (boolArrowTwo === true && boolArrowOne === false) {
      blockCollapseOpenedTwo.style.display = "none";
    }
  } else {
    imgPresentation.style.position = "absolute";
    ombragePresentation.style.display = "block";
    divLogo.style.opacity = "1";
    navBar.style.borderBottom = "none";
    navBar.style.boxShadow = "none";

    if (boolArrowOne === true && boolArrowTwo === false) {
      blockCollapseOpenedOne.style.display = "block";
    }
    if (boolArrowTwo === true && boolArrowOne === false) {
      blockCollapseOpenedTwo.style.display = "block";
    }
  }
};

/* Chargement de Page */

window.addEventListener("load", () => {
  if (blockCollapseOpenedOne.style.display == "block") {
    blockCollapseOpenedOne.style.display = "none";
    boolArrowOne = false;
  } else {
    blockCollapseOpenedOne.style.display = "block";
    boolArrowOne = true;
    boolArrowTwo = false;
  }

  rotateArrowTwo.classList.remove("active");
  blockCollapseTwo.classList.remove("backgroundColor");
  blockCollapseOpenedTwo.style.display = "none";
  rotateArrowOne.classList.toggle("active");
  blockCollapseOne.classList.toggle("backgroundColor");
  blockCollapseOne.style.transition = "0.7s ease-in-out 0s";
  blockCollapseOpenedOne.style.transition = "0.2s ease-in-out 0s";
});
