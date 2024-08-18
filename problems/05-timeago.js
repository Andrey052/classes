/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    if (seconds < 0) return 'undefined';
    
    const minute = 60;
    const hour = 3600;
    const day = 86400;
    const week = 604800;

    if (seconds < minute) {
        return seconds === 0 ? 'just now' : `${seconds} seconds ago`;
    } else if (seconds < hour) {
        const minutes = Math.floor(seconds / minute);
        return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    } else if (seconds < day) {
        const hours = Math.floor(seconds / hour);
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else if (seconds < week) {
        const days = Math.floor(seconds / day);
        return days === 1 ? '1 day ago' : `${days} days ago`;
    } else {
        return 'undefined';
    }
}

module.exports = timeago;
