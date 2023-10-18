let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
};

// 
let n = 5;
let symbol2 = '*';
let inputLine2 = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine2 = inputLine2 + ' ';
    } else {
      inputLine2 = inputLine2 + symbol2;
    }
  }
  console.log(inputLine2);
  inputLine2 = '';
  inputPosition -= 1;
};

// 
let n2 = 5;
let symbol3 = '*';
let inputLine3 = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n2; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine3 = inputLine3 + symbol3;
    } else {
      inputLine3 = inputLine3 + ' ';
    }
  }
  console.log(inputLine3);
  inputLine3 = '';
  controlRight += 1;
  controlLeft -= 1
};

// 
let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');
