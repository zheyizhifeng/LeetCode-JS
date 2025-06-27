// @algorithm @lc id=100276 lang=javascript
// @title er-wei-shu-zu-zhong-de-cha-zhao-lcof
// @test([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]],5)=true
/**
 * @param {number[][]} plants
 * @param {number} target
 * @return {boolean}
 */
var findTargetIn2DPlants = function (plants, target) {
    // 从左下角往上右查找

  const row = plants.length;
  if (row === 0) return false;
  const col = plants[0].length;
  if (col === 0) return false;
  if (target < plants[0][0] || target > plants[row - 1][col - 1]) return false;

  let i = row - 1;
  let j = 0;
  while (i >= 0 && j < col) {
    if(plants[i][j] === target) {
      return true;
    }
    if (plants[i][j] > target) {
      i--;
    } else {
      j++;
    }
  }
  return false;
};
