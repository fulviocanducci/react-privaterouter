import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Login from './Login';
import { PrivateRouter } from './PrivateRouter';

const router = [{
        linkTo: '/',
        component: App, 
        name: 'App',
        private: true
    }, {
        linkTo: '/login',
        component: Login,
        name: 'Login',
        private: false
    }
]

export default function AppRouter() {
    return (
        <BrowserRouter>        
            <div>
                {router.map((item, key) => (
                    <Link key={key} to={item.linkTo}>{item.name}</Link>
                ))}
            </div>
            <div style={{backgroundColor:'#fffccc'}}>
            <Switch>
                {router.map((item, key) => item.private ? (
                    <PrivateRouter key={key} path={item.linkTo} exact component={item.component} />
                ) : (
                    <Route key={key} path={item.linkTo} exact component={item.component} />                     
                )
                )}
            </Switch>
            </div>
        </BrowserRouter>
    )
}