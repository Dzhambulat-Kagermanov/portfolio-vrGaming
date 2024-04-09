const buttons = document.querySelector('.topGames-block__sort')
const group = document.querySelector('.topGames-block__group')
const items = document.querySelectorAll('.topGames-group__item')

const toggleClasses = (collection, currentElem) => {
	for (let index = 0; index < collection.length; index++) {
		collection[index].classList.remove('--active')
	}
	currentElem.classList.add('--active')
}
const checkingValue = (items, value = '', activating) => {
	items.forEach(el => {
		if (
			!el
				.querySelector('.topGames-item-content__hashtags>h2')
				.innerText.toLowerCase()
				.trim()
				.split(', ')
				.includes(value) &&
			value
		) {
			el.classList.add('--none')
		} else if (value) {
			el.classList.remove('--none')
		}
		if (activating) {
			el.classList.remove('--none')
		}
	})
}
const convertDateInSeconds = date => {
	const monthsAlphabet = [31, 28, 31, 30, 31, 30, 31, 31, 31, 31, 30, 31]
	const secondsInDayFormula = 24 * 60 * 60
	const dateParts = date.split('.')

	let daysSeconds = Number(dateParts[0]) * secondsInDayFormula

	let monthSeconds =
		monthsAlphabet[Number(dateParts[1] - 1)] * secondsInDayFormula
	let yearsSeconds = Number(dateParts[2]) * 365 * secondsInDayFormula

	return daysSeconds + monthSeconds + yearsSeconds
}
const sortedDates = (items, upperLower, lowerUpper) => {
	const sortedItems = [...items]
	if (upperLower) {
		for (let i = 0; i < sortedItems.length; i++) {
			for (let j = 0; j < sortedItems.length; j++) {
				if (
					convertDateInSeconds(
						sortedItems[i].querySelector('.topGames-item-content__date>h2')
							.innerText
					) >
					convertDateInSeconds(
						sortedItems[j].querySelector('.topGames-item-content__date>h2')
							.innerText
					)
				) {
					let temp = sortedItems[i]
					sortedItems[i] = sortedItems[j]
					sortedItems[j] = temp
				}
			}
		}
	} else if (lowerUpper) {
		for (let i = 0; i < sortedItems.length; i++) {
			for (let j = 0; j < sortedItems.length; j++) {
				if (
					convertDateInSeconds(
						sortedItems[i].querySelector('.topGames-item-content__date>h2')
							.innerText
					) <
					convertDateInSeconds(
						sortedItems[j].querySelector('.topGames-item-content__date>h2')
							.innerText
					)
				) {
					let temp = sortedItems[j]
					sortedItems[j] = sortedItems[i]
					sortedItems[i] = temp
				}
			}
		}
	}
	return sortedItems
}

// NEWEST
buttons.children[0].addEventListener('click', event => {
	const currentElem = event.currentTarget
	group.innerHTML = ''
	sortedDates(items, true).forEach(el => {
		group.appendChild(el)
	})
	checkingValue(items, false, true)
	toggleClasses(buttons.children, currentElem)
})
// OLDEST
buttons.children[1].addEventListener('click', event => {
	const currentElem = event.currentTarget
	group.innerHTML = ''
	sortedDates(items, false, true).forEach(el => {
		group.appendChild(el)
	})
	checkingValue(items, false, true)
	toggleClasses(buttons.children, currentElem)
})
// FIGHTING GAMES
buttons.children[2].addEventListener('click', event => {
	const currentElem = event.currentTarget
	checkingValue(items, '#fighting')
	toggleClasses(buttons.children, currentElem)
})
// SPORT GAMES
buttons.children[3].addEventListener('click', event => {
	const currentElem = event.currentTarget
	checkingValue(items, '#sport')
	event.currentTarget.classList.add('--active')
	toggleClasses(buttons.children, currentElem)
})
