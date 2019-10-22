const addDate = require('../date-adder');


describe('addDate function', () => {

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
    let newDate = addDate(date, diff);
    expect(newDate.getDate()).toEqual(22);
  });
});