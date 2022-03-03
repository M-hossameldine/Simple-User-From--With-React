import React, { useState, useRef } from 'react';

import styles from './AddUsersForm.module.css';

import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/ErrorModal/ErrorModal';

export default function UserForm(props) {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUsername, setEnteredUsername] = useState('');
  // const [enteredAge, setEnteredAge] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const [error, setError] = useState();

  // const usernameChangeHandler = (e) => {
  //   setEnteredUsername(e.target.value);
  //   setIsNameValid(true);
  // };

  // const userAgeChangeHandler = (e) => {
  //   setEnteredAge(e.target.value);
  //   setIsAgeValid(true);
  // };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const nameValue = usernameInputRef.current.value;
    const ageValue = ageInputRef.current.value;

    if (nameValue.trim().length === 0 || ageValue.trim().length === 0) {
      nameValue.trim().length === 0
        ? setIsNameValid(false)
        : setIsAgeValid(false);
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+ageValue < 1) {
      setIsAgeValid(false);
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age(>0).',
      });
      return;
    }

    const newUserData = {
      name: nameValue,
      age: ageValue,
    };

    // Update user list
    props.onAddUser(newUserData);

    // reset form inputs after adding user successfully
    usernameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
            <div className={`${styles['form-control']}`}>
              <label htmlFor='username'> Username </label>
              <input id='username' type='text' ref={usernameInputRef} />
            </div>

            <div className={`${styles['form-control']}`}>
              <label htmlFor='age'> Age (Years) </label>
              <input id='age' type='number' ref={ageInputRef} />
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
