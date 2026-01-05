import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoFilters from "./components/TodoFilters";
import "./App.css";

function App() {
  const [tasks, setTasks] = useLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [editTask, setEditTask] = useState(null);

  const addOrUpdateTask = (data) => {
    if (editTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editTask.id ? { ...task, ...data } : task
        )
      );
      setEditTask(null);
    } else {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          title: data.title,
          description: data.description,
          completed: false,
        },
      ]);
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === "active") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    })
    .filter(
      (task) =>
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
    );

  const activeCount = tasks.filter((task) => !task.completed).length;

  return (
    <div className="app">
      <h1>Todo Application</h1>

      <TodoForm
        onSave={addOrUpdateTask}
        editTask={editTask}
        onCancel={() => setEditTask(null)}
      />

      <TodoFilters
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
        activeCount={activeCount}
      />

      <TodoList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={setEditTask}
      />
    </div>
  );
}

export default App;
