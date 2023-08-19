class Item {
    constructor(title, desc, due, priority) {
        this.title = title
        this.desc = desc
        this.due = due
        this.priority = priority
        this.complete = false
    }
}

export { Item }