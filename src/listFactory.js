class List {
    constructor(title) {
        this.title = title
        this.listOfItems = []
    };

    displayList() {
        this.listOfItems.forEach((object) => {
            for (const key in object) {
                console.log(`${key}: ${object[key]}`)
            }
            console.log("")
        } )
    }
}
export { List }