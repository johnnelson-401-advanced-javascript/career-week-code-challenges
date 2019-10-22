function addDate(date, diff) {
  // let date = new Date(input);
  let diffNum = parseInt(diff);
  let operatorList = /[a-z]/gi;
  let operator = diff.match(operatorList);
  
  if(operator.includes('s')) {
    return new Date(date.setSeconds(date.getSeconds() + diffNum));
  }
  if(operator.includes('m')) {
    return new Date(date.setMinutes(date.getMinutes() + diffNum));
  } 
  if(operator.includes('h')) {
    return new Date(date.setHours(date.getHours() + diffNum));
  }
  if(operator.includes('d')) {
    return new Date(date.setDate(date.getDate() + diffNum));
  }
  if(operator.includes('M')) {
    return new Date(date.setMonth(date.getMonth() + diffNum));
  }
  if(operator.includes('y')) {
    return new Date(date.setYear(date.getYear() + diffNum));
  }
  // else return Error;
}
module.exports = addDate;

const now = new Date();
console.log(now);

const later = addDate(now, '1m');
console.log(later);