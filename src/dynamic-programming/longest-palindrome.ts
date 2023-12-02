export default function longestPalindrome(s: string) {
  const length = s.length
  const dp = Array.from({ length: length }, () => Array(length).fill(false))

  let start = 0;  // 记录回文子串的起始位置
  let maxLength = 1;  // 记录最长回文子串的长度

  // 所有长度为 1 的子串都是回文的
  for (let i = 0; i < length; i++) {
    dp[i][i] = true
  }

  // 检查长度为 2 的子串
  for (let i = 0; i < length - 1; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      maxLength = 2;
    }
  }

  // 检查长度大于 2 的子串
  for (let len = 3; len <= length; len++) {
    for (let i = 0; i <= length - len; i++) {
      const j = i + len - 1;
      if (s[i] === s[j] && dp[i + 1][j - 1]) {
        dp[i][j] = true;
        start = i;
        maxLength = len;
      }
    }
  }

  return s.substring(start, start + maxLength)
}

const inputString = "babad";
const result = longestPalindrome(inputString);
console.log(result);  // 输出 "bab" 或 "aba"