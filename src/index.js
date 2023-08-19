import { addProject } from "./addProject";
import { addList } from "./addList";
import { addItem } from "./addItem";
import { toggleComplete } from "./toggleComplete";

let projectList = []
// let myProject = []
addProject(projectList)
addList(projectList[0].listOfLists)
addItem(projectList[0].listOfLists[0].listOfItems)
addItem(projectList[0].listOfLists[0].listOfItems)
addItem(projectList[0].listOfLists[0].listOfItems)

toggleComplete(projectList[0].listOfLists[0].listOfItems[1])
toggleComplete(projectList[0].listOfLists[0].listOfItems[1])
toggleComplete(projectList[0].listOfLists[0].listOfItems[2])

console.log(projectList[0].listOfLists[0].listOfItems)








