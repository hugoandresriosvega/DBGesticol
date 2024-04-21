import {useForm } from 'react-hook-form'
import { useTasks } from '../context/TasksContext.jsx';
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

function TasksFormPage() {
  const { register , handleSubmit,setValue } = useForm();
  const {createTask , getTask , updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();
  
  
  
  useEffect(() => {
    async function loadTask(){
      if (params.id){
        const task = await getTask(params.id);
        console.log(task)
        setValue ('title',task.title)
        setValue  ('description', task.description)
      }
    }
    loadTask()
  }, [])

   const onSubmit = handleSubmit((data)=>{
   if ( params.id){
    updateTask(params.id, {
      ...data,
      date: dayjs.utc(data.date).format()
    });
   } else {
    createTask({
      ...data,
      date: dayjs.utc(data.date).format()
    });
   }
   navigate('/tasks')
   });

  return (
    <div className=" flex h-[calc(100vh-100px)] items-center justify-center">
    <div className=' bg-trasparent max-w-md w-full p-10 rounded-md my-2 border border-black'>
      <form onSubmit={ onSubmit}>
        <label htmlFor="title">title</label>
        <input 
        type="text"
        placeholder='title'
        {...register("title")}
        className='w-full bg-trasparent text-black px-4 py-2 rounded-md my-2 border border-black'
        autoFocus />

        <label htmlFor="description">description</label>
        <textarea rows="3" 
        placeholder='description'
        {...register("description")}
         className='w-full bg-trasparent text-black px-4 py-2 rounded-md my-2 border border-black'>

         </textarea>
        
         <label htmlFor="date">Date</label>
         <input 
          type="date" {...register('date')}
          className='w-full bg-trasparent text-black px-4 py-2 rounded-md my-2 border border-black'
          />
      <button className="  rounded-full border border-black px-9 py-1 text-2x1 font-bold "> save </button>
      
      </form>

    </div>
    </div>
  );
}

export default TasksFormPage;