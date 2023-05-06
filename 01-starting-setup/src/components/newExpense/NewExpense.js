import React, {useState} from 'react';

import ExpanseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
 const [isOpen, setIsOpen] = useState(false);

 const openExpenseFormHandler = () => {
    setIsOpen(true);
 };

 const closeExpenseFormHandler = () => {
   setIsOpen(false);
 };

const saveExpenseDataHandler = (enteredExpenseData) => {
 const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
 }
 props.onAddExpanse(expenseData);
 setIsOpen(false);
};

    return (
        <div className="new-expense">

{!isOpen && <button onClick={openExpenseFormHandler}>Add New Expense</button>}
{isOpen && <ExpanseForm  
onSaveExpenseData={saveExpenseDataHandler} 
onCancel={closeExpenseFormHandler}
/>}
        </div>
    )
}

export default NewExpense;