/**

 * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
 * @param {Object<string | number>} firstObject - объект с примитивными значениями
 * @param {Object<string | number>} secondObject - объект с примитивными значениями
 * @returns {Object}
 */

const intersection = (firstObject, secondObject) => {
    // throw new Error(`Напишите здесь свое решение ${firstObject}, ${secondObject}`);

    const intersectionObject = {};

    if (!firstObject || !secondObject) return intersectionObject;

    for (const [key, value] of Object.entries(firstObject)) {
        if (secondObject.hasOwnProperty(key) && value === secondObject[key]) {
            intersectionObject[key] = value;
        }
    };

    return intersectionObject;
};

const data = {a: 1, b: 2};
const data2 = {c: 1, b: 2};
console.log(intersection(data, data2)); // { b: 2 }

module.exports = intersection;
