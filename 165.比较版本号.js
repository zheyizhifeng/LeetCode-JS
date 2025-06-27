// @algorithm @lc id=165 lang=javascript 
// @title compare-version-numbers
import * as a from 'algm'
// @test("1.0.1", "1")=1
// @test("1.2","1.10")=-1
// @test("1.01","1.001")=0
// @test("1.0","1.0.0.0")=0
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.');
    const v2 = version2.split('.');
    while(v1.length || v2.length) {
      let ver1 = v1.length > 0 ? +(v1.shift()): 0;
      let ver2 = v2.length > 0 ? +(v2.shift()): 0;
      if (ver1 < ver2) return -1;
      if (ver1 > ver2) return 1;
    }
    return 0;
};