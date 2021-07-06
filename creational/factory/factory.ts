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
  private static list: object = {
    bmw: Bmw,
    toyota: Toyota,
    mercedess: Mercedess,
  };

  public create(model: string, type: string): object {
    const carClasses = CarFactory.list[type];
    const car = new carClasses(model);
    car.type = type;
    return car;
  }
}

const factory = new CarFactory();

const bmw =  console.log(factory.create("X5", "bmw"))
const toyota =  console.log(factory.create("Camry", "toyota"))
const mercedess =  console.log(factory.create("S600", "mercedess"))
