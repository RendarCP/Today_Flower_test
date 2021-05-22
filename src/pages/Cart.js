import React, { useEffect, useState } from 'react'
import {deliveryTypes, cartLists} from '../data'

import DropDown from '../components/DropDown'
import Item from '../components/Item'

function Cart() {
  const [ select, setSelect ] = useState("") // 드랍다운 상태
  const [ checkItems, setCheckItems] = useState([]) // 체크박스 상태
  const [ lists, setLists ] = useState(cartLists) // 리스트 상태관리
  const [ totalCount, setTotalCount] = useState(0) // 총 수량
  const [ delivCount, setDelivCount] = useState(0) // 총 배송비
  const [ total, setTotal] = useState(0) // 총 금액
  
  // 드랍다운 상태 변경 
  const onChangeDropdown = (e) => {
    setSelect(e.target.value)
    totalDelivCount(e.target.value)
  }

  // 체크박스 전체 선택
  const onChangeCheckAll = (checked, checkItems) => {
    if(checked) {
      const ids = []
      cartLists.forEach(list => ids.push(list.id))
      setCheckItems(ids)
      lists.map(list => {
        if(checkItems.includes(list.id)){
          setTotal(list.product_price)
        }
      })
    }
    else{
      setCheckItems([])
    }
  }

  // 체크박스 하나씩 선택
  const onChangeCheck = (checked, id) => {
    if(checked){
      setCheckItems([...checkItems, id])
      lists.map(list => {
        if(checkItems.includes(list.id)){
          setTotal(list.product_price)
        }
      })
    }
    else{
      setCheckItems(checkItems.filter(o => o !== id))
    }
  }
  
  // 총 배송비
  const totalDelivCount = (select) => {
    deliveryTypes.map(delivery => {
      if(delivery.name === select){
        setDelivCount(delivery.delivery_price)
      }
      else{
        setDelivCount(0)
      }
    })
  }

  const onRemoveList = (id) => {
    console.log(id)
    const rmvList = lists.filter((i) => i.id !== id);
    setLists(rmvList)
  }

  return(
    console.log('cart',totalCount),
    <div>
      <div style={{ fontSize: 30, fontWeight: 'bold'}}>장바구니</div>
      <div style={{ borderBottom: '1px solid gray', marginTop: 10, marginBottom: 10 }}/>
      
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          <div style={{ fontSize: 20, fontWeight: 'bold'}}>주소</div>
          <div style={{ marginTop: 10 }}>서울시 강남구 도산대로 174 7층</div>
          <div style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>배송방법</div>
          <div>
            <DropDown
              name={select}
              onChange={onChangeDropdown}
              value={select}
            >
              {
                deliveryTypes.map(delivery => {
                  return(
                    <option key={delivery.id} value={delivery.name}>{delivery.name}</option>
                  )
                })
              }
            </DropDown>
          </div>
        </div>
        
        <div>
          <DropDown
            name={select}
            onChange={onChangeDropdown}
            value={select}
          >
            {
              deliveryTypes.map(delivery => {
                return(
                  <option key={delivery.id} value={delivery.name}>{delivery.name}</option>
                )
              })
            }
          </DropDown>
            {
              deliveryTypes.map(delivery => {
                return(
                  <div style={{ 
                    border: '1px solid black',
                    fontSize: 15, 
                    fontWeight: 'bold', 
                    padding: 10,
                    display: 'flex',
                    justifyContent: 'space-between'
                    }}
                  >
                    <div>{delivery.name}</div>
                    <div style={{ marginLeft: 50, color: 'gray' }}>{`${delivery.delivery_price}원`}</div>
                  </div>
                )
              })
            }
        </div>
      </div>
      
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 20, fontWeight: 'bold'}}>상품내역</div>
        <div>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            marginTop: 20,
            borderBottom: "2px solid gray",
            paddingBottom: 20,
            }}>
            <input type="checkbox" onChange={(e) => onChangeCheckAll(e.target.checked, checkItems)}/>
            <div style={{ marginLeft: 20 }}>전체</div>
          </div>
          {
            lists.map(list => {
              return(
                <Item 
                  setTotalCount={setTotalCount}
                  max={list.stock}
                  image={list.image_url}
                  name={list.product_name}
                  price={list.product_price}
                  counter={list.current_count}
                  onChange={(e)=> onChangeCheck(e.target.checked, list.id)}
                  onRemoveList={() => onRemoveList(list.id)}
                  checked={checkItems.includes(list.id)}
                />
              )
            })
          }
        </div>
      </div>
      
      <div style={{ 
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20, 
        border: "1px solid gray", 
        marginTop: 20, 
      }}
      >
        <div>총 상품 금액 : {total} 원</div>
        <div>총 상품 수량 : 0 개</div>
        <div>총 배송비: {delivCount} 원</div>
        <div>총 결제하실 금액 : 0원</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
        <div style={{ padding: "10px 30px", backgroundColor: 'gray', color: 'white', fontWeight: 'bold' }}>주문하기</div>
      </div>
    </div>
  )
}

export default Cart