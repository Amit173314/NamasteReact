import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const[btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50 h-20">
            <div className="logo-container">
                <img className="w-20 h-20" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                
               <ul className="flex p-4 m-4">
               <li className="px-4">{onlineStatus == true ? <p style={{ color: "green" }}>Online</p> :
                <p style={{ color: "red" }}>Offline</p>}
                </li>
                 <li className="px-4"><Link to = "/">Home</Link></li>
                 <li className="px-4"><Link to = "/about">About Us</Link></li>
                 <li className="px-4"><Link to = "/contact">Contact Us</Link></li>
                 <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
                 <li className="px-4">Cart</li>
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