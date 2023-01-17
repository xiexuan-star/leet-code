/**
 * 两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
  const result = nums1;

  let i = m - 1;
  let j = n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      result[i + j + 1] = nums1[i];
      i--;
    } else {
      result[i + j + 1] = nums2[j];
      j--;
    }
  }

  if (i < 0) {
    for (let k = 0; k <= j; k++) {
      result[k] = nums2[k];
    }
  }
}

/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const res = [];

  const sorted = nums.sort((a, b) => a - b);

  const length = sorted.length;
  for (let i = 0; i < length - 2; i++) {
    let j = i + 1;
    let k = sorted.length - 1;

    if (sorted[i] === sorted[i - 1]) continue;
    while (j < k) {
      const sum = sorted[i] + sorted[j] + sorted[k];

      if (sum === 0) {
        res.push([sorted[i], sorted[j], sorted[k]]);

        jasc();
        kdesc();
      } else if (sum > 0) {
        kdesc()
      } else if (sum < 0) {
        jasc();
      }
    }

    function jasc() {
      do {
        j++;
      } while (j < k && sorted[j] === sorted[j - 1]);
    }

    function kdesc(){
      k--;
      while (j < k && sorted[k] === sorted[k + 1]) {
        k--;
      }
    }
  }

  return res;
}

console.log(threeSum([-1, -1, 0, 1, 2, 2, -1, -4]));
