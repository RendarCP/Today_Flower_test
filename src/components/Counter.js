import React from 'react'
//import useCounter from '../hooks/useCounter'

function Counter({ counter, onIncrease, onDecrease, setTotalCount}) {
 //const [ counter , onIncrease, onDecrease] = useCounter(1, max)
  return(
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <button 
        style={{ 
          border: 'none', 
          backgroundColor: 'white', 
          fontSize: 20
        }} 
        onClick={onDecrease}>-</button>
      <div style={{ fontSize: 25 }}>{counter}</div>
      <button style={{ 
          border: 'none', 
          backgroundColor: 'white', 
          fontSize: 20
        }} 
        onClick={onIncrease}>+</button>
    </div>
  )
}

export default Counter