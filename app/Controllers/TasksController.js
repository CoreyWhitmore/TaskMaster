import TasksService from "../Services/TasksService.js";
import STORE from "../store.js";

function _drawTasks() {
  let template = ``
  for (let i = 0; i < STORE.State.taskCards.length; i++) {
    template += STORE.State.taskCards[i].Template
  }
  document.getElementById("taskCards-container").innerHTML = template
  STORE.save()
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
    //User confirmation
    Swal.fire({
      title: 'Are you sure you want to delete this task??',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your task has been deleted.',
          'success'
        )
        TasksService.delTask(taskId, cardId)
        _drawTasks()
      }
    })
  }

  delCard(id) {
    //User confirmation
    Swal.fire({
      title: 'Are you sure you want to delete this card??',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your Card has been deleted.',
          'success'
        )
        TasksService.delCard(id)
        _drawTasks()
      }
    })
    _drawTasks()
  }
}
