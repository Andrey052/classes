/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
    reverse(str) {
        let reversedStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
          reversedStr += str[i];
        }
        return reversedStr;
      }    
      
      ucFirst(str) {
        if (str.length === 0) {
          return str;
        }
        let firstChar = str[0].toUpperCase();
        let restOfString = str.slice(1);
        return firstChar + restOfString;
      }
          
      ucWords(str) {
        let words = str.split(' '); 
        for (let i = 0; i < words.length; i++) {
          if (words[i].length > 0) {
            words[i] = this.ucFirst(words[i]);
          }
        }
        return words.join(' ');
      }
}

const str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

module.exports = MyString;
