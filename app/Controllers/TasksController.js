import TasksService from "../Services/TasksService.js";
import STORE from "../store.js";

function _drawTasks() {
  let template = ``
  for (let i = 0; i < STORE.State.taskCards.length; i++) {
    template += STORE.State.taskCards[i].Template
  }
  document.getElementById("taskCards-container").innerHTML = template
}

//Public
export default class TasksController {
  constructor() {
    _drawTasks()
  }


  createTaskCard(event) {
    event.preventDefault()
    let title = event.target.title.value
    TasksService.createTaskCard(title)
    _drawTasks()
  }

  createTask(event, id) {
    event.preventDefault()
    let text = event.target.newTask.value
    TasksService.createTask(text, id)
    _drawTasks()
  }

  delTask(taskId, cardId) {
    TasksService.delTask(taskId, cardId)
    _drawTasks()
  }

  delCard(id) {
    TasksService.delCard(id)
    _drawTasks()
  }
}
