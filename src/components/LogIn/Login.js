import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';
import './Login.css';

const Login = () => {
    const {logIn} = useContext(AuthContext);
    const Navigate = useNavigate();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            form.reset();
            Navigate('/')
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
               <div className='form-control'>
               <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" required/>
               </div>
               <div className='form-control'>
               <label htmlFor="email">Password</label>
                <input type="password" name="password" id="" required/>
               </div>
               <input className='btn-submit' type="submit" value="Login" />

            </form>
            <p>New To Ema-John? <Link to='/signup'>Create New Account</Link></p>
        </div>
    );
};

export default Login;