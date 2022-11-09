const BlockPresentationMain = document.querySelector(
  ".block_presentation_main"
);
const footer = document.querySelector("footer");
const blockOneInfo = document.querySelector(".block_infos_one");
const blockTwoInfo = document.querySelector(".block_infos_two");
const blockThreeInfo = document.querySelector(".block_infos_three");

const ligneDashedOne = document.querySelector("#ligne-dashed-one");
const ligneDashedTwo = document.querySelector("#ligne-dashed-two");
const ligneDashedThree = document.querySelector("#ligne-dashed-three");
const ligneDashedFour = document.querySelector("#ligne-dashed-four");
const ligneDashedFive = document.querySelector("#ligne-dashed-five");

const svgCircleLigneOne = document.querySelector("#svg-circle-lign-one");
const svgCircleLigneTwo = document.querySelector("#svg-circle-lign-two");
const svgCircleLigneThree = document.querySelector("#svg-circle-lign-three");

const svgCircleOne = document.querySelector("#svg-circle-one");
const svgCircleTwo = document.querySelector("#svg-circle-two");
const svgCircleThree = document.querySelector("#svg-circle-three");

const svgEnvelope = document.querySelector("#svg-envelope");
const svgForm = document.querySelector("#svg-form");

boolBlockPresentationMain = true;

boolClickCircleSvgOne = false;
boolClickCircleSvgTwo = false;
boolClickCircleSvgThree = false;

/* Events Click */

const clickCircleSvgOne = () => {
  if (screen.width <= 768) {
    blockOneInfo.style.opacity = "1";
    blockOneInfo.style.visibility = "visible";
    blockTwoInfo.style.opacity = "0";
    blockThreeInfo.style.opacity = "0";
    svgCircleTwo.classList.remove("active");
    svgEnvelope.classList.remove("active");
    svgCircleLigneTwo.classList.remove("activeCircleBlue");
    ligneDashedTwo.classList.remove("activeCircleBlue");
    ligneDashedThree.classList.remove("activeCircleBlue");
    ligneDashedFour.classList.remove("activeCircleBlue");
    svgCircleThree.classList.remove("active");
    svgForm.classList.remove("active");
    svgCircleLigneThree.classList.remove("activeCircleGrey");
    ligneDashedTwo.classList.remove("activeCircleGrey");
    ligneDashedThree.classList.remove("activeCircleGrey");
    ligneDashedFour.classList.remove("activeCircleGrey");
    ligneDashedFive.classList.remove("activeCircleGrey");
  } else {
    blockOneInfo.style.opacity = "1";
    blockTwoInfo.style.opacity = "0";
    blockThreeInfo.style.opacity = "0";
  }
};

