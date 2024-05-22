// ## Example 1 - Базові операції з масивом

// 1. Створіть масив `genres` з елементами "Jazz" та "Blues".
// 2. Додайте «Рок - н - рол» до кінця.
// 3. Виведіть у консоль перший елемент масиву.
// 4. Виведіть останній елемент масиву в консоль.Код повинен працювати для масиву
//    довільної довжини.
// 5. Видаліть перший елемент та виведіть його в консоль.
// 6. Вставте «Country» та «Reggae» на початок масиву.


// const genres = ['Jazz', 'Blues'];
// genres.push('Рок - н - рол');

// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// console.log(genres.shift());
// console.log(genres)

// genres.unshift('Country', 'Reggae');
// console.log(genres);


// ## Example 2 - Масиви та рядки

// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких
// зберігаються у змінній `values` у вигляді рядка.Значення гарантовано розділені
// пробілом.


// const values = '8 11';
// const arr = values.split(' ');

// console.log(arr[0] * arr[1]);


// ## Example 3 - Перебір масиву

// Напиши скрипт для перебору масиву `fruits` циклом`for`.Для кожного елемента
// масиву виведи в консоль рядок у форматі`номер_елемента: значення_елемента`.
// Нумерація елементів має починатися з`1`.


// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(`${i + 1} - ${fruits[i]}`);
// }

// ## Example 4 - Масиви та цикли

// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача. У
// змінних `names` та `phones` зберігаються рядки імен та телефонних номерів,
//     розділені комами.Порядковий номер імен та телефонів у рядках вказують на
// відповідність.Кількість імен та телефонів гарантовано однакова.


// const names = 'Jacob, William, Solomon, Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// const namesArr = names.split(', ');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i++) {
//     console.log(`${namesArr[i]} - ${phonesArr[i]}`);
// }
// console.log();
// console.log();



// ## Example 5 - Масиви та рядки

// Напиши скрипт який виводить у консоль усі слова рядка окрім першого та
// останнього.Результуючий рядок не повинен починатися або закінчуватися символ
// пробілу.Скрипт повинен працювати для будь - якого рядка.

// const string = '   Welcome to the future   ';
// const strTrim = string.trim();
// console.log(strTrim.slice(strTrim.indexOf(' '), strTrim.lastIndexOf(' ')));

// ## Example 6 - Масиви та рядки

// Напиши скрипт, який «розгортає» рядок(зворотний порядок літер) і виводить її в
// консоль.


// const string = 'Welcome to the future';
// console.log(string.split('').toReversed().join(''));

// ## Example 7 - Сортування масиву з циклом

// Напиши скрипт сортування масиву рядків в алфавітному порядку за першою літерою
// елемент.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs.toSorted());

// ## Example 8 - Пошук елемента

// Напиши скрипт пошуку найменшого числа у масиві.Код повинен працювати для
// будь - якого масиву чисел.Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = Math.min(...numbers);
// console.log(min); // 1

// ---

//  [Kata #1](https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c)
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:
// ["Telescopes", "Glasses", "Eyes", "Monocles"]
// Your function would return the following array:
// ["Eyes", "Glasses", "Monocles", "Telescopes"]
// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


// function sortArrByLength(arr) {
//     return arr.toSorted((a, b) => a.length - b.length)
// }

// console.log(sortArrByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));



//  [Kata #2](https://www.codewars.com/kata/563cf89eb4747c5fb100001b)

// Task
// Given an array of integers, remove the smallest value.Do not mutate the original array / list.If there are multiple elements with the same value, remove the one with the lowest index.If you get an empty array / list, return an empty array / list.

//     Don't change the order of the elements that are left.

// Examples
//   * Input: [1, 2, 3, 4, 5], output = [2, 3, 4, 5]
//   * Input: [5, 3, 2, 1, 4], output = [5, 3, 2, 4]
//   * Input: [2, 2, 1, 2, 1], output = [2, 2, 2, 1]

// function findMinEl(el, i, arr) {
//     return el === Math.min(...arr);
// }

// function removeMinElement(arr) {
//     // return arr.indexOf(arr.find(el => el === Math.min(...arr)));
//     return arr.filter((el, i) => i !== arr.indexOf(arr.find(findMinEl)));
// }

// console.log(removeMinElement([1, 2, 3, 4, 5]));
// console.log(removeMinElement([5, 3, 2, 1, 4]));
// console.log(removeMinElement([2, 2, 1, 2, 1]));


//  [Kata #3](https://www.codewars.com/kata/5813d19765d81c592200001a)

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it.The start and the end number are both inclusive!

// function dontGiveMeFive(start, end) {
//     const resultArr = [];
//     for (let i = start; i <= end; i++) {
//         if (!i.toString().includes('5')) resultArr.push(i);
//     }
//     return resultArr.length;
// }

// dontGiveMeFive(1, 5);

//  [Kata #4](https://www.codewars.com/kata/62ad72443809a4006998218a)

// Story
// YouTube had a like and a dislike button, which allowed users to express their opinions about particular content.It was set up in such a way that you cannot like and dislike a video at the same time.There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press.If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state.The same is true for the other way round.

//     Task
// Create a function that takes in a list of button inputs and returns the final state.

// likeOrDislike([Dislike]) => Dislike
// likeOrDislike([Like, Like]) => Nothing
// likeOrDislike([Dislike, Like]) => Like
// likeOrDislike([Like, Dislike, Dislike]) => Nothing

// function likeOrDislike(buttons) {
//     return buttons.reduce((state, button) => button === state ? 'Nothing' : button, 'Nothing');
// }

// console.log(likeOrDislike(['Like', 'Dislike', 'Dislike']));


//  [Kata #5](https://www.codewars.com/kata/53b2ff49b82af296ce001139)



//  [Kata #6](https://www.codewars.com/kata/58f8a3a27a5c28d92e000144)

// function firstEl(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if ((arr[i + 1] - arr[i]) > 1) return arr[i + 1];
//     }
//     return null;
// }

// console.log(firstEl([1, 2, 3, 4, 5, 6, 12]));



//  [Kata #7](https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118)



//  [Kata #8](https://www.codewars.com/kata/5a905c2157c562994900009d)



//  [Kata #9](https://www.codewars.com/kata/57d814e4950d8489720008db)



//  [Kata #10](https://www.codewars.com/kata/5a2be17aee1aaefe2a000151)



//  [Kata #11](https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0)



//  [Kata #12](https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript)


