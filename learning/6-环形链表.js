const { ListNode } = require('./utils');

/**
 * @desc 判断环状链表
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  const nodeMap = new WeakMap();
  while (head) {
    if (nodeMap.has(head)) {
      return true;
    } else {
      nodeMap.set(head, true);
      head = head.next;
    }
  }
  return false;
}

/**
 * @desc 判断环状链表
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle1(head) {
  let slow = head, fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next && fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

const list = ListNode.create([1, 2, 3, 4, 5]);
list.next.next.next = list.next;
console.log('hasCycle=>', hasCycle(list));
console.log('hasCycle1=>', hasCycle1(list));

/**
 * @desc 获取环的起点
 * @param {ListNode} head
 * @return {ListNode|null}
 */
function detectCycle(head) {
  const nodeMap = new WeakMap();
  while (head) {
    if (nodeMap.has(head)) {
      return head;
    } else {
      nodeMap.set(head, true);
      head = head.next;
    }
  }
  return null;
}

/**
 * @desc 获取环的起点
 * @param {ListNode} head
 * @return {ListNode|null}
 */
function detectCycle1(head) {
  let slow = head, fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next && fast.next.next;
    if (slow === fast) return slow;
  }
  return null;
}

console.log('detectCycle=>', detectCycle(list));
console.log('detectCycle1=>', detectCycle1(list));
