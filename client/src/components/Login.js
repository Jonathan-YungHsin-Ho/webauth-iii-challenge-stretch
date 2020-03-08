import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Login(props) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(credentials);
    axiosWithAuth()
      .post('/login', credentials)
      .then(res => {
        // console.log(res);
        localStorage.setItem('token', res.data.token);
        props.history.push('/users');
      })
      .catch(err => {
        console.log(err);
        setError('Error logging in!');
      });
  };

  return (
    <div>
      <div className='nav'>
        <NavLink to='/register'>Register</NavLink>
      </div>
      <div className='box'>
        <h2>Log In Below:</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username: </label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='...username'
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor='password'>Password: </label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='...password'
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <button className='btn'>Log In</button>
          <div className='error'>{error}</div>
        </form>
      </div>
    </div>
  );
}
