const root = {
  val: "A",
  left: {
    val: "B",
    left: {
      val: "D"
    },
    right: {
      val: "E"
    }
  },
  right: {
    val: "C",
    right: {
      val: "F"
    }
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 先序遍历
function preorderTraversal(root, result = []) {
  if (!root) return [];
  result.push(root.val);

  preorderTraversal(root.left, result);
  preorderTraversal(root.right, result);

  return result;
}

console.log(preorderTraversal(root));

function inorderTraversal(root, result = []) {
  if (!root) return [];

  inorderTraversal(root.left, result);
  result.push(root.val);
  inorderTraversal(root.right, result);

  return result;
}

console.log(inorderTraversal(root));

function postorderTraversal(root, result = []) {
  if (!root) return [];

  postorderTraversal(root.left, result);
  postorderTraversal(root.right, result);

  result.push(root.val);

  return result;
}

console.log(postorderTraversal(root));
