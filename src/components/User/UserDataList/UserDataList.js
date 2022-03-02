import React from 'react';

import styles from './UserDataList.module.css';

import UserDataRow from '../UserDataRow/UserDataRow.js';

export default function UserDataList(props) {
  return (
    <ul className={styles['user-list']}>
      {props.users.map((user) => (
        <UserDataRow key={user.id} name={user.name} age={user.age} />
      ))}
    </ul>
  );
}
