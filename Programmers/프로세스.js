function solution(priorities, location) {
  let num = 0;
  const queue = Array.from({ length: priorities.length }, () => num++);
  location = queue[location];

  while (queue.length > 0) {
    const cur = queue.shift();
    const curPrio = priorities[cur];
    let flag = false;
    for (let i = 0; i < priorities.length; i++) {
      if (priorities[cur] < priorities[i]) {
        queue.push(cur);
        flag = true;
        break;
      }
    }
    if (!flag) {
      priorities[cur] = 0;
      if (cur == location) {
        break;
      }
    }
  }

  return priorities.length - queue.length;
}
