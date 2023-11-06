import { LOGO_URL } from "../utils/constants";

const Navitem = ()=>{
    return (
        <div className="nav-container">
            <ul>
                <li>Home</li>
                <li>Contact us</li>
                <li>Cart</li>
            </ul>
        </div>
    );
}
const Header = ()=>{
    return(
        <div className="header-container">
            <div className="logo-cotainer">
                <img className = "logo"  src= {LOGO_URL}/>
            </div>
            <Navitem/>
        </div>
    );
}

export default Header;

