import React from 'react';
import { capitalize } from '../utils/capitalize';

export default function UserCard({ user }) {
  return (
    <div>
      <p>
        {capitalize(user.username)}, {capitalize(user.department)}
      </p>
    </div>
  );
}
