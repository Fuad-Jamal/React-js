import React, {useEffect, useState} from 'react'

export const Counter = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      console.log('The count is:', count)
      return () =>{
        console.log('the following is')
      }
    },[count])

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () =>{
        setCount(count - 1)
    }

    const reset = ()=> {
     setCount(0)   
    }

  return (
    <div className='container'>
      <p className='display'>{count}</p>
      <button className='btn' onClick={decrement}>Decrement</button>
      <button className='btn' onClick={reset}>Reset</button>
      <button className='btn' onClick={increment}>Increment</button>
    </div>
  );
}
