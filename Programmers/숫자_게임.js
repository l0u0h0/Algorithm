function solution(A, B) {
  let answer = 0;

  A = A.sort((a, b) => b - a);
  B = B.sort((a, b) => b - a);

  let [idxA, idxB] = [0, 0];

  while (idxA < A.length) {
    if (A[idxA] >= B[idxB]) {
      idxA += 1;
      continue;
    }
    answer += 1;
    idxA += 1;
    idxB += 1;
  }

  return answer;
}
