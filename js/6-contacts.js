const rotateArrowOne = document.querySelector('#svg-arrow-one');
const rotateArrowTwo = document.querySelector('#svg-arrow-two');
const rotateArrowThree = document.querySelector('#svg-arrow-three');
const rotateArrowFour = document.querySelector('#svg-arrow-four');
const rotateArrowFive = document.querySelector('#svg-arrow-five');
const rotateArrowSix = document.querySelector('#svg-arrow-six');
const rotateArrowSeven = document.querySelector('#svg-arrow-seven');
const rotateArrowEight = document.querySelector('#svg-arrow-eight');
const rotateArrowNine = document.querySelector('#svg-arrow-nine');
const rotateArrowTen = document.querySelector('#svg-arrow-ten');
const blockCollapseOne = document.querySelector('.block_collapse_one');
const blockCollapseTwo = document.querySelector('.block_collapse_two');
const blockCollapseThree = document.querySelector('.block_collapse_three');
const blockCollapseFour = document.querySelector('.block_collapse_four');
const blockCollapseFive = document.querySelector('.block_collapse_five');
const blockCollapseSix = document.querySelector('.block_collapse_six');
const blockCollapseSeven = document.querySelector('.block_collapse_seven');
const blockCollapseEight = document.querySelector('.block_collapse_eight');
const blockCollapseNine = document.querySelector('.block_collapse_nine');
const blockCollapseTen = document.querySelector('.block_collapse_ten');


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


rotateArrowFive.addEventListener('click', (event) => {
    event.preventDefault();
    rotateArrowFive.classList.toggle("active");
    blockCollapseFive.classList.toggle("backgroundColor");
})

rotateArrowSix.addEventListener('click', (event) => {
    event.preventDefault();
    rotateArrowSix.classList.toggle("active");
    blockCollapseSix.classList.toggle("backgroundColor");
})

rotateArrowSeven.addEventListener('click', (event) => {
    event.preventDefault();
    rotateArrowSeven.classList.toggle("active");
    blockCollapseSeven.classList.toggle("backgroundColor");
})

rotateArrowEight.addEventListener('click', (event) => {
    event.preventDefault();
    rotateArrowEight.classList.toggle("active");
    blockCollapseEight.classList.toggle("backgroundColor");
})

rotateArrowNine.addEventListener('click', (event) => {
    event.preventDefault();
    rotateArrowNine.classList.toggle("active");
    blockCollapseNine.classList.toggle("backgroundColor");
})

rotateArrowTen.addEventListener('click', (event) => {
    event.preventDefault();
    rotateArrowTen.classList.toggle("active");
    blockCollapseTen.classList.toggle("backgroundColor");
})
