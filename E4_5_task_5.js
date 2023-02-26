// Задание 5.
//
// Переписать консольное приложение из предыдущего юнита на классы.
//
//     Общие требования:
//      Имена классов, свойств и методов должны быть информативными;
//      Соблюдать best practices;
//      Использовать синтаксис ES6.


    class Lamp{
    constructor(location){
        this.location = location;
        this.type = 'Lamp';
        this.isOn = false;
        this.output = '80W';
    }

    turnOn() {
        this.isOn = true;

        if (!this.lightType) {
            console.log(`Lamp ${this.location} is ON`);
            console.log('This is not fluorescent lamp. Do not use it for long');
        } else {
            console.log(`Fluorescent lamp ${this.location} is ON`);
        };
    }

    turnOff() {
        this.isOn = false;
        if (!this.lightType){
            console.log(`Lamp ${this.location} is OFF`);
        } else {
            console.log(`Fluorescent Lamp ${this.location} is OFF`)
        }
    }
}

class FluorescentLamp extends Lamp{
    constructor(location){
        super(location);
        this.type = 'fluorescent lamp';
        this.output = '50W';
        this.lightType = 'fluorescent';
    }

    about(){
        console.log("A fluorescent lamp, or fluorescent tube, is a low-pressure mercury-vapor gas-discharge lamp that uses fluorescence to produce visible light. An electric current in the gas excites mercury vapor, which produces short-wave ultraviolet light that then causes a phosphor coating on the inside of the lamp to glow.")
    }
}

const kitchenLamp = new Lamp('in kitchen');
kitchenLamp.turnOn();
kitchenLamp.turnOff();

const gardenLamp = new FluorescentLamp('in Garden');
gardenLamp.turnOn();
gardenLamp.turnOff();
gardenLamp.about();