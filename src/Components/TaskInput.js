import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { changeAllTasks} from "../actions/index"

function TaskInput() {

    const myView = useSelector((state) =>
        state.changeView
    );

    const myAllTasks = useSelector((state) =>
        state.changeAllTasks
    );

    const dispatch = useDispatch();

    const ref = useRef();

    const title1 = useRef();
    const date1 = useRef();
    const description1 = useRef()

    const AddTask = () => {
       const currTask = {
        title: title1.current.value,
        date: date1.current.value,
        description: description1.current.value,
        completed: 'Incomplete'
       }

       let tempTasks = [];

       // if there are already some tasks added, fetch them into 'tempTasks'
       if(myAllTasks !== undefined){
        tempTasks = myAllTasks;
       }

       tempTasks.push(currTask);

       console.log(tempTasks)

       dispatch(changeAllTasks(tempTasks))

       localStorage.removeItem('ToDoTasks');
       localStorage.setItem('ToDoTasks', JSON.stringify(tempTasks))

       title1.current.value = "";
       description1.current.value = "";
       date1.current.value = "";
    }

    console.log(myAllTasks)

    return (
        <section className={`py-[20px] w-full h-full flex flex-col justify-center rounded-b-md ${myView === "Add" ? "":"hidden"}`}>
            <section className='py-[40px] w-full h-full bg-black flex justify-center rounded-b-md'>
                <div className='md:w-3/4 sm:w-5/6 w-11/12 flex flex-col gap-[20px] overflow-y-scroll max-h-full no-scrollbar rounded-b-md'>
                    <section>
                        <h3 className='font-semibold text-md mb-[4px]'>Title*</h3>
                        <input type='text' ref={title1} placeholder='Enter the title' className='w-full h-[20px] placeholder:text-slate-600 p-[20px] rounded-md outline-none text-slate-800' />
                    </section>
                    <section>
                        <h3 className='font-semibold text-md mb-[4px]'>Date*</h3>
                        <input type='date' ref={date1} placeholder='Enter the date' className='w-full h-[20px] placeholder:text-slate-600 p-[20px] rounded-md outline-none text-slate-800' />
                    </section>
                    <section>
                        <h3 className='font-semibold text-md mb-[4px]'>Description*</h3>
                        <textarea rows={10} ref={description1} placeholder='Enter the description' className='w-full placeholder:text-slate-600 p-[20px] rounded-md outline-none text-slate-800' />
                    </section>
                    <section className='py-[20px] flex justify-center'>
                        <button onClick={AddTask} className='bg-slate-700 py-[15px] px-[30px] text-slate-100 rounded-md'>Add Task</button>
                    </section>
                </div>
            </section>
        </section>
    )
}

export default TaskInput