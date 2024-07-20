import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className='counter'>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>| 0 |</button>
      <button onClick={() => dispatch(increment())}>+1</button> 
    </div>
  );
};

export default Counter;
