import React, { useState } from 'react';
import "./RentForm.css";
import dropdown from "../../down.png";
import { useNavigate } from 'react-router-dom';

function RentForm({rnt, srnt, sal, ssal, handleRnt, saccStatus, plan, sPlan}) {
    const [drop, setDrop] = useState(false);
    const navigate = useNavigate();

    const handleDropDown = () => {
        setDrop(!drop);
    }
    const handleSelect = (e) => {
      saccStatus(e.target.textContent);
      document.querySelectorAll(".RentForm__body__input__select__option").forEach(ele => ele.classList.remove("selected"));
      e.target.classList.add("selected")
    }
    const handlePlan = (e) => {
      sPlan(e.target.textContent.split(" ")[0]);
    }
    const handleFormat = () => {
      navigate("/pre-approval");
    }
    
  return (
    <div className="RentForm">
      <h1 className="RentForm__heading">My Rent</h1>
      <div className="RentForm__body">
        <div className="RentForm__body__heading">
          <h3>Payment Option</h3>
          <div className="RentForm__steps">
            <p>1 of 3</p>
            <div className="timer">
              <div className="mask"></div>
            </div>
          </div>
        </div>
        <div className="RentForm__body__input">
          <p className="RentForm__body__input__label">
            What's your accomodation status?
          </p>
          <div className="RentForm__body__input__select">
            <p
              className="RentForm__body__input__select__option"
              onClick={handleSelect}
            >
              Looking to renew my rent
            </p>
            <p
              className="RentForm__body__input__select__option"
              onClick={handleSelect}
            >
              Want to pay for a new place
            </p>
            <p
              className="RentForm__body__input__select__option"
              onClick={handleSelect}
            >
              I'm still searching
            </p>
          </div>
        </div>
        <div className="RentForm__body__input">
          <p className="RentForm__body__input__label">
            How much is your rent request amount?
          </p>
          <div className="RentForm__body__input__text">
            <input
              type="text"
              placeholder="Amount"
              value={handleRnt(rnt)}
              onChange={(e) => srnt(e.target.value)}
            />
          </div>
        </div>
        <div className="RentForm__body__input">
          <p className="RentForm__body__input__label">
            How do you earn monthly?
          </p>
          <div className="RentForm__body__input__text">
            <input
              type="text"
              placeholder="Amount"
              value={handleRnt(sal)}
              onChange={(e) => ssal(e.target.value)}
            />
          </div>
        </div>
        <div className="RentForm__body__input">
          <p className="RentForm__body__input__label">
            Choose a monthly payment plan
          </p>
          <div
            className="RentForm__body__input__dropdown"
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
        <button type="button" onClick={handleFormat}>NEXT</button>
      </div>
    </div>
  );
}

export default RentForm;