const clickCircleSvgTwo = () => {
  if (screen.width <= 768) {
    if (
      blockOneInfo.style.visibility === "visible" ||
      (boolClickCircleSvgTwo === false && boolClickCircleSvgThree === false)
    ) {
      blockOneInfo.style.visibility = "hidden";
      blockTwoInfo.style.opacity = "1";
      svgCircleTwo.classList.toggle("active");
      svgEnvelope.classList.toggle("active");
      svgCircleLigneTwo.classList.toggle("activeCircleBlue");
      ligneDashedTwo.classList.toggle("activeCircleBlue");
      ligneDashedThree.classList.toggle("activeCircleBlue");
      ligneDashedFour.classList.toggle("activeCircleBlue");
      boolClickCircleSvgOne = true;
      boolClickCircleSvgTwo = true;
    } else if (
      boolClickCircleSvgTwo === true &&
      boolClickCircleSvgThree === true
    ) {
      blockOneInfo.style.visibility = "visible";
      blockOneInfo.style.opacity = "1";
      blockTwoInfo.style.opacity = "0";
      blockThreeInfo.style.opacity = "0";
      svgCircleTwo.classList.remove("active");
      svgEnvelope.classList.remove("active");
      svgCircleLigneTwo.classList.remove("activeCircleBlue");
      ligneDashedTwo.classList.remove("activeCircleBlue");
      ligneDashedThree.classList.remove("activeCircleBlue");
      ligneDashedFour.classList.remove("activeCircleBlue");
      svgCircleThree.classList.remove("active");
      svgForm.classList.remove("active");
      svgCircleLigneThree.classList.remove("activeCircleGrey");
      ligneDashedTwo.classList.remove("activeCircleGrey");
      ligneDashedThree.classList.remove("activeCircleGrey");
      ligneDashedFour.classList.remove("activeCircleGrey");
      ligneDashedFive.classList.remove("activeCircleGrey");
      boolClickCircleSvgTwo = false;
      boolClickCircleSvgThree = false;
    } else if (
      blockOneInfo.style.visibility === "hidden" &&
      boolClickCircleSvgTwo === true &&
      boolClickCircleSvgThree === true
    ) {
      blockOneInfo.style.visibility = "hidden";
      blockTwoInfo.style.opacity = "1";
      svgCircleTwo.classList.toggle("active");
      svgEnvelope.classList.toggle("active");
      svgCircleLigneTwo.classList.toggle("activeCircleBlue");
      ligneDashedTwo.classList.toggle("activeCircleBlue");
      ligneDashedThree.classList.toggle("activeCircleBlue");
      ligneDashedFour.classList.toggle("activeCircleBlue");
      svgCircleThree.classList.remove("active");
      svgForm.classList.remove("active");
      svgCircleLigneThree.classList.remove("activeCircleGrey");
      ligneDashedTwo.classList.remove("activeCircleGrey");
      ligneDashedThree.classList.remove("activeCircleGrey");
      ligneDashedFour.classList.remove("activeCircleGrey");
      ligneDashedFive.classList.remove("activeCircleGrey");
      boolClickCircleSvgTwo = true;
      boolClickCircleSvgThree = false;
    } else {
      blockOneInfo.style.visibility = "visible";
      blockTwoInfo.style.opacity = "0";
      svgCircleTwo.classList.remove("active");
      svgEnvelope.classList.remove("active");
      svgCircleLigneTwo.classList.remove("activeCircleBlue");
      ligneDashedTwo.classList.remove("activeCircleBlue");
      ligneDashedThree.classList.remove("activeCircleBlue");
      ligneDashedFour.classList.remove("activeCircleBlue");
      boolClickCircleSvgOne = false;
      boolClickCircleSvgTwo = false;
    }

    console.log(boolClickCircleSvgTwo);
  } else {
    blockTwoInfo.style.opacity = "1";
    blockOneInfo.style.opacity = "0";
    blockThreeInfo.style.opacity = "0";
  }
};

