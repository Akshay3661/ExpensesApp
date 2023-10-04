import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const DummyExpenses = [
  {
    id: "e1",
    title: "grocery",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Maintainance",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 45500,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <>
      <NewExpense onaddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
