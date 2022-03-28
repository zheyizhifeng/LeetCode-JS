/*
 * @lc app=leetcode.cn id=690 lang=javascript
 *
 * [690] 员工的重要性
 */

// @lc code=start
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  let staff = employees.find((employee) => employee.id === id);
  if (staff.subordinates.length === 0) return staff.importance;
  return staff.subordinates.reduce((prev, next) => {
    return prev + GetImportance(employees, next);
  }, staff.importance);
};
// GetImportance([
//   [1, 2, [2]],
//   [2, 3, []],
// ], 2);
// @lc code=end
