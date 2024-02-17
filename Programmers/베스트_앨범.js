function solution(genres, plays) {
  let answer = [];
  const ply = new Map();
  const max = new Map();
  genres.forEach((e, i) => {
    if (ply.has(e)) {
      ply.set(e, [...ply.get(e), [plays[i], i]]);
      max.set(e, max.get(e) + plays[i]);
    } else {
      ply.set(e, [[plays[i], i]]);
      max.set(e, plays[i]);
    }
  });

  let arr = [...max];
  arr.sort((a, b) => b[1] - a[1]);
  let max_gen = arr.map((e) => e[0]);

  max_gen.forEach((e) => {
    let test = ply.get(e);
    if (test.length < 2) {
      answer.push(test[0][1]);
    } else {
      test.sort((a, b) => b[0] - a[0]);
      const result = test.slice(0, 2);
      result.forEach((e) => answer.push(e[1]));
    }
  });

  return answer;
}
