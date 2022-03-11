import React, { useState } from 'react';
import "./PreApproval.css";
import dropdown from "../../down.png";


function PreApproval({rnt, srnt, plan, sPlan, handleRnt}) {
  const [drop, setDrop] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleDropDown = () => {
    setDrop(!drop);
  };
  const handlePlan = (e) => {
    sPlan(e.target.textContent.split(" ")[0]);
  };
  const handleInterest = (rent) => {
    const slit = rent?.split("");
    const number = slit.filter((slt) => {
      return slt !== ",";
    });
    const val = parseInt(
      number
        .filter((slt) => {
          return slt !== "₦";
        })
        .join("")
    );
    let ans = ((val / plan )+ 0.02 * (val / plan))
    if(Number.isNaN(ans)){
      ans = "0.00"
    }
    return "₦" + new Intl.NumberFormat().format(ans);
  }

  const handleSubmit = () => {
    if(rnt.length === 0 || rnt === "₦"){
      setError(true);
      setSuccess(false);
    }else{
      setSuccess(true);
      setError(false);
    }
  }
    return (
      <div className="PreApproval">
        <h1 className="PreApproval__heading">My Rent</h1>
        <div className="PreApproval__body">
          <h3>Payment Breakdown</h3>
          <div className="PreApproval__body__input">
            <p className="PreApproval__body__input__label">
              Rent request amount
            </p>
            <div className="PreApproval__body__input__txt">
              <p>Amount</p>
              <div>
                <span>
                  <input
                    type="text"
                    value={handleRnt(rnt)}
                    onChange={(e) => {
                      srnt(e.target.value);
                    }}
                    placeholder="Amount"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="PreApproval__body__input">
            <p className="PreApproval__body__input__label">
              Monthly payment plan
            </p>
            <div
              className="PreApproval__body__input__dropdown"
              onClick={handleDropDown}
            >
              <p>
                {plan} {plan > 1 ? "Months" : "Month"}{" "}
              </p>
              <div>
                <img src={dropdown} alt="down" />
              </div>
              {drop && (
                <ul>
                  <li onClick={handlePlan}>1 Month</li>
                  <li onClick={handlePlan}>2 Months</li>
                  <li onClick={handlePlan}>3 Months</li>
                  <li onClick={handlePlan}>4 Months</li>
                  <li onClick={handlePlan}>5 Months</li>
                  <li onClick={handlePlan}>6 Months</li>
                  <li onClick={handlePlan}>7 Months</li>
                  <li onClick={handlePlan}>8 Months</li>
                  <li onClick={handlePlan}>9 Months</li>
                  <li onClick={handlePlan}>10 Months</li>
                  <li onClick={handlePlan}>11 Months</li>
                  <li onClick={handlePlan}>12 Months</li>
                </ul>
              )}
            </div>
          </div>
          <p className="PreApproval__body__input__label">Payment option</p>
          <div className="PreApproval__body__receipt">
            <div className="PreApproval__body__receipt__list">
              <p className="PreApproval__body__receipt__list__heading">
                Pre-approved amount
              </p>
              <p className="PreApproval__body__receipt__list__detail">
                {handleRnt(rnt)}
              </p>
            </div>
            <div className="PreApproval__body__receipt__list">
              <p className="PreApproval__body__receipt__list__heading">
                Monthly Payment:
              </p>
              <p className="PreApproval__body__receipt__list__detail">
                {handleInterest(rnt)}`
              </p>
            </div>
            <div className="PreApproval__body__receipt__list">
              <p className="PreApproval__body__receipt__list__heading">Tenor</p>
              <p className="PreApproval__body__receipt__list__detail">
                {plan} month{plan > 1 && "s"}
              </p>
            </div>
          </div>
          <button type="button" className="PreApproval__button" onClick={handleSubmit}>
            ACCEPT
          </button>
          {error && <p className="error">Please fill in all input</p>}
          {success && <p className="success">Sucessfull submitted</p>}
        </div>
      </div>
    );
}

export default PreApproval;
