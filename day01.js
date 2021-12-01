const fs = require('fs');

const data = fs.readFileSync('input01', 'utf8');
// if you omit mapping to Number, you'll got wrong results (missing one element)
let output = data.split(/\n/).map(Number);

const increases = output.filter((_, index) => output[index + 1] > output[index]);
console.log(increases.length);
