import React from 'react';
import styles from './SidebarLinks.module.css';

const SidebarLinks = ({ active, setActive }) => {
  const isActive = (name) => {
    if (name === active) {
      return styles.active;
    } else {
      return styles.notActive;
    }
  };

  return (
    <ul className={styles.list}>
      <li
        className={isActive('Activity')}
        onClick={() => {
          setActive('Activity');
        }}
      >
        Activity
      </li>
      <li
        className={isActive('Cash Card')}
        onClick={() => {
          setActive('Cash Card');
        }}
      >
        Cash Card
      </li>
      <li
        className={isActive('Settings')}
        onClick={() => {
          setActive('Settings');
        }}
      >
        Settings
      </li>
      <li className={styles.notActive}>Sign Out</li>
    </ul>
  );
};

export default SidebarLinks;
