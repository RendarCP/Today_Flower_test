import React, { useState } from 'react'
import Counter from '../components/Counter'
import useCounter from '../hooks/useCounter'

function Item({ setTotalCount, image, name, price, onChange, checked, onRemoveList, max }) {
  const [ counter, onIncrease, onDecrease, itemPirce] = useCounter(1, max, price, setTotalCount)
  return(
    console.log(itemPirce),
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: "space-between",
      borderBottom: "2px solid gray",
      alignItems: 'center',
      padding: 30 
    }}>
      <input 
        type="checkbox" 
        onChange={onChange}
        checked={checked}
      />
      <img src={image} style={{ width: 100, height: 100 }}/>
      <div>{name}</div>
      <Counter counter={counter} onIncrease={onIncrease} onDecrease={onDecrease} />
      <div>{`${price} 원`}</div>
      <div onClick={onRemoveList}>X</div>
    </div>
  )
}

export default Item