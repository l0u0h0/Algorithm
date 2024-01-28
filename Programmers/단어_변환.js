function solution(begin, target, words) {
  if (words.findIndex((e) => e == target) < 0) return 0;
  let answer = Number.MAX_VALUE;
  const visited = Array.from({ length: words.length }, () => false);

  begin = begin.split("");

  const dfs = (depth, visited, begin) => {
    if (begin == target) {
      answer = Math.min(answer, depth);
      return;
    }
    begin = begin.split("");
    for (let i = 0; i < words.length; i++) {
      if (visited[i]) continue;
      const word = words[i].split("");
      let cnt = 0;
      for (let j = 0; j < word.length; j++) {
        if (word[j] == begin[j]) cnt += 1;
      }
      if (cnt >= word.length - 1) {
        visited[i] = true;
        dfs(depth + 1, visited, words[i]);
        visited[i] = false;
      }
    }
  };

  for (let i = 0; i < words.length; i++) {
    const word = words[i].split("");
    let cnt = 0;
    for (let j = 0; j < word.length; j++) {
      if (word[j] == begin[j]) cnt += 1;
    }
    if (cnt >= word.length - 1) {
      visited[i] = true;
      dfs(1, visited, words[i]);
      visited[i] = false;
    }
  }

  return answer;
}
