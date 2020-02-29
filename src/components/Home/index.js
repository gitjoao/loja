import React from 'react';

import { Link } from "react-router-dom";
import './style.css';
function Home() {
    return (
        <div id="home">
            <header>
                <span>Welcome to <b>shop</b>!</span>
            </header>
            <main>
                <div className="imagem">
                    <img src="./img/buy-min.png" alt="loja-img"></img>
                </div>
                <div className="links">
                    <Link className="login" to='/login'><button> Log In </button></Link>
                    <Link to='/dashboard'> Signup</Link>
                </div>
            </main>
        </div>
    );
}


export default Home;
