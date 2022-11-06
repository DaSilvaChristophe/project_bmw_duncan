const BlockPresentationMain = document.querySelector('.block_presentation_main');
const blockOneInfo = document.querySelector('.block_infos_one');
const blockTwoInfo = document.querySelector('.block_infos_two');
const blockThreeInfo = document.querySelector('.block_infos_three');
const svgCircleOne = document.querySelector('#svg-circle-one')
const svgCircleTwo = document.querySelector('#svg-circle-two')
const svgCircleThree = document.querySelector('#svg-circle-three')

boolBlockPresentationMain = true

const testclick = () => {
  svgCircleTwo.classList.toggle('active');
  blockOneInfo.style.display = "none";

}



const mouseOverBlockOne = () => {
    blockOneInfo.style.opacity= "1"
    blockOneInfo.style.transition = "0.7s ease-in-out 0s"
  }

const mouseOutBlockOne = () => {
    blockTwoInfo.style.opacity= "0";
    blockThreeInfo.style.opacity= "0";
    blockOneInfo.style.transition = "0.7s ease-in-out 0s"
  }

const mouseOverBlockTwo = () => {
    blockTwoInfo.style.opacity= "1"
    blockTwoInfo.style.transition = "0.7s ease-in-out 0s"
  }

const mouseOutBlockTwo = () => {
    blockOneInfo.style.opacity= "0";
    blockThreeInfo.style.opacity= "0";
    blockTwoInfo.style.transition = "0.7s ease-in-out 0s"
  }

const mouseOverBlockThree = () => {
    blockThreeInfo.style.opacity= "1"
    blockThreeInfo.style.transition = "0.7s ease-in-out 0s"
}

const mouseOutBlockThree = () => {
    blockOneInfo.style.opacity= "0";
    blockTwoInfo.style.opacity= "0";
    blockThreeInfo.style.transition = "0.7s ease-in-out 0s"
}

/* Menu */

const check = () => {
  const divLogo = document.querySelector('.rowflex');
  const imgPresentation = document.querySelector('.img_presentation');
  const ombragePresentation = document.querySelector('.ombrage_presentation');
  const input = document.querySelector('.checkbox-one').checked;
  const navBar = document.querySelector('.navbar');

  if (input === true) {
      imgPresentation.style.position = "static";
      ombragePresentation.style.display = "none";
      divLogo.style.opacity = "0";
      navBar.style.borderBottom = "3px solid rgb(146 161 176 / 100%)";
      navBar.style.boxShadow = "0px 15px 10px -15px";

      if(boolBlockPresentationMain === true) {
        BlockPresentationMain.style.display = "none";
        boolBlockPresentationMain = false
      }
  } else {
      imgPresentation.style.position = "absolute";
      ombragePresentation.style.display = "block";
      divLogo.style.opacity= "1";
      navBar.style.borderBottom = "none";
      navBar.style.boxShadow = "none";

      if(boolBlockPresentationMain === false) {
        BlockPresentationMain.style.display = "block";
        boolBlockPresentationMain = true
      }
  }
}