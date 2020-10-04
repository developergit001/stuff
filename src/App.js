import React from 'react';
import './App.css';
import useOrderCountHook from './useOrderCount';
import RenderCounter from './RenderCounter';
import RenderCounterFix from './RenderCounterFix';
import Dates from './Dates';

function App() {
  const orderHook = useOrderCountHook();
  return (
    <div>
      <h1>count:{orderHook.orderCount.count}</h1>
      <button type='button' onClick={orderHook.changeOrderCount}>Increment</button>
      <RenderCounter />
      <br></br>
      <RenderCounterFix />
      <br></br>
      <Dates />
   </div>
  );
}

export default App;
