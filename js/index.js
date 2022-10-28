const inputLoa = document.querySelector('.loa')
const svgLoa = document.getElementById('path10531-1')

function mouseOver(event) {
    console.log(event);
    inputLoa.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt";
    inputLoa.style.fontSize = "0.85em"
    svgLoa.style.fill = "#fff";
    svgLoa.style.opacity= "1";
    inputLoa.style.transition = "0.7s ease-in-out 0s"
  }

function mouseOut(event) {
    console.log(event);
    inputLoa.innerHTML = "LOA";
    inputLoa.style.fontSize = "1em"
    svgLoa.style.fill = "#0066b1";
    svgLoa.style.opacity= "0.5";
    inputLoa.style.transition = " 0.6s ease-in-out 0s"
  }

inputLoa.addEventListener('click', () => {
  window.location.href = "summary-loa.html"
})