const blockPresentationMain = document.querySelector(
  ".block_presentation_main"
);
const rotateArrowOne = document.querySelector("#svg-arrow-one");
const rotateArrowTwo = document.querySelector("#svg-arrow-two");
const rotateArrowThree = document.querySelector("#svg-arrow-three");
const rotateArrowFour = document.querySelector("#svg-arrow-four");
const blockPrincipalOne = document.querySelector(".block_principal_one");
const blockPrincipalTwo = document.querySelector(".block_principal_two");
const blockPrincipalThree = document.querySelector(".block_principal_three");
const blockPrincipalFour = document.querySelector(".block_principal_four");
const blockCollapseOne = document.querySelectorAll(".block_collapse_one");
const blockCollapseTwo = document.querySelectorAll(".block_collapse_two");
const blockCollapseThree = document.querySelectorAll(".block_collapse_three");
const blockCollapseFour = document.querySelectorAll(".block_collapse_four");
const blockCollapse = document.querySelectorAll(".block_collapse");
const invisibleDivOne = document.querySelector(".div_invisible_one");
const invisibleDivTwo = document.querySelector(".div_invisible_two");
const invisibleDivThree = document.querySelector(".div_invisible_three");
const invisibleDivFour = document.querySelector(".div_invisible_four");
const magnifierOne = document.querySelector("#path7151");
const magnifierTwo = document.querySelector("#_svg_magnifier");
const svgWrite = document.querySelector("#path111027-8");
const envelopment = document.querySelector("#path8094");
const circleArrow = document.querySelector("#path2987-2");

boolBlockPresentationMain = true;

/* Collapse */

rotateArrowOne.addEventListener("click", (event) => {
  event.preventDefault();
  rotateArrowOne.classList.toggle("active");
  blockPrincipalOne.classList.toggle("active");
  invisibleDivOne.classList.toggle("active");
  magnifierOne.classList.toggle("active");
  magnifierTwo.classList.toggle("active");
  for (let i = 0; i < blockCollapse.length; i++) {
    blockCollapse[0].classList.toggle("active");
  }
  for (let i = 0; i < blockCollapseOne.length; i++) {
    blockCollapseOne[i].classList.toggle("backgroundColor");
    blockCollapseOne[i].style.transition = "0.7s ease-in-out 0s";
  }
});

rotateArrowTwo.addEventListener("click", (event) => {
  event.preventDefault();
  rotateArrowTwo.classList.toggle("active");
  blockPrincipalTwo.classList.toggle("active");
  invisibleDivTwo.classList.toggle("active");
  svgWrite.classList.toggle("active");
  for (let i = 0; i < blockCollapse.length; i++) {
    blockCollapse[1].classList.toggle("active");
  }
  for (let i = 0; i < blockCollapseTwo.length; i++) {
    blockCollapseTwo[i].classList.toggle("backgroundColor");
    blockCollapseTwo[i].style.transition = "0.7s ease-in-out 0s";
  }
});

rotateArrowThree.addEventListener("click", (event) => {
  event.preventDefault();
  rotateArrowThree.classList.toggle("active");
  blockPrincipalThree.classList.toggle("active");
  invisibleDivThree.classList.toggle("active");
  envelopment.classList.toggle("active");
  for (let i = 0; i < blockCollapse.length; i++) {
    blockCollapse[2].classList.toggle("active");
  }
  for (let i = 0; i < blockCollapseThree.length; i++) {
    blockCollapseThree[i].classList.toggle("backgroundColor");
    blockCollapseThree[i].style.transition = "0.7s ease-in-out 0s";
  }
});

rotateArrowFour.addEventListener("click", (event) => {
  event.preventDefault();
  rotateArrowFour.classList.toggle("active");
  blockPrincipalFour.classList.toggle("active");
  invisibleDivFour.classList.toggle("active");
  circleArrow.classList.toggle("active");
  for (let i = 0; i < blockCollapse.length; i++) {
    blockCollapse[3].classList.toggle("active");
  }
  for (let i = 0; i < blockCollapseFour.length; i++) {
    blockCollapseFour[i].classList.toggle("backgroundColor");
    blockCollapseFour[i].style.transition = "0.7s ease-in-out 0s";
  }
});

/* Menu */

const check = () => {
  const divLogo = document.querySelector(".rowflex");
  const imgPresentation = document.querySelector(".img_presentation");
  const ombragePresentation = document.querySelector(".ombrage_presentation");
  const imgPresentationMobile = document.querySelector(
    ".img_presentation_mobile"
  );
  const ombragePresentationMobile = document.querySelector(
    ".ombrage_presentation_mobile"
  );
  const input = document.querySelector(".checkbox-one").checked;
  const navBar = document.querySelector(".navbar");

  if (input === true) {
    imgPresentation.style.position = "static";
    ombragePresentation.style.display = "none";
    ombragePresentationMobile.style.display = "none";
    divLogo.style.opacity = "0";
    navBar.style.borderBottom = "3px solid rgb(146 161 176 / 100%)";
    navBar.style.boxShadow = "0px 15px 10px -15px";

    if (boolBlockPresentationMain === true) {
      blockPresentationMain.style.display = "none";
      boolBlockPresentationMain = false;
    }

    if (screen.width < 576) {
      imgPresentationMobile.style.position = "static";
      ombragePresentationMobile.style.display = "none";
    }
  } else {
    imgPresentation.style.position = "absolute";
    ombragePresentation.style.display = "block";
    divLogo.style.opacity = "1";
    navBar.style.borderBottom = "none";
    navBar.style.boxShadow = "none";

    if (boolBlockPresentationMain === false) {
      blockPresentationMain.style.display = "block";
      boolBlockPresentationMain = true;
    }

    if (screen.width < 576) {
      imgPresentationMobile.style.position = "absolute";
      ombragePresentation.style.display = "none";
      ombragePresentationMobile.style.display = "block";
      ombragePresentation.style.display = "none";
    }
  }
};
