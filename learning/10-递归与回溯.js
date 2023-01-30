/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const len = nums.length;
  const curr = [];
  const res = [];
  const visited = {};

  function dfs(nth) {
    if (nth === len) {
      res.push(curr.slice());
      return;
    }
    for (let i = 0; i < len; i++) {
      if (visited[i]) continue;

      visited[i] = 1;
      curr.push(nums[i]);

      dfs(nth + 1);

      curr.pop();
      visited[i] = 0;
    }
  }

  dfs(0);
  return res;
};

console.time('function1');
console.log(permute([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.timeEnd('function1');
