import classes from "./Counter.module.css"
import { useSelector, useDispatch } from "react-redux"
import { counterActions } from "../store/counter"

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment())
    console.log(counterActions.increment())
  }

  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
    console.log(dispatch(counterActions.increase(10)))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
    console.log(dispatch(counterActions.decrement()))
  }
  const decreaseHandler = () => {
    dispatch(counterActions.decrease(counter))
    console.log(dispatch(counterActions.decrease(counter)))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
    console.log(dispatch (counterActions.toggleCounter()))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decreaseHandler}>Decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
