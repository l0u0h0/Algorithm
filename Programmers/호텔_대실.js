function solution(book_time) {
  let answer = 0;
  const visited = Array.from({ length: book_time.length }, () => false);
  book_time = book_time
    .map((e) => {
      const startHour = parseInt(e[0].split(":")[0]) * 60;
      const startMin = parseInt(e[0].split(":")[1]);
      const endHour = parseInt(e[1].split(":")[0]) * 60;
      const endMin = parseInt(e[1].split(":")[1]);

      return [startHour + startMin, endHour + endMin];
    })
    .sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < book_time.length; i++) {
    if (visited[i]) continue;
    let cur = book_time[i];
    for (let j = i; j < book_time.length; j++) {
      if (visited[j]) continue;
      if (i == j || cur[1] + 10 <= book_time[j][0]) {
        cur = book_time[j];
        visited[j] = true;
      }
    }
    answer += 1;
  }

  return answer;
}
