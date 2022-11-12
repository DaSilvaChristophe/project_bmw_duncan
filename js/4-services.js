const blockPresentationMain = document.querySelector(
  ".block_presentation_main"
);
const footer = document.querySelector("footer");
const rotateArrowOne = document.querySelector("#svg-arrow-one");
const rotateArrowTwo = document.querySelector("#svg-arrow-two");
const rotateArrowThree = document.querySelector("#svg-arrow-three");
const rotateArrowFour = document.querySelector("#svg-arrow-four");
const blockCollapseOne = document.querySelector(".block_collapse_one");
const blockCollapseTwo = document.querySelector(".block_collapse_two");
const blockCollapseThree = document.querySelector(".block_collapse_three");
const blockCollapseFour = document.querySelector(".block_collapse_four");

boolBlockPresentationMain = true;

/* Collapse */

rotateArrowOne.addEventListener("click", (event) => {
  event.preventDefault();
  rotateArrowOne.classList.toggle("active");
  blockCollapseOne.classList.toggle("backgroundColor");
});

rotateArrowTwo.addEventListener("click", (event) => {
  event.preventDefault();
  rotateArrowTwo.classList.toggle("active");
  blockCollapseTwo.classList.toggle("backgroundColor");
});

rotateArrowThree.addEventListener("click", (event) => {
  event.preventDefault();
  rotateArrowThree.classList.toggle("active");
  blockCollapseThree.classList.toggle("backgroundColor");
});

rotateArrowFour.addEventListener("click", (event) => {
  event.preventDefault();
  rotateArrowFour.classList.toggle("active");
  blockCollapseFour.classList.toggle("backgroundColor");
});

/* Menu */

const check = () => {
  const divLogo = document.querySelector(".rowflex");
  const imgPresentation = document.querySelector(".img_presentation");
  const ombragePresentation = document.querySelector(".ombrage_presentation");
  const ombragePresentationMobile = document.querySelector(
    ".ombrage_presentation_mobile"
  );
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
    ombragePresentation.style.display = "block";
    divLogo.style.opacity = "1";
    navBar.style.borderBottom = "none";
    navBar.style.boxShadow = "none";
    footer.style.visibility = "visible";

    if (boolBlockPresentationMain === false) {
      blockPresentationMain.style.display = "block";
      boolBlockPresentationMain = true;
    }
  }
};
