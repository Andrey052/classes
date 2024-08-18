/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

export const isEmptyDeep = (object) => {
    // throw new Error(`Напишите здесь свое решение ${object}`);
    const objectValues = Object.values(object);

    return objectValues.every((value) => {        
        if (value === '' || value === null || Number.isNaN(value) || value === undefined) {
            return true;
        }
        
        if (Array.isArray(value)) {
            return value.length === 0 || value.every(isEmptyDeep);
        }
        
        if (typeof value === 'object' && value !== null) {
            return Object.keys(value).length === 0 || isEmptyDeep(value);
        }
        
        return false;
    });
};

const data = {a: {b: undefined}};
const data2 = {a: {b: 1}};
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
