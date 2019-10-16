import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { capitalize } from '../utils/capitalize';

import UserCard from './UserCard';

export default function Users(props) {
  const [user, setUser] = useState('');
  const [department, setDepartment] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/users')
      .then(res => {
        // console.log(res.data);
        setUser(res.data.loggedInUser);
        setDepartment(res.data.department);
        setUsers(res.data.users);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className='nav'>
        <button
          className='logout'
          onClick={() => {
            localStorage.removeItem('token');
            props.history.push('/login');
          }}>
          Log Out
        </button>
      </div>
      <div>
        <div className='user'>
          <h2>User: {capitalize(user)}</h2>
          <h2>Department: {capitalize(department)}</h2>
        </div>
        <div className='team'>
          <h2>Team:</h2>
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}
