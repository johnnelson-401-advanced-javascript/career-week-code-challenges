function addDate(date, diff) {
  let diffNum = parseInt(diff);
  if(diff.match('s') === true) {
    return date.setSeconds(date.getSeconds() + diffNum);
  }
  if(diff.match('m') === true) {
    return date.getMinutes(date.getMinutes() + diffNum);
  } 
  if(diff.match('h') === true) {
    return date.setHours(date.getHours() + diffNum);
  }
  if(diff.match('d') === true) {
    return date.setDate(date.getDate() + diffNum);
  }
  if(diff.match('M') === true) {
    return date.setMonth(date.getMonth() + diffNum);
  }
  if(diff.match('y') === true) {
    return date.setYear(date.getYear() + diffNum);
  }
}
