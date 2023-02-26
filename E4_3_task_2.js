// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function hasProperty(prop, obj) {
    if (prop in obj) { return true; }
    else { return false; }
}

const person = {
    'city': 'Moscow',
};

const student = Object.create(person);
student.ownCity = 'Piter';
student.name = 'Lex';

console.log(hasProperty('name', student));
console.log(hasProperty('surname', student));