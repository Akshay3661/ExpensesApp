import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterdExpensees = props.expenses.filter((Expense) => {
    return Expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <>
      <div className="expenses">
        <ExpensesFilter
          onChangeFilter={FilterChangeHandler}
          selected={filteredYear}
        />
        {filterdExpensees.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </div>
    </>
  );
};

export default Expenses;
