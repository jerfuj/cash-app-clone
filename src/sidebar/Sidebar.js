import React from 'react';
import UserInfo from './UserInfo';
import SidebarLinks from './SidebarLinks';
import NewButton from './NewButton';
import styles from './Sidebar.module.css';

const Sidebar = ({ active, setActive }) => {
  return (
    <div className={styles.sidebar}>
      <UserInfo />
      <SidebarLinks active={active} setActive={setActive} />
      <NewButton />
    </div>
  );
};

export default Sidebar;
