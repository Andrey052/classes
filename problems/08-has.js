/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {
    let current = object;
    
    for (let key of path) {
        
        if (current == null || !current.hasOwnProperty(key)) {
            return false;
        }
        
        current = current[key];
    }
    
    return true;
}

module.exports = has;
