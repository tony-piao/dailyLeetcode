/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  if(!trust.length) {
    return -1
  }
  let judgeMan = -1

  let index=0
  while (trust[index].length && trust[index][0] <= n || trust[index][0] <=n) {
    const [peple, judge] = trust[index];
    if (judgeMan === peple) {
      judgeMan = -1
    } else {
      judgeMan = judge
    }
    index++
  }

};