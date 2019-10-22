function addDate(date, diff) {
  let diffNum = parseInt(diff);
  console.log(diffNum);

  if(diff.match('s') === true) {
    return new Date(date.getMilliseconds(diffNum * 1000));
  }
  if(diff.match('m') === true) {
    return new Date(date.getMinutes() + diffNum);
  } 
  if(diff.match('h') === true) {
    return new Date(date.getHours() + diffNum);
  }
  if(diff.match('d') === true) {
    return new Date(date.getTime() + diffNum);
  }
  if(diff.match('M') === true) {
    return new Date(date.getMonth() + diffNum);
  }
  if(diff.match('y') === true) {
    return new Date(date.getYear() + diffNum);
  }
}
module.exports = addDate;