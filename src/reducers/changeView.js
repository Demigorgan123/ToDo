const initialState = "Add";

const changeView = (state = initialState , action) => {
    switch(action.type){
        case "VIEW": return action.view;
        default: return state;
    }
}

export default changeView; 