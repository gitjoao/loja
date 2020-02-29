import React from 'react';

import { Link } from "react-router-dom";
import './style.css';
function Login() {
    return (
        <div id="login">
           <header>
                <span>Login</span>
           </header>
            <main>
                <form>
                    <div className="input-block">
                        <label htmlFor="Email">E-mail</label>
                        <input name="Email" id="Email" required />
                    </div>

                    <div className="input-block">
                        <label htmlFor="Password">Password</label>
                        <input name="Password" id="Password" required />
                    </div>
                    <Link to='/'><button> Log In </button></Link>
                </form>
                <div className="cadastrar">
                    Don't have an account? <Link to='/dashboard'> Signup</Link>
                </div>
            </main>
        </div>
    );
}

export default Login;
