import React from 'react'
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar className="sidebar"/>
        <Chat className="chat"/>
      </div>
     
    </div>
  )
}

export default Home