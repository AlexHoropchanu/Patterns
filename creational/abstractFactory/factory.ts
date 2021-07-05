class AbstractCarFactory {
  createPremiumCar(product) {
    return new AbstractPremiumCar(product);
  }
  createSportCar(product) {
    return new AbstractSportCar(product);
  }
}

 class AbstractPremiumCar {
  constructor(public model: string, public type: string = "Premium car") {
  }
}

 class AbstractSportCar {
  constructor(public model: string, public type: string = "Sport car") {
  }
}

// Concrete #1
class ToyotaFactory extends AbstractCarFactory {
  createPremiumCar(model) {
    return new ToyotaPremiumCar(model);
  }

  createSportCar(model) {
    return new ToyotaSportCar(model);
  }
}
 class ToyotaPremiumCar extends AbstractPremiumCar {
  constructor(model) {
    super(model);
  }
}
class ToyotaSportCar extends AbstractSportCar {
  constructor(model) {
    super(model);
  }
}
// Concrete #2
class BmwFactory extends AbstractCarFactory {
  createPremiumCar(model) {
    return new BmwPremiumCar(model);
  }

  createSportCar(model) {
    return new BmwSportCar(model);
  }
}
class BmwPremiumCar extends AbstractPremiumCar {
  constructor(model) {
    super(model);
  }
}
class BmwSportCar extends AbstractSportCar {
  constructor(model) {
    super(model);
  }
}
let a = new BmwFactory();
console.log(a.createPremiumCar("x7"));
let b = new ToyotaFactory();
console.log(b.createSportCar("corola"));
