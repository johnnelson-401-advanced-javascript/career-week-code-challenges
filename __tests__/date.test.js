const addDate = require('../date-adder');


describe('addDate function', () => {
//date object gets modified by addDate and mutates original.
  let date = new Date('2019-10-22');

  it('increments seconds', () => {
    let diff = '10s';
    let newDate = addDate(date, diff);
    expect(newDate.getSeconds()).toBe(date.getSeconds() + 10);
  });

  it('increments Minutes', () => {
    let diff = '10m';
    let result = addDate(date, diff);
    expect(result.getMinutes()).toBe(date.getMinutes() + 10);
  });

  it('increments Hours', () => {
    let diff = '1h';
    let result = addDate(date, diff);

    expect(result.getHours()).toEqual(date.getHours() + 1);
  });

  it('increments Days', () => {
    let diff = '1d';
    let result = addDate(date, diff);
    expect(result.getDate()).toBe(date.getDate() + 1);
  });

  it('increments Weeks', () => {
    let diff = '1w';
    let result = addDate(date, diff);
    expect(result.getDate()).toEqual(date.getDate() + 7);
  });

  it('increments Months', () => {
    let diff = '1M';
    let result = addDate(date, diff);
    expect(result.getMonth()).toEqual(date.getMonth() + 1);
  });
  
  it('increments Years', () => {
    let diff = '1y';
    let result = addDate(date, diff);
    expect(result.getFullYear()).toEqual(date.getFullYear() + 1);
  });
});