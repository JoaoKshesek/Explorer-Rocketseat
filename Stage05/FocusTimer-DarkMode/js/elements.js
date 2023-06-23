const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonIncrease = document.querySelector('.increase')
const buttonDecrease = document.querySelector('.decrease')

const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardCoffeeShop = document.querySelector('.coffee-shop')
const cardFire = document.querySelector('.fire')

const buttonForest = cardForest.querySelector('.button')
const buttonRain = cardRain.querySelector('.button')
const buttonCoffeeShop = cardCoffeeShop.querySelector('.button')
const buttonFire= cardFire.querySelector('.button')

const volumeForest = cardForest.querySelector('.volume')
const volumeRain = cardRain.querySelector('.volume')
const volumeCoffeeShop = cardCoffeeShop.querySelector('.volume')
const volumeFire= cardFire.querySelector('.volume')

const buttonLightTheme = document.querySelector('.light-theme')
const buttonDarkTheme = document.querySelector('.dark-theme')

export {
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonIncrease,
    buttonDecrease,
    cardForest,
    cardRain,
    cardCoffeeShop,
    cardFire,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFire,
    volumeForest,
    volumeRain,
    volumeCoffeeShop,
    volumeFire,
    buttonLightTheme,
    buttonDarkTheme,
}