class ListNode {
  /**
   * @param {number|null} value
   * @param {ListNode|null}next
   */
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  /**
   * @param {number|null} value
   * @param {ListNode|null}next
   */
  static of(value = null, next = null) {
    return new ListNode(value, next);
  }

  /**
   * @param {ListNode} chain
   */
  static toArray(chain) {
    const result = [];
    do {
      result.push(chain.value);
      chain = chain.next;
    } while (chain);

    return result;
  }

  /**
   * @param {number[]} values
   * @return {ListNode}
   */
  static create(values) {
    return values.reverse().reduce((res, value, idx) => {
      res.value = value;
      if (idx === values.length - 1) return res;
      return new ListNode(null, res);
    }, ListNode.of());
  }

  /**
   * @param {ListNode} list
   * @returns {ListNode}
   */
  static dummy(list) {
    const result = ListNode.of();
    result.next = list;
    return result;
  }
}

class Stack {
  #list = [];

  push(...v) {
    this.#list.push(...v);
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

  pop() {
    return this.#list.pop();
  }

  size() {
    return this.#list.length;
  }

  empty() {
    return !this.#list.length;
  }

  static of() {
    return new Stack();
  }
}

module.exports = { ListNode, Stack };
