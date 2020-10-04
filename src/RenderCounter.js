import React, { useRef } from "react";

const RenderCounter = () => {
  const counter = useRef(0);
  
  // Since the ref value is updated in the render phase,
  // the value can be incremented more than once
  counter.current = counter.current + 1;

  return (
    <h1>{`The component has been re-rendered ${counter.current} times <br />(without useEffect do odd behaviors)`}</h1>
  );
};
export default RenderCounter;