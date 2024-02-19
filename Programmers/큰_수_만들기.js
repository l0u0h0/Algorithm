function solution(number, k) {
  const stack = [];

  for (const num of number.split("")) {
    while (stack.length > 0 && stack[stack.length - 1] < num && k > 0) {
      k -= 1;
      stack.pop();
    }
    stack.push(num);
  }
  if (k !== 0) {
    return stack.slice(0, -k).join("");
  }
  return stack.join("");
}
