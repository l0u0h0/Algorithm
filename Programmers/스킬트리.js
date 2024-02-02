function solution(skill, skill_trees) {
  let answer = 0;

  skill = skill.split("");
  const check = new Map();

  skill.forEach((e, i) => check.set(e, i));

  skill_trees.forEach((e) => {
    const arr = e.split("");
    let count = 0;

    arr.forEach((v) => {
      if (check.has(v) && check.get(v) == count) {
        count += 1;
      } else if (check.has(v) && check.get(v) != count) {
        count = -1;
      }
    });

    if (count >= 0) answer += 1;
  });

  return answer;
}
