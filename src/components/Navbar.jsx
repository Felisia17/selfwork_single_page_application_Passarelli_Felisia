import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="nav">
            <ul>
                <li>
                    <Link className="link1" to={'/'}>Homepage</Link>
                </li>

                <li>
                    <Link className="link3" to={'/info'}>Info</Link>
                </li>
                 <li>
                    <Link  to={'/login'}>Login</Link>
                </li>
                 <li>
                    <Link  to={'/register'}>Register</Link>
                </li>
            </ul>
        </nav>
    )
}