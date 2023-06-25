import React from "react";

const Bill = ({bill, handleBillChange}) => {

  
    return (
      <div className="main-bill">
          <p className="bill">Bill</p>
          <div className="input-wrapper">
              <span><img src="./images/icon-dollar.svg" alt=""/></span>
              <input
                  type="text"
                  className="input-field"
                  placeholder="0"
                  value={bill}
                  onChange={handleBillChange}
              />
          </div>
      </div>
    );
  };
  
  export default Bill;