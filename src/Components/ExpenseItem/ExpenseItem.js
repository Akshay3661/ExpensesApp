import React from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  //  can be code: 'function ExpenseItem({date, title, amount}) insted of " function ExpenseItem(props) "'
  //  but, the props can be accsess by just "{date}, {title}, }{amount }"

  return (
    <>
      <div className="expense-item">
        <ExpenseDate date={props.date} key={props.id} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}₹</div>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
