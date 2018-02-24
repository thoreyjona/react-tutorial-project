import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const expense = {
        id: '109',
        description: 'Book',
        amount: 590,
        createdAt: 10000,
        note: '',
        startDate: undefined,
        endDate: undefined
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should edit an expense', () => {
    const description = 'Make up';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description
        } 
        
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].description).toBe(description);
});

test('Should not edit an expense if id unvalid', () => {
    const description = 'Make up';
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description
        } 
        
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});