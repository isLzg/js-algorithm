// 该数组中和为 k 的连续子数组的个数

export default function subArraySum(sums: number[], k: number) {
  const map = new Map()
  map.set(0, 1) // 前缀和为 0 的出现次数为 1

  let count = 0
  let preSum = 0

  for (const sum of sums) {
    preSum += sum
    count += map.get(preSum - k) || 0 // 这里同样是在计算差值

    // 存贮当前前缀和出现的次数
    map.set(preSum, (map.get(preSum) || 0) + 1)
  }

  return count
}

subArraySum([1, 1, 1], 2)