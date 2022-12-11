// in src/MyLoginPage.js
import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    useLogin,
    useNotify,
    Notification,
    FormWithRedirect,
    Form,
    SimpleForm
} from 'react-admin';
import './css/login.css'
import logo from './images/logo.png';
import authProvider from './authProvider';
    const MyLoginPage = ({ theme }) => {

            let navigate = useNavigate(); 
            const routeChange = () =>{ 
              let path = `/`; 
              navigate(path);
            }
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const login = useLogin();
        const notify = useNotify();

        const handleSubmit = e => {
            e.preventDefault();
            authProvider.login({ email, password }).catch(() =>
                notify('Invalid email or password')
            );
            routeChange();
        };


       

        return (
            <div className='loginPage'>

                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            <input
                                name="email"
                                type="email"
                                value={email}
                                placeholder={"Email"}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <input
                                name="password"
                                type="password"
                                value={password}
                                placeholder={"Password"}
                                onChange={e => setPassword(e.target.value)}
                            />
                            {/* <a href="#">Forgot your password?</a> */}
                            
                            <button id='loginButton' type="submit" value="Submit" >Login</button>

                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-right welcome-text">
                                <img src={logo} alt="Logo" id='logo' />
                                <h3>Admin Panel</h3>
                                <h3>Department of Opthamology</h3>
                                <h3>Ramaiah Medical College</h3>
                                <p>Please Enter the Admin credentials to continue</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }


export default MyLoginPage;