import React, { Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { NEXT_EYE_ACCESS_TOKEN, ROUTES } from '../../constants/app';
import { history } from '../../router/history';
import AuthLayout from '../AuthLayout';

export const AuthRoute = ({ component: Component, ...rest }) => {
    const access_token = localStorage.getItem(NEXT_EYE_ACCESS_TOKEN);
    useEffect(() => {
        if(access_token){
            history.push(ROUTES.DASHBOARD);
          }
    }, []);

    return <Route {...rest} render={(props) => (
        <AuthLayout>
            <Suspense fallback={<h1>Still Loading…</h1>}>
                <Component {...props} />
            </Suspense>
        </AuthLayout>
    )} />
};