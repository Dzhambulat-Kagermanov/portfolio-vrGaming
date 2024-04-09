const burgerMenu = document.querySelector('.--burgerMenuContainer')
const openBtn = document.querySelector('.header-block__burger.--open')
const closeBtn = document.querySelector('.burgerMenu-btn.--close')
const burgerMenuLinks = document.querySelectorAll('.burgerMenu-block__item')

openBtn.addEventListener('click', () => {
	burgerMenu.classList.add('--active')
})
closeBtn.addEventListener('click', () => {
	burgerMenu.classList.remove('--active')
})
burgerMenuLinks.forEach(el => {
	el.addEventListener('click', () => {
		burgerMenu.classList.remove('--active')
	})
})
