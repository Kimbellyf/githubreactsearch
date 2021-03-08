import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

//import Home from './pages/home/Home.jsx'
import UserAndRepos from './pages/userandrepos/UserAndRepos.jsx';
//import UserCrud from ';'

//<Route exact path = '/' component = {Home} />
const Routes =
    <Switch>

        
        <Route path='/:id' component={UserAndRepos} />
        
        <Redirect from='*' to='/' />
    </Switch>

export default Routes;