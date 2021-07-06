abstract class Coffee {
    public description: string;

    public getDescription(): string {
        return this.description;
    };

    public abstract cost(): number;
}

abstract class CoffeeDecorator extends Coffee {
    public decoratedCoffee: Coffee;
    public abstract getDescription(): string;
}


class Espresso extends Coffee {
    public description = "Espresso";

    public cost(): number {
        return 1.99;
    }
}

class Americano extends Coffee {
    public description = "House blend";

    public cost(): number {
        return .99
    }
}


class Sugar extends CoffeeDecorator {
    constructor(beverage: Coffee) {
        super();
        this.decoratedCoffee = beverage;
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ', Sugar';
    }

    public cost(): number {
        return this.decoratedCoffee.cost() + 0.20;
    }
}

class Milk extends CoffeeDecorator {
    constructor(beverage: Coffee) {
        super();
        this.decoratedCoffee = beverage;
    }

    public getDescription(): string {
        return this.decoratedCoffee.getDescription() + ', Milk';
    }

    public cost(): number {
        return this.decoratedCoffee.cost() + 0.20;
    }
}


let coffee = new Espresso();
coffee = new Sugar(coffee);
coffee = new Milk(coffee);

console.log(coffee.cost());
console.log(coffee.getDescription());