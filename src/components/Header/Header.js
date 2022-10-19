import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../Context/UserContext';
import'./Header.css';
const Header = () => {
    const {user,logOut}= useContext(AuthContext);
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="" />
                <div>
                    <Link to="/">Shop</Link>
                    <Link to="/Order">Order</Link>
                    <Link to="/Inventory">Inventory</Link>
                    <Link to="/About">About</Link>
            {user?.uid?
              <button className='logout-btn'  onClick={logOut}>LogOut</button>
                :
            <>
            <Link to="/login">LogIn</Link>
            <Link to="/signup">Sign Up</Link></>
            }
<span>{user?.email}</span>
                </div>
            </nav>
        </div>
    );
};

export default Header;