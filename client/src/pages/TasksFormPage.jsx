import {useForm } from 'react-hook-form'
import { useTasks } from '../context/TasksContext.jsx';
import { useNavigate } from 'react-router-dom'
function TasksFormPage() {
  const { register , handleSubmit } = useForm();
  const {createTask} = useTasks();
  const navigate = useNavigate()
 
   const onSubmit = handleSubmit((data)=>{
    createTask(data);
    navigate('/tasks')
   });

  return (
    <div className=" flex h-[calc(100vh-100px)] items-center justify-center">
    <div className=' bg-trasparent max-w-md w-full p-10 rounded-md my-2 border border-white'>
      <form onSubmit={ onSubmit}>
        <input type="text"
        placeholder='title'
        {...register("title")}
        className='w-full bg-trasparent text-black px-4 py-2 rounded-md my-2 border border-white'
        autoFocus />
        <textarea rows="3" 
        placeholder='description'
         {...register("description")}
         className='w-full bg-trasparent text-black px-4 py-2 rounded-md my-2 border border-white'></textarea>
      <button className="  rounded-full border border-white px-9 py-1"> save </button>
      
      </form>

    </div>
    </div>
  );
}

export default TasksFormPage;