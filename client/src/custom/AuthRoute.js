import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from './auth';

function AuthRoute({ component: Component, ...rest }) {
    const { authToken } = useAuth();
    return(
        <Route {...rest} render={(props) => authToken ? (
            <Component {...props} />
        ) : (<Redirect to={{ pathname: "/login" }} />)}
        />
    );
}

export default AuthRoute;