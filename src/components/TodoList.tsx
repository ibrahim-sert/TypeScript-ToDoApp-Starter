import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC<ITodoList> = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          item={item}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
