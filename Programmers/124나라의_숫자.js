function solution(n) {
  const queue = [];

  while (n > 0) {
    const type = n % 3;

    if (type == 1) queue.push("1");
    else if (type == 2) queue.push("2");
    else queue.push("4");

    n = Math.trunc(n / 3);
    if (type == 0) n -= 1;
  }

  return queue.reverse().join("");
}
