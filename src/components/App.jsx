import { useState } from "react";
import TasksList from "./organism/TasksList";
import OptionsMenu from "./organism/OptionsMenu";

const stages = ['To Do', 'Ongoing', 'Done'];


function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  function addTasks(newer){
    setTasks([...tasks, newer].flat());
  }

  return (
    <div>
      {stages.map((stage, i) =>  <TasksList key={i} title={stage} list={tasks.filter(task => task.stage === stage)} onClick={task => setSelectedTask(task)}/>)}

      <OptionsMenu onAdd={addTasks}/>
    </div>
  );
}

export default App;
