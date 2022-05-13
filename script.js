// JavaScript Document

//Mobile Responsive Nav
const mainMenu = document.querySelector('.mainMenu')
const closeMenu = document.querySelector('.closeMenu')
const openMenu = document.querySelector('.openMenu')

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
	mainMenu.style.display = 'flex';
	mainMenu.style.left = '0';
}

function close() {
	mainMenu.style.left = '-100%';
}

//Nav HightLights Current Page Code Below
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');

window.addEventListener('scroll', ()=> {
	let current = "";
	
	sections.forEach( section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
			current = section.getAttribute('id');
		}
	})
	
	navLi.forEach( li => {
		li.classList.remove('active');
		if(li.classList.contains(current)) {
			li.classList.add('active')
		}
	})
})

	//SLIDESHOW JAVASCRIPT
	let slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  let i;
	  let slides = document.getElementsByClassName("mySlides");
	  let dots = document.getElementsByClassName("demo");
	  let captionText = document.getElementById("caption");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block";
	  dots[slideIndex-1].className += " active";
	  captionText.innerHTML = dots[slideIndex-1].alt;
	}