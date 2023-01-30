/**
 * @typedef {{val:string,left?:TreeNode,right?:TreeNode}} TreeNode
 */

/**
 * @type {TreeNode}
 */
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

{
  console.log("// ------------------------------------ 递归 ---------------------------------");
  /**
   * @param {TreeNode} root
   * @param {string[]} result
   * @returns {string[]}
   */
  function preorderTraversal(root, result = []) {
    if (!root) return [];
    result.push(root.val);

    preorderTraversal(root.left, result);
    preorderTraversal(root.right, result);

    return result;
  }

  console.log("preorder_traversal=>", preorderTraversal(root));

  /**
   * @param {TreeNode} root
   * @param {string[]} result
   * @returns {string[]}
   */
  function inorderTraversal(root, result = []) {
    if (!root) return [];

    inorderTraversal(root.left, result);
    result.push(root.val);
    inorderTraversal(root.right, result);

    return result;
  }

  console.log("inorder_traversal=>", inorderTraversal(root));

  /**
   * @param {TreeNode} root
   * @param {string[]} result
   * @returns {string[]}
   */
  function postorderTraversal(root, result = []) {
    if (!root) return [];

    postorderTraversal(root.left, result);
    postorderTraversal(root.right, result);

    result.push(root.val);

    return result;
  }

  console.log("postorder_traversal=>", postorderTraversal(root));
}

{
  console.log("// ------------------------------------ 迭代 ---------------------------------");

  /**
   * @param {TreeNode} tree
   * @returns {string[]}
   */
  function preorderTraversal(tree) {
    /**
     * @type {string[]}
     */
    const res = [];

    /**
     * @type {TreeNode[]}
     */
    const stack = [tree];

    while (stack.length) {
      const current = stack.pop();
      res.push(current.val);
      current.right && stack.push(current.right);
      current.left && stack.push(current.left);
    }
    return res;
  }

  console.log("preorder_traversal=>", preorderTraversal(root));


  /**
   * @param {TreeNode} tree
   * @returns {string[]}
   */
  function postorderTraversal(tree) {
    /**
     * @type {string[]}
     */
    const res = [];

    /**
     * @type {TreeNode[]}
     */
    const stack = [tree];

    while (stack.length) {
      const current = stack.pop();
      res.unshift(current.val);
      current.left && stack.push(current.left);
      current.right && stack.push(current.right);
    }
    return res;
  }

  console.log("postorder_traversal=>", postorderTraversal(root));

  /**
   * @param {TreeNode} tree
   * @returns {string[]}
   */
  function inorderTraversal(tree) {
    const res = []
    const stack = []
    let cur = tree;
    while(cur || stack.length) {
      while(cur) {
        stack.push(cur)
        cur = cur.left
      }
      cur = stack.pop()
      res.push(cur.val)
      cur = cur.right
    }
    return res
  }

  console.log("inorder_traversal=>", inorderTraversal(root));
}
