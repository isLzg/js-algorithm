export default function singleNumber(numArray: number[]) {
  let result = numArray[0]

  for (let i = 1; i < numArray.length; i++) {
    result = result ^ numArray[i]
  }

  return result
}