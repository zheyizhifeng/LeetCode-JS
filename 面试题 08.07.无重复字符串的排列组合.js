// @algorithm @lc id=100241 lang=javascript
// @title permutation-i-lcci
import * as a from 'algm';
// @test("qwe")=["qwe","qew","wqe","weq","ewq","eqw"]
// @test("ab")=["ab","ba"]
/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  const result = [];
  // 记录已访问过的
  const visited = new Array(S.length).fill(false);

  function backtrack(path, rest) {
    if (path.length === S.length) {
      result.push(path);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      backtrack(path + rest[i], rest.slice(0, i).concat(rest.slice(i + 1)));
    }
  }
  backtrack('', S);
  return result;
};
