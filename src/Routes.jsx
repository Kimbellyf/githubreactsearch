import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

//import Home from './pages/home/Home.jsx'
import UserAndRepos from './pages/userandrepos/UserAndRepos.jsx';
import App from './App.js';

//<Route exact path = '/' component = {Home} />
// <Route path='/:id' component={UserAndRepos} />
const Routes =
    <Switch>

        <Route path='/:idname' component={App} />
        <Redirect from='*' to='/' />
    </Switch>

export default Routes;