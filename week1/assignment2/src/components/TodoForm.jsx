import { useState, useEffect } from "react";

function TodoForm({ onSave, editTask, onCancel }) {
  const [form, setForm] = useState({ title: "", description: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    if (editTask) {
      setForm({
        title: editTask.title,
        description: editTask.description,
      });
    }
  }, [editTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      setError("Title is required");
      return;
    }

    onSave(form);
    setForm({ title: "", description: "" });
    setError("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Task title"
        value={form.title}
        onChange={handleChange}
      />

      <textarea
        name="description"
        placeholder="Task description"
        value={form.description}
        onChange={handleChange}
      />

      {error && <p className="error">{error}</p>}

      <div className="form-actions">
        <button type="submit">{editTask ? "Update" : "Add Task"}</button>
        {editTask && (
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default TodoForm;
