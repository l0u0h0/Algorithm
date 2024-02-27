// 유저 아이디 중 밴 아이디만큼의 길이를 가진 조합 구하기
// 해당 조합으로 밴 아이디 목록을 충족 시키는지 검사
// 충족 시키면 answer += 1;
function solution(user_id, banned_id) {
  let answer = 0;

  // 구한 아이디 조합이 밴 아이디에 부합한지 체크
  const isPossible = (permu, curArr, visited, depth) => {
    if (depth == curArr.length) {
      for (let i = 0; i < depth; i++) {
        const userStr = permu[i].split("");
        const banStr = banned_id[i].split("");
        if (permu[i].length != banned_id[i].length) return false;
        for (let j = 0; j < banned_id[i].length; j++) {
          if (banStr[j] == "*") continue;
          if (userStr[j] != banStr[j]) return false;
        }
      }
      return true;
    }

    for (let i = 0; i < curArr.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      if (isPossible([...permu, curArr[i]], curArr, visited, depth + 1))
        return true;
      visited[i] = false;
    }
    return false;
  };

  const combination = (s, visited, depth, curArr) => {
    if (depth == banned_id.length) {
      if (isPossible([], curArr, Array(depth).fill(false), 0)) {
        answer += 1;
      }
      return;
    }

    for (let i = s; i < user_id.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      combination(i + 1, visited, depth + 1, [...curArr, user_id[i]]);
      visited[i] = false;
    }
  };

  combination(0, Array(user_id.length).fill(false), 0, []);

  return answer;
}
