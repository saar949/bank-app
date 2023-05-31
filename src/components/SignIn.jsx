import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn(props) {

    const nav = useNavigate()
    
    const logIn =()=>{
        let user =document.getElementById('user').value
        let pass = document.getElementById('pass').value
        if(user == 'admin' && pass == 'admin'){
            nav('/banker')
        }

        let result = props.users.find((val)=>(val.name == user && val.pass == pass))

        
        if(result == undefined){
            alert('user not fond')
            return
        }
        else{
            nav(`${result.name}` )
        }
    }


  return (
    <div>
        <input id='user' type="text" placeholder='enter name' /> <br />
        <input id='pass' type="text" placeholder='enter password' /> <br />
       <Link to={'/register'}><p >create</p></Link> 
        <button onClick={logIn}>log in</button>

    </div>
  )
}
