import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { consumer } from "../contactApi";

export default function Menu(props) {

  const [flag, setFlag] = useState(false)
  const [company, setCompany] = useState('')
  const [price, Setprice] = useState('')

  const show = () => {
    if (flag) {
      return <div>
        <input type="text" onChange={(e) => { setCompany(e.target.value) }} />
        <input type="text" onChange={(e) => { Setprice(e.target.value) }} />
        <button onClick={()=>{props.newExpenses(props.index,company,price);setFlag(false)}}>add</button>
      </div>
    }

  }


  return (
    <div>
      <h1>walcome</h1>
      <p>{props.val.name}</p>


      <button onClick={() => { alert(props.val.money) }} >balanc</button>
      <button onClick={()=>{setFlag(true)}}  >action</button>
      {show()}
        <Link to={'/edit'} ><button onClick={()=>{props.setIndex(props.index);props.setFlagToUser(true)}} >edit</button></Link>
     <Link to={'/'}> <button>exit</button></Link> 
    </div>
  )
}
