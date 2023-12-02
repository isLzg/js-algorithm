export default function fib(n: number): number {
  if (n <= 1) {
    return n
  }

  let fibArray: number[] = [0, 1]
  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2]
  }

  return fibArray[n]
}