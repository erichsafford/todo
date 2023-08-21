import { Item } from "./itemFactory";

const addItem = (list, title) => {
    // const title = prompt("Enter the title of the task:")
    // const desc = prompt("Enter the description of the task:")
    // const due = prompt("Enter the due date of the task:")
    // const priority = prompt("Enter the priority of the task:")
    // const title = 'Sick Title'
    const desc = 'Sick desription'
    const due = new Date("10/30/2023")
    const priority = 'Sick priority'
    const newItem = new Item(title, desc, due, priority)

    list.push(newItem)
    return newItem
}

export { addItem }