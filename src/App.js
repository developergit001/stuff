import React from 'react';
import './App.css';
import useOrderCountHook from './useOrderCount';
import RenderCounter from './RenderCounter';
import RenderCounterFix from './RenderCounterFix';
//Testing moment and date's functions import Dates from './Dates';
import FetchingNormal from './FetchingNormal'
import FetchingUseMemo from './FetchingUseMemo';
import MemoCallBack from './memocallback';

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
      <FetchingNormal />
      <br></br>
      <FetchingUseMemo />
      <br></br>
      <MemoCallBack></MemoCallBack>
   </div>
  );
}

export default App;
