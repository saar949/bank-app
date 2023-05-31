import React from 'react'

export default function Expenses(props) {
  return (
    <div>
        {props.users[props.index].expenses.map((val,index)=>{
            return <h1> {val.company}  {val.price}  <button onClick={()=>{props.delExpenses(index,props.index)}}>del </button>  </h1>
        })}
        <button onClick={()=>{props.delUser(props.index);props.setFlag(false)}} ></button>  
    </div>
  )
}
