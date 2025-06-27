// @algorithm @lc id=1000006 lang=javascript
// @title one-away-lcci
import * as a from 'algm';
/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  if (first === second) return true;
  const len1 = first.length,
    len2 = second.length;
  //  长度差超过1，直接返回false
  const diff = Math.abs(len1 - len2);
  if (diff > 1) return false;
  let step = 0; // 记录编辑次数
  // 长度相同，替换一个字符
  // 长度不同，插入或删除一个字符
  let i = 0,
    j = 0;
  while (i < len1 && j < len2) {
    const char1 = first[i];
    const char2 = second[j];
    if (char1 !== char2) {
      step++;
      if (step > 1) return false;
      // 区分不同的类型
      if (len1 === len2) {
        i++;
        j++;
      } else if (len1 > len2) {
        i++;
      } else {
        j++;
      }
    } else {
      i++;
      j++;
    }
  }
  return true;
};
