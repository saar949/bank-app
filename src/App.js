
import { useState } from 'react';
import { HashRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Menu from './components/Menu';
import Mananger from './components/Mananger';


function App() {

  const [users, setUsers] = useState([])
  const [index, setIndex] = useState()
  const [flagToUser,setFlagToUser] =useState(false)
// הוספת משתמש 
  const addUsers = (id, name, pass, money) => {
    setUsers([...users, { id, name, pass, money, expenses: [] }])

  }
  // הוספת משתמש 

  // הוספת מוצר למערך 
  const newExpenses = (index, company, price) => {
    users[index].expenses.push({ company, price })
    setUsers([...users])

  }
//  עידכון פרטי משתמש
  const edit = (id, name, pass, money) => {
    users[index].id = id
    users[index].name = name

    users[index].pass = pass
    users[index].money = money
    setUsers([...users])
  }

 //  מחיקת מוצר מהמערך
  const delExpenses = (i, userI) => {
    
    let deletexpenses = users[userI].expenses.filter((val, index) => (i != index))
    users[userI].expenses=[...deletexpenses]
    setUsers([...users])


  }
  // מקחית משתמש
  const delUser = (i) => {
    let deleteUser = users.filter((val, index) => (i != index))
    setUsers([...deleteUser])
  }


  return (
    <div className="App">
      <HashRouter>

        <Routes>
          <Route path='/' element={<SignIn users={users}  />} />
          <Route path='/register' element={<Register addUsers={addUsers}  />} />
          {users.map((val, index) => {
            return <Route path={`${val.name}`} element={<Menu val={val} index={index} newExpenses={newExpenses} setIndex={setIndex} setFlagToUser={setFlagToUser} />} />
          })}
          <Route path='/banker' element={<Mananger users={users} delExpenses={delExpenses} delUser={delUser} />} />


          <Route path='/edit' element={<Register addUsers={edit}   />} />





        </Routes>



      </HashRouter>


    </div>
  );
}

export default App;



