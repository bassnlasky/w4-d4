function reverseString(string) {
  if (typeof string === 'string') {
    let result = '';
  for (let i = string.length -1; i >= 0; i--) {
    result += string[i];
  }
  return result;
  } else {
    throw new TypeError;
  }
};

module.exports = reverseString;
