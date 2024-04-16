import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeView} from "../actions/index"

function Header() {

  const [current, setCurrent] = useState("Add");

  const dispatch = useDispatch();

//   3 functions to toggle among components 

  const changeAdd = () => {
    setCurrent("Add")
    dispatch(changeView("Add"))
  }

  const changeAll = () => {
    setCurrent("All")
    dispatch(changeView("All"))
  }

  const changeCompleted = () => {
    setCurrent("Completed")
    dispatch(changeView("Completed"))
  }

  return (
    <div className='flex justify-center bg-slate-700 rounded-t-lg'>
        <div className={`py-[20px] px-[30px] cursor-pointer ${current==="Add"?"border-b-[2px] border-white":""}`} onClick={changeAdd}>
            <h3 className='sm:text-base text-xs'>Add Task</h3>
        </div>
        <div className={`py-[20px] px-[30px] cursor-pointer ${current==="All"?"border-b-[2px] border-white":""}`} onClick={changeAll}>
            <h3 className='sm:text-base text-xs'>All Tasks</h3>
        </div>
        <div className={`py-[20px] px-[30px] cursor-pointer ${current==="Completed"?"border-b-[2px] border-white":""}`} onClick={changeCompleted}>
            <h3 className='sm:text-base text-xs'>Completed Tasks</h3>
        </div>
    </div>
  )
}

export default Header