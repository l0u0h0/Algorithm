function solution(friends, gifts) {
  const answer = Array(friends.length).fill(0);
  const giftCount = {};
  const account = new Map();

  friends.forEach((e) => {
    account.set(e, []);
    giftCount[e] = 0;
  });

  gifts.forEach((e) => {
    const [start, end] = e.split(" ");

    giftCount[start] += 1;
    giftCount[end] -= 1;

    account.set(start, [...account.get(start), end]);
  });

  for (let i = 0; i < friends.length - 1; i++) {
    for (let j = i + 1; j < friends.length; j++) {
      // i ==> j
      const curA = account
        .get(friends[i])
        .filter((e) => e == friends[j]).length;
      const curB = account
        .get(friends[j])
        .filter((e) => e == friends[i]).length;

      // 선물 지수로 카운팅
      if (curA == curB) {
        const countA = giftCount[friends[i]];
        const countB = giftCount[friends[j]];

        if (countA == countB) continue;

        answer[countA > countB ? i : j] += 1;
      } else {
        answer[curA > curB ? i : j] += 1;
      }
    }
  }

  return answer.sort((a, b) => b - a)[0];
}
