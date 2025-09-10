import { useState } from "react";

export default function TaskItem({ task, onToggleDone }) {
  const [highlighted, setHighlighted] = useState(false);

  return (
    <li 
      className={`p-2 mb-2 border rounded cursor-pointer flex justify-between items-center
        ${task.done ? "line-through text-gray-500" : "text-black"}
        ${highlighted ? "bg-yellow-100" : ""}
      `}
      onClick={() => onToggleDone(task.id)}
      onMouseEnter={() => setHighlighted(true)}
      onMouseLeave={() => setHighlighted(false)}
    >
      {task.title}
      <span>{task.done ? "✔️" : "❌"}</span>
    </li>
  );
}
