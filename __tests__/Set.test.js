let Set = require('../Set');

describe('Set Tests', () => {
  it('adds to Set', () => {
    let data = '42';
    let set = new Set;
    set.add(data);
    expect(set.set).toEqual(['42']);
  });

  it('Should not Duplicate values', () => {
    let data = '42';
    let set = new Set;
    set.add(data);
    set.add(data);
    expect(set.set.length).toBe(1); 
  });

  it('Confirms a Value exists within Set', () => {
    let data = '42';
    let set = new Set;
    set.add(data);
    expect(set.has(data)).toBeTruthy;
  });

  it('Removes a value from set', () => {
    let data = '42';
    let set = new Set;
    set.add(data);
    set.remove(data);
    expect(set.set).toEqual([]);
  });

  it('returns and array of the intersection of two arrays', () => {
    let square = new Set;
    square.add('1');
    square.add('2');

    let rectangle = new Set;
    rectangle.add('1');
    rectangle.add('2');
    rectangle.add('Nope');
    expect(square.intersection(rectangle)).toEqual(square.set);
    
  });
  
  it('returns the union', () => {
    let square = new Set;
    let rectangle = new Set;
    square.add(1);
    square.add(2);
    rectangle.add(1);
    rectangle.add(2);
    rectangle.add(3);
    expect(square.union(rectangle)).toEqual(rectangle.set);
  });

  it('returns the difference', () => {
    let square = new Set;
    let rectangle = new Set;
    square.add(1);
    square.add(2);
    rectangle.add(1);
    rectangle.add(2);
    rectangle.add(3);
    console.log(square.difference(rectangle));
    
    expect(square.difference(rectangle)).toEqual([3]);
  });

  
});