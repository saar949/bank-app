import React, { useState } from 'react'
import Expenses from './Expenses'
export default function Mananger(props) {
  const [flag, setFlag] = useState(false)
  const [index, setIndex] = useState()

  const showExpenses = () => {
    if (flag) {
      return <Expenses users={props.users} index={index} delExpenses={props.delExpenses} delUser={props.delUser} setFlag={setFlag} />
    }
  }

  return (
    <div>
      <h1>manager</h1>
      {props.users.map((val, index) => {
        return <h1>{val.name}  {val.id} <button onClick={() => { setFlag(!flag); setIndex(index) }} >x</button></h1>
      })
      }
      {showExpenses()}
    </div>
  )
}
