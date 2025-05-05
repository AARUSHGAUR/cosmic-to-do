import React, { useState } from 'react';
import TaskItem from './TaskItem';
import '../styles/App.css';

const TaskList = ({ tasks, toggleComplete, deleteTask, categories }) => {
  const [filter, setFilter] = useState('All');

  const filteredTasks = filter === 'All' 
    ? tasks 
    : tasks.filter(task => task.category === filter);

  return (
    <div className="task-list-container">
      <div className="filter-container">
        <button 
          className={`filter-btn ${filter === 'All' ? 'active' : ''}`} 
          onClick={() => setFilter('All')}
        >
          All Tasks
        </button>
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`} 
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="task-list">
        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <p>No tasks in this galaxy yet! 🪐</p>
          </div>
        ) : (
          filteredTasks.map(task => (
            <TaskItem 
              key={task.id} 
              task={task} 
              toggleComplete={toggleComplete} 
              deleteTask={deleteTask} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;

