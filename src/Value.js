// import React, { useReducer } from "react";
// import useValue from "./Components/usersdata";

// const Value = () => {
//   const { initialValue, reducer } = useValue;
//   const [state, dispatch] = useReducer(reducer, initialValue);

//   const valueHandler = (event) => {
//     // console.log(event.target.value);
//     if (event.target.value !== "") {
//       return dispatch({ type: "setValue", payload: event.target.value });
//     }
//     return dispatch({ type: "setValue", payload: 0 });
//   };

//   return (
//     <div>
//       <h1>Count: {state.counter}</h1>
//       <button onClick={() => dispatch({ type: "increment" })}>
//         Increase items
//       </button>
//       <button onClick={() => dispatch({ type: "decrement" })}>
//         Reduce items
//       </button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//       <span>
//         <input type="number" onChange={valueHandler} />
//       </span>
//     </div>
//   );
// };

// export default Value;
