const addDate = require('../date-adder');
describe('addDate function', () => {
  let date = new Date('2019-10-22');
  it('increments seconds', () => {
    let diff = '10s';
    let newDate = addDate(date, diff);
    console.log(date, diff, 'new date is', newDate);
    expect(newDate.getSeconds()).toBe(10);
  });

  it('increments Minutes', () => {
    let diff = '10m';
    let newDate = addDate(date, diff);
    expect(newDate.getMinutes()).toBe(10);
  });

  it('increments Hours', () => {
    let diff = '1h';
    let newDate = addDate(date, diff);
    expect(newDate.getHours()).toBe(1);
  });

  it('increments Days', () => {
    let diff = '10d';
    let newDate = addDate(date, diff);
    expect(newDate.getDate()).toEqual(10);
  });
});