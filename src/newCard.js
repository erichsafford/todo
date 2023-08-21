import iconEmptyBox from "./assets/emptybox.svg"
import iconAdd from "./assets/add.svg"
import iconEdit from "./assets/edit.svg"
import iconDelete from "./assets/delete.svg"
import { eventHandler } from "./eventHandler"
import { timeUntilDueDate } from "./timeUntil"

const cardFactory = (list) => {
    const displayArea = document.getElementById('main-content')

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('list-card', 'flex-group')
    cardDiv.addEventListener('click', (e) => {
        eventHandler(e, list.listOfItems)
    })

    const cardTitle = document.createElement('h2')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = list.title

    const cardList = document.createElement('div')
    cardList.classList.add('flex-group', 'card-list-section')

    list.listOfItems.forEach((item) => {
        const itemGroup = document.createElement('div')     // Groups two lines: top is itemLine and bottom is due time
        itemGroup.classList.add('item-group', 'flex-group', `item-group-$`)

        //ITEM LINE
        const itemLine = document.createElement('div')      // Create the line that has checkbox, title, edit, and delete
        itemLine.classList.add('entry-line', 'flex-group')

        //DUE TIME
        const dueTime = document.createElement('p')         // Create due time paragraph
        dueTime.classList.add('due-time')
        dueTime.innerText = `Due: ${timeUntilDueDate(item.due)}`

        //CHECKBOX
        const checkBox = document.createElement('img')      // Create checkbox (1st line item)
        checkBox.classList.add('box', 'unchecked', 'svg-class')
        checkBox.id = 'checkbox'
        checkBox.src = iconEmptyBox
        itemLine.appendChild(checkBox)                      // Append to itemLine

        //TO-DO ITEM
        const cardItem = document.createElement('p')        // Create to-do item (2nd line item)
        cardItem.classList.add('card-item', 'hover')
        cardItem.innerText = item.title
        itemLine.appendChild(cardItem)                      // Append to itemLine

        //EDIT BUTTON
        const btnEdit = document.createElement('img')       // Create edit button (3rd line item)
        btnEdit.classList.add('card-btn', 'hover-show', 'svg-class')
        btnEdit.id = 'edit'
        btnEdit.src = iconEdit
        itemLine.appendChild(btnEdit)                       // Append to itemLine

        //DELETE BUTTON
        const btnDelete = document.createElement('img')     // Create delete button (4th line item)
        btnDelete.src = iconDelete
        btnDelete.classList.add('card-btn', 'hover-show', 'svg-class')
        btnDelete.id = 'delete'
        itemLine.appendChild(btnDelete)                     // Append to itemLine

        itemGroup.appendChild(itemLine)                     // Append constructed itemLine to itemGroup
        itemGroup.appendChild(dueTime)                      // Append due tme to itemGroup
        cardList.appendChild(itemGroup)                     // Append itemGroup to the card
    })

    //BUTTON GROUP
    const btnGroup = document.createElement('div')
    btnGroup.classList.add('btn-group', 'flex-group')

    //ADD NEW BUTTON
    const btnAdd = document.createElement('img')
    btnAdd.src = iconAdd
    btnAdd.classList.add('card-btn', 'svg-class')
    btnAdd.id = 'add'
    btnGroup.appendChild(btnAdd)

    cardDiv.appendChild(cardTitle)
    cardDiv.appendChild(cardList)
    cardDiv.appendChild(btnGroup)
    displayArea.appendChild(cardDiv)
}

export { cardFactory }