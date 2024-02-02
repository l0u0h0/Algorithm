const readLine = require("readline");

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let car = [];
const arr = [];
const map = new Map();
let n = 0,
  q = 0;

rl.on("line", (input) => {
  if (input.length == 3) {
    n = Number(input.split(" ")[0]);
    q = Number(input.split(" ")[1]);
  } else if (input.length == n * 2 - 1) {
    car = input.split(" ").map((e) => {
      map.set(Number(e), 1);
      return Number(e);
    });
  } else {
    arr.push(Number(input));
  }
});

const binarySearch = (num) => {
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = Math.round((start + end) / 2);

    if (car[mid] == num) {
      if (mid == 0 || mid == n - 1) return 0;
      return mid * (n - 1 - mid);
    } else if (car[mid] < num) {
      start = mid + 1;
    } else if (car[mid] > num) {
      end = mid - 1;
    }
  }

  return 0;
};

rl.on("close", () => {
  car.sort((a, b) => a - b);
  for (let i = 0; i < q; i++) {
    if (map.has(arr[i])) console.log(binarySearch(arr[i]));
    else console.log(0);
  }
  process.exit();
});
