import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const favoriteSwiper = new Swiper('.favorite-block__slider', {
	slidesPerView: 3,
	loop: true,
	navigation: {
		nextEl: '.favorite-block__slider .--next',
		prevEl: '.favorite-block__slider .--prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		769: {
			slidesPerView: 3,
		},
	},
})
const socialSwiper = new Swiper('.social-block__slider', {
	slidesPerView: 2,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: '.social-slider__pagination',
		clickable: true,
	},
	speed: 700,
	autoplay: {
	  delay: 3000,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		769: {
			slidesPerView: 2,
		},
	},
})
