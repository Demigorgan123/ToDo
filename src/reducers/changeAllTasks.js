var retrievedObject = localStorage.getItem('ToDoTasks');

const initialState = JSON.parse(retrievedObject);

const changeAllTasks = (state = initialState , action) => {
    switch(action.type){
        case "ALLTASKS": return action.allTasks;
        default: return state;
    }
}

export default changeAllTasks;