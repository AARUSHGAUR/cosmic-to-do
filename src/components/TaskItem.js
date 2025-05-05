import React from 'react';
import '../styles/App.css';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  // Format the date
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Define category icons
  const categoryIcons = {
    'Star Tasks': '⭐',
    'Galaxy Goals': '🌌',
    'Meteor Missions': '☄️',
    'Comet Chores': '🌠'
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <div className="task-checkbox-container">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
            className="task-checkbox"
            id={`task-${task.id}`}
          />
          <label htmlFor={`task-${task.id}`} className="task-checkbox-label">
            <span className="checkmark"></span>
          </label>
        </div>
        
        <div className="task-details">
          <div className="task-text">{task.text}</div>
          <div className="task-meta">
            <span className="task-category">
              {categoryIcons[task.category] || '🚀'} {task.category}
            </span>
            <span className="task-date">{formatDate(task.createdAt)}</span>
          </div>
        </div>
      </div>
      
      <button 
        className="delete-task-btn" 
        onClick={() => deleteTask(task.id)}
        aria-label="Delete task"
      >
        <span className="delete-icon">🗑️</span>
      </button>
    </div>
  );
};

export default TaskItem;

