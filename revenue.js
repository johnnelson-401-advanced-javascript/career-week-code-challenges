let transactions = require('./transactions');

function calcRevenue(transactions) {
  let results = [];
  for(let i = 0; i < transactions.length; i++) {
    //loop through array and push each unique time stamp to result array
    if(!results.includes(transactions[i].timestamp)) {
      results.push(transactions[i].timestamp);
    }
    //compare the value of timestamps
    
    //if timestamp already exists sum the price totals.
    //
  };

  return results;
};

module.exports = calcRevenue;