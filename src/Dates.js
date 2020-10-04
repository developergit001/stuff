import React from "react";
import moment from 'moment';

const Dates = () => {

  let rightnow = moment();

  const isOldDate = pdate => {
    try{
      
      let now = moment();
      console.log('second',now);
      let fecha = moment(pdate);
      if (now.isSame(fecha,'day')) 
        return true;
      else
        return false;
  
    } catch(e){
      console.log('isOldDate error',e)
      return true;
    }
  };  

  function compare(){
    console.log('first',rightnow)
    console.log(isOldDate(rightnow));


    console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    let date1 = moment();
    let date2 = moment();
    console.log('2010-10-20 vs 2009-12-31 isSame - year',moment('2010-10-20').isSame('2009-12-31', 'year'));  // false different year
    console.log('2010-10-20 vs 2010-01-01 isSame - year',moment('2010-10-20').isSame('2010-01-01', 'year'));  // true same year
    console.log('2010-10-20 vs 2011-01-01 isSame - year',moment('2010-10-20').isSame('2011-01-01', 'year'));  // false different year
  
    console.log('2010-01-01 vs 2011-01-01 isSame - month',moment('2010-01-01').isSame('2011-01-01', 'month')); // false, different year
    console.log('2011-01-01 vs 2011-01-01 isSame - month',moment('2011-01-01').isSame('2011-01-01', 'month')); // true
    console.log('2010-01-01 vs 2010-02-01 isSame - day  ',moment('2010-01-01').isSame('2010-02-01', 'day'));   // false, different month
    console.log('2010-01-01 vs 2010-01-01 isSame - day  ',moment('2010-01-01').isSame('2010-01-01', 'day'));   // true
  
    console.log('now -5 seconds vs now plus 5 seconds isSame miliseconds',rightnow.isSame(date2)); //false compare in miliseconds so... is false
    console.log('now -5 seconds vs now plus 5 seconds isSame day        ',date1.isSame(date2,'day')); //true compare days
    console.log('now vs now isSame miliseconds        ',moment().isSame(moment())); //true just same miliseconds

  
    console.log('end');
  }

  console.log('begin')
  setTimeout(compare,5000);

  return (
    <div>Trying date's functions</div>
  );
};

export default Dates;