export const changeView = (view) => {
    return{
        type:"VIEW",
        view:view
    }
}

export const changeAllTasks = (allTasks) => {
    return{
        type:"ALLTASKS",
        allTasks:allTasks
    }
}
