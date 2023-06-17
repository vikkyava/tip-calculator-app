import React from "react";

export default function NumberCount() {
    return(
        <div className="main-bill-ctn">
            <p className="bill">No of People</p>
            <div className="bill-ctn">
                <div className="amount-ctn">
                    <img src="./src/images/icon-person.svg"/>
                    <div className="bill-amount">0</div>
                </div>
            </div>
        </div>
    );
}