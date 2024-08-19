import {useState} from "react"

export default function Register(){

    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
    })

    const registerUser = (e) =>{
        e.preventDefault()
    }

    return(
        <div>
            <form onSubmit={registerUser}>
                <input type='text' placeholder='enter Name' value={data.name} onChange={(e) => setData({...data,name: e.target.value})}/>
                <input type='email' placeholder='enter Email' value={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
                <input type='Password' placeholder='enter Pass' value={data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}