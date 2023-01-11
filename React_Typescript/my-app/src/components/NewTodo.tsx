import React from "react"
import { useRef, useContext } from "react";
import { TodosContext } from "../store/todo-context";
import classes from './NewTodo.module.css'

const NewTodo: React.FC= () => {

  const todoCtx = useContext(TodosContext);


    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;
        if (enteredText.trim().length === 0) {
            //* throw an error
            return;
        }

        todoCtx.addTodo(enteredText)
    }
    

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
