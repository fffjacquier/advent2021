const fs = require('fs');

const getMaxCharacter = (str) => {
  const map = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (map[char]) {
      // add one more
      map[char]++;
    } else {
      // init this char
      map[char] = 1;
    }
  }

  for (let char in map) {
    if (map[char] > max) {
      max = map[char];
      maxChar = char;
    }
  }

  return maxChar;
};

const reversedBits = (str) =>
  str
    .toString()
    .split('')
    .map((b) => (1 - b).toString())
    .join('');

const data = fs.readFileSync('input03', 'utf8');
const output = data.split(/\n/).map(String);

let gamma = 0,
  epsilon = 0;
const cols = [];

for (let col = 0; col < 12; col++) {
  cols.push([]);
}
for (let col = 0; col < 12; col++) {
  for (let row = 0; row < output.length - 1; row++) {
    cols[col].push(output[row][col]);
  }
}
let gammaBits = [];
cols.forEach((col) => {
  gammaBits.push(getMaxCharacter(col.join('')));
});
gamma = parseInt(gammaBits.join(''), 2);

let epsilonBits = reversedBits(gammaBits.join(''));
epsilon = parseInt(epsilonBits, 2);

// result
console.log(gamma, epsilon, gamma * epsilon);
