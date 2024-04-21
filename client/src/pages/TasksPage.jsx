import { useEffect } from "react";
import { useTasks } from "../context/TasksContext.jsx";
import TaskCard from '../components/TaskCard.jsx';

function TasksPage() {
  const {getTasks,tasks} = useTasks();
  
  useEffect(()=> {
    getTasks()
  }, []);
  if (tasks.length === 0 ) return (<h1> no tasks</h1>);
  
  return (
  <div className="grid sm:grid-cols-3 md:grid-cols- gap-2  text-white" >
    {tasks.map((task) => (
        <TaskCard task={task} key= {task._id} />
      ))}
    </div>
    );
}

export default TasksPage;