const fs = require('fs');

const data = fs.readFileSync('input01', 'utf8');
// if you omit mapping to Number, you'll got wrong results (missing one element)
let output = data.split(/\n/).map(Number);

const singleIncrease = output.filter((_, index) => output[index + 1] > output[index]);
console.log(singleIncrease.length);

const sumsIncreases = output.filter((_, idx) => {
  const sum = output[idx] + output[idx + 1] + output[idx + 2];
  const nextSum = output[idx + 1] + output[idx + 2] + output[idx + 3];
  return nextSum > sum;
});
console.log(sumsIncreases.length);
