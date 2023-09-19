import React from "react";
import "./NewExpense.css";
import ExpenseForm from "../ExpenseForm/ExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enterdExpenseDeta) => {
    const expenseDeta = {
      ...enterdExpenseDeta,
      id: Math.random().toString(),
    };
    props.onaddExpense(expenseDeta);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
