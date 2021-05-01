import React from 'react'
import Layout from './Hoc/Layout'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import SignIn from './Components/signin'
import Dashboard from './Components/admin/Dashboard'
import PrivateRoutes from './Components/authRoutes/PrivateRoutes'
function routes(props) {
  console.log(props)
  return (
    <Layout>
      <Switch>
        <PrivateRoutes {...props} path="/dashboard" exact component={Dashboard}/>
        <Route exact component={SignIn} path="/"/>
        <Route exact component ={SignIn} path="/sign_in"></Route>
        <Route exact component={Home} path="/home"></Route>
      </Switch>
    </Layout>

  );
}

export default routes;
