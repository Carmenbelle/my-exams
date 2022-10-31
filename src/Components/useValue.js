import { useReducer } from "react"

const useValue = () => {

 const initialValue = 0
 const reduce = (state, action) => {
    switch (action) {
     case "increment":
        return state + 1
     case "decrement":
        return state - 1
     case "reset":
        return initialValue
    case "getvalue":
        return ""
     default:
        return state
    }

 }

 
 useReducer(reduce, initialValue)
 
 

}

export default useValue