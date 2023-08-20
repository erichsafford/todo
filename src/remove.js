import { cardFactory } from "./newCard"

const remove = (container, item) => {
    container.listOfItems.splice(container.listOfItems.indexOf(item), 1)
    console.log(container.listOfItems)
}

export { remove }