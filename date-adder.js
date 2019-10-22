function addDate(date, diff) {
  // let date = new Date(input);
  let diffNum = parseInt(diff);
  let operatorList = /[s,m,h,d,w,M,y]/g;
  let operator = diff.match(operatorList);

  if(operator.includes('s')) {
    let result = new Date(date.setSeconds(date.getSeconds() + diffNum));
    return result;
  }
  if(operator.includes('m')) {
    let result = new Date(date.setMinutes(date.getMinutes() + diffNum));
    return result;}

  if(operator.includes('h')) {
    let result = new Date(date.setHours(date.getHours() + diffNum));
    return result;
  }
  if(operator.includes('d')) {
    let result = new Date(date.setDate(date.getDate() + diffNum));
    return result;
  }
  if(operator.includes('w')) {
    let result = new Date(date.setDate(date.getDate() + (diffNum * 7)));
    return result;
  }
  if(operator.includes('M')) {
    let result = new Date(date.setMonth(date.getMonth() + diffNum));
    return result;
  }
  if(operator.includes('y')) {
    let result = new Date(date.getDate(date.getDate() + (diffNum * 365)));
    return result;
  }
  else return Error;
}
module.exports = addDate;

// const now = new Date();
// console.log(now);

// const later = addDate(now, '1h');
// console.log(later);