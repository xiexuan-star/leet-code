/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let result, tempResult, moreThan10 = false;
  while (l1 || l2 || moreThan10) {
    let value = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + (+moreThan10);
    moreThan10 = value >= 10;
    value = moreThan10 ? value - 10 : value;
    if (!result) {
      result = tempResult = new ListNode(value);
    } else {
      tempResult = tempResult.next = new ListNode(value);
    }
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return result;
};
