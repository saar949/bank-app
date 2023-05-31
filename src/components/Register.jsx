import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register(props) {
    const [id, setID] = useState('')
    const [name, setName] = useState('')
    const [password, SetPassword] = useState('')
    const [money, setMoney] = useState(0)

    const nav = useNavigate()

    const validDetails = () => {
        let confirmPass = document.getElementById('confirmPass').value
        if (id.length != 9) {
            alert('err')
            return
        }



        for (let i = 0; i < id.length; i++) {
            if (id[i] < '0' || id[i] > '9') {
                alert('err')
                return
            }
        }
        if (name.length < 4) {
            alert('name by 4 char')
            return
        }

        if (password.length < 6) {
            alert('pass by 6 number')
            return
        }

        if (password != confirmPass) {
            alert('pass not same')
            return
        }

        if (money > 1000000 || money < 0) {
            alert('must betwen 1000000 -0')
            return
        }
        else {
            props.addUsers(id, name, password, money)
            nav('/')
        }

    }

   






    return (
        <div>
            <input id='id' type="text" placeholder='enter id' onChange={(e) => { setID(e.target.value) }} />  <br />
            <input id='name' type="text" placeholder='enter name' onChange={(e) => { setName(e.target.value) }} /> <br />
            <input id='pass' type="text" placeholder='password' onChange={(e) => { SetPassword(e.target.value) }} /> <br />
            <input id='confirmPass' type="text" placeholder='confrim passwrod' /> <br />
            <input id='money' type="text" placeholder='money' onChange={(e) => { setMoney(e.target.value) }} /> <br />
            <button onClick={validDetails}>create</button>
        </div>
    )
}
