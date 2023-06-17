import React from "react";

export default function SelctTip() {
    return(
        <div className="main-bill-ctn">
            <p className="tip-header">Select Tip %</p>
            <div className="tip-ctn">
                <ul className="tip-percent-list">
                    <li className="list-item">5%</li>
                    <li className="list-item">10%</li>
                    <li className="list-item">15%</li>
                    <li className="list-item">25%</li>
                    <li className="list-item">50%</li>
                    <li className="list-item">Custom</li>
                </ul>
            </div>
        </div>
    );
}