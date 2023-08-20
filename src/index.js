import { addProject } from "./addProject";
import { addList } from "./addList";
import { addItem } from "./addItem";
import { toggleComplete } from "./toggleComplete";
import { cardFactory } from "./newCard";
import logo from './assets/logo.png'
import css from "./style.css"

const logoImg = document.getElementById('logoImg')
logoImg.src = logo

let projectList = []
addProject(projectList)
addList(projectList[0].listOfLists)
addItem(projectList[0].listOfLists[0].listOfItems)
addItem(projectList[0].listOfLists[0].listOfItems)
addItem(projectList[0].listOfLists[0].listOfItems)
addItem(projectList[0].listOfLists[0].listOfItems)

addList(projectList[0].listOfLists)
addItem(projectList[0].listOfLists[1].listOfItems)
addItem(projectList[0].listOfLists[1].listOfItems)
addItem(projectList[0].listOfLists[1].listOfItems)
addItem(projectList[0].listOfLists[1].listOfItems)

addList(projectList[0].listOfLists)
addItem(projectList[0].listOfLists[2].listOfItems)
addItem(projectList[0].listOfLists[2].listOfItems)
addItem(projectList[0].listOfLists[2].listOfItems)
addItem(projectList[0].listOfLists[2].listOfItems)

addList(projectList[0].listOfLists)
addItem(projectList[0].listOfLists[3].listOfItems)
addItem(projectList[0].listOfLists[3].listOfItems)
addItem(projectList[0].listOfLists[3].listOfItems)
addItem(projectList[0].listOfLists[3].listOfItems)
addItem(projectList[0].listOfLists[3].listOfItems)
addItem(projectList[0].listOfLists[3].listOfItems)
addItem(projectList[0].listOfLists[3].listOfItems)
addItem(projectList[0].listOfLists[3].listOfItems)
addItem(projectList[0].listOfLists[3].listOfItems)

addList(projectList[0].listOfLists)
addItem(projectList[0].listOfLists[4].listOfItems)
addItem(projectList[0].listOfLists[4].listOfItems)
addItem(projectList[0].listOfLists[4].listOfItems)
addItem(projectList[0].listOfLists[4].listOfItems)

cardFactory(projectList[0].listOfLists[0])











