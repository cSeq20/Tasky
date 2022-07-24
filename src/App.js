import { useState } from "react";
import { nanoid } from "nanoid";
import { TodoItem } from "./models/TodoItem";
import TodoForm from "./components/TodoForm";
import TodoListItem from "./components/TodoListItem";
import './App.css';
import { List } from '@mui/material';

function App() {
  const [tasks, setTasks] = useState([]);
  const taskList = tasks.map(task => (
    <TodoListItem 
      task={task}
      key={task.id}
      deleteTask={deleteTask}
      editTaskName={editTaskName}
      />
  ));

  const headingText = `${taskList.length > 0 ? `${taskList.length} tasks reamining today` : 'No tasks today!'}`;

  function addTask(taskName) {
    const newTask = new TodoItem(nanoid(), taskName, "", new Date(), false);
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter(task => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTaskName(id, newTaskName) {
    const editedTasks = tasks.map(task => {
      if (task.id === id) {
        return {...task, taskName: newTaskName};
      }
      return task;
    });

    setTasks(editedTasks);
  }
  
  return (
    <div>
      <div className="todo-app-container stack-large">
        <h1>Tasky</h1>
        <TodoForm 
          addTask={addTask}
        />
      </div>
      <div className="list-container">
        <p>{headingText}</p>
        <List >
          {taskList}
        </List>
      </div>
    </div>    
  );
}

export default App;