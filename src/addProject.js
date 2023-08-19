import { Project } from "./projectFactory"

const addProject = (projectList) => {
    // const name = prompt("Please enter the name of your new project:")
    const name = 'myDummyProject'
    const newItem = new Project(name)
    projectList.push(newItem)
}

export { addProject }