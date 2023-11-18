function ElectricalDevice(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }
  
  ElectricalDevice.prototype.turnOn = function () {
    if (!this.pluggedIn) {
      this.pluggedIn = true;
      console.log(`${this.name} включен. Потребляемая мощность: ${this.power} Вт.`);
    } else {
      console.log(`${this.name} уже включен.`);
    }
  };
  
  ElectricalDevice.prototype.turnOff = function () {
    if (this.pluggedIn) {
      this.pluggedIn = false;
      console.log(`${this.name} выключен.`);
    } else {
      console.log(`${this.name} уже выключен.`);
    }
  };
  
  function DeskLamp(name, power, brightness) {
    ElectricalDevice.call(this, name, power);
    this.brightness = brightness;
  }
  
  DeskLamp.prototype = Object.create(ElectricalDevice.prototype);
  DeskLamp.prototype.constructor = DeskLamp;
  
  DeskLamp.prototype.adjustBrightness = function (level) {
    this.brightness = level;
    console.log(`${this.name}: Уровень яркости установлен на ${level}.`);
  };
  
  function Computer(name, power, processor) {
    ElectricalDevice.call(this, name, power);
    this.processor = processor;
  }
  
  Computer.prototype = Object.create(ElectricalDevice.prototype);
  Computer.prototype.constructor = Computer;
  
  Computer.prototype.runProgram = function (program) {
    console.log(`${this.name}: Запуск программы "${program}" на процессоре ${this.processor}.`);
  };
  
  const deskLamp = new DeskLamp('Настольная лампа', 25, 'Яркий');
  const computer = new Computer('Компьютер', 500, 'Intel Core i7');
  
  deskLamp.turnOn();
  computer.turnOn();
  deskLamp.turnOff();
  computer.turnOff();
  
  deskLamp.adjustBrightness('Тусклый');
  computer.runProgram('Visual Studio Code');