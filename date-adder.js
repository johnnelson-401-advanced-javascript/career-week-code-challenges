function addDate(date, diff) {
  // let date = new Date(input);
  let diffNum = parseInt(diff);
  console.log(diffNum);
  let operatorList = /[a-z]/i;
  let operator = diff.match(operatorList);
  
  if(operator.includes('s')) {
    return new Date(date.setSeconds(date.getSeconds() + diffNum));
  }
  if(operator.includes('m') === true) {
    return new Date(date.setMinutes(date.getMinutes() + diffNum));
  } 
  if(operator.includes('h') === true) {
    return new Date(date.setHours(date.getHours() + diffNum));
  }
  if(operator.includes('d') === true) {
    return new Date(date.setDate(date.getDate() + diffNum));
  }
  if(operator.includes('M') === true) {
    return new Date(date.setMonth(date.getMonth() + diffNum));
  }
  if(operator.includes('y') === true) {
    return new Date(date.setYear(date.getYear() + diffNum));
  }
  // else return Error;
}
module.exports = addDate;

const now = new Date();
console.log(now);

const later = addDate(now, '1s');
console.log(later);