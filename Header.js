import React from 'react';
import { Link} from 'react-router-dom';
import './index.css';
import { IoMdPerson } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { TiThMenu } from "react-icons/ti";


function Header() {
    return (
        <header>
        <li><Link className = "Hbutton" to="/a">
         <TiThMenu/>
        </Link></li><li>
        <Link className = "Hbutton" to="/">
            <AiFillHome/>
        </Link></li><li>
        <Link className = "Hbutton" to="/group">
            <HiUserGroup/>
        </Link></li><li>
        <Link className = "Hbutton" to="/profile">
            <IoMdPerson/>
        </Link></li>
        {/*{authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}*/}
      </header>
    );
  }
  
  export default Header;