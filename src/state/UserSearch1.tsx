import { Component } from "react"

interface User {
  name: string
  age: number
}

// interface UserSearchProps {
//   users: {
//     name: string
//     age: number
//   }[]
// }

interface UserSearchProps {
  users: User[]
}

// interface UserSearchState {
//   name: string
//   user: { name: string, age: number } | undefined
// }

interface UserSearchState {
  name: string
  user: User | undefined
}
class UserSearch1 extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: "",
    user: undefined,
  }

  handleClick = () => {
    const foundUser = this.props.users.find(
      (user) => user.name === this.state.name
    )
    this.setState({ ...this.state, user: foundUser })
  }
  render() {
    const { user, name } = this.state
    return (
      <div>
        User Search
        <input
          value={name}
          onChange={(e) =>
            this.setState({ ...this.state, name: e.target.value })
          }
        />
        <button onClick={this.handleClick}>Find User</button>
        <div>{user?.name}</div>
      </div>
    )
  }
}

export default UserSearch1
