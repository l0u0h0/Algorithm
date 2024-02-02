function solution(record) {
  const answer = [];
  const map = new Map();
  // 0 -> Enter, 1 -> Leave
  const history = [];

  record.forEach((e) => {
    const data = e.split(" ");

    if (data[0] == "Enter") {
      map.set(data[1], data[2]);
      history.push([data[1], 0]);
    } else if (data[0] == "Leave") {
      history.push([data[1], 1]);
    } else {
      map.set(data[1], data[2]);
    }
  });

  history.forEach((e) => {
    if (e[1] == 0) {
      answer.push(`${map.get(e[0])}님이 들어왔습니다.`);
    } else {
      answer.push(`${map.get(e[0])}님이 나갔습니다.`);
    }
  });

  return answer;
}
