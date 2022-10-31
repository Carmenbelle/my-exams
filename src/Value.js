import React, {useReducer} from 'react'

const initialValue = {
    counter: 0
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {counter: state.counter + 1}
        case 'decrement':
            return {counter: state.counter - 1}
        case 'reset':
            return initialValue
        case 'getvalue':
            return ''
        default:
            return state
    }
}

const Value = () => {
   const [count, dispatch] = useReducer(reducer, initialValue)


  return (
    <div>
        <h1>Count: {count.counter}</h1>
        <button onClick={() => dispatch({type: "increment"})}>Increase items</button>
        <button onClick={() => dispatch({type: "decrement"})}>Reduce items</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

    </div>
  )
}

export default Value