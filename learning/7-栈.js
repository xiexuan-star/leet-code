/**
 * @desc 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * @param {string} str
 * @return {boolean}
 */
function isValidQuote(str) {
  const quoteMap = {
    '}': '{',
    ')': '(',
    ']': '['
  };
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (quoteMap[char]) {
      if (stack.pop() !== quoteMap[char]) return false;
    } else {
      stack.push(char);
    }
  }
  return !stack.length;
}

console.log('isValidQuote=>', isValidQuote('[()]'));

/**
 * @desc 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
 * @param {number[]} list
 * @return {number[]}
 */
function temperatureParser(list) {
  const stack = [];
  const res = Array.from({ length: list.length }).fill(0);

  list.forEach((temperature, index) => {
    while (stack.length && temperature > list[stack[stack.length - 1]]) {
      const idx = stack.pop();
      res[idx] = index - idx;
    }
    stack.push(index);
  });

  return res;
}

console.log('temperatureParser=>', temperatureParser([73, 74, 75, 71, 69, 72, 76, 73]));

class MinStack {
  stack = [];
  min = [];

  push(v) {
    if (!Array.isArray(v)) v = [v];
    v.forEach(_v => {
      this.stack.push(_v);
      if (!this.min.length || _v < this.min[this.min.length - 1]) {
        this.min.push(_v);
      }
    });
  }

  pop() {
    const last = this.stack.pop();
    if (last === this.min[this.min.length - 1]) {
      this.min.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.min[this.min.length - 1];
  }

  static of() {
    return new MinStack();
  }
}

const list = MinStack.of();

list.push([4, 3, 5, 6, 7, 2, 1]);
console.log(list.min);
