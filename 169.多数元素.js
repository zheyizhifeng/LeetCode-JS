// @algorithm @lc id=169 lang=javascript
// @title majority-element
import * as a from 'algm';
// @test([3,2,3])=3
// @test([2,2,1,1,1,2,2])=2
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  /**
“同归于尽消杀法” ：也可类比正负电子抵消

由于多数超过50%, 比如100个数，那么多数至少51个，剩下少数是49个。

第一个到来的士兵，直接插上自己阵营的旗帜占领这块高地，此时领主 winner 就是这个阵营的人，现存兵力 count = 1。

如果新来的士兵和前一个士兵是同一阵营，则集合起来占领高地，领主不变，winner 依然是当前这个士兵所属阵营，现存兵力 count++；

如果新来到的士兵不是同一阵营，则前方阵营派一个士兵和它同归于尽。 此时前方阵营兵力count --。（即使双方都死光，这块高地的旗帜 winner 依然不变，因为已经没有活着的士兵可以去换上自己的新旗帜）

当下一个士兵到来，发现前方阵营已经没有兵力，新士兵就成了领主，winner 变成这个士兵所属阵营的旗帜，现存兵力 count ++。

就这样各路军阀一直以这种以一敌一同归于尽的方式厮杀下去，直到少数阵营都死光，那么最后剩下的几个必然属于多数阵营，winner 就是多数阵营。（多数阵营 51个，少数阵营只有49个，死剩下的2个就是多数阵营的人）
*/
  let winner = 0;
  let soldier = 0;
  for (let n of nums) {
    // 同归于尽了，
    if (soldier === 0) {
      winner = n;
      soldier = 1;
    } else if (n === winner) {
      // 同阵营
      soldier++;
    } else {
      // 对立阵营
      soldier--;
    }
  }
  return winner;
};
