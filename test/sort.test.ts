import { describe, it, expect } from 'bun:test'
import bubbleSort from '../src/sort/bubble'

describe('Sort', () => {
  it('bubble', () => {
    const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
    const actualResult = bubbleSort(unsortedArray)
    const expectedResult = [11, 12, 22, 25, 34, 64, 90]

    expect(actualResult).toStrictEqual(expectedResult)
  })
})