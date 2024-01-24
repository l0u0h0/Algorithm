function solution(numbers, target) {
  let answer = 0;

  const dfs = (i, num) => {
    if (i == numbers.length) {
      answer += num == target ? 1 : 0;
      return;
    }

    dfs(i + 1, num - numbers[i]);
    dfs(i + 1, num + numbers[i]);
  };

  dfs(0, 0);

  return answer;
}
