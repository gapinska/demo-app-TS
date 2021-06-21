import { Children } from "react"
// import { Child } from "./Child"
import { ChildAsFC } from "./Child"

const Parent = () => {
  return (
    <ChildAsFC
      color="green"
      onClick={() => {
        console.log("jkjk")
      }}
    >
      This is component
    </ChildAsFC>
  )
}

export default Parent
