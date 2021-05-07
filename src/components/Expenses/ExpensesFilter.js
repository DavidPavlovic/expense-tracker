import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const yearChangeHandler = (event) => props.onSelectExpensesFilter(event.target.value);

    let test = props.expenses.sort((a, b) => {
        return b.date.getFullYear().toString() - a.date.getFullYear().toString()
    });

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select value={props.selected} onChange={yearChangeHandler}>
                    {
                        test.map(element => <option value={element.date.getFullYear().toString()}>{element.date.getFullYear().toString()}</option>)
                    }
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;  