import { createStore } from "redux";
import prodReducer from "./prodReducer";


const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(prodReducer, devtools);

export default store;