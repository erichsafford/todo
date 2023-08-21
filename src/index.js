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
addList(projectList[0].listOfLists)

addItem(projectList[0].listOfLists[0].listOfItems, 'milk')
addItem(projectList[0].listOfLists[0].listOfItems, 'bread')
addItem(projectList[0].listOfLists[0].listOfItems, 'cheese')
addItem(projectList[0].listOfLists[0].listOfItems, 'eggs')

addItem(projectList[0].listOfLists[1].listOfItems, 'eggs')
addItem(projectList[0].listOfLists[1].listOfItems, 'beer')
addItem(projectList[0].listOfLists[1].listOfItems, 'bread')
addItem(projectList[0].listOfLists[1].listOfItems, 'cheese')

cardFactory(projectList[0].listOfLists[0])
cardFactory(projectList[0].listOfLists[1])











