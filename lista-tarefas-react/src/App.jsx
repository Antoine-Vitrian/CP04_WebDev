import { useState } from "react";
import TaskList from "./components/TaskList";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Estudar React", done: false },
    { id: 2, title: "Fazer projeto prático", done: false },
  ]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), title: newTask, done: false }]);
    setNewTask("");
  }

  function toggleDone(id) {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Lista de Tarefas</h1>
      
      <div className="flex mb-6">
        <input 
          type="text" 
          className="flex-grow border border-gray-300 p-2 rounded"
          placeholder="Nova tarefa" 
          value={newTask} 
          onChange={e => setNewTask(e.target.value)} 
        />
        <button 
          onClick={addTask} 
          className="ml-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Adicionar
        </button>
      </div>

      <TaskList tasks={tasks} onToggleDone={toggleDone} />
    </div>
  );
}
