import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar';

function App() {
  const [showDayInfo, setShowDayInfo] = useState(false);
  const [data, setData] = useState('');

  const dayDetails = (dayStr:string) => {
    setData(dayStr);
    setShowDayInfo(true);
  }

  return (
    <div className="App">
      <Calendar dayDetails={dayDetails} />
      {showDayInfo && <div>{data}</div>}
    </div>
  )
  }
export default App
