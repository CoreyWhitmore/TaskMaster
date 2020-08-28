import TaskCard from "./Models/TaskCard.js";

let _state = {
  taskCards: [new TaskCard("Test"), new TaskCard("Test 2"), new TaskCard("Test 3")]
};

class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
}

const STORE = new Store();
export default STORE;
