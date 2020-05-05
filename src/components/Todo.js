import React from 'react'
import './Todo.css'
const Todo = props => {
  return (
    <div 
    onClick={() => props.toggleTodo(props.todo.id)}
    className={`todo${props.todo.completed ? ' completed' : ''}`}
    >
      <p>Task: {props.todo.task}</p>
    </div>
  );
};

export default Todo;