/** @jsxImportSource @emotion/react */
import React, { useRef, useState } from "react";
import TodoList from "./TodoList";
import styles from "./Todos.style";

const Todos = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<{ id: number; todo: string }[]>([]);

  const nextIdRef = useRef<number>(0);

  const onAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTodos((state) => {
      return [...state, { id: nextIdRef.current, todo: input }];
    });
    nextIdRef.current++;
    setInput("");
  };

  const onReamoveTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    console.log(id);
    setTodos(newTodos);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };
  return (
    <div css={styles.wrapper}>
      <div>
        <input type="text" value={input} onChange={onChangeInput} />
        <button type="button" onClick={onAddTodo}>
          추가
        </button>
      </div>

      <TodoList todos={todos} onRemove={onReamoveTodo} />
    </div>
  );
};

export default Todos;
