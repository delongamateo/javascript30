const numbers = [
  18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2,
  17,
];

// 1. Output all the numbers which are greater than their predecessor in the array.

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1]) {
    console.log(numbers[i]);
  }
} 

// 2. Output all the peaks in the array. A peak is a number whose predecessor and successor are both smaller than the number itself.

for (let i = 1; i < numbers.length - 1; i++) {
  if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
    console.log(numbers[i]);
  }
} 

// 3. First, compute the average number in the array and save the result in a variable. Then compute the sum of squared differences from the average. Answer: 6188.1052...

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
const average = sum / numbeers.length;

let sqSum = 0;
for (let i = 0; i < numbers.length; i++) {
  sqSum += (average - numbers[i]) ** 2;
}

// 4. Compute the variance of the array. Variance is the average of squared differences from the average. Answer: 325.6897...

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
const average = sum / numbeers.length;

let sqSum = 0;
for (let i = 0; i < numbers.length; i++) {
  sqSum += (average - numbers[i]) ** 2;
}
let variance = sqSum / numbers.length;

// 5. Find the biggest element in the array

let maximum = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maximum) {
    maximum = numbers[i];
  }
}

// 6. Find the biggest element which is less than 16.

let maximum = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maximum && numbers[i] < 16) {
    maximum = numbers[i];
  }
}

// 7. From the original array create a new array with a reversed order of the elements.

const reversed = [];
for (let i = 0; i < numbers.length; i++) {
  reversed.unshift(numbers[i]);
}