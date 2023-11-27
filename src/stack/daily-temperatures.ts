// 用一个单调栈维护数组下标，只需要循环一次，就能找到大于其的天数（两个数组的下标差值）
// 这是一个单调递增栈

export default function dailyTemperatures(temperatures: number[]) {
  const stack = []
  const resultArray = new Array(temperatures.length).fill(0) // 没有找到的则为 0

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const idx = stack.pop()! // 将数组的下标从栈中推出
      resultArray[idx] = i - idx // 计算下标差值
    }

    stack.push(i) // 将还未找到的压入栈，继续比较数组的下一项
  }

  return resultArray
}