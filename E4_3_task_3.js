// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

function createEmptyObject() {
    // or return new Object();
    return {};
}

const obj = createEmptyObject();
console.log(typeof obj);
obj.name = 'Lex';
console.log(obj);