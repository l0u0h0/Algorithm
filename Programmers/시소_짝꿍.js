function solution(weights) {
  let answer = 0;

  weights.sort((a, b) => a - b);

  const dict = {};

  for (const weight of weights) {
    if (dict[weight] !== undefined) {
      dict[weight] += 1;
    } else {
      dict[weight] = 1;
    }
  }

  for (const weight of weights) {
    if (dict[weight] > 1) answer += dict[weight] - 1;
    if (dict[weight * (3 / 2)] > 0) answer += dict[weight * (3 / 2)];
    if (dict[weight * 2] > 0) answer += dict[weight * 2];
    if (dict[weight * (4 / 3)] > 0) answer += dict[weight * (4 / 3)];

    dict[weight] -= 1;
  }

  return answer;
}
