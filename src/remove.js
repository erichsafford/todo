import { cardFactory } from "./newCard"

const remove = (container, item, event) => {
    container.listOfItems.splice(container.listOfItems.indexOf(item), 1)
    // currentList = document.querySelector(event.target.parentElement)
    console.log(event.target.parentElement)
    // cardFactory(container)
}

export { remove }