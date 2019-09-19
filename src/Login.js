import React, {useEffect, useState} from 'react';
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
            <div>
                Login
            </div>
            <div>
                {
                    isLogin ? (
                        <button onClick={setLogoff}>Logoff</button>                        
                    ):(
                        <button onClick={setLogin}>Login</button>
                    )
                }                
            </div>
        </>
    )
}