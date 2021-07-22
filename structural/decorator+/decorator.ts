// структурный паттерн проектирования, который позволяет динамически добавлять
// объектам новую функциональность, оборачивая их
interface СoffeeHouse {
    getDescription(): string;
}
class Cofee implements СoffeeHouse {
    getDescription(): string {
        return `Cofee!`;
    }
}
class Decorator implements СoffeeHouse {
    protected cofee: Cofee; // виден только в классе наследнике
    constructor(cofee: Cofee) {
        this.cofee = cofee;
    }
    public getDescription(): string {
        return this.cofee.getDescription();
    }
}
class Americano extends Decorator {
    public getDescription(): string {
        return `${super.getDescription()} + milk`;
    }
}
class Capucinno extends Decorator {
    public getDescription(): string {
        return `${super.getDescription()} + strong Cofee`;
    }
}

//test
let cofee = new Cofee();
console.log(cofee.getDescription());
let americano = new Americano(cofee);
console.log(americano.getDescription());
let capucinno = new Capucinno(americano);
console.log(capucinno.getDescription());