const clickCircleSvgThree = () => {
  if (screen.width <= 768) {
    if (
      blockOneInfo.style.visibility === "hidden" &&
      boolClickCircleSvgTwo === true &&
      boolClickCircleSvgThree === false
    ) {
      blockOneInfo.style.visibility = "hidden";
      blockThreeInfo.style.opacity = "1";
      svgCircleThree.classList.toggle("active");
      svgForm.classList.toggle("active");
      svgCircleLigneThree.classList.toggle("activeCircleGrey");
      ligneDashedTwo.classList.toggle("activeCircleGrey");
      ligneDashedThree.classList.toggle("activeCircleGrey");
      ligneDashedFour.classList.toggle("activeCircleGrey");
      ligneDashedFive.classList.toggle("activeCircleGrey");
      blockOneInfo.style.opacity = "0";
      blockTwoInfo.style.opacity = "0";
      boolClickCircleSvgThree = true;
    } else if (
      boolClickCircleSvgTwo === true &&
      boolClickCircleSvgThree === true
    ) {
      blockOneInfo.style.visibility = "visible";
      blockOneInfo.style.opacity = "1";
      blockTwoInfo.style.opacity = "0";
      blockThreeInfo.style.opacity = "0";
      svgCircleTwo.classList.remove("active");
      svgEnvelope.classList.remove("active");
      svgCircleLigneTwo.classList.remove("activeCircleBlue");
      ligneDashedTwo.classList.remove("activeCircleBlue");
      ligneDashedThree.classList.remove("activeCircleBlue");
      ligneDashedFour.classList.remove("activeCircleBlue");
      svgCircleThree.classList.remove("active");
      svgForm.classList.remove("active");
      svgCircleLigneThree.classList.remove("activeCircleGrey");
      ligneDashedTwo.classList.remove("activeCircleGrey");
      ligneDashedThree.classList.remove("activeCircleGrey");
      ligneDashedFour.classList.remove("activeCircleGrey");
      ligneDashedFive.classList.remove("activeCircleGrey");
      boolClickCircleSvgTwo = false;
      boolClickCircleSvgThree = false;
    } else if (
      (boolClickCircleSvgTwo === false && boolClickCircleSvgThree === false) ||
      (blockOneInfo.style.visibility === "visble" &&
        boolClickCircleSvgTwo === false &&
        boolClickCircleSvgThree === false)
    ) {
      blockOneInfo.style.visibility = "hidden";
      blockThreeInfo.style.opacity = "1";
      svgCircleThree.classList.toggle("active");
      svgForm.classList.toggle("active");
      svgCircleLigneThree.classList.toggle("activeCircleGrey");
      ligneDashedTwo.classList.toggle("activeCircleGrey");
      ligneDashedThree.classList.toggle("activeCircleGrey");
      ligneDashedFour.classList.toggle("activeCircleGrey");
      ligneDashedFive.classList.toggle("activeCircleGrey");
      blockOneInfo.style.opacity = "0";
      blockTwoInfo.style.opacity = "0";
      svgCircleTwo.classList.toggle("active");
      svgEnvelope.classList.toggle("active");
      svgCircleLigneTwo.classList.toggle("activeCircleBlue");
      ligneDashedTwo.classList.toggle("activeCircleBlue");
      ligneDashedThree.classList.toggle("activeCircleBlue");
      ligneDashedFour.classList.toggle("activeCircleBlue");
      boolClickCircleSvgThree = true;
      boolClickCircleSvgTwo = true;
    }

    console.log(boolClickCircleSvgThree);
  } else {
    blockThreeInfo.style.opacity = "1";
    blockOneInfo.style.opacity = "0";
    blockTwoInfo.style.opacity = "0";
  }
};

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
    footer.style.visibility = "hidden";
    navBar.style.borderBottom = "3px solid rgb(146 161 176 / 100%)";
    navBar.style.boxShadow = "0px 15px 10px -15px";

    if (boolBlockPresentationMain === true) {
      BlockPresentationMain.style.display = "none";
      boolBlockPresentationMain = false;
    }
  } else {
    imgPresentation.style.position = "absolute";
    divLogo.style.opacity = "1";
    navBar.style.borderBottom = "none";
    navBar.style.boxShadow = "none";
    footer.style.visibility = "visible";

    if (boolBlockPresentationMain === false) {
      BlockPresentationMain.style.display = "block";
      boolBlockPresentationMain = true;
    }

    if (screen.width >= 768) {
      ombragePresentation.style.display = "block";
    }
  }
};

/* const mouseOverBlockOne = () => {
  blockOneInfo.style.opacity = "1";
  blockOneInfo.style.transition = "0.7s ease-in-out 0s";
};

const mouseOutBlockOne = () => {
  blockTwoInfo.style.opacity = "0";
  blockThreeInfo.style.opacity = "0";
  blockOneInfo.style.transition = "0.7s ease-in-out 0s";
};

const mouseOverBlockTwo = () => {
  blockTwoInfo.style.opacity = "1";
  blockTwoInfo.style.transition = "0.7s ease-in-out 0s";
};

const mouseOutBlockTwo = () => {
  blockOneInfo.style.opacity = "0";
  blockThreeInfo.style.opacity = "0";
  blockTwoInfo.style.transition = "0.7s ease-in-out 0s";
};

const mouseOverBlockThree = () => {
  blockThreeInfo.style.opacity = "1";
  blockThreeInfo.style.transition = "0.7s ease-in-out 0s";
};

const mouseOutBlockThree = () => {
  blockOneInfo.style.opacity = "0";
  blockTwoInfo.style.opacity = "0";
  blockThreeInfo.style.transition = "0.7s ease-in-out 0s";
}; */
