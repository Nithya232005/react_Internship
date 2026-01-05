function TodoFilters({ filter, setFilter, search, setSearch, activeCount }) {
  return (
    <div className="filters">
      <div className="filter-buttons">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <p className="counter">Active Tasks: {activeCount}</p>
    </div>
  );
}

export default TodoFilters;
