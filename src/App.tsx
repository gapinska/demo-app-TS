import React from "react"
import "./App.css"
import EventComponent from "./events/EventComponent"
import GuestList from "./state/GuestList"
import UserSearch from "./state/UserSearch"
import UserSearch1 from './state/UserSearch1'

function App() {
  return (
    <div className="App">
      <UserSearch1/>
      {/* <EventComponent/> */}
      {/* <UserSearch/> */}
      {/* <GuestList /> */}
    </div>
  )
}

export default App
