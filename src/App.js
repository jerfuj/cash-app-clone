import { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import styles from './App.module.css';
import Activity from './Activity';
import CashCard from './CashCard';
import Settings from './Settings';

function App() {
  const [active, setActive] = useState('Activity');

  return (
    <div className={styles.main}>
      <Sidebar active={active} setActive={setActive} />
      {active === 'Activity' && <Activity />}
      {active === 'Cash Card' && <CashCard />}
      {active === 'Settings' && <Settings />}
    </div>
  );
}

export default App;
