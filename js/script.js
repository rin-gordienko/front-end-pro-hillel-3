// Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

let array = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
let sum = 0;
for (let key of array) {
    if (+key) {
        sum += +key;
    }
}
alert(sum);


// Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// •	Добавьте в начало массива значение ‘Backbone.js’
// •	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// •	Добавьте в массив значение ‘CommonJS’ вторым элементом
// •	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

let frameworks = ["AngularJS", "jQuery"];
frameworks.unshift("Backbone.js");
frameworks.push("ReactJS", "Vue.js");
frameworks.splice(1,0, "CommonJS");
let oddFramework = frameworks.splice(frameworks.indexOf("jQuery"), 1);
alert(`${oddFramework} - это здесь лишнее`)
alert(frameworks);

// Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. 
// Разбейте ее на массив слов, и переставьте слова в порядке 
// ‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива (indexOf, splice ...). 
// Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.");

let firstString = "Как однажды Жак звонарь сломал фонарь головой";
stringArray = firstString.split(" ");
stringArray.splice(1,0, stringArray[2], stringArray[3]);
stringArray.splice(4,2);
stringArray.splice(5,2, stringArray[6], stringArray[5]);
let resultString = stringArray.join(" ");
alert(`Исходный - ${firstString}. \nИтог - ${resultString}.`);


// Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. 
// С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. 
// Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

let person = {
    name: "Mary",
    surname: "Stuart",
    age: "30",
}
let test = prompt("Введите интересующее поле");
if(test in person) {
    alert(`${test} ${person[test]}`);
} else {
    person[test] = prompt(`Введите значение для  ${test}`);
}


// Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), 
// не используя вспомогательные переменные. 
// Добавьте этот гаджет персоне, созданной ранее.

let phoneModel = {
  brand: prompt("Укажите бренд телефона"),
  model: prompt("Укажите модель телефона"),
  resolution: prompt("Укажите разрешение телефона"),
  color: prompt("Укажите цвет телефона"),
};
person.phoneModel = phoneModel;



// 	Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в 
//  конец созданного массива. 
//  После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let emptyArray = [];
let iterations = 6;
let sum = 0;
for (let i = 0; i < iterations; i++) {
  emptyArray.push(prompt("Enter a symbol"));
}
for (let key of emptyArray) {
  if (+key) {
    sum += +key;
  }
}
alert(`The sum of entered numbers = ${sum}`);
