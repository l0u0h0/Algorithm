function solution(w, h) {
  if (w === h) {
    return w * h - w;
  }

  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  return w * h - (w + h - gcd(w, h));
}
