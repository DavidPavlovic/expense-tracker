import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {
    const [year, setYear] = useState('2020');

    const selectExpensesHandler = (selectedYear) => {
        setYear(selectedYear);
    };

    const filterYear = props.expensesArr.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    });

    return(
        <Card className="expenses">
            <ExpensesFilter selected={year} onSelectExpensesFilter={selectExpensesHandler} expenses={props.expensesArr}/>
            <ExpensesChart expenses={filterYear}/>
            <ExpensesList expenses={filterYear}/>
        </Card>
    )
}

export default Expenses; 