import React from 'react'
import Header from "../components/Header"
import Sidebar from '../components/Sidebar'
import Body from '../components/Body'
import "./Users.css"


function Users({users,onLink}) {
  return (
    <div className="users--container">
      <div className="users--header">
       <Header users={users}/>
      </div>
      <div className="users--content">
        <Sidebar/>
        <Body users={users} onLink={onLink}/>
      </div>
      
    </div>
  )
}

export default Users