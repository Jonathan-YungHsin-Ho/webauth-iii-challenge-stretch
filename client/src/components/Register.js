import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Register(props) {
  const [credentials, setCredentials] = useState({
    username: '',
    department: '',
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
      .post('/register', credentials)
      .then(res => {
        // console.log(res);
        localStorage.setItem('token', res.data.token);
        props.history.push('/users');
      })
      .catch(err => {
        console.log(err);
        setError('Error registering!');
      });
  };

  return (
    <div>
      <div className='nav'>
        <NavLink to='/login'>Login</NavLink>
      </div>
      <div className='box'>
        <h2>Register Below:</h2>
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
            <label htmlFor='department'>Department: </label>
            <input
              type='text'
              id='department'
              name='department'
              placeholder='...department'
              value={credentials.department}
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
          <button className='btn'>Register</button>
          <div className='error'>{error}</div>
        </form>
      </div>
    </div>
  );
}
