const toggleComplete = (item) => {
    item.complete = !item.complete
    console.log(`Switched ${item.title} to ${item.complete}`)
}

export { toggleComplete }