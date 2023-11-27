export default function lengthOfLongestSubString(value: string): number {
  let hashArray: Array<string> = []
  let length = 0

  for (let i = 0; i < value.length; i++) {

    const index = hashArray.indexOf(value[i])
    if (index !== -1) {
      hashArray = hashArray.slice(index + 1)
    }

    hashArray.push(value[i])
    length = Math.max(length, hashArray.length)
  }

  return length
}