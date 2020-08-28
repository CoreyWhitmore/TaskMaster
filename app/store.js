import TaskCard from "./Models/TaskCard.js";

let _state = {
  taskCards: []
};

function _load() {
  let data = JSON.parse(localStorage.getItem("taskCards"))
  console.log(data);
  if (data) {
    data.taskCards = data.taskCards.map(c => new TaskCard(c.title, c.color, c.tasks, c.id))
    _state = data
  }
}

_load()

class Store {

  save() {
    localStorage.setItem("taskCards", JSON.stringify(_state))
  }

  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
