const editItem = (event, list) => {
    let currentItem = event.target.parentElement.children[1]
    let currentText = event.target.parentElement.children[1].innerText
    let newText = prompt("Enter the new text")
    console.log(currentText)
    const indexOfItem = list.find((element) => element.title === currentText)
    indexOfItem.title = newText
    currentItem.innerText = newText
    console.log(list)
}

export { editItem }