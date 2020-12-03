import * as React from 'react';

type CounterState = { count: number }
type ActionType = 
                | { type: 'increment', payload: number}
                | { type: 'decrement', payload: number}

const initialState: CounterState = {count: 3000};


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
        <p>Counting: {state.count}</p>
        <button onClick={() => dispatch({type: 'decrement', payload: 100})}>-</button>
        <button onClick={() => dispatch({type: 'increment', payload: 100})}>+</button>
    </>
  );
}
export default Counter;