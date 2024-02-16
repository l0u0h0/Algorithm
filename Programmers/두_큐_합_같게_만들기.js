function solution(queue1, queue2) {
  const sumValue = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  };

  const queue = [...queue1, ...queue2, ...queue1, ...queue2];

  let [currentSum, cnt, start, end] = [sumValue(queue1), 0, 0, queue1.length];
  let resultSum = sumValue([...queue1, ...queue2]) / 2;

  const pop = () => {
    currentSum -= queue[start];
    start += 1;
    cnt += 1;
  };

  const insert = () => {
    currentSum += queue[end];
    end += 1;
    cnt += 1;
  };

  while (cnt < queue.length) {
    if (currentSum > resultSum) pop();
    if (currentSum < resultSum) insert();
    if (currentSum === resultSum) return cnt;
  }
  return -1;
}
