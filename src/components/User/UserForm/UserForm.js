import React, { useState } from 'react';

import styles from './UserForm.module.css';

import Button from '../../UI/Button/Button';

export default function UserForm(props) {
  const [username, setUsername] = useState('');
  const [userAge, setUserAge] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
    setIsNameValid(true);
  };

  const userAgeChangeHandler = (e) => {
    setUserAge(e.target.value);
    setIsAgeValid(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || userAge.trim().length === 0) {
      username.trim().length === 0
        ? setIsNameValid(false)
        : setIsAgeValid(false);
      return;
    }

    const newUserData = {
      name: username,
      age: userAge,
    };

    // Update user list
    props.onAddUser(newUserData);

    // reset form inputs after adding user successfully
    setUsername('');
    setUserAge('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles['form-controls']}>
        <div
          className={`${styles['form-control']} ${
            !isNameValid && styles.invalid
          }`}
        >
          <label htmlFor=''> Username </label>
          <input
            type='text'
            value={username}
            onChange={usernameChangeHandler}
          />
        </div>

        <div
          className={`${styles['form-control']} ${
            !isAgeValid && styles.invalid
          }`}
        >
          <label htmlFor=''> Age (Years) </label>
          <input type='text' value={userAge} onChange={userAgeChangeHandler} />
        </div>
      </div>
      <div className={styles['form-actions']}>
        <Button type='submit'> Add User </Button>
      </div>
    </form>
  );
}
