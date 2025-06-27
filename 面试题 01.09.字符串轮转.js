// @algorithm @lc id=100162 lang=javascript 
// @title string-rotation-lcci
import * as a from 'algm'
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
  const n = s1.length;
  const m = s2.length;
  if (n !== m) return false;

  return (s1 + s1).includes(s2);
};