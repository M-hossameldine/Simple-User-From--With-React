import React from 'react';

import styles from './UserDataList.module.css';

import UserDataRow from '../UserDataRow/UserDataRow.js';
import Card from '../../UI/Card/Card';

export default function UserDataList(props) {
  return (
    <Card className={styles.users}>
      <ul className={styles['users-list']}>
        {props.users.map((user) => (
          <UserDataRow key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );
}
