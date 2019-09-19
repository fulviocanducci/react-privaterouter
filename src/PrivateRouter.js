import React from 'react';
import { Redirect, Route} from 'react-router-dom';

const getToken = () => localStorage.getItem('token');

export const PrivateRouter = ({component: Component, ... rest}) => {
    return (
        <Route
            {...rest}
            render={props => 
                    getToken() ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{pathname:"/login", state: {from:props.location}}} />
                    )
                }
        />
    )
}