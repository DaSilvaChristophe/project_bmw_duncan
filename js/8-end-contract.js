const blockOneInfo = document.querySelector('.block_infos_one');
const blockTwoInfo = document.querySelector('.block_infos_two');
const blockThreeInfo = document.querySelector('.block_infos_three');

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