const fs = require('fs');

const data = fs.readFileSync('input02', 'utf8');
// if you omit mapping to Number, you'll got wrong results (missing one element)
let output = data.split(/\n/).map(String);
console.log(output.length);

let result = 0,
  depth = 0,
  position = 0,
  aim = 0;

output.forEach((value) => {
  const dir = value.split(' ')[0];
  const val = +value.split(' ')[1];
  switch (dir) {
    case 'forward':
      position += val;
      depth += aim * val;
      break;
    case 'down':
      aim += val;
      break;
    case 'up':
      aim -= val;
      break;
    default:
      console.log(value);
  }
});

console.log(depth * position);
