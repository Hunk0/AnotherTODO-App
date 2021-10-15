import { useState } from "react";
import ActionsPanel from "./molecules/ActionsPanel";
import OptionsMenu from "./organism/OptionsMenu";
import TasksBoard from "./organism/TasksBoard";

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  function addTasks(newer){
    setTasks([...new Set([...tasks, newer].flat())]);
  }

  function editTask(newContent){
    const index = tasks.indexOf(selectedTask);
    const newState = tasks;    
    newState.splice(index, 1, {
      ...selectedTask,
      content: newContent
    });

    setTasks(newState);
    setSelectedTask(newState[index]);
  }

  function deleteTask(){
    const index = tasks.indexOf(selectedTask);
    const newState = tasks;    
    newState.splice(index, 1);

    setTasks(newState);
    setSelectedTask(null);
  }

  function changeStage(nStage){
    const index = tasks.indexOf(selectedTask);
    const newState = tasks;    
    newState.splice(index, 1, {
      ...selectedTask,
      stage: nStage
    });

    setTasks(newState);
    setSelectedTask(newState[index]);
  }

  return (
    <div>
      <TasksBoard list={tasks} selected={selectedTask} onClick={task => setSelectedTask(task)}/>
      <ActionsPanel 
        selected={selectedTask} 
        onChange={changeStage} 
        onClear={() => setSelectedTask(null)}
        onEdit={editTask}
        onDelete={deleteTask}
      />
      <OptionsMenu onSubmit={addTasks}/>
    </div>
  );
}

export default App;
