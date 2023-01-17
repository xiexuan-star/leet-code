const { ListNode } = require('./utils');

/**
 * @desc 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。
 * @param {ListNode} chain1
 * @param {ListNode} chain2
 * @return {ListNode}
 */
function mergeNode(chain1, chain2) {
  let first;
  if (chain1.value <= chain2.value) {
    first = chain1;
    chain1 = chain1.next;
  } else {
    first = chain2;
    chain2 = chain2.next;
  }

  let current = first;

  while (chain1 || chain2) {
    if (!chain1) {
      current.next = chain2;
      break;
    }
    if (!chain2) {
      current.next = chain1;
      break;
    }
    if (chain1.value <= chain2.value) {
      current = current.next = chain1;
      chain1 = chain1.next;
    } else {
      current = current.next = chain2;
      chain2 = chain2.next;
    }
  }


  return first;
}

/**
 * @desc 链表去重
 * @param {ListNode} list
 * @return {ListNode}
 */
function uniqueList(list) {
  let current = list;

  while (current && current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return list;
}

console.log(ListNode.toArray(uniqueList(ListNode.create([1, 2, 3, 3, 4, 4, 5]))));

/**
 * @desc 给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
 * @param {ListNode} list
 * @return {ListNode}
 */
function dummy(list) {
  const dummy = new ListNode();
  dummy.next = list;

  let current = dummy;

  while (current.next && current.next.next) {
    if (current.next.value === current.next.next.value) {
      const value = current.next.value;
      while (current.next.value === value) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}

console.log(
  ListNode.toArray(dummy(ListNode.create([1, 2, 3, 3, 3, 4, 4, 5])))
);
