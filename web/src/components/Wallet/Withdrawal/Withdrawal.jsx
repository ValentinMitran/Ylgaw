import React, { useContext } from "react";
import "./Withdrawal.scss";
import { TextField, Button } from "@material-ui/core";
import { BalanceContext } from "../../../utils/BalanceContext";

const Withdrawal = () => {
  const [balance] = useContext(BalanceContext);

  return (
    <>
      <div className="withdrawal">
        <h1>Withdrawal</h1>
        <section>
          <div className="balance">
            <span> Balance</span>
            {balance} &euro;
          </div>
          <div className="withdrawal-form">
            <form>
              <TextField
                required
                id="outlined-required"
                label="Bank Holder Name:"
                variant="outlined"
              />
              <TextField
                required
                id="outlined-required"
                label="IBAN:"
                variant="outlined"
                style={{ marginTop: "15px" }}
              />
              <Button
                variant="outlined"
                color="primary"
                style={{ marginTop: "10px" }}
                type="submit"
              >
                Request
              </Button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Withdrawal;
