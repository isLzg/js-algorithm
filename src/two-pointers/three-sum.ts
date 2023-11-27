export default function threeSum(nums: number[]): number[][] {
  const length = nums.length
  if (length < 2) return []
  let result = []

  // 拿到数组，先 sort 
  nums.sort((a, b) => a - b)

  for (let i = 0; i < length - 2; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let L = i + 1
    let R = length - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]])

        // 寻找下一个答案前，去重
        while (L < R && nums[L] === nums[L + 1]) L++
        while (L < R && nums[R] === nums[R - 1]) R--
        L++
        R--
      }
      else if (sum < 0) {
        // 和小于 0，左边的值太小了，向右移
        L++
      }
      else if (sum > 0) {
        // 和大于 0，右边的值太大了，向左移
        R--
      }
    }
  }

  return result
}