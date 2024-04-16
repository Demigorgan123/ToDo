import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeAllTasks } from "../actions/index"

function CompletedTask({ title, date, description, completed }) {
 
    const myAllTasks = useSelector((state) =>
        state.changeAllTasks
    );

    const [hide, sethide] = useState("N");

    const dispatch = useDispatch();

    const deleteTask = () => {
        let tempTasks = myAllTasks;

        // select all tasks except the current one
        const final = tempTasks?.filter((curr)=>
            curr.title!==title
        )

        dispatch(changeAllTasks(final))

       localStorage.removeItem('ToDoTasks');
       localStorage.setItem('ToDoTasks', JSON.stringify(final))
    }

    const markAsInComplete = () => {
        let tempTasks = myAllTasks;
        
        // to mark the current task as incomplete
        for(let i = 0; i<tempTasks.length; i++){
            if(tempTasks[i].title === title){
                if (tempTasks[i].completed) {
                    tempTasks[i].completed = 'InComplete';
                }
            }
        }

        dispatch(changeAllTasks(tempTasks))

        localStorage.removeItem('ToDoTasks');
        localStorage.setItem('ToDoTasks', JSON.stringify(tempTasks))

        sethide("Y")

        setTimeout(()=>{
            sethide("N")
        }, [3000])
    }

    return (
        <div className={`p-[20px] bg-slate-800 rounded-md ${completed === "Completed"?"":"hidden"}`}>
            <section className='flex justify-between'>
                <h3 className='font-semibold'>{title}</h3>
                <h3>{date}</h3>
            </section>
            <section className='text-sm py-[15px]'>{description}</section>
            <section className='flex gap-[20px]'>
                <button className='bg-slate-600 py-[10px] px-[20px] text-slate-100 text-sm rounded-md' onClick={deleteTask}>Delete</button>
                <button className={`bg-slate-600 py-[10px] px-[20px] text-slate-100 text-sm rounded-md`} onClick={markAsInComplete}>Mark as incomplete</button>
                <div className={`bg-red-600 py-[10px] px-[20px] text-slate-100 text-sm rounded-md ${hide === "N"?"hidden":""}`}>Incomplete</div>
            </section>
        </div>
    )
}

export default CompletedTask