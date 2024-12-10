import React, { useEffect, useState } from 'react'
import ComponentOne from "./ComponentOne";

function HookCounter() {
  const [count,setCount] = useState(0)

  const incrementCount = ()=>{
    setCount(count+1)
  }
  
  const decrementCount = ()=>{
    setCount(count-1)
  }

  // it will only run once when the component is mounted 
  //componentWillMount using useEffect
  useEffect(()=>{
    console.log("only One time runner hook")
    document.title = `You have clicked ${count}`
    // for disable showing warning in next line
    // eslint-disable-next-line 
  },[])


  // componentDidupdate using useEffect Hook
  // In order to have this hook run when the component is updated (this includes mounting), we need to set
  // at least one variable as hook's dependency (in this case, var1 and var2). in our case watch on `count`
  useEffect(() => {
    console.log("Update hook")
    document.title = `You have clicked ${count}`
  }, [count]);

  // componentWillUnmount using useEffect Hook 
  useEffect(()=>{
    return ()=>{
      console.log("Component is unmounted")
    }
  },[])

  return (
    <div>
        <p> {count} </p>
        <button onClick={incrementCount}>Increment </button>
        <button onClick={decrementCount}>decrement </button>

        <ComponentOne count={count}/>
    </div>
  )
}

export default HookCounter