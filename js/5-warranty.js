const rotateArrowOne = document.querySelector('#svg-arrow-one');
const rotateArrowTwo = document.querySelector('#svg-arrow-two');
const blockCollapseOne = document.querySelector('.block_collapse_one');
const blockCollapseTwo = document.querySelector('.block_collapse_two');
const blockCollapseOpenedOne = document.querySelector('#collapse-one');
const blockCollapseOpenedTwo = document.querySelector('#collapse-two');


rotateArrowOne.addEventListener('click', (event) => {
    event.preventDefault();

    if(blockCollapseOpenedOne.style.display == "block") {
        blockCollapseOpenedOne.style.display = "none"
    } else {
        blockCollapseOpenedOne.style.display = "block"
    }

    rotateArrowTwo.classList.remove("active");
    blockCollapseTwo.classList.remove("backgroundColor");
    blockCollapseOpenedTwo.style.display = "none";
    rotateArrowOne.classList.toggle("active");
    blockCollapseOne.classList.toggle("backgroundColor");
    blockCollapseOne.style.transition = "0.7s ease-in-out 0s"
    blockCollapseOpenedOne.style.transition = "0.2s ease-in-out 0s"
})

rotateArrowTwo.addEventListener('click', (event) => {
    event.preventDefault();
   
    if(blockCollapseOpenedTwo.style.display == "block") {
        blockCollapseOpenedTwo.style.display = "none"
    } else {
        blockCollapseOpenedTwo.style.display = "block"
    }
    
    rotateArrowOne.classList.remove("active");
    blockCollapseOne.classList.remove("backgroundColor");
    blockCollapseOpenedOne.style.display = "none";
    rotateArrowTwo.classList.toggle("active");
    blockCollapseTwo.classList.toggle("backgroundColor");
    blockCollapseTwo.style.transition = "0.7s ease-in-out 0s"
    blockCollapseOpenedTwo.style.transition = "0.2s ease-in-out 0s"
})

