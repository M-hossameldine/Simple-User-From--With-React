import React, { useState } from 'react';

import styles from './AddUsersForm.module.css';

import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

export default function UserForm(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const [error, setError] = useState();

  const usernameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
    setIsNameValid(true);
  };

  const userAgeChangeHandler = (e) => {
    setEnteredAge(e.target.value);
    setIsAgeValid(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      enteredUsername.trim().length === 0
        ? setIsNameValid(false)
        : setIsAgeValid(false);
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+enteredAge < 1) {
      setIsAgeValid(false);
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age(>0).',
      });
      return;
    }

    const newUserData = {
      name: enteredUsername,
      age: enteredAge,
    };

    // Update user list
    props.onAddUser(newUserData);

    // reset form inputs after adding user successfully
    setEnteredUsername('');
    setEnteredAge('');
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles['users-form']}>
        <form onSubmit={formSubmitHandler}>
          <div className={styles['form-controls']}>
            <div
              className={`${styles['form-control']} ${
                !isNameValid && styles.invalid
              }`}
            >
              <label htmlFor='username'> Username </label>
              <input
                id='username'
                type='text'
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />
            </div>

            <div
              className={`${styles['form-control']} ${
                !isAgeValid && styles.invalid
              }`}
            >
              <label htmlFor='age'> Age (Years) </label>
              <input
                id='age'
                type='number'
                value={enteredAge}
                onChange={userAgeChangeHandler}
              />
            </div>
          </div>
          <div className={styles['form-actions']}>
            <Button type='submit'> Add User </Button>
          </div>
        </form>
      </Card>
    </>
  );
}
