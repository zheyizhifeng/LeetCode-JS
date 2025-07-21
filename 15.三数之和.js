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
  for (let i = 0; i < nums.length - 2; i++) { // 加数1,即nums[i]
    if(nums[i] > 0) break; // 总和为 0, 首元素已 > 0, 跳过
    if (nums[i] === nums[i - 1] && i >= 1) { // 剪枝，跳过相同元素
      continue;
    }
    let start = i + 1; // 加数2，即nums[j]
    let end = nums.length - 1; // 加数3,即nums[k]
    const diff = -nums[i]; // 剩余的和
    
    // 因为已经排过序，所以可以双指针遍历
    while (start < end) {
      if (nums[start] + nums[end] < diff) {
        start++;
      } else if (nums[start] + nums[end] > diff) {
        end--;
      } else { 
        // 命中一组结果，但要过滤掉重复组合。
        // 分别用 low 和 high 记录当前重复的值
        let low = nums[start], high = nums[end];
        result.push([nums[i], nums[start], nums[end]]);
        while (start < end && nums[start] === low) {
          start++;
        }
        while (start < end && nums[end] === high) {
          end--;
        }
      }
    }
  }
  return result;
};