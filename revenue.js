// let transactions = require('./transactions');

function calcRevenue(input) {
  let results = [];
  for(let i = 0; i < input.length; i++) {
    //loop through array and push each unique time stamp to result array
    if(!results.includes(input[i].timestamp)) {
      results.push(input[i].timestamp);
    }
    //compare the value of timestamps
    
    //if timestamp already exists sum the price totals.
    //
  };

  return results;
};

module.exports = calcRevenue;