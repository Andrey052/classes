/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const intersectionDeep = (firstObject, secondObject) => {
    // throw new Error(`Напишите здесь свое решение ${firstObject}, ${secondObject}`);
    let intersectionObject = {};

        if (!firstObject || !secondObject) return intersectionObject;
    
    for (let key in firstObject) {
        
        if (key in secondObject) {            
            const isObjectInFirst = typeof firstObject[key] === 'object' && firstObject[key] !== null;
            const isObjectInSecond = typeof secondObject[key] === 'object' && secondObject[key] !== null;
            
            if (isObjectInFirst && isObjectInSecond) {
                let nestedIntersection = intersectionDeep(firstObject[key], secondObject[key]);
                
                if (Object.keys(nestedIntersection).length > 0) {
                    intersectionObject[key] = nestedIntersection;
                }
            } 
            
            else if (firstObject[key] === secondObject[key]) {
                intersectionObject[key] = firstObject[key];
            }
        }
    }
}

const data = {a: 1, b: {c: 3}};
const data2 = {c: 1, b: {c: 3}};
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

module.exports = intersectionDeep;
