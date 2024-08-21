import {useState} from "react";
import axios from 'axios';
import {toast} from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import '../css/form.css'

export default function Register(){
    const navigate = useNavigate()
    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
    })

    const registerUser = async (e) =>{
        e.preventDefault()
        const {name,email,password} = data
        try{
            const {data} = await axios.post('/register',{
                name, email, password
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success('Login Successful')
                navigate('/login')
            }
        }catch(error){
            console.log(error)
        }
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