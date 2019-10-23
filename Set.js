class Set {
  constructor(array = []) {
    this.array = array;
  }
  add(value) {
    if(!value) { this.push[value]; 
    }
  }
  has(value) {
    if(this.set.includes(value)) {
      return true;
    }
  }
  remove(value) {
    if(this.set.includes(value)) {
      this.array.slice(value);
    }
  }

}

module.exports = Set;