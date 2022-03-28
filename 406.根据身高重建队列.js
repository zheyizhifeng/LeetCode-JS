// @algorithm @lc id=406 lang=javascript 
// @title queue-reconstruction-by-height
// import * as a from 'algm'
// @test([[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]])=[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
// @test([[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]])=[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  const queue = [];
  people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]) // * 按照身高从高到低、相同身高 Ki 从小到大排序

  for(let person of people) {
    // * Ki是多少，就插在Ki的位置上
    queue.splice(person[1], 0, person)
  }
  return queue
};