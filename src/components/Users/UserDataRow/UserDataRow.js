import React from 'react';

import styles from './UserDataRow.module.css';

export default function UserDataRow(props) {
  return (
    <li className={styles.user}>
      {props.name} ({props.age} years old)
    </li>
  );
}
