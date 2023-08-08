import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addUser, deleteUser, UpdateUsername} from './features/UsersReducer'
import "./App.css"
 
function App() {
  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value)

  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [newUsername, setNewUsername] = useState("")
  return (
    <div className='app'>
      <h1>Add new User</h1>
      <div className='addUser'>
        <input type = "text" placeholder='Name' onChange={(event) => {setName(event.target.value)}}/>
        <input type = "text" placeholder='Username' onChange={(event) => {setUsername(event.target.value)}}/>
        <button onClick={() => {
          dispatch(
            addUser({ 
              id: userList[userList.length - 1].id + 1, 
              name: name, 
              username: username}))}}
        > 
          Add User
        </button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return( 
          <div>
            <h2>{user.name}</h2>
            <h2>{user.username}</h2>
            <input type = "text" placeholder='New username' onChange={(event) => {setNewUsername(event.target.value)}}/>
            <button
              onClick={ () => {
                dispatch(UpdateUsername({ id: user.id, username: newUsername}))
              }}
            > 
              Update User
            </button>
            <button 
              onClick={ () => { 
                dispatch ( deleteUser({ id: user.id }))
              }}
            >
              Delete User
            </button>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
