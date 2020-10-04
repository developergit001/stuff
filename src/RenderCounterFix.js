import React, { useRef, useEffect } from "react";

const RenderCounterFix = () => {
  const counter = useRef(0);
  
  useEffect(() => {
    // Every time the component has been re-rendered,
    // the counter is incremented
    counter.current = counter.current + 1;
  }); 
  
  return (
    <h1>{`The component has been re-rendered ${counter.current} times`}</h1>
  );
};
export default RenderCounterFix;