import React from "react"
import "./App.css"
import EventComponent from "./events/EventComponent"
import GuestList from "./state/GuestList"
import UserSearch from "./state/UserSearch"
import UserSearch1 from "./state/UserSearch1"

const users = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 30 },
  { name: "Michael", age: 40 },
]

function App() {
  return (
    <div className="App">
      <UserSearch1 users={users} />
      {/* <EventComponent/> */}
      {/* <UserSearch/> */}
      {/* <GuestList /> */}
    </div>
  )
}

export default App
