// @algorithm @lc id=1000338 lang=javascript 
// @title SsGoHC
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;
    const start = Array(10001).fill(0);
    const end = Array(10001).fill(0);
    // const n = intervals.length;
    for (let [s, e] of intervals) {
        start[s]++;
        end[e]++;
    }
    let count = 0;
    let seqStart = -1;
    const result = [];
    for (let i = 0; i < start.length; i++) {
        if (start[i] > 0) {
            if (count === 0) {
                seqStart = i;
            }
            count += start[i];
        }
        if (end[i] > 0) {
            count -= end[i];
            if (count === 0) {
                result.push([seqStart, i])
            }
        }
    }
    return result;
};