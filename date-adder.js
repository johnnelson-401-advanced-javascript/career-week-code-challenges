function addDate(date, diff) {
  let diffAlphaSplit = diff.match('s', 'm', 'h', 'd', 'M', 'y');
  let diffAlpha = diffAlphaSplit.join('');
  let diffNumSplit = diff.match(/\d/g);
  let diffNum = parseInt(diffNumSplit.join(''));
  console.log('Alpha', diffAlpha, 'Num', diffNum);
  console.log(date);
  if(diffAlpha === 's') {
    return new Date(date.setMilliseconds(diffNum * 1000));
  }
  if(diffAlpha === 'm') {
    return new Date(date.getMinutes() + diffNum);
  } 
  if(diffAlpha === 'h') {
    return new Date(date.getHours() + diffNum);
  }
  if(diffAlpha === 'd') {
    return new Date(date.getTime() + diffNum);
  }
  if(diffAlpha === 'M') {
    return new Date(date.getMonth() + diffNum);
  }
  if(diffAlpha === 'y') {
    return new Date(date.getYear() + diffNum);
  }
}
module.exports = addDate;