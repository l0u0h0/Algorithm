function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] == 1) {
      answer.push(prices.length - 1 - i);
      continue;
    }
    let cnt = 0;
    for (let j = i + 1; j < prices.length; j++) {
      cnt += 1;
      if (prices[i] > prices[j]) break;
    }
    answer.push(cnt);
  }

  answer.push(0);

  return answer;
}
