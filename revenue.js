function calcRevenue(input) {
  let results = {};
  for(let i = 0; i < input.length; i++) {
    let stringDate = input[i].timestamp;
    let utc = new Date(stringDate).toUTCString()
      .split(',')
      .join('')
      .substring(0, 15);
    let dateString = new Date(utc).toDateString();
    let price = input[i].price;
    results[dateString] ? results[dateString] += price : results[dateString] = price;
  }
  return results;
}
module.exports = calcRevenue;