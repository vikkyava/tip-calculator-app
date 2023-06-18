import React, { useState } from "react";

const NumberCount = () => {
    const [amount, setAmount] = useState("");
  
    const handleChange = (event) => {
      setAmount(event.target.value);
    };
  
    return (
      <div className="main-bill">
          <p className="bill">No of People</p>
          <div className="input-wrapper">
              <span><img src="./src/images/icon-people.svg"/></span>
              <input
                  type="text"
                  className="input-field"
                  placeholder="0"
                  value={amount}
                  onChange={handleChange}
                  style={{ textAlign: "right" }}
              />
          </div>
      </div>
    );
  };
  
  export default NumberCount;