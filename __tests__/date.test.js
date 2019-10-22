const addDate = require('../date-adder');
describe('addDate function', () => {
  let date = Date.now();

  it.only('increments seconds', () => {
    let diff = '10s';
    let newDate = addDate(date, diff);
    console.log(date, 'new date is', newDate);
    expect(newDate).toEqual(date.setSeconds() + 10);
  });

  it('increments Minutes', () => {
    let diff = '10m';
    let newDate = addDate(date, diff);
    expect(newDate).toEqual(date.getMinutes() + 10);
  });

  it('increments Hours', () => {
    let diff = '10h';
    let newDate = addDate(date, diff);
    expect(newDate).toEqual(date.getHours() + 10);
  });

  it('increments Days', () => {
    let diff = '10d';
    let newDate = addDate(date, diff);
    expect(newDate).toEqual(date.getTime() + 10);
  });
  

});