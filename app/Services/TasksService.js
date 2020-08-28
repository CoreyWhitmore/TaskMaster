import TaskCard from "../Models/TaskCard.js";
import STORE from "../store.js";
import { generateId } from "../Utils.js";

//Public
class TasksService {
    delCard(id) {
        let cardIndex = STORE.State.taskCards.findIndex(c => c.id == id)
        STORE.State.taskCards.splice(cardIndex, 1)
    }
    delTask(taskId, cardId) {
        let card = STORE.State.taskCards.find(c => c.id == cardId)
        let taskIndex = card.tasks.findIndex(c => c.id == taskId)
        card.tasks.splice(taskIndex, 1)
    }
    createTask(text, id) {
        let card = STORE.State.taskCards.find(c => c.id == id)
        let task = { text: text, id: generateId() }
        card.tasks.push(task)
    }

    createTaskCard(title) {
        let card = new TaskCard(title)
        STORE.State.taskCards.push(card)
    }
}

const SERVICE = new TasksService();
export default SERVICE;
