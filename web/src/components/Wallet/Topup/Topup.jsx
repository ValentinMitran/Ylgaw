import React, { useState } from "react";
import "./Topup.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CardForm from "./../CardForm";
const stripePromise = loadStripe("pk_test_bpOsvYFxdzalr4Pk4TKbLh0s00mkqCEhEh");

const Topup = () => {
  const [topupAmount, setTopupAmount] = useState(10);
  return (
    <>
      <div className="topup">
        <div className="topup-amount-card">
          <h1>How many credits would you like to purchase?</h1>
          <div className="amount-cards">
            <div className="amount-card" onClick={() => setTopupAmount(10)}>
              &euro;<span>10</span>
            </div>
            <div className="amount-card" onClick={() => setTopupAmount(25)}>
              &euro;<span>25</span>
            </div>
            <div className="amount-card" onClick={() => setTopupAmount(50)}>
              &euro;<span>50</span>
            </div>

            <div className="amount-card" onClick={() => setTopupAmount(100)}>
              &euro;<span>100</span>
            </div>
          </div>
          <Elements stripe={stripePromise}>
            <CardForm amount={topupAmount} />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Topup;
