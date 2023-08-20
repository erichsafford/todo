import { formatDistance } from "date-fns"

const timeUntilDueDate = (date) => {
    let today = new Date()
    let distance = formatDistance(date, today)
    return distance
}

export { timeUntilDueDate }