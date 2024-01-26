function solution(phone_book) {
  const hash = {};

  for (const phone of phone_book) {
    hash[phone] = true;
  }

  for (const phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      const number = phone.slice(0, i);
      if (hash[number]) return false;
    }
  }

  return true;
}
