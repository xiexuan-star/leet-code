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

module.exports = { ListNode };
