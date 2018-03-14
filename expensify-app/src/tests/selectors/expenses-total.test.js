import getExpensesTotal from '../../selectors/expenses-total.js';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expense', () => {
    const res = getExpensesTotal([]);
    expect(res).toBe(0);

});

test('should correctly add upp single expense', () => {
    const res = getExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should correctly add upp multiple expenses', () => {
    const res = getExpensesTotal(expenses);
    expect(res).toBe(114195);
});