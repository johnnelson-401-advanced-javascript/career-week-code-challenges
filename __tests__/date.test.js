const addDate = require('../date-adder');


describe('addDate function', () => {
//date object gets modified by addDate and mutates original.
  let date = new Date('2019-10-22');

  it('increments seconds', () => {
    let diff = '10s';
    let newDate = addDate(date, diff);
    expect(newDate.getSeconds()).toBe(10);
  });

  it('increments Minutes', () => {
    let diff = '10m';
    let result = addDate(date, diff);
    expect(result.getMinutes()).toBe(10);
  });

  it('increments Hours', () => {
    let diff = '1h';
    console.log(date.getHours());
    let result = addDate(date, diff);
    console.log(diff, 'new date is', result.getHours());

    expect(result.getHours()).toEqual(18);
  });

  it('increments Days', () => {
    let diff = '1d';
    console.log('starting date', date.getDate());
    let result = addDate(date, diff);
    console.log('result date', result.getDate());
    expect(result.getDate()).toEqual(22);
  });

  it('increments Weeks', () => {
    let diff = '1w';
    console.log('starting date for w', date.getDate());
    let result = addDate(date, diff);
    console.log('result date for w', result.getDate());
    expect(result.getDate()).toEqual(29);
  });

  it('increments Months', () => {
    let diff = '1M';
    console.log('starting month', date.getMonth());
    let result = addDate(date, diff);
    console.log('result month', result.getMonth());
    expect(result.getMonth()).toEqual(10);
  });
  
  it('increments Years', () => {
    let diff = '10y';
    console.log('starting Year', date);
    let result = addDate(date, diff);
    console.log('result Year', result);
    expect(result).toEqual(new Date('1970-01-01T00:00:00.029Z'));
  });
});