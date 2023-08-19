import { List } from "./listFactory"

const addList = (project) => {
    const name = 'My Dummy List'
    const newItem = new List(name)
    project.push(newItem)
}

export { addList }