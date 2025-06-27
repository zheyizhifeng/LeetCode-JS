// @algorithm @lc id=15 lang=javascript 
// @title 3sum
// @test([-1,0,1,2,-1,-4])=[[-1,-1,2],[-1,0,1]]
// @test([0,1,1])=[]
// @test([0,0,0])=[[0,0,0]]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 2; i++) { // 加数1
    if(nums[i] > 0) break;
    if (nums[i] === nums[i - 1] && i >= 1) { // 剪枝，跳过相同元素
      continue;
    }
    let start = i + 1; // 加数2
    let end = nums.length - 1; // 加数3
    const diff = -nums[i];
    
    while (start < end) {
      if (nums[start] + nums[end] < diff) {
        start++;
      } else if (nums[start] + nums[end] > diff) {
        end--;
      } else { // 命中，但要过滤重复组合。
        result.push([nums[i], nums[start], nums[end]]);
        start++;
        end--;
        while (start < end && nums[start] === nums[start - 1]) {
          start++;
        }
        while (start < end && nums[end] === nums[end + 1]) {
          end--;
        }
      }
    }
  }
  return result;
};