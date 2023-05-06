import React, {useState} from 'react';

import './ExpenseForm.css';

const ExpanseForm = (props) => {

   const [enteredTitle, setEnteredTitele] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');

   // this is alternative way to solve that issue
//    const [userInput, setUserIput] = useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate: '',
//    });

    const titeleChangeHandler = event => {
       setEnteredTitele(event.target.value);

       // this is alternative way to solve that issue
    //    setUserIput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    //    });
    // setUserIput((prevState) => {
    //     return { ...prevState, enteredTitle: event.target.value};
    // });
    }

    const amountChangeHandler = event => {
        setEnteredAmount(event.target.value);

        // this is alternative way to solve that issue
        // setUserIput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        //    });
    }

    const dateChangeHandler = event => {
        setEnteredDate(event.target.value);

        // this is alternative way to solve that issue
        // setUserIput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        //    });
    };

    const submitHandler = event => {
       event.preventDefault();

       const expenseData = {
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(enteredDate),
       }
       
       props.onSaveExpenseData(expenseData);
       setEnteredTitele('');
       setEnteredAmount('');
       setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__controls">
            <label >Title</label>
            <input type="text" value={enteredTitle} onChange={titeleChangeHandler}/>
            </div>
            <div className="new-expense__controls">
            <label htmlFor="">Amount</label>
            <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__controls">
            <label htmlFor="">Date</label>
            <input type="date" value={enteredDate} min="2019-01-01" step="2023-12-31" onChange={dateChangeHandler}/>
            </div>
            </div>
            <div className="new-expense__actions">
                <button type='submit'>Add Expense</button>
                <button type='button' onClick={props.onCancel}>Cancel</button>
            </div>

        </form>
    )
};

export default ExpanseForm;