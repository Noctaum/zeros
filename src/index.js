module.exports = function getZerosCount(number) {
  // your implementation
  var count = 0;
  while(number >= 5){
  	number = Math.floor(number / 5);
  	count+= number;
  }
  return count;
}