function solution(n, k) {
  let string = n.toString(k).split("0");
  let cnt = 0;
  string.forEach((e) => {
    const tmp = parseInt(e) ? checkPrime(parseInt(e)) : false;
    cnt = tmp ? (cnt += 1) : cnt;
  });
  return cnt;
}

function checkPrime(num) {
  if (num <= 1) return false;

  if (num % 2 === 0) return num === 2 ? true : false;

  const sqrt = parseInt(Math.sqrt(num));

  for (let divider = 3; divider <= sqrt; divider += 2)
    if (num % divider === 0) return false;

  return true;
}
