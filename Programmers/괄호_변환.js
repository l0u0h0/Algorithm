function solution(p) {
  const checkString = (str) => {
    const stack = [];

    stack.push(str[0]);

    for (let i = 1; i < str.length; i++) {
      if (str[i] == ")" && stack[stack.length - 1] == "(") {
        stack.pop();
      } else stack.push(str[i]);
    }

    return stack.length == 0 ? true : false;
  };

  const getCorrectString = (str) => {
    if (str.length == 0) return "";

    let [cnt1, cnt2, idx] = [0, 0, 1];

    for (let i = 0; i < str.length; i++) {
      if (str[i] == "(") cnt1 += 1;
      else cnt2 += 1;

      if (cnt1 == cnt2) {
        idx += i;
        break;
      }
    }

    const u = str.substring(0, idx);
    const v = str.substring(idx);

    if (checkString(u)) {
      return u + getCorrectString(v);
    } else {
      const newStr = "(" + getCorrectString(v) + ")";
      let newU = "";
      for (const s of u.substring(1, u.length - 1)) {
        if (s == "(") newU += ")";
        else newU += "(";
      }
      return newStr + newU;
    }
  };

  return getCorrectString(p);
}
