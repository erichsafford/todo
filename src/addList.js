import { List } from "./listFactory"

const addList = (project) => {
    const name = prompt("Enter List Name")
    const newItem = new List(name)
    project.push(newItem)
}

export { addList }