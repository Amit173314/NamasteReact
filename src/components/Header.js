import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const[btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container" >
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                
               <ul className="nav-items-list">
               <li>{onlineStatus == true ? <p style={{ color: "green" }}>Online</p> :
                <p style={{ color: "red" }}>Offline</p>}
                </li>
                 <li><Link to = "/">Home</Link></li>
                 <li><Link to = "/about">About Us</Link></li>
                 <li><Link to = "/contact">Contact Us</Link></li>
                 <li>
            <Link to="/grocery">Grocery</Link>
          </li>
                 <li>Cart</li>
                 <button className="login" onClick={() => {
                    btnNameReact == "Login" ? setBtnNameReact("Logout") :
                          setBtnNameReact("Login");
                 }}>{btnNameReact}</button>
               </ul>
            </div>
        </div>
    );
};

export default Header;