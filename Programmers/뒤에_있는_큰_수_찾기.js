function solution(numbers) {
  const answer = [];
  let stack = [];
  let temp = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] >= temp) {
      answer.push(-1);
      temp = numbers[i];
      stack = [];
      stack.push(numbers[i]);
    } else {
      while (true) {
        if (numbers[i] < stack[0]) {
          answer.push(stack[0]);
          stack.unshift(numbers[i]);
          break;
        } else {
          stack.shift();
        }
      }
    }
  }

  return answer.reverse();
}
