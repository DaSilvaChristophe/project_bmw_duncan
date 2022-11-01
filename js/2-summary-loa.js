/* Block One "LES AVANTAGES DE VOTRE CONTRAT" */

const blockOne = document.querySelector('#block_one');
const titleOne = document.querySelector('.title_one');
const svgInch = document.querySelector('#svg-inch');
const svgInchOpacity = document.querySelector('#Groupe_20');

const  mouseOverBlockOne = () => {
    blockOne.style.background = "#0066B1";
    blockOne.style.opacity = "1";
    svgInch.style.fill = "#fff";
    svgInchOpacity.style.opacity= "1";
    titleOne.style.color = "#fff";
    }

const mouseOutBlockOne = () => {
    blockOne.style.background = "white";
    blockOne.style.opacity = "0.85";
    svgInch.style.fill = "black";
    svgInchOpacity.style.opacity= "0.5";
    titleOne.style.color = "black";
    }

blockOne.addEventListener('click', () => {
    window.location.href = "3-avantages-contract.html"
})

/* Block Two "VOS SERVICES" */

const blockTwo = document.querySelector('#block_two');
const titleTwo = document.querySelector('.title_two');
const svgWheel = document.querySelector('#svg-wheel');
const svgWheelOpacity = document.querySelector('#path7726');

const mouseOverBlockTwo = () => {
    blockTwo.style.background = "#0066B1";
    blockTwo.style.opacity = "1";
    svgWheel.style.fill = "#fff";
    svgWheelOpacity.style.opacity= "1";
    titleTwo.style.color = "#fff";
    }

const mouseOutBlockTwo = () => {
    blockTwo.style.background = "white";
    blockTwo.style.opacity = "0.85";
    svgWheel.style.fill = "black";
    svgWheelOpacity.style.opacity= "0.5";
    titleTwo.style.color = "black";
    }

blockTwo.addEventListener('click', () => {
    window.location.href = "4-services.html"
})

/* Block Three "VOS GARANTIES" */

const blockThree = document.querySelector('#block_three');
const titleThree = document.querySelector('.title_three');
const svgUmbrella = document.querySelector('#svg-umbrella');
const svgUmbrellaOpacity = document.querySelector('#noun-umbrella-4922934');

const mouseOverBlockThree = () => {
    blockThree.style.background = "#0066B1";
    blockThree.style.opacity = "1";
    svgUmbrella.style.fill = "#fff";
    svgUmbrellaOpacity.style.opacity= "1";
    titleThree.style.color = "#fff";
    }

const mouseOutBlockThree = () => {
    blockThree.style.background = "white";
    blockThree.style.opacity = "0.85";
    svgUmbrella.style.fill = "black";
    svgUmbrellaOpacity.style.opacity= "0.5";
    titleThree.style.color = "black";
    }

    blockThree.addEventListener('click', () => {
        window.location.href = "5-warranty.html"
    })

/* Block Four "VOS OPTIONS" */

const blockFour = document.querySelector('#block_four');
const titleFour = document.querySelector('.title_four');
const svgOptions = document.querySelector('#svg-options');
const svgOptionsOpacity = document.querySelector('#noun-options-4923509');

const mouseOverBlockFour = () => {
    blockFour.style.background = "#0066B1";
    blockFour.style.opacity = "1";
    svgOptions.style.fill = "#fff";
    svgOptionsOpacity.style.opacity= "1";
    titleFour.style.color = "#fff";
    }

const mouseOutBlockFour = () => {
    blockFour.style.background = "white";
    blockFour.style.opacity = "0.85";
    svgOptions.style.fill = "black";
    svgOptionsOpacity.style.opacity= "0.5";
    titleFour.style.color = "black";
    }

/* Block Five "VOS CONTACTS ET DÉMARCHES" */

const blockFive = document.querySelector('#block_five');
const titleFive = document.querySelector('.title_five');
const svgContactPartOne = document.querySelector('#Tracé_1');
const svgContactPartTwo = document.querySelector('#Tracé_2');
const svgContactOpacity = document.querySelector('#identite');

const mouseOverBlockFive = () => {
    blockFive.style.background = "#0066B1";
    blockFive.style.opacity = "1";
    svgContactPartOne.style.fill = "#fff";
    svgContactPartTwo.style.fill = "#fff";
    svgContactOpacity.style.opacity= "1";
    titleFive.style.color = "#fff";
    }

const mouseOutBlockFive = () => {
    blockFive.style.background = "white";
    blockFive.style.opacity = "0.85";
    svgContactPartOne.style.fill = "black";
    svgContactPartTwo.style.fill = "black";
    svgContactOpacity.style.opacity= "0.5";
    titleFive.style.color = "black";
    }

blockFive.addEventListener('click', () => {
        window.location.href = "6-contacts.html"
})

/* Block Six "RACHAT DE VOTRE VÉHICULE EN COURS DE CONTRAT" */

const blockSix = document.querySelector('#block_six');
const titleSix = document.querySelector('.title_six');


const mouseOverBlockSix = () => {
    blockSix.style.background = "#0066B1";
    blockSix.style.opacity = "1";
    titleSix.style.color = "#fff";
    }

const mouseOutBlockSix = () => {
    blockSix.style.background = "white";
    blockSix.style.opacity = "0.85";
    titleSix.style.color = "black";
    }

/* Block Seven "LA FIN DE VOTRE CONTRAT" */

const blockSeven = document.querySelector('#block_seven');
const titleSeven = document.querySelector('.title_seven');
const svgCalendarPartOne = document.querySelector('#svg-calendar');
const svgCalendarPartTwo = document.querySelector('#Tracé_19');
const svgCalendarPartThree = document.querySelector('#Tracé_20');
const svgCalendarOpacity = document.querySelector('#Groupe_13');


const mouseOverBlockSeven = () => {
    blockSeven.style.background = "#0066B1";
    blockSeven.style.opacity = "1";
    svgCalendarPartOne.style.fill = "#fff";
    svgCalendarPartTwo.style.stroke = "#fff";
    svgCalendarPartThree.style.stroke = "#fff";
    svgCalendarOpacity.style.opacity= "1";
    titleSeven.style.color = "#fff";
    }

const mouseOutBlockSeven = () => {
    blockSeven.style.background = "white";
    blockSeven.style.opacity = "0.85";
    svgCalendarPartOne.style.fill = "black";
    svgCalendarPartTwo.style.stroke = "black";
    svgCalendarPartThree.style.stroke = "black";
    svgCalendarOpacity.style.opacity= "0.5";
    titleSeven.style.color = "black";
    }

blockSeven.addEventListener('click', () => {
    window.location.href = "8-end-contract.html"
})

/* Block Eight "EN CAS DE SINISTRE" */

const blockEight = document.querySelector('#block_eight');
const titleEight = document.querySelector('.title_eight');
const svgAccidentPartOne = document.querySelector('#svg-accident');
const svgAccidentOpacity = document.querySelector('#Groupe_18');


const mouseOverBlockEight = () => {
    blockEight.style.background = "#0066B1";
    blockEight.style.opacity = "1";
    svgAccidentPartOne.style.fill = "#fff";
    svgAccidentOpacity.style.opacity= "1";
    titleEight.style.color = "#fff";
    }

const mouseOutBlockEight = () => {
    blockEight.style.background = "white";
    blockEight.style.opacity = "0.85";
    svgAccidentPartOne.style.fill = "black";
    svgAccidentOpacity.style.opacity= "0.5";
    titleEight.style.color = "black";
    }