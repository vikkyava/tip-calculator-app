import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Bill from "./components/Bill";
import SelectTip from "./components/SelectTip";
import NumberCount from './components/NumberCount';
import Reset from "./components/Reset";


const App = () => {
  const [bill, setAmount] = useState("");
  
    const handleBillChange = (event) => {
      const billAmount = event.target.value;
      setAmount(billAmount);
    };

    const [tip, setTip] = useState("");
  
    const handleTipChange = (percent) => {
        setTip(percent);
    };

    const [person, setPerson] = useState(null);
  
    const handlePersonChange = (event) => {
      const people = event.target.value;
      setPerson(people);
    };

    const reset = () => {
      setTip("")
      setAmount("")
      setPerson("")
    }

  

  return (
    <div>
      <Header />
      <div className='container'>
        <div className='inner-ctn'>
          <div className='new-div'>
            <Bill 
              handleBillChange={handleBillChange}
              bill={bill}
            />
            <SelectTip 
              handleTipChange={handleTipChange}
              tip={tip}
            />
            <NumberCount 
              handlePersonChange={handlePersonChange}
              person={person}
              setPerson={setPerson}
              tip={tip}
              reset={reset}
            />
          </div>
          <div className='second-new-div'>
            <Reset 
              reset={reset}
              bill={Number(bill)}
              person={Number(person)}
              tip={Number(tip)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
