function addDate(date, diff) {
  // let regex = /[a-z]/i;
  let diffNum = parseInt(diff.slice(0, -1));
  console.log(diffNum);
  
  let result = new Date(date);

  if(diff.includes('s')) {
    result.setSeconds(result.getSeconds() + diffNum);
    return result;
  }
  if(diff.includes('m')) {
    result.setMinutes(result.getMinutes() + diffNum);
    return result;}

  if(diff.includes('h')) {
    result.setHours(result.getHours() + diffNum);
    return result;
  }
  if(diff.includes('d')) {
    result.setDate(result.getDate() + diffNum);
    return result;
  }
  if(diff.includes('w')) {
    result.setDate(result.getDate() + (diffNum * 7));
    return result;
  }
  if(diff.includes('M')) {
    result.setMonth(result.getMonth() + diffNum);
    return result;
  }
  if(diff.includes('y')) {
    result.setFullYear(result.getFullYear() + diffNum);
    return result;
  }
}
module.exports = addDate;

// const now = new Date();
// console.log(now);

// const later = addDate(now, '1h');
// console.log(later);