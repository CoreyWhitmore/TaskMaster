import { generateId } from "../Utils.js"

export default class TaskCard {
    constructor(title) {
        this.title = title
        this.tasks = [{ text: 'filler task', id: generateId() }, { text: 'filler task 1', id: generateId() }, { text: 'filler task 2', id: generateId() }]
        this.id = generateId()
        this.color = 'success'
    }

    get Template() {
        return `
        <div class="col-4 d-flex justify-content-center mb-2">
                <div class="card w-75">
                    <div class=" d-flex justify-content-between bg-${this.color} p-2">${this.title}<i class="fa fa-times" onclick="app.tasksController.delCard('${this.id}')" aria-hidden="true"></i></div>
                    <div class="card-body" id="${this.id}">
                        ${this.tasksTemplate}
                        <form class="form-inline" onsubmit="app.tasksController.createTask(event, '${this.id}')">
                            <div class="form-group text-dark">
                                <input type="text" class="form-control" id="newTask" name="newTask"
                                    placeholder='New Task'>
                                
                                </div>
                                <button type="submit" class="btn btn-${this.color} form-control"><i
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