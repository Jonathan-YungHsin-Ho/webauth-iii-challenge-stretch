import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import PrivateRoute from './components/PrivateRoute';

import Logo from './images/logo.jpg';

function App() {
  return (
    <div className='App'>
      <img
        className='logo'
        src={Logo}
        alt='Dunder Mifflin Inc, Paper Company'
      />
      <Route exact path='/'>
        <Redirect to='/login' />
      </Route>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/users' component={Users} />
    </div>
  );
}

export default App;
