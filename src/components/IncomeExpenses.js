import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((curr, acc) => curr + acc.amount, 0);
  const expense =
    transactions
      .filter((t) => t.amount < 0)
      .reduce((curr, acc) => curr + acc.amount, 0) * -1;

  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">
            {income}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">
            {expense}
          </p>
        </div>
      </div>
    </>
  );
};
