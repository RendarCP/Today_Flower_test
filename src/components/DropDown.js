import React from 'react'

function DropDown({ children,name, value, onChange }) {
  return(
    <div>
      <select 
        name={name}
        value={value}
        onChange={onChange}
        style={{ width: '100%', padding: 10, fontSize: 15, fontWeight: 'bold' }}>
        <option value="" selected disabled hidden >선택해주세요.</option>
        {children}
      </select>
    </div>
  )
}

export default DropDown