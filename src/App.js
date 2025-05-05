import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles/App.css';

function App() {
  // Define task categories
  const taskCategories = ['Star Tasks', 'Galaxy Goals', 'Meteor Missions', 'Comet Chores'];
  
  // State management
  const [tasks, setTasks] = useState([]);
  
  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem('cosmicTasks');
    if (savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.error('Error parsing tasks from localStorage:', error);
        setTasks([]);
      }
    }
  }, []);
  
  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('cosmicTasks', JSON.stringify(tasks));
  }, [tasks]);
  
  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  
  // Toggle task completion
  const toggleComplete = (taskId) => {
    setTasks(
      tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };
  
  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };
  
  return (
    <div className="app-container">
      <div className="stars"></div>
      <div className="twinkling"></div>
      
      <div className="app-content">
        <header className="app-header">
          <h1>Cosmic Todo</h1>
          <p className="app-tagline">Organize your universe, one task at a time</p>
        </header>
        
        <main className="app-main">
          <TaskInput 
            addTask={addTask} 
            categories={taskCategories} 
          />
          
          <TaskList 
            tasks={tasks} 
            toggleComplete={toggleComplete} 
            deleteTask={deleteTask}
            categories={taskCategories}
          />
        </main>
        
        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Cosmic Todo App</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
