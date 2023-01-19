const { Stack } = require('./utils');

/**
 * 使用栈实现队列的下列操作：
 * push(x) -- 将一个元素放入队列的尾部。
 * pop() -- 从队列首部移除元素。
 * peek() -- 返回队列首部的元素。
 * empty() -- 返回队列是否为空。
 */
class Queue {
  #stack = Stack.of();
  #stack2 = Stack.of();

  push(...v) {
    this.#stack.push(...v);
  }

  shift() {
    this.#stack2.empty() && this.#reverse();
    return this.#stack2.pop();
  }

  peek() {
    this.#stack2.empty() && this.#reverse();
    return this.#stack2.peek();
  }

  empty() {
    return this.#stack.empty() && this.#stack2.empty();
  }

  size() {
    return this.#stack.size() + this.#stack2.size();
  }

  #reverse() {
    while (!this.#stack.empty()) {
      this.#stack2.push(this.#stack.pop());
    }
  }

  static of() {
    return new Queue();
  }
}

const queue = Queue.of();
queue.push(1, 2, 3, 4);
while (!queue.empty()) {
  console.log(queue.shift());
}

/**
 * @desc 给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
 * @param {number[]} list
 * @param {number} size
 * @return {number[]}
 */
function maxSlidingWindow(list, size) {
  const result = [];
  let queue = [];
  for (let i = 0; i < list.length; i++) {
    if (queue[0] < list[i]) {
      queue = [];
    }
    queue.push(list[i]);

    if (i < size - 1) continue;

    if (queue[0] === list[i - size]) {
      queue.shift();
    }

    result.push(queue[0]);
  }

  return result;
}

console.log(maxSlidingWindow([7, 7, 7, 4, 3, 2, 1], 3));
