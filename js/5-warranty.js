const blockPresentationMain = document.querySelector(
  ".block_presentation_main"
);
const footer = document.querySelector(
  "footer"
);
const rotateArrowOne = document.querySelector("#svg-arrow-one");
const rotateArrowTwo = document.querySelector("#svg-arrow-two");
const blockCollapseOne = document.querySelector(".block_collapse_one");
const blockCollapseTwo = document.querySelector(".block_collapse_two");
const blockCollapseOpenedOne = document.querySelector("#collapse-one");
const blockCollapseOpenedTwo = document.querySelector("#collapse-two");

boolBlockPresentationMain = true;

/* Collapse */

rotateArrowOne.addEventListener("click", (event) => {
  event.preventDefault();

  if (blockCollapseOpenedOne.style.display == "block") {
    blockCollapseOpenedOne.style.display = "none";
  } else {
    blockCollapseOpenedOne.style.display = "block";
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
  } else {
    blockCollapseOpenedTwo.style.display = "block";
  }

  rotateArrowOne.classList.remove("active");
  blockCollapseOne.classList.remove("backgroundColor");
  blockCollapseOpenedOne.style.display = "none";
  rotateArrowTwo.classList.toggle("active");
  blockCollapseTwo.classList.toggle("backgroundColor");
  blockCollapseTwo.style.transition = "0.7s ease-in-out 0s";
  blockCollapseOpenedTwo.style.transition = "0.2s ease-in-out 0s";
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
    footer.style.visibility = "hidden";
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
    footer.style.visibility = "visible";

    if (boolBlockPresentationMain === false) {
      blockPresentationMain.style.display = "block";
      boolBlockPresentationMain = true;
    }
    if (screen.width > 768) {
      ombragePresentation.style.display = "block";
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
