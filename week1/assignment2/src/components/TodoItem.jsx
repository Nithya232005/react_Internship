function TodoItem({ task, onToggle, onDelete, onEdit }) {
  return (
    <div className={`todo-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <div className="todo-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>

      <div className="todo-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
