import React, { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {
  // const { data, isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoQuery(todoId);
  const nextTodo = () => {
    setTodoId((id) => id + 1);
  };
  const previusTodo = () => {
    if (todoId === 1) return;
    setTodoId((id) => id - 1);
  };
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading:{isLoading ? 'True' : 'False'}</h4>

      <pre>
        <span>{todo?.id}</span>
        {'  '}
        {todo?.title}
      </pre>
      {/*  <ul>
        {data?.map(({ id, title, completed }) => (
          <li
            key={id}
            style={{
              textDecoration: completed ? 'line-through' : 'none',
            }}
          >
            {title}
          </li>
        ))}
      </ul> */}
      <button onClick={previusTodo}>Previus TODO</button>
      <button onClick={nextTodo}>Next TODO</button>
    </>
  );
};
