import React, {useState} from 'react';
import hash from 'object-hash';

export default function Login({history}) { 
    const [isLogin, setIsLogin] = useState(localStorage.getItem('token') || false);   
    function setLogin() {
        localStorage.setItem('token', hash.sha1(new Date().getTimezoneOffset()));
        history.push('/');
    }
    function setLogoff() {
        localStorage.removeItem('token');
        setIsLogin(false);
    }    
    return (
        <>
            <h1 className="title">
                Login
            </h1>
            <h2 className="subtitle">
                Users of System
            </h2>
            <div>
                {
                    isLogin ? (
                        <button onClick={setLogoff} className="button is-danger">Logoff</button>                        
                    ):(
                        <button onClick={setLogin} className="button is-info">Login</button>
                    )
                }                
            </div>
        </>
    )
}