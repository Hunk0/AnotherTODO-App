import { useState } from "react";
import ActionsPanel from "./molecules/ActionsPanel";
import SearchBar from "./molecules/SearchBar";
import OptionsMenu from "./organism/OptionsMenu";
import TasksBoard from "./organism/TasksBoard";

function App() {
  const [search, setSearch] = useState("")
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

  function handleSearch(evt){
    setSearch(evt.target.value);
    if(selectedTask && !selectedTask.content.toLowerCase().includes(evt.target.value)) setSelectedTask(null);
  }

  return (
    <div>
      <SearchBar onChange={handleSearch}/>
      <TasksBoard list={(search)?tasks.filter(task => task.content.toLowerCase().includes(search)):tasks} selected={selectedTask} onClick={task => setSelectedTask(task)}/>
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
