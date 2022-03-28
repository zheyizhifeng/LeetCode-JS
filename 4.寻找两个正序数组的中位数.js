// @algorithm @lc id=4 lang=javascript
// @title median-of-two-sorted-arrays
// @test([1,3],[2])=2.00000
// @test([1,2],[3,4])=2.50000
// @test([1,3,4,9],[1,2,3,5,6,7,8,9,10])=5.00000
// @test([2,3,4,6,8],[1,2,3,4,5,6,7,8,9])=4.50000
// @test([2],[3,4,5,6,7,8,9,10])=6.00000
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  /* 找第K个最小元素
  ! eg. 1 奇数长度
  A = [1,3,4,9], length = 4
  B = [1,2,3,5,6,7,8,9,10], length = 9
  总长度 length = 13, 奇数, length >> 1 = 6,
  寻找合并的有序数组中第 7个最小的数，下标为6, 即为中位数
  i = 0, j = 0, K=7
  K  K/2    A下标i       B下标j         A[i] >= B[j]
  7   3     i=i+K/2-1=2  j=j+K/2-1=2    A[i] >= B[j],抛弃B[0]~B[2],i=0,j=j+1=3,剩下 K-K/2=4
  4   2     i=i+K/2-1=1  j=j+K/2-1=4    A[i] < B[j],抛弃A[0]~A[1],i=i+1=2,j=3,剩下 K-K/2=2
  2   1     i=i+K/2-1=2  j=j+K/2-1=3    A[i] < A[j],抛弃A[2],i=i+1=3,j=3,剩下 K-K/2=1
  1   此时直接比较A[i]和B[j], 此时A[3]>B[3], return B[3], 即中位数为B[3] = 5

  ! eg.2 偶数长度
  A = [2,3,4,6,8], length = 5
  B = [1,2,3,4,5,6,7,8,9], length = 9
  总长度 length = 14, 偶数, length >> 1 = 7,
  寻找合并的有序数组中第 7个和第 8个最小的数，下标分别为6和 7，二者之和/2，即为中位数
  i = 0, j = 0, K=7
  K  K/2    A下标i       B下标j         A[i] >= B[j]
  7   3     i=i+K/2-1=2  j=j+K/2-1=2    A[2] >= B[2],抛弃B[0]~B[2],i=0,j=j+1=3,剩下K-K/2=4
  4   2     i=i+K/2-1=1  j=j+K/2-1=4    A[1] < B[4],抛弃A[0]~A[1],i=i+1=2,j=3,剩下K-K/2=2
  2   1     i=i+K/2-1=2  j=j+K/2-1=3    A[2] >= B[3]],抛弃B[3]],i=2,j=j+1=4,剩下K-K/2=1
  1   此时直接比较A[i]和B[j], 此时A[2]<B[4], return A[2], 即第7个最小的数为A[2] = 4

  寻找第8个最小的数基于前面步骤：相当于，此时, K = 1, i=i+1=3, j=4 此时A[3]>B[4], return B[4],
  即，第8个最小的数为B[4] = 5

  最终中位数为(4+5)/2 = 4.5
 */
  function findKthElement(nums1, nums2, k) {
    const len1 = nums1.length;
    const len2 = nums2.length;
    let index1 = 0;
    let index2 = 0;
    while (true) {
      if (index1 === len1) {
        // * nums1 到头了
        return nums2[index2 + k - 1];
      } else if (index2 === len2) {
        // * nums2 到头了
        return nums1[index1 + k - 1];
      } else if (k === 1) {
        return Math.min(nums1[index1], nums2[index2]);
      }

      const half = k >> 1;
      let newIndex1 = Math.min(index1 + half - 1, len1 - 1); // * 要注意index+half-1可能会越界溢出, 所以下标最大为len1-1
      let newIndex2 = Math.min(index2 + half - 1, len2 - 1); // * 同上
      if (nums1[newIndex1] <= nums2[newIndex2]) {
        // * 开始抛弃部分序列，更新K值，抛弃的长度为newIndex1 - index1 + 1，对应end-start+1
        k -= newIndex1 - index1 + 1;
        index1 = newIndex1 + 1; // * 更新抛弃过的序列的下标
      } else {
        k -= newIndex2 - index2 + 1;
        index2 = newIndex2 + 1;
      }
    }
  }
  const totalLength = nums1.length + nums2.length;
  const medianLeft = (totalLength - 1) >> 1;
  const medianRight = totalLength >> 1;
  // * 核心思路为, 用二分找到从小到大第K个数
  if (medianLeft === medianRight) {
    return findKthElement(nums1, nums2, medianLeft + 1);
  } else {
    return (
      (findKthElement(nums1, nums2, medianLeft + 1) +
        findKthElement(nums1, nums2, medianRight + 1)) /
      2
    );
  }
};
