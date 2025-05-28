document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo img');
    const links = document.querySelector('.links');

    window.addEventListener('scroll', function () {
        const scrollPos = window.scrollY;

        // Modificar estilos del header al hacer scroll
        if (scrollPos > 50) {
            header.classList.add('scrolled');
            logo.classList.add('small');
            links.classList.add('up');
        } else {
            header.classList.remove('scrolled');
            logo.classList.remove('small');
            links.classList.remove('up');
        }
    });
});
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    },500);
}
function Prev(){
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);
}
btnRight.addEventListener('click',function(){
    Next();
});
btnLeft.addEventListener('click',function(){
    Prev();
});
setInterval(function(){
    Next();
},5000);

    const cotizacionButton = document.querySelector('.opciones button:nth-child(1)');
    const empleoButton = document.querySelector('.opciones button:nth-child(2)');
    const proveedorButton = document.querySelector('.opciones button:nth-child(3)');

    cotizacionButton.addEventListener('click', function () {
        mostrarDiv('cotizacion-div');
    });

    empleoButton.addEventListener('click', function () {
        mostrarDiv('empleo');
    });

    proveedorButton.addEventListener('click', function () {
        mostrarDiv('proveedor');
    });


function mostrarDiv(nombreDiv) {
    // Ocultar todos los divs dentro de la clase "mostrar"
    var divsMostrar = document.querySelectorAll('.mostrar div');
    divsMostrar.forEach(function(div) {
      div.style.display = 'none';
    });

    // Mostrar el div correspondiente al botón presionado
    var divMostrar = document.querySelector('.mostrar .' + nombreDiv);
    if (divMostrar) {
      divMostrar.style.display = 'flex';
      divMostrar.style.flexDirection = 'column';
      divMostrar.style.textAlign = 'left';
    }
  }
