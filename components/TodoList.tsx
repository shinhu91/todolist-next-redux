/** @jsxImportSource @emotion/react */
import React from "react";
import styles from "./TodoList.style";
interface Props {
  todos: { id: number; todo: string }[];
  onRemove: (id: number) => void;
}

const TodoList = ({ todos, onRemove }: Props) => {
  return (
    <div css={styles.wrapper}>
      {todos.map((todo, index) => {
        return (
          <div key={index} css={styles.item} id={"test"}>
            <div>{todo.todo}</div>
            <button onClick={() => onRemove(todo.id)}>삭제</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
