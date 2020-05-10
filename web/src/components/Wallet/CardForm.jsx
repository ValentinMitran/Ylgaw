import React, { useMemo, useState, useContext } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { BalanceContext } from "../../utils/BalanceContext";
import useResponsiveFontSize from "./utils/useResponsiveFontSize";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { MdPayment } from "react-icons/md";
const jwt = require("jsonwebtoken");

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const CardForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [decodedjwt] = useState(jwt.decode(localStorage.authToken));
  const [balance, setBalance] = useContext(BalanceContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    let response = await fetch("/api/wallet/topup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authToken: localStorage.authToken,
      },
      body: JSON.stringify({
        amount: props.amount,
      }),
    }).catch((err) => {
      toast.error(err);
    });
    response = await response.json();
    stripe
      .confirmCardPayment(response.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: decodedjwt.name,
          },
        },
      })
      .then(async function (result) {
        if (result.error) {
          toast.error(result.error.message);
        }
        if (result.paymentIntent == undefined) {
          return;
        }
        if (result.paymentIntent.status === "succeeded") {
          toast.success("Transaction successful");

          await fetch("/api/wallet/topup/success", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authToken: localStorage.authToken,
            },
            body: JSON.stringify({
              amount: props.amount,
            }),
          }).catch((err) => {
            toast.error(err);
          });

          setBalance(Number(balance) + Number(props.amount));
          props.history.push("/");
        }
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <label>
          Card details
          <CardElement
            options={options}
            onReady={() => {
              console.log("CardElement [ready]");
            }}
            onChange={(event) => {
              console.log("CardElement [change]", event);
            }}
            onBlur={() => {
              console.log("CardElement [blur]");
            }}
            onFocus={() => {
              console.log("CardElement [focus]");
            }}
          />
        </label>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          type="submit"
          disabled={!stripe}
          style={{ margin: "50px auto 0", display: "block" }}
        >
          Top Up {props.amount}&euro;
        </Button>
      </form>
    </>
  );
};
export default withRouter(CardForm);
