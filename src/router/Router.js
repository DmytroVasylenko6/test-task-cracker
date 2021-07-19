import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


const HomePage = lazy(() => import('../pages/HomePage' /* webpackChunkName: "home-page" */));

export const paths = {
  HOME: '/',
  ABOUT_US: '/about-us',
  CONTACT_US: '/contact-us',
  CHECKOT: '/checkout',
  ACCOUNT: '/account'
};

const Router = () => {
  return (


      <Suspense fallback={<p align="center">Loading...</p>}>
        <Switch>
          
          <Route exact path={paths.HOME}>
              <HomePage/>
          </Route>

          <Route path={paths.ABOUT_US}>
              
          </Route>

          <Route  path={paths.CONTACT_US}>
              
          </Route>

          <Route path={paths.CHECKOT}>
              
          </Route>

          <Route path={paths.ACCOUNT}>
             
          </Route>
        
        <Redirect to="/" />
      </Switch>
      </Suspense>
   
  );
};

export default Router;
