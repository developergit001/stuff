import React,{useMemo} from "react";
import useFetch from './useFetch';

const giveMeFirstWord = (param) => {
  if (!param || !param.data)
  return null;
  const word = param.data.split(' ')[0];
  console.log('FetchingUseMemo:'+word);
  return word; 
};

const FetchingUseMemo = () => {
  const data = useFetch('https://api.kanye.rest/?format=text');
  const data2 = Math.random().toString();

  /*
  when you use "useMemo", only the function giveMeFirstWord execute one time only!, even in "re render".
  if you dont use it, its gonna be executing all the time during any components changes.
  the [data] its the dependency change, so if data change, then now of course, useMemo its gonna execute again 
  giveMeFirstWord (and its ok, because you change the value of its dependency ->data).
  You can try changing [data] to => [data2] and then, yes... its gonna be invoked 
  every time giveMeFirstWord (because data2 its a random number).
  */
  const word = useMemo( () => giveMeFirstWord(data), [data]);


  return (
    <div>
      Word with useMemo: {word} 
    </div>

  );
};

export default FetchingUseMemo;