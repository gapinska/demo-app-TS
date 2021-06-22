import React from "react"
import "./App.css"
import EventComponent from "./events/EventComponent"
import GuestList from "./state/GuestList"
import UserSearch from "./state/UserSearch"

function App() {
  return (
    <div className="App">
      <EventComponent/>
      {/* <UserSearch/> */}
      {/* <GuestList /> */}
    </div>
  )
}

export default App
