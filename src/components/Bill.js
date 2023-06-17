import React from "react";

export default function Bill() {
    return(
        <div className="main-bill-ctn">
            <p className="bill">Bill</p>
            <div className="bill-ctn">
                <div className="amount-ctn">
                    <img src="./src/images/icon-dollar.svg"/>
                    <div className="bill-amount">142.55</div>
                </div>
            </div>
        </div>
    );
}