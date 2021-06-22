import {useState} from 'react'

const users=[
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 30},
    {name: 'Michael', age: 40}
]

const UserSearch: React.FC = ()=> {
    const [name, setName]=useState('')
    const [user, setUser]= useState<{name: string, age:number}|undefined>()
    const handleClick = ()=> {
        const foundUser = users.find(user=>user.name===name)
        setUser(foundUser)

    }

 return (<div>User Search

     <input value={name} onChange={(e)=>setName(e.target.value)}/>
     <button onClick={handleClick} >Find User</button>
     <div>{user?.name}</div>
 </div>)
}

export default UserSearch