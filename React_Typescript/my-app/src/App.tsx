import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos"
import TodosContextProvdier from "./store/todo-context";


function App() {

  

  return (
    <TodosContextProvdier>
      <NewTodo />
      <Todos />
    </TodosContextProvdier>
  )
}

export default App