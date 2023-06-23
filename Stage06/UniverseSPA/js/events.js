import {
    page,
    homeButton,
    universeButton,
    explorationButton,
} from "./elements.js"

function HomeButton () {
    homeButton.addEventListener('click', () => {
        page.classList.add("bg-home")
        page.classList.remove("bg-universe")
        page.classList.remove("bg-exploration")
        homeButton.classList.add("active")
        universeButton.classList.remove("active")
        explorationButton.classList.remove("active")
    })
}

function UniverseButton () {
    universeButton.addEventListener('click', () => {
        page.classList.remove("bg-home")
        page.classList.add("bg-universe")
        page.classList.remove("bg-exploration")
        homeButton.classList.remove("active")
        universeButton.classList.add("active")
        explorationButton.classList.remove("active")
    })
}

function ExplorationButton () {
    explorationButton.addEventListener('click', () => {
        page.classList.remove("bg-home")
        page.classList.remove("bg-universe")
        page.classList.add("bg-exploration")
        homeButton.classList.remove("active")
        universeButton.classList.remove("active")
        explorationButton.classList.add("active")
    })
}


export {HomeButton,UniverseButton,ExplorationButton}