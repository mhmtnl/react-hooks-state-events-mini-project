import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, i) => (
        <Task handleDelete={handleDelete} key={i} text={task.text} category={task.category} />
      ))}
    </div>
  );
}

export default TaskList;