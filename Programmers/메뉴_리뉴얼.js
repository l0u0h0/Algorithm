function solution(orders, course) {
  let answer = [];

  const comb = Array.from({ length: 11 }, () => new Map());

  const combination = (depth, visited, start, end, str, arr) => {
    if (depth == end) {
      const finStr = arr.join("");
      if (comb[end].has(finStr))
        comb[end].set(finStr, comb[end].get(finStr) + 1);
      else comb[end].set(finStr, 1);
      return;
    }

    for (let i = start; i < str.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      combination(depth + 1, visited, i + 1, end, str, [...arr, str[i]]);
      visited[i] = false;
    }
  };

  course.forEach((e) => {
    for (const order of orders) {
      if (e > order.length) continue;
      combination(
        0,
        Array(order.length).fill(false),
        0,
        e,
        order.split("").sort(),
        []
      );
    }

    const courses = [...comb[e]]
      .sort((a, b) => b[1] - a[1])
      .filter((e) => e[1] >= 2);
    const maxLength = courses.length > 0 ? courses[0][1] : 0;

    if (maxLength >= 2) {
      for (const str of courses) {
        if (str[1] == maxLength) answer.push(str[0]);
        else break;
      }
    }
  });

  return answer.sort();
}
