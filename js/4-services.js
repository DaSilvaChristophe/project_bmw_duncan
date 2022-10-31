const rotateArrowOne = document.querySelector('#svg-arrow-one');
const rotateArrowTwo = document.querySelector('#svg-arrow-two');
const rotateArrowThree = document.querySelector('#svg-arrow-three');
const rotateArrowFour = document.querySelector('#svg-arrow-four');
const blockCollapseOne = document.querySelector('.block_collapse_one');
const blockCollapseTwo = document.querySelector('.block_collapse_two');
const blockCollapseThree = document.querySelector('.block_collapse_three');
const blockCollapseFour = document.querySelector('.block_collapse_four');


rotateArrowOne.addEventListener('click', (event) => {
    event.preventDefault();
    rotateArrowOne.classList.toggle("active");
    blockCollapseOne.classList.toggle("backgroundColor");
})

rotateArrowTwo.addEventListener('click', (event) => {
    event.preventDefault();
    rotateArrowTwo.classList.toggle("active");
    blockCollapseTwo.classList.toggle("backgroundColor");
})

rotateArrowThree.addEventListener('click', (event) => {
    event.preventDefault();
    rotateArrowThree.classList.toggle("active");
    blockCollapseThree.classList.toggle("backgroundColor");
})

rotateArrowFour.addEventListener('click', (event) => {
    event.preventDefault();
    rotateArrowFour.classList.toggle("active");
    blockCollapseFour.classList.toggle("backgroundColor");
})
