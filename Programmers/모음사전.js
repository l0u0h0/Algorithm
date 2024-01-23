function solution(word) {
  let answer = 0;

  const words = ["A", "E", "I", "O", "U"];
  const arr = [null];

  const recu = (word) => {
    if (word.length > 5) return;
    arr.push(word);
    for (let i = 0; i < 5; i++) {
      recu(word + words[i]);
    }
  };

  for (let i = 0; i < 5; i++) {
    recu(words[i]);
  }

  arr.forEach((e, i) => {
    if (e == word) {
      answer = i;
      return;
    }
  });

  return answer;
}
