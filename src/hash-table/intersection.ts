// 求两个数组之间的交集


export default function intersection(nums1: number[], nums2: number[]) {
  const hashArray = []
  let resultArray = []

  for (const num of nums1) {
    if (hashArray[num] === undefined) {
      hashArray[num] = true
    }
  }

  for (const num of nums2) {
    if (hashArray[num]) {
      resultArray.push(num)
      hashArray[num] = false  // 保证输出结果是唯一的
    }
  }

  return resultArray
}