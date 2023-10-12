import React from 'react';

export const TodoList = ({ todos, handleToggleTodo }) => {
  return (
    <div>
      <div>Todo</div>
      {todos.map((todo, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <span>{todo.description}</span>
        </div>
      ))}
    </div>
  );
};


