import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Login from './Login';
import { PrivateRouter } from './PrivateRouter';
import NavBarMenu from './NavBarMenu';
import Edit from './Edit';

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
    }, {
        linkTo: '/edit/:id',
        component: Edit,
        name: 'Edit',
        private: true
    }
]

export default function AppRouter() {
    return (
        <BrowserRouter>        
            <div className="container is-fluid">
                <NavBarMenu router={router} />
                <section className="hero is-primary">      
                    <div className="hero-body">
                        <div className="container">
                            <Switch>
                                {router.map((item, key) => item.private ? (
                                    <PrivateRouter key={key} path={item.linkTo} exact component={item.component} />
                                ) : (
                                    <Route key={key} path={item.linkTo} exact component={item.component} />                    
                                )
                                )}
                            </Switch>          
                        </div>
                    </div>                            
                </section>         
            </div>
        </BrowserRouter>
    )
}