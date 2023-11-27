export default class RecentCounter {
  queue: any[]

  constructor() {
    this.queue = []
  }

  ping(t: number) {
    this.queue.push(t)

    while (this.queue[0] < t - 3000) {
      this.queue.shift()
    }

    return this.queue.length
  }
}