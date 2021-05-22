import { useState, useCallback } from 'react'

function useCounter(initalState,max, price, setTotalCount) {
  const [ counter, setCounter ] = useState(initalState)
  const [ itemPrice, setItemPrice] = useState(initalState*price)
  
  const onIncrease = () => {
    if(counter > max){
      setItemPrice(counter * price)
      alert("재고 수량 이상입니다")
      setCounter(counter)
      setTotalCount(counter * price)
    }
    else{
      setItemPrice((counter+1) * price)
      setCounter(counter + 1);
      setTotalCount((counter+1) * price)
    }
  }
  
  const onDecrease = () => {
    if(counter < 0){
      alert("0보다 작을순 없습니다!")
      setCounter(0);
      setItemPrice(0 * price)
      setTotalCount(0 * price)
    }
    else{
      setItemPrice((counter-1) * price)
      setCounter(counter-1);
      setTotalCount((counter-1) * price)
    }
  }


  return [counter, onIncrease, onDecrease, itemPrice];
}

export default useCounter