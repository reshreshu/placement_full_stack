import { Link } from "react-router-dom";
var Navbar=()=>{
    return(
        <header>
            <nav>
                <ul className="ul">
                    <li className="li"><Link to='/'>Home</Link></li>
                    <li className="li"><Link to='/about'>About</Link></li>
                    <li className="li"><Link to='/gallery'>Gallery</Link></li>
                    <li className="li"><Link to='/contact'>Contact</Link></li>
                    <li className="li"><Link to='/use-effect'>UseEffect</Link></li>
                    <li className="li"><Link to='/use-ref'>UseRef</Link></li>
                    <li className="li"><Link to='/use-context'>UseContext</Link></li>
                    <li className="li"><Link to='/use-memo'>UseMemo</Link></li>
                    <li className="li"><Link to='/SignUp'>signup</Link></li>
                    <li className="li"><Link to='/Login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;