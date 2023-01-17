/**
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[j] !== str[i]) return false;
  }
  return true;
}

/**
 * @desc 给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
 * @param {string} str
 * @returns {boolean}
 */
function validPalindrome(str) {
  let i = 0, j = str.length - 1;

  while (i < j && str[i] === str[j]) {
    i++;
    j--;
  }

  return isPalindrome(i + 1, j) || isPalindrome(i, j - 1);

  /**
   * @param {number} start
   * @param {number} end
   */
  function isPalindrome(start, end) {
    while (start < end) {
      if (str[start] !== str[end]) return false;
      start++;
      end--;
    }
    return true;
  }
}

/**
 * 设计一个支持以下两种操作的数据结构：
 * void addWord(word)
 * bool search(word)
 * search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
 * . 可以表示任何一个字母。
 */
class Structure {
  contentSet = new Set();

  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    this.contentSet.add(word);
  }

  /**
   * @param {string} word
   * @returns {boolean}
   */
  search(word) {
    return [...this.contentSet.values()].some(content => {
      return this.#match(content, word);
    });
  }

  /**
   * @param {string} content
   * @param {string} word
   * @return {boolean}
   */
  #match(content, word) {
    if (content === word) return true;
    if (content.length !== word.length || !word.includes('.')) return false;
    return Array.prototype.every.bind(content, (char, idx) => {
      return char === word[idx] || word[idx] === '.';
    });
  }
}

/**
 * @param {string} str
 * @returns {number}
 */
function parseInteger(str) {
  let nums = [], started = false, positive = true;
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!started) {
      if (char === '+') {
        positive = true;
        started = true;
        continue;
      } else if (char === '-') {
        positive = false;
        started = true;
        continue;
      } else if (char === ' ') {
        continue;
      }
    }
    if (number.includes(char)) {
      nums.unshift(char);
      started = true;
    } else {
      break;
    }
  }

  const value = nums.reduce((res, char, idx) => {
    return res + (char * Math.pow(10, idx));
  }, 0);
  return positive ? Math.min(value, Math.pow(2, 31) - 1) : Math.max(0 - value, Math.pow(-2, 31));
}

console.log(parseInteger('  104999999min'));
