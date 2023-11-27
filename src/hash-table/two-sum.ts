// 通过计算差值，并将差值存入哈希表中

export default function twoSum(numArray: number[], target: number) {
  const hashArray: Array<any> = []

  for (let i = 0; i < numArray.length; i++) {
    if (hashArray[target - numArray[i]] !== undefined) {
      return [numArray[hashArray[target - numArray[i]]], numArray[i]]
    }

    hashArray[numArray[i]] = i
  }

  return []
}