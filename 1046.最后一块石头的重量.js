// @algorithm @lc id=1127 lang=javascript 
// @title last-stone-weight
// @test([2,7,4,1,8,1])=1
// @test([1])=1
/**
 * @param {number[]} stones
 * @return {number}
 * 将所有石头的重量放入【最大堆】中。每次依次从队列中取出最重的两块石头 a 和 b，必有 a≥b。
 * 如果 a>b，则将新石头 a−b 放回到最大堆中；
 * 如果 a=b，两块石头完全被粉碎，因此不会产生新的石头。
 * 重复上述操作，直到剩下的石头少于 2 块。
 * 最终可能剩下 1 块石头，该石头的重量即为最大堆中剩下。
 【核心是构建最大堆】
 */
var lastStoneWeight = function (stones) {
  const heap = new MaxHeap(); // heap 是个 class 实例
  // 所有石头"入职"（自动组织成最大堆）
  for (let n of stones) {
    heap.push(n);
  }
  while (heap.size() > 1) {
    // "公司"两位最高管（最大两石头）
    const top1 = heap.pop(); // CEO
    const top2 = heap.pop(); // 副CEO
    if (top1 === top2) continue; // 双双离职（无新员工）
    else {
      // 留下能力差（新人加入）
      heap.push(top1 - top2);
    }
  }
  // console.log('heap.size() >>>', heap.size());
  
  return heap.size() === 1 ? heap.pop() : 0;
};

/**
 * 把数组转化为大顶堆
 * @param {*} params 
 */
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  // ————————————————————————————核心过程： 上浮
  /**
   * 1. 上浮（Bubble Up）：新成员升职过程 >>>>>>>>>>>>>>>>>>>>
  当一个新人加入时（放入数组末尾），如果能力强于上级（大于父节点），就会不断提拔：

  工作场景​：
  新员工年薪200万加入（放入数组末尾）
  发现直属主管年薪180万 -> 升职
  新总监比总裁80万高? -> 再升职成为CEO
  左子 = 2 * i + 1
  右子 = 2 * i + 2
  父 = (i - 1) >> 1  // Math.floor((i-1)/2)
   */
  // "升职"考察
  _bubbleUp(index) {
    // 已经是CEO了，停止
    if (index <= 0) return;

    // 计算当前节点的直属上司
    const parentIndex = Math.floor((index - 1) / 2);

    // 如果能力比上司强
    if (this.heap[index] > this.heap[parentIndex]) {
      // 互换位置（升职！）
      [this.heap[index], this.heap[parentIndex]] =
        [this.heap[parentIndex], this.heap[index]];

      // 继续向上级挑战
      this._bubbleUp(parentIndex);
    }
  }
  // ————————————————————————————核心过程： 下沉
  /**
   * 2. 下沉（Sink Down）：CEO离职后的重组 >>>>>>>>>>>>>>>>>>>>
  当CEO离职（移除最大值），从最底层选一个临时的（数组末尾元素）。但这个临时CEO可能不称职，需要：

  比较与两位副总裁的能力
  如果副总裁更强，让位给最强副总裁
  重复这个过程直到每个人都各司其职
   */

  // 组织重组（下沉）
  _sinkDown(index) {
    const size = this.heap.length;
    let largestIndex = index; // 当前职位的能力值

    // 计算左下属位置
    const leftChild = 2 * index + 1;
    // 计算右下属位置
    const rightChild = 2 * index + 2;

    // 检查左下属是否更强
    if (leftChild < size && this.heap[leftChild] > this.heap[largestIndex]) {
      largestIndex = leftChild;
    }

    // 检查右下属是否更强
    if (rightChild < size && this.heap[rightChild] > this.heap[largestIndex]) {
      largestIndex = rightChild;
    }

    // 如果最强的员工不是当前职位者
    if (largestIndex !== index) {
      // 让能者上位
      [this.heap[index], this.heap[largestIndex]] =
        [this.heap[largestIndex], this.heap[index]];

      // 继续在新位置考察是否胜任
      this._sinkDown(largestIndex);
    }
  }
  // ————————————————————————————添加新元素
  push(value) {
    // 1. 新员工加入末尾
    this.heap.push(value);

    // 2. 进行升职考察
    this._bubbleUp(this.heap.length - 1);
  }
  // ———————————————————————————— 弹出堆顶
  pop() {
    if (this.heap.length === 0) return null;

    // 1. 移除当前的CEO
    const max = this.heap[0];

    // 2. 让最后一名员工暂代CEO
    const last = this.heap.pop();

    // 3. 如果还有员工，重组管理层
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._sinkDown(0);
    }

    return max;
  }
  size() {
    return this.heap.length;
  }
}