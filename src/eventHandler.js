import { editItem } from "./edit"
import { addButton } from "./addButton"

const eventHandler = (event, list) => {
    if (event.target.id === "delete") {
        console.log(event.target.parentElement.children)
    } else if (event.target.id === "edit") {
        editItem(event, list)
    } else if (event.target.id === "checkbox") {
        console.log(event.target)
    } else if (event.target.id === "add") {
        addButton(event, list)
    } else {
        console.log('Nothing')
    }
}

export { eventHandler }