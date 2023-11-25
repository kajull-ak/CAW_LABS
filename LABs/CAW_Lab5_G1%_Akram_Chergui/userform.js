import React, { useState } from 'react';

const UserList = ({ users, onDelete }) => {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>
          {user.username}{' '}
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const AuthenticationForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

const Userform = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  const handleDeleteUser = (index) => {
    setUsers((prevUsers) => {
      const newUsers = [...prevUsers];
      newUsers.splice(index, 1);
      return newUsers;
    });
  };

  return (
    <div>
      <h1>Exo3</h1>
      <AuthenticationForm onSubmit={handleFormSubmit} />
      <UserList users={users} onDelete={handleDeleteUser} />
    </div>
  );
};

export default Userform;
