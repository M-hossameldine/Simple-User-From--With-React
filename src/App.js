import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import UserDataList from './components/User/UserDataList/UserDataList';
import UserForm from './components/User/UserForm/UserForm';

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
      <section id='users-from'>
        <UserForm onAddUser={addUserHandler} />
      </section>
      <section id='users'>
        <UserDataList users={userList} />
      </section>
    </div>
  );
}

export default App;
