import { combineReducers } from "redux";
import changeView from "./changeView";
import changeAllTasks from "./changeAllTasks";

const rootReducer = combineReducers({
    changeView,
    changeAllTasks
})

export default rootReducer;