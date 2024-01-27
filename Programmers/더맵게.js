function solution(scoville, K) {
  let answer = 1;
  const newArr = [];

  scoville.sort((a, b) => a - b);

  if (scoville[0] >= K) return 0;

  newArr.push(scoville[0] + scoville[1] * 2);

  let idx = 2;
  let newIdx = 0;

  while (true) {
    if (scoville.length == idx && newArr.length == newIdx) {
      answer = -1;
      break;
    }

    let food1 = 0;
    let food2 = 0;

    if (scoville.length == idx) {
      food1 = newArr[newIdx];
      newIdx += 1;
    } else if (newArr.length == newIdx) {
      food1 = scoville[idx];
      idx += 1;
    } else if (newArr[newIdx] < scoville[idx]) {
      food1 = newArr[newIdx];
      newIdx += 1;
    } else {
      food1 = scoville[idx];
      idx += 1;
    }

    if (food1 >= K) break;

    if (scoville.length == idx && newArr.length == newIdx) {
      answer = -1;
      break;
    }

    if (scoville.length == idx) {
      food2 = newArr[newIdx];
      newIdx += 1;
    } else if (newArr.length == newIdx) {
      food2 = scoville[idx];
      idx += 1;
    } else if (newArr[newIdx] < scoville[idx]) {
      food2 = newArr[newIdx];
      newIdx += 1;
    } else {
      food2 = scoville[idx];
      idx += 1;
    }

    newArr.push(food1 + food2 * 2);
    answer += 1;
  }

  return answer;
}
