// @flow 
import React, {useState} from 'react';
import Text from "./text";
import Button from "./button";

const Counter = ({initialValue=0}) => {
    const [count,setCount] = useState(initialValue)
 return (
  <>
   <Text value={"Counter App"} style={{fontSize:"32px",color:'blue',fontWeight:'bold'}}/>
   <Text value={`Value of Counter is :${count}`} style={{fontSize:"14",fontWeight:'bold'}}/>
   <Button className="btn btn-primary" value={'Increment'} onClick={()=>setCount(count+1)}/>
   &nbsp;
   <Button className="btn btn-info" value={'Decrement'} onClick={()=>setCount(count-1)}/>
  </>
 )
};
export default Counter;