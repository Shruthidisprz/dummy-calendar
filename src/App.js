import { useState } from 'react';
import './App.css';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
function App() {
  const [currentDate,setCurrentDate]=useState(new Date());
  return (
    <div className="App">
        <Header currentDate={currentDate} setCurrentDate={setCurrentDate}/>
        <MainContent currentDate={currentDate} setCurrentDate={setCurrentDate}/>
        
    </div>
  );
}

export default App;
