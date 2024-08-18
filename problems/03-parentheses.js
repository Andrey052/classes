/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */
function parentheses(value) {
    let count = 0;

    for (const char of value) {
        if (char === '(') {
            count++;
        } else if (char === ')') {
            count--;
        }
        
        if (count < 0) {
            return false;
        }
    }
    
    return count === 0;
}

module.exports = parentheses;
