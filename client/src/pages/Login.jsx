import {useState} from "react";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'
import '../css/form.css'

export default function Login(){
    const navigate = useNavigate()
    const [data,setData] = useState({
        email:'',
        password:'',
    })

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
          const { data } = await axios.post('/login', {
            email,
            password
          });
          if (data.error) {
            toast.error(data.error);
          } else {
            setData({});
            navigate('/dashboard');  // Navigate to the home page on successful login
          }
        } catch (error) {
          toast.error('An error occurred during login');
          console.error(error);  // Log the error to the console for debugging
        }
      };

 
    return(
        <div className="form">
        <form onSubmit={loginUser}>
            <input type='email' placeholder='enter Email' value={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
            <input type='Password' placeholder='enter Pass' value={data.password} onChange={(e) => setData({...data,password: e.target.value})}/>
            <button type="submit">Login</button>
        </form>
    </div>
    )
}