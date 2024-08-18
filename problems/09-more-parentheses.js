/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    const stack = [];
        
    const pairs = {
        ')': '(',
        '}': '{',
        '>': '<'
    };
    
    for (let char of value) {
        if (Object.values(pairs).includes(char)) {
            
            stack.push(char);
        } else if (Object.keys(pairs).includes(char)) {
            
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false; 
        }
    }
  }  
    return stack.length === 0;
}

module.exports = parentheses;
