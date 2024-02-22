function solution(storey) {
  const check1 = (e) => {
    let floor = e;
    let result = 0;
    let idx = 1;
    while (true) {
      if (floor === 0) break;
      const i = idx.toString().split("").length;
      let arr = floor
        .toString()
        .split("")
        .map((e) => parseInt(e));
      const number = arr[arr.length - i];
      if (number >= 5) {
        result += 10 - number;
        floor += idx * (10 - number);
        arr[arr.length - 1]++;
      } else if (number < 5 && number > 0) {
        result += number;
        floor -= idx * number;
      }
      idx *= 10;
      if (idx > 1000000000) break;
    }
    return result;
  };

  const check2 = (e) => {
    let floor = e;
    let result = 0;
    let idx = 1;
    while (true) {
      if (floor === 0) break;
      const i = idx.toString().split("").length;
      let arr = floor
        .toString()
        .split("")
        .map((e) => parseInt(e));
      const number = arr[arr.length - i];
      if (number > 5) {
        result += 10 - number;
        floor += idx * (10 - number);
        arr[arr.length - 1]++;
      } else if (number <= 5 && number > 0) {
        result += number;
        floor -= idx * number;
      }
      idx *= 10;

      if (idx > 1000000000) break;
    }
    return result;
  };
  const answer1 = check1(storey);
  const answer2 = check2(storey);
  return answer1 > answer2 ? answer2 : answer1;
}
