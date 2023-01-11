import classes from "./Todo.module.css"
import React, { useContext } from "react"

import { TodosContext } from "../store/todo-context"
import TodoItems from "./TodoItems"

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);



  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItems
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  )
}

export default Todos
