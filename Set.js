class Set {
  constructor(array = []) {
    this.set = array;
  }
  add(value) {
    if(!this.has(value)) {
      this.set.push(value); 
    }
  }

  has(value) {
    if(this.set.includes(value)) {
      return true;
    }
  }

  remove(value) {
    if(this.set.includes(value)) {
      for(let i = 0; i < this.set.length; i++){
        if(this.set[i] === value) {
          this.set.splice(i, 1);
        }
      }
    }
  }

  intersection(array) {
    return Set.intersection(this, array);
  }

  static intersection(array1, array2) {
    let result = array1.set.filter(x => array2.set.includes(x));
    return result;
  }

  union(value) {
    return Set.union(this, value);
  }

  static union(array1, array2) {
    let newArr = array1.set.reduce((acc, item) => {
      acc.push(item);
      return acc;
    }, []);
    let result = array2.set.reduce((acc, item) =>{
      if(!array1.has(item)) {
        acc.push(item);
      }  
      return newArr;
    }, newArr);
    return result;
  }

  difference(value) {
    return Set.difference(this, value);
  }

  static difference(array1, array2) {
    let result = array1.set.filter(x => !array2.set.includes(x))
      .concat(array2.set.filter(x => !array1.set.includes(x)));
    return result;
  }
    // arrA
    // .filter(x => !arrB.includes(x))
    // .concat(arrB.filter(x => !arrA.includes(x)));

}

module.exports = Set;