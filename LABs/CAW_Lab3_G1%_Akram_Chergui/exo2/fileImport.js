
function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0; // Handle the case of an empty array to avoid division by zero.
    }
  
    const sum = arr.reduce((total, current) => total + current, 0);
    const average = sum / arr.length;
    return average;
  }
  /* function names(ak){
    return ak+3;
  } */

  
  module.exports = { calculateAverage /*, names */};