import { ChevronsRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";
const Tasks = ({ tasks, onTaskClick, onDeleteTaskClick }) => {
  const navigate = useNavigate();

  const onSeeDetailsClick = (task) => {
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.description)
    
    navigate(`/task?${query.toString()}`);
  };
  
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
            onClick={() => {
              onTaskClick(task.id);
            }}
            className={
              `bg-slate-400 w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`
            }
            title="clique pra completar a tarefa"
          >{task.title}</button>
          
          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="p-2 flex justify-center items-center bg-slate-400 mx-1 rounded-md text-white"
            title="ver detalhes"
          >
            <ChevronsRightIcon />
          </Button>
          <Button
            onClick={() => onDeleteTaskClick(task.id)}
            title="deletar"
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <Trash2Icon />
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
