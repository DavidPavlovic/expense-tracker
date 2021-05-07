import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card';

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
        <Card className="new-expense">
            {!isActive && <button onClick={showForm}>Add New Expense</button>}
            {isActive && <ExpenseForm onCancel={hideForm} onSaveExpenseData={saveEpanseDataHandler}/>}
        </Card>
    );
}

export default NewExpense;