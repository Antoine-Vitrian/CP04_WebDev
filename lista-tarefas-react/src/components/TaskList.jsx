import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggleDone }) {
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggleDone={onToggleDone} />
      ))}
    </ul>
  );
}
