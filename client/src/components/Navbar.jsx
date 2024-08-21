import { Link } from "react-router-dom";
import '../../src/css/nav.css';

export default function Navbar(){
    return(
        <nav className="header">
            <h1 className="logo">CyberSec</h1>
            <div className="menu">
                <div>
                    <Link to='/' className="nav__link">Home</Link>
                    <Link to='/register' className="nav__link">Register</Link>
                    <Link to='/login' className="nav__link">Login</Link>
                </div>
            </div>
        </nav>
    )
}
