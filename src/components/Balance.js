import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const sum = transactions
    .reduce((curr, acc) => curr + acc.amount, 0)
    .toFixed(2);
  return (
    <>
      <h4>Your balance</h4>
      <h1 id="balance">${sum}</h1>
    </>
  );
};
