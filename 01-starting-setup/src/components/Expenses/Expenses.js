import React, {useState} from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpansesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const ExpensesFilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpanses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={ExpensesFilterChangeHandler}
        />
        <ExpensesChart expenses={filterExpanses}/>
        <ExpansesList items={filterExpanses}/>
      </Card>
    </div>
  );
};

export default Expenses;
