const inputLoa = document.querySelector('.loa')
const svgLoa = document.getElementById('path10531-1')

const mouseOver = () => {
  inputLoa.classList.toggle("active");
    inputLoa.innerHTML = "Lorem ipsum dolor sit amet, consectetur <br> elit, sed do eiusmod tempor incididunt";
    inputLoa.style.fontSize = "0.85em";
    inputLoa.style.paddingRight = "30px";
    svgLoa.style.fill = "#fff";
    svgLoa.style.opacity= "1";
  }

const mouseOut = () => {
    inputLoa.innerHTML = "LOA";
    inputLoa.style.fontSize = "1em";
    inputLoa.style.paddingRight = "0px";
    svgLoa.style.fill = "#0066b1";
    svgLoa.style.opacity= "0.5";
  }

inputLoa.addEventListener('click', () => {
  window.location.href = "2-summary-loa.html"
})