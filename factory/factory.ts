class Bmw {
  constructor(private model: string, private cost: number = 50) {
  }
}

class Toyota {
   constructor(private model: string, private cost: number = 100) {
  }
}

class Mercedess {
   constructor(private model: string, private cost: number = 150) {
  }
}

class CarFactory {
  static list: object = {
    bmw: Bmw,
    toyota: Toyota,
    mercedess: Mercedess,
  };

  create(model, type): object {
    const carClasses = CarFactory.list[type];
    const cars = new carClasses(model);
    cars.type = type;
    return cars;
  }
}

const factory = new CarFactory();

const bmw =  console.log(factory.create("X5", "bmw"))
const toyota =  console.log(factory.create("Camry", "toyota"))
const mercedess =  console.log(factory.create("S600", "mercedess"))
