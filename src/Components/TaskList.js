import React from 'react'
import Task from './Task'
import { useSelector, useDispatch } from 'react-redux';

function TaskList() {

    const myView = useSelector((state) =>
        state.changeView
    );

    const myAllTasks = useSelector((state) =>
        state.changeAllTasks
    );

    return (
        <section className={`w-full h-full flex flex-col justify-center rounded-b-md ${myView === "All" ? "":"hidden"}`}>
            <section className='py-[40px] w-full h-full bg-black flex justify-center rounded-b-md'>
                <div className='md:w-3/4 sm:w-5/6 w-11/12 flex flex-col gap-[20px] overflow-y-scroll max-h-full no-scrollbar rounded-b-md'>
                    {myAllTasks?.map((task, i)=>{
                        return(
                            <Task key={i} title={task?.title} date={task?.date} description={task?.description} completed={task?.completed}/>
                        )
                    })}
                </div>
            </section>
        </section>
    )
}

export default TaskList