// @algorithm @lc id=77 lang=javascript
// @title combinations
// @test(4,2)=[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// @test(1,1)=[[1]]
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (k > n) return [];
  const result = [];

  // const path = [];
  // function backtracking(n, k, startIndex) {
  //   if (path.length === k) {
  //     result.push([...path]);
  //   } else {
  //     for (let i = startIndex; i <= n; i++) {
  //       path.push(i);
  //       backtracking(n, k, i + 1);
  //       path.pop();
  //     }
  //   }
  // }
  // backtracking(n, k, 1);

  function backtracking(current, start) {
    if (current.length === k) {
      result.push(current);
    } else {
      for (let i = start; i <= n; i++) {
        backtracking(current.concat(i), i + 1);
      }
    }
  }
  backtracking([], 1);
  return result;
};
