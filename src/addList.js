import { List } from "./listFactory"

const addList = (project) => {
    const name = 'My Dummy List' //Change this back to prompt when ready
    const newItem = new List(name)
    project.push(newItem)
}

export { addList }