import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import UserDataList from './components/Users/UserDataList/UserDataList';
import UserForm from './components/Users/AddUsersForm/AddUsersForm';
import Card from './components/UI/Card/Card';

import styles from './App.module.css';

const INITIAL_USERLIST = [
  {
    id: uuidv4(),
    name: 'Hossam',
    age: '40',
  },
  {
    id: uuidv4(),
    name: 'Doaa',
    age: '25',
  },
];

function App() {
  const [userList, setUserList] = useState(INITIAL_USERLIST);

  const addUserHandler = (user) => {
    const newUser = {
      ...user,
      id: uuidv4(),
    };

    console.log('from App.js', newUser);
    setUserList((prevUserList) => [newUser, ...prevUserList]);
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler} />
      <UserDataList users={userList} />
    </div>
  );
}

export default App;
