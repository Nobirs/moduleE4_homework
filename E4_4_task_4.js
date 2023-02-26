// Задание 4.
//
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//
//     Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
//
//     Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.
//
//     План:
//
// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
//     Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
//     У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//     Создать экземпляры каждого прибора.
//     Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
// Общие требования:
//
//     Имена функций, свойств и методов должны быть информативными.
//     Соблюдать best practices:
//     использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
//     информативные имена (а не a, b);
//     четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
//     использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.

function Lamp(location) {
    this.location = location;
    this.type = 'Lamp';
    this.isOn = false;
    this.output = '80W';
}

Lamp.prototype.turnOn = function(){
    this.isOn = true;

    if (!this.lightType) {
        console.log(`Lamp ${this.location} is ON`);
        console.log('This is not fluorescent lamp. Do not use it for long');
    } else {
        console.log(`Fluorescent lamp ${this.location} is ON`);
    };
};

Lamp.prototype.turnOff = function() {
    this.isOn = false;
    console.log(`Lamp ${this.location} is OFF`);
};

function  FluorescentLamp(location) {
    this.location = location;
    this.type = 'fluorescent lamp';
    this.output = '50W';
    this.lightType = 'fluorescent';
}

FluorescentLamp.prototype = new Lamp();

FluorescentLamp.prototype.turnOff = function() {
    this.isOn = false;
    console.log(`Fluorescent Lamp ${this.location} is OFF`);
};


const kitchenLamp = new Lamp('in kitchen');
kitchenLamp.turnOn();
kitchenLamp.turnOff();

const gardenLamp = new FluorescentLamp('in Garden');
gardenLamp.turnOn();
gardenLamp.turnOff();