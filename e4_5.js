class ElectricalDevice {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  turnOn() {
    if (!this.pluggedIn) {
      this.pluggedIn = true;
      console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт.`);
    } else {
      console.log(`${this.name} уже включен.`);
    }
  }

  turnOff() {
    if (this.pluggedIn) {
      this.pluggedIn = false;
      console.log(`${this.name} выключен.`);
    } else {
      console.log(`${this.name} уже выключен.`);
    }
  }
}

class DeskLamp extends ElectricalDevice {
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }

  adjustBrightness(level) {
    this.brightness = level;
    console.log(`${this.name}: Уровень яркости установлен на ${level}.`);
  }
}

class Computer extends ElectricalDevice {
  constructor(name, power, processor) {
    super(name, power);
    this.processor = processor;
  }

  runProgram(program) {
    console.log(`${this.name}: Запуск программы "${program}" на процессоре ${this.processor}.`);
  }
}

const deskLamp = new DeskLamp('Настольная лампа', 25, 'Яркий');
const computer = new Computer('Компьютер', 500, 'Intel Core i7');

deskLamp.turnOn();
computer.turnOn();
deskLamp.turnOff();
computer.turnOff();

deskLamp.adjustBrightness('Тусклый');
computer.runProgram('Visual Studio Code');