import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserList from './UserList';
import AddUser from './AddUser';
import AddUserAxios from './AddUserAxios';
import UserListAxios from './UserListAxios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AddUserAxios /> */}
    {/* <AddUser /> */}
    {/* <UserListAxios /> */}
    <UserList />
  </React.StrictMode>
);
