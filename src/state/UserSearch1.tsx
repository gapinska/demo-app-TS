import { Component } from "react"

interface UserSearchProps {
  users: {
    name: string
    age: number
  }[]
}

interface UserSearchState {
  name: string
  user: { name: string | undefined }
}

class UserSearch1 extends Component<UserSearchProps> {
  state = {
    name: "",
    user: undefined,
  }
  render() {}
}

export default UserSearch1
