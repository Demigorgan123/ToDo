import logo from './logo.svg';
import './App.css';
import bg from "./assets/bg.png"
import Header from './Components/Header';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';
import CompletedTasks from './Components/CompletedTasks';

function App() {
  return (
    <div className="min-h-screen w-full" style={{backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover',}}>
       <div className='flex flex-col justify-center min-h-screen h-screen w-full'>
            <div className='flex justify-center h-3/4 w-full'>
                <section className='bg-black h-full lg:w-3/4 md:w-5/6 md:px-[0px] sm:px-[20px] px-[12px] rounded-lg text-white'>
                  <Header/>

                  {/* 3 different components for adding tasks, viewing incomplete tasks and viewing completed tasks  */}
                  <TaskInput/>
                  <TaskList/>
                  <CompletedTasks/>
                </section>
            </div>
       </div>
    </div>
  );
}

export default App;
