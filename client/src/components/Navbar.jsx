import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <nav>
            <link to='/'>Home</link>
            <link to='/register'>Register</link>
            <link to='/login'>Login</link>
        </nav>
    )
}