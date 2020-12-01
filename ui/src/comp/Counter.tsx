import * as React from 'react';

type CounterState = { count: number }
type ActionType = 
                | { type: 'increment', payload: number}
                | { type: 'decrement', payload: number}

const initialState: CounterState = {count: 0};


const reducer = (state: CounterState, action: ActionType): CounterState => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + action.payload};
    case 'decrement':
      return {count: state.count - action.payload};
    default:
      throw new Error();
  }
}

const Counter:React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
        <p>Count: {state.count}</p>
        <button onClick={() => dispatch({type: 'decrement', payload: 5})}>-</button>
        <button onClick={() => dispatch({type: 'increment', payload: 5})}>+</button>
    </>
  );
}
export default Counter;