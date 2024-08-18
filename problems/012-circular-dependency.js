/**
 * Сара пишет сложные клиентские приложения на ангуляре. Поэтому ей часто приходится создавать и модифицировать сервисы.
 * Сервисы могут использовать другие сервисы. Однако они не должны быть взаимозависимыми.
 *
 * Напишите функцию которая определяет есть ли цикличная зависимость между сервисами в проекте Сары.
 * Зависимости описаны объектом, ключи которого являются именами сервисов, а значения—это сервисы-зависимости.
 *
 * Пример:
 *
 * hasCircularDependency({
 *  http: [],
 *  apiClient: ['http'],
 * }) === false
 *
 * hasCircularDependency({
 *  http: ['dogsApi'],
 *  apiClient: ['http'],
 *  dogsApi: ['apiClient'],
 * }) === true
 *
 * @param {Object.<string, Array.<string>>} servicesMap
 * @returns {boolean}
 */
function hasCircularDependency(servicesMap) {
    const visited = new Set();
    const stack = new Set();

    function dfs(service) {
        if (stack.has(service)) {
            return true;
        }
        if (visited.has(service)) {
            return false;
        }

        stack.add(service);
        for (const dependency of servicesMap[service] || []) {
            if (dfs(dependency)) {
                return true;
            }
        }
        stack.delete(service);
        visited.add(service);
        return false;
    }

    for (const service in servicesMap) {
        if (dfs(service)) {
            return true;
        }
    }

    return false; 
}

module.exports = hasCircularDependency;
