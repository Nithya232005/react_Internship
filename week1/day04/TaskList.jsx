function App() {
  const tasks = [
    {
      id: 1,
      title: "Learn React",
      description: "Understand components, props, and JSX",
      completed: true,
    },
    {
      id: 2,
      title: "Practice JavaScript",
      description: "Solve array and string problems",
      completed: false,
    },
    {
      id: 3,
      title: "Build Project",
      description: "Create a task management application",
      completed: false,
    },
    {
      id: 4,
      title: "Prepare for Interviews",
      description: "Revise React basics and interview questions",
      completed: true,
    },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Task List</h2>

      {tasks.map((task) => (
        <div
          key={task.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "12px",
            backgroundColor: task.completed ? "#e8f5e9" : "#fff3f3",
          }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>

          <p
            style={{
              fontWeight: "bold",
              color: task.completed ? "green" : "red",
            }}
          >
            {task.completed ? "Completed ✅" : "Pending ❌"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
