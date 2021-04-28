import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isActive, setIsActive] = useState(false);

    const saveEpanseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        setIsActive(false);
    }

    const showForm = () => {
        setIsActive(true);
    }

    const hideForm = () => {
        setIsActive(false);
    }

    return(
        <div className="new-expense">
            {!isActive && <button onClick={showForm}>Add New Expense</button>}
            {isActive && <ExpenseForm onCancel={hideForm} onSaveExpenseData={saveEpanseDataHandler}/>}
        </div>
    );
}

export default NewExpense;