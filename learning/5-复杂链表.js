const { ListNode } = require('./utils');

/**
 * @desc 给定一个链表，删除链表的*倒数*第 n 个结点，并且返回链表的头结点。
 * @param {ListNode} list
 * @param {number} idx
 * @return {ListNode}
 */
function removeNodeFromEnd(list, idx) {
  const dummy = ListNode.dummy(list);
  /**
   * @desc 快慢指针
   * @type {ListNode}
   */
  let slow = dummy, fast = dummy;
  while (idx > 0) {
    fast = fast.next;
    idx--;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  if (slow && slow.next) {
    slow.next = slow.next.next;
  }

  return dummy.next;
}

console.log('removeNodeFromEnd=>', ListNode.toArray(removeNodeFromEnd(ListNode.create([0, 1, 2, 3, 4, 5]), 3)));

/**
 * @desc 链表整体反转
 * @param {ListNode} list
 * @return {ListNode}
 */
function reverseList(list) {
  let prev = null, current = list;

  while (current) {
    const next = list.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

console.log('reverseList=>', ListNode.toArray(reverseList(ListNode.create([0, 1, 2, 3, 4, 5]))));

/**
 * @desc 链表局部反转
 * @param {ListNode} list
 * @param {number} start
 * @param {number} end
 * @return {ListNode}
 */
function reversePartialList(list, start, end) {
  const dummy = ListNode.dummy(list);

  let prev, current = dummy;

  while (start > 0) {
    const next = current.next;
    prev = current;
    current = next;
    start--;
    end--;
  }

  // 关键步骤，需要在指针定位后记录前后节点
  let head = prev;
  const tail = head.next;

  while (end >= 0 && current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    end--;
  }

  head.next = prev;
  tail.next = current;

  return dummy.next;
}

console.log('reversePartialList=>', ListNode.toArray(reversePartialList(ListNode.create([0, 1, 2, 3, 4, 5]), 1, 2)));
