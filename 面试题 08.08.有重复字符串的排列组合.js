// @algorithm @lc id=100348 lang=javascript
// @title permutation-ii-lcci
import * as a from 'algm';
// @test("qqe")=["eqq","qeq","qqe"]
// @test("ab")=["ab","ba"]
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  const result = [];
  const visited = new Set();
  function backtrack(path, rest) {
    if (path.length === S.length && !visited.has(path)) {
      result.push(path);
      visited.add(path);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      const newPath = path + rest[i];
      const newRest = rest.slice(0, i) + rest.slice(i + 1);
      backtrack(newPath, newRest);
    }
  }
  backtrack('', S);
  return result;
};
