import iconEmptyBox from "./assets/emptybox.svg"
import iconAdd from "./assets/add.svg"
import iconEdit from "./assets/edit.svg"
import iconDelete from "./assets/delete.svg"

const cardFactory = (list) => {
    const displayArea = document.getElementById('main-content')

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('list-card', 'flex-group')

    const cardTitle = document.createElement('h2')
    cardTitle.classList.add('card-title')
    cardTitle.innerText = list.name

    const cardList = document.createElement('div')
    cardList.classList.add('flex-group', 'card-list-section')

    list.listOfItems.forEach((item) => {
        const itemLine = document.createElement('div')
        itemLine.classList.add('entry-line', 'flex-group')
        const checkBox = document.createElement('img')
        checkBox.src = iconEmptyBox
        checkBox.classList.add('box', 'unchecked')
        itemLine.appendChild(checkBox)
        const cardItem = document.createElement('p')
        cardItem.classList.add('card-item', 'hover')
        cardItem.innerText = item.title
        itemLine.appendChild(cardItem)

        const btnEdit = document.createElement('img')
        btnEdit.src = iconEdit
        btnEdit.classList.add('card-btn', 'hover-show', 'edit')
        itemLine.appendChild(btnEdit)

        const btnDelete = document.createElement('img')
        btnDelete.src = iconDelete
        btnDelete.classList.add('card-btn', 'hover-show', 'delete')
        itemLine.appendChild(btnDelete)

        cardList.appendChild(itemLine)
    })

    const btnGroup = document.createElement('div')
    btnGroup.classList.add('btn-group')
    const btnAdd = document.createElement('img')
    btnAdd.src = iconAdd
    btnAdd.classList.add('card-btn', 'add')
    btnGroup.appendChild(btnAdd)



    cardDiv.appendChild(cardTitle)
    cardDiv.appendChild(cardList)
    cardDiv.appendChild(btnGroup)
    displayArea.appendChild(cardDiv)
}

export { cardFactory }