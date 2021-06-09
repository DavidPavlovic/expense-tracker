import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import Wrapper from './components/Helpers/Wrapper';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: '94.12',
        date: new Date(2021, 4, 5)
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2019, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2020, 3, 12),
    }
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {

        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });
    }

    return (
        <Wrapper>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses expensesArr = {expenses}/>
        </Wrapper>
    );
}

export default App;
