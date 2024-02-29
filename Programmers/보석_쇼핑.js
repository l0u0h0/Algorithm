function solution(gems) {
  let answer = [];
  const map = new Map();
  let start = 0,
    end = 0;

  const getMinIdx = () => {
    let min = 1000001;
    for (const values of map.values()) {
      min = Math.min(min, values);
    }
    return min == 1000001 ? 0 : min;
  };

  for (let i = 0; i < gems.length; i++) {
    if (!map.has(gems[i])) {
      map.set(gems[i], i);
      end = i;
      answer = [start + 1, end + 1];
    } else {
      map.set(gems[i], i);
      end = i;
      if (gems[start] == gems[i]) {
        start = getMinIdx();
        if (answer[1] - answer[0] > end - start) {
          answer = [start + 1, end + 1];
        }
      }
    }
  }

  return answer;
}
