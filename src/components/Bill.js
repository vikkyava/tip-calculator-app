import React, { useState } from "react";

const Bill = () => {
    const [amount, setAmount] = useState("");
  
    const handleChange = (event) => {
      setAmount(event.target.value);
    };
  
    return (
      <div className="main-bill">
          <p className="bill">Bill</p>
          <div className="input-wrapper">
              <span><img src="./src/images/icon-dollar.svg"/></span>
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
  
  export default Bill;