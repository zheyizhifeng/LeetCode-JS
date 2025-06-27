// @algorithm @lc id=1000021 lang=javascript
// @title smallest-k-lcci
import * as a from 'algm';
// @test([1,3,5,7,2,4,6,8],4)=[1,2,3,4]
// @test([1,4,6,7,2,3,5],4)=[1,2,3,4]
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK = function (arr, k) {
  if (k === 0) return [];
  if (k >= arr.length) return arr;

  // 1. 取前k个元素建堆
  const heap = arr.slice(0, k);
  heapify(heap);

  // 2. 遍历剩下的元素
  for (let i = k; i < arr.length; i++) {
    if (arr[i] < heap[0]) {
      heap[0] = arr[i];      // 替换堆顶
      down(heap, 0, k);      // 维护堆
    }
  }
  return heap
};

function heapify(arr) {
  // 把数组转成大顶堆
  // 假设长度为 n,最后一个节点【叶子】为 n-1，根据任意节点的父子关系公式
  // 节点 i 的左右子：2*i+1 和 2*i+2
  // 节点 i 的父：Math.floor[(i-1)/2]
  // 所以，最后一个非叶子节点【最后一个节点 n-1 的父】为：
  // Math.floor[(n-1-1)/2] = Math.floor(n/2-1)
  const n = arr.length;
  const lastNoneLeafNode = Math.floor(n / 2 - 1);
  for (let i = lastNoneLeafNode; i >= 0; i--) {
    // 下沉操作
    down(arr, i, n);
  }
}

//    1
//  2    3
// 4 5  6 7

function down(arr, idx, size) {
  while (2 * idx + 1 < size) {
    let left = idx * 2 + 1;
    let right = idx * 2 + 2;
    let largest = idx;

    if (arr[left] > arr[largest]) {
      largest = left;
    }
    if (right < size && arr[right] > arr[largest]) {
      largest = right;
    }
    // 不需要交换
    if (largest === idx) break;
    [arr[largest], arr[idx]] = [arr[idx], arr[largest]];
    idx = largest;
  }
}
