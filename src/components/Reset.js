import React from "react";

export default function Reset() {
    return(
        <div className="footer-ctn">
            <div>
                <div className="tip-amount">
                    <div>Tip Amount<br/><small>/ Person</small></div>
                    <p className="tip-value">$0.00</p>
                </div>
            </div>
            <div><div className="tip-amount">
                    <div>Total<br/><small>/ Person</small></div>
                    <p className="tip-value">$0.00</p>
                </div></div>
            <button className="reset-btn">RESET</button>
        </div>
    );
}