import React from 'react';
import './App.css';
import Header from "./components/Header";
import Bill from "./components/Bill";
import SelectTip from "./components/SelectTip";
import NumberCount from './components/NumberCount';
import Reset from "./components/Reset";


function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='inner-ctn'>
          <Bill />
          <SelectTip />
          <NumberCount />
          <Reset />
        </div>
      </div>
    </div>
  );
}

export default App;
