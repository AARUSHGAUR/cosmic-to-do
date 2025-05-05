import React, { useState } from 'react';
import '../styles/App.css';

const TaskInput = ({ addTask, categories }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('Star Tasks');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({
        id: Date.now(),
        text: task,
        category,
        completed: false,
        createdAt: new Date()
      });
      setTask('');
    }
  };

  return (
    <form className="task-input-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new cosmic task..."
          className="task-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="add-task-btn">
        <span className="btn-text">Add Task</span>
        <span className="btn-icon">🚀</span>
      </button>
    </form>
  );
};

export default TaskInput;

