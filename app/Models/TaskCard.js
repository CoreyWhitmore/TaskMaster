import { generateId } from "../Utils.js"

export default class TaskCard {
    constructor(title, color, tasks, id) {
        this.title = title || "No Title"
        this.tasks = tasks || []
        this.id = id || generateId()
        this.color = color || "#6BF566"
    }

    get Template() {
        return `
        <div class="col-4 d-flex justify-content-center mb-2">
                <div class="card w-75">
                    <div class="d-flex justify-content-between p-2" style="background-color:${this.color};"><b>${this.title}</b><i class="fa fa-times" onclick="app.tasksController.delCard('${this.id}')" aria-hidden="true"></i></div>
                    <div class="card-body" id="${this.id}">
                        ${this.tasksTemplate}
                        <form class="form-inline" onsubmit="app.tasksController.createTask(event, '${this.id}')">
                            <div class="form-group text-dark">
                                <input type="text" class="form-control" id="newTask" name="newTask"
                                    placeholder='New Task'>
                                
                                </div>
                                <button type="submit" class="btn form-control" style="background-color:${this.color}"><i
                                        class="fa fa-plus-square" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            `
    }

    get tasksTemplate() {
        let template = ``
        for (let i = 0; i < this.tasks.length; i++) {
            template += `<p class="card-text d-flex justify-content-between">
            ${this.tasks[i].text}
            <i class="fa fa-trash" onclick="app.tasksController.delTask('${this.tasks[i].id}', '${this.id}')" aria-hidden="true"></i></p>`
        }
        return template
    }
}