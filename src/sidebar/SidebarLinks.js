import React from 'react';
import {
  AiOutlineClockCircle,
  AiOutlineDollarCircle,
  AiOutlineMinusCircle,
} from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
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
        <AiOutlineClockCircle size={25} style={{ marginRight: '.7rem' }} />
        Activity
      </li>
      <li
        className={isActive('Cash Card')}
        onClick={() => {
          setActive('Cash Card');
        }}
      >
        <AiOutlineDollarCircle size={25} style={{ marginRight: '.7rem' }} />
        Cash Card
      </li>
      <li
        className={isActive('Settings')}
        onClick={() => {
          setActive('Settings');
        }}
      >
        <FaRegUserCircle size={25} style={{ marginRight: '.7rem' }} />
        Settings
      </li>
      <li className={styles.notActive}>
        <AiOutlineMinusCircle size={25} style={{ marginRight: '.7rem' }} />
        Sign Out
      </li>
    </ul>
  );
};

export default SidebarLinks;
