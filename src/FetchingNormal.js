import React from "react";
import useFetch from './useFetch';

function giveMeFirstWord(param){
  if (!param || !param.data)
  return null;
  const word = param.data.split(' ')[0];
  console.log('FetchingNormal:'+word);
  return word; 
}

const FetchingNormal = () => {
  const data = useFetch('https://api.kanye.rest/?format=text');
  
  /*
  In this case: 
  on every re render, giveMeFirstWord is invoked, thats because, we dont use here useMemo hook!.
  */
  
  return (
    <div>
      Word: {giveMeFirstWord(data)} 
    </div>

  );
};

export default FetchingNormal;